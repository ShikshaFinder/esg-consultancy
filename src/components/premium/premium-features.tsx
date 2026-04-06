"use client"
import { useRef } from "react"
import Link from "next/link"
import {
  motion, useMotionValue, useSpring, useTransform, type Variants,
} from "framer-motion"
import {
  ArrowRight, FileText, Banknote, Shield, Briefcase, Target, Landmark, Award, Scale, Megaphone,
} from "lucide-react"

/* ─── Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
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

/* ─── Feature Data ─── */
const FEATURES = [
  {
    icon: Landmark, title: "Government Schemes & Grants",
    desc: "Access PMEGP, MUDRA, CGTMSE, and 200+ government schemes. Auto-check eligibility and apply seamlessly.",
    gradient: "from-[#27374D]/8 to-[#526D82]/5",
    shadow: "hover:shadow-[#27374D]/10",
    iconBg: "bg-[#27374D]/10 group-hover:bg-[#27374D]/15",
    iconColor: "text-[#27374D]",
    href: "/services/grants",
  },
  {
    icon: FileText, title: "Business Registration",
    desc: "One-click Pvt Ltd, LLP, OPC, Udyam, GST registration. Automated compliance with real-time status tracking.",
    gradient: "from-[#526D82]/10 to-[#9DB2BF]/8",
    shadow: "hover:shadow-[#526D82]/12",
    iconBg: "bg-[#526D82]/12 group-hover:bg-[#526D82]/18",
    iconColor: "text-[#526D82]",
    href: "/services/business-registration",
  },
  {
    icon: Banknote, title: "Smart Loan Advisory",
    desc: "AI-powered loan matching with 50+ banks and NBFCs. Pre-approved offers based on your business profile.",
    gradient: "from-[#9DB2BF]/12 to-[#DDE6ED]/15",
    shadow: "hover:shadow-[#9DB2BF]/15",
    iconBg: "bg-[#9DB2BF]/18 group-hover:bg-[#9DB2BF]/25",
    iconColor: "text-[#27374D]",
    href: "/services/loans",
  },
  {
    icon: Shield, title: "Tax & Compliance Autopilot",
    desc: "Automated GST filing, ITR, TDS compliance. Zero penalty guarantee with smart deadline tracking.",
    gradient: "from-[#27374D]/6 to-[#9DB2BF]/8",
    shadow: "hover:shadow-[#27374D]/10",
    iconBg: "bg-[#27374D]/10 group-hover:bg-[#27374D]/15",
    iconColor: "text-[#526D82]",
    href: "/services/tax-compliance",
  },
  {
    icon: Award, title: "Certifications & IP Protection",
    desc: "ISO, FSSAI, trademark, patents — end-to-end certification management with document automation.",
    gradient: "from-[#526D82]/8 to-[#27374D]/5",
    shadow: "hover:shadow-[#526D82]/12",
    iconBg: "bg-[#526D82]/10 group-hover:bg-[#526D82]/16",
    iconColor: "text-[#27374D]",
    href: "/services/certifications",
  },
  {
    icon: Target, title: "Growth Intelligence",
    desc: "AI-driven growth insights, market analysis, and strategic recommendations tailored to your business stage.",
    gradient: "from-[#9DB2BF]/10 to-[#526D82]/6",
    shadow: "hover:shadow-[#9DB2BF]/12",
    iconBg: "bg-[#9DB2BF]/12 group-hover:bg-[#9DB2BF]/18",
    iconColor: "text-[#526D82]",
    href: "/services/growth-strategy",
  },
]

export default function PremiumFeatures() {
  return (
    <section id="features" className="relative overflow-hidden px-6 py-32 bg-[#DDE6ED]">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#9DB2BF]/25 blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            variants={fadeUp} custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9DB2BF] bg-white/60 px-4 py-1.5 text-xs font-medium text-[#526D82]"
          >
            <Briefcase className="w-3.5 h-3.5" /> Platform Capabilities
          </motion.span>
          <motion.h2
            variants={fadeUp} custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#27374D] tracking-tight"
          >
            Everything You Need{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#27374D] via-[#526D82] to-[#9DB2BF]">
              to Scale
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.2} className="mt-5 text-[#526D82] text-base sm:text-lg max-w-2xl mx-auto">
            One platform replacing dozens of fragmented tools. Purpose-built for the unique needs of Indian MSMEs and startups.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} variants={fadeUp} custom={i * 0.05}>
              <TiltCard className="h-full">
                <Link
                  href={f.href}
                  className={`group relative block h-full overflow-hidden rounded-2xl border border-[#9DB2BF]/30 bg-white/60 p-7 transition-all duration-500 hover:border-[#526D82]/30 hover:bg-white hover:shadow-xl ${f.shadow}`}
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  {/* Content */}
                  <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                    {/* Icon with hover animation */}
                    <motion.div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#9DB2BF]/30 ${f.iconBg} ${f.iconColor} transition-all duration-500`}
                      whileHover={{ scale: 1.2, rotate: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <f.icon className="w-6 h-6" />
                    </motion.div>

                    <h3 className="text-[#27374D] font-bold text-lg mb-2.5 group-hover:text-[#27374D] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-[#526D82]/70 text-sm leading-relaxed mb-5 group-hover:text-[#526D82] transition-colors">
                      {f.desc}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#526D82] group-hover:text-[#27374D] transition-colors">
                      Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>

                  {/* Corner glow */}
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#526D82]/[0.06] opacity-0 blur-2xl transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
