"use client"

import { useEffect, useState, useRef } from "react"

import Image from "next/image"

import Link from "next/link"

import {

  motion, useMotionValue, useSpring, useTransform, useScroll, type Variants, useInView,

} from "framer-motion"

import {

  ArrowRight, Play, TrendingUp, Users, Shield, Zap, Wallet,

  BarChart3, FileText, Bell, Search, Settings, Home, PieChart, CreditCard, Receipt,

  CheckCircle2, Phone, Mail, MapPin, Send, Sparkles, Lock, User,

} from "lucide-react"



/* âââ animation variants âââ */

const fadeUp: Variants = {

  hidden: { opacity: 0, y: 32 },

  show: (d: number = 0) => ({

    opacity: 1, y: 0,

    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },

  }),

}



/* Blur-fade â items appear blurry and sharpen */

const blurFade: Variants = {

  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },

  show: (d: number = 0) => ({

    opacity: 1, filter: "blur(0px)", y: 0,

    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },

  }),

}



const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }



const float: Variants = {

  animate: (i: number) => ({

    y: [0, -12, 0],

    transition: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },

  }),

}



/* âââ Word-by-word text reveal âââ */

function AnimatedWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {

  const ref = useRef<HTMLSpanElement>(null)

  const inView = useInView(ref, { once: true, amount: 0.5 })

  const words = text.split(" ")



  return (

    <span ref={ref} className={className}>

      {words.map((word, i) => (

        <motion.span

          key={`${word}-${i}`}

          className="inline-block mr-[0.3em]"

          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}

          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}

          transition={{

            duration: 0.5,

            delay: delay + i * 0.06,

            ease: [0.22, 1, 0.36, 1],

          }}

        >

          {word}

        </motion.span>

      ))}

    </span>

  )

}



/* âââ animated counter hook âââ */

function useCounter(target: number, duration = 2, delay = 0) {

  const [value, setValue] = useState(0)

  const ref = useRef<HTMLDivElement>(null)

  const triggered = useRef(false)



  useEffect(() => {

    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting && !triggered.current) {

          triggered.current = true

          const start = performance.now()

          const tick = (now: number) => {

            const elapsed = (now - start - delay * 1000) / (duration * 1000)

            if (elapsed < 0) { requestAnimationFrame(tick); return }

            const progress = Math.min(elapsed, 1)

            const eased = 1 - Math.pow(1 - progress, 4)

            setValue(Math.round(eased * target))

            if (progress < 1) requestAnimationFrame(tick)

          }

          requestAnimationFrame(tick)

        }

      },

      { threshold: 0.3 },

    )

    observer.observe(el)

    return () => observer.disconnect()

  }, [target, duration, delay])



  return { value, ref }

}



/* âââ Magnetic Button wrapper âââ */

function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {

  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)

  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 20 })

  const springY = useSpring(y, { stiffness: 200, damping: 20 })



  return (

    <motion.div

      ref={ref}

      style={{ x: springX, y: springY }}

      onMouseMove={(e) => {

        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        const cx = rect.left + rect.width / 2

        const cy = rect.top + rect.height / 2

        x.set((e.clientX - cx) * 0.15)

        y.set((e.clientY - cy) * 0.15)

      }}

      onMouseLeave={() => { x.set(0); y.set(0) }}

      className={className}

    >

      {children}

    </motion.div>

  )

}



/* âââ sidebar icons for dashboard mockup âââ */

const SIDEBAR = [Home, BarChart3, FileText, Wallet, CreditCard, Receipt, PieChart, Settings]

const BAR_HEIGHTS = [42, 58, 35, 72, 50, 85, 65]

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]



