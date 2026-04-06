"use client"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import {
  motion, useMotionValue, useSpring, useTransform, useMotionTemplate, animate, type Variants,
} from "framer-motion"
import {
  ArrowRight, Play, Menu, X, TrendingUp, Users, Shield, Zap,
  BarChart3, FileText, Wallet, Bell, Search, Settings, Home, PieChart, CreditCard, Receipt,
} from "lucide-react"

/* ─── animation variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const float: Variants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    transition: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
  }),
}

/* ─── animated counter hook ─── */
function useCounter(target: number, duration = 2, delay = 0) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = (now - start - delay * 1000) / (duration * 1000)
            if (elapsed < 0) { requestAnimationFrame(tick); return }
            const progress = Math.min(elapsed, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, delay])

  return { value, ref }
}

/* ─── sidebar icons for dashboard mockup ─── */
const SIDEBAR = [Home, BarChart3, FileText, Wallet, CreditCard, Receipt, PieChart, Settings]
const BAR_HEIGHTS = [42, 58, 35, 72, 50, 85, 65]
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]

export default function PremiumHero() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* stats counters */
  const stat1 = useCounter(110, 2.4, 0.8)
  const stat2 = useCounter(500, 2.4, 1.0)
  const stat3 = useCounter(95, 2.0, 1.2)
  const stat4 = useCounter(28, 1.6, 1.4)

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#27374D]"
      style={{ backgroundImage: "linear-gradient(180deg, #27374D 0%, #27374D 38%, #2d3f56 100%)" }}
    >
      {/* ── Background effects ── */}
      {/* Soft gradient orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.35] blur-[160px]"
        style={{ background: "radial-gradient(circle, #526D82, transparent 70%)", top: "-15%", left: "-10%" }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.25] blur-[140px]"
        style={{ background: "radial-gradient(circle, #9DB2BF, transparent 70%)", bottom: "10%", right: "-5%" }}
        animate={{ x: [0, -50, 25, 0], y: [0, 40, -25, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.2] blur-[120px]"
        style={{ background: "radial-gradient(circle, #DDE6ED, transparent 70%)", top: "35%", left: "55%" }}
        animate={{ x: [0, 35, -45, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#9DB2BF 1px, transparent 1px), linear-gradient(90deg, #9DB2BF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating decorative elements */}
      <motion.div custom={0} variants={float} animate="animate" className="absolute top-[20%] left-[8%] w-3 h-3 rounded-full bg-[#DDE6ED]/35 z-[2]" />
      <motion.div custom={1} variants={float} animate="animate" className="absolute top-[30%] right-[12%] w-4 h-4 rounded-full bg-[#9DB2BF]/45 z-[2]" />
      <motion.div custom={2} variants={float} animate="animate" className="absolute top-[60%] left-[15%] w-2 h-2 rounded-full bg-[#526D82]/55 z-[2]" />
      <motion.div custom={3} variants={float} animate="animate" className="absolute bottom-[25%] right-[8%] w-5 h-5 rounded-full border border-[#DDE6ED]/30 z-[2]" />
      <motion.div custom={1} variants={float} animate="animate" className="absolute top-[45%] right-[25%] w-2.5 h-2.5 rotate-45 bg-[#9DB2BF]/30 z-[2]" />

      {/* ── Glassmorphic Navbar ── */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "blur(12px)",
          backgroundColor: scrolled ? "rgba(39,55,77,0.92)" : "rgba(39,55,77,0.32)",
          borderBottom: `1px solid rgba(157,178,191,${scrolled ? 0.2 : 0.1})`,
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/premium" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-[#9DB2BF]/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <svg viewBox="0 0 32 32" className="w-8 h-8 relative">
                <defs>
                  <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#9DB2BF" />
                    <stop offset="100%" stopColor="#DDE6ED" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="12" height="12" rx="3" fill="url(#logo-grad)" />
                <rect x="18" y="2" width="12" height="12" rx="3" fill="#526D82" opacity="0.7" />
                <rect x="2" y="18" width="12" height="12" rx="3" fill="#526D82" opacity="0.75" />
                <rect x="18" y="18" width="12" height="12" rx="3" fill="url(#logo-grad)" />
              </svg>
            </div>
            <span className="font-bold text-lg text-[#DDE6ED] tracking-tight">
              Grow<span className="text-[#9DB2BF]">Bridge</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {["Platform", "Features", "Solutions", "Pricing"].map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                className="px-4 py-2 text-sm text-[#9DB2BF] hover:text-[#DDE6ED] rounded-lg hover:bg-[#9DB2BF]/[0.12] transition-all duration-200"
              >
                {l}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="text-sm text-[#9DB2BF] hover:text-[#DDE6ED] transition-colors">
              Sign In
            </Link>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="relative group px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden inline-flex items-center gap-1.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9DB2BF] to-[#526D82] transition-all duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#DDE6ED] to-[#9DB2BF]" />
                <span className="relative">Start Free</span>
                <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <button className="md:hidden p-2 text-[#9DB2BF] hover:text-[#DDE6ED] cursor-pointer" onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileNav && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-[#526D82]/35 bg-[#27374D]/92 backdrop-blur-xl px-6 py-4 space-y-2"
          >
            {["Platform", "Features", "Solutions", "Pricing"].map((l) => (
              <Link key={l} href={`#${l.toLowerCase()}`} className="block py-2 text-[#9DB2BF] hover:text-[#DDE6ED] text-sm">
                {l}
              </Link>
            ))}
            <Link href="/contact" className="block mt-3 text-center py-2.5 rounded-full bg-[#9DB2BF] text-[#27374D] text-sm font-semibold">
              Start Free
            </Link>
          </motion.div>
        )}
      </motion.nav>

      {/* ── Hero Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-8">
        <motion.div className="text-center max-w-4xl mx-auto" initial="hidden" animate="show" variants={stagger}>
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#526D82]/50 bg-[#526D82]/25 backdrop-blur-sm px-5 py-2 text-sm text-[#DDE6ED] shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Trusted by 500+ Businesses Across 28+ States
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp} custom={0.15}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="text-[#DDE6ED]">GROW BRIDGE:</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #DDE6ED 0%, #9DB2BF 45%, #526D82 100%)" }}
            >
              Where Indian Businesses Scale.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp} custom={0.3}
            className="mt-6 text-base sm:text-lg text-[#9DB2BF]/90 max-w-2xl mx-auto leading-relaxed"
          >
            The complete growth ecosystem for startups and MSMEs across India. From MSME funding & government schemes to business registration, compliance, and digital transformation — everything in one platform.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={0.45} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white overflow-hidden shadow-[0_8px_30px_rgba(157,178,191,0.22)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82] bg-[length:200%_100%] group-hover:animate-[shimmer_2s_ease-in-out_infinite]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)]" />
                <span className="relative">Get Free Growth Assessment</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-medium text-[#DDE6ED] border border-[#526D82]/50 bg-[#526D82]/15 hover:bg-[#526D82]/30 hover:text-white hover:border-[#9DB2BF]/40 transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[#526D82]/30 flex items-center justify-center group-hover:bg-[#526D82]/40 transition-colors">
                <Play className="w-3.5 h-3.5 ml-0.5 text-[#DDE6ED]" />
              </div>
              Check Eligibility Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Floating Dashboard Mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 4 }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-5xl mt-20"
          style={{ perspective: "1400px" }}
        >
          {/* Glow behind */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] rounded-full bg-[#9DB2BF]/15 blur-[80px] pointer-events-none" />

          <div
            className="relative rounded-2xl border border-[#526D82] bg-[#27374D]/80 shadow-[0_32px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl overflow-hidden"
            style={{ transform: "rotateX(4deg)", transformOrigin: "center 80%" }}
          >
            {/* Browser chrome */}
            <div className="h-11 border-b border-[#526D82] flex items-center px-4 gap-3 bg-[#27374D]/80">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]/70" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]/70" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="rounded-lg bg-[#526D82]/40 border border-[#526D82] px-6 py-1.5 text-[11px] text-[#9DB2BF] font-mono flex items-center gap-2">
                  <Search className="w-3 h-3" />
                  app.growbridge.org/dashboard
                </div>
              </div>
              <div className="flex gap-2">
                <Bell className="w-3.5 h-3.5 text-[#526D82]" />
                <Settings className="w-3.5 h-3.5 text-[#526D82]" />
              </div>
            </div>

            {/* Dashboard body */}
            <div className="flex h-[340px] sm:h-[380px]">
              {/* Sidebar */}
              <div className="hidden sm:flex w-14 border-r border-[#526D82] bg-[#27374D]/60 flex-col items-center py-4 gap-1">
                {SIDEBAR.map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.06 }}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${i === 1 ? "bg-[#9DB2BF]/15 text-[#9DB2BF]" : "text-[#526D82] hover:text-[#9DB2BF]"}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 sm:p-5 overflow-hidden bg-[#2d3f56]/50">
                {/* Top stat cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Funding Enabled", value: "₹110Cr+", change: "+₹18Cr this quarter", color: "text-emerald-500" },
                    { label: "Active Schemes", value: "50+", change: "PMEGP, MUDRA, CGTMSE", color: "text-[#9DB2BF]" },
                    { label: "Success Rate", value: "95%", change: "scheme approvals", color: "text-amber-500" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      className="rounded-xl border border-[#526D82] bg-[#27374D]/65 p-3"
                    >
                      <p className="text-[10px] text-[#9DB2BF] font-medium">{s.label}</p>
                      <p className="text-lg font-bold text-[#DDE6ED] mt-0.5">{s.value}</p>
                      <p className={`text-[10px] font-semibold mt-1 ${s.color}`}>{s.change}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="flex gap-4 h-[calc(100%-100px)]">
                  {/* Bar chart */}
                  <div className="flex-1 rounded-xl border border-[#526D82] bg-[#27374D]/50 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[11px] font-semibold text-[#9DB2BF]">Funding Disbursed</p>
                      <span className="text-[10px] text-[#9DB2BF] border border-[#526D82] rounded px-2 py-0.5 bg-[#526D82]/30">FY 2025-26</span>
                    </div>
                    <div className="flex items-end gap-[6px] h-[calc(100%-32px)]">
                      {BAR_HEIGHTS.map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 1.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full rounded-md bg-gradient-to-t from-[#526D82] to-[#9DB2BF]"
                          />
                          <span className="text-[8px] text-[#9DB2BF]">{MONTHS[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity feed */}
                  <div className="hidden lg:block w-[200px] rounded-xl border border-[#526D82] bg-[#27374D]/50 p-4">
                    <p className="text-[11px] font-semibold text-[#9DB2BF] mb-3">Recent Activity</p>
                    <div className="space-y-2.5">
                      {[
                        { text: "PMEGP Subsidy ₹25L Approved", time: "2m ago", color: "bg-emerald-500" },
                        { text: "Udyam Registration Complete", time: "1hr ago", color: "bg-[#9DB2BF]" },
                        { text: "CGTMSE Guarantee ₹2Cr", time: "3hr ago", color: "bg-amber-500" },
                        { text: "ISO 9001 Certification Filed", time: "1d ago", color: "bg-violet-500" },
                        { text: "MUDRA Loan ₹10L Disbursed", time: "2d ago", color: "bg-pink-500" },
                      ].map((a, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.0 + i * 0.12 }}
                          className="flex items-start gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${a.color} mt-1.5 shrink-0`} />
                          <div>
                            <p className="text-[10px] text-[#9DB2BF] leading-snug">{a.text}</p>
                            <p className="text-[9px] text-[#526D82]">{a.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reflection glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[#9DB2BF]/10 blur-[60px] rounded-full pointer-events-none" />
        </motion.div>

        {/* ── Trust Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { ref: stat1.ref, value: stat1.value, suffix: "Cr+", prefix: "₹", label: "Funding Enabled" },
              { ref: stat2.ref, value: stat2.value, suffix: "+", prefix: "", label: "Businesses Served" },
              { ref: stat3.ref, value: stat3.value, suffix: "%", prefix: "", label: "Success Rate" },
              { ref: stat4.ref, value: stat4.value, suffix: "+", prefix: "", label: "States Covered" },
            ].map((s) => (
              <motion.div
                key={s.label}
                ref={s.ref}
                className="text-center rounded-2xl border border-[#526D82] bg-[#27374D]/70 py-5 px-3 backdrop-blur-sm shadow-sm"
                whileHover={{ scale: 1.04, y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <p className="text-2xl sm:text-3xl font-black text-[#DDE6ED] tabular-nums">
                  {s.prefix}{s.value.toLocaleString()}{s.suffix}
                </p>
                <p className="text-xs text-[#9DB2BF] font-medium mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#27374D] to-transparent pointer-events-none z-10" />
    </section>
  )
}
