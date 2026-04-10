"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X, ChevronDown, Phone as PhoneIcon, Clock } from "lucide-react"

const SERVICE_CATEGORIES = [
  {
    heading: "Start Your Business",
    items: [
      { title: "AGNIi", href: "/services/agnii" },
      { title: "GeM", href: "/services/gem" },
      { title: "Private Limited", href: "/services/private-limited" },
      { title: "Limited Liability Partnership", href: "/services/llp" },
      { title: "Proprietorship", href: "/services/proprietorship" },
      { title: "Goods and Service Tax", href: "/services/gst" },
    ],
  },
  {
    heading: "Grow Your Business",
    items: [
      { title: "ISO Certification", href: "/services/iso-certification" },
      { title: "IEC Certification", href: "/services/iec-certification" },
    ],
  },
  {
    heading: "Certifications",
    items: [
      { title: "Startup India Certification", href: "/services/startup-india-certification" },
      { title: "MSME Registration", href: "/services/msme-registration" },
      { title: "Udyam Certification", href: "/services/udyam-certification" },
      { title: "ZED Certification", href: "/services/zed-certification" },
    ],
  },
  {
    heading: "Funding",
    items: [
      { title: "Government Grants and Funding", href: "/services/government-grants" },
      { title: "Seed Fund", href: "/services/seed-fund" },
      { title: "Nidhi Prayas Yojana", href: "/services/nidhi-prayas-yojana" },
      { title: "MSME Loans", href: "/services/msme-loans" },
      { title: "Venture Capitalist", href: "/services/venture-capitalist" },
      { title: "Project Finance", href: "/services/project-finance" },
      { title: "Greenfield Loan", href: "/services/greenfield-loan" },
      { title: "Unsecured Business Loans", href: "/services/unsecured-business-loans" },
    ],
  },
  {
    heading: "Digital Marketing",
    items: [
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      { title: "Amazon Marketing", href: "/services/amazon-marketing" },
      { title: "Content Writing", href: "/services/content-writing" },
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Search Engine Optimization", href: "/services/seo" },
      { title: "Social Media Advertising", href: "/services/social-media-advertising" },
      { title: "Social Media Management", href: "/services/social-media-management" },
      { title: "Email Marketing", href: "/services/email-marketing" },
    ],
  },
  {
    heading: "Website Development",
    items: [
      { title: "Website Development Services", href: "/services/website-development" },
      { title: "Custom Website Development", href: "/services/custom-website-development" },
      { title: "E-Commerce Website Development", href: "/services/ecommerce-development" },
      { title: "WordPress Website Development", href: "/services/wordpress-development" },
      { title: "Website Hosting", href: "/services/website-hosting" },
    ],
  },
  {
    heading: "Others",
    items: [
      { title: "Pitch Deck", href: "/services/pitch-deck" },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileCatOpen, setMobileCatOpen] = useState<number | null>(null)
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
          ? "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(230,244,255,0.95) 50%, rgba(0,0,0,0.95) 100%)"
          : "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(230,244,255,0.85) 50%, rgba(0,0,0,0.88) 100%)",
        backdropFilter: scrolled ? "blur(24px) saturate(1.9)" : "blur(16px) saturate(1.6)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(53,88,114,0.12), 0 1px 3px rgba(0,0,0,0.06), inset 0 1px 0 rgba(0,0,0,0.6)"
          : "0 1px 12px rgba(53,88,114,0.06), inset 0 1px 0 rgba(0,0,0,0.4)",
        borderBottom: scrolled ? "1px solid rgba(53,88,114,0.1)" : "1px solid rgba(53,88,114,0.05)",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-400 ${scrolled ? "h-[70px]" : "h-[90px]"}`} style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}>
        {/* Logo + Tagline */}
        <Link href="/" className="flex items-center shrink-0 mt-8 mb-4">
          <img src="/logo.png" alt="GrowBridge" className="h-[180px] w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          <Link href="/" className="px-4 py-2 rounded-lg text-sm font-semibold text-black hover:text-black hover:bg-[#1e3a5c]/4 transition-all duration-200">Home</Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-black hover:text-black hover:bg-[#1e3a5c]/4 transition-all duration-200 cursor-pointer"
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
                  className="fixed top-full left-1/2 -translate-x-1/2 mt-3 w-[96vw] max-w-[1140px] rounded-2xl border border-[#1e3a5c]/10 bg-white/[0.98] backdrop-blur-2xl shadow-[0_20px_60px_rgba(53,88,114,0.15)] p-6"
                >
                  <div className="grid grid-cols-7 gap-5">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <div key={cat.heading}>
                        <p className="text-[11px] font-bold text-black uppercase tracking-wider mb-3 pb-2 border-b border-[#1e3a5c]/10">{cat.heading}</p>
                        <div className="flex flex-col gap-0.5">
                          {cat.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="text-[12.5px] text-black/75 hover:text-black hover:bg-[#1e3a5c]/4 rounded-md px-2 py-1.5 transition-all duration-150 leading-snug"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#1e3a5c]/6">
                    <Link href="/services" onClick={() => setServicesOpen(false)} className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1e3a5c]/4 hover:bg-[#1e3a5c]/8 text-black text-xs font-semibold transition-all">
                      View All Services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blogs" className="px-4 py-2 rounded-lg text-sm font-semibold text-black hover:text-black hover:bg-[#1e3a5c]/4 transition-all duration-200">Blogs</Link>
          <Link href="/schemes" className="px-4 py-2 rounded-lg text-sm font-semibold text-black hover:text-black hover:bg-[#1e3a5c]/4 transition-all duration-200">Schemes</Link>
          <Link href="/success-stories" className="px-4 py-2 rounded-lg text-sm font-semibold text-black hover:text-black hover:bg-[#1e3a5c]/4 transition-all duration-200">Success Stories</Link>
          <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-semibold text-black hover:text-black hover:bg-[#1e3a5c]/4 transition-all duration-200">About Us</Link>
          <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-semibold text-black hover:text-black hover:bg-[#1e3a5c]/4 transition-all duration-200">Contact</Link>
        </nav>

        {/* Right side — Hours + Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-right">
            <div>
              <p className="text-[11px] font-bold text-black leading-none">9:30 AM - 6:00 PM</p>
              <p className="text-[10px] text-black leading-none mt-0.5">Monday - Saturday</p>
            </div>
            <Clock className="w-4 h-4 text-black" />
          </div>
          <div className="w-px h-8 bg-[#1e3a5c]/10" />
          <a href="https://wa.me/919998035607" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-[#25D366]/20"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.125 1.52 5.86L0 24l6.335-1.463C8.07 23.48 9.98 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.653-.506-5.203-1.392l-.373-.222-3.862.893.96-3.51-.244-.388C2.284 15.57 1.75 13.836 1.75 12 1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 21.75 12 21.75z"/>
            </svg>
          </a>
          <a href="tel:+919998035607"
            className="w-10 h-10 rounded-full bg-linear-to-br from-[#FFF8F0] to-[#7AAACE] flex items-center justify-center hover:scale-110 transition-transform shadow-md shadow-[#FFF8F0]/20"
          >
            <PhoneIcon className="w-4.5 h-4.5 text-black" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-black hover:bg-[#1e3a5c]/6 transition-all cursor-pointer"
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
            className="lg:hidden overflow-hidden border-t border-[#1e3a5c]/8 bg-white/98 backdrop-blur-2xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-black hover:text-black border-b border-[#1e3a5c]/5 transition-colors">Home</Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-[#1e3a5c]/5">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-semibold text-black hover:text-black transition-colors cursor-pointer"
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
                      <div className="pb-3 pl-1 flex flex-col gap-0.5">
                        {SERVICE_CATEGORIES.map((cat, ci) => (
                          <div key={cat.heading}>
                            <button
                              onClick={() => setMobileCatOpen(mobileCatOpen === ci ? null : ci)}
                              className="flex items-center justify-between w-full px-3 py-2 text-xs font-bold text-black/70 hover:text-black transition-colors cursor-pointer"
                            >
                              {cat.heading}
                              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileCatOpen === ci ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                              {mobileCatOpen === ci && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 pb-2 flex flex-col gap-0.5">
                                    {cat.items.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); setMobileCatOpen(null) }}
                                        className="text-[12px] text-black/55 hover:text-black rounded-md px-3 py-1.5 hover:bg-[#1e3a5c]/4 transition-all"
                                      >
                                        {item.title}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); setMobileCatOpen(null) }}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-black text-xs font-semibold"
                        >
                          View All Services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blogs" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-black hover:text-black border-b border-[#1e3a5c]/5 transition-colors">Blogs</Link>
              <Link href="/schemes" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-black hover:text-black border-b border-[#1e3a5c]/5 transition-colors">Schemes</Link>
              <Link href="/success-stories" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-black hover:text-black border-b border-[#1e3a5c]/5 transition-colors">Success Stories</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-black hover:text-black border-b border-[#1e3a5c]/5 transition-colors">About Us</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-semibold text-black hover:text-black border-b border-[#1e3a5c]/5 transition-colors">Contact</Link>

              {/* Mobile contact row */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#1e3a5c]/6">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-black" />
                  <div>
                    <p className="text-[10px] font-bold text-black leading-none">9:30 AM - 6:00 PM</p>
                    <p className="text-[9px] text-black">Mon - Sat</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://wa.me/919998035607" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.125 1.52 5.86L0 24l6.335-1.463C8.07 23.48 9.98 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.653-.506-5.203-1.392l-.373-.222-3.862.893.96-3.51-.244-.388C2.284 15.57 1.75 13.836 1.75 12 1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 21.75 12 21.75z"/>
                    </svg>
                  </a>
                  <a href="tel:+919998035607" className="w-9 h-9 rounded-full bg-linear-to-br from-[#FFF8F0] to-[#7AAACE] flex items-center justify-center shadow-sm">
                    <PhoneIcon className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 py-3 rounded-full text-center text-sm font-semibold text-black bg-linear-to-r from-[#1B4F8A] to-[#2E7DD9] shadow-md"
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
