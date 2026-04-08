"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion"
import { HelpCircle, Plus, ArrowRight } from "lucide-react"

/* ─── animation variants ─── */
const blurFade: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  show: (d: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "How long does approval take?",
    a: "Typically 7-45 days, depending on scheme, category, project readiness, and bank/department processing.",
  },
  {
    q: "What documents are required?",
    a: "Generally you need Aadhaar card, PAN card, business plan or project report, bank statements, and relevant certificates. Our team will guide you through the complete documentation process.",
  },
  {
    q: "Do you provide Pan India support?",
    a: "Yes, we serve businesses across all 28+ states and union territories in India. Our services are available remotely and we have tie-ups with banks and agencies nationwide.",
  },
  {
    q: "Which scheme is best for me?",
    a: "It depends on your business type, category, and requirements. Our experts provide free consultation to analyze your profile and recommend the most suitable government scheme.",
  },
  {
    q: "What makes GrowBridge different?",
    a: "We offer end-to-end support from consultation to fund disbursement with a 95%+ success rate. Our expert team has facilitated ₹110Cr+ in funding for 500+ businesses across India.",
  },
]

export default function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <motion.span
            variants={blurFade} custom={0}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-black mb-3"
          >
            <HelpCircle className="w-4 h-4" />
            Common Queries
          </motion.span>
          <motion.h2 variants={blurFade} custom={0.1} className="text-3xl md:text-5xl font-bold text-black">
            Frequently Asked{" "}
            <span className="text-black" style={{ backgroundImage: "linear-gradient(135deg, #EBF4FF, #2E7DD9)" }}>
              Questions
            </span>
          </motion.h2>
          <motion.p variants={blurFade} custom={0.2} className="mt-4 text-black/80 max-w-lg mx-auto">
            Everything you need to know about our services, funding process, and eligibility criteria. Can&apos;t find the answer? Feel free to contact us.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-3"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + idx * 0.07 }}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === idx
                  ? "border-[#9DB2BF]/30 bg-[#526D82]/15 shadow-lg shadow-[#9DB2BF]/5"
                  : "border-white/20 blue-card hover:border-[#526D82]/60"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className={`text-sm font-semibold ${openIndex === idx ? "text-black" : "text-black"}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`shrink-0 ml-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === idx
                      ? "bg-[#9DB2BF] text-black"
                      : "bg-[#526D82]/30 text-black"
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-black/80 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-black/60 mb-4">Still have questions? We&apos;re here to help!</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#526D82]/20 text-black px-6 py-3 text-sm font-semibold
                       hover:bg-[#526D82]/35 hover:border-[#9DB2BF]/40 transition-all backdrop-blur-sm"
          >
            Contact Support
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
