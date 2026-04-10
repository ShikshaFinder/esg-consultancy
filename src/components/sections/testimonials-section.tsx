"use client"
import { useState, useRef, useEffect } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { TestimonialsColumn } from "@/components/devComponents/testimonials-columns-1"
import { Marquee } from "@/components/devComponents/3d-testimonails"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / (1800 / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span ref={ref}>{prefix}{inView ? count : 0}{suffix}</span>
}

const testimonials = [
  { initials: "RK", name: "Rahul Kapoor", role: "Founder & CEO", company: "Kapoor Agro Industries", badge: "₹42L Funded", scheme: "PMEGP", text: "Grow Bridge made the PMEGP process completely seamless. From documentation to disbursement, they handled everything. I got my first government loan in under 30 days." },
  { initials: "PS", name: "Priya Shah", role: "Managing Director", company: "Shree Textiles Ltd", badge: "₹1.1Cr Loan", scheme: "CGTMSE", text: "CGTMSE guarantee plus MSME registration completed in under 3 weeks. Their knowledge of government schemes is genuinely unmatched. Worth every rupee." },
  { initials: "AP", name: "Arjun Patel", role: "Co-Founder", company: "TechNest Solutions", badge: "₹80L @ 8.5%", scheme: "MUDRA", text: "As a first-time founder, navigating MUDRA felt overwhelming. Grow Bridge simplified the entire journey — dedicated case manager, daily updates, and funded faster than imagined." },
]

export default function TestimonialsSection() {
  // Data for vertical scrolling testimonials columns
  const columnTestimonials = [
    { text: "Grow Bridge simplified the PMEGP process completely. From documentation to disbursement, they handled everything.", image: "", name: "Rahul K.", role: "Founder, Agro Industries" },
    { text: "CGTMSE guarantee plus MSME registration completed in under 3 weeks. Their knowledge is genuinely unmatched.", image: "", name: "Priya S.", role: "MD, Textiles Ltd" },
    { text: "As a first-time founder, navigating MUDRA felt overwhelming. Grow Bridge simplified the entire journey.", image: "", name: "Arjun P.", role: "Co-Founder, TechNest" },
    { text: "The team understood our requirements perfectly and secured ₹30L PMEGP funding within 25 days. Incredible!", image: "", name: "Meera D.", role: "Owner, Craft Studio" },
    { text: "Professional, transparent, and result-oriented. They handled our Startup India registration seamlessly.", image: "", name: "Vikash T.", role: "CEO, FinTech Pvt" },
    { text: "From company registration to GST filing, they made everything hassle-free. Truly a one-stop solution.", image: "", name: "Anjali R.", role: "Director, Exports" },
  ]

  return (
    <section id="results" className="py-24 px-6 bg-[#060e1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(53,88,114,0.04)_0%,transparent_70%)] pointer-events-none" />

      <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
        {/* Stats with Marquee */}
        <motion.div variants={fadeUp} className="mb-20 overflow-hidden rounded-2xl border border-white/6 bg-white/2">
          <Marquee pauseOnHover className="[--duration:25s] [--gap:0rem] py-2">
            {[
              { val: 110, suffix: "Cr+", prefix: "₹", label: "Total Funded", sub: "Across all schemes", color: "#355872" },
              { val: 95, suffix: "%", prefix: "", label: "Success Rate", sub: "Industry-leading", color: "#22c55e" },
              { val: 500, suffix: "+", prefix: "", label: "Businesses", sub: "Funded pan India", color: "#F7F8F0" },
              { val: 24, suffix: "/7", prefix: "", label: "Expert Support", sub: "Always available", color: "#9CD5FF" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-4 text-center group" style={{ boxShadow: `inset 0 1px 0 ${s.color}18` }}>
                <p className="text-3xl md:text-4xl font-black mb-1" style={{ background: `linear-gradient(135deg,${s.color},${s.color}aa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>
                  <AnimatedCounter target={s.val} suffix={s.suffix} prefix={s.prefix} />
                </p>
                <p className="text-black font-semibold text-sm mb-0.5">{s.label}</p>
                <p className="text-black/35 text-[11px]">{s.sub}</p>
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Testimonials header */}
        <div className="mb-10">
          <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Success Stories</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Real Businesses,{" "}
            <span style={{ background: "linear-gradient(90deg,#F7F8F0,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Real Results.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-black/50 text-base mt-3 max-w-lg">
            Discover how we&apos;ve helped businesses like yours secure funding and achieve their goals.
          </motion.p>
        </div>

        {/* Main testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} custom={i} variants={fadeUp}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex flex-col gap-4 group hover:border-[#355872]/20 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (<Star key={j} className="w-3.5 h-3.5 text-black fill-[#F7F8F0]" />))}
                </div>
                <span className="text-[9px] font-bold text-black bg-[#F7F8F0]/10 border border-[#F7F8F0]/20 px-2 py-1 rounded-full">{t.scheme}</span>
              </div>
              <p className="text-black/80 text-sm leading-relaxed italic flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#355872] to-[#F7F8F0] flex items-center justify-center text-black font-bold text-sm shrink-0">{t.initials}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-semibold text-sm truncate">{t.name}</p>
                  <p className="text-black/40 text-[11px] truncate">{t.role} · {t.company}</p>
                </div>
                <span className="text-[9px] font-bold text-black bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-2 py-1 rounded-full shrink-0">{t.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vertical scrolling testimonials columns (21st.dev) */}
        <motion.div variants={fadeUp} className="flex justify-center gap-6 max-h-[350px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn
            testimonials={columnTestimonials.slice(0, 3)}
            duration={15}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={columnTestimonials.slice(3, 6)}
            duration={18}
          />
          <TestimonialsColumn
            testimonials={[...columnTestimonials.slice(1, 3), columnTestimonials[4]]}
            duration={20}
            className="hidden lg:block"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
