"use client"
import { motion, type Variants } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const contactCards = [
  { icon: Phone, title: "Call Us", value: "+91 99980 35607", sub: "Mon — Sat, 9 AM — 7 PM IST", href: "tel:+919998035607", color: "#355872" },
  { icon: Mail, title: "Email Us", value: "growbridgeinfo@gmail.com", sub: "We reply within 2 hours", href: "mailto:growbridgeinfo@gmail.com", color: "#7AAACE" },
  { icon: MapPin, title: "Visit Us", value: "Sola Rd, Ahmedabad 380063", sub: "India — Serving Pan India", href: "https://maps.google.com/?q=Solaris+Business+Hub+Sola+Road+Ahmedabad", color: "#9CD5FF" },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#060e1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(53,88,114,0.06)_0%,transparent_60%)] pointer-events-none" />

      <motion.div className="max-w-7xl mx-auto relative z-10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Get In Touch</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Let&apos;s Start Your{" "}
            <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Growth Journey</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-black/50 text-base mt-3 max-w-lg mx-auto">
            Book a free consultation with our experts and discover which government schemes you&apos;re eligible for.
          </motion.p>
        </div>

        {/* Contact cards */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {contactCards.map((c, i) => (
            <a key={c.title} href={c.href} target={c.title === "Visit Us" ? "_blank" : undefined} rel="noopener noreferrer"
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex items-start gap-4 hover:border-white/15 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                <c.icon className="w-5 h-5" style={{ color: c.color }} />
              </div>
              <div>
                <p className="text-black font-semibold text-sm mb-0.5">{c.title}</p>
                <p className="text-black/80 text-sm group-hover:text-black transition-colors">{c.value}</p>
                <p className="text-black/30 text-[11px] mt-1">{c.sub}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form + side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form */}
          <motion.div variants={fadeUp} className="lg:col-span-3 rounded-2xl border border-white/8 bg-white/[0.03] p-8">
            <h3 className="text-black font-bold text-xl mb-1">Request a Callback</h3>
            <p className="text-black/40 text-sm mb-6">Fill in your details and our experts will reach out within 30 minutes during business hours.</p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/919998035607", "_blank") }}>
              <div>
                <label className="text-black/60 text-xs font-medium mb-1.5 block">Full Name *</label>
                <input type="text" required placeholder="Rahul Sharma"
                  className="w-full h-11 px-4 rounded-xl border border-white/8 bg-white/4 text-black text-sm placeholder:text-black/20 focus:border-[#355872]/40 focus:ring-1 focus:ring-[#355872]/30 outline-none transition-all" />
              </div>
              <div>
                <label className="text-black/60 text-xs font-medium mb-1.5 block">Phone Number *</label>
                <input type="tel" required placeholder="+91 9876543210"
                  className="w-full h-11 px-4 rounded-xl border border-white/8 bg-white/4 text-black text-sm placeholder:text-black/20 focus:border-[#355872]/40 focus:ring-1 focus:ring-[#355872]/30 outline-none transition-all" />
              </div>
              <div>
                <label className="text-black/60 text-xs font-medium mb-1.5 block">Email</label>
                <input type="email" placeholder="rahul@example.com"
                  className="w-full h-11 px-4 rounded-xl border border-white/8 bg-white/4 text-black text-sm placeholder:text-black/20 focus:border-[#355872]/40 focus:ring-1 focus:ring-[#355872]/30 outline-none transition-all" />
              </div>
              <div>
                <label className="text-black/60 text-xs font-medium mb-1.5 block">Interested Service</label>
                <select className="w-full h-11 px-4 rounded-xl border border-white/8 bg-white/4 text-black text-sm focus:border-[#355872]/40 focus:ring-1 focus:ring-[#355872]/30 outline-none transition-all appearance-none">
                  <option value="" className="bg-[#0a1628]">Select a service</option>
                  <option value="pmegp" className="bg-[#0a1628]">PMEGP Loan</option>
                  <option value="mudra" className="bg-[#0a1628]">MUDRA Yojana</option>
                  <option value="cgtmse" className="bg-[#0a1628]">CGTMSE</option>
                  <option value="startup" className="bg-[#0a1628]">Startup India</option>
                  <option value="standup" className="bg-[#0a1628]">Stand-Up India</option>
                  <option value="digital" className="bg-[#0a1628]">Digital Services</option>
                  <option value="registration" className="bg-[#0a1628]">Business Registration</option>
                  <option value="other" className="bg-[#0a1628]">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-black/60 text-xs font-medium mb-1.5 block">Brief Description</label>
                <textarea rows={3} placeholder="Tell us about your business and what you need help with..."
                  className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/4 text-black text-sm placeholder:text-black/20 focus:border-[#355872]/40 focus:ring-1 focus:ring-[#355872]/30 outline-none transition-all resize-none" />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
                <MetalButton variant="primary" type="submit">
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> Send Request
                  </span>
                </MetalButton>
                <a href="https://wa.me/919998035607" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-green-500/30 text-green-400 font-semibold text-sm hover:bg-green-500/10 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Instead
                </a>
              </div>
            </form>
          </motion.div>

          {/* Side info */}
          <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-5">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-black" />
                <h4 className="text-black font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday — Friday", time: "9:00 AM — 7:00 PM" },
                  { day: "Saturday", time: "10:00 AM — 5:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map(h => (
                  <div key={h.day} className="flex justify-between">
                    <span className="text-black/50">{h.day}</span>
                    <span className="text-black/80">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#355872]/20 bg-linear-to-br from-[#355872]/10 to-[#7AAACE]/10 p-6 flex-1">
              <Calendar className="w-8 h-8 text-black mb-3" />
              <h4 className="text-black font-bold text-lg mb-1">Free Consultation</h4>
              <p className="text-black/50 text-sm mb-5">Schedule a 30-minute free call with our funding experts to discuss your business goals.</p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black transition-colors"
              >
                Book a Slot <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-[#060e1a] bg-linear-to-br from-[#355872] to-[#7AAACE] -ml-2 first:ml-0 flex items-center justify-center text-[8px] text-black font-bold">
                    {["RK", "PS", "AP", "VK", "SN"][i]}
                  </div>
                ))}
                <span className="text-black/40 text-xs ml-2">+500 happy clients</span>
              </div>
              <p className="text-black/60 text-sm">Trusted by businesses across 18+ states in India</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
