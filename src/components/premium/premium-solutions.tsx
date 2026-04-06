"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, TrendingUp, Shield, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

const TABS = [
  {
    id: "startup",
    label: "Early-Stage Startups",
    icon: Rocket,
    color: "from-[#27374D]/60 to-[#526D82]/55",
    border: "border-[#526D82]/75",
    accent: "#9DB2BF",
    accentBg: "bg-[#9DB2BF]",
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
    progress: [
      { label: "Registration", pct: 95 },
      { label: "Seed Fund Matching", pct: 91 },
      { label: "Compliance", pct: 92 },
    ],
  },
  {
    id: "growth",
    label: "Growth-Stage MSMEs",
    icon: TrendingUp,
    color: "from-[#526D82]/30 to-[#9DB2BF]/20",
    border: "border-[#9DB2BF]/40",
    accent: "#9DB2BF",
    accentBg: "bg-[#9DB2BF]",
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
    progress: [
      { label: "Loan Approval", pct: 91 },
      { label: "Subsidy Claims", pct: 85 },
      { label: "Export Docs", pct: 93 },
    ],
  },
  {
    id: "compliance",
    label: "Compliance & Certifications",
    icon: Shield,
    color: "from-[#27374D]/50 to-[#526D82]/40",
    border: "border-[#526D82]/60",
    accent: "#9DB2BF",
    accentBg: "bg-[#9DB2BF]",
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
    progress: [
      { label: "Filing Accuracy", pct: 99 },
      { label: "Certification", pct: 91 },
      { label: "Score Improvement", pct: 88 },
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
      style={{ background: "linear-gradient(180deg, #27374D 0%, #2d3f56 100%)" }}
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
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#9DB2BF]">Solutions</p>
          <h2 className="text-3xl font-bold text-[#DDE6ED] md:text-5xl">
            Tailored for every{" "}
            <span className="bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82] bg-clip-text text-transparent">
              stage of growth
            </span>
          </h2>
        </motion.div>

        {/* tab buttons */}
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
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                  ${isActive
                    ? "border border-[#9DB2BF]/30 bg-[#526D82]/40 text-[#DDE6ED] shadow-md shadow-[#9DB2BF]/8"
                    : "border border-transparent text-[#9DB2BF] hover:border-[#526D82] hover:bg-[#526D82]/25 hover:text-[#DDE6ED]"
                  }`}
              >
                <Icon size={16} style={{ color: isActive ? t.accent : undefined }} />
                {t.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSolutionTab"
                    className="absolute inset-0 rounded-full border border-[#9DB2BF]/20"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`rounded-2xl border ${tab.border} bg-gradient-to-br ${tab.color} backdrop-blur-sm p-8 md:p-12 shadow-sm`}
          >
            <div className="grid md:grid-cols-2 gap-10">
              {/* left */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#DDE6ED] mb-4">{tab.heading}</h3>
                <p className="text-[#9DB2BF] leading-relaxed mb-8">{tab.description}</p>

                {/* stats row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {tab.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-xl font-bold" style={{ color: tab.accent }}>{s.value}</p>
                      <p className="text-xs text-[#9DB2BF] mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                    style={{ color: tab.accent }}
                  >
                    Explore this plan <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>

              {/* right — features + progress */}
              <div className="space-y-8">
                <div className="space-y-3">
                  {tab.features.map((f, fi) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: fi * 0.08 }}
                      className="flex items-center gap-3 text-sm text-[#9DB2BF]"
                    >
                      <CheckCircle2 size={16} style={{ color: tab.accent }} className="shrink-0" />
                      {f}
                    </motion.div>
                  ))}
                </div>

                {/* progress bars */}
                <div className="space-y-4">
                  {tab.progress.map((p) => (
                    <div key={p.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-[#9DB2BF]">{p.label}</span>
                        <span style={{ color: tab.accent }} className="font-semibold">{p.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#526D82]/60 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: tab.accent }}
                          initial={{ width: 0 }}
                          animate={{ width: `${p.pct}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
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
