"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

import { ProductCardCompact } from "@/components/products/product-card"
import { Reveal } from "@/components/landing/reveal"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { productsHref } from "@/lib/navigation"
import { site } from "@/lib/site"

export function ProductsPreview() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-12">
          <SectionHeader
            eyebrow="Our products"
            title="Agentic platforms we build and run"
            description={`Beyond client work, ${site.name} manages its own products — proof that we ship real software.`}
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
  )
}
