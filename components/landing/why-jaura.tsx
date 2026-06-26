"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { aboutHref } from "@/lib/navigation"
import { ease } from "@/lib/motion"
import { site } from "@/lib/site"

export function WhyJaura() {
  return (
    <section id="why" className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-12">
          <SectionHeader
            eyebrow={`Why ${site.name}`}
            title="A tech partner that builds, not just advises"
            description={`${site.legalName} combines client delivery with products we run ourselves.`}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {site.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 120}>
              <motion.div
                className="space-y-3 rounded-xl border border-border/40 bg-card/50 p-6"
                whileHover={{
                  y: -4,
                  borderColor: "oklch(from var(--jaura-accent) l c h / 0.25)",
                }}
                transition={{ duration: 0.35, ease }}
              >
                <div className="font-mono text-sm text-[var(--jaura-accent)]">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-medium">{value.title}</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  {value.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <Button variant="ghost" asChild>
            <Link href={aboutHref}>
              Learn more about us
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
