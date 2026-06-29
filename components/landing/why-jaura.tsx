"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { SectionShell } from "@/components/landing/section-shell"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { aboutHref } from "@/lib/navigation"
import { ease } from "@/lib/motion"
import { site } from "@/lib/site"

export function WhyJaura() {
  return (
    <SectionShell id="why" muted>
      <Reveal className="mb-12">
        <SectionHeader
          eyebrow={`Why ${site.name}`}
          title="A product studio that ships"
          description="We build client applications and operate our own products — with the same engineering standards across both."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {site.values.map((value, index) => (
          <Reveal key={value.title} delay={index * 120}>
            <motion.div
              className="h-full space-y-3 rounded-xl border border-border/50 bg-card/60 p-6"
              whileHover={{
                y: -2,
                borderColor: "oklch(from var(--jaura-accent) l c h / 0.25)",
              }}
              transition={{ duration: 0.35, ease }}
            >
              <div className="font-mono text-sm text-primary">
                0{index + 1}
              </div>
              <h3 className="text-base font-medium">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
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
    </SectionShell>
  )
}
