import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 30 })
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: reduced ? scrollYProgress : progress }}
      aria-hidden="true"
    />
  )
}
