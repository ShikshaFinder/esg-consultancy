"use client"
import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const services = [
  { icon: "📱", title: "CRM Software", sub: "CUSTOMER MANAGEMENT", desc: "Streamline customer relationships with custom CRM solutions. Track leads and automate sales.", tags: ["ZOHO CRM", "CUSTOM SOLUTIONS", "API"], stat: "5x", statLabel: "MORE LEADS", color: "#355872" },
  { icon: "📈", title: "Digital Marketing", sub: "360° ONLINE PRESENCE", desc: "Complete digital marketing from SEO to paid ads. Drive traffic and generate leads.", tags: ["GOOGLE ADS", "META BUSINESS", "SEO"], stat: "40%", statLabel: "MORE TRAFFIC", color: "#7AAACE" },
  { icon: "✉️", title: "Email Marketing", sub: "AUTOMATED CAMPAIGNS", desc: "Design, automate, and track email campaigns that convert. Build lasting relationships.", tags: ["MAILCHIMP", "SENDGRID", "SMTP"], stat: "40%", statLabel: "OPEN RATE", color: "#22c55e" },
  { icon: "💬", title: "WhatsApp Marketing", sub: "DIRECT REACH", desc: "Engage customers on WhatsApp with bulk messaging, chatbots, and automated responses.", tags: ["WHATSAPP API", "CHATBOTS", "ANALYTICS"], stat: "90%", statLabel: "OPEN RATE", color: "#25d366" },
  { icon: "🌐", title: "Website Development", sub: "MODERN & RESPONSIVE", desc: "Professional websites and web apps built with latest technologies. Fast and beautiful.", tags: ["REACT/NEXT.JS", "WORDPRESS", "SHOPIFY"], stat: "<3s", statLabel: "LOAD TIME", color: "#9CD5FF" },
  { icon: "📲", title: "Mobile App Development", sub: "iOS & ANDROID", desc: "Native and cross-platform mobile apps with seamless UX across all devices.", tags: ["REACT NATIVE", "FLUTTER", "NATIVE"], stat: "4.8★", statLabel: "AVG RATING", color: "#F7F8F0" },
  { icon: "🔍", title: "SEO Optimization", sub: "RANK HIGHER", desc: "Comprehensive SEO to improve search rankings. On-page, off-page, and technical.", tags: ["SEARCH CONSOLE", "AHREFS", "SEMRUSH"], stat: "Top 3", statLabel: "RANKINGS", color: "#eab308" },
  { icon: "📢", title: "Social Media Marketing", sub: "BUILD YOUR BRAND", desc: "Grow your social media with engaging content, influencer partnerships, and targeted ads.", tags: ["INSTAGRAM", "LINKEDIN", "FACEBOOK"], stat: "10x", statLabel: "ENGAGEMENT", color: "#ec4899" },
]

export default function DigitalServices() {
  return (
    <section className="py-24 px-6 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,170,206,0.04)_0%,transparent_60%)] pointer-events-none" />

      <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.04 }} variants={stagger}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CD5FF] block mb-3">Digital Transformation</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Scale Your Business{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Digitally</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-base mt-3 max-w-xl">
              End-to-end digital solutions designed to improve brand visibility and customer acquisition for MSMEs.
            </motion.p>
          </div>
          <motion.span variants={fadeUp} className="flex items-center gap-2 text-sm text-white/50">
            <span className="text-2xl">⚡</span>
            <span><span className="text-[#9CD5FF] font-bold">3x</span> Faster Sales Growth</span>
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((ds, i) => (
            <motion.div key={ds.title} custom={i} variants={fadeUp}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 flex flex-col gap-3 cursor-pointer group transition-all duration-300 relative overflow-hidden"
              whileHover={{ y: -4, borderColor: `${ds.color}35` }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl border" style={{ backgroundColor: `${ds.color}12`, borderColor: `${ds.color}25` }}>{ds.icon}</div>
                <div className="text-right">
                  <p className="font-black text-lg leading-none" style={{ color: ds.color }}>{ds.stat}</p>
                  <p className="text-white/35 text-[9px] uppercase tracking-wider">{ds.statLabel}</p>
                </div>
              </div>
              <span className="text-[9px] font-bold tracking-widest" style={{ color: ds.color }}>{ds.sub}</span>
              <h3 className="text-white font-bold text-sm">{ds.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed line-clamp-3">{ds.desc}</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {ds.tags.map((t) => (
                  <span key={t} className="text-[8px] font-semibold text-white/50 bg-white/[0.05] px-1.5 py-0.5 rounded border border-white/[0.06]">{t}</span>
                ))}
              </div>
              <button className="flex items-center gap-1 text-xs font-semibold transition-colors group/btn cursor-pointer pt-2 border-t border-white/[0.05]" style={{ color: ds.color }}>
                Learn More <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: `${ds.color}10` }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
