"use client"
import { motion, type Variants } from "framer-motion"
import { Banknote, Users, Shield, TrendingUp, ArrowRight, CheckCircle2, Clock, IndianRupee, Star, ChevronRight, AlertCircle, Building2 } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const schemes = [
  {
    name: "PMEGP", full: "Prime Minister Employment Generation Programme",
    ministry: "Ministry of MSME", maxAmount: "₹50 Lakh", subsidy: "15-35%", processing: "30-45 Days",
    gradient: "from-[#355872] to-[#7AAACE]",
    desc: "Premier scheme for setting up new micro-enterprises in manufacturing and service sectors. Provides margin money subsidy up to 35% for rural areas.",
    eligibility: ["Age 18+ years", "Minimum 8th pass for projects above ₹10L", "New units only", "No income tax payer (manufacturing above ₹25L)"],
    benefits: ["Subsidy up to 35% in rural areas", "Up to ₹25L for manufacturing", "Up to ₹10L for service sector", "No collateral required up to ₹10L"],
    popular: true,
  },
  {
    name: "MUDRA Yojana", full: "Micro Units Development & Refinance Agency",
    ministry: "Ministry of Finance", maxAmount: "₹10 Lakh", subsidy: "Interest Subvention", processing: "15-20 Days",
    gradient: "from-[#7AAACE] to-[#9CD5FF]",
    desc: "Three-tier loan scheme (Shishu, Kishore, Tarun) for non-farm, non-corporate small/micro enterprises needing working capital or growth funding.",
    eligibility: ["Any Indian citizen", "Non-farm income generating activity", "Small / micro enterprise", "Existing or new business"],
    benefits: ["No collateral required", "Shishu: up to ₹50K", "Kishore: ₹50K – ₹5L", "Tarun: ₹5L – ₹10L"],
    popular: false,
  },
  {
    name: "CGTMSE", full: "Credit Guarantee Fund Trust for Micro & Small Enterprises",
    ministry: "Ministry of MSME", maxAmount: "₹5 Crore", subsidy: "Collateral-Free", processing: "20-30 Days",
    gradient: "from-[#9CD5FF] to-[#355872]",
    desc: "Provides credit guarantee cover to banks so they can offer collateral-free loans to MSMEs. Game-changer for businesses without assets to pledge.",
    eligibility: ["New or existing MSME", "Both manufacturing and service", "Udyam registered enterprise", "Viable business plan"],
    benefits: ["No collateral / no guarantor", "Coverage up to ₹5 Crore", "Annual guarantee fee subsidy", "Covers term loan + working capital"],
    popular: true,
  },
  {
    name: "Stand-Up India", full: "Stand-Up India Scheme",
    ministry: "Department of Financial Services", maxAmount: "₹1 Crore", subsidy: "Composite Loan", processing: "30-40 Days",
    gradient: "from-[#355872] to-[#9CD5FF]",
    desc: "Facilitates bank loans between ₹10 Lakh and ₹1 Crore to SC/ST and Women entrepreneurs for greenfield enterprises.",
    eligibility: ["SC/ST or Women entrepreneur", "Age 18+ years", "Greenfield enterprise", "Should not be a defaulter"],
    benefits: ["Composite loan (term + working)", "₹10L to ₹1Cr range", "Repayment up to 7 years", "Margin money up to 25%"],
    popular: false,
  },
  {
    name: "Startup India", full: "Startup India (DPIIT Recognition)",
    ministry: "DPIIT", maxAmount: "Tax Benefits", subsidy: "80% Patent Fee Rebate", processing: "10-15 Days",
    gradient: "from-[#7AAACE] to-[#355872]",
    desc: "DPIIT recognition provides tax benefits, easier compliance, fast-track patent examination, and access to government tenders for startups.",
    eligibility: ["Incorporated < 10 years", "Annual turnover < ₹100Cr", "Working towards innovation", "Not formed by restructuring"],
    benefits: ["3-year tax holiday (Section 80-IAC)", "80% rebate on patent fees", "Self-certification under labor laws", "Easy winding up process"],
    popular: false,
  },
  {
    name: "GeM Registration", full: "Government e-Marketplace",
    ministry: "Ministry of Commerce", maxAmount: "Unlimited Tenders", subsidy: "Direct Orders", processing: "5-7 Days",
    gradient: "from-[#9CD5FF] to-[#7AAACE]",
    desc: "Register on India's national procurement portal to sell products and services directly to government departments and PSUs.",
    eligibility: ["Valid GSTIN", "PAN Card", "Bank account", "Aadhaar verification"],
    benefits: ["Access to government buyers", "Transparent bidding process", "Direct purchase orders", "Timely payments"],
    popular: false,
  },
]

