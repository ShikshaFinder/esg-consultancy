"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Mail, Phone, MapPin, Send, ArrowRight, MessageCircle, Anchor
} from "lucide-react"
import Navbar from "@/components/esg/navbar"
import Footer from "@/components/esg/footer"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 }
  }),
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "show" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  )
}

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9426550580",
    sub: "+91 9974064066",
    href: "tel:+919426550580",
  },
  {
    icon: Mail,
    title: "Email",
    value: "esgcatalyst@gmail.com",
    sub: "Response within 24 hours",
    href: "mailto:esgcatalyst@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bhavnagar / Alang",
    sub: "Gujarat, India",
    href: "https://maps.google.com/?q=Alang+Gujarat",
  },
]

const inquiryTypes = [
  "Compliance Assessment",
  "HKC / EU SRR Readiness",
  "GMB Inspection Support",
  "HSE System Implementation",
  "Training & Competency",
  "Retainer Support",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[ESG Catalyst Inquiry] ${formData.inquiryType || "General"} - ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:esgcatalyst@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a1628]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,170,0.06)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4aa] block mb-4">Contact</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Request a<br />
              <span className="bg-gradient-to-r from-[#00d4aa] to-[#0ea5e9] bg-clip-text text-transparent">Consultation</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed">
              Connect with ESG Catalyst for compliance assessment, safety system implementation, or ongoing retainer-based support.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-6 border-b border-white/[0.06]">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.title === "Location" ? "_blank" : undefined}
                  rel={method.title === "Location" ? "noopener noreferrer" : undefined}
                  variants={fadeUp}
                  custom={i}
                  className="group flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00d4aa]/30 hover:bg-white/[0.04] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00d4aa]/20 transition-colors">
                    <method.icon className="w-6 h-6 text-[#00d4aa]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#94a3b8] mb-1">{method.title}</p>
                    <p className="text-white font-medium">{method.value}</p>
                    <p className="text-[#94a3b8] text-sm mt-0.5">{method.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Form Section */}
        <section id="discussion" className="py-24 px-6">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Left info */}
              <div className="lg:col-span-2">
                <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4aa] block mb-3">Get in Touch</motion.span>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold text-white mb-6">
                  Tell Us About Your Requirements
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-[#94a3b8] leading-relaxed mb-8">
                  Whether you need a full compliance implementation, targeted high-risk operations support, or retainer-based monitoring — we&apos;re here to help.
                </motion.p>

                <motion.div variants={fadeUp} custom={3} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-4">
                    <Anchor className="w-6 h-6 text-[#00d4aa]" />
                    <h3 className="text-white font-semibold">ESG Catalyst</h3>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    Bhavnagar / Alang, Gujarat<br />
                    India
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2 text-sm text-[#94a3b8]">
                    <a href="tel:+919426550580" className="flex items-center gap-2 hover:text-[#00d4aa] transition-colors">
                      <Phone className="w-4 h-4" /> +91 9426550580
                    </a>
                    <a href="tel:+919974064066" className="flex items-center gap-2 hover:text-[#00d4aa] transition-colors">
                      <Phone className="w-4 h-4" /> +91 9974064066
                    </a>
                    <a href="mailto:esgcatalyst@gmail.com" className="flex items-center gap-2 hover:text-[#00d4aa] transition-colors">
                      <Mail className="w-4 h-4" /> esgcatalyst@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Form */}
              <motion.div variants={fadeUp} custom={2} className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#94a3b8] mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-[#00d4aa]/50 focus:ring-1 focus:ring-[#00d4aa]/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-[#00d4aa]/50 focus:ring-1 focus:ring-[#00d4aa]/30 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#94a3b8] mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-[#00d4aa]/50 focus:ring-1 focus:ring-[#00d4aa]/30 transition-all"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#94a3b8] mb-2">Company / Yard</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-[#00d4aa]/50 focus:ring-1 focus:ring-[#00d4aa]/30 transition-all"
                        placeholder="Organization name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white focus:outline-none focus:border-[#00d4aa]/50 focus:ring-1 focus:ring-[#00d4aa]/30 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#0a1628]">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#0a1628]">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-[#00d4aa]/50 focus:ring-1 focus:ring-[#00d4aa]/30 transition-all resize-none"
                      placeholder="Describe your compliance or safety requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#00d4aa] to-[#0ea5e9] text-[#0a1628] font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}
