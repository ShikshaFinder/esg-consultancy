"use client"
import { useState, useMemo } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import {
  ArrowRight,
  Clock,
  Search,
  Sparkles,
  BadgeCheck,
  TrendingUp,
  IndianRupee,
  Users,
  Shield,
  Building2,
  FileSearch,
  ClipboardCheck,
  Rocket,
  Phone,
  HelpCircle,
  LayoutGrid,
  CircleDollarSign,
  HandCoins,
  Gift,
  FileBadge2,
  ScrollText,
  ReceiptText,
  Stars,
  Globe2,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { Marquee } from "@/components/devComponents/3d-testimonails"
import { governmentSchemes, type Scheme } from "@/lib/schemes"

/* ── Animations ─────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] },
  }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }

/* ── Category colour map ────────────────────────────────────────── */
const categoryColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  Loan:           { bg: "bg-blue-500/15",    text: "text-blue-300",    border: "border-blue-500/25",    glow: "group-hover:shadow-blue-500/10" },
  Subsidy:        { bg: "bg-purple-500/15",   text: "text-purple-300",  border: "border-purple-500/25",  glow: "group-hover:shadow-purple-500/10" },
  Grant:          { bg: "bg-emerald-500/15",  text: "text-emerald-300", border: "border-emerald-500/25", glow: "group-hover:shadow-emerald-500/10" },
  Certification:  { bg: "bg-cyan-500/15",     text: "text-cyan-300",    border: "border-cyan-500/25",    glow: "group-hover:shadow-cyan-500/10" },
  Registration:   { bg: "bg-rose-500/15",     text: "text-rose-300",    border: "border-rose-500/25",    glow: "group-hover:shadow-rose-500/10" },
  "Tax Benefit":  { bg: "bg-amber-500/15",    text: "text-amber-300",   border: "border-amber-500/25",   glow: "group-hover:shadow-amber-500/10" },
  Recognition:    { bg: "bg-orange-500/15",   text: "text-orange-300",  border: "border-orange-500/25",  glow: "group-hover:shadow-orange-500/10" },
  "Export Benefit":{ bg: "bg-teal-500/15",    text: "text-teal-300",    border: "border-teal-500/25",    glow: "group-hover:shadow-teal-500/10" },
  Equity:         { bg: "bg-pink-500/15",     text: "text-pink-300",    border: "border-pink-500/25",    glow: "group-hover:shadow-pink-500/10" },
}

const filterIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  All: LayoutGrid,
  Loan: CircleDollarSign,
  Subsidy: Sparkles,
  Grant: Gift,
  Certification: FileBadge2,
  Registration: ScrollText,
  "Tax Benefit": ReceiptText,
  Recognition: Stars,
  "Export Benefit": Globe2,
  Equity: TrendingUp,
}

const allCategories = ["All", ...Array.from(new Set(governmentSchemes.map(s => s.category)))]

