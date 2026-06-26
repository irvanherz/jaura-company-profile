"use client"

import { motion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { servicesHref } from "@/lib/navigation"
import { ease } from "@/lib/motion"
import { serviceProcess } from "@/lib/services"

export function Process() {
  return (
    <section className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-12">
          <SectionHeader
            eyebrow="How we work"
            title="From idea to production"
            description="A clear, collaborative process — whether you're starting with a consultation or a full build."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceProcess.map((step, index) => (
            <Reveal key={step.step} delay={index * 100}>
              <motion.div
                className="relative space-y-3 rounded-xl border border-border/40 bg-card/50 p-6"
                whileHover={{
                  y: -4,
                  borderColor: "oklch(from var(--jaura-accent) l c h / 0.25)",
                }}
                transition={{ duration: 0.35, ease }}
              >
                <div className="font-mono text-sm text-[var(--jaura-accent)]">
                  {step.step}
                </div>
                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <Button variant="ghost" asChild>
            <Link href={servicesHref}>Learn more about our services →</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
