"use client"

import { ArrowRight, ArrowUpRight, Building2, Calendar, MapPin, User } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"

import { Reveal } from "@/components/landing/reveal"
import { ProductCardCompact } from "@/components/products/product-card"
import { BrandShowcase } from "@/components/brand-showcase"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { contactHref, productsHref } from "@/lib/navigation"
import { useMounted } from "@/hooks/use-mounted"
import { ease, fadeUp, glowOrb, staggerContainer } from "@/lib/motion"
import { formatProductNames, site } from "@/lib/site"

const foundedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date(site.founded))

export function AboutPageContent() {
  const reducedMotion = useReducedMotion()
  const mounted = useMounted()
  const animateHero = mounted && !reducedMotion

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
          initial={animateHero ? "hidden" : false}
          animate="visible"
          variants={staggerContainer}
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
            <div className="order-2 space-y-0 lg:order-1">
              <motion.div variants={fadeUp}>
                <Badge
                  variant="outline"
                  className="mb-4 border-primary/25 text-primary"
                >
                  About us
                </Badge>
              </motion.div>
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
                {site.legalName} was founded on {foundedDate} to help teams and
                creators thrive with intelligent software — and to ship our own
                agentic products, including {formatProductNames()}.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-3 text-sm text-muted-foreground"
              >
                Headquartered in {site.headquarters}.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" asChild>
                    <Link href={contactHref}>
                      Get in touch
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" asChild>
                    <Link href={productsHref}>Explore our products</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
            >
              <BrandShowcase />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Who we are"
              title="Technology with purpose"
              description={site.mission}
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-1">
              <div className="space-y-4 leading-relaxed text-muted-foreground text-pretty">
                <p>
                  We combine custom development, cloud infrastructure, and
                  agentic AI to deliver solutions that are practical today and
                  adaptable tomorrow.
                </p>
                <p>
                  Our own products — {formatProductNames()} — are living proof
                  that we build what we preach.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Card className="jaura-card-hover h-full border-border/60 bg-gradient-to-br from-card to-muted/30">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[var(--jaura-glow)] text-primary">
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
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Headquarters: {site.headquarters}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-4 shrink-0 text-primary" />
                    Founded {foundedDate}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={150}>
              <Card className="jaura-card-hover h-full border-border/60 bg-gradient-to-br from-card to-muted/30">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[var(--jaura-glow)] text-primary">
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
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="What we stand for"
              title="Principles that guide every project"
              description="The same standards apply whether we're shipping a client app or one of our own products."
            />
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
                  <div className="font-mono text-sm text-primary">
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

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="mb-12">
            <SectionHeader
              eyebrow="Our products"
              title="Agentic platforms we build and run"
              description={`Alongside the apps we build for others, ${site.name} runs ${formatProductNames()} — proof that we ship real software.`}
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {site.products.map((product, index) => (
              <Reveal key={product.name} delay={index * 100}>
                <ProductCardCompact product={product} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 text-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" asChild>
                <Link href={productsHref}>
                  View all products
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </motion.div>
          </Reveal>
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
              <SectionHeader
                align="center"
                eyebrow="Work with us"
                title="Want to build something together?"
                description={`Whether you want to build a new app or explore ${formatProductNames()}, we'd love to hear from you.`}
                className="mx-auto"
              />
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
