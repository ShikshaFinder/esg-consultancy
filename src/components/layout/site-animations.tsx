"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function SiteAnimations() {
  const pathname = usePathname()
  const isPremium = pathname === "/premium"

  const cursorX = useMotionValue(-500)
  const cursorY = useMotionValue(-500)
  const smoothX = useSpring(cursorX, { stiffness: 60, damping: 30 })
  const smoothY = useSpring(cursorY, { stiffness: 60, damping: 30 })

  useEffect(() => {
    if (isPremium) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 175)
      cursorY.set(e.clientY - 175)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [cursorX, cursorY, isPremium])

  if (isPremium) return null

  return (
    <>
      <div
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #27374D 0%, #27374D 24%, #2d3f56 58%, #526D82 100%)",
        }}
      >
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.28] blur-[160px]"
          style={{ background: "radial-gradient(circle, #526D82, transparent 70%)", top: "-15%", left: "-10%" }}
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full opacity-[0.22] blur-[140px]"
          style={{ background: "radial-gradient(circle, #9DB2BF, transparent 70%)", bottom: "8%", right: "-5%" }}
          animate={{ x: [0, -50, 25, 0], y: [0, 40, -25, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[380px] h-[380px] rounded-full opacity-[0.18] blur-[120px]"
          style={{ background: "radial-gradient(circle, #DDE6ED, transparent 70%)", top: "35%", left: "55%" }}
          animate={{ x: [0, 35, -45, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#9DB2BF 1px, transparent 1px), linear-gradient(90deg, #9DB2BF 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <motion.div className="absolute top-[16%] left-[8%] w-3 h-3 rounded-full bg-[#DDE6ED]/30" animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[28%] right-[12%] w-4 h-4 rounded-full bg-[#9DB2BF]/35" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[58%] left-[14%] w-2 h-2 rounded-full bg-[#526D82]/55" animate={{ y: [0, -12, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[24%] right-[9%] w-5 h-5 rounded-full border border-[#DDE6ED]/25" animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[45%] right-[24%] w-2.5 h-2.5 rotate-45 bg-[#9DB2BF]/25" animate={{ y: [0, -10, 0], rotate: [45, 90, 45] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
      </div>

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
    </>
  )
}
