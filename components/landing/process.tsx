"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { SectionShell } from "@/components/landing/section-shell"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { servicesHref } from "@/lib/navigation"
import { ease } from "@/lib/motion"
import { serviceProcess } from "@/lib/services"

export function Process() {
  return (
    <SectionShell>
      <Reveal className="mb-12">
        <SectionHeader
          eyebrow="How we work"
          title="From idea to production"
          description="A structured, collaborative approach — from product discovery through launch and iteration."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {serviceProcess.map((step, index) => (
          <Reveal key={step.step} delay={index * 100}>
            <motion.div
              className="h-full space-y-3 rounded-xl border border-border/50 bg-card/60 p-6"
              whileHover={{
                y: -2,
                borderColor: "oklch(from var(--jaura-accent) l c h / 0.25)",
              }}
              transition={{ duration: 0.35, ease }}
            >
              <div className="font-mono text-sm text-primary">{step.step}</div>
              <h3 className="text-base font-medium">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-10 text-center">
        <Button variant="ghost" asChild>
          <Link href={servicesHref}>
            Learn more about our services
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </Reveal>
    </SectionShell>
  )
}
