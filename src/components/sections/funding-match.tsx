"use client"
import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const cards = [
  { label: "MUDRA", fullName: "Micro Units Development & Refinancing Agency", amount: "₹50K – ₹10L", popular: true, details: { subsidy: "No Subsidy", interest: "8–12%", processing: "Quick process", collateral: "Not Required" }, eligibility: { age: "18+ years", education: "Not Required", type: "Non-farm sector" }, bestFor: "Small businesses and shops needing working capital", successRate: 91, tag: "MOST POPULAR", color: "#355872" },
  { label: "Startup India", fullName: "Startup India Seed Fund Scheme", amount: "₹20L – ₹50L", popular: false, details: { subsidy: "Up to ₹20L Grant", interest: "Equity/Debt", processing: "Detailed review", collateral: "Not Required" }, eligibility: { age: "Any", education: "Not Required", type: "Innovative Startups" }, bestFor: "Tech startups and innovative businesses", successRate: 75, tag: "TECH FOCUSED", color: "#F7F8F0" },
  { label: "Stand-Up India", fullName: "Stand Up India Scheme", amount: "₹10L – ₹1Cr", popular: false, details: { subsidy: "Special Benefits", interest: "Base Rate + 3%", processing: "Priority process", collateral: "Not Required" }, eligibility: { age: "18+ years", education: "Not Required", type: "Greenfield Projects" }, bestFor: "Women, SC/ST entrepreneurs starting new ventures", successRate: 78, tag: "SC/ST & WOMEN", color: "#ec4899" },
  { label: "Digital Services", fullName: "Business Digital Transformation", amount: "Custom Plans", popular: false, details: { subsidy: "ROI Focused", interest: "N/A", processing: "Quick start", collateral: "Not Required" }, eligibility: { age: "Any", education: "Not Required", type: "All Businesses" }, bestFor: "Businesses looking to grow online presence and sales", successRate: 95, tag: "IT FOCUSED", color: "#9CD5FF" },
]

export default function FundingMatch() {
  return (
    <section className="py-24 px-6 bg-[#060e1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }} variants={stagger}>
        <div className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Compare & Choose</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Find Your Perfect{" "}
            <span style={{ background: "linear-gradient(90deg,#F7F8F0,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Funding Match</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-black/50 text-base mt-3 max-w-xl mx-auto">
            Compare government schemes side-by-side to make an informed decision for your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {cards.map((scheme, i) => (
            <motion.div key={scheme.label} custom={i} variants={fadeUp}
              className={`rounded-2xl border bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col gap-4 group cursor-pointer transition-all duration-300 relative ${scheme.popular ? "border-[#355872]/40" : "border-white/[0.08]"}`}
              whileHover={{ y: -4, borderColor: `${scheme.color}50` }}
            >
              {scheme.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-wider text-black bg-gradient-to-r from-[#355872] to-[#7AAACE] px-4 py-1 rounded-full">{scheme.tag}</span>
              )}
              {!scheme.popular && (
                <span className="text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-full border self-start" style={{ color: scheme.color, backgroundColor: `${scheme.color}15`, borderColor: `${scheme.color}30` }}>{scheme.tag}</span>
              )}
              <div>
                <h3 className="text-black font-bold text-lg mb-1">{scheme.label}</h3>
                <p className="text-black/50 text-xs leading-relaxed">{scheme.fullName}</p>
              </div>
              <p className="text-2xl font-black" style={{ color: scheme.color }}>{scheme.amount}</p>
              <div className="space-y-2 text-xs">
                {Object.entries(scheme.details).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-black/40 uppercase tracking-wider text-[10px]">{key}</span>
                    <span className="text-black/70 font-medium">{val}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
                <p className="text-[10px] text-black/35 uppercase tracking-wider mb-2">Eligibility</p>
                <div className="space-y-1.5 text-xs">
                  <p className="text-black/60"><span className="text-black/35">Age:</span> {scheme.eligibility.age}</p>
                  <p className="text-black/60"><span className="text-black/35">Education:</span> {scheme.eligibility.education}</p>
                  <p className="text-black/60"><span className="text-black/35">Type:</span> {scheme.eligibility.type}</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-black/40">Success Rate</span>
                  <span className="font-bold" style={{ color: scheme.color }}>{scheme.successRate}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ backgroundColor: scheme.color }} initial={{ width: 0 }} whileInView={{ width: `${scheme.successRate}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 + i * 0.1 }} />
                </div>
              </div>
              <Link href="/contact" className="mt-auto w-full py-3 rounded-xl text-sm font-semibold text-black text-center cursor-pointer transition-all block" style={{ background: `linear-gradient(135deg, ${scheme.color}, ${scheme.color}cc)` }}>
                Check Eligibility
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-10 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#F7F8F0]/[0.04] via-transparent to-[#355872]/[0.04] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-black font-bold text-lg mb-1">Confused About Which Scheme to Choose?</p>
            <p className="text-black/50 text-sm">Our experts will analyse your business and recommend the best funding option within 24 hours.</p>
          </div>
          <Link href="/contact" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#355872] to-[#7AAACE] px-7 py-3 text-sm font-semibold text-black shrink-0">
            Get Expert Recommendation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
