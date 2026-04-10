"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Shield, AlertTriangle, BarChart3, Eye, FileText,
  TrendingUp, ArrowRight, Info
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

const insightAreas = [
  {
    category: "Safety & Risk",
    icon: AlertTriangle,
    color: "#d97706",
    items: [
      "Confined space and work-at-height observations",
      "Incident trend analysis",
    ],
  },
  {
    category: "ESG & Compliance",
    icon: Shield,
    color: "#009b7d",
    items: [
      "HKC readiness observations",
      "Environmental practice benchmarking",
    ],
  },
  {
    category: "Operational Observations",
    icon: BarChart3,
    color: "#0284c7",
    items: [
      "Yard safety maturity",
      "Process-level gaps",
    ],
  },
]

const deliverables = [
  { icon: FileText, title: "Periodic Insight Reports", desc: "Structured reports based on field observations and regulatory updates." },
  { icon: Eye, title: "Compliance Observations", desc: "Identified gaps, risks, and improvement opportunities." },
  { icon: TrendingUp, title: "Advisory Inputs", desc: "Actionable recommendations for operational improvement." },
]

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#f8fafb]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.06)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.4]" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-4">Alang Ship Recycling</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
              ESG & Safety<br />
              <span className="bg-linear-to-r from-[#009b7d] to-[#0284c7] bg-clip-text text-transparent">Insights</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-[#64748b] text-lg max-w-2xl mx-auto leading-relaxed">
              Structured insights based on field observations, industry interactions, and regulatory understanding, supporting informed decision-making in ship recycling.
            </motion.p>
          </motion.div>
        </section>

        {/* Insight Areas */}
        <section className="py-24 px-6 bg-white">
          <AnimatedSection className="max-w-6xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Overview</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-4">Insight Areas</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {insightAreas.map((area, i) => (
                <motion.div
                  key={area.category}
                  variants={fadeUp}
                  custom={i}
                  className="p-8 rounded-xl bg-[#f8fafb] border border-[#e2e8f0] hover:border-[#009b7d]/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: `${area.color}12` }}>
                    <area.icon className="w-7 h-7" style={{ color: area.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4 group-hover:text-[#009b7d] transition-colors">{area.category}</h3>
                  <ul className="space-y-3">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: area.color }} />
                        <span className="text-[#64748b] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Deliverables */}
        <section className="py-24 px-6 bg-[#f4f7f9]">
          <AnimatedSection className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">What We Deliver</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Deliverables</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {deliverables.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="text-center p-8 rounded-xl bg-white border border-[#e2e8f0]"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#009b7d]/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-[#009b7d]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div variants={fadeUp} className="mt-12 p-6 rounded-xl bg-white border border-[#e2e8f0] flex items-start gap-4">
              <Info className="w-5 h-5 text-[#0284c7] mt-0.5 shrink-0" />
              <p className="text-[#64748b] text-sm leading-relaxed">
                <span className="text-[#0f172a] font-medium">Note:</span> Insights are based on anonymized observations and non-confidential data sources.
              </p>
            </motion.div>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section className="py-28 px-6 relative overflow-hidden bg-linear-to-br from-[#f0fdf9] via-[#f4f7f9] to-[#f0f9ff]">
          <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6">
              Need Industry-Specific Insights?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-[#64748b] text-lg mb-10 max-w-xl mx-auto">
              Connect with us for structured observations and advisory inputs tailored to your ship recycling operations.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#009b7d] to-[#0284c7] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#009b7d]/20"
              >
                Schedule a Discussion <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}
