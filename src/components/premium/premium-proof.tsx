"use client"
import { useRef, useEffect, useState } from "react"
import { motion, type Variants, useInView } from "framer-motion"
import { Star, Quote, Zap, Shield, Clock, HeartHandshake } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

/* ─── Animated Counter ─── */
function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2200
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setVal(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>
}

/* ─── Process Steps ─── */
const STEPS = [
  { icon: Zap, num: "01", title: "Quick Onboarding", desc: "Tell us about your business in 2 minutes. Our AI analyzes your profile instantly.", gradient: "from-[#526D82] to-[#9DB2BF]" },
  { icon: Shield, num: "02", title: "Smart Matching", desc: "We match you with eligible schemes, services, and growth opportunities automatically.", gradient: "from-[#9DB2BF] to-[#DDE6ED]" },
  { icon: Clock, num: "03", title: "Expert Execution", desc: "Dedicated advisors handle paperwork, applications, and compliance — you focus on business.", gradient: "from-[#526D82] to-[#DDE6ED]" },
  { icon: HeartHandshake, num: "04", title: "Continuous Growth", desc: "Ongoing monitoring, new opportunity alerts, and strategic recommendations to keep growing.", gradient: "from-[#9DB2BF] to-[#526D82]" },
]

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    quote: "GrowBridge helped us secure a ₹25L PMEGP grant within 45 days. The process was completely seamless — they handled everything from documentation to final approval.",
    name: "Rajesh Patel", role: "Founder, TechnoFab Industries", location: "Ahmedabad, Gujarat",
    rating: 5, avatar: "RP",
  },
  {
    quote: "From company registration to GST filing, their platform automates everything. We saved 120+ hours in our first quarter alone. Best investment for our startup.",
    name: "Priya Sharma", role: "CEO, NexGen Solutions", location: "Mumbai, Maharashtra",
    rating: 5, avatar: "PS",
  },
  {
    quote: "The growth intelligence feature identified 8 government schemes we were eligible for but didn't know about. Already secured 3 of them — ₹40L in total funding.",
    name: "Arjun Mehta", role: "Director, GreenLeaf Exports", location: "Surat, Gujarat",
    rating: 5, avatar: "AM",
  },
]

export default function PremiumProof() {
  return (
    <>
      {/* ━━━ HOW IT WORKS ━━━ */}
      <section className="relative overflow-hidden px-6 py-28 bg-[#2d3f56]">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#526D82]/20 blur-[100px] pointer-events-none" />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}
        >
          <div className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#526D82] bg-[#526D82]/30 px-4 py-1.5 text-xs font-medium text-[#9DB2BF]"
            >
              ⚡ How It Works
            </motion.span>
            <motion.h2 variants={fadeUp} custom={0.1} className="text-3xl font-bold tracking-tight text-[#DDE6ED] sm:text-4xl md:text-5xl">
              From Signup to Growth{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82]">in 4 Steps</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.num} variants={fadeUp} custom={i * 0.08}
                className="group relative rounded-2xl border border-[#526D82] bg-[#27374D]/60 p-6 hover:bg-[#526D82]/30 hover:border-[#9DB2BF]/20 hover:shadow-lg hover:shadow-[#9DB2BF]/10 transition-all duration-500"
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                {/* Step number */}
                <span className="absolute top-2 right-4 select-none text-[64px] font-black leading-none text-[#526D82]/30 transition-colors duration-500 group-hover:text-[#9DB2BF]/20">
                  {s.num}
                </span>

                {/* Icon with hover animation */}
                <motion.div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 shadow-md`}
                  whileHover={{ rotate: -8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <s.icon className="w-5 h-5 text-white" />
                </motion.div>

                <h3 className="text-[#DDE6ED] font-bold text-base mb-2">{s.title}</h3>
                <p className="text-[#9DB2BF]/70 text-sm leading-relaxed">{s.desc}</p>

                {/* Connector line (hidden on last) */}
                {i < 3 && (
                  <div className="absolute top-1/2 -right-3 hidden w-6 border-t border-dashed border-[#526D82]/50 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ━━━ SOCIAL PROOF / STATS ━━━ */}
      <section className="relative px-6 py-24 bg-[#DDE6ED]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9DB2BF]/10 to-transparent pointer-events-none" />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}
        >
          {/* Big stats row */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
            {[
              { target: 500, prefix: "₹", suffix: "Cr+", label: "Capital Facilitated", sublabel: "across MSMEs" },
              { target: 10000, prefix: "", suffix: "+", label: "Businesses Served", sublabel: "pan India" },
              { target: 95, prefix: "", suffix: "%", label: "Success Rate", sublabel: "scheme approvals" },
              { target: 120, prefix: "", suffix: "+", label: "Hours Saved", sublabel: "per business/quarter" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp} custom={i * 0.1}
                className="group rounded-2xl border border-[#9DB2BF]/30 bg-white/70 px-4 py-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#526D82]/25 hover:bg-white hover:shadow-lg hover:shadow-[#526D82]/10"
                whileHover={{ scale: 1.04, y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <p className="text-3xl sm:text-4xl font-black text-[#27374D] tabular-nums mb-1">
                  <AnimatedNumber target={s.target} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="text-sm font-semibold text-[#526D82]">{s.label}</p>
                <p className="mt-0.5 text-xs text-[#9DB2BF]">{s.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-[#27374D] tracking-tight">
              Loved by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#526D82] to-[#27374D]">Business Owners</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[#526D82] text-base max-w-xl mx-auto">
              Real stories from real entrepreneurs who accelerated their growth with GrowBridge.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp} custom={i * 0.1}
                className="group relative rounded-2xl border border-[#9DB2BF]/25 bg-white/75 p-7 backdrop-blur-sm transition-all duration-500 hover:border-[#526D82]/25 hover:bg-white hover:shadow-xl hover:shadow-[#526D82]/8"
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-[#9DB2BF]/50" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.div key={j} whileHover={{ scale: 1.3, rotate: 15 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-[#526D82] text-sm leading-relaxed mb-6 group-hover:text-[#27374D] transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-[#9DB2BF]/25 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#27374D] to-[#526D82] text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[#27374D] font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-[#526D82]">{t.role}</p>
                    <p className="text-[10px] text-[#9DB2BF]">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
