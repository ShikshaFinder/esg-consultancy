"use client"
import { motion, type Variants } from "framer-motion"
import { FileText, Building2, Shield, Megaphone, Banknote, CreditCard, Globe, Smartphone, Search, Share2, Mail, MessageSquare, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
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

const services = [
  {
    icon: FileText, title: "Business Registration", gradient: "from-[#355872] to-[#7AAACE]", slug: "business-registration",
    desc: "Complete business setup and registration services to get your venture off the ground legally and efficiently.",
    items: ["MSME / Udyam Registration", "Company Incorporation (Pvt Ltd, LLP, OPC)", "GST Registration & Filing", "FSSAI License", "Shop & Establishment Act", "Import/Export Code (IEC)"],
  },
  {
    icon: Building2, title: "Tax & Compliance", gradient: "from-[#7AAACE] to-[#9CD5FF]", slug: "tax-compliance",
    desc: "Stay compliant with all regulatory requirements. We handle the complexity so you can focus on business.",
    items: ["Income Tax Filing (ITR)", "GST Return Filing", "TDS Compliance", "ROC Annual Filing", "Payroll & PF/ESI", "Tax Planning & Advisory"],
  },
  {
    icon: Shield, title: "Certifications & IP", gradient: "from-[#9CD5FF] to-[#355872]", slug: "certifications",
    desc: "Protect your intellectual property and get certifications that open doors to new business opportunities.",
    items: ["ISO Certification", "Trademark Registration", "Patent Filing", "Copyright Registration", "DPIIT / Startup India", "ZED Certification"],
  },
  {
    icon: Megaphone, title: "Marketing & Branding", gradient: "from-[#355872] to-[#9CD5FF]", slug: "marketing",
    desc: "Build a strong brand presence and reach your target audience with our comprehensive marketing solutions.",
    items: ["Brand Identity Design", "Logo & Visual Design", "Marketing Strategy", "Content Marketing", "PR & Media Coverage", "Event Marketing"],
  },
  {
    icon: Banknote, title: "Grants & Funding", gradient: "from-[#7AAACE] to-[#355872]", slug: "grants",
    desc: "Navigate the complex world of government grants and subsidies with expert guidance at every step.",
    items: ["PMEGP Loan", "MUDRA Yojana", "CGTMSE Guarantee", "Stand-Up India", "State Subsidies", "Angel/VC Pitch Prep"],
  },
  {
    icon: CreditCard, title: "CIBIL & Finance", gradient: "from-[#9CD5FF] to-[#7AAACE]", slug: "cibil-assistance",
    desc: "Improve your credit score and financial standing to unlock better funding opportunities.",
    items: ["CIBIL Score Improvement", "Credit Report Analysis", "Debt Restructuring", "Financial Statement Prep", "Business Plan Writing", "Project Report Creation"],
  },
  {
    icon: Globe, title: "Website Development", gradient: "from-[#355872] to-[#7AAACE]", slug: "growth-strategy",
    desc: "Professional web presence that converts visitors into customers with modern, responsive designs.",
    items: ["Business Website", "E-commerce Store", "Landing Pages", "CMS Development", "Website Maintenance", "UI/UX Design"],
  },
  {
    icon: Smartphone, title: "Digital Marketing", gradient: "from-[#7AAACE] to-[#9CD5FF]", slug: "marketing",
    desc: "Data-driven digital marketing to grow your online presence and generate quality leads.",
    items: ["Social Media Marketing", "Google Ads (PPC)", "SEO Optimization", "Email Marketing", "WhatsApp Marketing", "CRM Setup & Management"],
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
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CD5FF] block mb-4">Our Services</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Everything Your Business{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Needs to Grow</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
              From registration to funding, compliance to marketing — we offer end-to-end business solutions under one roof.
            </motion.p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#355872]/[0.06] relative z-10">
              {services.map((s, i) => (
                <motion.div key={s.title} custom={i} variants={fadeUp}
                  className="group/feature p-7 relative bg-[#F7F8F0] transition-all duration-300"
                >
                  {/* 21st.dev hover gradient */}
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-[#355872]/[0.06] to-transparent pointer-events-none" />
                  <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-[#355872]/15 group-hover/feature:bg-[#7AAACE] transition-all duration-300 origin-center top-1/2 -translate-y-1/2" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 group-hover/feature:scale-110 transition-transform duration-300`}>
                        <s.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#0a1628] font-bold text-lg group-hover/feature:translate-x-1 transition duration-200">{s.title}</h3>
                        <p className="text-[#0a1628]/50 text-sm mt-1">{s.desc}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {s.items.map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-[#0a1628]/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7AAACE] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] transition-colors"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure What You Need?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 text-base mb-8">
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
