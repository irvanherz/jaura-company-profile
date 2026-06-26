"use client"

import { motion, useReducedMotion } from "motion/react"

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
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? "visible" : "hidden"}
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
