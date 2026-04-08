"use client"
import { motion, type Variants, useMotionValue, useTransform, animate } from "framer-motion"
import { TrendingUp, MapPin, BarChart3, Users, IndianRupee, CheckCircle2, ArrowRight, Building2, Factory, Cpu, Wheat, ShoppingBag, Layers, Award, Globe, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const heroStats = [
  { value: "500+", label: "Businesses Funded", icon: Users, suffix: "+" },
  { value: "₹110Cr+", label: "Funding Secured", icon: IndianRupee, suffix: "" },
  { value: "95%", label: "Success Rate", icon: TrendingUp, suffix: "" },
  { value: "28+", label: "States Coverage", icon: MapPin, suffix: "+" },
  { value: "30+", label: "Government Schemes", icon: Award, suffix: "+" },
  { value: "7+", label: "Years Experience", icon: Star, suffix: "+" },
]

const sectors = [
  { name: "Manufacturing", percent: 35, icon: Factory, color: "#355872" },
  { name: "Services", percent: 25, icon: Building2, color: "#7AAACE" },
  { name: "Technology", percent: 15, icon: Cpu, color: "#9CD5FF" },
  { name: "Agriculture", percent: 12, icon: Wheat, color: "#4a7c59" },
  { name: "Retail", percent: 8, icon: ShoppingBag, color: "#8b6914" },
  { name: "Others", percent: 5, icon: Layers, color: "#6b7280" },
]

const statePresence = [
  { state: "Gujarat", businesses: "85+", percentage: 100 },
  { state: "Maharashtra", businesses: "72+", percentage: 85 },
  { state: "Rajasthan", businesses: "58+", percentage: 68 },
  { state: "Karnataka", businesses: "45+", percentage: 53 },
  { state: "Tamil Nadu", businesses: "38+", percentage: 45 },
  { state: "Uttar Pradesh", businesses: "34+", percentage: 40 },
  { state: "Delhi NCR", businesses: "30+", percentage: 35 },
  { state: "Madhya Pradesh", businesses: "26+", percentage: 31 },
]

const impactStories = [
  {
    name: "Rajesh Patel",
    business: "Patel Manufacturing",
    location: "Ahmedabad, Gujarat",
    quote: "Grow Bridge helped us secure ₹45 Lakh through PMEGP. Our factory production has doubled since then.",
    funding: "₹45L",
    scheme: "PMEGP",
  },
  {
    name: "Priya Sharma",
    business: "TechVista Solutions",
    location: "Pune, Maharashtra",
    quote: "From Startup India registration to seed funding — Grow Bridge handled everything. We raised ₹1.2 Crore in just 40 days.",
    funding: "₹1.2Cr",
    scheme: "Startup India",
  },
  {
    name: "Mohammed Irfan",
    business: "Green Agro Exports",
    location: "Hyderabad, Telangana",
    quote: "The team's knowledge of CGTMSE and MUDRA schemes got us collateral-free funding when banks had refused us.",
    funding: "₹25L",
    scheme: "MUDRA + CGTMSE",
  },
]

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => {
    const controls = animate(motionVal, target, { duration: 2, ease: "easeOut" })
    return controls.stop
  }, [motionVal, target])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v
    })
    return unsubscribe
  }, [rounded])

  return <span ref={ref}>0</span>
}

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(156,213,255,0.06)_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
            <BouncingBalls
              numBalls={55}
              colors={["#355872", "#7AAACE", "#9CD5FF"]}
              opacity={0.25}
              minRadius={0.2}
              maxRadius={1.2}
              speed={0.15}
              interactive={false}
            />
          </div>

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-4">📊 Proven Results</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Our Impact{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Across India</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-black/50 text-lg max-w-2xl mx-auto leading-relaxed">
              From securing ₹110+ Crore in government funding to empowering 500+ businesses across 28 states — here&apos;s the story of how Grow Bridge is transforming India&apos;s MSME landscape.
            </motion.p>
          </motion.div>
        </section>

        {/* Animated Stats Grid */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Key Metrics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Numbers That Speak</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {heroStats.map((s, i) => (
                <motion.div key={s.label} custom={i} variants={fadeUp}
                  className="group rounded-2xl border border-[#355872]/[0.08] bg-white p-6 text-center hover:border-[#355872]/20 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-[#355872]/[0.08] group-hover:bg-gradient-to-br group-hover:from-[#355872] group-hover:to-[#7AAACE] transition-all duration-300">
                    <s.icon className="w-5 h-5 text-black group-hover:text-black transition-colors duration-300" />
                  </div>
                  <p className="text-2xl md:text-3xl font-black text-black mb-1">{s.value}</p>
                  <p className="text-sm font-semibold text-black">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Sector Distribution */}
        <section className="py-20 px-6 bg-[#060e1a]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Sector Breakdown</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Businesses We&apos;ve{" "}
                <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Empowered</span>
              </h2>
              <p className="text-black/40 text-sm mt-3 max-w-xl mx-auto">Grow Bridge serves MSMEs and startups across diverse industries, each with tailored funding strategies.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sectors.map((s, i) => (
                <motion.div key={s.name} custom={i} variants={fadeUp} className="flex items-center gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${s.color}20`, border: `1px solid ${s.color}35` }}>
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-black font-semibold text-sm">{s.name}</span>
                      <span className="text-black font-bold text-sm">{s.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}99)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary row */}
            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: "Top Sector", value: "Manufacturing", sub: "35% of all funded businesses" },
                { label: "Fastest Growing", value: "Technology", sub: "3x growth in last 2 years" },
                { label: "Highest Ticket", value: "Manufacturing", sub: "Avg ₹35L per business" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-black/30 mb-1">{item.label}</p>
                  <p className="text-black font-bold text-sm">{item.value}</p>
                  <p className="text-black/30 text-[11px] mt-0.5">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* State-wise Coverage */}
        <section className="py-20 px-6 bg-white">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Pan-India Presence</motion.span>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
                  Covering{" "}
                  <span style={{ background: "linear-gradient(90deg,#355872,#7AAACE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>28+ States</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-black/50 text-sm leading-relaxed mb-8">
                  From metro cities to tier-2 and tier-3 towns, Grow Bridge&apos;s digital-first approach ensures no deserving business is left behind. Our 100% online process means geography is never a barrier.
                </motion.p>

                <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-8">
                  <div className="rounded-xl bg-[#F7F8F0] border border-[#355872]/10 p-4 text-center">
                    <p className="text-2xl font-black text-black">28+</p>
                    <p className="text-[11px] text-black/50 font-medium">Active States</p>
                  </div>
                  <div className="rounded-xl bg-[#F7F8F0] border border-[#355872]/10 p-4 text-center">
                    <p className="text-2xl font-black text-black">100%</p>
                    <p className="text-[11px] text-black/50 font-medium">Digital Process</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {["Gujarat", "Maharashtra", "Rajasthan", "Karnataka", "Tamil Nadu", "Delhi NCR", "UP", "MP", "Kerala", "West Bengal", "Bihar", "Odisha", "Punjab", "Haryana", "Telangana", "AP", "Jharkhand", "Chhattisgarh"].map((s) => (
                    <span key={s} className="text-[10px] font-medium text-black bg-[#F7F8F0] border border-[#355872]/10 px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                  <span className="text-[10px] font-medium text-black bg-[#355872] px-2.5 py-1 rounded-full">10+ more</span>
                </motion.div>
              </div>

              {/* State bars */}
              <motion.div variants={fadeUp} className="rounded-2xl border border-[#355872]/10 bg-[#F7F8F0] p-8">
                <h3 className="text-black font-bold text-lg mb-6">Top States by Businesses Funded</h3>
                <div className="space-y-4">
                  {statePresence.map((item, i) => (
                    <div key={item.state} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-black/60 font-medium">{item.state}</span>
                        <span className="text-black font-bold">{item.businesses}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#355872]/[0.08] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#355872] to-[#7AAACE]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: i * 0.08 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Impact Stories */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Impact That Matters</h2>
              <p className="text-black/50 text-sm mt-3 max-w-xl mx-auto">Real businesses, real funding, real growth — powered by Grow Bridge.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {impactStories.map((story, i) => (
                <motion.div key={story.name} custom={i} variants={fadeUp}
                  className="rounded-2xl border border-[#355872]/[0.08] bg-white p-6 hover:shadow-lg hover:border-[#355872]/15 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-black bg-[#355872] px-2.5 py-0.5 rounded-full">{story.scheme}</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-black bg-[#355872]/10 px-2.5 py-0.5 rounded-full">{story.funding}</span>
                  </div>
                  <p className="text-black/60 text-sm leading-relaxed mb-5 italic">&ldquo;{story.quote}&rdquo;</p>
                  <div className="border-t border-[#355872]/[0.06] pt-4">
                    <p className="text-black font-bold text-sm">{story.name}</p>
                    <p className="text-black/40 text-[11px]">{story.business} · {story.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Government Programs */}
        <section className="py-20 px-6 bg-[#060e1a]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Schemes We Cover</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">30+ Government Schemes</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "PMEGP", desc: "Up to ₹50L subsidy" },
                { name: "MUDRA", desc: "Up to ₹10L loan" },
                { name: "CGTMSE", desc: "Collateral-free guarantee" },
                { name: "Stand-Up India", desc: "₹10L to ₹1Cr" },
                { name: "Startup India", desc: "Tax exemptions & seed fund" },
                { name: "MSME Loans", desc: "Up to ₹5Cr funding" },
                { name: "State Schemes", desc: "Gujarat, MH, KA & more" },
                { name: "Sector Specific", desc: "FSSAI, ZED, BIS" },
              ].map((scheme, i) => (
                <motion.div key={scheme.name} custom={i} variants={fadeUp}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center hover:bg-white/[0.06] transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-black mx-auto mb-2" />
                  <p className="text-black font-bold text-sm">{scheme.name}</p>
                  <p className="text-black/35 text-[11px] mt-0.5">{scheme.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black mb-4">Become Our Next Success Story</motion.h2>
            <motion.p variants={fadeUp} className="text-black/70 text-base mb-8">
              Join 500+ businesses who trusted Grow Bridge to navigate their funding journey. Your growth story starts with a free consultation.
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
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/30 text-black font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Explore Schemes
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
