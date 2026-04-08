"use client"
import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const solutions = [
  { icon: "🏛️", tag: "POPULAR", title: "Government Schemes", desc: "End-to-end support for MUDRA, PMEGP, CGTMSE, and 20+ government programs with zero hidden fees.", tags: ["MUDRA", "STAND-UP INDIA", "STARTUP INDIA"], stat: "₹45Cr+", statLabel: "DISBURSED", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", large: true, color: "#355872" },
  { icon: "💡", tag: "TRENDING", title: "Startup Funding", desc: "From seed to Series A — pitch deck prep, eligibility mapping, and investor connects.", tags: ["SEED FUND", "ANGEL NETWORKS", "DPIIT"], stat: "300%", statLabel: "AVG ROI", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80", large: false, color: "#F7F8F0" },
  { icon: "💻", tag: "DIGITAL", title: "Digital Growth", desc: "CRM, SEO, paid ads, social media and app development under one roof.", tags: ["CRM", "SEO", "SOCIAL MEDIA"], stat: "5x", statLabel: "MORE LEADS", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", large: false, color: "#9CD5FF" },
  { icon: "👩‍💼", tag: "SPECIAL", title: "Women Entrepreneurs", desc: "Exclusive schemes with enhanced subsidies, lower rates, and priority processing.", tags: ["MAHILA UDYAM", "TREAD", "STAND-UP"], stat: "180+", statLabel: "WOMEN HELPED", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80", large: false, color: "#ec4899" },
  { icon: "📋", tag: "COMPLIANCE", title: "Registration & Compliance", desc: "Company registration, GST, MSME certificates, and all statutory compliance handled in days.", tags: ["PVT LTD", "LLP", "OPC"], stat: "2 Days", statLabel: "QUICK PROCESS", image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=600&q=80", large: false, color: "#22c55e" },
  { icon: "💰", tag: "FREE FUNDS", title: "Subsidy & Grants", desc: "Non-repayable government grants and up to 35% capital subsidy secured for you.", tags: ["CLCSS", "ASPIRE", "FURL"], stat: "₹8Cr+", statLabel: "SUBSIDIES WON", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", large: false, color: "#eab308" },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 px-6 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }} variants={stagger}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Complete Solutions</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Strategic Guidance,{" "}
              <span style={{ background: "linear-gradient(90deg,#F7F8F0,#9CD5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>End-to-End Execution.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-black/50 text-base mt-3 max-w-xl">Everything your MSME or startup needs under one roof — from funding to digital transformation.</motion.p>
          </div>
          <motion.span variants={fadeUp} className="flex items-center gap-2 text-sm text-black/50">
            <span className="text-2xl">📊</span>
            <span><span className="text-black font-bold">₹45Cr+</span> Disbursed</span>
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((sol, i) => (
            <motion.div key={sol.title} custom={i} variants={fadeUp}
              className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden group cursor-pointer transition-all duration-300 ${sol.large ? "lg:row-span-2" : ""}`}
              whileHover={{ y: -4, borderColor: `${sol.color}35` }}
            >
              <div className={`relative overflow-hidden ${sol.large ? "h-52" : "h-36"}`}>
                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xl">{sol.icon}</span>
                  <span className="text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full border" style={{ color: sol.color, backgroundColor: `${sol.color}18`, borderColor: `${sol.color}30` }}>{sol.tag}</span>
                </div>
                <div className="absolute bottom-3 right-3 text-right">
                  <p className="font-black text-lg leading-none" style={{ color: sol.color }}>{sol.stat}</p>
                  <p className="text-black/40 text-[9px] uppercase tracking-wider">{sol.statLabel}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-black font-bold text-base mb-1.5">{sol.title}</h3>
                <p className="text-black/55 text-xs leading-relaxed mb-4">{sol.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sol.tags.map((t) => (
                    <span key={t} className="text-[9px] font-semibold text-black/55 bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.08]">{t}</span>
                  ))}
                </div>
                <Link href="/services" className="flex items-center gap-1 text-xs font-semibold transition-colors group/btn" style={{ color: sol.color }}>
                  Learn More <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-12 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#355872]/[0.06] via-transparent to-[#F7F8F0]/[0.04] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-black font-semibold text-base mb-1">Need Help Choosing the Right Solution?</p>
            <p className="text-black/50 text-sm">Our experts will guide you to the best option for your business stage and goals.</p>
          </div>
          <Link href="/contact" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#355872] to-[#7AAACE] px-6 py-3 text-sm font-semibold text-black shrink-0">
            🎯 Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
