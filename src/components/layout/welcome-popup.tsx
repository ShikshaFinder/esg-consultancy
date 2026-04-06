"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Star, ArrowRight, Rocket } from "lucide-react"
import Link from "next/link"

const SERVICES = [
  { title: "Business Registration", desc: "Company formation & compliance", badge: "Popular", badgeColor: "bg-green-500", href: "/services/business-registration", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" },
  { title: "Tax & Compliance", desc: "GST, income tax & TDS returns", badge: "Save More", badgeColor: "bg-orange-500", href: "/services/tax-compliance", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" },
  { title: "Certifications & IP", desc: "ISO, patents & trademarks", badge: "Govt. Backed", badgeColor: "bg-blue-600", href: "/services/certifications", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80" },
  { title: "Marketing & Branding", desc: "Digital marketing solutions", badge: "Growth", badgeColor: "bg-pink-500", href: "/services/marketing", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80" },
  { title: "Grants & Funding", desc: "Government grants & schemes", badge: "Free Money", badgeColor: "bg-emerald-600", href: "/services/grants", img: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=400&q=80" },
  { title: "CIBIL Assistance", desc: "Credit score improvement", badge: "Boost Score", badgeColor: "bg-red-500", href: "/services/cibil-assistance", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80" },
]

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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#355872] to-[#1a3a50] px-6 pt-6 pb-5">
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
              />
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setOpen(false) }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-red-500/80 flex items-center justify-center text-white/90 hover:text-white transition-all z-20 cursor-pointer pointer-events-auto shadow-lg backdrop-blur-sm border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-md mb-3">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  GROW BRIDGE · Free Consultation Available
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  Grow Your Business with{" "}
                  <span className="text-[#9CD5FF]">Expert Support</span>
                </h2>
                <p className="text-white/50 text-sm mt-1.5">Choose a service to check your eligibility instantly</p>
              </div>
            </div>

            {/* Service Grid */}
            <div className="bg-white p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICES.map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="group relative rounded-2xl overflow-hidden border border-slate-100 hover:border-[#355872]/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-[90px]">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className={`absolute top-2 right-2 ${s.badgeColor} text-white text-[9px] font-bold px-2 py-0.5 rounded-full`}>
                        {s.badge}
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[#355872] font-bold text-sm leading-tight">{s.title}</p>
                      <p className="text-slate-500 text-[11px] mt-0.5">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Not sure CTA */}
              <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#355872]/10 flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5 text-[#355872]" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">Not sure where to start?</p>
                    <p className="text-slate-500 text-[11px]">Talk to an expert for free</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 rounded-full bg-[#355872] text-white px-4 py-2 text-xs font-semibold hover:bg-[#355872]/90 transition-colors shrink-0"
                >
                  Get Help <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Rating bar */}
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">Evolving Indian StartUps & MSMEs</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs">500+ Reviews</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
