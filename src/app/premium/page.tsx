"use client"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import PremiumHero from "../../components/premium/premium-hero"
import PremiumMarquee from "../../components/premium/premium-marquee"
import PremiumFeatures from "../../components/premium/premium-features"
import PremiumSolutions from "../../components/premium/premium-solutions"
import PremiumProof from "../../components/premium/premium-proof"
import PremiumPricing from "../../components/premium/premium-pricing"
import PremiumFooter from "../../components/premium/premium-footer"

/* ─── Custom Loading Animation ─── */
function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#27374D]"
      style={{
        backgroundImage: "radial-gradient(circle at top, rgba(82,109,130,0.55), transparent 35%), radial-gradient(circle at bottom, rgba(157,178,191,0.35), transparent 42%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div className="relative">
          <motion.svg viewBox="0 0 48 48" className="w-16 h-16">
            <motion.rect x="3" y="3" width="18" height="18" rx="4" fill="#27374D"
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
  const smoothX = useSpring(cursorX, { stiffness: 80, damping: 40 })
  const smoothY = useSpring(cursorY, { stiffness: 80, damping: 40 })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 125)
      cursorY.set(e.clientY - 125)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [cursorX, cursorY])

  return (
    <div
      className="relative overflow-x-hidden text-[#DDE6ED] selection:bg-[#9DB2BF]/40 selection:text-[#27374D]"
      style={{
        background: "linear-gradient(180deg, #27374D 0%, #27374D 22%, #2d3f56 54%, #526D82 100%)",
      }}
    >
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <motion.div
        className="fixed z-[60] h-[250px] w-[250px] rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(157,178,191,0.10) 0%, rgba(82,109,130,0.07) 40%, transparent 70%)",
        }}
      />

      <PremiumHero />
      <PremiumMarquee />
      <PremiumFeatures />
      <PremiumSolutions />
      <PremiumProof />
      <PremiumPricing />
      <PremiumFooter />
    </div>
  )
}
