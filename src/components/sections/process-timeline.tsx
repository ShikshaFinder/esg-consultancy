"use client"
import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const steps = [
  { step: "01", icon: "📋", title: "Initial Information Gathering", desc: "We collect key details about your business, goals, and current challenges to build a complete picture.", tag: "Discovery" },
  { step: "02", icon: "🔍", title: "Analysts' Deep Dive", desc: "Our experts analyse your data, market position, and identify the best growth opportunities.", tag: "Analysis" },
  { step: "03", icon: "✏️", title: "Strategy Design Phase", desc: "A tailored strategy and solution framework is crafted specifically for your business needs.", tag: "Design" },
  { step: "04", icon: "🤝", title: "Client Collaboration", desc: "We review the plan together, align on priorities, and refine the direction for maximum impact.", tag: "Alignment" },
  { step: "05", icon: "🔬", title: "Refinement & Research", desc: "Deepen the research and polish every detail to ensure nothing is left to chance.", tag: "Research" },
  { step: "06", icon: "📄", title: "Draft Finalization", desc: "The final deliverable is prepared with all revisions incorporated and quality-checked.", tag: "Finalize" },
  { step: "07", icon: "🚀", title: "Delivery & Implementation", desc: "Hand over the completed solution — ready to implement, launch, and grow your business.", tag: "Delivery" },
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 px-6 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* 21st.dev BouncingBalls ambient decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <BouncingBalls
          numBalls={40}
          colors={["#355872", "#7AAACE", "#9CD5FF"]}
          opacity={0.2}
          minRadius={0.2}
          maxRadius={1}
          speed={0.15}
          interactive={false}
        />
      </div>
      <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }} variants={stagger}>
        <div className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Our 7-Step Process</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Grow Bridge&apos;s{" "}
            <span style={{ background: "linear-gradient(90deg,#355872,#F7F8F0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Process</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-black/50 text-base mt-3 max-w-xl mx-auto">
            A structured journey from understanding your needs to delivering tangible results.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #355872, #9CD5FF, #F7F8F0)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const isRight = i % 2 === 1
              return (
                <motion.div key={step.step} custom={i} variants={fadeUp}
                  className={`relative flex items-start gap-6 ${isRight ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
                >
                  <div className="relative z-10 shrink-0">
                    <motion.div
                      className="w-12 h-12 rounded-full border-2 border-[#355872]/40 bg-[#0a1628] flex items-center justify-center shadow-[0_0_20px_rgba(53,88,114,0.15)]"
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <span className="text-xl">{step.icon}</span>
                    </motion.div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0a1628] border border-white/10 flex items-center justify-center">
                      <span className="text-[8px] font-black text-black">{step.step}</span>
                    </div>
                  </div>
                  <div className={`flex-1 ${isRight ? "md:text-right md:mr-6" : "md:ml-6"} ml-0`}>
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 group hover:border-[#355872]/25 transition-all duration-300">
                      <div className={`flex items-center gap-2 mb-2 ${isRight ? "md:flex-row-reverse md:justify-start" : ""}`}>
                        <span className="text-[9px] font-bold tracking-widest text-black bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-2 py-0.5 rounded-full">{step.tag}</span>
                        <span className="text-[10px] text-black/25">STEP {step.step}</span>
                      </div>
                      <h3 className="text-black font-bold text-base mb-1.5">{step.title}</h3>
                      <p className="text-black/55 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div variants={fadeUp} className="mt-14 text-center">
          <Link href="/contact">
            <MetalButton variant="primary">
              <span className="flex items-center gap-2">
                Start Your Application <ArrowRight className="w-4 h-4" />
              </span>
            </MetalButton>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
