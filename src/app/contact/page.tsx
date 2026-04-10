"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Phone, Mail, MapPin, ArrowRight, Clock, Send,
  ChevronDown
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
    label: "Call Us",
    value: "+91 9426550580 / +91 9974064066",
    href: "tel:+919426550580",
    detail: "Mon–Sat, 9 AM – 6 PM IST",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "esgcatalyst@gmail.com",
    href: "mailto:esgcatalyst@gmail.com",
    detail: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Bhavnagar & Alang, Gujarat, India",
    href: "https://maps.google.com/?q=Bhavnagar+Gujarat+India",
    detail: "Ship Recycling Hub of India",
  },
]

const inquiryTypes = [
  "Compliance Assessment",
  "HKC / EU SRR",
  "GMB Compliance",
  "HSE Advisory",
  "Training Programs",
  "Retainer Engagement",
  "Other",
]

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`[ESG Catalyst Inquiry] ${inquiryType || "General"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:esgcatalyst@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#f8fafb]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,155,125,0.06)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.4]" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-4">Get In Touch</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
              Let&apos;s Start a<br />
              <span className="bg-linear-to-r from-[#009b7d] to-[#0284c7] bg-clip-text text-transparent">Conversation</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-[#64748b] text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need compliance support, HSE advisory, or training for your ship recycling operations — reach out and we&apos;ll respond within 24 hours.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-6 bg-white">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.icon === MapPin ? "_blank" : undefined}
                  rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                  variants={fadeUp}
                  custom={i}
                  className="p-8 rounded-xl bg-[#f8fafb] border border-[#e2e8f0] hover:border-[#009b7d]/30 hover:shadow-lg transition-all group text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#009b7d]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#009b7d]/15 transition-colors">
                    <method.icon className="w-7 h-7 text-[#009b7d]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">{method.label}</h3>
                  <p className="text-[#0f172a] font-medium text-sm mb-1">{method.value}</p>
                  <p className="text-[#94a3b8] text-xs flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" /> {method.detail}
                  </p>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Form */}
        <section className="py-24 px-6 bg-[#f4f7f9]">
          <AnimatedSection className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#009b7d] block mb-3">Send Inquiry</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Drop Us a Message</h2>
              <p className="text-[#64748b] max-w-lg mx-auto">Fill out the form below and we&apos;ll get back to you promptly.</p>
            </motion.div>

            {submitted ? (
              <motion.div variants={fadeUp} className="text-center py-16 rounded-xl bg-white border border-[#e2e8f0]">
                <div className="w-16 h-16 rounded-full bg-[#009b7d]/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-[#009b7d]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Thank You!</h3>
                <p className="text-[#64748b]">Your email client should have opened. Send the email to complete your inquiry.</p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-xl bg-white border border-[#e2e8f0] shadow-sm space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#0f172a] block mb-2">Full Name *</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#f8fafb] border border-[#e2e8f0] text-[#0f172a] placeholder-[#94a3b8] focus:border-[#009b7d] focus:ring-1 focus:ring-[#009b7d] outline-none transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#0f172a] block mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#f8fafb] border border-[#e2e8f0] text-[#0f172a] placeholder-[#94a3b8] focus:border-[#009b7d] focus:ring-1 focus:ring-[#009b7d] outline-none transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#0f172a] block mb-2">Company / Yard</label>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#f8fafb] border border-[#e2e8f0] text-[#0f172a] placeholder-[#94a3b8] focus:border-[#009b7d] focus:ring-1 focus:ring-[#009b7d] outline-none transition-colors text-sm"
                    placeholder="Company or yard name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#0f172a] block mb-2">Inquiry Type *</label>
                  <div className="relative">
                    <select
                      required
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#f8fafb] border border-[#e2e8f0] text-[#0f172a] focus:border-[#009b7d] focus:ring-1 focus:ring-[#009b7d] outline-none transition-colors text-sm appearance-none"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#0f172a] block mb-2">Message *</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#f8fafb] border border-[#e2e8f0] text-[#0f172a] placeholder-[#94a3b8] focus:border-[#009b7d] focus:ring-1 focus:ring-[#009b7d] outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-[#009b7d] to-[#0284c7] text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#009b7d]/20"
                >
                  Send Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </motion.form>
            )}
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  )
}
