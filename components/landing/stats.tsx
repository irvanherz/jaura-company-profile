"use client"

import { motion } from "motion/react"

import { Reveal } from "@/components/landing/reveal"
import { site } from "@/lib/site"

export function Stats() {
  return (
    <section className="border-b border-border/40 bg-background/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {site.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <motion.div
                className="text-center md:text-left"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-3xl font-semibold tracking-tight jaura-gradient-text md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
