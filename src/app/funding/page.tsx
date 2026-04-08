"use client"
import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  IndianRupee,
  TrendingUp,
  Shield,
  Users,
  Building2,
  Search,
  Filter,
  ChevronRight,
  AlertCircle,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"
import { governmentSchemes } from "@/lib/schemes"
import { fundingContent } from "@/lib/content"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
}
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const categories = [
  "All",
  ...Array.from(new Set(governmentSchemes.map((s) => s.category))),
]

const stats = [
  { label: "Schemes Available", value: `${governmentSchemes.length}+`, icon: Building2 },
  { label: "Success Rate", value: "95%", icon: TrendingUp },
  { label: "Total Funded", value: "₹110Cr+", icon: IndianRupee },
  { label: "Pan-India Service", value: "28 States", icon: Shield },
  { label: "Expert Consultants", value: "50+", icon: Users },
]

export default function FundingPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = governmentSchemes.filter((s) => {
    const matchCategory = activeCategory === "All" || s.category === activeCategory
    const matchSearch =
      searchQuery === "" ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-32 pb-24 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
            <BouncingBalls
              numBalls={50}
              colors={["#355872", "#7AAACE", "#9CD5FF"]}
              opacity={0.25}
              minRadius={0.2}
              maxRadius={1.2}
              speed={0.15}
              interactive={false}
            />
          </div>

          <motion.div
            className="max-w-4xl mx-auto text-center relative z-10"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-4"
            >
              Funding & Schemes
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6"
            >
              {fundingContent.introTitle.split("&")[0]}&amp;{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#9CD5FF,#355872)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "#000000",
                  backgroundClip: "text",
                }}
              >
                {fundingContent.introTitle.split("&")[1]?.trim() ?? "Government Schemes"}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-black/50 text-lg max-w-2xl mx-auto mb-8"
            >
              {fundingContent.introBody}
            </motion.p>

            {/* Bullet Points */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-3"
            >
              {fundingContent.bullets.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-black/70"
                >
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  {b}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ─── Stats Ticker ─── */}
        <section className="bg-[#0a1628] border-y border-white/[0.06] py-5 overflow-hidden">
          <div className="flex animate-[scroll_25s_linear_infinite] gap-12 px-6 w-max">
            {[...stats, ...stats].map((s, i) => (
              <div
                key={`${s.label}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <div className="w-9 h-9 rounded-lg bg-[#355872]/20 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-black font-bold text-sm">{s.value}</p>
                  <p className="text-black/40 text-[10px] uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Filter + Search ─── */}
        <section className="pt-16 pb-4 px-6 bg-[#F7F8F0]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Search */}
              <motion.div
                variants={fadeUp}
                className="relative w-full md:w-80"
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                <input
                  type="text"
                  placeholder="Search schemes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#355872]/10 bg-white text-sm text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#7AAACE]/30 focus:border-[#7AAACE]/40 transition-all"
                />
              </motion.div>

              {/* Category Filters */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 flex-wrap"
              >
                <Filter className="w-4 h-4 text-black/50 mr-1" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      activeCategory === cat
                        ? "bg-[#355872] text-black border-[#355872]"
                        : "bg-white text-black/60 border-[#355872]/10 hover:border-[#355872]/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            </motion.div>

            <p className="text-black/40 text-xs mt-2">
              Showing {filtered.length} of {governmentSchemes.length} schemes
            </p>
          </div>
        </section>

        {/* ─── Scheme Cards Grid ─── */}
        <section className="py-12 px-6 bg-[#F7F8F0]">
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
          >
            {filtered.map((scheme, i) => (
              <motion.div
                key={scheme.slug}
                custom={i}
                variants={fadeUp}
                className="group rounded-2xl border border-[#355872]/[0.08] bg-white hover:border-[#355872]/20 hover:shadow-xl hover:shadow-[#355872]/5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl ${scheme.iconBg} flex items-center justify-center text-xl shrink-0`}
                      >
                        {scheme.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-black font-bold text-base leading-snug line-clamp-1">
                          {scheme.title}
                        </h3>
                        <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-black bg-[#9CD5FF]/15 border border-[#9CD5FF]/25 px-2 py-0.5 rounded-full">
                          {scheme.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-black/55 text-sm leading-relaxed line-clamp-2 mb-4">
                    {scheme.shortDesc}
                  </p>

                  {/* Highlight + Timeline */}
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex-1 rounded-xl border border-[#355872]/[0.06] bg-[#F7F8F0] px-3 py-2.5 text-center">
                      <p className="text-black font-extrabold text-lg leading-none">
                        {scheme.highlight}
                      </p>
                      <p className="text-black/40 text-[10px] font-medium uppercase mt-1">
                        {scheme.highlightLabel}
                      </p>
                    </div>
                    <div className="flex-1 rounded-xl border border-[#355872]/[0.06] bg-[#F7F8F0] px-3 py-2.5 text-center">
                      <p className="text-black font-extrabold text-base leading-none flex items-center justify-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-black" />
                        {scheme.timeline}
                      </p>
                      <p className="text-black/40 text-[10px] font-medium uppercase mt-1">
                        Timeline
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-auto border-t border-[#355872]/[0.06] px-6 py-4">
                  <Link
                    href={`/funding/${scheme.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black group-hover:text-black transition-colors"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="max-w-7xl mx-auto text-center py-16">
              <Search className="w-10 h-10 text-black/20 mx-auto mb-4" />
              <p className="text-black/50 text-base font-medium">
                No schemes found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
                className="mt-3 text-sm text-black underline underline-offset-4 hover:text-black transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <AlertCircle className="w-5 h-5 text-black/80" />
              <span className="text-black/80 text-sm font-medium">
                Not sure which scheme is right for you?
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-black mb-4"
            >
              Get Your Free Eligibility Check
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-black/70 text-base mb-8"
            >
              Our eligibility engine checks your profile against{" "}
              {governmentSchemes.length}+ schemes in seconds. Get your
              personalised report for free.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <MetalButton variant="default">
                  <span className="flex items-center gap-2">
                    Get Free Eligibility Check{" "}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </MetalButton>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />

      {/* ticker keyframe */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  )
}
