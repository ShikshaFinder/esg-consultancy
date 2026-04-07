"use client"
import { useParams } from "next/navigation"
import { motion, type Variants } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Gift,
  ListChecks,
  ShieldCheck,
  Sparkles,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { getSchemeBySlug } from "@/lib/schemes"
import { MetalButton } from "@/components/devComponents/liquid-glass-button"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
}
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function SchemeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const scheme = getSchemeBySlug(slug ?? "")

  /* ─── Not Found ─── */
  if (!scheme) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#060e1a] flex items-center justify-center px-6">
          <motion.div
            className="text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#355872]/20 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-[#9CD5FF]" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">
              Scheme Not Found
            </h1>
            <p className="text-white/50 mb-8">
              The scheme you&apos;re looking for doesn&apos;t exist or may have been
              moved. Browse our complete list of funding schemes.
            </p>
            <Link
              href="/funding"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#355872] to-[#7AAACE] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#355872]/25 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Schemes
            </Link>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
            <BouncingBalls
              numBalls={30}
              colors={["#355872", "#7AAACE", "#9CD5FF"]}
              opacity={0.2}
              minRadius={0.2}
              maxRadius={1}
              speed={0.12}
              interactive={false}
            />
          </div>

          <motion.div
            className="max-w-4xl mx-auto relative z-10"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {/* Back link */}
            <motion.div variants={fadeUp}>
              <Link
                href="/funding"
                className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-[#9CD5FF] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                All Schemes
              </Link>
            </motion.div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Icon + Title */}
              <motion.div variants={fadeUp} className="flex-1 min-w-0">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${scheme.iconBg} flex items-center justify-center text-2xl shrink-0`}
                  >
                    {scheme.icon}
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#9CD5FF] bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-2.5 py-0.5 rounded-full mb-1.5">
                      {scheme.category}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {scheme.title}
                    </h1>
                  </div>
                </div>
                <p className="text-white/50 text-base md:text-lg leading-relaxed mt-2">
                  {scheme.shortDesc}
                </p>
              </motion.div>

              {/* Stat Cards */}
              <motion.div
                variants={fadeUp}
                className="flex flex-row md:flex-col gap-3 shrink-0"
              >
                <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-4 text-center min-w-[110px]">
                  <p className="text-white font-extrabold text-2xl leading-none">
                    {scheme.highlight}
                  </p>
                  <p className="text-white/40 text-[10px] font-medium uppercase mt-1.5">
                    {scheme.highlightLabel}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-4 text-center min-w-[110px]">
                  <p className="text-white font-extrabold text-lg leading-none flex items-center justify-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#9CD5FF]" />
                    {scheme.timeline}
                  </p>
                  <p className="text-white/40 text-[10px] font-medium uppercase mt-1.5">
                    Timeline
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ─── Full Description ─── */}
        <section className="py-16 px-6 bg-[#F7F8F0]">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-5 h-5 text-[#355872]" />
              <h2 className="text-[#0a1628] font-bold text-2xl">Overview</h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-[#0a1628]/60 text-base leading-relaxed"
            >
              {scheme.fullDescription}
            </motion.p>
          </motion.div>
        </section>

        {/* ─── Eligibility ─── */}
        <section className="py-16 px-6 bg-white">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mb-6"
            >
              <ListChecks className="w-5 h-5 text-[#355872]" />
              <h2 className="text-[#0a1628] font-bold text-2xl">
                Eligibility Criteria
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scheme.eligibility.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-[#355872]/[0.06] bg-[#F7F8F0] p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#7AAACE] shrink-0 mt-0.5" />
                  <span className="text-[#0a1628]/70 text-sm leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── Benefits ─── */}
        <section className="py-16 px-6 bg-[#F7F8F0]">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mb-6"
            >
              <Gift className="w-5 h-5 text-[#355872]" />
              <h2 className="text-[#0a1628] font-bold text-2xl">
                Key Benefits
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {scheme.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className="rounded-2xl border border-[#355872]/[0.08] bg-white p-5 hover:border-[#355872]/20 hover:shadow-lg hover:shadow-[#355872]/5 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#355872] to-[#7AAACE] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[#0a1628]/70 text-sm leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── Required Documents ─── */}
        <section className="py-16 px-6 bg-white">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mb-6"
            >
              <FileText className="w-5 h-5 text-[#355872]" />
              <h2 className="text-[#0a1628] font-bold text-2xl">
                Required Documents
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[#355872]/[0.08] bg-[#F7F8F0] p-6 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheme.documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#355872]/10 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-[#355872]">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-[#0a1628]/60 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ─── Application Process (Timeline) ─── */}
        <section className="py-16 px-6 bg-[#F7F8F0]">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mb-10"
            >
              <Clock className="w-5 h-5 text-[#355872]" />
              <h2 className="text-[#0a1628] font-bold text-2xl">
                Application Process
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#355872] via-[#7AAACE] to-[#9CD5FF] hidden md:block" />

              <div className="flex flex-col gap-6">
                {scheme.process.map((step, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-5"
                  >
                    {/* Step Number */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#355872] to-[#7AAACE] flex items-center justify-center shrink-0 shadow-lg shadow-[#355872]/20">
                      <span className="text-white font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 rounded-2xl border border-[#355872]/[0.08] bg-white p-5 hover:border-[#355872]/15 hover:shadow-md transition-all duration-300">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#355872]/50 mb-1">
                        Step {i + 1}
                      </p>
                      <p className="text-[#0a1628]/70 text-sm leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 text-3xl"
            >
              {scheme.icon}
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Apply for {scheme.title}?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/70 text-base mb-8 max-w-xl mx-auto"
            >
              Our experts handle the entire application process — from
              eligibility assessment to documentation to final approval. Get
              started with a free consultation.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <MetalButton variant="default">
                  <span className="flex items-center gap-2">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </span>
                </MetalButton>
              </Link>
              <Link
                href="/funding"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse All Schemes
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
