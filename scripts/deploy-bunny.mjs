#!/usr/bin/env node

import { spawn } from "node:child_process"
import { createReadStream } from "node:fs"
import { readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, "..")
const outDir = path.join(projectRoot, "out")

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json",
}

function parseArgs(argv) {
  return {
    skipBuild: argv.includes("--skip-build"),
    dryRun: argv.includes("--dry-run"),
    purge: !argv.includes("--no-purge"),
  }
}

function loadEnvFile() {
  const envPath = path.join(projectRoot, ".env")
  return readFile(envPath, "utf8")
    .then((content) => {
      for (const line of content.split("\n")) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith("#")) {
          continue
        }

        const separator = trimmed.indexOf("=")
        if (separator === -1) {
          continue
        }

        const key = trimmed.slice(0, separator).trim()
        let value = trimmed.slice(separator + 1).trim()

        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1)
        }

        if (!(key in process.env)) {
          process.env[key] = value
        }
      }
    })
    .catch(() => {})
}

function getConfig() {
  const storageZone = process.env.BUNNY_STORAGE_ZONE
  const accessKey = process.env.BUNNY_STORAGE_ACCESS_KEY
  const region = process.env.BUNNY_STORAGE_REGION?.trim()
  const remotePath = process.env.BUNNY_STORAGE_PATH?.replace(/^\/+|\/+$/g, "") ?? ""
  const concurrency = Number(process.env.BUNNY_UPLOAD_CONCURRENCY ?? "8")
  const pullZoneId = process.env.BUNNY_PULL_ZONE_ID
  const apiKey = process.env.BUNNY_API_KEY

  if (!storageZone) {
    throw new Error("Missing BUNNY_STORAGE_ZONE in environment or .env")
  }

  if (!accessKey) {
    throw new Error("Missing BUNNY_STORAGE_ACCESS_KEY in environment or .env")
  }

  const host = region ? `${region}.storage.bunnycdn.com` : "storage.bunnycdn.com"
  const baseUrl = `https://${host}/${storageZone}`

  return {
    storageZone,
    accessKey,
    baseUrl,
    remotePath,
    concurrency: Number.isFinite(concurrency) && concurrency > 0 ? concurrency : 8,
    pullZoneId,
    apiKey,
  }
}

function encodeRemotePath(relativePath) {
  return relativePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
}

function getMimeType(filePath) {
  return MIME_TYPES[path.extname(filePath).toLowerCase()] ?? "application/octet-stream"
}

async function collectFiles(dir) {
  const entries = await stat(dir).then((info) => {
    if (!info.isDirectory()) {
      return []
    }
    return import("node:fs/promises").then((fs) => fs.readdir(dir, { withFileTypes: true }))
  })

  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)))
      continue
    }

    if (entry.isFile()) {
      if (entry.name === ".gitkeep") {
        continue
      }
      files.push(fullPath)
    }
  }

  return files
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("pnpm", ["build"], {
      cwd: projectRoot,
      stdio: "inherit",
      shell: false,
    })

    child.on("error", reject)
    child.on("close", (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`Build failed with exit code ${code}`))
    })
  })
}

async function uploadFile(config, localPath, remoteRelativePath, dryRun) {
  const encodedPath = encodeRemotePath(remoteRelativePath)
  const prefix = config.remotePath ? `${config.remotePath}/` : ""
  const url = `${config.baseUrl}/${prefix}${encodedPath}`
  const contentType = getMimeType(localPath)

  if (dryRun) {
    console.log(`[dry-run] PUT ${url}`)
    return
  }

  const body = createReadStream(localPath)
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      AccessKey: config.accessKey,
      "Content-Type": contentType,
    },
    body,
    duplex: "half",
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => "")
    throw new Error(
      `Upload failed for ${remoteRelativePath} (HTTP ${response.status})${errorText ? `: ${errorText}` : ""}`
    )
  }
}

async function uploadAll(config, files, dryRun) {
  let completed = 0
  let failed = 0
  const total = files.length
  let index = 0

  async function worker() {
    while (index < files.length) {
      const current = files[index]
      index += 1

      const relativePath = path.relative(outDir, current).split(path.sep).join("/")

      try {
        await uploadFile(config, current, relativePath, dryRun)
        completed += 1
        console.log(`[${completed}/${total}] ${relativePath}`)
      } catch (error) {
        failed += 1
        console.error(`[failed] ${relativePath}`)
        console.error(error instanceof Error ? error.message : error)
      }
    }
  }

  const workers = Array.from(
    { length: Math.min(config.concurrency, files.length) },
    () => worker()
  )

  await Promise.all(workers)

  if (failed > 0) {
    throw new Error(`${failed} file(s) failed to upload`)
  }
}

async function purgeCdn(config) {
  if (!config.pullZoneId || !config.apiKey) {
    console.log("Skipping CDN purge (set BUNNY_PULL_ZONE_ID and BUNNY_API_KEY to enable).")
    return
  }

  const response = await fetch(
    `https://api.bunny.net/pullzone/${config.pullZoneId}/purgeCache`,
    {
      method: "POST",
      headers: {
        AccessKey: config.apiKey,
        "Content-Type": "application/json",
      },
    }
  )

  if (!response.ok) {
    const errorText = await response.text().catch(() => "")
    throw new Error(
      `CDN purge failed (HTTP ${response.status})${errorText ? `: ${errorText}` : ""}`
    )
  }

  console.log("CDN cache purged.")
}

async function main() {
  const args = parseArgs(process.argv.slice(2))

  await loadEnvFile()
  const config = getConfig()

  if (!args.skipBuild) {
    console.log("Building static site...")
    await runBuild()
  }

  const outStat = await stat(outDir).catch(() => null)
  if (!outStat?.isDirectory()) {
    throw new Error(`Output directory not found: ${outDir}. Run pnpm build first.`)
  }

  const files = await collectFiles(outDir)
  if (files.length === 0) {
    throw new Error(`No files found in ${outDir}`)
  }

  console.log(
    `Uploading ${files.length} file(s) to Bunny Storage zone "${config.storageZone}"...`
  )

  await uploadAll(config, files, args.dryRun)

  if (!args.dryRun && args.purge) {
    await purgeCdn(config)
  }

  console.log("Deploy complete.")
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
