"use client"

import { motion, useReducedMotion } from "motion/react"

import { useMounted } from "@/hooks/use-mounted"
import {
  directionVariants,
  revealTransition,
  viewport,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: keyof typeof directionVariants
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const mounted = useMounted()
  const reducedMotion = useReducedMotion()

  if (!mounted || reducedMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={directionVariants[direction]}
      transition={revealTransition(delay)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
