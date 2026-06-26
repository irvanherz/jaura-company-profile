"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { ServiceIconGlyph } from "@/components/services/service-icon"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { servicesHref } from "@/lib/navigation"
import { cardHover, ease } from "@/lib/motion"
import { services } from "@/lib/services"

const previewServices = services.slice(0, 4)

export function Services() {
  return (
    <section id="services" className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-12">
          <SectionHeader
            eyebrow="What we do"
            title="IT digital solutions, end to end"
            description="App consultation, web & mobile development, automation, AI, and more — from first idea to production."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <motion.div
                whileHover={cardHover}
                transition={{ duration: 0.35, ease }}
                className="h-full"
              >
                <Card className="group h-full border-border/60 bg-card/80 transition-colors hover:border-[var(--jaura-accent)]/30 hover:shadow-[0_24px_48px_-16px_var(--jaura-glow)]">
                  <CardHeader>
                    <motion.div
                      className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[var(--jaura-glow)] text-[var(--jaura-accent)]"
                      whileHover={{
                        scale: 1.1,
                        rotate: 6,
                        backgroundColor: "var(--jaura-accent)",
                        color: "var(--primary-foreground)",
                        boxShadow: "0 0 24px var(--jaura-glow)",
                      }}
                      transition={{ duration: 0.35, ease }}
                    >
                      <ServiceIconGlyph icon={service.icon} className="size-5" />
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button variant="outline" size="lg" asChild>
              <Link href={servicesHref}>
                View all services
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
