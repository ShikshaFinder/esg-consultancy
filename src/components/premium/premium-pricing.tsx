"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const PLANS = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    tagline: "For first-time entrepreneurs",
    popular: false,
    cta: "Get Started Free",
    features: [
      "Free Eligibility Assessment",
      "Udyam / MSME Registration",
      "Basic Scheme Matching (up to 3)",
      "GST Registration Assistance",
      "Email Support \u2014 48hr response",
      "Knowledge Base & Guides Access",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 4999,
    annualPrice: 49990,
    tagline: "For scaling MSMEs & startups",
    popular: true,
    cta: "Start 14-Day Free Trial",
    features: [
      "Everything in Starter",
      "Unlimited Scheme Matching & Filing",
      "PMEGP / MUDRA / Seed Fund Applications",
      "DPR Preparation & Submission",
      "CIBIL Score Repair & Monitoring",
      "Dedicated Growth Advisor",
      "Trademark & DPIIT Registration",
      "Priority Processing \u2014 7\u201315 days",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 14999,
    annualPrice: 149990,
    tagline: "For established businesses & exporters",
    popular: false,
    cta: "Contact Sales",
    features: [
      "Everything in Growth",
      "CGTMSE / Stand-Up India Facilitation",
      "ISO 9001 & ZED Certification Support",
      "FSSAI, BIS & Import-Export Licensing",
      "Legal: Company Formation & Compliance",
      "Marketing & Branding Strategy",
      "GeM Portal Registration & Bidding",
      "Dedicated Team + Monthly Reviews",
    ],
  },
]

function formatPrice(price: number) {
  if (price === 0) return "Free"
  return `₹${price.toLocaleString("en-IN")}`
}

export default function PremiumPricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="relative px-6 py-28 bg-[#27374D]">
      <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#526D82]/15 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#9DB2BF]">Pricing</p>
          <h2 className="mb-4 text-3xl font-bold text-[#DDE6ED] md:text-5xl">
            Invest in Your{" "}
            <span className="bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82] bg-clip-text text-transparent">
              Business Growth
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-[#9DB2BF]/90">
            Start free, upgrade when you&apos;re ready. Every plan includes core MSME registration & scheme eligibility check.
          </p>
        </motion.div>

        {/* toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm transition-colors font-medium ${!annual ? "text-[#DDE6ED]" : "text-[#526D82]"}`}>Monthly</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer ${
              annual ? "bg-[#9DB2BF]" : "bg-[#526D82]"
            }`}
          >
            <motion.div
              className="absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-[#27374D] shadow-lg"
              animate={{ x: annual ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
          <span className={`text-sm transition-colors font-medium ${annual ? "text-[#DDE6ED]" : "text-[#526D82]"}`}>
            Annual
            <span className="ml-1.5 text-xs text-emerald-500 font-semibold">Save 17%</span>
          </span>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice
            const period = annual ? "/year" : "/month"
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className={`relative rounded-2xl border p-8 flex flex-col
                  ${plan.popular
                    ? "border-[#9DB2BF]/40 bg-gradient-to-b from-[#526D82]/50 to-[#27374D] shadow-xl shadow-[#9DB2BF]/12"
                    : "border-[#526D82] bg-[#27374D]/60 hover:bg-[#526D82]/25 hover:border-[#9DB2BF]/20 hover:shadow-lg hover:shadow-[#9DB2BF]/10"
                  } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9DB2BF] to-[#DDE6ED] px-4 py-1 text-xs font-semibold text-[#27374D] shadow-lg">
                    <Sparkles size={12} /> Most Popular
                  </div>
                )}

                <h3 className="text-lg font-semibold text-[#DDE6ED] mb-1">{plan.name}</h3>
                <p className="mb-6 text-xs text-[#9DB2BF]">{plan.tagline}</p>

                {/* price */}
                <div className="mb-8">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${plan.name}-${annual}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="text-4xl font-bold text-[#DDE6ED]"
                    >
                      {formatPrice(price)}
                    </motion.span>
                  </AnimatePresence>
                  {price > 0 && <span className="ml-1 text-sm text-[#9DB2BF]">{period}</span>}
                </div>

                {/* features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#9DB2BF]">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          plan.popular ? "text-[#DDE6ED]" : "text-[#9DB2BF]"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/services"}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                      ${plan.popular
                        ? "bg-gradient-to-r from-[#9DB2BF] to-[#DDE6ED] text-[#27374D] hover:shadow-lg hover:shadow-[#9DB2BF]/20"
                        : "border border-[#526D82] text-[#9DB2BF] hover:bg-[#526D82]/30 hover:text-[#DDE6ED] hover:border-[#9DB2BF]/20"
                      }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
