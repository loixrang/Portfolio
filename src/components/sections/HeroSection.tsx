import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react'
import { StackScene } from '../hero/StackScene'

export function HeroSection() {
  const reduced = useReducedMotion()
  const entrance = {
    initial: { opacity: 0, y: reduced ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
  }
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <motion.div
          {...entrance}
          transition={{ duration: 0.5 }}
          className="intro-line"
        >
          <span className="status-dot" /> Fullstack developer{' '}
          <span className="intro-slash">/</span> Web & mobile
        </motion.div>
        <motion.h1 {...entrance} transition={{ duration: 0.65, delay: 0.08 }}>
          From the first
          <br />
          pixel to the
          <br />
          <span className="last-line">
            last endpoint<span className="heading-period">.</span>
          </span>
        </motion.h1>
        <motion.div {...entrance} transition={{ duration: 0.65, delay: 0.16 }}>
          <p className="hero-description">
            I’m <strong>Samuel Akpabio.</strong> I connect thoughtful interfaces
            <br className="desktop-break" /> with solid engineering to bring
            ideas to life.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <ArrowDownRight aria-hidden="true" size={19} />
            </a>
            <a className="text-link" href="#about">
              A little about me <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
          <div className="hero-note">
            <Terminal aria-hidden="true" size={14} />
            <span>Frontend finesse. Backend backbone.</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="hero-visual"
        {...entrance}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <StackScene />
      </motion.div>
      <div className="hero-bottom">
        <span>Ideas deserve to be built well.</span>
        <a href="#work">
          Scroll to explore <ArrowDown aria-hidden="true" size={14} />
        </a>
      </div>
    </section>
  )
}
