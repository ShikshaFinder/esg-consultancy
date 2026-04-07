"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X, ChevronDown, FileText, Banknote, CreditCard, Shield, Megaphone, BarChart3, Scale, Building2, BadgePercent, Phone as PhoneIcon, Clock } from "lucide-react"

const SERVICE_ITEMS = [
  { icon: FileText, title: "Business Registration", desc: "Company formation & compliance", href: "/services/business-registration" },
  { icon: Banknote, title: "Grants & Funding", desc: "Government grants & subsidies", href: "/services/grants" },
  { icon: CreditCard, title: "Business Loans", desc: "MUDRA, CGTMSE & bank loans", href: "/services/loans" },
  { icon: Building2, title: "Tax & Compliance", desc: "GST, ITR & TDS services", href: "/services/tax-compliance" },
  { icon: Shield, title: "Certifications & IP", desc: "ISO, trademark & patents", href: "/services/certifications" },
  { icon: BarChart3, title: "Growth Strategy", desc: "Business planning & expansion", href: "/services/growth-strategy" },
  { icon: Scale, title: "Legal Services", desc: "Contracts & compliance", href: "/services/legal" },
  { icon: BadgePercent, title: "CIBIL Assistance", desc: "Credit score improvement", href: "/services/cibil-assistance" },
  { icon: Megaphone, title: "Marketing & Branding", desc: "Digital marketing & brand building", href: "/services/marketing" },
  { icon: Building2, title: "Tax Exemption & Benefits", desc: "GST, ITR & startup tax holidays", href: "/services/tax-exemption-benefits" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(230,244,255,0.95) 50%, rgba(255,255,255,0.95) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(230,244,255,0.85) 50%, rgba(255,255,255,0.88) 100%)",
        backdropFilter: scrolled ? "blur(24px) saturate(1.9)" : "blur(16px) saturate(1.6)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(53,88,114,0.12), 0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)"
          : "0 1px 12px rgba(53,88,114,0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
        borderBottom: scrolled ? "1px solid rgba(53,88,114,0.1)" : "1px solid rgba(53,88,114,0.05)",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-400 ${scrolled ? "h-[56px]" : "h-[68px]"}`} style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}>
        {/* Logo + Tagline */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <svg viewBox="0 0 40 40" className="w-9 h-9">
            <rect x="2" y="2" width="16" height="16" rx="4" fill="#355872" />
            <rect x="22" y="2" width="16" height="16" rx="4" fill="#9CD5FF" opacity="0.85" />
            <rect x="2" y="22" width="16" height="16" rx="4" fill="#9CD5FF" opacity="0.85" />
            <rect x="22" y="22" width="16" height="16" rx="4" fill="#355872" />
            <rect x="10" y="10" width="20" height="20" rx="3" fill="#0a1628" opacity="0.75" />
            <circle cx="20" cy="20" r="4.5" fill="white" opacity="0.92" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-[1.15rem] text-[#0a1628] tracking-tight leading-none">
              Grow<span className="text-[#355872]">Bridge</span>
            </span>
            <span className="text-[9px] font-medium text-[#7AAACE] tracking-wide leading-none mt-0.5 hidden sm:block">
              Where Business Growth Begins
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          <Link href="/" className="px-4 py-2 rounded-lg text-sm font-semibold text-[#355872] hover:text-[#7AAACE] hover:bg-[#355872]/[0.04] transition-all duration-200">Home</Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-[#355872] hover:text-[#7AAACE] hover:bg-[#355872]/[0.04] transition-all duration-200 cursor-pointer"
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] rounded-2xl border border-[#355872]/10 bg-white/98 backdrop-blur-2xl shadow-[0_20px_60px_rgba(53,88,114,0.15)] p-5"
                >
                  <div className="grid grid-cols-3 gap-1.5">
                    {SERVICE_ITEMS.map((s) => (
                      <Link
                        key={s.title}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-3 hover:bg-[#355872]/[0.04] transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#355872]/10 to-[#9CD5FF]/15 flex items-center justify-center shrink-0 group-hover:from-[#355872]/20 group-hover:to-[#9CD5FF]/25 transition-all duration-300">
                          <s.icon className="w-4 h-4 text-[#355872]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[#0a1628] text-[13px] font-semibold group-hover:text-[#355872] transition-colors leading-snug">{s.title}</p>
                          <p className="text-[#0a1628]/40 text-[11px] leading-tight mt-0.5">{s.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#355872]/[0.06]">
                    <Link href="/services" onClick={() => setServicesOpen(false)} className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#355872]/[0.04] hover:bg-[#355872]/[0.08] text-[#355872] text-xs font-semibold transition-all">
                      View All Services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blogs" className="px-4 py-2 rounded-lg text-sm font-semibold text-[#355872] hover:text-[#7AAACE] hover:bg-[#355872]/[0.04] transition-all duration-200">Blogs</Link>
          <Link href="/schemes" className="px-4 py-2 rounded-lg text-sm font-semibold text-[#355872] hover:text-[#7AAACE] hover:bg-[#355872]/[0.04] transition-all duration-200">Schemes</Link>
          <Link href="/success-stories" className="px-4 py-2 rounded-lg text-sm font-semibold text-[#355872] hover:text-[#7AAACE] hover:bg-[#355872]/[0.04] transition-all duration-200">Success Stories</Link>
          <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-semibold text-[#355872] hover:text-[#7AAACE] hover:bg-[#355872]/[0.04] transition-all duration-200">About Us</Link>
          <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-semibold text-[#355872] hover:text-[#7AAACE] hover:bg-[#355872]/[0.04] transition-all duration-200">Contact</Link>
        </nav>

        {/* Right side — Hours + Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-right">
            <div>
              <p className="text-[11px] font-bold text-[#355872] leading-none">9:30 AM - 6:00 PM</p>
              <p className="text-[10px] text-[#7AAACE] leading-none mt-0.5">Monday - Saturday</p>
            </div>
            <Clock className="w-4 h-4 text-[#9CD5FF]" />
          </div>
          <div className="w-px h-8 bg-[#355872]/10" />
          <a href="https://wa.me/918487828752" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-[#25D366]/20"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.125 1.52 5.86L0 24l6.335-1.463C8.07 23.48 9.98 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.653-.506-5.203-1.392l-.373-.222-3.862.893.96-3.51-.244-.388C2.284 15.57 1.75 13.836 1.75 12 1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 21.75 12 21.75z"/>
            </svg>
          </a>
          <a href="tel:+918487828752"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#355872] to-[#7AAACE] flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-[#355872]/20"
          >
            <PhoneIcon className="w-4.5 h-4.5 text-white" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-[#355872] hover:bg-[#355872]/[0.06] transition-all cursor-pointer"
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
            className="lg:hidden overflow-hidden border-t border-[#355872]/[0.08] bg-white/98 backdrop-blur-2xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] border-b border-[#355872]/[0.05] transition-colors">Home</Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-[#355872]/[0.05]">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] transition-colors cursor-pointer"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-2 grid grid-cols-1 gap-1">
                        {SERVICE_ITEMS.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[#0a1628]/60 hover:text-[#355872] hover:bg-[#355872]/[0.04] transition-all"
                          >
                            <s.icon className="w-4 h-4 text-[#355872] shrink-0" />
                            <span className="text-xs font-medium">{s.title}</span>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-[#7AAACE] text-xs font-semibold"
                        >
                          View All Services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blogs" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] border-b border-[#355872]/[0.05] transition-colors">Blogs</Link>
              <Link href="/schemes" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] border-b border-[#355872]/[0.05] transition-colors">Schemes</Link>
              <Link href="/success-stories" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] border-b border-[#355872]/[0.05] transition-colors">Success Stories</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] border-b border-[#355872]/[0.05] transition-colors">About Us</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] border-b border-[#355872]/[0.05] transition-colors">Contact</Link>

              {/* Mobile contact row */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#355872]/[0.06]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#9CD5FF]" />
                  <div>
                    <p className="text-[10px] font-bold text-[#355872] leading-none">9:30 AM - 6:00 PM</p>
                    <p className="text-[9px] text-[#7AAACE]">Mon - Sat</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://wa.me/918487828752" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.125 1.52 5.86L0 24l6.335-1.463C8.07 23.48 9.98 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.653-.506-5.203-1.392l-.373-.222-3.862.893.96-3.51-.244-.388C2.284 15.57 1.75 13.836 1.75 12 1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 21.75 12 21.75z"/>
                    </svg>
                  </a>
                  <a href="tel:+918487828752" className="w-9 h-9 rounded-full bg-gradient-to-br from-[#355872] to-[#7AAACE] flex items-center justify-center shadow-sm">
                    <PhoneIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 py-3 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#355872] to-[#7AAACE] shadow-md"
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
