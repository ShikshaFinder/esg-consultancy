"use client"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Navbar from "@/components/layout/navbar"
import PremiumHero from "../../components/premium/premium-hero"
import PremiumMarquee from "../../components/premium/premium-marquee"
import PremiumFeatures from "../../components/premium/premium-features"
import PremiumSolutions from "../../components/premium/premium-solutions"
import PremiumProof from "../../components/premium/premium-proof"
import PremiumPricing from "../../components/premium/premium-pricing"
import PremiumConsultation from "../../components/premium/premium-consultation"
import PremiumFooter from "../../components/premium/premium-footer"

/* ─── Custom Loading Animation ─── */
function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1e3a5c]"
      style={{
        backgroundImage: "radial-gradient(circle at top, rgba(82,109,130,0.55), transparent 35%), radial-gradient(circle at bottom, rgba(157,178,191,0.35), transparent 42%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div className="relative">
          <motion.svg viewBox="0 0 48 48" className="w-16 h-16">
            <motion.rect x="3" y="3" width="18" height="18" rx="4" fill="#1e3a5c"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0, duration: 0.5, type: "spring" }} />
            <motion.rect x="27" y="3" width="18" height="18" rx="4" fill="#526D82"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, type: "spring" }} />
            <motion.rect x="3" y="27" width="18" height="18" rx="4" fill="#9DB2BF"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }} />
            <motion.rect x="27" y="27" width="18" height="18" rx="4" fill="#DDE6ED"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }} />
          </motion.svg>
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-[#9DB2BF]"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>
        <div className="w-48 h-1 overflow-hidden rounded-full bg-[#526D82]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          className="text-sm font-medium text-[#DDE6ED]"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading GrowBridge...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function PremiumPage() {
  const [loading, setLoading] = useState(true)
  const cursorX = useMotionValue(-500)
  const cursorY = useMotionValue(-500)
  const smoothX = useSpring(cursorX, { stiffness: 60, damping: 30 })
  const smoothY = useSpring(cursorY, { stiffness: 60, damping: 30 })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 175)
      cursorY.set(e.clientY - 175)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [cursorX, cursorY])

  return (
    <div
      className="noise-overlay relative overflow-x-hidden text-[#DDE6ED] selection:bg-[#9DB2BF]/40 selection:text-[#1e3a5c]"
      style={{
        background: "linear-gradient(180deg, #1e3a5c 0%, #234466 22%, #2e5278 54%, #3d6b90 100%)",
      }}
    >
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {/* Enhanced cursor spotlight — larger, dual-layer glow */}
      <motion.div
        className="fixed z-[60] h-[350px] w-[350px] rounded-full pointer-events-none hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(157,178,191,0.08) 0%, rgba(82,109,130,0.05) 30%, transparent 65%)",
        }}
      />
      <motion.div
        className="fixed z-[60] h-[120px] w-[120px] rounded-full pointer-events-none hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          marginLeft: 115,
          marginTop: 115,
          background: "radial-gradient(circle, rgba(221,230,237,0.06) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      <Navbar />
      <PremiumHero />
      <PremiumMarquee />
      <PremiumFeatures />
      <PremiumSolutions />
      <PremiumProof />
      <PremiumConsultation />
      <PremiumPricing />
      <PremiumFooter />
    </div>
  )
}