/* ── Page ────────────────────────────────────────────────────────── */
export default function SchemesPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = useMemo(() => {
    let list = governmentSchemes
    if (activeCategory !== "All") list = list.filter(s => s.category === activeCategory)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.shortDesc.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      )
    }
    return list
  }, [activeCategory, searchQuery])

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#27374D] via-[#27374D] to-[#1a2a3d]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(157,178,191,0.08)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
            <BouncingBalls numBalls={40} colors={["#526D82", "#9DB2BF", "#DDE6ED"]} opacity={0.2} minRadius={0.2} maxRadius={1} speed={0.12} interactive={false} />
          </div>

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#9DB2BF]/20 bg-[#9DB2BF]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-[#9DB2BF] mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Government Initiatives
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-[#DDE6ED] leading-tight mb-5">
              Discover{" "}
              <span className="bg-gradient-to-r from-[#9DB2BF] to-[#DDE6ED] bg-clip-text text-transparent">
                19+ Funding Schemes
              </span>
              <br className="hidden md:block" />
              Built for Your Growth
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#9DB2BF]/80 text-lg max-w-2xl mx-auto mb-8">
              From loans to subsidies, grants to certifications — find every central government scheme for MSMEs & startups. We guide you from eligibility check to final approval.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Marquee pauseOnHover className="[--duration:22s] [--gap:1rem]">
                {[
                  { label: "19+ Verified Schemes", icon: Building2 },
                  { label: "95% Approval Rate", icon: TrendingUp },
                  { label: "₹110Cr+ Disbursed", icon: IndianRupee },
                  { label: "Pan-India Coverage", icon: Shield },
                  { label: "Expert-Led Process", icon: Users },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-2 rounded-full border border-[#9DB2BF]/15 bg-[#9DB2BF]/5 px-4 py-2 text-sm text-[#9DB2BF]/70 whitespace-nowrap">
                    <b.icon className="w-4 h-4 text-[#9DB2BF]" />{b.label}
                  </div>
                ))}
              </Marquee>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Filters ───────────────────────────────────────────── */}
        <section className="bg-[#f7fafc] py-10 px-6 border-b border-[#d9e3ea]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {allCategories.map((cat) => {
                const Icon = filterIcons[cat] || LayoutGrid

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm md:text-base font-semibold transition-all duration-300 ${
                      activeCategory === cat
                        ? "border-[#33a7db] bg-gradient-to-r from-[#33a7db] to-[#49b8eb] text-white shadow-lg shadow-[#33a7db]/25"
                        : "border-[#d8e1ea] bg-white text-[#40566f] hover:border-[#bfd1e0] hover:text-[#27374D] hover:shadow-md"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{cat === "All" ? "All Schemes" : cat}</span>
                  </button>
                )
              })}
            </div>

            <div className="text-center space-y-4">
              <div className="relative mx-auto max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6f8297]" />
                <input
                  type="text"
                  placeholder="Search schemes by name or category"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-full border border-[#d8e1ea] bg-white pl-11 pr-4 text-sm text-[#27374D] placeholder:text-[#7b8da1] focus:outline-none focus:border-[#33a7db] focus:ring-2 focus:ring-[#33a7db]/10"
                />
              </div>

              <p className="text-xl md:text-2xl text-[#526D82]">
                Showing <span className="font-bold text-[#27374D]">{filtered.length}</span> schemes
              </p>
            </div>
          </div>
        </section>

        {/* ── Scheme Cards Grid ─────────────────────────────────── */}
        <section className="py-16 px-6 bg-[#f7fafc]">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={stagger}
              >
                {filtered.map((scheme, i) => (
                  <SchemeCard key={scheme.slug} scheme={scheme} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <Search className="w-12 h-12 text-[#526D82]/30 mx-auto mb-4" />
                <p className="text-[#9DB2BF]/60 text-lg font-medium">No schemes match your search</p>
                <p className="text-[#9DB2BF]/40 text-sm mt-1">Try adjusting your filters or search query</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────────── */}
        <section className="py-20 px-6 border-t border-[#526D82]/10">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9DB2BF]/20 bg-[#9DB2BF]/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-[#9DB2BF] mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#DDE6ED]">
                From Discovery to Disbursement
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Browse & Filter", desc: "Explore 19+ government schemes. Use filters to find programmes matching your business type, sector, and goals.", icon: FileSearch, color: "from-blue-500/20 to-cyan-500/20" },
                { step: "02", title: "Check Eligibility", desc: "Get instant clarity on requirements. Our experts assess your profile and match you with the most suitable schemes.", icon: ClipboardCheck, color: "from-emerald-500/20 to-teal-500/20" },
                { step: "03", title: "Apply with Experts", desc: "We handle the complete paperwork — from documentation to submission to follow-up — until you receive your benefit.", icon: Rocket, color: "from-purple-500/20 to-pink-500/20" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  custom={i}
                  variants={fadeUp}
                  className="relative rounded-2xl border border-[#526D82]/15 bg-[#526D82]/5 p-7 text-center group hover:border-[#9DB2BF]/20 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5`}>
                    <item.icon className="w-6 h-6 text-[#DDE6ED]" />
                  </div>
                  <span className="text-[#9DB2BF]/30 text-xs font-bold tracking-widest">{item.step}</span>
                  <h3 className="text-[#DDE6ED] font-bold text-lg mt-1 mb-2">{item.title}</h3>
                  <p className="text-[#9DB2BF]/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CTA Banner ──────────────────────────────────────── */}
        <section className="relative py-20 px-6 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a8a9a] via-[#2ba5b5] to-[#45c3d3]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

          <motion.div className="relative z-10 max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <HelpCircle className="w-10 h-10 text-white/30" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-[#0a2a3a] mb-4 leading-tight">
              Need Help Choosing the{" "}
              <span className="text-[#0a2a3a]/60">Right Scheme?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#0a2a3a]/70 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Our experts will analyze your business profile and recommend the best government scheme for your specific needs — completely free.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-13 px-8 rounded-full bg-gradient-to-r from-[#3dd4e6] to-[#5be0ef] text-[#0a2a3a] font-bold text-base shadow-lg shadow-[#1a8a9a]/30 hover:shadow-xl hover:shadow-[#1a8a9a]/40 hover:scale-[1.03] transition-all duration-300"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919998035607"
                className="inline-flex items-center gap-2 h-13 px-8 rounded-full border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> Call Now: +91 99980 35607
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

/* ── Scheme Card Component ───────────────────────────────────────── */
function SchemeCard({ scheme, index }: { scheme: Scheme; index: number }) {
  const colors = categoryColors[scheme.category] || categoryColors.Loan

  return (
    <motion.div custom={index} variants={fadeUp}>
      <Link href={`/funding/${scheme.slug}`} className="group block h-full">
        <div className={`relative h-full overflow-hidden rounded-[28px] border border-[#d9e3ea] bg-white p-6 shadow-[0_16px_50px_rgba(39,55,77,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d6e3] hover:shadow-[0_22px_60px_rgba(39,55,77,0.12)] ${colors.glow}`}>
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#33a7db] via-[#7cc8ef] to-[#d8eefc] opacity-80" />

          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eef7fd] to-[#dbeefd] text-3xl shadow-inner" role="img">
                {scheme.icon}
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7f93a8]">Government Support</p>
                <h3 className="mt-1 text-lg font-bold leading-snug text-[#27374D] transition-colors group-hover:text-[#1f5f8b]">
                  {scheme.title}
                </h3>
              </div>
            </div>
            <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors.bg} ${colors.text} border ${colors.border}`}>
              {scheme.category}
            </span>
          </div>

          <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[#5f7388]">
            {scheme.shortDesc}
          </p>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#e4edf4] bg-[#f8fbfe] px-4 py-3">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#84a0b8]">{scheme.highlightLabel}</p>
              <p className="text-xl font-bold leading-none text-[#27374D]">{scheme.highlight}</p>
            </div>
            <div className="rounded-2xl border border-[#e4edf4] bg-[#f8fbfe] px-4 py-3">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#84a0b8]">Timeline</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#27374D]">
                <Clock className="h-4 w-4 text-[#33a7db]" />
                <span>{scheme.timeline}</span>
              </div>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700">
              <BadgeCheck className="h-3.5 w-3.5" /> Verified Scheme
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe7f1] bg-[#f7fafc] px-3 py-1.5 text-[11px] font-semibold text-[#5f7388]">
              <HandCoins className="h-3.5 w-3.5 text-[#33a7db]" /> Expert Assisted
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-[#e8eef4] pt-4">
            <div className="text-xs text-[#7f93a8]">
              End-to-end support available
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1f6c9d] transition-colors group-hover:text-[#144c70]">
              Explore Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
