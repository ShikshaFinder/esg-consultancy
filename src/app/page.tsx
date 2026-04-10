"use client"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Anchor, Shield, FileCheck, AlertTriangle, BarChart3, Wrench,
  ArrowRight, CheckCircle2, ChevronRight, Cpu, Eye, Zap,
  ClipboardCheck, HardHat, BookOpen, FileText, Headphones,
  MapPin, Award, Users
} from "lucide-react"
import Navbar from "@/components/esg/navbar"
import Footer from "@/components/esg/footer"

/* ─── Animation variants ─── */
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Hero Image Data ─── */
const heroImages = [
  {
    src: "/hero-shipyard.png",
    alt: "Aerial view of Alang ship recycling yard with organized work zones",
    caption: "Structured Ship Recycling Operations",
  },
  {
    src: "/hero-audit.png",
    alt: "Safety inspectors conducting ESG compliance assessment at ship recycling facility",
    caption: "Audit-Ready Compliance Systems",
  },
  {
    src: "/hero-breaking.png",
    alt: "Professional ship breaking facility with safety systems and environmental controls",
    caption: "Environmental & Safety Control",
  },
]

/* ─── Data ─── */
const heroTags = ["HKC", "EU SRR Readiness", "GMB Compliance", "IHM & SRP", "ESG Traceability", "High-Risk Operations Control"]

const solutionRows = [
  { req: "HKC / EU SRR compliance", sol: "Compliance Implementation Framework", out: "IHM, SRP, and audit-ready documentation", icon: FileCheck },
  { req: "GMB inspections", sol: "Compliance Monitoring Retainer", out: "Continuous inspection readiness", icon: Eye },
  { req: "ESG expectations", sol: "Traceability & ESG Framework", out: "Documented environmental performance", icon: BarChart3 },
  { req: "High-risk operations", sol: "Safety System Implementation", out: "PTW, HIRA, confined space control", icon: AlertTriangle },
  { req: "Lack of system control", sol: "Structured HSE Framework", out: "Sustainable, system-driven operations", icon: Shield },
]

const services = [
  { icon: Anchor, title: "Ship Recycling Compliance", desc: "IHM management, SRP preparation, hazardous material handling, GMB inspection readiness, EU SRR support, and audit verification.", tag: "Core" },
  { icon: AlertTriangle, title: "High-Risk Operations Control", desc: "PTW systems, confined space entry, gas monitoring, hot work and lifting control, HIRA/JSA, incident investigation.", tag: "Safety" },
  { icon: ClipboardCheck, title: "HSE Management System", desc: "Emergency preparedness, safety meetings, compliance tracking, monitoring and performance reporting.", tag: "Systems" },
  { icon: HardHat, title: "Training & Competency", desc: "Induction training, high-risk activity training, supervisor competency, mock drills and practical sessions.", tag: "People" },
  { icon: FileText, title: "Documentation & Traceability", desc: "PPE lifecycle, inspection systems, NC/CAPA tracking, waste manifests, SOPs aligned with HKC.", tag: "Records" },
  { icon: Headphones, title: "Retainer-Based Support", desc: "Continuous monitoring, guidance, and system control ensuring compliance remains effective over time.", tag: "Ongoing" },
]

