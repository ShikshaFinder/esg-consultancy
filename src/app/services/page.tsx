"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Anchor, AlertTriangle, ClipboardCheck, HardHat, FileText,
  Headphones, CheckCircle2, ArrowRight, ChevronRight
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/esg/navbar"
import Footer from "@/components/esg/footer"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 }
  }),
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "show" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  )
}

const services = [
  {
    id: "compliance",
    icon: Anchor,
    tag: "Core",
    title: "Ship Recycling Compliance",
    subtitle: "Structured support aligned with HKC and GMB.",
    items: [
      "IHM (Part I, II, III) management",
      "Ship Recycling Plan (SRP) preparation and execution",
      "Hazardous material handling and waste traceability",
      "GMB inspection readiness",
      "EU SRR readiness support",
      "Audit and verification support",
    ],
  },
  {
    id: "high-risk",
    icon: AlertTriangle,
    tag: "Safety",
    title: "High-Risk Operations Control",
    subtitle: "Comprehensive safety systems for hazardous operations.",
    items: [
      "Permit-to-Work (PTW) systems",
      "Confined space entry and gas monitoring",
      "Hot work, lifting, and work-at-height control",
      "HIRA / JSA development",
      "Incident investigation and Root Cause Analysis",
    ],
  },
  {
    id: "hse",
    icon: ClipboardCheck,
    tag: "Systems",
    title: "HSE Management System",
    subtitle: "Structured safety management for operational excellence.",
    items: [
      "Emergency Preparedness & Response Plan (EPRP)",
      "Safety meetings and compliance tracking",
      "Monitoring and performance reporting",
    ],
  },
  {
    id: "training",
    icon: HardHat,
    tag: "People",
    title: "Training & Competency",
    subtitle: "Building workforce capability for safe operations.",
    items: [
      "Induction and task-specific training",
      "High-risk activity training",
      "Supervisor competency development",
      "Mock drills and practical sessions",
    ],
  },
  {
    id: "documentation",
    icon: FileText,
    tag: "Records",
    title: "Documentation & Traceability",
    subtitle: "Complete documentation systems for audit readiness.",
    items: [
      "PPE lifecycle management",
      "Inspection systems and compliance checklists",
      "Non-conformity (NC) and CAPA tracking",
      "Waste manifest and downstream traceability",
      "SOPs aligned with HKC and regulatory requirements",
    ],
  },
  {
    id: "retainer",
    icon: Headphones,
    tag: "Ongoing",
    title: "Retainer-Based Compliance Support",
    subtitle: "Continuous monitoring, guidance, and system control ensuring compliance remains effective over time.",
    items: [
      "Ongoing compliance monitoring",
      "Regular system reviews and updates",
      "Advisory and guidance on regulatory changes",
      "Periodic performance reporting",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a1628]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,170,0.06)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4aa] block mb-4">Our Services</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Comprehensive Compliance<br />
              <span className="bg-gradient-to-r from-[#00d4aa] to-[#0ea5e9] bg-clip-text text-transparent">& Safety Solutions</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed">
              From HKC compliance and high-risk operations control to training and traceability — structured solutions for every aspect of ship recycling operations.
            </motion.p>
          </motion.div>
        </section>

        {/* Service quicklinks */}
        <section className="py-6 px-6 border-b border-white/[0.06] bg-[#060e1a]/50 sticky top-16 z-30 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="px-4 py-1.5 text-xs font-medium text-[#94a3b8] hover:text-[#00d4aa] border border-white/[0.06] rounded-full hover:border-[#00d4aa]/30 transition-all"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </section>

        {/* Service sections */}
        {services.map((svc, idx) => (
          <section
            key={svc.id}
            id={svc.id}
            className={`py-24 px-6 ${idx % 2 === 1 ? "bg-[#060e1a]" : ""}`}
          >
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Info */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4aa]/20 to-[#0ea5e9]/10 flex items-center justify-center">
                      <svc.icon className="w-7 h-7 text-[#00d4aa]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#00d4aa]/60">{svc.tag}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{svc.title}</h2>
                    </div>
                  </motion.div>
                  <motion.p variants={fadeUp} custom={1} className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                    {svc.subtitle}
                  </motion.p>
                  <motion.div variants={fadeUp} custom={2}>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 text-sm text-[#00d4aa] hover:text-white transition-colors"
                    >
                      Enquire about this service <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>

                {/* Items */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="space-y-3">
                    {svc.items.map((item, i) => (
                      <motion.div
                        key={item}
                        variants={fadeUp}
                        custom={i}
                        className="group flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#00d4aa]/20 hover:bg-white/[0.04] transition-all"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#00d4aa] mt-0.5 shrink-0" />
                        <span className="text-[#c8d6e5] group-hover:text-white transition-colors">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
        ))}

        {/* CTA */}
        <section className="py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/10 via-transparent to-[#0ea5e9]/10" />
          <div className="absolute inset-0 bg-[#060e1a]/50" />
          <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need a Customized Solution?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-[#94a3b8] text-lg mb-10 max-w-xl mx-auto">
              Every ship recycling operation has unique challenges. Let us assess your requirements and build a tailored compliance framework.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4aa] to-[#0ea5e9] text-[#0a1628] font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Request a Compliance Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}
