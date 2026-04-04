"use client"
import { motion, type Variants } from "framer-motion"
import { Brain, UserCheck, BarChart3, BadgePercent, ArrowRight, Sparkles, Shield, Zap, Clock } from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const features = [
  {
    icon: Brain,
    title: "AI Eligibility Engine",
    desc: "Our proprietary AI scans your profile against 30+ government schemes in real-time to find every opportunity you qualify for. No human bias, no missed schemes.",
    stat: "30+",
    statLabel: "Schemes Checked",
    gradient: "from-[#355872] to-[#7AAACE]",
    accent: "#355872",
  },
  {
    icon: UserCheck,
    title: "Dedicated Case Manager",
    desc: "Every client gets a single point of contact — an experienced case manager who handles everything from documentation to bank liaison. You focus on your business.",
    stat: "1:1",
    statLabel: "Personal Support",
    gradient: "from-[#7AAACE] to-[#9CD5FF]",
    accent: "#7AAACE",
  },
  {
    icon: BarChart3,
    title: "Real-Time Tracking",
    desc: "Track your application status 24/7 through our dashboard. Get instant notifications on every milestone — from document submission to final disbursement.",
    stat: "24/7",
    statLabel: "Live Updates",
    gradient: "from-[#9CD5FF] to-[#355872]",
    accent: "#9CD5FF",
  },
  {
    icon: BadgePercent,
    title: "Success-Based Fees",
    desc: "We believe in results, not promises. Our fee is success-based — you pay only after your funding is approved and disbursed. Zero upfront costs, zero risk.",
    stat: "₹0",
    statLabel: "Upfront Cost",
    gradient: "from-[#355872] to-[#9CD5FF]",
    accent: "#355872",
  },
]

const badges = [
  { icon: Sparkles, label: "500+ Businesses Funded" },
  { icon: Shield, label: "95% Success Rate" },
  { icon: Zap, label: "15-Day Average Processing" },
  { icon: Clock, label: "Since 2019" },
]

export default function WhyGrowBridge() {
  return (
    <section className="py-24 px-6 bg-[#F7F8F0] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(53,88,114,0.05)_0%,transparent_60%)] pointer-events-none" />

      <motion.div className="max-w-7xl mx-auto relative z-10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7AAACE] block mb-3">Why Choose Us</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0a1628] leading-tight">
            The Grow Bridge{" "}
            <span style={{ background: "linear-gradient(90deg,#355872,#7AAACE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Advantage</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#0a1628]/50 text-base mt-3">
            We combine AI technology with human expertise to deliver the highest success rates in government scheme processing.
          </motion.p>
        </div>

        {/* Feature cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div key={f.title} custom={i} variants={fadeUp}
              className="group rounded-2xl border border-[#355872]/[0.08] bg-white p-7 hover:border-[#355872]/20 hover:shadow-xl hover:shadow-[#355872]/5 transition-all duration-300 relative overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${f.accent}12 0%, transparent 70%)` }} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-[#355872]">{f.stat}</p>
                    <p className="text-[10px] text-[#355872]/50 font-medium">{f.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-[#0a1628] font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-[#0a1628]/55 text-sm leading-relaxed flex-1">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge bar */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full border border-[#355872]/10 bg-white px-4 py-2 text-sm text-[#355872] font-medium">
              <b.icon className="w-4 h-4 text-[#7AAACE]" />
              {b.label}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="text-center">
          <Link href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#355872] to-[#7AAACE] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#355872]/25 transition-all duration-300"
          >
            Start Your Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
