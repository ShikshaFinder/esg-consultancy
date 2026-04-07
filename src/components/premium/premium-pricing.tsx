"use client"
import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Check, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const blurFadeUp: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  show: (d: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 30, filter: "blur(6px)" },
  show: (d: number = 0) => ({
    opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

/* ─── Mouse-tracking spotlight for card ─── */
function SpotlightCard({ children, className, popular }: { children: React.ReactNode; className?: string; popular?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative ${className}`}
    >
      {/* Cursor-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, ${popular ? "rgba(157,178,191,0.12)" : "rgba(157,178,191,0.06)"}, transparent 60%)`,
          opacity: hovering ? 1 : 0,
        }}
      />
      {children}
    </div>
  )
}

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
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={blurFadeUp}
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
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice
            const period = annual ? "/year" : "/month"
            return (
              <motion.div key={plan.name} variants={scaleIn} custom={i * 0.08}>
                <SpotlightCard popular={plan.popular} className="h-full">
                  <motion.div
                    whileHover={{ y: -10, transition: { type: "spring", stiffness: 280, damping: 18 } }}
                    className={`relative rounded-2xl border p-8 flex flex-col backdrop-blur-md h-full overflow-hidden
                      ${plan.popular
                        ? "border-[#9DB2BF]/30 bg-gradient-to-b from-[#526D82]/45 to-[#27374D]/90 shadow-2xl shadow-[#9DB2BF]/15 ring-1 ring-[#9DB2BF]/10"
                        : "border-[#526D82]/50 bg-[#27374D]/40 hover:bg-[#526D82]/20 hover:border-[#9DB2BF]/20 hover:shadow-xl hover:shadow-[#9DB2BF]/8"
                      } transition-all duration-500 shadow-[inset_0_1px_0_rgba(157,178,191,0.06)]`}
                  >
                    {/* Animated rotating gradient border for popular */}
                    {plan.popular && (
                      <div className="absolute -inset-[1px] rounded-2xl -z-10 overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: "conic-gradient(from 0deg, #9DB2BF, #DDE6ED, #526D82, #9DB2BF)",
                            filter: "blur(4px)",
                          }}
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-[#526D82]/90 to-[#27374D]/95" />
                      </div>
                    )}

                    {plan.popular && (
                      <motion.div
                        className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#9DB2BF] to-[#DDE6ED] px-4 py-1 text-xs font-semibold text-[#27374D] shadow-lg"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Sparkles size={12} /> Most Popular
                      </motion.div>
                    )}

                    <h3 className="text-lg font-semibold text-[#DDE6ED] mb-1 relative z-10">{plan.name}</h3>
                    <p className="mb-6 text-xs text-[#9DB2BF] relative z-10">{plan.tagline}</p>

                    {/* price with animated transition */}
                    <div className="mb-8 relative z-10">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${plan.name}-${annual}`}
                          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                          transition={{ duration: 0.3 }}
                          className="text-4xl font-bold text-[#DDE6ED]"
                        >
                          {formatPrice(price)}
                        </motion.span>
                      </AnimatePresence>
                      {price > 0 && <span className="ml-1 text-sm text-[#9DB2BF]">{period}</span>}
                    </div>

                    {/* features with staggered checks */}
                    <ul className="space-y-3 mb-8 flex-1 relative z-10">
                      {plan.features.map((f, fi) => (
                        <motion.li
                          key={f}
                          className="flex items-start gap-2.5 text-sm text-[#9DB2BF] group/feat"
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: fi * 0.04 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Check
                              size={16}
                              className={`shrink-0 mt-0.5 transition-colors duration-200 ${
                                plan.popular ? "text-[#DDE6ED] group-hover/feat:text-emerald-400" : "text-[#9DB2BF] group-hover/feat:text-[#DDE6ED]"
                              }`}
                            />
                          </motion.div>
                          <span className="group-hover/feat:text-[#DDE6ED] transition-colors duration-200">{f}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative z-10">
                      <Link
                        href={plan.name === "Enterprise" ? "/contact" : "/services"}
                        className={`group/cta flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden relative
                          ${plan.popular
                            ? "bg-gradient-to-r from-[#9DB2BF] to-[#DDE6ED] text-[#27374D] hover:shadow-lg hover:shadow-[#9DB2BF]/20"
                            : "border border-[#526D82] text-[#9DB2BF] hover:bg-[#526D82]/30 hover:text-[#DDE6ED] hover:border-[#9DB2BF]/20"
                          }`}
                      >
                        {/* Shimmer overlay for popular */}
                        {plan.popular && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />
                        )}
                        <span className="relative">{plan.cta}</span>
                        <ArrowRight size={14} className="relative group-hover/cta:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
