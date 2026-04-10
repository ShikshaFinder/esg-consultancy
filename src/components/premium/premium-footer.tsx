"use client"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react"

const blurFadeUp: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 24 },
  show: (d: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const CTA_FEATURES = [
  "Free eligibility assessment",
  "95% scheme approval rate",
  "No hidden charges",
  "Results in 7–15 days",
]

const FOOTER_LINKS = {
  Services: [
    { label: "Start Your Business", href: "/services/private-limited" },
    { label: "Government Grants", href: "/services/government-grants" },
    { label: "MSME Loans", href: "/services/msme-loans" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Certifications", href: "/services/iso-certification" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Schemes: [
    { label: "PMEGP Subsidy", href: "/schemes/pmegp" },
    { label: "MUDRA Loans", href: "/schemes/mudra" },
    { label: "Startup India Seed Fund", href: "/schemes/seed-fund" },
    { label: "CGTMSE", href: "/schemes/cgtmse" },
    { label: "Stand-Up India", href: "/schemes/stand-up-india" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
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
            style={{ background: "radial-gradient(ellipse, #FFF8F0 0%, #9DB2BF 38%, transparent 72%)" }}
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
          <motion.span variants={blurFadeUp} custom={0}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#526D82]/25 px-5 py-2 text-sm font-medium text-black backdrop-blur-sm"
          >
            🚀 Ready to Accelerate?
          </motion.span>

          <motion.h2 variants={blurFadeUp} custom={0.1}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl md:text-6xl"
          >
            Your Growth Journey
            <br />
            <span className="text-black bg-linear-to-r from-[#1B4F8A] via-[#2E7DD9] to-[#1B4F8A]">
              Starts Here
            </span>
          </motion.h2>

          <motion.p variants={blurFadeUp} custom={0.2}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/92"
          >
            Join 500+ Indian entrepreneurs who scaled their business with GrowBridge.
            Free eligibility check — know your funding options in under 5 minutes.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={blurFadeUp} custom={0.3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-10 py-4.5 text-base font-semibold text-black shadow-[0_8px_40px_rgba(30,58,92,0.22)]"
              >
                <div className="absolute inset-0 bg-linear-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82] bg-[length:200%_100%]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3),transparent_70%)]" />
                <span className="relative">Get Free Growth Assessment</span>
                <ArrowRight className="relative w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/schemes"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#526D82]/18 px-8 py-4.5 text-base font-medium text-black shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#9DB2BF]/55 hover:bg-[#526D82]/30 hover:text-black"
              >
                Explore Schemes <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Feature pills */}
          <motion.div variants={blurFadeUp} custom={0.4}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {CTA_FEATURES.map((f) => (
              <span key={f} className="flex items-center gap-2 text-sm text-black">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {f}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="relative border-t border-white/25 bg-[#FFF8F0]">
        {/* Subtle top glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#9DB2BF]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          {/* Top section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
            {/* Brand column — spans 2 */}
            <div className="col-span-2">
              <Link href="/premium" className="inline-flex items-center mb-5">
                <img src="/logo.png" alt="GrowBridge" className="h-[180px] w-auto object-contain" />
              </Link>
              <p className="text-black/70 text-sm leading-relaxed max-w-xs mb-6">
                India&apos;s complete MSME growth ecosystem. Government funding, business registration, compliance, certifications & digital transformation — all under one roof.
              </p>
              <div className="space-y-2.5">
                <a href="mailto:growbridgeinfo@gmail.com" className="flex items-center gap-2.5 text-sm text-black hover:text-black transition-colors">
                  <Mail className="w-4 h-4" /> growbridgeinfo@gmail.com
                </a>
                <a href="tel:+919998035607" className="flex items-center gap-2.5 text-sm text-black hover:text-black transition-colors">
                  <Phone className="w-4 h-4" /> +91 99980 35607
                </a>
                <span className="flex items-center gap-2.5 text-sm text-black">
                  <MapPin className="w-4 h-4" /> 630, Solaris Business Hub, Sola Rd, Ahmedabad 380063
                </span>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-black font-semibold text-sm mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="group/link relative text-black/70 text-sm hover:text-black transition-colors duration-200 inline-block">
                        {l.label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#9DB2BF] group-hover/link:w-full transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#526D82] pt-8 sm:flex-row">
            <p className="text-sm text-black">
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
                  whileHover={{ scale: 1.2, rotate: 8, boxShadow: "0 0 15px rgba(30,58,92,0.3)" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#526D82] blue-card text-black transition-all duration-300 hover:border-[#9DB2BF]/30 hover:bg-[#526D82]/40 hover:text-black"
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