const processSteps = [
  { num: "01", title: "Assessment", desc: "Gap identification across compliance, safety, and operational systems." },
  { num: "02", title: "System Development", desc: "Framework implementation aligned with HKC, GMB, and regulatory requirements." },
  { num: "03", title: "Monitoring", desc: "Site and remote oversight ensuring consistent compliance." },
  { num: "04", title: "Improvement", desc: "Continuous system strengthening based on performance data." },
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextImage, 5000)
    return () => clearInterval(timer)
  }, [nextImage])

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">

        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden">
          {/* Background layers — all pointer-events-none so buttons work */}
          <div className="absolute inset-0 bg-[#f8fafb] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,155,125,0.07)_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(2,132,199,0.05)_0%,transparent_50%)] pointer-events-none" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          {/* Animated accent line with pulsing dot */}
          <div className="absolute top-0 left-[20%] pointer-events-none">
            <motion.div
              className="w-px h-32 bg-linear-to-b from-[#009b7d] to-transparent"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: "top" }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-[#009b7d] -ml-[3px]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1], scale: [0, 1.2, 0.8, 1] }}
              transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* ─── Left: Text Content ─── */}
              <motion.div initial="hidden" animate="show" variants={stagger} className="relative z-20 py-10 lg:py-0">
                {/* Tags */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-5">
                  {heroTags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[11px] font-medium tracking-wide uppercase rounded-full border border-[#009b7d]/20 text-[#009b7d] bg-[#009b7d]/6 hover:bg-[#009b7d]/12 hover:border-[#009b7d]/40 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold leading-[1.08] mb-4 tracking-tight">
                  <span className="text-[#0f172a]">Alang Ship Recycling</span>
                  <br />
                  <span className="bg-linear-to-r from-[#009b7d] via-[#00b894] to-[#0284c7] bg-clip-text text-transparent">
                    Structured, Compliant
                  </span>
                  <br />
                  <span className="text-[#0f172a]">&amp; Audit-Ready</span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={2} className="text-[#64748b] text-lg lg:text-xl max-w-xl leading-relaxed mb-3">
                  ESG Catalyst delivers system-driven compliance and safety frameworks for ship recycling operations, ensuring audit readiness, regulatory alignment, and controlled execution.
                </motion.p>

                <motion.p variants={fadeUp} custom={3} className="text-[#94a3b8] text-sm max-w-lg leading-relaxed mb-8">
                  Developed in Alang — one of the world&apos;s most demanding ship recycling environments — meeting regulatory expectations, classification requirements, and stakeholder scrutiny.
                </motion.p>

                <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/contact"
                    className="group relative flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-[#009b7d] to-[#0284c7] text-white font-semibold rounded-lg text-sm shadow-lg shadow-[#009b7d]/20 overflow-hidden transition-all hover:shadow-xl hover:shadow-[#009b7d]/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Request a Compliance Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Link>
                  <Link
                    href="/contact#discussion"
                    className="flex items-center gap-2 px-8 py-3.5 border border-[#cbd5e1] text-[#0f172a] rounded-lg hover:bg-[#f1f5f9] hover:border-[#009b7d]/30 transition-all text-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Schedule a Discussion
                  </Link>
                </motion.div>
              </motion.div>

              {/* ─── Right: Image Gallery with Carousel ─── */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative hidden lg:block"
              >
                {/* Main image container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#0f172a]/10">
                  {/* Image Carousel */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={heroImages[currentImage].src}
                        alt={heroImages[currentImage].alt}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient overlay at bottom for caption */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/30 to-transparent z-10 pointer-events-none" />

                  {/* Caption & controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentImage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="text-white/90 font-medium text-sm mb-3"
                      >
                        {heroImages[currentImage].caption}
                      </motion.p>
                    </AnimatePresence>

                    {/* Progress dots */}
                    <div className="flex gap-2">
                      {heroImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImage(i)}
                          className="relative h-1 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                          style={{ width: i === currentImage ? "2rem" : "0.75rem" }}
                          aria-label={`Go to image ${i + 1}`}
                        >
                          <div className="absolute inset-0 bg-white/30 rounded-full" />
                          {i === currentImage && (
                            <motion.div
                              className="absolute inset-0 bg-white rounded-full"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 5, ease: "linear" }}
                              style={{ transformOrigin: "left" }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg z-10 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg z-10 pointer-events-none" />
                </div>

                {/* Floating stat badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl px-5 py-4 shadow-xl shadow-[#0f172a]/8 border border-[#e2e8f0] z-30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#009b7d] to-[#00b894] flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#94a3b8] font-medium">Compliance</div>
                      <div className="text-lg font-bold text-[#0f172a]">HKC Aligned</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl px-5 py-4 shadow-xl shadow-[#0f172a]/8 border border-[#e2e8f0] z-30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#38bdf8] flex items-center justify-center">
                      <Anchor className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#94a3b8] font-medium">Operations</div>
                      <div className="text-lg font-bold text-[#0f172a]">Multi-Yard</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative background blur circle */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#009b7d]/8 to-[#0284c7]/8 rounded-full blur-3xl pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* Mobile hero image (visible only on small screens) */}
          <div className="absolute inset-0 lg:hidden pointer-events-none">
            <div className="absolute inset-0 z-[1]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.12 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImage].src}
                    alt={heroImages[currentImage].alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom fade — pointer-events-none so it doesn't block buttons */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* ═══════════════════════ TRUST METRICS STRIP ═══════════════════════ */}
        <section className="relative py-10 px-6 bg-white border-b border-[#e2e8f0]">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Anchor, value: 50, suffix: "+", label: "Ships Processed", color: "from-[#009b7d] to-[#00b894]" },
                { icon: Award, value: 100, suffix: "%", label: "Audit Pass Rate", color: "from-[#0284c7] to-[#38bdf8]" },
                { icon: MapPin, value: 8, suffix: "+", label: "Yards Covered", color: "from-[#7c3aed] to-[#a78bfa]" },
                { icon: Users, value: 15, suffix: "+", label: "Years Experience", color: "from-[#d97706] to-[#fbbf24]" },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#0f172a]/5`}>
                    <metric.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0f172a]">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="text-xs text-[#94a3b8] font-medium">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* ═══════════════════════ WHAT YOU GET ═══════════════════════ */}
        <section className="relative py-24 px-6 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,155,125,0.03)_0%,transparent_70%)]" />
          <AnimatedSection className="max-w-6xl mx-auto relative z-10">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">What You Get</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-4">
                Structured Solutions for<br className="hidden md:block" /> Operational Needs
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Ensuring compliance is consistent, verifiable, and sustainable.
              </p>
            </motion.div>

            {/* Solution table */}
            <div className="space-y-4">
              {/* Header */}
              <motion.div variants={fadeUp} className="hidden md:grid grid-cols-3 gap-4 px-6 text-[11px] font-bold tracking-[0.15em] uppercase text-[#009b7d]">
                <span>Requirement</span>
                <span>Solution</span>
                <span>Outcome</span>
              </motion.div>

              {solutionRows.map((row, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="group grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-xl bg-[#f8fafb] border border-[#e2e8f0] hover:border-[#009b7d]/30 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#009b7d]/10 flex items-center justify-center shrink-0">
                      <row.icon className="w-5 h-5 text-[#009b7d]" />
                    </div>
                    <span className="text-[#0f172a] font-medium">{row.req}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#64748b]">{row.sol}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#64748b] group-hover:text-[#0f172a] transition-colors">{row.out}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* ═══════════════════════ WHY ESG CATALYST ═══════════════════════ */}
        <section className="relative py-24 px-6 bg-[#f4f7f9]">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Why ESG Catalyst</motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
                  Built on Real<br />
                  <span className="bg-linear-to-r from-[#009b7d] to-[#0284c7] bg-clip-text text-transparent">
                    Ship Recycling
                  </span>{" "}
                  Experience
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-[#64748b] text-lg leading-relaxed mb-8">
                  Practical experience in Alang ship recycling operations ensures solutions are implementable, auditable, and sustainable — even under operational pressure and workforce variability.
                </motion.p>

                <motion.div variants={fadeUp} custom={3} className="space-y-4">
                  {[
                    "Systems designed to function independent of individual personnel",
                    "Ensuring continuity, reliability, and audit readiness",
                    "Multi-yard operational exposure",
                    "NEBOSH IGC-certified & IMS Lead Auditor expertise",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009b7d] mt-0.5 shrink-0" />
                      <span className="text-[#475569]">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Stats grid */}
              <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 gap-4">
                {[
                  { label: "HKC-Aligned Operations", value: "Full Scope", icon: Anchor },
                  { label: "HSE Implementation", value: "High-Risk", icon: Shield },
                  { label: "Hazmat Management", value: "End-to-End", icon: Cpu },
                  { label: "Operational Exposure", value: "Multi-Yard", icon: Zap },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#009b7d]/30 hover:shadow-md transition-all group">
                    <stat.icon className="w-8 h-8 text-[#009b7d] mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-[#0f172a] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#64748b]">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </section>

        {/* ═══════════════════════ SERVICES OVERVIEW ═══════════════════════ */}
        <section className="relative py-24 px-6 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,132,199,0.03)_0%,transparent_60%)]" />
          <AnimatedSection className="max-w-6xl mx-auto relative z-10">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Our Services</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-4">
                Comprehensive Compliance<br className="hidden md:block" /> & Safety Solutions
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  variants={fadeUp}
                  custom={i}
                  className="group relative p-7 rounded-xl bg-[#f8fafb] border border-[#e2e8f0] hover:border-[#009b7d]/30 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#009b7d]/15 to-[#0284c7]/10 flex items-center justify-center">
                      <svc.icon className="w-6 h-6 text-[#009b7d]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#009b7d]/60 border border-[#009b7d]/20 px-2.5 py-1 rounded-full">
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-2 group-hover:text-[#009b7d] transition-colors">{svc.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{svc.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-[#009b7d] hover:text-[#0f172a] transition-colors group"
              >
                View all services in detail <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </section>

        {/* ═══════════════════════ HOW WE WORK ═══════════════════════ */}
        <section className="relative py-24 px-6 bg-[#f4f7f9]">
          <AnimatedSection className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">How We Work</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-4">Structured Process</h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Systems designed to function effectively independent of individual personnel, ensuring continuity, reliability, and audit readiness.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  custom={i}
                  className="relative group"
                >
                  {/* Connector line */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-px bg-linear-to-r from-[#009b7d]/30 to-transparent z-0" />
                  )}
                  <div className="relative p-6 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#009b7d]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="text-4xl font-bold text-[#009b7d]/15 group-hover:text-[#009b7d]/30 transition-colors">{step.num}</span>
                    <h3 className="text-lg font-semibold text-[#0f172a] mt-2 mb-2">{step.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* ═══════════════════════ INDUSTRIES ═══════════════════════ */}
        <section className="relative py-24 px-6 bg-white">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Industries</motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
                  Focused on Ship Recycling
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-[#64748b] leading-relaxed mb-8">
                  Core focus on ship recycling at Alang, with methodologies derived from high-risk operations and aligned with regulatory and classification expectations.
                </motion.p>
              </div>
              <motion.div variants={fadeUp} custom={2} className="space-y-4">
                <div className="p-6 rounded-xl border-2 border-[#009b7d]/30 bg-[#009b7d]/4">
                  <div className="flex items-center gap-3 mb-2">
                    <Anchor className="w-6 h-6 text-[#009b7d]" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#009b7d]">Primary</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Ship Recycling (Alang)</h3>
                </div>
                <div className="p-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafb]">
                  <div className="flex items-center gap-3 mb-2">
                    <Wrench className="w-6 h-6 text-[#64748b]" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#64748b]">Extended (Limited)</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f172a]">High-Risk Industrial Operations</h3>
                  <p className="text-[#64748b] text-sm mt-1">Where similar systems are applicable</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </section>

        {/* ═══════════════════════ CTA ═══════════════════════ */}
        <section className="relative py-28 px-6 overflow-hidden bg-linear-to-br from-[#f0fdf9] via-[#f4f7f9] to-[#f0f9ff]">
          {/* Animated background orbs */}
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-64 h-64 bg-[#009b7d]/5 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-[#0284c7]/5 rounded-full blur-3xl pointer-events-none"
          />
          <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Get Started</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6">
              Ready for Structured Compliance?
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[#64748b] text-lg mb-10 max-w-xl mx-auto">
              Connect with ESG Catalyst for compliance assessment, safety system implementation, or retainer-based support.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#009b7d] to-[#0284c7] text-white font-semibold rounded-lg shadow-lg shadow-[#009b7d]/20 overflow-hidden transition-all hover:shadow-xl hover:shadow-[#009b7d]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request a Compliance Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link
                href="/contact#discussion"
                className="flex items-center gap-2 px-8 py-4 border border-[#cbd5e1] text-[#0f172a] rounded-lg hover:bg-white hover:border-[#009b7d]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Schedule a Discussion
              </Link>
            </motion.div>
          </AnimatedSection>
        </section>

      </main>
      <Footer />
    </>
  )
}
