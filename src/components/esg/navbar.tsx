"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
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

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#f4f7f9] border-b border-[#e2e8f0] text-[#64748b] text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+919426550580" className="flex items-center gap-1.5 hover:text-[#009b7d] transition-colors">
              <Phone className="w-3 h-3" /> +91 9426550580
            </a>
            <a href="mailto:esgcatalyst@gmail.com" className="flex items-center gap-1.5 hover:text-[#009b7d] transition-colors">
              <Mail className="w-3 h-3" /> esgcatalyst@gmail.com
            </a>
          </div>
          <span className="text-[10px] tracking-widest uppercase opacity-60">Bhavnagar / Alang, Gujarat</span>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#e2e8f0] shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#009b7d] to-[#0284c7] flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <div>
              <span className="font-bold text-[15px] text-[#0f172a] tracking-wide">ESG Catalyst</span>
              <span className="block text-[9px] tracking-[0.2em] uppercase text-[#009b7d] -mt-0.5">Ship Recycling Compliance</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[#64748b] hover:text-[#0f172a] transition-colors rounded-lg hover:bg-[#f1f5f9]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 text-sm font-medium bg-gradient-to-r from-[#009b7d] to-[#0284c7] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Request Assessment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#f1f5f9] transition-colors text-[#0f172a]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-16 z-40 bg-white/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-lg text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-5 py-3 text-center font-medium bg-gradient-to-r from-[#009b7d] to-[#0284c7] text-white rounded-lg"
              >
                Request Assessment
              </Link>
              <div className="mt-6 pt-6 border-t border-[#e2e8f0] space-y-3 text-sm text-[#64748b]">
                <a href="tel:+919426550580" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#009b7d]" /> +91 9426550580
                </a>
                <a href="mailto:esgcatalyst@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#009b7d]" /> esgcatalyst@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
