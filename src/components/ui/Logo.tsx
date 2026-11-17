import { Code2 } from 'lucide-react'

export function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Samuel Akpabio, home">
      <span className="brand-icon">
        <Code2 size={22} aria-hidden="true" />
      </span>
      samuel<span className="brand-period">.</span>
    </a>
  )
}
