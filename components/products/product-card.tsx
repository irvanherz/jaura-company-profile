"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cardHover, ease } from "@/lib/motion"
import type { Product } from "@/lib/site"

export function ProductCard({
  product,
  featured,
}: {
  product: Product
  featured?: boolean
}) {
  return (
    <motion.div
      whileHover={cardHover}
      transition={{ duration: 0.35, ease }}
      className="h-full"
    >
      <Card
        className={`group relative h-full overflow-hidden border-border/60 bg-gradient-to-br from-card to-muted/30 hover:border-[var(--jaura-accent)]/30 hover:shadow-[0_24px_48px_-16px_var(--jaura-glow)] ${featured ? "lg:flex lg:flex-row" : ""}`}
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-[var(--jaura-accent)] to-[var(--jaura-accent-secondary)]"
          aria-hidden
          initial={{ scaleX: featured ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[var(--jaura-accent)]/5 to-[var(--jaura-accent-secondary)]/8"
          aria-hidden
          initial={{ opacity: featured ? 1 : 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4, ease }}
        />

        <div className={featured ? "relative flex flex-1 flex-col" : "relative"}>
          <CardHeader className="relative">
            <p className="text-xs font-medium tracking-wide text-[var(--jaura-accent)] uppercase">
              {product.tagline}
            </p>
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3, ease }}>
              <CardTitle className={featured ? "text-3xl" : "text-2xl"}>
                {product.name}
              </CardTitle>
            </motion.div>
            <CardDescription
              className={featured ? "text-base leading-relaxed" : "leading-relaxed"}
            >
              {product.description}
            </CardDescription>
          </CardHeader>

          {featured ? (
            <CardContent className="relative flex-1">
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-[var(--jaura-accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          ) : null}

          <CardContent className={featured ? "relative pt-0" : "relative"}>
            <p className="font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-[var(--jaura-accent)]">
              {product.url.replace("https://", "")}
            </p>
          </CardContent>

          <CardFooter className="relative mt-auto border-none bg-transparent">
            <Button variant={featured ? "default" : "outline"} className="group/btn" asChild>
              <motion.a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit {product.name}
                <ArrowUpRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
                <span className="sr-only"> (opens in new tab)</span>
              </motion.a>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  )
}

export function ProductCardCompact({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={cardHover}
      transition={{ duration: 0.35, ease }}
      className="h-full"
    >
      <Card className="group h-full border-border/60 bg-card/80 hover:border-[var(--jaura-accent)]/30 hover:shadow-[0_24px_48px_-16px_var(--jaura-glow)]">
        <CardHeader>
          <p className="text-xs font-medium text-[var(--jaura-accent)] uppercase tracking-wide">
            {product.tagline}
          </p>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="border-none bg-transparent">
          <Button variant="ghost" size="sm" className="px-0" asChild>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site
              <ArrowUpRight data-icon="inline-end" />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
