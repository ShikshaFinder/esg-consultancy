"use client"
import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, type Variants } from "framer-motion"
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react"

/* ─── animation variants ─── */
const blurFade: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  show: (d: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

/* ─── scheme comparison data ─── */
const detailedSchemes = [
  {
    slug: "pm-mudra-yojana",
    name: "MUDRA",
    full: "Micro Units Development & Refinancing Agency",
    range: "₹50K – ₹10L",
    badge: "Most Popular",
    interest: "8–12%",
    processing: "Quick process",
    education: "Not Required",
    collateral: "No Subsidy",
    eligibility: ["Age: 18+ years", "Education: Not Required", "Type: Non-farm sector"],
    bestFor: "Small businesses and shops needing working capital",
    successRate: 91,
  },
  {
    slug: "startup-india",
    name: "Startup India",
    full: "Startup India Seed Fund Scheme",
    range: "₹20L – ₹50L",
    badge: "Tech Focused",
    interest: "Equity/Debt",
    processing: "Detailed review",
    education: "Not Required",
    collateral: "Up to ₹20L Grant",
    eligibility: ["Age: Any", "Education: Not Required", "Type: Innovative Startups"],
    bestFor: "Tech startups and innovative businesses",
    successRate: 75,
  },
  {
    slug: "stand-up-india",
    name: "Stand-Up India",
    full: "Stand Up India Scheme",
    range: "₹10L – ₹1Cr",
    badge: "SC/ST & Women",
    interest: "Base Rate + 3%",
    processing: "Priority process",
    education: "Not Required",
    collateral: "Special Benefits",
    eligibility: ["Age: 18+ years", "Education: Not Required", "Type: Greenfield Projects"],
    bestFor: "Women, SC/ST entrepreneurs starting new ventures",
    successRate: 78,
  },
  {
    slug: "digital-services",
    name: "Digital Services",
    full: "Business Digital Transformation",
    range: "Custom Plans",
    badge: "IT Focused",
    interest: "N/A",
    processing: "Quick start",
    education: "Not Required",
    collateral: "ROI Focused",
    eligibility: ["Age: Any", "Education: Not Required", "Type: All Businesses"],
    bestFor: "Businesses looking to grow online presence and sales",
    successRate: 95,
  },
]

/* ─── Animated progress ring ─── */
function ProgressRing({ value, size = 56 }: { value: number; size?: number }) {
  const r = (size - 6) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (value / 100) * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(10,22,40,0.3)" strokeWidth="4" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="#1B4F8A" strokeWidth="4" strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}

export default function PremiumFunding() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Subtle bg pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#9DB2BF 1px, transparent 1px), linear-gradient(90deg, #9DB2BF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p variants={blurFade} custom={0} className="text-xs font-bold uppercase tracking-[0.3em] text-black mb-3">
            Compare & Choose
          </motion.p>
          <motion.h2 variants={blurFade} custom={0.1} className="text-3xl md:text-5xl font-bold text-black">
            Find Your Perfect{" "}
            <span className="text-black" style={{ backgroundImage: "linear-gradient(135deg, #EBF4FF, #2E7DD9)" }}>
              Funding Match
            </span>
          </motion.h2>
          <motion.p variants={blurFade} custom={0.2} className="mt-4 text-black/80 max-w-md mx-auto">
            Compare government schemes side-by-side to make an informed decision
          </motion.p>
        </motion.div>

        {/* ── 4 Comparison Cards ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {detailedSchemes.map((s, i) => (
            <motion.div
              key={s.slug}
              variants={blurFade}
              custom={0.1 + i * 0.08}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/25 blue-card overflow-hidden
                         hover:border-[#1B4F8A]/80 hover:shadow-xl hover:shadow-[#1B4F8A]/20 transition-all duration-500 flex flex-col"
            >
              {/* Card Header */}
              <div className="p-5 bg-[#1B4F8A]/50 relative overflow-hidden">
                {/* Animated corner glow */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#9DB2BF]/10 blur-[30px] pointer-events-none"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {s.badge && (
                  <span className="relative text-[10px] font-bold uppercase tracking-widest bg-[#9DB2BF]/15 text-black rounded-full px-3 py-1 mb-3 inline-block border border-white/25">
                    {s.badge}
                  </span>
                )}
                <h3 className="relative text-xl font-bold text-black leading-tight">{s.name}</h3>
                <p className="relative text-[11px] text-black mt-0.5 leading-tight">{s.full}</p>
                <p className="relative text-2xl font-black text-black mt-3">{s.range}</p>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-5 flex flex-col gap-4">
                {/* Stats */}
                <div className="space-y-2.5">
                  {[
                    { label: "Subsidy/Grant", value: s.collateral },
                    { label: "Interest", value: s.interest },
                    { label: "Processing", value: s.processing },
                    { label: "Collateral", value: s.education },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center text-xs">
                      <span className="text-black font-semibold uppercase tracking-wider">{label}</span>
                      <span className="font-bold text-black text-right">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/25" />

                {/* Eligibility */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black mb-2">Eligibility</p>
                  <ul className="space-y-1.5">
                    {s.eligibility.map((e) => (
                      <li key={e} className="flex items-center gap-1.5 text-xs text-black font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9DB2BF] shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/25" />

                {/* Best For */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black mb-1">Best For</p>
                  <p className="text-xs text-black font-medium italic leading-relaxed">
                    &ldquo;{s.bestFor}&rdquo;
                  </p>
                </div>

                {/* Success Rate with ring */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black">Success Rate</p>
                    <p className="text-2xl font-black text-black">{s.successRate}%</p>
                  </div>
                  <ProgressRing value={s.successRate} />
                </div>

                {/* CTA */}
                <Link
                  href={`/funding/${s.slug}`}
                  className="block w-full text-center rounded-xl py-2.5 text-sm font-semibold text-black
                             bg-linear-to-r from-[#1B4F8A] to-[#2E7DD9] hover:from-[#9DB2BF] hover:to-[#526D82]
                             transition-all duration-300 mt-1"
                >
                  Check Eligibility
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Confused CTA Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/25 blue-card p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <HelpCircle className="w-8 h-8 text-black shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-black">Confused About Which Scheme to Choose?</h3>
              <p className="text-xs text-black mt-1">Our experts will analyze your business and recommend the best funding option</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full blue-card text-black px-6 py-3 text-sm font-semibold hover:bg-[#1548A0] transition-colors shrink-0"
          >
            Get Expert Recommendation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
