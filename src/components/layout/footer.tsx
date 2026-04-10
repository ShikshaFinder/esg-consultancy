import Link from "next/link"
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F0] border-t border-[#1e3a5c]/20/6 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="GrowBridge" className="h-[180px] w-auto object-contain" />
            </div>
            <p className="text-black/55 text-xs leading-relaxed mb-5">
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
                  className="w-8 h-8 rounded-lg bg-white/5 border border-[#1e3a5c]/20/8 flex items-center justify-center text-black/55 hover:text-black hover:bg-white/10 transition-all text-[10px] font-bold"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-black font-semibold text-xs tracking-widest uppercase mb-5">
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
                    className="text-black/60 text-sm hover:text-black transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <p className="text-black font-semibold text-xs tracking-widest uppercase mb-5">
              Our Services
            </p>
            <ul className="space-y-3">
              {[
                { label: "Start Your Business", href: "/services#start-your-business" },
                { label: "Certifications", href: "/services#certifications" },
                { label: "Funding & Loans", href: "/services#funding" },
                { label: "Digital Marketing", href: "/services#digital-marketing" },
                { label: "Website Development", href: "/services#website-development" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-black/60 text-sm hover:text-black transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-black text-sm hover:text-black transition-colors inline-flex items-center gap-1"
                >
                  View All Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <p className="text-black font-semibold text-xs tracking-widest uppercase mb-5">
              Get in Touch
            </p>
            <ul className="space-y-3 text-black/60 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-black" />
                Sola Rd, Ahmedabad, Gujarat 380063
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0 text-black" />
                <a href="mailto:growbridgeinfo@gmail.com" className="hover:text-black transition-colors">
                  growbridgeinfo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0 text-black" />
                <a href="tel:+919998035607" className="hover:text-black transition-colors">
                  +91 99980 35607
                </a>
              </li>
            </ul>
            <div className="mt-5 space-y-2">
              <span className="block text-black/50 text-[10px]">
                Mon — Sat, 9:30 AM — 6:00 PM
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[10px] text-black bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-3 py-1 rounded-full hover:bg-[#9CD5FF]/20 transition-colors"
              >
                Start Your Journey <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e3a5c]/20/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-black/50 text-xs">
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
                className="text-black/50 text-xs hover:text-black/75 transition-colors"
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
