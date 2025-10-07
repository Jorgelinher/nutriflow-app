import HeroSection from '@/components/sections/HeroSection'
import ServicesHighlightSection from '@/components/sections/ServicesHighlightSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import CallToActionSection from '@/components/sections/CallToActionSection'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesHighlightSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
