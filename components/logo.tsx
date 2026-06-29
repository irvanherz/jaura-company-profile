import Link from "next/link"

import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  iconClassName?: string
  nameClassName?: string
  showName?: boolean
  /** Short brand name or full legal company name */
  nameVariant?: "brand" | "legal"
  gradientName?: boolean
}

export function Logo({
  className,
  iconClassName,
  nameClassName,
  showName = true,
  nameVariant = "brand",
  gradientName = false,
}: LogoProps) {
  const displayName =
    nameVariant === "legal" ? site.legalName : site.name

  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "inline-flex min-w-0 items-center gap-2.5 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <img
        src="/logo.svg"
        alt=""
        width={32}
        height={32}
        className={cn("size-8 shrink-0", iconClassName)}
      />
      {showName ? (
        <span
          className={cn(
            "min-w-0 font-semibold leading-snug tracking-tight",
            gradientName
              ? "jaura-gradient-text"
              : "text-foreground",
            nameClassName
          )}
        >
          {displayName}
        </span>
      ) : null}
    </Link>
  )
}
