"use client"
import { motion, type Variants, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, Play, Quote, TrendingUp, IndianRupee, Clock, Users, CheckCircle2, Star, Award, Building2, MapPin } from "lucide-react"
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

const successStories = [
  {
    id: 1,
    name: "Kapoor Agro Industries",
    founder: "Rakesh Kapoor",
    location: "Ludhiana, Punjab",
    sector: "Manufacturing",
    scheme: "PMEGP",
    amount: "₹42L",
    amountFull: "₹42 Lakhs",
    icon: "🏭",
    gradient: "from-[#355872] to-[#7AAACE]",
    quote: "Grow Bridge made the entire PMEGP process seamless. From documentation to bank coordination, their team handled everything. Our cold storage unit is now operational and serving 200+ farmers.",
    timeline: "45 days from application to disbursement",
    outcomes: ["Production capacity doubled", "Employment for 25 workers", "Serving 200+ local farmers", "35% subsidy secured"],
    tags: ["Manufacturing", "Rural Area", "PMEGP"],
  },
  {
    id: 2,
    name: "Shree Textiles Ltd",
    founder: "Anil Mehta",
    location: "Surat, Gujarat",
    sector: "Textile",
    scheme: "CGTMSE",
    amount: "₹1.1Cr",
    amountFull: "₹1.1 Crore",
    icon: "🧵",
    gradient: "from-[#7AAACE] to-[#9CD5FF]",
    quote: "Banks had rejected us three times for lack of collateral. Grow Bridge introduced us to CGTMSE and within 30 days we had a collateral-free sanction letter. Game changer for our expansion.",
    timeline: "30 days for loan sanction",
    outcomes: ["New weaving unit set up", "Zero collateral required", "50+ jobs created", "Export orders secured"],
    tags: ["Textile", "Collateral-Free", "CGTMSE"],
  },
  {
    id: 3,
    name: "TechNest Solutions",
    founder: "Sneha Iyer",
    location: "Bangalore, Karnataka",
    sector: "Technology",
    scheme: "MUDRA Yojana",
    amount: "₹80L",
    amountFull: "₹80 Lakhs",
    icon: "💻",
    gradient: "from-[#9CD5FF] to-[#355872]",
    quote: "As a first-time tech entrepreneur, I didn't know where to start. Grow Bridge not only got us MUDRA Tarun funding but also connected us with the Startup India ecosystem. Revenue is up 4x.",
    timeline: "20 days for complete processing",
    outcomes: ["4x revenue growth in 12 months", "Team scaled from 5 to 22", "DPIIT recognition obtained", "Second round funding in pipeline"],
    tags: ["Technology", "Startup", "MUDRA"],
  },
  {
    id: 4,
    name: "Green Earth Organics",
    founder: "Lakshmi Devi",
    location: "Jaipur, Rajasthan",
    sector: "Agriculture",
    scheme: "Stand-Up India",
    amount: "₹25L",
    amountFull: "₹25 Lakhs",
    icon: "🌿",
    gradient: "from-[#355872] to-[#9CD5FF]",
    quote: "Being a woman entrepreneur in agriculture wasn't easy. Stand-Up India through Grow Bridge gave me the push I needed. Today my organic products are in 50+ stores across Rajasthan.",
    timeline: "35 days from application to funding",
    outcomes: ["Products in 50+ retail stores", "Women entrepreneur empowered", "25% margin money subsidized", "Organic certification obtained"],
    tags: ["Agriculture", "Women Entrepreneur", "Stand-Up India"],
  },
  {
    id: 5,
    name: "Rajesh Crafts",
    founder: "Rajesh Kumar",
    location: "Moradabad, Uttar Pradesh",
    sector: "Handicrafts",
    scheme: "PMEGP",
    amount: "₹15L",
    amountFull: "₹15 Lakhs",
    icon: "🏺",
    gradient: "from-[#7AAACE] to-[#355872]",
    quote: "Our family has been in brassware for generations but never had capital to scale. PMEGP subsidy through Grow Bridge helped us modernize our workshop and now we export to 5 countries.",
    timeline: "40 days for complete process",
    outcomes: ["Exports to 5 countries", "35% subsidy as rural SC/ST entrepreneur", "Modern machinery installed", "GeM registration completed"],
    tags: ["Handicrafts", "Rural Area", "SC/ST", "PMEGP"],
  },
  {
    id: 6,
    name: "Digital Seva Point",
    founder: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    sector: "Services",
    scheme: "MUDRA Kishore",
    amount: "₹5L",
    amountFull: "₹5 Lakhs",
    icon: "📱",
    gradient: "from-[#9CD5FF] to-[#7AAACE]",
    quote: "I was a first-generation entrepreneur with zero business background. Grow Bridge helped me understand MUDRA Kishore and set up my digital services center. Best decision of my life.",
    timeline: "15 days — fastest processing ever",
    outcomes: ["Serving 500+ customers monthly", "Zero collateral loan", "First-gen entrepreneur success", "Plan to open 2 more centers"],
    tags: ["Services", "First-Generation", "MUDRA Kishore"],
  },
]

const overallStats = [
  { value: 500, suffix: "+", label: "Businesses Funded", icon: Users },
  { value: 110, suffix: "Cr+", prefix: "₹", label: "Total Amount Secured", icon: IndianRupee },
  { value: 28, suffix: "+", label: "States Covered", icon: MapPin },
  { value: 30, suffix: " days", label: "Avg Approval Time", icon: Clock },
]

