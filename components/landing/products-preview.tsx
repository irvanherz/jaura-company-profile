"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { ProductCardCompact } from "@/components/products/product-card"
import { Reveal } from "@/components/landing/reveal"
import { SectionShell } from "@/components/landing/section-shell"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { productsHref } from "@/lib/navigation"
import { formatProductNames, site } from "@/lib/site"

export function ProductsPreview() {
  return (
    <SectionShell muted>
      <Reveal className="mb-12">
        <SectionHeader
          eyebrow="Our products"
          title="Platforms we build and operate"
          description={`Alongside client work, we develop and run our own products — ${formatProductNames()}.`}
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
        <Button variant="outline" size="lg" asChild>
          <Link href={productsHref}>
            View all products
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </Reveal>
    </SectionShell>
  )
}
