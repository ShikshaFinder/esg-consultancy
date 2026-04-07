"use client"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, CheckCircle2, Clock, IndianRupee, Search, AlertCircle, TrendingUp, Shield, Users, Building2, Star, ChevronRight, Filter } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { useState, useMemo, Suspense } from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { governmentSchemes } from "@/lib/schemes"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

/* ——— eligibility scoring engine ——— */
function scoreScheme(
  scheme: (typeof governmentSchemes)[number],
  params: { businessType: string; sector: string; turnover: string; state: string; category: string }
) {
  let score = 50
  const reasons: string[] = []

  const { businessType, sector, turnover, category } = params
  const turnoverNum = parseFloat(turnover) || 0

  // Business-type matching
  if (scheme.slug === "startup-india" || scheme.slug === "startup-seed-fund" || scheme.slug === "tax-exemption-80iac") {
    if (businessType === "startup" || businessType === "private-limited" || businessType === "llp") {
      score += 20; reasons.push("Your entity type matches startup scheme requirements")
    } else { score -= 15 }
  }

  if (scheme.slug === "pm-mudra-yojana") {
    if (turnoverNum <= 10) { score += 25; reasons.push("Your turnover fits MUDRA loan brackets perfectly") }
    else if (turnoverNum <= 50) { score += 10; reasons.push("You may qualify under MUDRA Tarun category") }
    else { score -= 20 }
  }

  if (scheme.slug === "pmegp") {
    if (businessType === "new" || businessType === "proprietorship" || businessType === "partnership") {
      score += 20; reasons.push("PMEGP is ideal for new manufacturing & service units")
    }
    if (category === "SC/ST" || category === "OBC" || category === "Women") {
      score += 15; reasons.push(`Higher subsidy (up to 35%) for ${category} category`)
    }
  }

  if (scheme.slug === "cgtmse") {
    if (turnoverNum >= 10 && turnoverNum <= 500) { score += 20; reasons.push("Your business scale fits CGTMSE coverage") }
    if (businessType === "msme" || businessType === "private-limited") { score += 10; reasons.push("MSMEs get priority under CGTMSE") }
  }

  if (scheme.slug === "stand-up-india") {
    if (category === "SC/ST" || category === "Women") {
      score += 30; reasons.push(`Stand-Up India is specifically designed for ${category} entrepreneurs`)
    } else { score -= 30 }
  }

  if (scheme.slug === "sc-st-obc-scheme") {
    if (category === "SC/ST" || category === "OBC") { score += 30; reasons.push("Direct eligibility based on your social category") }
    else { score -= 40 }
  }

  if (scheme.slug === "gem-registration") {
    score += 10; reasons.push("Any GST-registered business can register on GeM")
  }

  if (scheme.slug === "nsic-certification") {
    if (businessType === "msme" || businessType === "proprietorship") { score += 15; reasons.push("Micro & small enterprises get priority") }
  }

  // Sector bonuses
  if (sector === "manufacturing") {
    if (["pmegp", "cgtmse", "zed-certification", "clcs-tus-msme-champions", "sfurti-traditional-industries"].includes(scheme.slug)) {
      score += 15; reasons.push("Manufacturing sector has strong alignment with this scheme")
    }
  }
  if (sector === "technology" || sector === "services") {
    if (["startup-india", "startup-seed-fund", "cgtmse"].includes(scheme.slug)) {
      score += 12; reasons.push("Tech/service businesses benefit from this scheme")
    }
  }
  if (sector === "agriculture") {
    if (scheme.slug === "naif-scheme") { score += 25; reasons.push("NAIF is specifically for agricultural infrastructure") }
  }
  if (sector === "export") {
    if (scheme.slug === "epcg-scheme") { score += 30; reasons.push("EPCG is tailored for exporters needing capital goods") }
  }

  // General category slight deduction for reserved-category schemes
  if (category === "General") {
    if (["stand-up-india", "sc-st-obc-scheme"].includes(scheme.slug)) { score -= 20 }
  }

  // Clamp
  score = Math.min(Math.max(score, 5), 98)

  if (reasons.length === 0) reasons.push("Matches basic eligibility criteria")

  return { score, reasons }
}

