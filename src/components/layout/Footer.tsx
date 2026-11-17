import { ArrowUpRight } from 'lucide-react'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="footer container">
      <Logo />
      <span>© {new Date().getFullYear()} Samuel Akpabio</span>
      <a href="#home">
        Back to top <ArrowUpRight aria-hidden="true" size={15} />
      </a>
    </footer>
  )
}
