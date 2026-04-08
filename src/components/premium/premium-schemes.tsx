"use client"
import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, type Variants } from "framer-motion"
import {
  Factory, Coins, ShieldCheck, UserCheck, Sprout, Rocket,
  Store, ClipboardCheck, ArrowRight, BadgeCheck, Globe, Users, Handshake,
} from "lucide-react"

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
  show: { transition: { staggerChildren: 0.07 } },
}

/* ─── stat row data ─── */
const statsRow = [
  { icon: "₹", value: "₹10L–₹5Cr", label: "Funding Range", sub: "Government schemes" },
  { icon: "⏱", value: "7–45 Days", label: "Processing Time", sub: "Scheme dependent" },
  { icon: "✓", value: "85%", label: "CGTMSE Coverage", sub: "Collateral guarantee" },
  { icon: "%", value: "15–35%", label: "PMEGP Subsidy", sub: "Category based" },
]

/* ─── scheme data ─── */
const schemes = [
  {
    title: "PMEGP",
    full: "Prime Minister Employment Generation Programme",
    loanLabel: "MAX SUBSIDY",
    loanAmount: "35%",
    benefitLabel: "Loan Amount:",
    keyBenefit: "Up to ₹50L",
    type: "SUBSIDY",
    Icon: Factory,
    href: "/funding/pmegp",
  },
  {
    title: "PM MUDRA Yojana",
    full: "Up to ₹10 Lakh loan without collateral for small businesses",
    loanLabel: "MAX LOAN",
    loanAmount: "₹10L",
    benefitLabel: "Key Benefit:",
    keyBenefit: "No collateral",
    type: "LOAN",
    Icon: Coins,
    href: "/funding/pm-mudra-yojana",
  },
  {
    title: "CGTMSE",
    full: "Credit guarantee up to ₹5 Crore without third-party guarantee",
    loanLabel: "COVERAGE",
    loanAmount: "₹5Cr",
    benefitLabel: "Key Benefit:",
    keyBenefit: "No collateral",
    type: "GUARANTEE",
    Icon: ShieldCheck,
    href: "/funding/cgtmse",
  },
  {
    title: "Stand-Up India",
    full: "Bank loans for SC/ST and women entrepreneurs",
    loanLabel: "MAX LOAN",
    loanAmount: "₹1Cr",
    benefitLabel: "Category:",
    keyBenefit: "Special category",
    type: "LOAN",
    Icon: UserCheck,
    href: "/funding/stand-up-india",
  },
  {
    title: "NAIF Scheme",
    full: "Affordable financing for agricultural infrastructure with 3% interest subvention",
    loanLabel: "MAX LOAN",
    loanAmount: "₹2Cr",
    benefitLabel: "Key Benefit:",
    keyBenefit: "3% subvention",
    type: "LOAN",
    Icon: Sprout,
    href: "/funding/naif-scheme",
  },
  {
    title: "Startup India",
    full: "Tax benefits & funding support for DPIIT registered startups",
    loanLabel: "TAX EXEMPTION",
    loanAmount: "80%",
    benefitLabel: "Category:",
    keyBenefit: "DPIIT Recognition",
    type: "RECOGNITION",
    Icon: Rocket,
    href: "/funding/startup-india",
  },
  {
    title: "GeM Registration",
    full: "Access ₹3L+ Crore government procurement marketplace",
    loanLabel: "MARKET SIZE",
    loanAmount: "₹3L Cr",
    benefitLabel: "Key Benefit:",
    keyBenefit: "Free registration",
    type: "REGISTRATION",
    Icon: Store,
    href: "/funding/gem-registration",
  },
  {
    title: "NSIC Certification",
    full: "Single point registration for government tenders priority",
    loanLabel: "EMD EXEMPT",
    loanAmount: "100%",
    benefitLabel: "Key Benefit:",
    keyBenefit: "Tender priority",
    type: "CERTIFICATION",
    Icon: ClipboardCheck,
    href: "/funding/nsic-certification",
  },
]

