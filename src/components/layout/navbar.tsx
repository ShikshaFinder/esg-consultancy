"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Schemes", href: "/schemes" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(18px) saturate(1.8)" : "none",
        backgroundColor: scrolled ? "rgba(10,22,40,0.88)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            <rect x="2" y="2" width="16" height="16" rx="4" fill="#355872" />
            <rect x="22" y="2" width="16" height="16" rx="4" fill="#9CD5FF" opacity="0.85" />
            <rect x="2" y="22" width="16" height="16" rx="4" fill="#9CD5FF" opacity="0.85" />
            <rect x="22" y="22" width="16" height="16" rx="4" fill="#355872" />
            <rect x="10" y="10" width="20" height="20" rx="3" fill="#0a1628" opacity="0.75" />
            <circle cx="20" cy="20" r="4.5" fill="white" opacity="0.92" />
          </svg>
          <span className="font-bold text-[1.1rem] text-white tracking-tight">
            Grow<span className="text-[#9CD5FF]">Bridge</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-3.5 py-2 rounded-full text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#7AAACE]/40 bg-white/[0.06] backdrop-blur-sm px-5 py-2 text-sm font-medium text-white hover:bg-white/[0.12] transition-colors"
        >
          Free Consult <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/[0.06] bg-[#0a1628]/95 backdrop-blur-2xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm text-white/70 hover:text-white border-b border-white/[0.05] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 py-3 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#355872] to-[#7AAACE]"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
