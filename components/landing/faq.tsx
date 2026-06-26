"use client"

import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import * as React from "react"

import { Reveal } from "@/components/landing/reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { ease } from "@/lib/motion"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Faq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-12">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            description="Quick answers about working with Jaura."
          />
        </Reveal>

        <div className="mx-auto max-w-3xl space-y-2">
          {site.faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
  return (
    <div
      className={cn(
        "rounded-xl border transition-colors",
        open
          ? "border-[var(--jaura-accent)]/25 bg-card/80"
          : "border-border/60 bg-card/40 hover:border-border"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
