"use client"
import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const faqs = [
  {
    q: "What types of government schemes does Grow Bridge help with?",
    a: "We assist with all major MSME and startup government schemes including PMEGP, MUDRA Yojana, CGTMSE, Stand-Up India, Startup India (DPIIT), NAIF, GeM Registration, NSIC, and many more. Our team stays updated with the latest scheme guidelines and eligibility criteria.",
    tag: "Schemes"
  },
  {
    q: "How long does the funding process typically take?",
    a: "Timelines vary by scheme: MUDRA loans can be processed in 15-20 working days, PMEGP in 30-45 days, and CGTMSE approvals in 20-30 days. Our streamlined documentation process and banking relationships ensure the fastest possible turnaround. We provide daily updates throughout.",
    tag: "Timeline"
  },
  {
    q: "What documents do I need to apply for a government loan?",
    a: "Basic requirements include Aadhaar Card, PAN Card, bank statements (6-12 months), business plan or project report, address proof, and passport-size photographs. Specific schemes may need additional documents like caste certificate (Stand-Up India), quotations for machinery (PMEGP), or ITR (CGTMSE). We provide a complete checklist based on your eligibility.",
    tag: "Documents"
  },
  {
    q: "What are your consultation fees?",
    a: "We offer a FREE initial consultation to assess your eligibility across all government schemes. Our fee structure is transparent and success-based — you pay only when your application is approved and funds are disbursed. No hidden charges, no upfront fees for scheme consultation.",
    tag: "Pricing"
  },
  {
    q: "Can I apply for multiple government schemes simultaneously?",
    a: "Yes, in many cases you can be eligible for multiple schemes. For example, you could get a MUDRA loan while also registering on GeM and obtaining MSME/Udyam registration. Our AI eligibility engine checks your profile against 30+ schemes to maximize your benefits.",
    tag: "Eligibility"
  },
  {
    q: "Do you provide services across India or only in Gujarat?",
    a: "While our head office is in Ahmedabad, Gujarat, we serve clients across all of India. Most of our process is digital, so location isn't a barrier. We have successfully processed applications from 18+ states. For certain schemes, we also coordinate with local district offices.",
    tag: "Coverage"
  },
]

function AccordionItem({ faq, index, isOpen, onToggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[#355872]/20 bg-white shadow-lg shadow-[#355872]/5"
          : "border-[#355872]/[0.08] bg-white/60 hover:border-[#355872]/15 hover:bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left"
      >
        <span className="text-xs font-bold text-[#7AAACE] bg-[#7AAACE]/10 border border-[#7AAACE]/20 px-2.5 py-1 rounded-full shrink-0">{faq.tag}</span>
        <span className="flex-1 text-[#0a1628] font-semibold text-sm md:text-base">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-[#355872]" : "text-[#355872]/40"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.35 }, opacity: { duration: 0.25, delay: 0.1 } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3, delay: 0.05 }, opacity: { duration: 0.2 } } }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#0a1628]/60 text-sm leading-relaxed border-t border-[#355872]/[0.06] pt-4 ml-[60px]">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6 bg-[#F7F8F0] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,170,206,0.06)_0%,transparent_60%)] pointer-events-none" />

      <motion.div className="max-w-3xl mx-auto relative z-10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#7AAACE]/20 bg-[#7AAACE]/5 px-4 py-1.5 mb-5">
            <HelpCircle className="w-3.5 h-3.5 text-[#7AAACE]" />
            <span className="text-[11px] font-bold tracking-wide uppercase text-[#7AAACE]">FAQ</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#0a1628] leading-tight">
            Frequently Asked{" "}
            <span style={{ background: "linear-gradient(90deg,#355872,#7AAACE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#0a1628]/50 text-base mt-3">
            Everything you need to know about our services and the application process.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <div className="rounded-2xl border border-[#355872]/10 bg-gradient-to-r from-[#355872]/5 to-[#7AAACE]/5 p-8">
            <p className="text-[#0a1628] font-semibold text-lg mb-2">Still have questions?</p>
            <p className="text-[#0a1628]/50 text-sm mb-5">Our experts are always happy to help. Get in touch for a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#355872] text-white font-semibold text-sm hover:bg-[#355872]/90 transition-colors"
              >
                Contact Us
              </Link>
              <a href="https://wa.me/918487828752" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-[#355872]/20 text-[#355872] font-semibold text-sm hover:bg-[#355872]/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
