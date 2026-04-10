"use client"
import { motion, type Variants } from "framer-motion"
import { Download, Mail, Phone, User, CheckCircle2, ArrowRight, Shield, FileText, BarChart3, Building2, Lightbulb, Award, IndianRupee, Users, BookOpen, Briefcase } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
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

const brochureHighlights = [
  { icon: IndianRupee, title: "Funding & Schemes", desc: "Complete guide to PMEGP, MUDRA, CGTMSE, Stand-Up India, and 30+ government schemes with eligibility criteria." },
  { icon: FileText, title: "Business Registration", desc: "Step-by-step overview of Pvt Ltd, LLP, OPC, MSME Udyam, Startup India, and GeM registrations." },
  { icon: Award, title: "Certifications & IP", desc: "ISO, FSSAI, ZED, BIS, Trademark, and Patent filing processes explained with timelines." },
  { icon: BarChart3, title: "Growth Strategy", desc: "Digital marketing, brand positioning, DPR preparation, and investor pitch deck services." },
  { icon: Shield, title: "Tax & Compliance", desc: "GST, Income Tax, 80-IAC exemptions, 12A & 80G registrations, and annual compliance." },
  { icon: Briefcase, title: "Legal & CIBIL", desc: "Contract drafting, IP protection, CIBIL error correction, and credit score improvement." },
]

const trustSignals = [
  { value: "500+", label: "Businesses Funded" },
  { value: "₹110Cr+", label: "Funding Secured" },
  { value: "95%", label: "Success Rate" },
  { value: "28+", label: "States Covered" },
]

const servicesInBrochure = [
  "MSME & Startup Funding Support",
  "Business Registration (Pvt Ltd, LLP, OPC)",
  "MSME Udyam & GST Registration",
  "Startup India Certification",
  "ISO, FSSAI, ZED Certifications",
  "Trademark & Patent Filing",
  "PMEGP, MUDRA, CGTMSE Schemes",
  "Stand-Up India & State Schemes",
  "Digital Marketing & SEO",
  "Brand Identity & Positioning",
  "Detailed Project Report (DPR)",
  "Tax Planning & Compliance",
  "Legal & Corporate Advisory",
  "CIBIL Score Improvement",
  "Investor Pitch Decks",
  "GeM & NGO Registration",
]

