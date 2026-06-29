"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import * as React from "react"

import { Reveal } from "@/components/landing/reveal"
import { SectionShell } from "@/components/landing/section-shell"
import { SectionHeader } from "@/components/ui/section-header"
import { ease } from "@/lib/motion"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Faq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <SectionShell>
      <Reveal className="mb-12">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions"
          description="Clear answers about our products, services, and how we work."
        />
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-2">
        {site.faqs.map((faq, index) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            open={openIndex === index}
            onToggle={() =>
              setOpenIndex((current) => (current === index ? null : index))
            }
          />
        ))}
      </div>
    </SectionShell>
  )
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  const contentId = React.useId()

  return (
    <div
      className={cn(
        "rounded-xl border transition-colors",
        open
          ? "border-primary/25 bg-card/80"
          : "border-border/50 bg-card/40 hover:border-border"
      )}
    >
      <button
        type="button"
        id={`${contentId}-trigger`}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-medium md:text-base">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="shrink-0 text-muted-foreground"
          aria-hidden
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={`${contentId}-trigger`}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground text-pretty">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