const videoTestimonials = [
  { name: "Rakesh Kapoor", business: "Kapoor Agro Industries", scheme: "PMEGP — ₹42L Funded", thumbnail: "🏭" },
  { name: "Sneha Iyer", business: "TechNest Solutions", scheme: "MUDRA — ₹80L Funded", thumbnail: "💻" },
  { name: "Lakshmi Devi", business: "Green Earth Organics", scheme: "Stand-Up India — ₹25L", thumbnail: "🌿" },
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

export default function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(156,213,255,0.06)_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
            <BouncingBalls numBalls={55} colors={["#355872", "#7AAACE", "#9CD5FF"]} opacity={0.25} minRadius={0.2} maxRadius={1.2} speed={0.15} interactive={false} />
          </div>

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-4">🏆 Client Achievements</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Success Stories —{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>
                Real Businesses, Real Results
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-black/50 text-lg max-w-2xl mx-auto leading-relaxed">
              From ₹5 Lakh MUDRA loans to ₹1.1 Crore CGTMSE sanctions — see how Grow Bridge has transformed businesses across India with government funding.
            </motion.p>

            {/* Quick badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { icon: Award, label: "95% Success Rate" },
                { icon: IndianRupee, label: "₹110Cr+ Funded" },
                { icon: Users, label: "500+ Businesses" },
                { icon: Star, label: "4.9★ Client Rating" },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-black/70">
                  <b.icon className="w-4 h-4 text-black" />{b.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Animated Stats */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Impact Numbers</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Numbers That Speak</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {overallStats.map((s, i) => (
                <motion.div key={s.label} custom={i} variants={fadeUp}
                  className="group rounded-2xl border border-[#355872]/[0.08] bg-white p-6 text-center hover:border-[#355872]/20 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-[#355872]/[0.08] group-hover:bg-gradient-to-br group-hover:from-[#355872] group-hover:to-[#7AAACE] transition-all duration-300">
                    <s.icon className="w-5 h-5 text-black group-hover:text-black transition-colors duration-300" />
                  </div>
                  <p className="text-2xl md:text-3xl font-black text-black mb-1">
                    <AnimatedCounter target={s.value} prefix={s.prefix || ""} suffix={s.suffix} />
                  </p>
                  <p className="text-sm font-semibold text-black">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-20 px-6 bg-[#060e1a]">
          <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Featured Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Businesses We&apos;ve{" "}
                <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Transformed</span>
              </h2>
              <p className="text-black/40 text-sm mt-3 max-w-xl mx-auto">Each story represents a dream funded, a family empowered, and a business scaled.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((story, i) => (
                <motion.div key={story.id} custom={i} variants={fadeUp}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-xl shrink-0`}>
                      {story.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-black font-bold text-base leading-tight">{story.name}</h3>
                      <p className="text-black/35 text-[11px] mt-0.5">{story.founder} · {story.location}</p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-black bg-[#355872] px-2.5 py-0.5 rounded-full">{story.scheme}</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-black bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-2.5 py-0.5 rounded-full">{story.amount}</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-black/50 bg-white/5 px-2.5 py-0.5 rounded-full">{story.sector}</span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4 flex-1">
                    <Quote className="w-4 h-4 text-black/30 absolute -top-1 -left-1" />
                    <p className="text-black/50 text-sm leading-relaxed pl-4 italic">&ldquo;{story.quote}&rdquo;</p>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 mb-4 p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <Clock className="w-3.5 h-3.5 text-black shrink-0" />
                    <span className="text-[11px] text-black/50 font-medium">{story.timeline}</span>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-4">
                    <p className="text-[10px] font-bold text-black uppercase tracking-wider mb-2">Key Outcomes</p>
                    <ul className="space-y-1.5">
                      {story.outcomes.map((o, oi) => (
                        <li key={oi} className="flex items-start gap-2 text-xs text-black/50">
                          <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />{o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 mt-auto border-t border-white/[0.06]">
                    {story.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold tracking-wider uppercase text-black/30 bg-white/[0.04] px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Video Testimonials */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Video Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Hear It From Them</h2>
              <p className="text-black/50 text-sm mt-3">Watch real entrepreneurs share their funding journey with Grow Bridge.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoTestimonials.map((v, i) => (
                <motion.div key={v.name} custom={i} variants={fadeUp}
                  className="group rounded-2xl border border-[#355872]/[0.08] bg-white overflow-hidden hover:shadow-xl hover:border-[#355872]/20 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  {/* Video placeholder */}
                  <div className="relative bg-gradient-to-br from-[#0a1628] to-[#355872] h-48 flex items-center justify-center">
                    <span className="text-5xl opacity-20 absolute">{v.thumbnail}</span>
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 cursor-pointer z-10">
                      <Play className="w-6 h-6 text-black ml-1" />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-black bg-[#355872]/80 backdrop-blur-sm px-2.5 py-1 rounded-full">{v.scheme}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-black font-bold text-sm">{v.name}</h3>
                    <p className="text-black/40 text-xs mt-0.5">{v.business}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Consultation CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black mb-4">
              Become Our Next Success Story
            </motion.h2>
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
              <Link href="/eligibility-results"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/30 text-black font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Check Your Eligibility
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
