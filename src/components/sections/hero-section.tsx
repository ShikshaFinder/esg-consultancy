"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight, CheckCircle, TrendingUp, Shield, Zap, ChevronDown, MapPin, Phone, Mail, User, Lock,
} from "lucide-react"
import {
  useMotionTemplate, useMotionValue, motion, animate,
} from "framer-motion"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"

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

      {/* 21st.dev BouncingBalls ambient particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-40">
        <BouncingBalls
          numBalls={60}
          colors={["#355872", "#7AAACE", "#9CD5FF", "#F7F8F0"]}
          opacity={0.3}
          minRadius={0.3}
          maxRadius={1.5}
          speed={0.2}
          interactive={false}
        />
      </div>

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
                <Link href="/schemes">
                  <MetalButton variant="primary">
                    <span className="flex items-center gap-2">
                      Explore Schemes
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </MetalButton>
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

          {/* Right — Consultation Card (Ewolyn-style two-column) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden sm:block"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-[#7AAACE]/25 shadow-2xl backdrop-blur-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left — Team Photo + Contact Info */}
                <div className="relative min-h-[420px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/75 to-[#0a1628]/92" />
                  <div className="relative z-10 flex flex-col justify-between h-full p-6">
                    {/* Top badge */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.08] px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-md w-fit">
                      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      Grow Bridge · Active Now
                    </span>

                    {/* Middle content */}
                    <div className="my-auto py-6">
                      <h3 className="text-2xl font-bold text-white leading-tight mb-1.5">
                        Talk to a Growth Expert
                      </h3>
                      <p className="text-white/50 text-sm mb-8">Free consultation for your business</p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#9CD5FF]/15 flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-[#9CD5FF]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">Location</p>
                            <p className="text-white text-sm font-medium">Ahmedabad, Gujarat</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#9CD5FF]/15 flex items-center justify-center shrink-0">
                            <Phone className="w-4 h-4 text-[#9CD5FF]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">Phone</p>
                            <p className="text-white text-sm font-medium">+91 84878 28752</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#9CD5FF]/15 flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-[#9CD5FF]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">Email</p>
                            <p className="text-white text-sm font-medium">abhay@growbridge.org</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom trust badges */}
                    <div className="flex flex-wrap gap-2">
                      {[
                        { icon: "✓", label: "1000+ Clients" },
                        { icon: "✓", label: "Pan India" },
                        { icon: "✓", label: "7+ Years" },
                      ].map((b) => (
                        <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] text-white/75 backdrop-blur-sm">
                          <span className="text-[#9CD5FF]">{b.icon}</span> {b.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — Form */}
                <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,1)_100%)] p-6">
                  <span className="inline-flex rounded-full bg-[#355872]/12 px-3 py-1 text-xs font-semibold text-[#355872] mb-3">
                    Free Consultation
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Check Your Eligibility
                  </h3>
                  <p className="text-sm text-slate-500 mb-5">
                    Our expert will contact you within 2 hours.
                  </p>
                  <div className="space-y-3.5">
                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Enter your name" className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#355872] focus:ring-4 focus:ring-[#355872]/10" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="tel" placeholder="10-digit mobile" className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#355872] focus:ring-4 focus:ring-[#355872]/10" />
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#355872] via-[#5a8fad] to-[#7AAACE] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(53,88,114,0.3)] cursor-pointer hover:shadow-[0_12px_32px_rgba(53,88,114,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200">
                      Get Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                      <Lock className="w-3 h-3" /> 100% Private. No spam guaranteed.
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
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
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
