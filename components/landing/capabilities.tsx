"use client"

import { Reveal } from "@/components/landing/reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { site } from "@/lib/site"

export function Capabilities() {
  return (
    <section className="border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Everything you need to go digital"
            description="From first consultation to production — we cover the full stack."
            className="mb-8"
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2">
            {site.capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-[var(--jaura-accent)]/30 hover:text-foreground"
              >
                {capability}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
