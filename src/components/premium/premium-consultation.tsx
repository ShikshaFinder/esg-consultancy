"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { MapPin, Phone, Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react"

const blurFadeUp: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 24 },
  show: (i: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export default function PremiumConsultation() {
  const [form, setForm] = useState({ name: "", phone: "" })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    const msg = `Hello Grow Bridge! I want to check my eligibility.\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n\nPlease contact me.`
    await new Promise((r) => setTimeout(r, 600))
    setSubmitting(false)
    setSubmitted(true)
    window.open(
      `https://wa.me/918487828752?text=${encodeURIComponent(msg)}`,
      "_blank"
    )
  }

  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: "linear-gradient(180deg, #27374D 0%, #2b3d54 100%)" }}>
      {/* Background glows */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#526D82]/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full bg-[#9DB2BF]/10 blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        {/* Section heading */}
        <motion.div variants={blurFadeUp} className="text-center mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#9DB2BF]">
            Get Started
          </p>
          <h2 className="text-3xl font-bold text-[#DDE6ED] md:text-5xl">
            Talk to a{" "}
            <span className="bg-gradient-to-r from-[#DDE6ED] via-[#9DB2BF] to-[#526D82] bg-clip-text text-transparent">
              Growth Expert
            </span>
          </h2>
        </motion.div>

        {/* Two-pane card */}
        <motion.div
          variants={blurFadeUp}
          className="rounded-[2rem] overflow-hidden border border-[#526D82]/30 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row min-h-[520px]">
            {/* ── Left Panel — Contact Info ── */}
            <div className="lg:w-[42%] relative overflow-hidden flex flex-col justify-between p-8 lg:p-10"
              style={{ background: "linear-gradient(160deg, #27374D 0%, #1e2f42 60%, #192a3c 100%)" }}
            >
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, #9DB2BF 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              {/* Glow blobs */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#526D82]/25 rounded-full blur-[80px]" />
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#9DB2BF]/15 rounded-full blur-[70px]" />
              {/* Floating decorative circles */}
              <div className="absolute top-[30%] right-[10%] w-2 h-2 rounded-full bg-[#9DB2BF]/30 animate-[float_4s_ease-in-out_infinite]" />
              <div className="absolute bottom-[40%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#DDE6ED]/20 animate-[float_5s_ease-in-out_infinite_0.5s]" />

              {/* Content */}
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#526D82]/35 aspect-[16/10]">
                  <Image
                    src="/hero3.png"
                    alt="GrowBridge expert consultation"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 28vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192a3c]/70 via-transparent to-transparent" />
                </div>

                <div className="inline-flex items-center gap-2 bg-[#526D82]/25 rounded-full px-3.5 py-1.5 border border-[#526D82]/40 mb-5 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#DDE6ED]/90 text-xs font-semibold">
                    Grow Bridge · Active Now
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#DDE6ED] mb-1.5">
                  Talk to an Expert
                </h3>
                <p className="text-[#9DB2BF]/70 text-sm mb-8">
                  Free consultation for your business
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "LOCATION",
                      value: "Ahmedabad, Gujarat 380015",
                      color: "text-rose-400",
                      bg: "bg-rose-500/15 border-rose-500/20",
                    },
                    {
                      icon: Phone,
                      label: "PHONE",
                      value: "+91 84878 28752",
                      color: "text-emerald-400",
                      bg: "bg-emerald-500/15 border-emerald-500/20",
                    },
                    {
                      icon: Mail,
                      label: "EMAIL",
                      value: "abhay@growbridge.org",
                      color: "text-violet-400",
                      bg: "bg-violet-500/15 border-violet-500/20",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl ${item.bg} border flex items-center justify-center shrink-0 backdrop-blur-sm`}
                      >
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-[#9DB2BF]/60 text-[10px] uppercase tracking-widest font-bold">
                          {item.label}
                        </p>
                        <p className="text-[#DDE6ED] text-sm font-semibold mt-0.5 leading-tight">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                  {["500+ Clients", "Pan India", "5+ Years"].map((badge, bi) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + bi * 0.1, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs text-[#DDE6ED]/70 bg-[#526D82]/25 border border-[#526D82]/40 rounded-full px-3 py-1.5 font-medium flex items-center gap-1.5 cursor-default"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* ── Right Panel — Form ── */}
            <div className="lg:w-[58%] bg-[#DDE6ED] p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block text-xs font-bold text-[#526D82] bg-[#9DB2BF]/25 rounded-full px-3.5 py-1.5 mb-4 w-fit border border-[#9DB2BF]/30">
                Free Consultation
              </span>
              <h3 className="text-2xl font-bold text-[#27374D] mb-1.5">
                Check Your Eligibility
              </h3>
              <p className="text-sm text-[#526D82] mb-7 font-medium">
                Our expert will contact you within 2 hours.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs font-bold text-[#526D82] uppercase tracking-wider mb-2 block">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9DB2BF]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#9DB2BF]/40 bg-white text-sm text-[#27374D] font-medium focus:outline-none focus:border-[#526D82] focus:ring-2 focus:ring-[#526D82]/20 transition-all placeholder:text-[#9DB2BF]"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#526D82] uppercase tracking-wider mb-2 block">
                      Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9DB2BF]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#9DB2BF]/40 bg-white text-sm text-[#27374D] font-medium focus:outline-none focus:border-[#526D82] focus:ring-2 focus:ring-[#526D82]/20 transition-all placeholder:text-[#9DB2BF]"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group/btn relative w-full py-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-500 hover:shadow-xl hover:shadow-[#526D82]/30 disabled:opacity-70 mt-2 cursor-pointer overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #526D82 0%, #27374D 100%)",
                      boxShadow: "0 4px 16px rgba(82,109,130,0.30)",
                    }}
                  >
                    {/* Hover shimmer overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Get Free Consultation <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#526D82]/70 font-medium flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3" />
                    100% Private. No spam guaranteed.
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h4 className="text-lg font-bold text-[#27374D] mb-1">
                    You&apos;re Connected!
                  </h4>
                  <p className="text-[#526D82] text-sm">
                    Opening WhatsApp to connect you with our experts.
                  </p>
                </div>
              )}

              {/* Trust row */}
              <div className="mt-6 pt-6 border-t border-[#9DB2BF]/25 flex justify-around text-center">
                {[
                  ["500+", "FUNDED"],
                  ["95%", "SUCCESS"],
                  ["24hr", "RESPONSE"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <p className="text-base font-bold text-[#27374D]">{val}</p>
                    <p className="text-[10px] text-[#526D82] uppercase tracking-wider font-semibold">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