/* ——— Eligibility Form (shown when no params) ——— */
function EligibilityForm() {
  const router = useRouter()
  const [form, setForm] = useState({ businessType: "", sector: "", turnover: "", state: "", category: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    Object.entries(form).forEach(([k, v]) => { if (v) params.set(k, v) })
    router.push(`/eligibility-results?${params.toString()}`)
  }

  const selectClass = "w-full h-12 rounded-xl border border-[#355872]/15 bg-white px-4 text-sm text-[#0a1628] focus:outline-none focus:ring-2 focus:ring-[#7AAACE]/40 focus:border-[#7AAACE] transition-all appearance-none"
  const labelClass = "text-sm font-semibold text-[#0a1628] mb-1.5 block"

  return (
    <section className="py-20 px-6 bg-[#F7F8F0]">
      <motion.div className="max-w-2xl mx-auto" initial="hidden" animate="show" variants={stagger}>
        <motion.div variants={fadeUp} className="text-center mb-10">
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7AAACE] block mb-3">Eligibility Checker</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Check Your Scheme Eligibility</h2>
          <p className="text-[#0a1628]/50 text-sm mt-3">Fill in your details and we&apos;ll match you with the best government schemes.</p>
        </motion.div>

        <motion.form variants={fadeUp} onSubmit={handleSubmit}
          className="rounded-2xl border border-[#355872]/[0.08] bg-white p-8 shadow-lg shadow-[#355872]/5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label className={labelClass}>Business Type</label>
              <select className={selectClass} required value={form.businessType} onChange={e => setForm(f => ({ ...f, businessType: e.target.value }))}>
                <option value="">Select type</option>
                <option value="proprietorship">Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="private-limited">Private Limited</option>
                <option value="llp">LLP</option>
                <option value="msme">MSME</option>
                <option value="startup">Startup (DPIIT)</option>
                <option value="new">New Business</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Sector</label>
              <select className={selectClass} required value={form.sector} onChange={e => setForm(f => ({ ...f, sector: e.target.value }))}>
                <option value="">Select sector</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="services">Services</option>
                <option value="technology">Technology</option>
                <option value="agriculture">Agriculture</option>
                <option value="retail">Retail / Trading</option>
                <option value="export">Export</option>
                <option value="handicrafts">Handicrafts</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Annual Turnover (₹ Lakhs)</label>
              <input type="number" placeholder="e.g. 25" className={selectClass} required value={form.turnover} onChange={e => setForm(f => ({ ...f, turnover: e.target.value }))} />
            </div>
            <div>
              <label className={labelClass}>State</label>
              <select className={selectClass} required value={form.state} onChange={e => setForm(f => ({ ...f, state: e.target.value }))}>
                <option value="">Select state</option>
                {["Gujarat", "Maharashtra", "Rajasthan", "Karnataka", "Tamil Nadu", "Delhi", "Uttar Pradesh", "Madhya Pradesh", "Kerala", "West Bengal", "Telangana", "Andhra Pradesh", "Bihar", "Odisha", "Punjab", "Haryana", "Jharkhand", "Chhattisgarh", "Other"].map(s => (
                  <option key={s} value={s.toLowerCase()}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Category</label>
              <select className={selectClass} required value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                <option value="">Select category</option>
                <option value="General">General</option>
                <option value="SC/ST">SC / ST</option>
                <option value="OBC">OBC</option>
                <option value="Women">Women Entrepreneur</option>
              </select>
            </div>
          </div>
          <button type="submit"
            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#355872] to-[#7AAACE] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#355872]/25 transition-all"
          >
            <Search className="w-4 h-4" /> Check My Eligibility
          </button>
        </motion.form>
      </motion.div>
    </section>
  )
}

/* ——— Results view ——— */
function ResultsView() {
  const searchParams = useSearchParams()
  const businessType = searchParams.get("businessType") || ""
  const sector = searchParams.get("sector") || ""
  const turnover = searchParams.get("turnover") || ""
  const state = searchParams.get("state") || ""
  const category = searchParams.get("category") || ""

  const hasParams = businessType || sector || turnover || state || category

  const scoredSchemes = useMemo(() => {
    if (!hasParams) return []
    return governmentSchemes
      .map(scheme => {
        const { score, reasons } = scoreScheme(scheme, { businessType, sector, turnover, state, category })
        return { ...scheme, matchScore: score, matchReasons: reasons }
      })
      .filter(s => s.matchScore >= 30)
      .sort((a, b) => b.matchScore - a.matchScore)
  }, [businessType, sector, turnover, state, category, hasParams])

  const highMatches = scoredSchemes.filter(s => s.matchScore >= 70).length
  const medMatches = scoredSchemes.filter(s => s.matchScore >= 50 && s.matchScore < 70).length

  function getScoreColor(score: number) {
    if (score >= 80) return { bar: "from-emerald-500 to-emerald-400", text: "text-emerald-600", bg: "bg-emerald-500", label: "Excellent Match" }
    if (score >= 60) return { bar: "from-[#7AAACE] to-[#9CD5FF]", text: "text-[#355872]", bg: "bg-[#7AAACE]", label: "Good Match" }
    if (score >= 40) return { bar: "from-amber-500 to-amber-400", text: "text-amber-600", bg: "bg-amber-500", label: "Partial Match" }
    return { bar: "from-gray-400 to-gray-300", text: "text-gray-500", bg: "bg-gray-400", label: "Low Match" }
  }

  if (!hasParams) {
    return <EligibilityForm />
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
          <BouncingBalls numBalls={50} colors={["#355872", "#7AAACE", "#9CD5FF"]} opacity={0.25} minRadius={0.2} maxRadius={1.2} speed={0.15} interactive={false} />
        </div>

        <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CD5FF] block mb-4">Eligibility Results</motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your Eligibility{" "}
            <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Results</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            We matched your profile against 30+ government schemes. Here are your best options.
          </motion.p>

          {/* User input summary */}
          <motion.div variants={fadeUp} className="mt-8 inline-flex flex-wrap justify-center gap-2">
            {[
              { label: "Business", val: businessType },
              { label: "Sector", val: sector },
              { label: "Turnover", val: `₹${turnover}L` },
              { label: "State", val: state },
              { label: "Category", val: category },
            ].filter(p => p.val && p.val !== "₹L").map((p) => (
              <span key={p.label} className="flex items-center gap-1.5 text-xs font-semibold bg-white/[0.08] border border-white/10 text-white/70 px-3 py-1.5 rounded-full">
                <span className="text-white/40">{p.label}:</span> <span className="text-[#9CD5FF]">{p.val}</span>
              </span>
            ))}
          </motion.div>

          {/* Quick stats */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: CheckCircle2, label: "Schemes Matched", value: scoredSchemes.length.toString() },
              { icon: Star, label: "High Match", value: highMatches.toString() },
              { icon: Filter, label: "Partial Match", value: medMatches.toString() },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                <s.icon className="w-4 h-4 text-[#9CD5FF]" />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{s.value}</p>
                  <p className="text-white/30 text-[10px] font-medium">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Scheme Cards Grid */}
      <section className="py-20 px-6 bg-[#F7F8F0]">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#7AAACE] block mb-3">Personalized Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Your Matched Schemes</h2>
            <p className="text-[#0a1628]/50 text-sm mt-3 max-w-xl mx-auto">Sorted by relevance to your business profile. Higher score = better fit.</p>
          </motion.div>

          {scoredSchemes.length === 0 ? (
            <motion.div variants={fadeUp} className="text-center py-16 rounded-2xl border border-[#355872]/[0.08] bg-white">
              <AlertCircle className="w-12 h-12 text-[#355872]/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">No Strong Matches Found</h3>
              <p className="text-[#0a1628]/50 text-sm mb-6 max-w-md mx-auto">Try adjusting your inputs or contact our team for a personalized assessment.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-[#355872] to-[#7AAACE] text-white font-semibold text-sm">
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scoredSchemes.map((scheme, i) => {
                const sc = getScoreColor(scheme.matchScore)
                return (
                  <motion.div key={scheme.slug} custom={i} variants={fadeUp}
                    className="rounded-2xl border border-[#355872]/[0.08] bg-white p-6 hover:border-[#355872]/20 hover:shadow-xl hover:shadow-[#355872]/5 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ y: -4 }}
                  >
                    {/* Score badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <span className={`text-[10px] font-bold tracking-wider uppercase ${sc.text} bg-current/10 px-2 py-0.5 rounded-full`} style={{ background: `${sc.bg.replace("bg-", "")}15` }}>
                        {sc.label}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${scheme.iconBg} flex items-center justify-center shrink-0 text-xl`}>
                        {scheme.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[#0a1628] font-bold text-lg leading-tight">{scheme.title}</h3>
                        <p className="text-[#0a1628]/40 text-xs mt-0.5">{scheme.category} · {scheme.timeline}</p>
                      </div>
                    </div>

                    {/* Score bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-[#0a1628]/50">Eligibility Score</span>
                        <span className={`text-sm font-bold ${sc.text}`}>{scheme.matchScore}%</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-[#355872]/[0.06] overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${sc.bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${scheme.matchScore}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: i * 0.08 }}
                        />
                      </div>
                    </div>

                    {/* Highlight */}
                    <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-[#F7F8F0] border border-[#355872]/[0.06]">
                      <div className="text-center">
                        <p className="text-xl font-black text-[#355872]">{scheme.highlight}</p>
                        <p className="text-[9px] font-bold text-[#0a1628]/40 uppercase tracking-wider">{scheme.highlightLabel}</p>
                      </div>
                      <div className="h-8 w-px bg-[#355872]/10" />
                      <p className="text-xs text-[#0a1628]/60 leading-relaxed flex-1">{scheme.shortDesc}</p>
                    </div>

                    {/* Why eligible */}
                    <div className="mb-4">
                      <p className="text-[10px] font-bold text-[#355872] uppercase tracking-wider mb-2">Why You&apos;re Eligible</p>
                      <ul className="space-y-1.5">
                        {scheme.matchReasons.map((r, ri) => (
                          <li key={ri} className="flex items-start gap-2 text-xs text-[#0a1628]/60">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7AAACE] shrink-0 mt-0.5" />{r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 pt-3 border-t border-[#355872]/[0.06]">
                      <Link href="/contact" className="flex-1 inline-flex items-center justify-center gap-2 h-10 rounded-xl bg-gradient-to-r from-[#355872] to-[#7AAACE] text-white font-semibold text-xs hover:shadow-lg hover:shadow-[#355872]/25 transition-all">
                        Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link href={`/funding/${scheme.slug}`} className="inline-flex items-center justify-center gap-1 h-10 px-4 rounded-xl border border-[#355872]/10 text-[#355872] font-semibold text-xs hover:bg-[#355872]/5 transition-all">
                        Details <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Re-check link */}
          <motion.div variants={fadeUp} className="text-center mt-10">
            <Link href="/eligibility-results" className="inline-flex items-center gap-2 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] transition-colors">
              <Search className="w-4 h-4" /> Check Again with Different Details
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
        <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-white/80" />
            <span className="text-white/80 text-sm font-medium">Expert assistance at every step</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Applying?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 text-base mb-8">
            Our team has helped 500+ businesses secure government funding with a 95% success rate. Let us handle the paperwork while you focus on growth.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <MetalButton variant="default">
                <span className="flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </span>
              </MetalButton>
            </Link>
            <Link href="/schemes"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Explore All Schemes
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

/* ——— Page wrapper with Suspense for useSearchParams ——— */
export default function EligibilityResultsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="min-h-screen bg-[#060e1a] flex flex-col items-center justify-center">
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
              <div className="absolute inset-0 border-4 border-[#9CD5FF] border-t-transparent rounded-full animate-spin" />
            </div>
            <p className="text-white/60 text-sm font-medium">Analyzing your eligibility…</p>
          </div>
        }>
          <ResultsView />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
