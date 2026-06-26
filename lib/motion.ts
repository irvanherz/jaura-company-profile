export const ease = [0.16, 1, 0.3, 1] as const

export const viewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -6% 0px" as const,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.75, ease },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

export const cardHover = {
  y: -6,
  transition: { duration: 0.35, ease },
}

export const glowOrb = {
  animate: {
    x: [0, 36, -24, 0],
    y: [0, -28, 20, 0],
    scale: [1, 1.06, 0.94, 1],
  },
  transition: {
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
}

export function revealTransition(delay = 0) {
  return {
    duration: 0.75,
    ease,
    delay: delay / 1000,
  }
}

export const directionVariants = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  none: fadeIn,
} as const
