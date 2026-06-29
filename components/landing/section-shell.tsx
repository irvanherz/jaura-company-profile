import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionShellProps = {
  id?: string
  muted?: boolean
  className?: string
  innerClassName?: string
  children: ReactNode
}

export function SectionShell({
  id,
  muted,
  className,
  innerClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("border-t border-border/40", muted && "bg-muted/15", className)}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 py-20 md:py-24",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}
