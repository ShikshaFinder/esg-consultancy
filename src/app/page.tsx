import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import HeroSection from "@/components/sections/hero-section"
import TrustMarquee from "@/components/sections/trust-marquee"
import SchemesSection from "@/components/sections/schemes-section"
import FundingMatch from "@/components/sections/funding-match"
import SolutionsSection from "@/components/sections/solutions-section"
import ServiceCategories from "@/components/sections/service-categories"
import DigitalServices from "@/components/sections/digital-services"
import WhyGrowBridge from "@/components/sections/why-growbridge"
import ProcessTimeline from "@/components/sections/process-timeline"
import TestimonialsSection from "@/components/sections/testimonials-section"
import GoogleReviewsSection from "@/components/sections/google-reviews"
import FAQSection from "@/components/sections/faq-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustMarquee />
        <SchemesSection />
        <FundingMatch />
        <SolutionsSection />
        <ServiceCategories />
        <DigitalServices />
        <WhyGrowBridge />
        <ProcessTimeline />
        <TestimonialsSection />
        <GoogleReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
