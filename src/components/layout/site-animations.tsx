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
      <motion.div
        className="fixed z-[60] h-[350px] w-[350px] rounded-full pointer-events-none hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(30,58,92,0.08) 0%, rgba(10,22,40,0.05) 30%, transparent 65%)",
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
