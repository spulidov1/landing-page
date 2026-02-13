// Spring presets matching your spec but with refined values
export const springs = {
  gentle: { stiffness: 300, damping: 30, mass: 1 },
  snappy: { stiffness: 340, damping: 28, mass: 0.9 },
  bouncy: { stiffness: 400, damping: 25, mass: 1.2 },
} as const

// Hover/interaction variants
export const hoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.006,
    y: -1,
    transition: springs.snappy,
  },
}

// Tab transition variants
export const tabVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 320 : -320,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      ...springs.gentle,
      staggerChildren: 0.04,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 320 : -320,
    opacity: 0,
    scale: 0.98,
    transition: springs.snappy,
  }),
}

// Stagger children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
}
