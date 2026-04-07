import Link from "next/link"
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/[0.06] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <rect x="2" y="2" width="16" height="16" rx="4" fill="#355872" />
                <rect x="22" y="2" width="16" height="16" rx="4" fill="#9CD5FF" opacity="0.85" />
                <rect x="2" y="22" width="16" height="16" rx="4" fill="#9CD5FF" opacity="0.85" />
                <rect x="22" y="22" width="16" height="16" rx="4" fill="#355872" />
                <rect x="10" y="10" width="20" height="20" rx="3" fill="#0a1628" opacity="0.75" />
                <circle cx="20" cy="20" r="4.5" fill="white" opacity="0.9" />
              </svg>
              <span className="font-bold text-white text-base">
                Grow<span className="text-[#9CD5FF]">Bridge</span>
              </span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-5">
              Empowering Indian MSMEs and startups with registration,
              certification, funding enablement, and digital growth consulting.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: "LinkedIn", icon: "in" },
                { label: "Instagram", icon: "ig" },
                { label: "Facebook", icon: "fb" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all text-[10px] font-bold"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Funding", href: "/funding" },
                { label: "Schemes", href: "/schemes" },
                { label: "Blogs", href: "/blogs" },
                { label: "Impact", href: "/impact" },
                { label: "Success Stories", href: "/success-stories" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/45 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Funding Schemes */}
          <div>
            <p className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Funding Schemes
            </p>
            <ul className="space-y-3">
              {[
                { label: "PMEGP Scheme", href: "/funding/pmegp" },
                { label: "PM MUDRA Yojana", href: "/funding/pm-mudra-yojana" },
                { label: "CGTMSE Guarantee", href: "/funding/cgtmse" },
                { label: "Startup India", href: "/funding/startup-india" },
                { label: "NAIF Scheme", href: "/funding/naif-scheme" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/45 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/funding"
                  className="text-[#9CD5FF] text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  View All Schemes <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <p className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Get in Touch
            </p>
            <ul className="space-y-3 text-white/45 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#9CD5FF]" />
                Ahmedabad, Gujarat — Pan India Service
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#9CD5FF]" />
                <a href="mailto:abhay@growbridge.org" className="hover:text-white transition-colors">
                  abhay@growbridge.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#9CD5FF]" />
                <a href="tel:+918487828752" className="hover:text-white transition-colors">
                  +91 84878 28752
                </a>
              </li>
            </ul>
            <div className="mt-5 space-y-2">
              <span className="block text-white/35 text-[10px]">
                Mon — Sat, 9:30 AM — 6:00 PM
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[10px] text-[#9CD5FF] bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-3 py-1 rounded-full hover:bg-[#9CD5FF]/20 transition-colors"
              >
                Start Your Journey <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © 2026 Grow Bridge Services. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms-conditions" },
              { label: "Refund Policy", href: "/refund-policy" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-white/35 text-xs hover:text-white/65 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
