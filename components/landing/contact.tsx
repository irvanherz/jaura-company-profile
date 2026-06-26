"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/lib/navigation"
import { ease, glowOrb } from "@/lib/motion"
import { site } from "@/lib/site"

export function Contact() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal direction="none">
          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-muted/40 via-card to-[var(--jaura-glow)] px-8 py-16 text-center md:px-16"
            whileHover={{
              borderColor: "oklch(from var(--jaura-accent) l c h / 0.3)",
              boxShadow: "0 32px 64px -24px var(--jaura-glow)",
            }}
            transition={{ duration: 0.5, ease }}
          >
            <motion.div
              className="jaura-glow-orb -top-20 left-1/2 size-64 -translate-x-1/2 bg-[var(--jaura-accent)] opacity-20"
              aria-hidden
              animate={reducedMotion ? undefined : glowOrb.animate}
              transition={{ ...glowOrb.transition, duration: 18, delay: 1 }}
            />
            <div className="relative mx-auto max-w-2xl space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Ready to build something{" "}
                <span className="jaura-gradient-text">intelligent</span>?
              </h2>
              <p className="text-muted-foreground text-pretty">
                Tell us about your project — whether it&apos;s a new product,
                platform migration, or agentic system. We&apos;d love to hear
                from you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <Link href={contactHref}>
                      <Mail data-icon="inline-start" />
                      Contact us
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild>
                    <a href={`tel:${site.phone}`}>
                      <Phone data-icon="inline-start" />
                      {site.phoneDisplay}
                    </a>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="pt-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="ghost" asChild>
                  <Link href={contactHref}>
                    View all contact details
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
