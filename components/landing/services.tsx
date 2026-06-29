"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { SectionShell } from "@/components/landing/section-shell"
import { ServiceIconGlyph } from "@/components/services/service-icon"
import { Button } from "@/components/ui/button"
import {
  Card,
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
    <SectionShell id="services">
      <Reveal className="mb-12">
        <SectionHeader
          eyebrow="Services"
          title="Product engineering, end to end"
          description="Web and mobile development, automation, and AI — from initial build through production. Consultation is available when you need guidance before development."
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
              <Card className="jaura-card-hover h-full border-border/60 bg-card/80">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ServiceIconGlyph icon={service.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-10 text-center">
        <Button variant="outline" size="lg" asChild>
          <Link href={servicesHref}>
            View all services
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </Reveal>
    </SectionShell>
  )
}
