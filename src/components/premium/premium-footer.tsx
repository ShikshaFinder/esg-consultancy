"use client"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const CTA_FEATURES = [
  "Free eligibility assessment",
  "Dedicated growth advisor",
  "No hidden charges",
  "Cancel anytime",
]

const FOOTER_LINKS = {
  Platform: [
    { label: "Government Schemes", href: "/services/grants" },
    { label: "Business Registration", href: "/services/business-registration" },
    { label: "Loans & Finance", href: "/services/loans" },
    { label: "Tax & Compliance", href: "/services/tax-compliance" },
    { label: "Certifications", href: "/services/certifications" },
    { label: "Growth Strategy", href: "/services/growth-strategy" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Resources: [
    { label: "MSME Schemes Guide", href: "/schemes" },
    { label: "Success Stories", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Partner Program", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
}

export default function PremiumFooter() {
  return (
    <>
      {/* ━━━ CTA SECTION ━━━ */}
      <section className="relative overflow-hidden bg-[#526D82] px-6 py-32">
        {/* Background effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.22] blur-[120px]"
            style={{ background: "radial-gradient(ellipse, #27374D 0%, #9DB2BF 38%, transparent 72%)" }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(#9DB2BF 1px, transparent 1px), linear-gradient(90deg, #9DB2BF 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <motion.span variants={fadeUp} custom={0}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#526D82]/50 bg-[#526D82]/25 px-5 py-2 text-sm font-medium text-[#DDE6ED] backdrop-blur-sm"
          >
            🚀 Ready to Accelerate?
          </motion.span>

          <motion.h2 variants={fadeUp} custom={0.1}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-[#DDE6ED] sm:text-5xl md:text-6xl"
          >
            Start Growing Your
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82]">
              Business Today
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={0.2}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#9DB2BF]/92"
          >
            Join 10,000+ Indian entrepreneurs who are scaling faster with GrowBridge.
            No credit card required — start with a free growth assessment.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} custom={0.3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-10 py-4.5 text-base font-semibold text-[#27374D] shadow-[0_8px_40px_rgba(157,178,191,0.22)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82] bg-[length:200%_100%]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
                <span className="relative">Get Free Growth Assessment</span>
                <ArrowRight className="relative w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/schemes"
                className="inline-flex items-center gap-2 rounded-full border border-[#526D82]/50 bg-[#526D82]/18 px-8 py-4.5 text-base font-medium text-[#DDE6ED] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#9DB2BF]/55 hover:bg-[#526D82]/30 hover:text-white"
              >
                Explore Schemes <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Feature pills */}
          <motion.div variants={fadeUp} custom={0.4}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {CTA_FEATURES.map((f) => (
              <span key={f} className="flex items-center gap-2 text-sm text-[#DDE6ED]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {f}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="relative border-t border-[#526D82] bg-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          {/* Top section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
            {/* Brand column — spans 2 */}
            <div className="col-span-2">
              <Link href="/premium" className="inline-flex items-center gap-2.5 mb-5">
                <svg viewBox="0 0 32 32" className="w-8 h-8">
                  <defs>
                    <linearGradient id="flogo" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#9DB2BF" />
                      <stop offset="100%" stopColor="#DDE6ED" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="12" height="12" rx="3" fill="url(#flogo)" />
                  <rect x="18" y="2" width="12" height="12" rx="3" fill="#526D82" opacity="0.7" />
                  <rect x="2" y="18" width="12" height="12" rx="3" fill="#526D82" opacity="0.7" />
                  <rect x="18" y="18" width="12" height="12" rx="3" fill="url(#flogo)" />
                </svg>
                <span className="text-[#DDE6ED] font-bold text-lg">
                  Grow<span className="text-[#9DB2BF]">Bridge</span>
                </span>
              </Link>
              <p className="text-[#9DB2BF]/70 text-sm leading-relaxed max-w-xs mb-6">
                India&apos;s trusted MSME growth platform. Government funding, business registration, compliance support & digital transformation.
              </p>
              <div className="space-y-2.5">
                <a href="mailto:abhay@growbridge.org" className="flex items-center gap-2.5 text-sm text-[#9DB2BF] hover:text-[#DDE6ED] transition-colors">
                  <Mail className="w-4 h-4" /> abhay@growbridge.org
                </a>
                <a href="tel:+918487828752" className="flex items-center gap-2.5 text-sm text-[#9DB2BF] hover:text-[#DDE6ED] transition-colors">
                  <Phone className="w-4 h-4" /> +91 84878 28752
                </a>
                <span className="flex items-center gap-2.5 text-sm text-[#9DB2BF]">
                  <MapPin className="w-4 h-4" /> Ahmedabad, Gujarat
                </span>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[#DDE6ED] font-semibold text-sm mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[#9DB2BF]/70 text-sm hover:text-[#DDE6ED] transition-colors duration-200">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#526D82] pt-8 sm:flex-row">
            <p className="text-sm text-[#526D82]">
              © {new Date().getFullYear()} GrowBridge. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#526D82] bg-[#27374D]/60 text-[#9DB2BF] transition-all duration-300 hover:border-[#9DB2BF]/20 hover:bg-[#526D82]/40 hover:text-[#DDE6ED]"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
