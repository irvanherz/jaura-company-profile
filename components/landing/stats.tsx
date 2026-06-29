"use client"

import { Reveal } from "@/components/landing/reveal"
import { SectionShell } from "@/components/landing/section-shell"
import { site } from "@/lib/site"

export function Stats() {
  return (
    <SectionShell id="stats" innerClassName="py-12 md:py-14">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border/50">
        {site.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80}>
            <div className="px-0 text-center md:px-8 md:text-left">
              <p className="text-2xl font-semibold tracking-tight jaura-gradient-text md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
