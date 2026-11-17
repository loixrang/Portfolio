import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Code2, GitBranch } from 'lucide-react'
import { layers } from '../../data/architecture'

export function StackScene() {
  const [active, setActive] = useState(1)
  const reduced = useReducedMotion()
  const layer = layers[active]
  return (
    <div className="stack-scene">
      <div className="scene-top">
        <span>
          <span className="tiny-square" /> The full picture
        </span>
        <Code2 aria-hidden="true" size={17} />
      </div>
      <div className="blueprint" aria-label="Explore the development stack">
        <div className="blueprint-cross cross-one">+</div>
        <div className="blueprint-cross cross-two">+</div>
        <div className="layer-stack">
          {layers.map(({ name, icon: Icon }, index) => (
            <motion.button
              key={name}
              className={`architecture-layer layer-${index} ${active === index ? 'selected' : ''}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              animate={{
                x: active === index ? -12 : 0,
                y: active === index ? -7 : 0,
              }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 240, damping: 24 }
              }
            >
              <Icon aria-hidden="true" size={27} strokeWidth={1.4} />
              <span>{name}</span>
              <span className="layer-nodes">
                <i />
                <i />
                <i />
              </span>
            </motion.button>
          ))}
        </div>
        <div className="scene-caption">
          <span className="status-dot" /> Built to connect.
        </div>
        <span className="diagram-coordinate">SA / SYSTEM ARCHITECTURE</span>
      </div>
      <div className="code-window">
        <div className="code-heading">
          <span>
            <i />
            <i />
            <i />
          </span>
          <span>{layer.file}</span>
          <Code2 aria-hidden="true" size={14} />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.12 }}
            className="code-body"
          >
            {layer.lines.map((line, i) => (
              <div key={i}>
                <span className="line-number">{i + 1}</span>
                <code>{line}</code>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="code-footer">
          <GitBranch aria-hidden="true" size={12} /> main{' '}
          <span>
            TypeScript <span className="status-dot" />
          </span>
        </div>
      </div>
      <div className="scene-bottom" aria-live="polite">
        <span>{layer.label}</span>
        <span>{layer.tools}</span>
      </div>
    </div>
  )
}
