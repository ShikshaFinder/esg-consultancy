"use client"
import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { ArrowRight, CheckCircle2, ChevronDown, Phone, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export type ServiceCard = {
  emoji: string
  title: string
  desc: string
  items: string[]
  timeline: string
}

export type ServicePageData = {
  breadcrumbEmoji: string
  breadcrumbLabel: string
  heroTitle: string
  heroHighlight: string
  heroDesc: string
  heroImage: string
  heroStats: { value: string; label: string }[]
  services: ServiceCard[]
  whyChooseUs: string[]
  process: { step: string; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

function FAQItem({ faq, index, isOpen, onToggle }: { faq: { q: string; a: string }; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-[#355872]/20 bg-white shadow-lg shadow-[#355872]/5" : "border-[#355872]/8 bg-white/60 hover:border-[#355872]/15 hover:bg-white"}`}>
      <button onClick={onToggle} className="w-full flex items-center gap-4 p-5 text-left cursor-pointer">
        <span className="text-xs font-bold text-black bg-[#7AAACE]/10 border border-[#7AAACE]/20 w-7 h-7 rounded-full flex items-center justify-center shrink-0">
          {index + 1}
        </span>
        <span className="flex-1 text-black font-semibold text-sm">{faq.q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-black" : "text-black/40"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.35 }, opacity: { duration: 0.25, delay: 0.1 } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } } }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-black/60 text-sm leading-relaxed border-t border-[#355872]/6 pt-4 ml-11">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#0a1628] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          <motion.div className="max-w-7xl mx-auto relative z-10" initial="hidden" animate="show" variants={stagger}>
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <Link href="/services" className="text-black/40 text-sm hover:text-black/70 transition-colors">Services</Link>
              <span className="text-black/20">/</span>
              <span className="text-black text-sm font-medium">{data.breadcrumbEmoji} {data.breadcrumbLabel}</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black leading-tight mb-5">
                  {data.heroTitle}{" "}
                  <span style={{ background: "linear-gradient(90deg,#9CD5FF,#7AAACE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>
                    {data.heroHighlight}
                  </span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-black/50 text-base leading-relaxed mb-8 max-w-lg">
                  {data.heroDesc}
                </motion.p>

                {/* Stats */}
                <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {data.heroStats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/8 bg-white/[0.03] p-3 text-center">
                      <p className="text-lg font-black text-black">{s.value}</p>
                      <p className="text-[10px] text-black/40 font-medium uppercase tracking-wide">{s.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-linear-to-r from-[#355872] to-[#7AAACE] text-black font-semibold text-sm hover:shadow-lg hover:shadow-[#355872]/25 transition-all">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+919998035607" className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-white/15 text-black/80 font-medium text-sm hover:bg-white/5 transition-all">
                    <Phone className="w-4 h-4" /> Talk to Expert
                  </a>
                </motion.div>
              </div>

              {/* Hero Image */}
              <motion.div variants={fadeUp} className="hidden lg:flex items-center justify-center">
                <div className="relative group">
                  {/* Animated glow ring */}
                  <div className="absolute -inset-3 rounded-2xl bg-linear-to-tr from-[#355872] via-[#9CD5FF] to-[#7AAACE] opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
                  <div className="absolute -inset-1.5 rounded-2xl bg-linear-to-tr from-[#355872] via-[#9CD5FF] to-[#7AAACE] opacity-30" />
                  {/* Square image */}
                  <div className="relative w-[480px] h-[480px] rounded-2xl overflow-hidden border-2 border-white/12 shadow-2xl shadow-[#9CD5FF]/20">
                    <img src={data.heroImage} alt={data.breadcrumbLabel} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/30 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">What We Offer</h2>
              <p className="text-black/50 text-base mt-3 max-w-xl mx-auto">Comprehensive solutions tailored to your business needs</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.services.map((s, i) => (
                <motion.div key={s.title} custom={i} variants={fadeUp}
                  className="group rounded-2xl border border-[#355872]/8 bg-white p-6 hover:border-[#355872]/20 hover:shadow-xl hover:shadow-[#355872]/5 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{s.emoji}</span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-black bg-[#355872]/8 border border-[#355872]/15 px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3" /> {s.timeline}
                    </span>
                  </div>
                  <h3 className="text-black font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-black/50 text-sm mb-4">{s.desc}</p>
                  <div className="space-y-2">
                    {s.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-black/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-[#0a1628]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Why Choose Grow Bridge?</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.whyChooseUs.map((item, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.03] p-4">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <span className="text-black/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">How It Works</h2>
              <p className="text-black/50 text-base mt-3">Simple 4-step process to get you started</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.process.map((p, i) => (
                <motion.div key={p.step} custom={i} variants={fadeUp} className="relative rounded-2xl border border-[#355872]/8 bg-white p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#355872] to-[#7AAACE] flex items-center justify-center text-black font-bold text-sm mx-auto mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-black font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-black/50 text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Frequently Asked Questions</h2>
            </motion.div>
            <div className="flex flex-col gap-3">
              {data.faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-linear-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-black/70 text-base mb-8">
              Talk to our experts for a free eligibility check and get started on your journey today.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:shadow-lg transition-all">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/919998035607" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/30 text-black font-semibold text-sm hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
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
