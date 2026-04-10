"use client"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion"
import { Rocket, TrendingUp, Shield, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

/* ─── Variants ─── */
const blurFadeUp: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  show: (d: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─── Animated Ring Chart ─── */
function RingChart({ value, label, color, delay = 0 }: {
  value: number; label: string; color: string; delay?: number
}) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const size = 64
  const strokeWidth = 5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative">
        <svg ref={ref} width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke="rgba(30,58,92,0.2)" strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke={color} strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-black">{value}%</span>
        </div>
      </div>
      <span className="text-[10px] text-black text-center">{label}</span>
    </div>
  )
}

const TABS = [
  {
    id: "startup",
    label: "Early-Stage Startups",
    icon: Rocket,
    color: "from-[#1B4F8A] to-[#2E7DD9]/80",
    border: "border-[#1B4F8A]/70",
    accent: "#1e3a5c",
    accentBg: "bg-[#EBF4FF]",
    heading: "Launch with confidence",
    description:
      "From Udyam & DPIIT registration to Startup India Seed Fund up to ₹50L — we handle the paperwork so you can focus on building your product.",
    stats: [
      { label: "Seed Fund", value: "Up to ₹50L" },
      { label: "Approval Time", value: "7–15 days" },
      { label: "PMEGP Subsidy", value: "Up to 35%" },
    ],
    features: [
      "Udyam & DPIIT Registration",
      "Startup India Seed Fund (up to ₹50L)",
      "PMEGP Subsidy (15–35%)",
      "GST, PAN & Compliance Setup",
      "Pvt Ltd / LLP / OPC Formation",
    ],
    rings: [
      { label: "Registration", pct: 95 },
      { label: "Seed Fund", pct: 91 },
      { label: "Compliance", pct: 92 },
    ],
  },
  {
    id: "growth",
    label: "Growth-Stage MSMEs",
    icon: TrendingUp,
    color: "from-[#1B4F8A] to-[#2E7DD9]/80",
    border: "border-[#1B4F8A]/70",
    accent: "#1e3a5c",
    accentBg: "bg-[#EBF4FF]",
    heading: "Scale without limits",
    description:
      "Access MUDRA loans up to ₹10L, CGTMSE guarantee up to ₹5Cr, Stand-Up India up to ₹1Cr, and NAIF with 3% interest subvention — designed for growing businesses.",
    stats: [
      { label: "CGTMSE Coverage", value: "Up to ₹5Cr" },
      { label: "Success Rate", value: "95%" },
      { label: "Processing", value: "15–25 days" },
    ],
    features: [
      "MUDRA Loans (Shishu / Kishore / Tarun)",
      "CGTMSE Collateral-Free Guarantee",
      "Stand-Up India (SC/ST & Women)",
      "NAIF — 3% Interest Subvention",
      "Working Capital & Export Schemes",
    ],
    rings: [
      { label: "Loan Approval", pct: 91 },
      { label: "Subsidy Claims", pct: 85 },
      { label: "Export Docs", pct: 93 },
    ],
  },
  {
    id: "compliance",
    label: "Compliance & Certifications",
    icon: Shield,
    color: "from-[#1B4F8A] to-[#2E7DD9]/80",
    border: "border-[#1B4F8A]/70",
    accent: "#1e3a5c",
    accentBg: "bg-[#EBF4FF]",
    heading: "Stay audit-ready, always",
    description:
      "GST & ITR filing, CIBIL score repair (+85 pts avg), ISO/ZED certification with 80% subsidy, and FSSAI/BIS licensing — compliance handled end-to-end.",
    stats: [
      { label: "Tax Accuracy", value: "99.8%" },
      { label: "ZED Subsidy", value: "Up to 80%" },
      { label: "CIBIL Lift", value: "+85 pts avg" },
    ],
    features: [
      "GST, ITR & TDS Auto-Filing",
      "CIBIL Score Repair (45–90 days)",
      "ISO 9001 / 14001 / 45001",
      "ZED Certification (80% subsidy)",
      "FSSAI, BIS & IEC Licensing",
    ],
    rings: [
      { label: "Filing Accuracy", pct: 99 },
      { label: "Certification", pct: 91 },
      { label: "Score Boost", pct: 88 },
    ],
  },
]

export default function PremiumSolutions() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section
      id="solutions"
      className="relative px-6 py-28"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #FFF8F0 100%)" }}
    >
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#9DB2BF 1px, transparent 1px), linear-gradient(90deg, #9DB2BF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* heading with blur-fade */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={blurFadeUp}
          className="text-center mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-black">Solutions</p>
          <h2 className="text-3xl font-bold text-black md:text-5xl">
            Tailored for every{" "}
            <span className="bg-linear-to-r from-[#1B4F8A] via-[#2E7DD9] to-[#1B4F8A] text-black">
              stage of growth
            </span>
          </h2>
        </motion.div>

        {/* tab buttons with animated indicator */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TABS.map((t, i) => {
            const Icon = t.icon
            const isActive = i === active
            return (
              <motion.button
                key={t.id}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 cursor-pointer
                  ${isActive
                    ? "border border-white/25 bg-[#526D82]/35 backdrop-blur-md text-black shadow-lg shadow-[#9DB2BF]/10"
                    : "border border-transparent text-black hover:border-white/20 hover:bg-[#526D82]/20 hover:text-black"
                  }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
              >
                <motion.div
                  animate={isActive ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={16} style={{ color: isActive ? t.accent : undefined }} />
                </motion.div>
                {t.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSolutionTab"
                    className="absolute inset-0 rounded-full border border-white/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 24, scale: 0.97, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, scale: 0.97, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border ${tab.border} bg-linear-to-br ${tab.color} backdrop-blur-lg p-8 md:p-12
              shadow-[0_8px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(30,58,92,0.08)]`}
          >
            <div className="grid md:grid-cols-2 gap-10">
              {/* left */}
              <div>
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-black mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {tab.heading}
                </motion.h3>
                <motion.p
                  className="text-black leading-relaxed mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {tab.description}
                </motion.p>

                {/* stats row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {tab.stats.map((s, si) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + si * 0.08 }}
                    >
                      <p className="text-xl font-bold" style={{ color: tab.accent }}>{s.value}</p>
                      <p className="text-xs text-black mt-1">{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group"
                    style={{ color: tab.accent }}
                  >
                    Explore this plan
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* right — features + ring charts */}
              <div className="space-y-8">
                <div className="space-y-3">
                  {tab.features.map((f, fi) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ delay: fi * 0.08 + 0.1 }}
                      className="flex items-center gap-3 text-sm text-black group/feature"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: fi * 0.08 + 0.2, type: "spring", stiffness: 400 }}
                      >
                        <CheckCircle2 size={16} style={{ color: tab.accent }} className="shrink-0" />
                      </motion.div>
                      <span className="group-hover/feature:text-black transition-colors duration-200">{f}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Ring charts instead of progress bars */}
                <div className="flex justify-around pt-4">
                  {tab.rings.map((r, ri) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + ri * 0.1, type: "spring" }}
                    >
                      <RingChart value={r.pct} label={r.label} color={tab.accent} delay={ri * 0.15} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
