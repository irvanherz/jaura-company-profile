"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { contactHref, productsHref } from "@/lib/navigation"
import { fadeUp, glowOrb, staggerContainer } from "@/lib/motion"
import { site } from "@/lib/site"

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="hero-fullscreen relative flex flex-col overflow-hidden jaura-grid-bg">
      <motion.div
        className="jaura-glow-orb -top-32 left-1/4 size-96 bg-[var(--jaura-glow)]"
        aria-hidden
        animate={reducedMotion ? undefined : glowOrb.animate}
        transition={{ ...glowOrb.transition, duration: 14 }}
      />
      <motion.div
        className="jaura-glow-orb top-1/3 -right-24 size-80 bg-[var(--jaura-accent-secondary)] opacity-20"
        aria-hidden
        animate={reducedMotion ? undefined : glowOrb.animate}
        transition={{ ...glowOrb.transition, duration: 18, delay: 2 }}
      />
      <motion.div
        className="jaura-glow-orb bottom-0 left-1/2 size-72 -translate-x-1/2 bg-[var(--jaura-accent)] opacity-10"
        aria-hidden
        animate={reducedMotion ? undefined : glowOrb.animate}
        transition={{ ...glowOrb.transition, duration: 22, delay: 4 }}
      />

      <motion.div
        className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-8 px-6 pb-12 pt-[var(--header-height)]"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="relative w-fit">
          <motion.div
            className="pointer-events-none absolute -inset-1 rounded-full border border-[var(--jaura-accent)]/30"
            aria-hidden
            animate={
              reducedMotion
                ? undefined
                : { scale: [0.95, 1.08, 0.95], opacity: [0.5, 0, 0.5] }
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="relative inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
            whileHover={{
              borderColor: "oklch(from var(--jaura-accent) l c h / 0.4)",
            }}
          >
            <motion.span
              animate={
                reducedMotion
                  ? undefined
                  : { rotate: [0, 12, 0], scale: [1, 1.15, 1] }
              }
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="size-3.5 text-[var(--jaura-accent)]" />
            </motion.span>
            {site.tagline}
          </motion.div>
        </motion.div>

        <div className="max-w-3xl space-y-6">
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            We build{" "}
            <span className="jaura-gradient-text">digital solutions</span> and
            agentic products that ship
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {site.legalName} ({site.name}) is a technology company
            headquartered in {site.headquarters}, delivering custom software,
            cloud infrastructure, and AI-powered systems — including our own
            products Storydusk and Resumelike.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" asChild>
              <Link href={contactHref} className="group">
                Get in touch
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" variant="outline" asChild>
              <Link href={productsHref}>Explore our products</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="jaura-shimmer-border" aria-hidden />
    </section>
  )
}