export default function PremiumHero() {

  /* stats counters */

  const stat1 = useCounter(110, 2.4, 0.8)

  const stat2 = useCounter(500, 2.4, 1.0)

  const stat3 = useCounter(95, 2.0, 1.2)

  const stat4 = useCounter(28, 1.6, 1.4)



  /* parallax on dashboard */

  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })

  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96])

  const statsY = useTransform(scrollYProgress, [0, 1], [0, 40])



  /* 3D tilt for dashboard */

  const tiltX = useMotionValue(0)

  const tiltY = useMotionValue(0)

  const springTiltX = useSpring(tiltX, { stiffness: 100, damping: 20 })

  const springTiltY = useSpring(tiltY, { stiffness: 100, damping: 20 })

  const rotateX = useTransform(springTiltY, [-0.5, 0.5], [6, -6])

  const rotateY = useTransform(springTiltX, [-0.5, 0.5], [-6, 6])



  /* Typing animation for dashboard URL */

  const [typedUrl, setTypedUrl] = useState("")

  const fullUrl = "app.growbridge.org/dashboard"

  useEffect(() => {

    let cancelled = false

    let i = 0

    const timer = setTimeout(() => {

      const interval = setInterval(() => {

        if (cancelled) return

        i++

        setTypedUrl(fullUrl.slice(0, i))

        if (i >= fullUrl.length) clearInterval(interval)

      }, 45)

    }, 2000)

    return () => { cancelled = true; clearTimeout(timer) }

  }, [])



  return (

    <section

      ref={sectionRef}

      className="relative min-h-screen overflow-hidden bg-[#FFF8F0]"

      style={{ backgroundImage: "linear-gradient(180deg, #FFF8F0 0%, #FFF8F0 38%, #FFF8F0 100%)" }}

    >

      {/* ââ Background effects ââ */}

      <motion.div

        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.35] blur-[160px]"

        style={{ background: "radial-gradient(circle, #FFF8F0, transparent 70%)", top: "-15%", left: "-10%" }}

        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}

        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}

      />

      <motion.div

        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.25] blur-[140px]"

        style={{ background: "radial-gradient(circle, #e9edc9, transparent 70%)", bottom: "10%", right: "-5%" }}

        animate={{ x: [0, -50, 25, 0], y: [0, 40, -25, 0] }}

        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}

      />

      <motion.div

        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.2] blur-[120px]"

        style={{ background: "radial-gradient(circle, #fefae0, transparent 70%)", top: "35%", left: "55%" }}

        animate={{ x: [0, 35, -45, 0], y: [0, -30, 20, 0] }}

        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}

      />



      {/* Grid pattern */}

      <div

        className="absolute inset-0 z-[1] opacity-[0.04]"

        style={{

          backgroundImage: "linear-gradient(#e9edc9 1px, transparent 1px), linear-gradient(90deg, #e9edc9 1px, transparent 1px)",

          backgroundSize: "64px 64px",

        }}

      />



      {/* Floating decorative elements */}

      <motion.div custom={0} variants={float} animate="animate" className="absolute top-[20%] left-[8%] w-3 h-3 rounded-full bg-[#fefae0]/35 z-[2]" />

      <motion.div custom={1} variants={float} animate="animate" className="absolute top-[30%] right-[12%] w-4 h-4 rounded-full bg-[#e9edc9]/45 z-[2]" />

      <motion.div custom={2} variants={float} animate="animate" className="absolute top-[60%] left-[15%] w-2 h-2 rounded-full bg-[#1e3a5c]/55 z-[2]" />

      <motion.div custom={3} variants={float} animate="animate" className="absolute bottom-[25%] right-[8%] w-5 h-5 rounded-full border border-[#fefae0]/30 z-[2]" />

      <motion.div custom={1} variants={float} animate="animate" className="absolute top-[45%] right-[25%] w-2.5 h-2.5 rotate-45 bg-[#e9edc9]/30 z-[2]" />

      {/* Decorative SVG shapes */}

      <motion.div custom={2} variants={float} animate="animate" className="absolute top-[15%] right-[35%] w-6 h-6 z-[2]">

        <svg viewBox="0 0 24 24" className="w-full h-full text-black/45" fill="none" stroke="currentColor" strokeWidth="1.5">

          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />

        </svg>

      </motion.div>

      <motion.div custom={4} variants={float} animate="animate" className="absolute bottom-[35%] left-[5%] w-8 h-8 z-[2]">

        <svg viewBox="0 0 24 24" className="w-full h-full text-black/45" fill="none" stroke="currentColor" strokeWidth="1">

          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />

        </svg>

      </motion.div>



      {/* -- Hero Content -- */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-8">

        {/* Two-column hero layout */}

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-start">

          {/* - LEFT: Headline + Tagline + CTAs + Trust Chips - */}

          <motion.div initial="hidden" animate="show" variants={stagger}>

            {/* Badge with animated gradient border */}

            <motion.div variants={blurFade} custom={0}>

              <span className="relative inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm text-black shadow-sm overflow-hidden">

                <span className="absolute inset-0 rounded-full p-[1px]">

                  <span

                    className="absolute inset-0 rounded-full"

                    style={{

                      background: "linear-gradient(90deg, #526D82, #9DB2BF, #DDE6ED, #9DB2BF, #526D82)",

                      backgroundSize: "200% 100%",

                      animation: "gradient-x 4s linear infinite",

                    }}

                  />

                  <span className="absolute inset-[1px] rounded-full bg-[#526D82]/60 backdrop-blur-sm" />

                </span>

                <span className="relative flex h-2 w-2">

                  <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative rounded-full h-2 w-2 bg-emerald-400" />

                </span>

                <span className="relative">Trusted by 500+ Businesses Across 28+ States</span>

              </span>

            </motion.div>



            {/* Headline with word-by-word blur reveal */}

            <div className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.05]">

              <AnimatedWords text="GROW BRIDGE" className="text-black block" delay={0.3} />

              <motion.span

                variants={blurFade}

                custom={0.4}

                className="mt-3 block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"

                style={{

                  color: "#1B4F8A",

                  WebkitTextFillColor: "#1B4F8A",

                }}

              >

                Where Business Growth Begins

              </motion.span>

            </div>



            {/* Subtitle */}

            <motion.p

              variants={blurFade} custom={0.5}

              className="mt-6 text-base text-black/90 max-w-xl leading-relaxed"

            >

              The complete growth ecosystem for startups and MSMEs across India. From MSME funding & government schemes to business registration, compliance, and digital transformation.

            </motion.p>



            {/* CTAs */}

            <motion.div variants={blurFade} custom={0.65} className="mt-8 flex flex-col sm:flex-row items-start gap-4">

              <MagneticButton>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>

                  <Link

                    href="/contact"

                    className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-black overflow-hidden shadow-[0_8px_30px_rgba(27,79,138,0.30)]"

                  >

                    <div className="absolute inset-0 bg-gradient-to-r from-[#1B4F8A] via-[#2E7DD9] to-[#1B4F8A] bg-[length:200%_100%] group-hover:animate-[shimmer_2s_ease-in-out_infinite]" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.4),transparent_70%)]" />

                    <span className="relative">Get Free Growth Assessment</span>

                    <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

                  </Link>

                </motion.div>

              </MagneticButton>

              <MagneticButton>

                <motion.button

                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}

                  className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-medium text-black border border-white/25 bg-[#526D82]/15 hover:bg-[#526D82]/30 hover:text-black hover:border-[#9DB2BF]/40 transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-sm"

                >

                  <motion.div

                    className="w-8 h-8 rounded-full bg-[#526D82]/30 flex items-center justify-center group-hover:bg-[#526D82]/40 transition-colors"

                    whileHover={{ scale: 1.15 }}

                    animate={{ boxShadow: ["0 0 0 0 rgba(30,58,92,0.3)", "0 0 0 10px rgba(30,58,92,0)", "0 0 0 0 rgba(30,58,92,0)"] }}

                    transition={{ duration: 2, repeat: Infinity }}

                  >

                    <Play className="w-3.5 h-3.5 ml-0.5 text-black" />

                  </motion.div>

                  Check Eligibility Now

                </motion.button>

              </MagneticButton>

            </motion.div>



            {/* Trust Chips */}

            <motion.div variants={blurFade} custom={0.85} className="mt-8 flex flex-wrap gap-2.5">

              {[

                { label: "PMEGP Subsidies", icon: Sparkles },

                { label: "CGTMSE Guarantee", icon: Shield },

                { label: "Expert Support", icon: Users },

                { label: "Fast Processing", icon: Zap },

              ].map((chip) => (

                <motion.span

                  key={chip.label}

                  whileHover={{ scale: 1.06, y: -2 }}

                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-black border border-white/25 bg-[#526D82]/20 backdrop-blur-sm"

                >

                  <chip.icon className="w-3.5 h-3.5 text-black" />

                  {chip.label}

                </motion.span>

              ))}

            </motion.div>

          </motion.div>



          {/* - RIGHT: Eligibility Card - */}

          <motion.div

            initial={{ opacity: 0, x: 40, scale: 0.96 }}

            animate={{ opacity: 1, x: 0, scale: 1 }}

            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}

            className="relative"

          >

            {/* -- Concentric animated circles behind the card -- */}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">

              {[1, 2, 3, 4, 5].map((ring) => (

                <motion.div

                  key={ring}

                  className="absolute rounded-full border"

                  style={{

                    width: `${ring * 120 + 60}px`,

                    height: `${ring * 120 + 60}px`,

                    borderColor: `rgba(157,178,191,${0.18 - ring * 0.03})`,

                  }}

                  animate={{

                    scale: [1, 1.04, 1],

                    opacity: [0.15 - ring * 0.02, 0.25 - ring * 0.03, 0.15 - ring * 0.02],

                    rotate: ring % 2 === 0 ? [0, 360] : [360, 0],

                  }}

                  transition={{

                    duration: 12 + ring * 4,

                    repeat: Infinity,

                    ease: "linear",

                  }}

                />

              ))}

              <motion.div

                className="absolute w-32 h-32 rounded-full bg-[#9DB2BF]/15 blur-[50px]"

                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.55, 0.3] }}

                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

              />

            </div>



            {/* Animated glow behind card */}

            <motion.div

              className="absolute -inset-6 rounded-3xl opacity-40 blur-[50px] pointer-events-none"

              style={{ background: "linear-gradient(135deg, #526D82, #9DB2BF, #526D82)" }}

              animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.04, 1] }}

              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

            />



            <div className="relative z-10 rounded-[1.5rem] overflow-hidden border border-white/25 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm">

              <div className="flex flex-col lg:flex-row">

                {/* -- Left Panel  Contact Info -- */}

                <div className="lg:w-[42%] relative overflow-hidden flex flex-col justify-between p-7 lg:p-8"

                  style={{ background: "linear-gradient(160deg, #FFF8F0 0%, #FFF8F0 60%, #FFF8F0 100%)" }}

                >

                  {/* Dot grid */}

                  <div

                    className="absolute inset-0 opacity-[0.04]"

                    style={{

                      backgroundImage: "radial-gradient(circle at 1px 1px, #9DB2BF 1px, transparent 0)",

                      backgroundSize: "20px 20px",

                    }}

                  />

                  {/* Glow blobs */}

                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#526D82]/25 rounded-full blur-[60px]" />

                  <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#9DB2BF]/15 rounded-full blur-[50px]" />

                  {/* Floating dots */}

                  <div className="absolute top-[30%] right-[10%] w-2 h-2 rounded-full bg-[#9DB2BF]/30 animate-[float_4s_ease-in-out_infinite]" />

                  <div className="absolute bottom-[40%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#DDE6ED]/20 animate-[float_5s_ease-in-out_infinite_0.5s]" />



                  {/* Content */}

                  <div className="relative z-10">

                    <div className="relative mb-5 overflow-hidden rounded-2xl border border-[#526D82]/35 aspect-[16/10]">

                      <Image

                        src="/hero3.png"

                        alt="GrowBridge consultation support"

                        fill

                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 32vw"

                        className="object-cover"

                        priority

                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F0]/70 via-transparent to-transparent" />

                    </div>



                    <div className="inline-flex items-center gap-2 bg-[#526D82]/25 rounded-full px-3 py-1.5 border border-white/25 mb-4 backdrop-blur-sm">

                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                      <span className="text-black/90 text-xs font-semibold">Grow Bridge · Active Now</span>

                    </div>



                    <h3 className="text-xl font-bold text-black mb-1">Talk to an Expert</h3>

                    <p className="text-black/70 text-sm mb-6">Free consultation for your business</p>



                    <div className="space-y-4">

                      {[

                        { icon: MapPin, label: "LOCATION", value: "Sola Rd, Ahmedabad 380063", color: "text-rose-400", bg: "bg-rose-500/15 border-rose-500/20" },

                        { icon: Phone, label: "PHONE", value: "+91 99980 35607", color: "text-emerald-400", bg: "bg-emerald-500/15 border-emerald-500/20" },

                        { icon: Mail, label: "EMAIL", value: "growbridgeinfo@gmail.com", color: "text-violet-400", bg: "bg-violet-500/15 border-violet-500/20" },

                      ].map((item) => (

                        <div key={item.label} className="flex items-start gap-3">

                          <div className={`w-9 h-9 rounded-xl ${item.bg} border flex items-center justify-center shrink-0 backdrop-blur-sm`}>

                            <item.icon className={`w-4 h-4 ${item.color}`} />

                          </div>

                          <div>

                            <p className="text-black/60 text-[10px] uppercase tracking-widest font-bold">{item.label}</p>

                            <p className="text-black text-sm font-semibold mt-0.5 leading-tight">{item.value}</p>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>



                  {/* Trust badges */}

                  <div className="relative z-10 mt-6 flex flex-wrap gap-2">

                    {["500+ Clients", "Pan India", "5+ Years"].map((badge) => (

                      <motion.span

                        key={badge}

                        whileHover={{ scale: 1.05, y: -2 }}

                        className="text-xs text-black/70 bg-[#526D82]/25 border border-white/25 rounded-full px-3 py-1.5 font-medium flex items-center gap-1.5 cursor-default"

                      >

                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />

                        {badge}

                      </motion.span>

                    ))}

                  </div>

                </div>



                {/* -- Right Panel  White Form -- */}

                <div className="lg:w-[58%] bg-[#DDE6ED] p-7 lg:p-8 flex flex-col justify-center">

                  <span className="inline-block text-[10px] font-bold text-black bg-[#9DB2BF]/25 rounded-full px-3 py-1 mb-3 w-fit border border-white/25">

                    Free Consultation

                  </span>

                  <h4 className="text-xl font-bold text-black mb-1">Check Your Eligibility</h4>

                  <p className="text-sm text-black mb-5 font-medium">Our expert will contact you within 2 hours.</p>



                  <form

                    onSubmit={(e) => {

                      e.preventDefault()

                      const fd = new FormData(e.currentTarget)

                      const name = fd.get("name") as string

                      const phone = fd.get("phone") as string

                      if (name && phone) {

                        const msg = encodeURIComponent(`Hi, I'm ${name}. I'd like to check my MSME scheme eligibility.`)

                        window.open(`https://wa.me/919998035607?text=${msg}`, "_blank")

                      }

                    }}

                    className="space-y-4"

                  >

                    <div>

                      <label className="text-[10px] font-bold text-black uppercase tracking-wider mb-1.5 block">Full Name <span className="text-rose-400">*</span></label>

                      <div className="relative">

                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black">

                          <User className="w-4 h-4" />

                        </div>

                        <input

                          type="text"

                          name="name"

                          required

                          placeholder="Enter your name"

                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/25 bg-white text-sm text-black font-medium focus:outline-none focus:border-[#526D82] focus:ring-2 focus:ring-[#526D82]/20 transition-all placeholder:text-black"

                        />

                      </div>

                    </div>

                    <div>

                      <label className="text-[10px] font-bold text-black uppercase tracking-wider mb-1.5 block">Phone Number <span className="text-rose-400">*</span></label>

                      <div className="relative">

                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black">

                          <Phone className="w-4 h-4" />

                        </div>

                        <input

                          type="tel"

                          name="phone"

                          required

                          placeholder="10-digit mobile"

                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/25 bg-white text-sm text-black font-medium focus:outline-none focus:border-[#526D82] focus:ring-2 focus:ring-[#526D82]/20 transition-all placeholder:text-black"

                        />

                      </div>

                    </div>



                    <motion.button

                      type="submit"

                      whileHover={{ scale: 1.02 }}

                      whileTap={{ scale: 0.97 }}

                      className="group/btn relative w-full py-3.5 rounded-xl text-black font-bold text-sm tracking-wide transition-all duration-500 hover:shadow-xl hover:shadow-[#1B4F8A]/20 cursor-pointer overflow-hidden mt-1"

                      style={{ background: "linear-gradient(135deg, #526D82 0%, #FFF8F0 100%)", boxShadow: "0 4px 16px rgba(10,22,40,0.30)" }}

                    >

                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

                      <span className="flex items-center justify-center gap-2">

                        Get Free Consultation <ArrowRight className="w-4 h-4" />

                      </span>

                    </motion.button>

                  </form>



                  <p className="text-center text-xs text-black/70 font-medium flex items-center justify-center gap-1.5 mt-3">

                    <Lock className="w-3 h-3" /> 100% Private. No spam guaranteed.

                  </p>



                  {/* Stats row */}

                  <div className="mt-5 pt-4 border-t border-white/25 flex justify-around text-center">

                    {[

                      ["500+", "FUNDED"],

                      ["95%", "SUCCESS"],

                      ["24hr", "RESPONSE"],

                    ].map(([val, label]) => (

                      <div key={label}>

                        <p className="text-base font-bold text-black">{val}</p>

                        <p className="text-[9px] text-black uppercase tracking-wider font-semibold">{label}</p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>



        {/* ââ Floating Dashboard Mockup ââ */}

        <motion.div

          initial={{ opacity: 0, y: 80, rotateX: 12 }}

          animate={{ opacity: 1, y: 0, rotateX: 4 }}

          transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}

          className="relative mx-auto max-w-5xl mt-20"

          style={{ perspective: "1400px", y: dashboardY, scale: dashboardScale }}

        >

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] rounded-full bg-[#e9edc9]/15 blur-[80px] pointer-events-none" />



          <motion.div

            onMouseMove={(e) => {

              const rect = e.currentTarget.getBoundingClientRect()

              tiltX.set((e.clientX - rect.left) / rect.width - 0.5)

              tiltY.set((e.clientY - rect.top) / rect.height - 0.5)

            }}

            onMouseLeave={() => { tiltX.set(0); tiltY.set(0) }}

            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}

            className="relative rounded-2xl border border-[#FFF8F0] blue-card shadow-[0_32px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl overflow-hidden"

          >

            {/* Browser chrome with interactive elements */}

            <div className="h-11 border-b border-[#FFF8F0] flex items-center px-4 gap-3 bg-[#1e3a5c]/80">

              <div className="flex gap-2">

                <motion.div className="w-3 h-3 rounded-full bg-[#ff5f57]/70" whileHover={{ scale: 1.4 }} />

                <motion.div className="w-3 h-3 rounded-full bg-[#febc2e]/70" whileHover={{ scale: 1.4 }} />

                <motion.div className="w-3 h-3 rounded-full bg-[#28c840]/70" whileHover={{ scale: 1.4 }} />

              </div>

              <div className="flex-1 flex justify-center">

                <div className="rounded-lg blue-card border border-[#FFF8F0] px-6 py-1.5 text-[11px] text-black font-mono flex items-center gap-2">

                  <Search className="w-3 h-3" />

                  <span>{typedUrl}</span>

                  <motion.span

                    className="w-[1px] h-3.5 bg-[#e9edc9]"

                    animate={{ opacity: [1, 0, 1] }}

                    transition={{ duration: 0.8, repeat: Infinity }}

                  />

                </div>

              </div>

              <div className="flex gap-2">

                <motion.div whileHover={{ scale: 1.3, rotate: 15 }} transition={{ type: "spring" }}>

                  <Bell className="w-3.5 h-3.5 text-black cursor-pointer" />

                </motion.div>

                <motion.div whileHover={{ scale: 1.3, rotate: 90 }} transition={{ type: "spring", duration: 0.4 }}>

                  <Settings className="w-3.5 h-3.5 text-black cursor-pointer" />

                </motion.div>

              </div>

            </div>



            <div className="flex h-[340px] sm:h-[380px]">

              {/* Sidebar with hover effects */}

              <div className="hidden sm:flex w-14 border-r border-[#FFF8F0] blue-card flex-col items-center py-4 gap-1">

                {SIDEBAR.map((Icon, i) => (

                  <motion.div

                    key={i}

                    initial={{ opacity: 0, x: -10 }}

                    animate={{ opacity: 1, x: 0 }}

                    transition={{ delay: 1.2 + i * 0.06 }}

                    whileHover={{ scale: 1.2, backgroundColor: "rgba(30,58,92,0.15)" }}

                    className={`w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${i === 1 ? "bg-[#e9edc9]/15 text-black" : "text-black hover:text-black"}`}

                  >

                    <Icon className="w-4 h-4" />

                  </motion.div>

                ))}

              </div>



              {/* Main content */}

              <div className="flex-1 p-4 sm:p-5 overflow-hidden bg-[#1e3a5c]/50">

                <div className="grid grid-cols-3 gap-3 mb-5">

                  {[

                    { label: "Funding Enabled", value: "â¹110Cr+", change: "+â¹18Cr this quarter", color: "text-emerald-500", icon: TrendingUp },

                    { label: "Active Schemes", value: "50+", change: "PMEGP, MUDRA, CGTMSE", color: "text-black", icon: Shield },

                    { label: "Success Rate", value: "95%", change: "scheme approvals", color: "text-amber-500", icon: Zap },

                  ].map((s, i) => (

                    <motion.div

                      key={s.label}

                      initial={{ opacity: 0, y: 16 }}

                      animate={{ opacity: 1, y: 0 }}

                      transition={{ delay: 1.4 + i * 0.1 }}

                      whileHover={{ scale: 1.03, borderColor: "rgba(30,58,92,0.4)" }}

                      className="rounded-xl border border-[#FFF8F0] blue-card p-3 cursor-default transition-all duration-300"

                    >

                      <div className="flex items-center justify-between">

                        <p className="text-[10px] text-black font-medium">{s.label}</p>

                        <s.icon className="w-3 h-3 text-black" />

                      </div>

                      <p className="text-lg font-bold text-black mt-0.5">{s.value}</p>

                      <p className={`text-[10px] font-semibold mt-1 ${s.color}`}>{s.change}</p>

                    </motion.div>

                  ))}

                </div>



                <div className="flex gap-4 h-[calc(100%-100px)]">

                  {/* Bar chart with hover tooltips */}

                  <div className="flex-1 rounded-xl border border-[#FFF8F0] blue-card p-4">

                    <div className="flex items-center justify-between mb-3">

                      <p className="text-[11px] font-semibold text-black">Funding Disbursed</p>

                      <span className="text-[10px] text-black border border-[#FFF8F0] rounded px-2 py-0.5 bg-[#1e3a5c]/30">FY 2025-26</span>

                    </div>

                    <div className="flex items-end gap-[6px] h-[calc(100%-32px)]">

                      {BAR_HEIGHTS.map((h, i) => (

                        <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group/bar">

                          <motion.div

                            initial={{ height: 0 }}

                            animate={{ height: `${h}%` }}

                            transition={{ duration: 1, delay: 1.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}

                            whileHover={{ filter: "brightness(1.3)", scale: 1.05 }}

                            className="w-full rounded-md bg-gradient-to-t from-[#FFF8F0] to-[#e9edc9] cursor-pointer transition-all duration-200 relative origin-bottom"

                          >

                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity text-[8px] text-black bg-[#FFF8F0] border border-[#FFF8F0] rounded px-1.5 py-0.5 whitespace-nowrap pointer-events-none">

                              â¹{Math.round(h * 1.57)}L

                            </div>

                          </motion.div>

                          <span className="text-[8px] text-black">{MONTHS[i]}</span>

                        </div>

                      ))}

                    </div>

                  </div>



                  {/* Activity feed with hover effects */}

                  <div className="hidden lg:block w-[200px] rounded-xl border border-[#FFF8F0] blue-card p-4">

                    <p className="text-[11px] font-semibold text-black mb-3">Recent Activity</p>

                    <div className="space-y-2.5">

                      {[

                        { text: "PMEGP Subsidy â¹25L Approved", time: "2m ago", color: "bg-emerald-500" },

                        { text: "Udyam Registration Complete", time: "1hr ago", color: "bg-[#e9edc9]" },

                        { text: "CGTMSE Guarantee â¹2Cr", time: "3hr ago", color: "bg-amber-500" },

                        { text: "ISO 9001 Certification Filed", time: "1d ago", color: "bg-violet-500" },

                        { text: "MUDRA Loan â¹10L Disbursed", time: "2d ago", color: "bg-pink-500" },

                      ].map((a, i) => (

                        <motion.div

                          key={i}

                          initial={{ opacity: 0, x: 12 }}

                          animate={{ opacity: 1, x: 0 }}

                          transition={{ delay: 2.0 + i * 0.12 }}

                          whileHover={{ x: 4 }}

                          className="flex items-start gap-2 cursor-default"

                        >

                          <motion.div

                            className={`w-1.5 h-1.5 rounded-full ${a.color} mt-1.5 shrink-0`}

                            animate={i === 0 ? { scale: [1, 1.5, 1] } : {}}

                            transition={i === 0 ? { duration: 1.5, repeat: Infinity } : {}}

                          />

                          <div>

                            <p className="text-[10px] text-black leading-snug">{a.text}</p>

                            <p className="text-[9px] text-black">{a.time}</p>

                          </div>

                        </motion.div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>



          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[#e9edc9]/10 blur-[60px] rounded-full pointer-events-none" />

        </motion.div>



        {/* ââ Trust Stats Row with enhanced hover ââ */}

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 1.2 }}

          className="mt-20 max-w-3xl mx-auto"

          style={{ y: statsY }}

        >

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

            {[

              { ref: stat1.ref, value: stat1.value, suffix: "Cr+", prefix: "â¹", label: "Funding Enabled", icon: Wallet },

              { ref: stat2.ref, value: stat2.value, suffix: "+", prefix: "", label: "Businesses Served", icon: Users },

              { ref: stat3.ref, value: stat3.value, suffix: "%", prefix: "", label: "Success Rate", icon: TrendingUp },

              { ref: stat4.ref, value: stat4.value, suffix: "+", prefix: "", label: "States Covered", icon: Shield },

            ].map((s, i) => (

              <motion.div

                key={s.label}

                ref={s.ref}

                initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}

                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}

                transition={{ duration: 0.6, delay: 1.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}

                className="group text-center rounded-2xl border border-[#1e3a5c]/60 blue-card py-5 px-3 backdrop-blur-md shadow-sm

                           hover:border-[#e9edc9]/30 hover:bg-[#1e3a5c]/25 hover:shadow-lg hover:shadow-[#1B4F8A]/20 transition-all duration-500 relative overflow-hidden"

                whileHover={{ scale: 1.06, y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}

              >

                <div className="absolute inset-0 bg-gradient-to-br from-[#e9edc9]/0 to-[#FFF8F0]/0 group-hover:from-[#e9edc9]/5 group-hover:to-[#FFF8F0]/10 transition-all duration-500 rounded-2xl" />

                <s.icon className="absolute top-2 right-2 w-6 h-6 text-black/40 group-hover:text-black/50 transition-colors duration-500" />

                <p className="relative text-2xl sm:text-3xl font-black text-black tabular-nums">

                  {s.prefix}{s.value.toLocaleString()}{s.suffix}

                </p>

                <p className="relative text-xs text-black font-medium mt-1">{s.label}</p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>



      {/* Bottom gradient fade */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF8F0] to-transparent pointer-events-none z-10" />

    </section>

  )

}

