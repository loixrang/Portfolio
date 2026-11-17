import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { HeroSection } from './components/sections/HeroSection'
import { CapabilityStrip } from './components/sections/CapabilityStrip'
import { WorkSection } from './components/sections/WorkSection'
import { StackSection } from './components/sections/StackSection'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <HeroSection />
        <CapabilityStrip />
        <WorkSection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
