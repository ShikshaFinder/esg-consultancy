"use client"
import { useRef, useEffect, useState } from "react"
import { motion, type Variants, useInView } from "framer-motion"
import { Star, Quote, Zap, Shield, Clock, HeartHandshake, Search, PenTool, Users, RefreshCcw, FileCheck, Truck } from "lucide-react"

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
  { icon: Zap, num: "01", title: "Initial Information", desc: "Share your business details in a quick consultation. We gather all necessary information to understand your needs.", gradient: "from-[#526D82] to-[#9DB2BF]" },
  { icon: Search, num: "02", title: "Analysts' Deep Dive", desc: "Our expert analysts research eligible schemes, funding options, and compliance requirements specific to your business.", gradient: "from-[#9DB2BF] to-[#DDE6ED]" },
  { icon: PenTool, num: "03", title: "Design Phase", desc: "We design a custom growth roadmap — DPR preparation, application strategy, and compliance blueprint.", gradient: "from-[#526D82] to-[#DDE6ED]" },
  { icon: Users, num: "04", title: "Client Collaboration", desc: "Review the proposed plan together. Your feedback shapes the final approach — no surprises, full transparency.", gradient: "from-[#9DB2BF] to-[#526D82]" },
  { icon: RefreshCcw, num: "05", title: "Refinement & Research", desc: "Fine-tune every detail based on your inputs. Additional research ensures maximum approval probability.", gradient: "from-[#526D82] to-[#9DB2BF]" },
  { icon: FileCheck, num: "06", title: "Draft Finalization", desc: "All documents, applications, and filings are finalized with precision before submission.", gradient: "from-[#9DB2BF] to-[#DDE6ED]" },
  { icon: Truck, num: "07", title: "Delivery & Support", desc: "Applications submitted, approvals tracked, and ongoing support until your funding or certification is secured.", gradient: "from-[#526D82] to-[#DDE6ED]" },
]

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    quote: "GrowBridge helped us secure Startup India Seed Fund worth ₹50L for our renewable energy venture. The documentation and portal submission was handled end-to-end — we just focused on building.",
    name: "Scion Renewable Pvt Ltd", role: "Clean Energy Startup", location: "Rajkot, Gujarat",
    rating: 5, avatar: "SR",
  },
  {
    quote: "From trademark registration to DPIIT certification, GrowBridge handled everything for our production company. Their team’s expertise with government portals saved us months of effort.",
    name: "Pruthveek Raval Production", role: "Media & Entertainment", location: "Gandhidham, Gujarat",
    rating: 5, avatar: "PR",
  },
  {
    quote: "As a forensic consultancy LLP, we needed specialized compliance support. GrowBridge matched us with the right seed fund scheme and got our application approved within 45 days.",
    name: "Saroj Jagdish Forensic LLP", role: "Forensic Consultancy", location: "Surat, Gujarat",
    rating: 5, avatar: "SJ",
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82]">in 7 Steps</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
              { target: 110, prefix: "₹", suffix: "Cr+", label: "Funding Enabled", sublabel: "across MSMEs & startups" },
              { target: 500, prefix: "", suffix: "+", label: "Businesses Served", sublabel: "across 28+ states" },
              { target: 95, prefix: "", suffix: "%", label: "Success Rate", sublabel: "scheme approvals" },
              { target: 50, prefix: "", suffix: "+", label: "Active Schemes", sublabel: "matched & filed" },
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
