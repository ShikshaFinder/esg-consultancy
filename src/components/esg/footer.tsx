import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight, Anchor } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Ship Recycling Compliance", href: "/services#compliance" },
    { label: "High-Risk Operations", href: "/services#high-risk" },
    { label: "HSE Management", href: "/services#hse" },
    { label: "Training & Competency", href: "/services#training" },
    { label: "Documentation", href: "/services#documentation" },
    { label: "Retainer Support", href: "/services#retainer" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b]">
      {/* CTA Banner */}
      <div className="border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for Compliance Assessment?</h3>
            <p className="text-[#94a3b8] max-w-lg">Get structured compliance support aligned with HKC, GMB, and EU SRR requirements.</p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#00d4aa] to-[#0ea5e9] text-[#0f172a] font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Schedule a Discussion <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#0ea5e9] flex items-center justify-center">
                <Anchor className="w-5 h-5 text-[#0f172a]" />
              </div>
              <div>
                <span className="font-bold text-base text-white">ESG Catalyst</span>
                <span className="block text-[9px] tracking-[0.2em] uppercase text-[#00d4aa]/70">Ship Recycling Compliance</span>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
              Built on real ship recycling experience at Alang. Focused on structured compliance, operational control, and audit readiness.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="text-[#00d4aa] font-semibold text-xs tracking-[0.15em] uppercase mb-5">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#94a3b8] text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#00d4aa] font-semibold text-xs tracking-[0.15em] uppercase mb-5">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#94a3b8] text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#00d4aa] font-semibold text-xs tracking-[0.15em] uppercase mb-5">Get in Touch</p>
            <div className="space-y-4 text-sm text-[#94a3b8]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00d4aa] mt-0.5 shrink-0" />
                <span>Bhavnagar / Alang, Gujarat, India</span>
              </div>
              <a href="tel:+919426550580" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#00d4aa] shrink-0" />
                <span>+91 9426550580</span>
              </a>
              <a href="tel:+919974064066" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#00d4aa] shrink-0" />
                <span>+91 9974064066</span>
              </a>
              <a href="mailto:esgcatalyst@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#00d4aa] shrink-0" />
                <span>esgcatalyst@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Brand essence */}
        <div className="border-t border-[#1e293b] pt-8 mb-8">
          <p className="text-center text-sm text-[#94a3b8] max-w-3xl mx-auto leading-relaxed italic">
            &ldquo;Delivering practical, reliable, and system-driven solutions aligned with industry requirements.&rdquo;
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1e293b] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]/60">
          <span>&copy; {new Date().getFullYear()} ESG Catalyst. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
