"use client"

import { ArrowRight, Rocket } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"

import { ProductCard } from "@/components/products/product-card"
import { Reveal } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { contactHref } from "@/lib/navigation"
import { ease, fadeUp, glowOrb, staggerContainer } from "@/lib/motion"
import { site } from "@/lib/site"

export function ProductsPageContent() {
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
            Our products
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl"
          >
            Agentic platforms we{" "}
            <span className="jaura-gradient-text">build and run</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {site.name} doesn&apos;t just consult — we ship our own products.
            Storydusk and Resumelike are living proof that we build intelligent
            software, not just slide decks.
          </motion.p>
        </motion.div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-24">
          {site.products.map((product, index) => (
            <Reveal key={product.name} delay={index * 100}>
              <ProductCard product={product} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-card/50 p-8 md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex max-w-xl gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--jaura-glow)] text-[var(--jaura-accent)]">
                    <Rocket className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                      Building something agentic?
                    </h2>
                    <p className="mt-2 text-muted-foreground text-pretty">
                      We help teams design and ship AI-powered products — from
                      copilots to full agentic platforms like the ones above.
                    </p>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" asChild>
                    <Link href={contactHref}>
                      Start a conversation
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
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
                eyebrow="Client work"
                title="Need a custom solution instead?"
                description="We also build web apps, mobile products, and automation systems tailored to your business."
                className="mx-auto"
              />
              <div className="mt-8">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    Explore our services
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
