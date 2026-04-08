"use client"
import { motion, type Variants } from "framer-motion"
import { Target, Eye, Heart, Lightbulb, Users, TrendingUp, Award, Shield, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"
import PremiumConsultation from "@/components/premium/premium-consultation"
import { cn } from "@/lib/utils"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const values = [
  { icon: Heart, title: "Empathy First", desc: "We understand the struggles of MSMEs. Every interaction is rooted in genuine care for your success." },
  { icon: Shield, title: "Trust & Transparency", desc: "No hidden charges, no misleading promises. Our success-based model means we only win when you win." },
  { icon: Lightbulb, title: "Innovation", desc: "AI-powered eligibility matching, real-time tracking, and digital-first approach to legacy processes." },
  { icon: Users, title: "Partnership", desc: "We don't just process paperwork — we become your growth partner, invested in your long-term success." },
]

const strengths = [
  { stat: "500+", label: "Businesses Funded", desc: "Across 18+ states in India" },
  { stat: "₹110Cr+", label: "Funding Secured", desc: "Through government schemes" },
  { stat: "95%", label: "Success Rate", desc: "Industry-leading approval rate" },
  { stat: "30+", label: "Schemes Covered", desc: "State and central government" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(156,213,255,0.06)_0%,transparent_50%)] pointer-events-none" />
          {/* 21st.dev BouncingBalls ambient particles */}
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

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-4">About Us</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Where Business Growth{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Truly Begins</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-black/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Founded in 2019, Grow Bridge was born from a simple observation — thousands of deserving businesses miss out on government schemes simply because the process feels too complex. We changed that.
            </motion.p>
          </motion.div>
        </section>

        {/* Origin Story */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Our Story</motion.span>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
                  From Frustration to{" "}
                  <span style={{ background: "linear-gradient(90deg,#355872,#7AAACE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Innovation</span>
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-4 text-black/60 text-sm leading-relaxed">
                  <p>Our founder, Abhay, witnessed first-hand how small business owners struggled with the labyrinth of government paperwork. Brilliant entrepreneurs with viable businesses were losing months — sometimes years — navigating bureaucratic processes alone.</p>
                  <p>Grow Bridge was created to bridge that gap. We built a team of scheme experts, banking liaisons, and technology specialists who together simplify what was once overwhelming.</p>
                  <p>Today, we&apos;re proud to have helped 500+ businesses across India secure over ₹110 Crore in government funding — and we&apos;re just getting started.</p>
                </motion.div>
              </div>
              <motion.div variants={fadeUp} className="rounded-2xl border border-[#355872]/10 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  {strengths.map(s => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-black">{s.stat}</p>
                      <p className="text-sm font-semibold text-black mt-1">{s.label}</p>
                      <p className="text-[11px] text-black/40 mt-0.5">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-6 bg-[#060e1a]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#355872] to-[#7AAACE] flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-black font-bold text-xl mb-3">Our Vision</h3>
                <p className="text-black/50 text-sm leading-relaxed">
                  To become India&apos;s most trusted MSME growth platform — where every deserving business, regardless of size or location, has equal access to government support and funding opportunities.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9CD5FF] to-[#355872] flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-black font-bold text-xl mb-3">Our Mission</h3>
                <p className="text-black/50 text-sm leading-relaxed">
                  Simplify every step of the business funding journey — from eligibility check to disbursement — through technology, expertise, and genuine partnership. We exist to make government schemes accessible.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black text-center mb-12">Our Core Values</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
              {values.map((v, i) => (
                <motion.div key={v.title} custom={i} variants={fadeUp}
                  className={cn(
                    "flex items-start gap-4 p-6 relative group/feature border-[#355872]/[0.06]",
                    (i === 0 || i === 2) && "md:border-l",
                    "md:border-r",
                    i < 2 && "md:border-b",
                  )}
                >
                  {/* 21st.dev feature hover gradient */}
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-[#355872]/[0.06] to-transparent pointer-events-none" />
                  <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-[#355872]/15 group-hover/feature:bg-[#7AAACE] transition-all duration-300 origin-center top-1/2 -translate-y-1/2" />
                  <div className="w-10 h-10 rounded-xl bg-[#355872]/10 flex items-center justify-center shrink-0 group-hover/feature:scale-110 transition-transform duration-300">
                    <v.icon className="w-5 h-5 text-black" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-black font-bold text-base mb-1 group-hover/feature:translate-x-1 transition duration-200">{v.title}</h3>
                    <p className="text-black/50 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Approach */}
        <section className="py-20 px-6 bg-white">
          <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black mb-8">Our Approach</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Discover", desc: "We analyze your business, understand your goals, and identify every scheme you qualify for using our AI engine." },
                { step: "02", title: "Execute", desc: "Your dedicated case manager handles all documentation, bank liaison, and government submissions." },
                { step: "03", title: "Deliver", desc: "From approval to disbursement, we track every milestone and ensure timely completion." },
              ].map((s, i) => (
                <motion.div key={s.step} custom={i} variants={fadeUp} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#355872] to-[#7AAACE] flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">{s.step}</div>
                  <h3 className="text-black font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Grow Your Business?</motion.h2>
            <motion.p variants={fadeUp} className="text-black/70 text-base mb-8">
              Join 500+ businesses who trusted Grow Bridge to navigate their funding journey.
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
      <PremiumConsultation />
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
