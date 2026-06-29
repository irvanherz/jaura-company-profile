"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { contactHref, productsHref } from "@/lib/navigation"
import { useMounted } from "@/hooks/use-mounted"
import { fadeUp, glowOrb, staggerContainer } from "@/lib/motion"
import { formatProductNames, site } from "@/lib/site"

export function Hero() {
  const mounted = useMounted()
  const reducedMotion = useReducedMotion()
  const animateContent = mounted && !reducedMotion

  return (
    <section className="hero-fullscreen relative flex flex-col overflow-hidden jaura-grid-bg">
      <motion.div
        className="jaura-glow-orb -top-32 left-1/4 size-96 bg-[var(--jaura-glow)]"
        aria-hidden
        animate={reducedMotion ? undefined : glowOrb.animate}
        transition={{ ...glowOrb.transition, duration: 14 }}
      />
      <motion.div
        className="jaura-glow-orb top-1/3 -right-24 size-80 bg-[var(--jaura-accent-secondary)] opacity-15"
        aria-hidden
        animate={reducedMotion ? undefined : glowOrb.animate}
        transition={{ ...glowOrb.transition, duration: 18, delay: 2 }}
      />

      <motion.div
        className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-8 px-6 pb-16 pt-[var(--header-height)]"
        initial={animateContent ? "hidden" : false}
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <Badge
            variant="outline"
            className="h-auto border-primary/25 bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
          >
            {site.tagline}
          </Badge>
        </motion.div>

        <div className="max-w-3xl space-y-5">
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            We build{" "}
            <span className="jaura-gradient-text">web and mobile products</span>{" "}
            that ship
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            A product studio based in {site.headquarters}. We design and develop
            applications for clients — and operate our own platforms,{" "}
            {formatProductNames()}.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3"
        >
          <Button size="lg" asChild>
            <Link href={contactHref} className="group">
              Get in touch
              <ArrowRight
                data-icon="inline-end"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={productsHref}>View our products</Link>
          </Button>
        </motion.div>
      </motion.div>

      <a
        href="#stats"
        className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to learn more"
      >
        <span className="sr-only">Scroll down</span>
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </a>

      <div className="jaura-shimmer-border" aria-hidden />
    </section>
  )
}
