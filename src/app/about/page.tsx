"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Shield, Target, Eye, Users, Anchor, CheckCircle2,
  Award, Crosshair, BarChart3, ArrowRight
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

const approach = [
  { icon: Target, title: "Practical & Field-Oriented", desc: "Solutions rooted in actual ship recycling operations, not theoretical frameworks." },
  { icon: Shield, title: "System-Driven & Structured", desc: "Processes that function independent of individual personnel for consistent outcomes." },
  { icon: Eye, title: "Audit Readiness & Traceability", desc: "Every system is designed with verification and documentation at its core." },
  { icon: BarChart3, title: "Continuous Improvement", desc: "Ongoing monitoring, performance tracking, and system strengthening." },
]

const experience = [
  "Experience across HKC-aligned ship recycling operations",
  "Implementation of HSE systems in high-risk dismantling environments",
  "Hazardous material and compliance management",
  "Multi-yard operational exposure",
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#f8fafb]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,155,125,0.06)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.4]" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-4">About ESG Catalyst</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
              Specialized Compliance &<br />
              <span className="bg-gradient-to-r from-[#009b7d] to-[#0284c7] bg-clip-text text-transparent">HSE Advisory</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-[#64748b] text-lg max-w-2xl mx-auto leading-relaxed">
              Focused on ship recycling operations, delivering structured systems aligned with HKC, GMB, and evolving regulatory requirements.
            </motion.p>
          </motion.div>
        </section>

        {/* Who We Are + Expertise */}
        <section className="py-24 px-6 bg-white">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Who We Are</motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
                  A Specialized Practice for Ship Recycling
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-[#64748b] text-lg leading-relaxed mb-6">
                  ESG Catalyst is a specialized compliance and HSE advisory practice focused on ship recycling operations, delivering structured systems aligned with HKC, GMB, and evolving regulatory requirements.
                </motion.p>
                <motion.p variants={fadeUp} custom={3} className="text-[#64748b] leading-relaxed">
                  Core focus remains on ship recycling, with methodologies derived from high-risk operations and aligned with regulatory and classification expectations.
                </motion.p>
              </div>

              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Expertise</motion.span>
                <motion.div variants={fadeUp} custom={1} className="p-8 rounded-xl bg-[#f8fafb] border border-[#e2e8f0]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009b7d]/15 to-[#0284c7]/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#009b7d]" />
                    </div>
                    <div>
                      <h3 className="text-[#0f172a] font-semibold">Certified Professional</h3>
                      <p className="text-[#64748b] text-sm">NEBOSH IGC | IMS Lead Auditor</p>
                    </div>
                  </div>
                  <p className="text-[#64748b] leading-relaxed mb-4">
                    Led by a NEBOSH IGC-certified professional and IMS Lead Auditor with hands-on experience in Alang ship recycling.
                  </p>
                  <div className="space-y-2">
                    {["Hazardous material handling", "Confined space operations", "Dismantling safety control"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-[#009b7d] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Operating Model */}
        <section className="py-24 px-6 bg-[#f4f7f9]">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <div className="p-10 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
                  <Users className="w-12 h-12 text-[#009b7d] mb-6" />
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Operating Model</h3>
                  <p className="text-[#64748b] leading-relaxed mb-6">
                    ESG Catalyst operates as a founder-led professional practice, supported by qualified safety professionals engaged based on project requirements.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Consistent Quality", icon: Shield },
                      { label: "Scalable Delivery", icon: BarChart3 },
                      { label: "Founder-Led", icon: Crosshair },
                      { label: "Project-Based", icon: Anchor },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 text-sm text-[#475569]">
                        <item.icon className="w-4 h-4 text-[#009b7d] shrink-0" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Our Approach</motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8">
                  How We Deliver Results
                </motion.h2>
                <div className="space-y-5">
                  {approach.map((item, i) => (
                    <motion.div key={item.title} variants={fadeUp} custom={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-[#009b7d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#009b7d]/20 transition-colors">
                        <item.icon className="w-5 h-5 text-[#009b7d]" />
                      </div>
                      <div>
                        <h4 className="text-[#0f172a] font-semibold mb-1">{item.title}</h4>
                        <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Experience */}
        <section className="py-24 px-6 bg-white">
          <AnimatedSection className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Experience</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Proven Track Record</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {experience.map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  custom={i}
                  className="p-6 rounded-xl bg-[#f8fafb] border border-[#e2e8f0] flex items-start gap-4 hover:border-[#009b7d]/30 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#009b7d]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#009b7d]" />
                  </div>
                  <span className="text-[#475569] leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-14">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#009b7d] to-[#0284c7] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#009b7d]/20"
              >
                Schedule a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}
"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Shield, Target, Eye, Users, Anchor, CheckCircle2,
  Award, Crosshair, BarChart3, ArrowRight
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

const approach = [
  { icon: Target, title: "Practical & Field-Oriented", desc: "Solutions rooted in actual ship recycling operations, not theoretical frameworks." },
  { icon: Shield, title: "System-Driven & Structured", desc: "Processes that function independent of individual personnel for consistent outcomes." },
  { icon: Eye, title: "Audit Readiness & Traceability", desc: "Every system is designed with verification and documentation at its core." },
  { icon: BarChart3, title: "Continuous Improvement", desc: "Ongoing monitoring, performance tracking, and system strengthening." },
]

const experience = [
  "Experience across HKC-aligned ship recycling operations",
  "Implementation of HSE systems in high-risk dismantling environments",
  "Hazardous material and compliance management",
  "Multi-yard operational exposure",
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a1628]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.06)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4aa] block mb-4">About ESG Catalyst</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Specialized Compliance &<br />
              <span className="bg-gradient-to-r from-[#00d4aa] to-[#0ea5e9] bg-clip-text text-transparent">HSE Advisory</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed">
              Focused on ship recycling operations, delivering structured systems aligned with HKC, GMB, and evolving regulatory requirements.
            </motion.p>
          </motion.div>
        </section>

        {/* Who We Are + Expertise */}
        <section className="py-24 px-6">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4aa] block mb-3">Who We Are</motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  A Specialized Practice for Ship Recycling
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-[#94a3b8] text-lg leading-relaxed mb-6">
                  ESG Catalyst is a specialized compliance and HSE advisory practice focused on ship recycling operations, delivering structured systems aligned with HKC, GMB, and evolving regulatory requirements.
                </motion.p>
                <motion.p variants={fadeUp} custom={3} className="text-[#94a3b8] leading-relaxed">
                  Core focus remains on ship recycling, with methodologies derived from high-risk operations and aligned with regulatory and classification expectations.
                </motion.p>
              </div>

              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4aa] block mb-3">Expertise</motion.span>
                <motion.div variants={fadeUp} custom={1} className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4aa]/20 to-[#0ea5e9]/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#00d4aa]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Certified Professional</h3>
                      <p className="text-[#94a3b8] text-sm">NEBOSH IGC | IMS Lead Auditor</p>
                    </div>
                  </div>
                  <p className="text-[#94a3b8] leading-relaxed mb-4">
                    Led by a NEBOSH IGC-certified professional and IMS Lead Auditor with hands-on experience in Alang ship recycling.
                  </p>
                  <div className="space-y-2">
                    {["Hazardous material handling", "Confined space operations", "Dismantling safety control"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#c8d6e5]">
                        <CheckCircle2 className="w-4 h-4 text-[#00d4aa] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Operating Model */}
        <section className="py-24 px-6 bg-[#060e1a]">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <div className="p-10 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06]">
                  <Users className="w-12 h-12 text-[#00d4aa] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Operating Model</h3>
                  <p className="text-[#94a3b8] leading-relaxed mb-6">
                    ESG Catalyst operates as a founder-led professional practice, supported by qualified safety professionals engaged based on project requirements.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Consistent Quality", icon: Shield },
                      { label: "Scalable Delivery", icon: BarChart3 },
                      { label: "Founder-Led", icon: Crosshair },
                      { label: "Project-Based", icon: Anchor },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 text-sm text-[#c8d6e5]">
                        <item.icon className="w-4 h-4 text-[#00d4aa] shrink-0" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4aa] block mb-3">Our Approach</motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-white mb-8">
                  How We Deliver Results
                </motion.h2>
                <div className="space-y-5">
                  {approach.map((item, i) => (
                    <motion.div key={item.title} variants={fadeUp} custom={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00d4aa]/20 transition-colors">
                        <item.icon className="w-5 h-5 text-[#00d4aa]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Experience */}
        <section className="py-24 px-6">
          <AnimatedSection className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4aa] block mb-3">Experience</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proven Track Record</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {experience.map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  custom={i}
                  className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-4 hover:border-[#00d4aa]/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#00d4aa]" />
                  </div>
                  <span className="text-[#c8d6e5] leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-14">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#00d4aa] to-[#0ea5e9] text-[#0a1628] font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Schedule a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}
