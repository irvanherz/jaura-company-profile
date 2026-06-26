"use client"

import { ArrowUpRight, Building2, Calendar, MapPin, Sparkles, User } from "lucide-react"
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
import { contactHref, productsHref } from "@/lib/navigation"
import { ease, fadeUp, glowOrb, staggerContainer } from "@/lib/motion"
import { site } from "@/lib/site"

const foundedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date(site.founded))

export function AboutPageContent() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <section className="relative -mt-[var(--header-height)] overflow-hidden jaura-grid-bg border-b border-border/60 pt-[var(--header-height)]">
        <motion.div
          className="jaura-glow-orb -top-32 right-1/4 size-96 bg-[var(--jaura-glow)]"
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
            About us
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl"
          >
            Building toward a{" "}
            <span className="jaura-gradient-text">better digital future</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {site.legalName} was founded on {foundedDate} as an initiative to
            help teams and creators thrive in a world shaped by intelligent
            software — not just survive it.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm text-muted-foreground"
          >
            Headquartered in {site.headquarters}.
          </motion.p>
        </motion.div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-1">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
                  <Sparkles className="size-3.5 text-[var(--jaura-accent)]" />
                  Our mission
                </div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Technology with purpose
                </h2>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  {site.mission}
                </p>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  We combine custom development, cloud infrastructure, and
                  agentic AI to deliver solutions that are practical today and
                  adaptable tomorrow. Our own products — Storydusk and
                  Resumelike — are living proof of that approach.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Card className="h-full border-border/60 bg-gradient-to-br from-card to-muted/30">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[var(--jaura-glow)] text-[var(--jaura-accent)]">
                    <Building2 className="size-5" />
                  </div>
                  <CardTitle className="text-xl">Company</CardTitle>
                  <CardDescription>
                    Registered technology company based in East Java.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg font-medium leading-snug">
                    {site.legalName}
                  </p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--jaura-accent)]" />
                    <span>Headquarters: {site.headquarters}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-4 shrink-0 text-[var(--jaura-accent)]" />
                    Founded {foundedDate}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={150}>
              <Card className="h-full border-border/60 bg-gradient-to-br from-card to-muted/30">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[var(--jaura-glow)] text-[var(--jaura-accent)]">
                    <User className="size-5" />
                  </div>
                  <CardTitle className="text-xl">Founder</CardTitle>
                  <CardDescription>
                    {site.name} was started by a builder who ships.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg font-medium">{site.founder.name}</p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" asChild>
                      <a
                        href={site.founder.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {site.founder.portfolioDomain}
                        <ArrowUpRight data-icon="inline-end" />
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium text-[var(--jaura-accent)]">
              What we stand for
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Principles that guide every project
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
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
                Want to work together?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground text-pretty">
                Whether you need a digital solution built or want to explore our
                agentic products, we&apos;d love to hear from you.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" asChild>
                    <Link href={contactHref}>Get in touch</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" asChild>
                    <Link href={productsHref}>Explore products</Link>
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
