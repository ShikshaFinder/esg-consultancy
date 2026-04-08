"use client"
import { useRef, useState, useCallback } from "react"
import Link from "next/link"
import {
  motion, useMotionValue, useSpring, useTransform, type Variants, useInView,
} from "framer-motion"
import {
  ArrowRight, FileText, Banknote, Shield, Briefcase, Target, Landmark, Award,
} from "lucide-react"

/* ─── Variants ─── */
const blurFadeUp: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 24 },
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

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

/* ─── 3D Tilt Card with parallax ─── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-8, 8])
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Mouse-tracking Glow Container ─── */
function GlowGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -500, y: -500 })}
      className={`relative ${className}`}
    >
      {/* Grid-level cursor glow */}
      <div
        className="pointer-events-none absolute -inset-4 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(30,58,92,0.07), transparent 50%)`,
          opacity: mousePos.x > 0 ? 1 : 0,
        }}
      />
      {children}
    </div>
  )
}

/* ─── Animated Icon with ring pulse ─── */
function AnimatedIcon({ icon: Icon, iconBg, iconColor, inView }: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; iconBg: string; iconColor: string; inView: boolean
}) {
  return (
    <motion.div
      className={`relative mb-5 flex h-13 w-13 items-center justify-center rounded-xl border border-white/25 ${iconBg} ${iconColor} backdrop-blur-sm transition-all duration-500
        shadow-[inset_0_1px_0_rgba(0,0,0,0.2),0_2px_8px_rgba(10,22,40,0.1)]`}
      whileHover={{ scale: 1.2, rotate: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Icon className="w-6 h-6 relative z-10" strokeWidth={1.8} />
      {/* Animated ring that pulses on scroll reveal */}
      {inView && (
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-white/25"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      )}
    </motion.div>
  )
}

/* ─── Feature Data ─── */
const FEATURES = [
  {
    icon: Landmark, title: "Government Schemes & Grants",
    desc: "Access PMEGP, MUDRA, CGTMSE, and 200+ government schemes. Auto-check eligibility and apply seamlessly.",
    gradient: "from-[#1B4F8A] to-[#2E7DD9]/80",
    shadow: "hover:shadow-[#1B4F8A]/20",
    iconBg: "bg-white/20 group-hover:bg-white/35",
    iconColor: "text-black",
    href: "/services/government-grants",
  },
  {
    icon: FileText, title: "Business Registration",
    desc: "One-click Pvt Ltd, LLP, OPC, Udyam, GST registration. Automated compliance with real-time status tracking.",
    gradient: "from-[#1B4F8A] to-[#2E7DD9]/80",
    shadow: "hover:shadow-[#1B4F8A]/20",
    iconBg: "bg-white/20 group-hover:bg-white/35",
    iconColor: "text-black",
    href: "/services/private-limited",
  },
  {
    icon: Banknote, title: "Smart Loan Advisory",
    desc: "AI-powered loan matching with 50+ banks and NBFCs. Pre-approved offers based on your business profile.",
    gradient: "from-[#1B4F8A] to-[#2E7DD9]/80",
    shadow: "hover:shadow-[#1B4F8A]/20",
    iconBg: "bg-white/20 group-hover:bg-white/35",
    iconColor: "text-black",
    href: "/services/msme-loans",
  },
  {
    icon: Shield, title: "GST & Compliance",
    desc: "Automated GST filing, ITR, TDS compliance. Zero penalty guarantee with smart deadline tracking.",
    gradient: "from-[#1B4F8A] to-[#2E7DD9]/80",
    shadow: "hover:shadow-[#1B4F8A]/20",
    iconBg: "bg-white/20 group-hover:bg-white/35",
    iconColor: "text-black",
    href: "/services/gst",
  },
  {
    icon: Award, title: "Certifications",
    desc: "ISO, Startup India, MSME, ZED — end-to-end certification management with document automation.",
    gradient: "from-[#1B4F8A] to-[#2E7DD9]/80",
    shadow: "hover:shadow-[#1B4F8A]/20",
    iconBg: "bg-white/20 group-hover:bg-white/35",
    iconColor: "text-black",
    href: "/services/iso-certification",
  },
  {
    icon: Target, title: "Digital Marketing",
    desc: "SEO, Google Ads, social media management, and content marketing tailored to your business growth.",
    gradient: "from-[#1B4F8A] to-[#2E7DD9]/80",
    shadow: "hover:shadow-[#1B4F8A]/20",
    iconBg: "bg-white/20 group-hover:bg-white/35",
    iconColor: "text-black",
    href: "/services/digital-marketing",
  },
]

export default function PremiumFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="features" className="relative overflow-hidden px-6 py-32 bg-[#FFF8F0]">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#9DB2BF]/25 blur-[120px] pointer-events-none" />

      <motion.div
        ref={sectionRef}
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        {/* Section header with blur-fade */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            variants={blurFadeUp} custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B4F8A] bg-[#1B4F8A]/10 px-4 py-1.5 text-xs font-medium text-black"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Briefcase className="w-3.5 h-3.5" />
            </motion.div>
            Platform Capabilities
          </motion.span>
          <motion.h2
            variants={blurFadeUp} custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight"
          >
            Everything You Need{" "}
            <span className="text-black bg-gradient-to-r from-[#FFF8F0] via-[#526D82] to-[#9DB2BF]">
              to Scale
            </span>
          </motion.h2>
          <motion.p variants={blurFadeUp} custom={0.2} className="mt-5 text-black text-base sm:text-lg max-w-2xl mx-auto">
            One platform replacing dozens of fragmented tools. Purpose-built for the unique needs of Indian MSMEs and startups.
          </motion.p>
        </div>

        {/* Feature grid with mouse-tracking glow */}
        <GlowGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} variants={scaleIn} custom={i * 0.06} className="relative z-10">
              <TiltCard className="h-full">
                <Link
                  href={f.href}
                  className={`group relative block h-full overflow-hidden rounded-2xl border border-white/25 bg-white/50 backdrop-blur-sm p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/80 hover:shadow-2xl ${f.shadow}
                    hover:-translate-y-2`}
                >
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  {/* Glassmorphic inner glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#9DB2BF]/[0.08] opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />

                  {/* Animated border highlight on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(30,58,92,0.15) 0%, transparent 50%, rgba(10,22,40,0.1) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                    {/* Icon with animated ring */}
                    <AnimatedIcon
                      icon={f.icon}
                      iconBg={f.iconBg}
                      iconColor={f.iconColor}
                      inView={isInView}
                    />

                    <h3 className="text-black font-bold text-lg mb-2.5 group-hover:text-black transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-black/70 text-sm leading-relaxed mb-5 group-hover:text-black transition-colors">
                      {f.desc}
                    </p>

                    <motion.span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-black group-hover:text-black transition-colors"
                    >
                      Explore
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.span>
                    </motion.span>
                  </div>

                  {/* Corner glow */}
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#526D82]/[0.06] opacity-0 blur-2xl transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </GlowGrid>
      </motion.div>
    </section>
  )
}
