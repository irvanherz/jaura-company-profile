"use client"

import { Reveal } from "@/components/landing/reveal"
import { SectionShell } from "@/components/landing/section-shell"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/ui/section-header"
import { site } from "@/lib/site"

export function Capabilities() {
  return (
    <SectionShell muted>
      <Reveal>
        <SectionHeader
          eyebrow="Capabilities"
          title="Full-stack product capabilities"
          description="Web and mobile applications, AI-powered features, and the infrastructure to run them in production."
          className="mb-8"
        />
      </Reveal>
      <Reveal delay={100}>
        <div className="flex flex-wrap gap-2">
          {site.capabilities.map((capability) => (
            <Badge
              key={capability}
              variant="outline"
              className="h-auto border-border/60 bg-background/50 px-4 py-1.5 text-sm font-normal text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              {capability}
            </Badge>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  )
}