export default function BrochurePage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In production, this would send data to an API and trigger the download
    window.open("https://wa.me/919998035607?text=Hi%2C%20I%27d%20like%20to%20download%20the%20Grow%20Bridge%20brochure.%20Name%3A%20" + encodeURIComponent(formData.name), "_blank")
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(156,213,255,0.06)_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-25">
            <BouncingBalls
              numBalls={40}
              colors={["#355872", "#7AAACE", "#9CD5FF"]}
              opacity={0.2}
              minRadius={0.2}
              maxRadius={1}
              speed={0.12}
              interactive={false}
            />
          </div>

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-4">📄 Company Brochure</motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Download Our{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Business Solutions</span>{" "}
              Brochure
            </motion.h1>
            <motion.p variants={fadeUp} className="text-black/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore Grow Bridge&apos;s complete range of MSME funding, government scheme assistance, business registration, certifications, and growth strategy services — all in one comprehensive guide.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              {trustSignals.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-black text-black">{s.value}</p>
                  <p className="text-[10px] text-black/35 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Form + Info Section */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Form */}
              <motion.div variants={fadeUp} className="lg:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Get Your Free Brochure</h2>
                <p className="text-black/50 text-sm mb-8">Fill in your details below to receive instant access to our comprehensive business solutions brochure.</p>

                {!submitted ? (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="text-black/70 text-xs font-medium mb-1.5 block">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/25" />
                        <input type="text" required placeholder="Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#355872]/10 bg-white text-black text-sm placeholder:text-black/25 focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-black/70 text-xs font-medium mb-1.5 block">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/25" />
                          <input type="email" required placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#355872]/10 bg-white text-black text-sm placeholder:text-black/25 focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="text-black/70 text-xs font-medium mb-1.5 block">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/25" />
                          <input type="tel" required placeholder="+91 9876543210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#355872]/10 bg-white text-black text-sm placeholder:text-black/25 focus:border-[#355872]/30 focus:ring-2 focus:ring-[#355872]/10 outline-none transition-all" />
                        </div>
                      </div>
                    </div>
                    <MetalButton variant="primary" type="submit" className="w-full !h-12">
                      <span className="flex items-center gap-2 justify-center">
                        <Download className="w-4 h-4" /> Download Brochure
                      </span>
                    </MetalButton>
                    <p className="text-black/30 text-[11px] text-center">By submitting, you agree to receive communications from Grow Bridge. We respect your privacy.</p>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-black font-bold text-xl mb-2">Thank You, {formData.name}!</h3>
                    <p className="text-black/50 text-sm mb-4">Your brochure download is being prepared. Our team will also reach out to assist you with any questions.</p>
                    <a href="https://wa.me/919998035607" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black transition-colors"
                    >
                      Chat with us on WhatsApp <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </motion.div>

              {/* Side Info */}
              <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-5">
                <div className="rounded-2xl border border-[#355872]/10 bg-white p-6">
                  <BookOpen className="w-8 h-8 text-black mb-3" />
                  <h3 className="text-black font-bold text-lg mb-1">What&apos;s Inside?</h3>
                  <p className="text-black/50 text-sm mb-4">A complete overview of our services, success stories, pricing guidance, and step-by-step process for each service.</p>
                  <div className="space-y-2">
                    {["Service Portfolio", "Funding Roadmap", "Success Case Studies", "Process & Timelines"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                        <span className="text-black/60 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#355872]/10 bg-white p-6">
                  <Shield className="w-8 h-8 text-black mb-3" />
                  <h3 className="text-black font-bold text-lg mb-1">Why Grow Bridge?</h3>
                  <ul className="space-y-2 mt-3">
                    {[
                      "500+ businesses successfully funded",
                      "95% approval success rate",
                      "Dedicated case manager for every client",
                      "100% digital, Pan-India process",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black mt-0.5 shrink-0" />
                        <span className="text-black/60 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#355872]/10 bg-linear-to-br from-[#355872]/5 to-[#7AAACE]/5 p-6 flex-1">
                  <Lightbulb className="w-8 h-8 text-black mb-3" />
                  <h3 className="text-black font-bold text-lg mb-1">Need Help Choosing?</h3>
                  <p className="text-black/50 text-sm mb-3">Not sure which service is right for you? Our experts can guide you in a free 15-minute consultation call.</p>
                  <a href="tel:+919998035607"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black transition-colors"
                  >
                    Call Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* What's Included Grid */}
        <section className="py-20 px-6 bg-white">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Brochure Contents</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Everything Covered Inside</h2>
              <p className="text-black/50 text-sm mt-3 max-w-xl mx-auto">Our brochure provides detailed insights into every service we offer, with real examples and clear timelines.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {brochureHighlights.map((h, i) => (
                <motion.div key={h.title} custom={i} variants={fadeUp}
                  className="group rounded-2xl border border-[#355872]/8 bg-[#F7F8F0] p-6 hover:border-[#355872]/20 hover:shadow-lg hover:bg-white transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#355872]/8 flex items-center justify-center mb-4 group-hover:bg-linear-to-br group-hover:from-[#355872] group-hover:to-[#7AAACE] transition-all duration-300">
                    <h.icon className="w-5 h-5 text-black group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h3 className="text-black font-bold text-base mb-1.5">{h.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services Covered Checklist */}
        <section className="py-20 px-6 bg-[#060e1a]">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Full Service List</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Services Covered in the{" "}
                <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Brochure</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {servicesInBrochure.map((service, i) => (
                <motion.div key={service} custom={i} variants={fadeUp} className="flex items-center gap-2.5 rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span className="text-black/70 text-xs font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-linear-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Transform Your Business?</motion.h2>
            <motion.p variants={fadeUp} className="text-black/70 text-base mb-8">
              Download the brochure to explore our full range of services, or speak directly with our experts for personalized guidance.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <MetalButton variant="default">
                  <span className="flex items-center gap-2">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </span>
                </MetalButton>
              </Link>
              <a href="https://wa.me/919998035607" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/30 text-black font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
