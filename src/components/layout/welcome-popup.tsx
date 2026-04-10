"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import {
  X, ArrowRight, Building2, Calculator, Award,
  Megaphone, Banknote, CreditCard, ChevronRight, Star,
} from "lucide-react"
import Link from "next/link"

const SERVICES = [
  { num: "01", title: "Start Your Business",   desc: "Company formation & registration", icon: Building2,  color: "#34d399", badge: "Popular",      href: "/services/private-limited" },
  { num: "02", title: "GST & Compliance",      desc: "GST registration & filing",        icon: Calculator, color: "#fb923c", badge: "Save More",   href: "/services/gst" },
  { num: "03", title: "Certifications",        desc: "ISO, Startup India & more",        icon: Award,      color: "#60a5fa", badge: "Govt. Backed", href: "/services/iso-certification" },
  { num: "04", title: "Digital Marketing",     desc: "SEO, ads & social media",          icon: Megaphone,  color: "#f472b6", badge: "Growth",       href: "/services/digital-marketing" },
  { num: "05", title: "Government Grants",     desc: "Government grants & schemes",      icon: Banknote,   color: "#a78bfa", badge: "Free Money",   href: "/services/government-grants" },
  { num: "06", title: "Website Development",   desc: "Custom websites & ecommerce",      icon: CreditCard, color: "#f87171", badge: "Trending",     href: "/services/website-development" },
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } },
}
const listItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.42, ease: EASE } },
}

