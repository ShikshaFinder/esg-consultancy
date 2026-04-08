"use client"
import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, type Variants } from "framer-motion"
import {
  Users, Zap, Mail, MessageCircle, Layout, Smartphone,
  Search, Share2, ArrowRight, Monitor, CheckCircle2,
} from "lucide-react"

/* ─── animation variants ─── */
const blurFade: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  show: (d: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

/* ─── digital services data ─── */
const digitalServices = [
  {
    title: "CRM Software",
    subtitle: "CUSTOMER MANAGEMENT",
    stat: "3x",
    statLabel: "FASTER SALES",
    desc: "Streamline customer relationships with custom CRM solutions. Track leads, automate sales pipeline, and grow revenue.",
    features: ["Lead tracking & automation", "Sales pipeline management", "Customer analytics dashboard"],
    tags: ["ZOHO CRM", "CUSTOM SOLUTIONS", "INTEGRATION API"],
    Icon: Users,
    accent: "#1e3a5c",
    href: "/services",
  },
  {
    title: "Digital Marketing",
    subtitle: "360° ONLINE PRESENCE",
    stat: "5x",
    statLabel: "MORE LEADS",
    desc: "Complete digital marketing solutions from SEO to paid ads. Drive traffic, generate leads, and grow your brand.",
    features: ["SEO & content marketing", "Google/Facebook ads", "Social media management"],
    tags: ["GOOGLE ADS", "META BUSINESS", "SEO TOOLS"],
    Icon: Zap,
    accent: "#1e3a5c",
    href: "/services",
  },
  {
    title: "Email Marketing",
    subtitle: "AUTOMATED CAMPAIGNS",
    stat: "40%",
    statLabel: "OPEN RATE",
    desc: "Design, automate, and track email campaigns that convert. Build customer relationships with targeted outreach.",
    features: ["Automated email sequences", "Template design & testing", "Performance analytics"],
    tags: ["MAILCHIMP", "SENDGRID", "CUSTOM SMTP"],
    Icon: Mail,
    accent: "#1e3a5c",
    href: "/services",
  },
  {
    title: "WhatsApp Marketing",
    subtitle: "DIRECT CUSTOMER REACH",
    stat: "98%",
    statLabel: "OPEN RATE",
    desc: "Engage customers on WhatsApp with bulk messaging, chatbots, and automated responses.",
    features: ["Bulk messaging campaigns", "AI chatbot integration", "Click-to-WhatsApp ads"],
    tags: ["WHATSAPP API", "CHATBOTS", "ANALYTICS"],
    Icon: MessageCircle,
    accent: "#1e3a5c",
    href: "/services",
  },
  {
    title: "Website Development",
    subtitle: "MODERN & RESPONSIVE",
    stat: "<3s",
    statLabel: "LOAD TIME",
    desc: "Professional websites and web applications built with latest technologies. Fast, secure, and responsive.",
    features: ["Custom web development", "E-commerce platforms", "Mobile-responsive design"],
    tags: ["REACT/NEXT.JS", "WORDPRESS", "SHOPIFY"],
    Icon: Layout,
    accent: "#1e3a5c",
    href: "/services",
  },
  {
    title: "Mobile App Development",
    subtitle: "IOS & ANDROID",
    stat: "4.8★",
    statLabel: "AVG RATING",
    desc: "Native and cross-platform mobile apps for your business. Seamless user experience across all devices.",
    features: ["Native & hybrid apps", "App store optimization", "Push notification system"],
    tags: ["REACT NATIVE", "FLUTTER", "NATIVE"],
    Icon: Smartphone,
    accent: "#1e3a5c",
    href: "/services",
  },
  {
    title: "SEO Optimization",
    subtitle: "RANK HIGHER ON GOOGLE",
    stat: "Top 3",
    statLabel: "RANKINGS",
    desc: "Comprehensive SEO services to improve search rankings. On-page, off-page, and technical SEO expertise.",
    features: ["Keyword research & strategy", "On-page optimization", "Link building & content"],
    tags: ["SEARCH CONSOLE", "AHREFS", "SEMRUSH"],
    Icon: Search,
    accent: "#1e3a5c",
    href: "/services",
  },
  {
    title: "Social Media Marketing",
    subtitle: "BUILD YOUR BRAND",
    stat: "10x",
    statLabel: "ENGAGEMENT",
    desc: "Grow your social media presence with engaging content, influencer partnerships, and targeted campaigns.",
    features: ["Content creation & posting", "Influencer collaborations", "Paid social campaigns"],
    tags: ["INSTAGRAM", "LINKEDIN", "FACEBOOK"],
    Icon: Share2,
    accent: "#1e3a5c",
    href: "/services",
  },
]

export default function PremiumDigital() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#526D82]/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span
            variants={blurFade} custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#526D82]/15 px-4 py-1.5 text-xs font-bold text-black uppercase tracking-widest mb-4 backdrop-blur-sm"
          >
            <Monitor className="w-3.5 h-3.5" />
            Digital Transformation
          </motion.span>
          <motion.h2 variants={blurFade} custom={0.1} className="text-3xl md:text-5xl font-bold text-black mb-4">
            Scale Your Business{" "}
            <span className="text-black" style={{ backgroundImage: "linear-gradient(135deg, #EBF4FF, #2E7DD9)" }}>
              Digitally
            </span>
          </motion.h2>
          <motion.p variants={blurFade} custom={0.2} className="text-black/80 max-w-xl mx-auto">
            End-to-end digital solutions designed to improve brand visibility and customer acquisition for MSMEs.
          </motion.p>
        </motion.div>

        {/* ── 4×2 Grid ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {digitalServices.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={blurFade}
              custom={0.1 + i * 0.05}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group rounded-2xl border border-white/25 blue-card p-6 flex flex-col
                         hover:border-[#1B4F8A]/80 hover:shadow-xl hover:shadow-[#1B4F8A]/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9DB2BF]/0 to-[#526D82]/0 group-hover:from-[#9DB2BF]/5 group-hover:to-[#526D82]/8 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Top: Icon + Stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-white/20 group-hover:bg-white/35 transition-colors">
                    <svc.Icon className="w-5 h-5 text-black group-hover:text-black transition-colors" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-black leading-none mb-0.5">{svc.stat}</p>
                    <p className="text-[10px] font-bold text-black uppercase tracking-widest">{svc.statLabel}</p>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-black leading-tight mb-0.5">{svc.title}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black mb-3">{svc.subtitle}</p>

                {/* Description */}
                <p className="text-xs text-black/70 leading-relaxed mb-5 font-medium">{svc.desc}</p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-black/80 leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Spacer */}
                <div className="flex-grow" />

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#526D82]/20 text-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href={svc.href}
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold
                             bg-gradient-to-r from-[#1B4F8A] to-[#2E7DD9] text-black
                             hover:from-[#9DB2BF] hover:to-[#526D82] transition-all duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
