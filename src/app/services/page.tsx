"use client"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"
import PremiumConsultation from "@/components/premium/premium-consultation"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const categories = [
  {
    title: "Start Your Business",
    gradient: "from-[#355872] to-[#7AAACE]",
    desc: "Complete business formation, registration, and government portal access to launch your venture.",
    items: [
      { title: "AGNIi", href: "/services/agnii" },
      { title: "GeM Registration", href: "/services/gem" },
      { title: "Private Limited Company", href: "/services/private-limited" },
      { title: "Limited Liability Partnership", href: "/services/llp" },
      { title: "Proprietorship", href: "/services/proprietorship" },
      { title: "Goods and Service Tax", href: "/services/gst" },
    ],
  },
  {
    title: "Grow Your Business",
    gradient: "from-[#7AAACE] to-[#9CD5FF]",
    desc: "International certifications and trade registrations to scale and compete globally.",
    items: [
      { title: "ISO Certification", href: "/services/iso-certification" },
      { title: "IEC Certification", href: "/services/iec-certification" },
    ],
  },
  {
    title: "Certifications",
    gradient: "from-[#9CD5FF] to-[#355872]",
    desc: "Government certifications and recognitions that unlock subsidies, tax benefits, and credibility.",
    items: [
      { title: "Startup India Certification", href: "/services/startup-india-certification" },
      { title: "MSME Registration", href: "/services/msme-registration" },
      { title: "Udyam Certification", href: "/services/udyam-certification" },
      { title: "ZED Certification", href: "/services/zed-certification" },
    ],
  },
  {
    title: "Funding",
    gradient: "from-[#355872] to-[#9CD5FF]",
    desc: "Government grants, subsidies, loans, and investor funding to fuel your business growth.",
    items: [
      { title: "Government Grants and Funding", href: "/services/government-grants" },
      { title: "Seed Fund", href: "/services/seed-fund" },
      { title: "Nidhi Prayas Yojana", href: "/services/nidhi-prayas-yojana" },
      { title: "MSME Loans", href: "/services/msme-loans" },
      { title: "Venture Capitalist", href: "/services/venture-capitalist" },
      { title: "Project Finance", href: "/services/project-finance" },
      { title: "Greenfield Loan", href: "/services/greenfield-loan" },
      { title: "Unsecured Business Loans", href: "/services/unsecured-business-loans" },
    ],
  },
  {
    title: "Digital Marketing",
    gradient: "from-[#7AAACE] to-[#355872]",
    desc: "Data-driven marketing strategies to build your brand, generate leads, and grow revenue online.",
    items: [
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      { title: "Amazon Marketing", href: "/services/amazon-marketing" },
      { title: "Content Writing", href: "/services/content-writing" },
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Search Engine Optimization", href: "/services/seo" },
      { title: "Social Media Advertising", href: "/services/social-media-advertising" },
      { title: "Social Media Management", href: "/services/social-media-management" },
      { title: "Email Marketing", href: "/services/email-marketing" },
    ],
  },
  {
    title: "Website Development",
    gradient: "from-[#9CD5FF] to-[#7AAACE]",
    desc: "Professional web development services from business websites to e-commerce and custom applications.",
    items: [
      { title: "Website Development Services", href: "/services/website-development" },
      { title: "Custom Website Development", href: "/services/custom-website-development" },
      { title: "E-Commerce Website Development", href: "/services/ecommerce-development" },
      { title: "WordPress Website Development", href: "/services/wordpress-development" },
      { title: "Website Hosting", href: "/services/website-hosting" },
    ],
  },
  {
    title: "Others",
    gradient: "from-[#355872] to-[#7AAACE]",
    desc: "Specialized business services to complete your growth toolkit.",
    items: [
      { title: "Pitch Deck", href: "/services/pitch-deck" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          {/* 21st.dev BouncingBalls */}
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
            <BouncingBalls
              numBalls={45}
              colors={["#355872", "#7AAACE", "#9CD5FF"]}
              opacity={0.25}
              minRadius={0.2}
              maxRadius={1.2}
              speed={0.15}
              interactive={false}
            />
          </div>

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-4">Our Services</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Everything Your Business{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Needs to Grow</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-black/50 text-lg max-w-2xl mx-auto">
              From registration to funding, compliance to marketing — we offer end-to-end business solutions under one roof.
            </motion.p>
          </motion.div>
        </section>

        {/* Services by Category */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
            <div className="flex flex-col gap-14">
              {categories.map((cat, ci) => (
                <motion.div key={cat.title} custom={ci} variants={fadeUp}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${cat.gradient}`} />
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-black">{cat.title}</h2>
                      <p className="text-black/50 text-sm mt-0.5">{cat.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center justify-between rounded-xl border border-[#355872]/[0.08] bg-white px-5 py-4 hover:border-[#355872]/20 hover:shadow-lg hover:shadow-[#355872]/5 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                          <span className="text-black text-sm font-medium group-hover:text-black transition-colors">{item.title}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-black/20 group-hover:text-black transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black mb-4">Not Sure What You Need?</motion.h2>
            <motion.p variants={fadeUp} className="text-black/70 text-base mb-8">
              Talk to our experts and get a personalized recommendation based on your business stage and goals.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <MetalButton variant="default">
                  <span className="flex items-center gap-2">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </span>
                </MetalButton>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <PremiumConsultation />
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
