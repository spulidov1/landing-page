import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import WorkSection from '@/components/WorkSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
