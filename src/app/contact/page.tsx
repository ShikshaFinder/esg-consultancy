"use client"
import { motion, type Variants } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, ArrowRight, Building2, Globe } from "lucide-react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const contactMethods = [
  { icon: Phone, title: "Phone", value: "+91 84878 28752", sub: "Mon — Sat, 9 AM — 7 PM IST", href: "tel:+918487828752", color: "#355872" },
  { icon: Mail, title: "Email", value: "abhay@growbridge.org", sub: "Response within 2 hours", href: "mailto:abhay@growbridge.org", color: "#7AAACE" },
  { icon: MessageCircle, title: "WhatsApp", value: "+91 84878 28752", sub: "Quick chat support", href: "https://wa.me/918487828752", color: "#22c55e" },
  { icon: MapPin, title: "Office", value: "Ahmedabad, Gujarat, India", sub: "Serving clients Pan India", href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India", color: "#9CD5FF" },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          {/* 21st.dev BouncingBalls */}
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
            <BouncingBalls
              numBalls={45}
              colors={["#355872", "#7AAACE", "#9CD5FF"]}
              opacity={0.25}
              minRadius={0.2}
              maxRadius={1.2}
              speed={0.15}
              interactive={false}
            />
          </div>

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CD5FF] block mb-4">Contact Us</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Let&apos;s Build Your{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Success Story</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
              Ready to start your growth journey? Reach out to us through any channel — our experts respond within 30 minutes during business hours.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactMethods.map((c, i) => (
                <motion.a key={c.title} custom={i} variants={fadeUp} href={c.href} target={c.title === "Office" ? "_blank" : undefined} rel="noopener noreferrer"
                  className="group rounded-2xl border border-[#355872]/[0.08] bg-white p-6 text-center hover:border-[#355872]/20 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                    <c.icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <p className="text-[#0a1628] font-bold text-sm mb-0.5">{c.title}</p>
                  <p className="text-[#355872] text-sm font-medium group-hover:text-[#7AAACE] transition-colors">{c.value}</p>
                  <p className="text-[#0a1628]/35 text-[11px] mt-1">{c.sub}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Form Section */}
        <section className="py-16 px-6 bg-white">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Form */}
              <motion.div variants={fadeUp} className="lg:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-2">Send Us a Message</h2>
                <p className="text-[#0a1628]/50 text-sm mb-8">Fill in the form below and our team will get back to you within 30 minutes during business hours.</p>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/918487828752", "_blank") }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#0a1628]/70 text-xs font-medium mb-1.5 block">Full Name *</label>
                      <input type="text" required placeholder="Rahul Sharma"
                        className="w-full h-11 px-4 rounded-xl border border-[#355872]/10 bg-[#F7F8F0] text-[#0a1628] text-sm placeholder:text-[#0a1628]/25 focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-[#0a1628]/70 text-xs font-medium mb-1.5 block">Phone Number *</label>
                      <input type="tel" required placeholder="+91 9876543210"
                        className="w-full h-11 px-4 rounded-xl border border-[#355872]/10 bg-[#F7F8F0] text-[#0a1628] text-sm placeholder:text-[#0a1628]/25 focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#0a1628]/70 text-xs font-medium mb-1.5 block">Email Address</label>
                      <input type="email" placeholder="rahul@example.com"
                        className="w-full h-11 px-4 rounded-xl border border-[#355872]/10 bg-[#F7F8F0] text-[#0a1628] text-sm placeholder:text-[#0a1628]/25 focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-[#0a1628]/70 text-xs font-medium mb-1.5 block">Business Name</label>
                      <input type="text" placeholder="Your Business Pvt Ltd"
                        className="w-full h-11 px-4 rounded-xl border border-[#355872]/10 bg-[#F7F8F0] text-[#0a1628] text-sm placeholder:text-[#0a1628]/25 focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#0a1628]/70 text-xs font-medium mb-1.5 block">Service Interested In</label>
                    <select className="w-full h-11 px-4 rounded-xl border border-[#355872]/10 bg-[#F7F8F0] text-[#0a1628] text-sm focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all appearance-none">
                      <option value="">Select a service</option>
                      <option value="pmegp">PMEGP Loan</option>
                      <option value="mudra">MUDRA Yojana</option>
                      <option value="cgtmse">CGTMSE</option>
                      <option value="standup">Stand-Up India</option>
                      <option value="startup">Startup India Registration</option>
                      <option value="registration">Business Registration</option>
                      <option value="digital">Digital Marketing</option>
                      <option value="website">Website Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#0a1628]/70 text-xs font-medium mb-1.5 block">Your Message</label>
                    <textarea rows={4} placeholder="Tell us about your business, current stage, and how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-[#355872]/10 bg-[#F7F8F0] text-[#0a1628] text-sm placeholder:text-[#0a1628]/25 focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all resize-none" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <MetalButton variant="primary" type="submit">
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                      </span>
                    </MetalButton>
                    <a href="https://wa.me/918487828752" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-green-500/20 text-green-600 font-semibold text-sm hover:bg-green-50 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                    </a>
                  </div>
                </form>
              </motion.div>

              {/* Side */}
              <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-5">
                <div className="rounded-2xl border border-[#355872]/10 bg-[#F7F8F0] p-6">
                  <Calendar className="w-8 h-8 text-[#355872] mb-3" />
                  <h3 className="text-[#0a1628] font-bold text-lg mb-1">Free Consultation Call</h3>
                  <p className="text-[#0a1628]/50 text-sm mb-4">Schedule a 30-minute call with our funding experts to discuss eligibility, documentation, and timelines.</p>
                  <a href="tel:+918487828752"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#355872] hover:text-[#7AAACE] transition-colors"
                  >
                    Call Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="rounded-2xl border border-[#355872]/10 bg-[#F7F8F0] p-6">
                  <Clock className="w-8 h-8 text-[#7AAACE] mb-3" />
                  <h3 className="text-[#0a1628] font-bold text-lg mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { day: "Monday — Friday", time: "9:00 AM — 7:00 PM" },
                      { day: "Saturday", time: "10:00 AM — 5:00 PM" },
                      { day: "Sunday", time: "Closed" },
                    ].map(h => (
                      <div key={h.day} className="flex justify-between">
                        <span className="text-[#0a1628]/50">{h.day}</span>
                        <span className="text-[#0a1628] font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#355872]/10 bg-gradient-to-br from-[#355872]/5 to-[#7AAACE]/5 p-6 flex-1">
                  <Globe className="w-8 h-8 text-[#9CD5FF] mb-3" />
                  <h3 className="text-[#0a1628] font-bold text-lg mb-1">Serving Pan India</h3>
                  <p className="text-[#0a1628]/50 text-sm mb-3">Based in Ahmedabad, Gujarat, we serve clients across all Indian states. Most of our process is 100% digital.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Gujarat", "Maharashtra", "Rajasthan", "Karnataka", "Delhi", "UP", "18+ States"].map(s => (
                      <span key={s} className="text-[10px] font-medium text-[#355872] bg-white border border-[#355872]/10 px-2 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Map Embed */}
        <section className="h-[350px] bg-[#F7F8F0] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74862921!2d72.43965!3d23.0204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-[1.1] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
