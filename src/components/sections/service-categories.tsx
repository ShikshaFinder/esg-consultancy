"use client"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Star } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const categories = [
  { icon: "🏢", title: "Business Registration", desc: "Company formation & compliance", badge: "Popular", color: "#355872" },
  { icon: "📊", title: "Tax & Compliance", desc: "GST, income tax & TDS returns", badge: "Save More", color: "#22c55e" },
  { icon: "✅", title: "Certifications & IP", desc: "ISO, patents & trademarks", badge: "Govt. Backed", color: "#9CD5FF" },
  { icon: "📣", title: "Marketing & Branding", desc: "Digital marketing solutions", badge: "Growth", color: "#F7F8F0" },
  { icon: "🏛️", title: "Grants & Funding", desc: "Government grants & schemes", badge: "Free Money", color: "#eab308" },
  { icon: "💳", title: "CIBIL Assistance", desc: "Credit score improvement", badge: "Boost Score", color: "#ec4899" },
]

export default function ServiceCategories() {
  return (
    <section id="services" className="py-24 px-6 bg-[#060e1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }} variants={stagger}>
        <div className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-green-400 block mb-3">Expert Support</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Grow Your Business with{" "}
            <span style={{ background: "linear-gradient(90deg,#22c55e,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Expert Support</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-black/50 text-base mt-3 max-w-xl mx-auto">
            Choose a service to check your eligibility instantly — our team handles the rest.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((svc, i) => (
            <motion.div key={svc.title} custom={i} variants={fadeUp}
              whileHover={{ y: -5, borderColor: `${svc.color}40` }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 flex flex-col gap-4 cursor-pointer group transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-full border" style={{ color: svc.color, backgroundColor: `${svc.color}15`, borderColor: `${svc.color}30` }}>{svc.badge}</span>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${svc.color}12`, borderColor: `${svc.color}25` }}>{svc.icon}</div>
              <div>
                <h3 className="text-black font-bold text-base mb-1">{svc.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{svc.desc}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <Link href="/contact" className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: svc.color }}>
                  Check Eligibility <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: `${svc.color}15` }} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 flex flex-col sm:flex-row items-center gap-4">
          <span className="text-3xl">🚀</span>
          <div className="flex-1">
            <p className="text-black font-semibold text-base">Not sure where to start?</p>
            <p className="text-black/50 text-sm">Talk to an expert for free — we&apos;ll find the right path for your business.</p>
          </div>
          <Link href="/contact" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-[#355872] px-6 py-3 text-sm font-semibold text-black shrink-0">
            Get Help <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (<Star key={j} className="w-3.5 h-3.5 text-black fill-[#F7F8F0]" />))}
            </div>
            <span className="text-black/50 text-xs ml-1">500+ Reviews</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
