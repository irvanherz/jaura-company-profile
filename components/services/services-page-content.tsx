"use client"

import { ArrowRight, Check } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { ServiceIconGlyph } from "@/components/services/service-icon"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { contactHref } from "@/lib/navigation"
import { useMounted } from "@/hooks/use-mounted"
import { cardHover, ease, fadeUp, glowOrb, staggerContainer } from "@/lib/motion"
import { serviceProcess, services, servicesIntro } from "@/lib/services"
import { site } from "@/lib/site"

export function ServicesPageContent() {
  const reducedMotion = useReducedMotion()
  const mounted = useMounted()
  const animateHero = mounted && !reducedMotion
  const featured = services.find((service) => service.featured)
  const rest = services.filter((service) => !service.featured)

  return (
    <>
      <section className="relative -mt-[var(--header-height)] overflow-hidden jaura-grid-bg border-b border-border/60 pt-[var(--header-height)]">
        <motion.div
          className="jaura-glow-orb -top-32 left-1/4 size-96 bg-[var(--jaura-glow)]"
          aria-hidden
          animate={reducedMotion ? undefined : glowOrb.animate}
          transition={{ ...glowOrb.transition, duration: 16 }}
        />

        <motion.div
          className="relative mx-auto max-w-6xl px-6 pt-below-header pb-24 md:pb-32"
          initial={animateHero ? "hidden" : false}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Badge
              variant="outline"
              className="mb-4 border-primary/25 text-primary"
            >
              Our services
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl"
          >
            Digital services for teams who want to{" "}
            <span className="jaura-gradient-text">build cool apps</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {servicesIntro}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" asChild>
                <Link href={contactHref}>
                  Start your project
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {featured ? (
        <section className="border-b border-border/60 bg-muted/20">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal className="mb-10 max-w-2xl">
              <Badge
                variant="outline"
                className="mb-3 border-primary/25 text-primary"
              >
                What we build
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Web and mobile apps that feel great
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                This is our main focus — polished apps built with modern tools,
                shipped with care. Consultation is available too if you want
                input before development starts.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <FeaturedServiceCard service={featured} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="mb-12 max-w-2xl">
            <Badge
              variant="outline"
              className="mb-3 border-primary/25 text-primary"
            >
              What we offer
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Full-stack digital capabilities
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Web, mobile, automation, AI, cloud, and strategy — plus app
              consultation when you need guidance before building.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="mb-12 max-w-2xl">
            <Badge
              variant="outline"
              className="mb-3 border-primary/25 text-primary"
            >
              How we work
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A clear path from idea to production
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceProcess.map((item, index) => (
              <Reveal key={item.step} delay={index * 100}>
                <motion.div
                  className="space-y-3 rounded-xl border border-border/40 bg-card/50 p-6"
                  whileHover={{
                    y: -4,
                    borderColor: "oklch(from var(--jaura-accent) l c h / 0.25)",
                  }}
                  transition={{ duration: 0.35, ease }}
                >
                  <div className="font-mono text-sm text-primary">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal direction="none">
            <motion.div
              className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/40 via-card to-[var(--jaura-glow)] px-8 py-14 text-center md:px-16"
              whileHover={{
                borderColor: "oklch(from var(--jaura-accent) l c h / 0.3)",
              }}
              transition={{ duration: 0.4, ease }}
            >
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Ready to start your project?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground text-pretty">
                Tell us what you&apos;re building — we&apos;ll help you figure
                out the right approach, timeline, and tech stack.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" asChild>
                    <Link href={contactHref}>Get in touch</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">About {site.name}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function FeaturedServiceCard({
  service,
}: {
  service: (typeof services)[number]
}) {
  return (
    <motion.div whileHover={cardHover} transition={{ duration: 0.35, ease }}>
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-[var(--jaura-glow)]">
        <div className="grid gap-0 lg:grid-cols-2">
          <CardHeader className="p-8">
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_32px_var(--jaura-glow)]">
              <ServiceIconGlyph icon={service.icon} className="size-6" />
            </div>
            <CardTitle className="text-2xl">{service.title}</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center border-t border-border/60 bg-muted/20 p-8 lg:border-t-0 lg:border-l">
            <p className="mb-4 text-sm font-medium">What&apos;s included</p>
            <ul className="space-y-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link href={contactHref}>
                  Discuss your app
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <motion.div
      whileHover={cardHover}
      transition={{ duration: 0.35, ease }}
      className="h-full"
    >
      <Card className="jaura-card-hover group h-full border-border/60 bg-card/80">
        <CardHeader>
          <motion.div
            className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[var(--jaura-glow)] text-primary"
            whileHover={{
              scale: 1.1,
              rotate: 6,
              backgroundColor: "var(--jaura-accent)",
              color: "var(--primary-foreground)",
            }}
            transition={{ duration: 0.35, ease }}
          >
            <ServiceIconGlyph icon={service.icon} className="size-5" />
          </motion.div>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription className="leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
