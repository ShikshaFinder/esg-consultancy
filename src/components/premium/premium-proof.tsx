"use client"
import { useRef, useEffect, useState } from "react"
import { motion, type Variants, useInView, useScroll, useTransform } from "framer-motion"
import { Star, Quote, Zap, Shield, Clock, Search, PenTool, Users, RefreshCcw, FileCheck, Truck } from "lucide-react"

const blurFadeUp: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 24 },
  show: (d: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 24, filter: "blur(6px)" },
  show: (d: number = 0) => ({
    opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

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

/* ─── Animated SVG Progress Ring ─── */
function ProgressRing({ value, size = 80, strokeWidth = 6, color = "#1e3a5c" }: {
  value: number; size?: number; strokeWidth?: number; color?: string
}) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg ref={ref} width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke="rgba(10,22,40,0.15)" strokeWidth={strokeWidth}
      />
      {/* Animated progress circle */}
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </svg>
  )
}

/* ─── Process Steps ─── */
const STEPS = [
  { icon: Zap, num: "01", title: "Initial Information", desc: "Share your business details in a quick consultation. We gather all necessary information to understand your needs.", gradient: "from-[#1B4F8A] to-[#1B4F8A]" },
  { icon: Search, num: "02", title: "Analysts' Deep Dive", desc: "Our expert analysts research eligible schemes, funding options, and compliance requirements specific to your business.", gradient: "from-[#1B4F8A] to-[#2E7DD9]" },
  { icon: PenTool, num: "03", title: "Design Phase", desc: "We design a custom growth roadmap — DPR preparation, application strategy, and compliance blueprint.", gradient: "from-[#1B4F8A] to-[#1B4F8A]" },
  { icon: Users, num: "04", title: "Client Collaboration", desc: "Review the proposed plan together. Your feedback shapes the final approach — no surprises, full transparency.", gradient: "from-[#1B4F8A] to-[#1B4F8A]" },
  { icon: RefreshCcw, num: "05", title: "Refinement & Research", desc: "Fine-tune every detail based on your inputs. Additional research ensures maximum approval probability.", gradient: "from-[#1B4F8A] to-[#1B4F8A]" },
  { icon: FileCheck, num: "06", title: "Draft Finalization", desc: "All documents, applications, and filings are finalized with precision before submission.", gradient: "from-[#1B4F8A] to-[#2E7DD9]" },
  { icon: Truck, num: "07", title: "Delivery & Support", desc: "Applications submitted, approvals tracked, and ongoing support until your funding or certification is secured.", gradient: "from-[#1B4F8A] to-[#1B4F8A]" },
]

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    quote: "GrowBridge helped us secure Startup India Seed Fund worth ₹50L for our renewable energy venture. The documentation and portal submission was handled end-to-end — we just focused on building.",
    name: "Scion Renewable Pvt Ltd", role: "Clean Energy Startup", location: "Rajkot, Gujarat",
    rating: 5, avatar: "SR",
  },
  {
    quote: "From trademark registration to DPIIT certification, GrowBridge handled everything for our production company. Their team's expertise with government portals saved us months of effort.",
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
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 0.8", "end 0.4"] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <>
      {/* ━━━ HOW IT WORKS ━━━ */}
      <section className="relative overflow-hidden px-6 py-28 bg-[#FFF8F0]">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#526D82]/20 blur-[100px] pointer-events-none" />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}
        >
          <div className="text-center mb-16">
            <motion.span variants={blurFadeUp} custom={0}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#526D82] bg-[#526D82]/30 px-4 py-1.5 text-xs font-medium text-black"
            >
              ⚡ How It Works
            </motion.span>
            <motion.h2 variants={blurFadeUp} custom={0.1} className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
              From Signup to Growth{" "}
              <span className="text-black bg-gradient-to-r from-[#1B4F8A] via-[#2E7DD9] to-[#1B4F8A]">in 7 Steps</span>
            </motion.h2>
          </div>

          {/* Timeline grid with animated connector */}
          <div ref={timelineRef} className="relative">
            {/* Animated vertical connector line (visible on lg+) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
              <div className="absolute inset-0 bg-[#526D82]/30" />
              <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#9DB2BF] to-[#DDE6ED]"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.num} variants={scaleIn} custom={i * 0.08}
                  className="group relative rounded-2xl border border-white/25 blue-card p-6
                    hover:bg-[#1B4F8A]/70 hover:border-[#1B4F8A]/80 hover:shadow-xl hover:shadow-[#1B4F8A]/20 transition-all duration-500"
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                >
                  {/* Step number watermark */}
                  <span className="absolute top-2 right-4 select-none text-[64px] font-black leading-none text-black/30 transition-colors duration-500 group-hover:text-black/40">
                    {s.num}
                  </span>

                  {/* Icon with gradient + animated ring */}
                  <motion.div
                    className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 shadow-md`}
                    whileHover={{ rotate: -8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <s.icon className="w-5 h-5 text-black relative z-10" />
                    {/* Breathe ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{ boxShadow: ["0 0 0 0 rgba(30,58,92,0.3)", "0 0 0 6px rgba(30,58,92,0)", "0 0 0 0 rgba(30,58,92,0)"] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </motion.div>

                  <h3 className="text-black font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-black/70 text-sm leading-relaxed">{s.desc}</p>

                  {/* Bottom progress indicator */}
                  <motion.div
                    className="mt-4 h-0.5 rounded-full blue-card overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${s.gradient}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
          {/* Stats with animated progress rings */}
          <motion.div variants={blurFadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
            {[
              { target: 110, prefix: "₹", suffix: "Cr+", label: "Funding Enabled", sublabel: "across MSMEs & startups", pct: 92, color: "#1e3a5c" },
              { target: 500, prefix: "", suffix: "+", label: "Businesses Served", sublabel: "across 28+ states", pct: 88, color: "#1e3a5c" },
              { target: 95, prefix: "", suffix: "%", label: "Success Rate", sublabel: "scheme approvals", pct: 95, color: "#1e3a5c" },
              { target: 50, prefix: "", suffix: "+", label: "Active Schemes", sublabel: "matched & filed", pct: 82, color: "#1e3a5c" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={scaleIn} custom={i * 0.1}
                className="group relative rounded-2xl border border-white/25 bg-white/60 backdrop-blur-sm px-4 py-8 text-center
                  transition-all duration-500 hover:border-white/20 hover:bg-white/90 hover:shadow-xl hover:shadow-[#1B4F8A]/20
                  shadow-[inset_0_1px_0_rgba(0,0,0,0.5),0_2px_10px_rgba(10,22,40,0.06)] overflow-hidden"
                whileHover={{ scale: 1.04, y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                {/* Background progress ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-500">
                  <ProgressRing value={s.pct} size={120} strokeWidth={4} color={s.color} />
                </div>

                <p className="relative text-3xl sm:text-4xl font-black text-black tabular-nums mb-1">
                  <AnimatedNumber target={s.target} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="relative text-sm font-semibold text-black">{s.label}</p>
                <p className="relative mt-0.5 text-xs text-black">{s.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="text-center mb-14">
            <motion.h2 variants={blurFadeUp} className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
              Loved by <span className="text-black bg-gradient-to-r from-[#526D82] to-[#FFF8F0]">Business Owners</span>
            </motion.h2>
            <motion.p variants={blurFadeUp} className="mt-4 text-black text-base max-w-xl mx-auto">
              Real stories from real entrepreneurs who accelerated their growth with GrowBridge.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                variants={scaleIn} custom={i * 0.1}
                className="group relative rounded-2xl border border-[#9DB2BF]/15 bg-white/60 backdrop-blur-sm p-7
                  transition-all duration-500 hover:border-[#526D82]/25 hover:bg-white/90 hover:shadow-2xl hover:shadow-[#1B4F8A]/20
                  shadow-[inset_0_1px_0_rgba(0,0,0,0.5),0_2px_8px_rgba(10,22,40,0.04)] overflow-hidden"
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 18 } }}
              >
                {/* Hover gradient border top */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#526D82] to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Quote icon with animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 300 }}
                >
                  <Quote className="mb-4 h-8 w-8 text-black/50 group-hover:text-black/60 transition-colors duration-300" />
                </motion.div>

                {/* Stars with stagger */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.05 + i * 0.1, type: "spring", stiffness: 400 }}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                    >
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-black text-sm leading-relaxed mb-6 group-hover:text-black transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author with slide-in */}
                <motion.div
                  className="flex items-center gap-3 border-t border-white/25 pt-5"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <motion.div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFF8F0] to-[#526D82] text-xs font-bold text-black"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t.avatar}
                  </motion.div>
                  <div>
                    <p className="text-black font-semibold text-sm">{t.name}</p>
                    <p className="text-black text-xs">{t.role} · {t.location}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}
