"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { SectionShell } from "@/components/landing/section-shell"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/lib/navigation"
import { ease, glowOrb } from "@/lib/motion"
import { site } from "@/lib/site"

export function Contact() {
  const reducedMotion = useReducedMotion()

  return (
    <SectionShell id="contact" muted innerClassName="py-20 md:py-28">
      <Reveal direction="none">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-primary/5 px-8 py-14 text-center md:px-16 md:py-16"
          whileHover={{
            borderColor: "oklch(from var(--jaura-accent) l c h / 0.3)",
          }}
          transition={{ duration: 0.4, ease }}
        >
          <motion.div
            className="jaura-glow-orb -top-20 left-1/2 size-64 -translate-x-1/2 bg-[var(--jaura-accent)] opacity-15"
            aria-hidden
            animate={reducedMotion ? undefined : glowOrb.animate}
            transition={{ ...glowOrb.transition, duration: 18, delay: 1 }}
          />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Ready to discuss your{" "}
              <span className="jaura-gradient-text">next product</span>?
            </h2>
            <p className="text-muted-foreground text-pretty">
              Share your requirements — whether you are launching a new
              application, extending an existing platform, or exploring an
              agentic product. Our team will respond promptly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href={contactHref}>
                  <Mail data-icon="inline-start" />
                  Contact us
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${site.phone}`}>
                  <Phone data-icon="inline-start" />
                  {site.phoneDisplay}
                </a>
              </Button>
            </div>
            <Button variant="ghost" asChild>
              <Link href={contactHref}>
                View all contact details
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Reveal>
    </SectionShell>
  )
}