export default function WelcomePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 backdrop-blur-xl"
            style={{
              background:
                  "radial-gradient(ellipse at 50% 40%, rgba(46,82,120,0.45) 0%, rgba(30,58,92,0.97) 68%)",
            }}
            onClick={() => setOpen(false)}
          />

          {/* Rotating conic glow halo */}
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[2px] rounded-[28px] pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, #526D82 40deg, #7AAACE 80deg, #9CD5FF 110deg, transparent 160deg, #526D82 230deg, #7AAACE 290deg, transparent 360deg)",
                filter: "blur(6px)",
                opacity: 0.6,
              }}
            />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.89 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{   opacity: 0, y: 28, scale: 0.89 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[min(460px,calc(100vw-2rem))] rounded-[26px] overflow-hidden"
              style={{
                background: "linear-gradient(158deg, #FFF8F0 0%, #FFF8F0 55%, #FFF8F0 100%)",
                border: "1px solid rgba(10,22,40,0.22)",
                boxShadow:
                  "0 52px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(30,58,92,0.03), inset 0 1px 0 rgba(0,0,0,0.04)",
              }}
            >
              {/* Ambient orbs */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#1e3a5c]/22 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-14 -left-14 w-52 h-52 rounded-full bg-[#9CD5FF]/[0.055] blur-[64px] pointer-events-none" />

              {/* Dot-grid texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.55) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.018,
                }}
              />

              {/* Header */}
              <div className="relative z-10 px-5 pt-5 pb-0">
                <div className="flex items-center justify-between mb-3.5">
                  <motion.span
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold text-black uppercase tracking-[0.11em]"
                    style={{
                      background: "rgba(53,88,114,0.28)",
                      border: "1px solid rgba(122,170,206,0.22)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    GrowBridge Â· Free Consultation
                  </motion.span>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setOpen(false) }}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-black/45 hover:text-black/80 hover:bg-white/[0.07] transition-all border border-[#1e3a5c]/20/6 cursor-pointer shrink-0"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.13, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[27px] font-black text-black tracking-tight leading-[1.08] mb-1"
                >
                  Grow Your{" "}
                  <span
                    style={{
                      background: "linear-gradient(92deg, #7AAACE 0%, #9CD5FF 60%, #7AAACE 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "#000000",
                    }}
                  >
                    Business
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-[13px] mb-4"
                  style={{ color: "rgba(30,58,92,0.52)" }}
                >
                  with{" "}
                  <span style={{ color: "rgba(30,58,92,0.82)", fontWeight: 600 }}>Expert Support</span>
                  {" "}Â· Pick a service
                </motion.p>

                {/* Stats strip */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24 }}
                  className="flex items-stretch mb-4 rounded-xl overflow-hidden"
                  style={{
                    background: "rgba(53,88,114,0.14)",
                    border: "1px solid rgba(10,22,40,0.22)",
                  }}
                >
                  {[
                    { value: "110Cr+", label: "Funded"       },
                    { value: "95%",    label: "Success Rate" },
                    { value: "500+",   label: "Reviews"      },
                  ].map((s, i, arr) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5"
                      style={i < arr.length - 1 ? { borderRight: "1px solid rgba(10,22,40,0.22)" } : {}}
                    >
                      <span className="text-[15px] font-black text-black leading-none">{s.value}</span>
                      <span
                        className="text-[8.5px] uppercase tracking-widest leading-none"
                        style={{ color: "rgba(30,58,92,0.4)" }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Scan line */}
                <motion.div
                  className="h-px origin-left"
                  initial={{ scaleX: 0, opacity: 1 }}
                  animate={{ scaleX: 1, opacity: 0.4 }}
                  transition={{ delay: 0.32, duration: 0.85, ease: "easeOut" }}
                  style={{ background: "linear-gradient(90deg, #526D82, rgba(156,213,255,0.6), transparent)" }}
                />
              </div>

              {/* Service List */}
              <motion.div
                variants={listContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 px-3 pt-2.5 pb-1"
              >
                {SERVICES.map((s) => {
                  const Icon = s.icon
                  return (
                    <motion.div key={s.title} variants={listItem}>
                      <Link
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="group relative flex items-center gap-3 px-2.5 py-2.5 rounded-xl transition-colors duration-200 overflow-hidden hover:bg-white/[0.035]"
                      >
                        {/* Left accent bar */}
                        <div
                          className="absolute left-0 top-[15%] w-[2.5px] h-0 group-hover:h-[70%] rounded-full transition-all duration-300"
                          style={{ background: s.color }}
                        />

                        {/* Number */}
                        <span
                          className="text-[11px] font-black w-5 shrink-0 tabular-nums select-none"
                          style={{ color: "rgba(10,22,40,0.7)", fontFamily: "ui-monospace, monospace" }}
                        >
                          {s.num}
                        </span>

                        {/* Icon chip */}
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-[1.12]"
                          style={{
                            background: `${s.color}1a`,
                            boxShadow: `0 0 0 1px ${s.color}32`,
                          }}
                        >
                          <Icon
                            style={{ color: s.color, width: "15px", height: "15px" }}
                          />
                        </div>

                        {/* Title + desc */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-semibold text-[13px] leading-none mb-[3px] transition-colors duration-200 group-hover:text-black truncate"
                            style={{ color: "rgba(221,230,237,0.88)" }}
                          >
                            {s.title}
                          </p>
                          <p
                            className="text-[10px] truncate"
                            style={{ color: "rgba(30,58,92,0.38)" }}
                          >
                            {s.desc}
                          </p>
                        </div>

                        {/* Badge */}
                        <span
                          className="text-[9px] font-bold px-2 py-[3px] rounded-full shrink-0"
                          style={{
                            background: `${s.color}18`,
                            color: s.color,
                            border: `1px solid ${s.color}30`,
                          }}
                        >
                          {s.badge}
                        </span>

                        {/* Chevron */}
                        <ChevronRight
                          className="w-3.5 h-3.5 shrink-0 transition-all duration-200 group-hover:translate-x-0.5"
                          style={{ color: "rgba(30,58,92,0.12)" }}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Footer */}
              <div className="relative z-10 px-4 pb-4 pt-0">
                <div
                  className="h-px mb-3.5"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(10,22,40,0.35), transparent)" }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="group relative flex items-center justify-between w-full px-4 py-3 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_36px_rgba(53,88,114,0.55)]"
                    style={{
                      background: "linear-gradient(135deg, #FFF8F0 0%, #FFF8F0 50%, #FFF8F0 100%)",
                      border: "1px solid rgba(122,170,206,0.16)",
                    }}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-linear-to-r from-transparent via-white/8 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <p className="text-black font-bold text-[13px] leading-none mb-0.5">Not sure where to start?</p>
                      <p style={{ color: "rgba(30,58,92,0.5)", fontSize: "10px" }}>Talk to an expert Â· Free</p>
                    </div>
                    <div
                      className="relative z-10 flex items-center gap-1.5 rounded-xl px-3 py-2 transition-colors duration-200 group-hover:bg-white/12"
                      style={{ background: "rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.08)" }}
                    >
                      <span className="text-black text-[11px] font-bold">Get Help</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                        style={{ color: "#9CD5FF" }}
                      />
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.08 }}
                  className="flex items-center justify-center gap-2 mt-3"
                >
                  <div className="flex gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span style={{ color: "rgba(30,58,92,0.35)", fontSize: "10px" }}>
                    Evolving 1000+ Indian Startups &amp; MSMEs
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
