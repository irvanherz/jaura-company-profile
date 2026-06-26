"use client"

import { ArrowUpRight, Building2, Mail, MapPin, Phone } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cardHover, ease, fadeUp, glowOrb, staggerContainer } from "@/lib/motion"
import { formatAddress, site } from "@/lib/site"

const mapsQuery = encodeURIComponent(formatAddress())
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

const contactMethods = [
  {
    title: "Email",
    description: "For project inquiries, partnerships, and general questions.",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    title: "Phone",
    description: "Reach us directly during business hours.",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    icon: Phone,
    external: false,
  },
  {
    title: "Office",
    description: "Our headquarters in Tulungagung, East Java.",
    value: formatAddress(),
    href: mapsUrl,
    icon: MapPin,
    external: true,
  },
] as const

export function ContactPageContent() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <section className="relative -mt-[var(--header-height)] overflow-hidden jaura-grid-bg border-b border-border/60 pt-[var(--header-height)]">
        <motion.div
          className="jaura-glow-orb -top-32 left-1/3 size-96 bg-[var(--jaura-glow)]"
          aria-hidden
          animate={reducedMotion ? undefined : glowOrb.animate}
          transition={{ ...glowOrb.transition, duration: 16 }}
        />

        <motion.div
          className="relative mx-auto max-w-6xl px-6 pt-below-header pb-24 md:pb-32"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-medium text-[var(--jaura-accent)]"
          >
            Contact us
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl"
          >
            Let&apos;s talk about your{" "}
            <span className="jaura-gradient-text">next project</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Whether you need app consultation, a full build, or want to learn
            more about our products — {site.legalName} is here to help.
          </motion.p>
        </motion.div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            {contactMethods.map((method, index) => (
              <Reveal key={method.title} delay={index * 100}>
                <ContactMethodCard method={method} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="space-y-6">
                <p className="text-sm font-medium text-[var(--jaura-accent)]">
                  Visit us
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Headquarters
                </h2>
                <address className="space-y-1 not-italic leading-relaxed text-muted-foreground">
                  <p className="font-medium text-foreground">
                    {site.legalName}
                  </p>
                  <p>{site.address.street}</p>
                  <p>{site.address.village}</p>
                  <p>{site.address.district}</p>
                  <p>{site.address.regency}</p>
                  <p>
                    {site.address.province}, {site.address.country}
                  </p>
                </address>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" asChild>
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                      <ArrowUpRight data-icon="inline-end" />
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <Card className="border-border/60 bg-gradient-to-br from-card to-muted/30">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[var(--jaura-glow)] text-[var(--jaura-accent)]">
                    <Building2 className="size-5" />
                  </div>
                  <CardTitle>Quick contact</CardTitle>
                  <CardDescription>
                    The fastest ways to reach our team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ContactRow
                    icon={Mail}
                    label="Email"
                    href={`mailto:${site.email}`}
                    value={site.email}
                  />
                  <ContactRow
                    icon={Phone}
                    label="Phone"
                    href={`tel:${site.phone}`}
                    value={site.phoneDisplay}
                  />
                  <div className="pt-4">
                    <Button className="w-full" asChild>
                      <a href={`mailto:${site.email}`}>
                        Send us an email
                        <ArrowUpRight data-icon="inline-end" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
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
                Not sure what you need?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground text-pretty">
                Start with a free app consultation — we&apos;ll help you figure
                out scope, timeline, and the right approach.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" asChild>
                    <Link href="/services">View our services</Link>
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

function ContactMethodCard({
  method,
}: {
  method: (typeof contactMethods)[number]
}) {
  const Icon = method.icon

  return (
    <motion.div
      whileHover={cardHover}
      transition={{ duration: 0.35, ease }}
      className="h-full"
    >
      <Card className="group h-full border-border/60 bg-card/80 hover:border-[var(--jaura-accent)]/30 hover:shadow-[0_24px_48px_-16px_var(--jaura-glow)]">
        <CardHeader>
          <motion.div
            className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[var(--jaura-glow)] text-[var(--jaura-accent)]"
            whileHover={{
              scale: 1.1,
              backgroundColor: "var(--jaura-accent)",
              color: "var(--primary-foreground)",
            }}
            transition={{ duration: 0.35, ease }}
          >
            <Icon className="size-5" />
          </motion.div>
          <CardTitle>{method.title}</CardTitle>
          <CardDescription>{method.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <a
            href={method.href}
            target={method.external ? "_blank" : undefined}
            rel={method.external ? "noopener noreferrer" : undefined}
            className="text-sm leading-relaxed text-[var(--jaura-accent)] transition-opacity hover:opacity-80"
          >
            {method.value}
            {method.external ? (
              <span className="sr-only"> (opens in new tab)</span>
            ) : null}
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ContactRow({
  icon: Icon,
  label,
  href,
  value,
}: {
  icon: typeof Mail
  label: string
  href: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/20 p-4">
      <Icon className="mt-0.5 size-4 shrink-0 text-[var(--jaura-accent)]" />
      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {label}
        </p>
        <a
          href={href}
          className="mt-1 block truncate text-sm font-medium transition-colors hover:text-[var(--jaura-accent)]"
        >
          {value}
        </a>
      </div>
    </div>
  )
}
