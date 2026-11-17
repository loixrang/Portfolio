import { ArrowUpRight, Code2, Server, Smartphone } from 'lucide-react'

export function CapabilityStrip() {
  return (
    <div className="capability-strip">
      <div className="container">
        <span>
          <Code2 aria-hidden="true" /> Thoughtful interfaces
        </span>
        <span className="strip-plus">+</span>
        <span>
          <Server aria-hidden="true" /> Resilient systems
        </span>
        <span className="strip-plus">+</span>
        <span>
          <Smartphone aria-hidden="true" /> Native experiences
        </span>
        <span className="strip-plus">=</span>
        <span className="strip-result">
          The complete picture <ArrowUpRight aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}