export default function SchemesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CD5FF] block mb-4">Government Schemes</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Unlock Funding with{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Government Schemes</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
              Explore all major central and state government schemes for MSMEs and startups. We handle the entire application process end to end.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { label: "30+ Schemes", icon: Building2 },
                { label: "95% Success Rate", icon: TrendingUp },
                { label: "₹110Cr+ Funded", icon: IndianRupee },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  <b.icon className="w-4 h-4 text-[#9CD5FF]" />{b.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Scheme Cards */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
            <div className="flex flex-col gap-8">
              {schemes.map((s, i) => (
                <motion.div key={s.name} custom={i} variants={fadeUp}
                  className="rounded-2xl border border-[#355872]/[0.08] bg-white p-8 hover:border-[#355872]/20 hover:shadow-xl hover:shadow-[#355872]/5 transition-all duration-300 relative overflow-hidden"
                >
                  {s.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 text-[10px] font-bold text-[#355872] bg-[#9CD5FF]/20 border border-[#9CD5FF]/30 px-2.5 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-[#355872]" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0`}>
                          <Banknote className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-[#0a1628] font-bold text-xl">{s.name}</h3>
                          <p className="text-[#0a1628]/40 text-xs">{s.full}</p>
                        </div>
                      </div>
                      <p className="text-[#0a1628]/60 text-sm leading-relaxed mb-5">{s.desc}</p>
                      <p className="text-[11px] text-[#0a1628]/40 font-medium mb-2 uppercase tracking-wide">Ministry: {s.ministry}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-bold text-[#355872] mb-2 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Eligibility</p>
                          <ul className="space-y-1.5">
                            {s.eligibility.map(e => (
                              <li key={e} className="flex items-center gap-2 text-sm text-[#0a1628]/60">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#7AAACE] shrink-0" />{e}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#355872] mb-2 flex items-center gap-1"><Star className="w-3.5 h-3.5" /> Key Benefits</p>
                          <ul className="space-y-1.5">
                            {s.benefits.map(b => (
                              <li key={b} className="flex items-center gap-2 text-sm text-[#0a1628]/60">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#9CD5FF] shrink-0" />{b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right - Stats */}
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "Max Amount", value: s.maxAmount, icon: IndianRupee },
                        { label: "Subsidy", value: s.subsidy, icon: TrendingUp },
                        { label: "Processing", value: s.processing, icon: Clock },
                      ].map(st => (
                        <div key={st.label} className="rounded-xl border border-[#355872]/[0.06] bg-[#F7F8F0] p-4 flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#355872]/10 flex items-center justify-center shrink-0">
                            <st.icon className="w-4 h-4 text-[#355872]" />
                          </div>
                          <div>
                            <p className="text-[#0a1628]/40 text-[10px] font-medium uppercase">{st.label}</p>
                            <p className="text-[#0a1628] font-bold text-sm">{st.value}</p>
                          </div>
                        </div>
                      ))}
                      <Link href="/contact"
                        className="mt-2 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-[#355872] to-[#7AAACE] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#355872]/25 transition-all"
                      >
                        Check Eligibility <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-white/80" />
              <span className="text-white/80 text-sm font-medium">Not sure which scheme is right for you?</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let Our AI Find Your Best Match
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 text-base mb-8">
              Our eligibility engine checks your profile against 30+ schemes in seconds. Get your personalized report for free.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-[#355872] font-semibold text-sm hover:shadow-lg transition-all"
              >
                Get Free Eligibility Check <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