const trustBadges = [
  { label: "MSME Registered", Icon: BadgeCheck },
  { label: "Pan India Service", Icon: Globe },
  { label: "Expert Consultants", Icon: Users },
  { label: "Transparent Process", Icon: Handshake },
]

export default function PremiumSchemes() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B4F8A]/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p variants={blurFade} custom={0} className="text-sm font-bold text-black uppercase tracking-widest mb-3">
            Government Schemes We Facilitate
          </motion.p>
          <motion.h2 variants={blurFade} custom={0.1} className="text-3xl md:text-5xl font-bold text-black">
            Helping MSMEs Access{" "}
            <span className="text-black" style={{ backgroundImage: "linear-gradient(135deg, #EBF4FF, #2E7DD9)" }}>
              Government Support
            </span>
          </motion.h2>
          <motion.p variants={blurFade} custom={0.2} className="mt-4 text-black/80 max-w-xl mx-auto">
            Expert guidance for PMEGP, CGTMSE, Mudra & other MSME schemes across India
          </motion.p>
        </motion.div>

        {/* ── 4 Stat Boxes ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {statsRow.map((s, i) => (
            <motion.div
              key={s.label}
              variants={blurFade}
              custom={0.1 + i * 0.08}
              whileHover={{ scale: 1.04, y: -4 }}
              className="rounded-2xl border border-white/25 blue-card p-6 text-center group
                         hover:border-[#1B4F8A]/80 hover:shadow-lg hover:shadow-[#1B4F8A]/20 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-black mx-auto mb-3 group-hover:bg-white/35 transition-colors">
                {s.icon}
              </div>
              <p className="text-2xl font-black text-black">{s.value}</p>
              <p className="text-xs font-semibold text-black mt-1">{s.label}</p>
              <p className="text-[11px] text-black/70 italic">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Sub-heading ── */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xl font-bold text-black mb-10"
        >
          Government Schemes We Support
        </motion.h3>

        {/* ── 8 Scheme Cards ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {schemes.map((sc, i) => (
            <motion.div
              key={sc.title}
              variants={blurFade}
              custom={0.15 + i * 0.06}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl border border-white/25 blue-card p-6 flex flex-col
                         hover:border-[#1B4F8A]/80 hover:shadow-xl hover:shadow-[#1B4F8A]/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9DB2BF]/0 to-[#526D82]/0 group-hover:from-[#9DB2BF]/5 group-hover:to-[#526D82]/10 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/35 transition-colors">
                  <sc.Icon className="w-6 h-6 text-black group-hover:text-black transition-colors" />
                </div>

                {/* Stat label + big value */}
                <p className="text-[10px] font-black uppercase tracking-widest text-black mb-1">
                  {sc.loanLabel}
                </p>
                <p className="text-3xl font-black text-black mb-1">{sc.loanAmount}</p>

                {/* Title */}
                <h4 className="text-base font-bold text-black mb-2">{sc.title}</h4>

                {/* Description */}
                <p className="text-xs text-black/70 leading-relaxed flex-grow mb-4">{sc.full}</p>

                {/* Footer: type + view link */}
                <div className="flex items-center justify-between pt-3 border-t border-white/25">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">
                    {sc.type}
                  </span>
                  <Link
                    href={sc.href}
                    className="text-xs font-semibold text-black hover:text-black transition-colors flex items-center gap-1"
                  >
                    View <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Trust Badges Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 rounded-xl border border-white/25 blue-card backdrop-blur-md py-4 px-6"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <b.Icon className="w-5 h-5 text-black" />
                <span className="text-sm font-medium text-black/80">{b.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-black">
            Serving MSMEs across 28+ States in India
          </p>
        </motion.div>

        {/* ── View All Link ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <Link href="/schemes">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border border-white/25 text-black font-semibold py-3 px-8 rounded-full
                         hover:bg-[#526D82]/25 hover:border-[#9DB2BF]/40 transition-all cursor-pointer text-sm backdrop-blur-sm"
            >
              View More Government Schemes
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
