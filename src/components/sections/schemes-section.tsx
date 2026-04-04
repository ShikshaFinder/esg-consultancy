"use client"
import { motion, type Variants } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const schemes = [
  { icon: "💰", tag: "SUBSIDY", label: "PMEGP", title: "Prime Minister Employment Generation Programme", amount: "₹10L", amountLabel: "Max Loan", highlight: "35% Subsidy", color: "#355872" },
  { icon: "🛡️", tag: "LOAN", label: "PM MUDRA", title: "No-collateral micro loans for small businesses", amount: "₹10L", amountLabel: "Max Loan", highlight: "No Collateral", color: "#7AAACE" },
  { icon: "✅", tag: "GUARANTEE", label: "CGTMSE", title: "Credit guarantee cover up to ₹5 Crore", amount: "₹5Cr", amountLabel: "Coverage", highlight: "No Guarantor", color: "#9CD5FF" },
  { icon: "👩‍💼", tag: "LOAN", label: "Stand-Up India", title: "Exclusive loans for SC/ST and women founders", amount: "₹1Cr", amountLabel: "Max Loan", highlight: "Priority Process", color: "#ec4899" },
  { icon: "🌱", tag: "SUBSIDY", label: "NAIF Scheme", title: "Agri-infrastructure at 3% interest subvention", amount: "3%", amountLabel: "Interest Rate", highlight: "Govt Backed", color: "#22c55e" },
  { icon: "🚀", tag: "RECOGNITION", label: "Startup India", title: "Tax benefits and seed fund for DPIIT startups", amount: "₹50L", amountLabel: "Seed Grant", highlight: "80% Tax Exempt", color: "#F7F8F0" },
  { icon: "🏪", tag: "REGISTRATION", label: "GeM Portal", title: "Access ₹3L+ Crore govt procurement marketplace", amount: "₹3L Cr", amountLabel: "Market Size", highlight: "EMD Exempt", color: "#eab308" },
  { icon: "📋", tag: "CERTIFICATION", label: "NSIC", title: "Single-point registration for government tender priority", amount: "100%", amountLabel: "EMD Exempt", highlight: "Govt Tenders", color: "#14b8a6" },
]

const ticker = [
  { icon: "₹", val: "₹10L–₹5Cr", label: "Funding Range" },
  { icon: "⏱", val: "7–45 Days", label: "Processing Time" },
  { icon: "✔", val: "85%", label: "CGTMSE Coverage" },
  { icon: "%", val: "15–35%", label: "PMEGP Subsidy" },
  { icon: "🌐", val: "28+ States", label: "Pan India" },
]

export default function SchemesSection() {
  return (
    <section id="schemes" className="py-24 px-6 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#355872]/[0.04] blur-[120px] pointer-events-none" />

      <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CD5FF] block mb-3">
              Government Schemes
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Helping MSMEs Access{" "}
              <span style={{ background: "linear-gradient(90deg,#355872,#7AAACE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Government Support
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-base mt-3 max-w-lg">
              Expert guidance for PMEGP, CGTMSE, MUDRA and all major MSME schemes across India.
            </motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <Link href="/schemes" className="flex items-center gap-2 rounded-full border border-[#355872]/25 bg-[#355872]/[0.06] px-5 py-2.5 text-sm text-[#9CD5FF] hover:bg-[#355872]/[0.12] transition-all shrink-0 w-fit">
              View All Schemes <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Ticker */}
        <motion.div variants={fadeUp} className="mb-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-white/[0.06] overflow-hidden">
          {ticker.map((t) => (
            <div key={t.label} className="flex flex-col items-center py-4 px-3 gap-1">
              <span className="text-lg">{t.icon}</span>
              <p className="text-white font-bold text-sm">{t.val}</p>
              <p className="text-white/40 text-[10px] text-center leading-snug">{t.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {schemes.map((s, i) => (
            <motion.div
              key={s.label} custom={i} variants={fadeUp}
              className="min-w-[240px] snap-start rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 flex flex-col gap-3 cursor-pointer group transition-all duration-300"
              whileHover={{ y: -5, borderColor: `${s.color}44` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full border" style={{ color: s.color, backgroundColor: `${s.color}15`, borderColor: `${s.color}30` }}>
                  {s.tag}
                </span>
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1">{s.label}</p>
                <p className="text-white/50 text-xs leading-relaxed">{s.title}</p>
              </div>
              <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-end justify-between">
                <div>
                  <p className="font-black text-xl" style={{ color: s.color }}>{s.amount}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">{s.amountLabel}</p>
                </div>
                <span className="text-[9px] font-semibold px-2 py-1 rounded-full border" style={{ color: s.color, backgroundColor: `${s.color}12`, borderColor: `${s.color}25` }}>
                  {s.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust chips */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4 items-center">
          {["MSME Registered", "Pan India Service", "Expert Consultants", "Transparent Process"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-white/45 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9CD5FF] shrink-0" />
              {t}
            </div>
          ))}
          <span className="text-white/30 text-xs ml-auto">Serving MSMEs across 28+ States</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
