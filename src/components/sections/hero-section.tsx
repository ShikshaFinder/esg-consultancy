"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight, CheckCircle, TrendingUp, Shield, Zap, ChevronDown,
} from "lucide-react"
import {
  useMotionTemplate, useMotionValue, motion, animate,
} from "framer-motion"

const AURORA_COLORS = ["#355872", "#7AAACE", "#9CD5FF", "#F7F8F0"]

const HERO_STATS = [
  { icon: TrendingUp, value: "₹110Cr+", label: "Total Funded" },
  { icon: CheckCircle, value: "95%", label: "Success Rate" },
  { icon: Shield, value: "28+ States", label: "Pan India" },
  { icon: Zap, value: "7–45 Days", label: "Fast Approvals" },
]

const TRUST_BADGES = [
  { icon: "🏛️", label: "PMEGP Subsidies" },
  { icon: "🛡️", label: "CGTMSE Guarantee" },
  { icon: "👨‍💼", label: "Expert Support" },
  { icon: "⚡", label: "Fast Processing" },
]

export default function HeroSection() {
  const color = useMotionValue(AURORA_COLORS[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    animate(color, AURORA_COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    })
  }, [])

  const bgImage = useMotionTemplate`radial-gradient(125% 125% at 65% 0%, #0a1628 50%, ${color}22)`
  const btnShadow = useMotionTemplate`0 4px 22px ${color}44`

  if (!mounted) return <section className="min-h-screen bg-[#0a1628]" />

  return (
    <motion.section
      style={{ backgroundImage: bgImage }}
      className="relative min-h-screen bg-[#0a1628] overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#355872]/[0.06] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#F7F8F0]/[0.04] blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#9CD5FF]/[0.04] blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
          {/* Left */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#7AAACE]/30 bg-white/[0.05] backdrop-blur-md px-4 py-2 text-xs sm:text-sm text-white/80">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9CD5FF] opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9CD5FF]" />
                </span>
                India&apos;s Premier MSME Growth Platform · 1,000+ Businesses Funded
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight leading-[1.08] text-white mb-5"
            >
              Funding, Compliance & Growth —{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #355872 0%, #7AAACE 35%, #9CD5FF 65%, #F7F8F0 100%)",
                }}
              >
                Unified for MSMEs
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="max-w-lg text-sm sm:text-base text-white/55 leading-relaxed mb-8"
            >
              Government schemes, company registration & business certifications.
              Expert guidance · Fast approvals · Transparent process.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <motion.div style={{ boxShadow: btnShadow }}>
                <Link
                  href="/schemes"
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#355872] via-[#7AAACE] to-[#9CD5FF] px-7 py-3 text-sm font-semibold text-white shadow-lg"
                >
                  Explore Schemes
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-sm px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all"
              >
                Book Free Consultation
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-6"
            >
              {TRUST_BADGES.map((b, i) => (
                <motion.span
                  key={b.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/60"
                >
                  <span>{b.icon}</span>
                  {b.label}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2"
            >
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <s.icon className="w-3.5 h-3.5 text-[#9CD5FF] shrink-0" />
                  <span className="text-xs font-semibold text-white">{s.value}</span>
                  <span className="text-xs text-white/40">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Consultation Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden sm:block"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-[#7AAACE]/20 bg-[#0a1628]/60 shadow-2xl backdrop-blur-2xl">
              {/* Image banner */}
              <div className="relative h-[170px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.35)_0%,rgba(10,22,40,0.75)_60%,rgba(10,22,40,0.95)_100%)]" />
                <div className="absolute inset-0 bg-[#355872]/[0.08] mix-blend-screen" />
                <div className="relative z-10 flex h-full flex-col justify-between p-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-md w-fit">
                    <span className="h-2 w-2 rounded-full bg-[#9CD5FF]" />
                    Grow Bridge · Active Now
                  </span>
                  <div>
                    <p className="mb-1 text-[10px] font-semibold tracking-[0.22em] text-[#9CD5FF]/90 uppercase">
                      Premium Advisory Desk
                    </p>
                    <h3 className="text-xl font-bold leading-tight text-white">
                      Talk to a Growth Expert
                    </h3>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,250,252,0.98)_100%)] p-5 lg:p-6">
                <div className="mb-4">
                  <span className="inline-flex rounded-full bg-[#355872]/15 px-3 py-1 text-xs font-semibold text-[#355872]">
                    Free Consultation
                  </span>
                </div>
                <h3 className="mb-1.5 text-xl font-bold leading-tight text-slate-900">
                  Check Your Growth Fit
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  Share your details and our team will map the right path for your business.
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Full Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#355872] focus:ring-4 focus:ring-[#355872]/15" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Phone Number</label>
                    <input type="tel" placeholder="10-digit mobile" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#355872] focus:ring-4 focus:ring-[#355872]/15" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Service Needed</label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all focus:border-[#355872] focus:ring-4 focus:ring-[#355872]/15">
                      <option>Choose service category</option>
                      <option>Registration & Compliance</option>
                      <option>Government Funding</option>
                      <option>Growth & Marketing</option>
                    </select>
                  </div>
                  <button className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#355872] via-[#7AAACE] to-[#9CD5FF] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(53,88,114,0.25)] cursor-pointer hover:opacity-90 transition-opacity">
                    Get Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="pt-0.5 text-center text-xs text-slate-500">
                    🔒 100% private. No spam guaranteed.
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-200 pt-4">
                  {[
                    { value: "1000+", label: "Funded" },
                    { value: "95%", label: "Success" },
                    { value: "24hr", label: "Response" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-lg font-black text-slate-900">{stat.value}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Glow beneath */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 blur-3xl rounded-full bg-[#355872]/15 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-widest uppercase text-white/25">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 text-white/25" />
      </motion.div>
    </motion.section>
  )
}
