"use client"
import { motion, type Variants } from "framer-motion"
import { RotateCcw, FileText, CheckCircle2, XCircle, Clock, CalendarX, AlertTriangle, Scale, Mail, Phone, MapPin, IndianRupee } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const quickStats = [
  { value: "7–10 Days", label: "Refund Processing", icon: Clock },
  { value: "Bank Transfer", label: "Refund Mode", icon: IndianRupee },
  { value: "Written Request", label: "How to Request", icon: FileText },
  { value: "abhay@growbridge.org", label: "Refund Contact", icon: Mail },
]

const sections = [
  {
    id: "service-based-refund",
    icon: FileText,
    title: "1. Service-Based Refund Policy",
    items: [
      {
        subtitle: "Consultation Fees",
        body: "Initial eligibility assessment consultations are provided free of charge. If you have paid for a detailed one-on-one consultation session and are unsatisfied with the quality of advice, you may request a full refund within 24 hours of the session. Refund requests after 24 hours will be reviewed on a case-by-case basis.",
      },
      {
        subtitle: "Documentation & DPR Fees",
        body: "Fees paid for Detailed Project Report (DPR) preparation, business plan drafting, or documentation services are refundable up to 50% if you cancel before work has commenced. Once our team has begun preparing your documents, the fee is non-refundable as intellectual effort and resources have been deployed. If the delivered document contains factual errors attributable to Grow Bridge, we will revise it at no additional cost.",
      },
      {
        subtitle: "Scheme Application Processing Fees",
        body: "Fees for government scheme application processing (PMEGP, CGTMSE, MUDRA, Stand-Up India, state subsidies, etc.) cover our consultancy effort in preparing, reviewing, and submitting applications. These fees are for the service rendered and are non-refundable once the application has been submitted to the relevant government portal or bank.",
      },
      {
        subtitle: "Registration & Certification Fees",
        body: "Fees for business registrations (Udyam, GST, Company/LLP, FSSAI, etc.) and certifications (ISO, BIS, etc.) are refundable at 75% if cancelled before any filing has been initiated with the relevant authority. Once filings are submitted, refunds cannot be processed as government/third-party fees are non-recoverable.",
      },
    ],
  },
  {
    id: "conditions-for-refund",
    icon: CheckCircle2,
    title: "2. Conditions for Refund",
    items: [
      {
        subtitle: "Eligibility Criteria",
        body: "A refund may be approved if: (a) you cancel before service delivery has commenced, (b) the service was not delivered as described in the engagement agreement, (c) there was a demonstrable error or negligence on the part of Grow Bridge, or (d) duplicate payment was made for the same service.",
      },
      {
        subtitle: "Refund Request Requirements",
        body: "To be eligible for a refund, you must submit a written request via email to abhay@growbridge.org within 7 days of the service date, clearly stating: your full name, service availed, payment receipt/transaction ID, reason for the refund request, and any supporting documentation.",
      },
      {
        subtitle: "Review Process",
        body: "All refund requests are reviewed by our service team within 3 business days of receipt. We may contact you for additional information or clarification. The decision of Grow Bridge on refund eligibility is communicated in writing via email.",
      },
    ],
  },
  {
    id: "non-refundable",
    icon: XCircle,
    title: "3. Non-Refundable Services",
    items: [
      {
        subtitle: "Services That Cannot Be Refunded",
        body: "The following are strictly non-refundable: (a) Government fees, statutory charges, stamp duty, and filing fees paid on your behalf to government authorities, (b) Third-party certification body fees (ISO, BIS, FSSAI, etc.), (c) Scheme application fees once submitted to government portals, (d) Services fully delivered and accepted by the client, (e) Retainer/subscription fees for ongoing advisory services after the billing period has started, (f) Customized research or market analysis reports once delivered.",
      },
      {
        subtitle: "Partial Service Delivery",
        body: "Where a service engagement involves multiple milestones or deliverables, refunds are calculated proportionally. Fees for milestones already completed are non-refundable. Only the fee attributable to undelivered milestones may be considered for a refund.",
      },
    ],
  },
  {
    id: "refund-process",
    icon: Clock,
    title: "4. Refund Process and Timeline",
    items: [
      {
        subtitle: "Processing Time",
        body: "Approved refunds are processed within 7–10 business days from the date of approval. Refunds are credited to the original payment method (bank account or UPI ID) used for the transaction. In exceptional cases, processing may take up to 15 business days depending on your bank.",
      },
      {
        subtitle: "Refund Amount",
        body: "The refund amount will be the applicable service fee minus any government fees, third-party costs, or non-refundable components already incurred. GST refund on the service fee will be processed in accordance with applicable GST regulations.",
      },
      {
        subtitle: "Refund Confirmation",
        body: "You will receive email confirmation once the refund has been initiated, including the refund amount, transaction reference number, and expected credit timeline. If you do not receive the refund within the stated timeline, please contact us immediately.",
      },
    ],
  },
  {
    id: "cancellation",
    icon: CalendarX,
    title: "5. Cancellation Policy",
    items: [
      {
        subtitle: "Client-Initiated Cancellation",
        body: "You may cancel any ongoing engagement by providing written notice via email to abhay@growbridge.org. Cancellation is effective from the date the written notice is received. Any work completed up to the cancellation date will be billed, and fees for completed work are non-refundable.",
      },
      {
        subtitle: "Cancellation Before Service Commencement",
        body: "If you cancel an engagement before any work has begun, you are entitled to a full refund of the service fee paid, minus any non-refundable advance or booking fee explicitly communicated at the time of engagement.",
      },
      {
        subtitle: "Cancellation of Scheduled Consultations",
        body: "Scheduled consultation sessions may be rescheduled or cancelled at least 24 hours before the appointment time at no charge. Cancellations made less than 24 hours before the scheduled time, or no-shows, are subject to a cancellation fee of up to 50% of the session fee.",
      },
    ],
  },
  {
    id: "government-fees",
    icon: AlertTriangle,
    title: "6. Government Fee Disclaimer",
    items: [
      {
        subtitle: "Separation of Fees",
        body: "Grow Bridge's service/consultancy fees are entirely separate from any government fees, statutory charges, challan payments, registration fees, or taxes payable to government authorities. Our invoices clearly distinguish between our service fee and any government/third-party charges collected on your behalf.",
      },
      {
        subtitle: "Non-Recoverable Government Fees",
        body: "Government fees once paid to any authority (central, state, or local) are non-refundable by Grow Bridge, as these payments are made directly to government entities. Any dispute regarding government fees must be addressed with the respective government authority.",
      },
      {
        subtitle: "No Guarantee of Approval",
        body: "Grow Bridge facilitates and assists with government scheme applications but does not guarantee approval or sanction of any scheme, subsidy, loan, or grant. The final decision rests solely with the respective government authority or financial institution. Non-approval of a scheme does not entitle the client to a refund of consultancy fees for services already rendered.",
      },
    ],
  },
  {
    id: "dispute-resolution",
    icon: Scale,
    title: "7. Dispute Resolution",
    items: [
      {
        subtitle: "Internal Resolution",
        body: "In the event of a dispute regarding refunds, we encourage you to first contact our team at abhay@growbridge.org. Our senior management will review your case and work towards an amicable resolution within 15 business days.",
      },
      {
        subtitle: "Mediation & Arbitration",
        body: "If a dispute cannot be resolved internally, both parties agree to attempt mediation before pursuing legal action. Any unresolved disputes shall be subject to arbitration in accordance with the Arbitration and Conciliation Act, 1996, with the seat of arbitration being Ahmedabad, Gujarat.",
      },
      {
        subtitle: "Governing Law & Jurisdiction",
        body: "This Refund Policy is governed by the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.",
      },
    ],
  },
]

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(156,213,255,0.06)_0%,transparent_50%)] pointer-events-none" />

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            {/* Breadcrumb */}
            <motion.nav variants={fadeUp} className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
              <Link href="/" className="hover:text-[#9CD5FF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">Refund Policy</span>
            </motion.nav>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#355872]/20 border border-[#355872]/30 mb-6">
              <RotateCcw className="w-4 h-4 text-[#9CD5FF]" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#9CD5FF]">Refund &amp; Cancellation</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Refund{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Policy</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              We are committed to delivering quality consultancy services. This policy outlines the circumstances under which refunds apply, our cancellation procedures, and your rights as a client.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mt-8 text-sm text-white/30">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#7AAACE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Last updated: April 1, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#7AAACE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                Refunds processed in 7–10 business days
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Quick Stats ── */}
        <section className="py-6 px-6 bg-[#0a1628] border-t border-[#355872]/10">
          <motion.div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            {quickStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center p-4 rounded-xl bg-[#355872]/10 border border-[#355872]/15">
                <stat.icon className="w-5 h-5 text-[#9CD5FF] mx-auto mb-2" />
                <p className="text-sm font-bold text-white">{stat.value}</p>
                <p className="text-[11px] text-white/40 mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Content ── */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <div className="max-w-4xl mx-auto">
            {/* Intro card */}
            <motion.div
              className="bg-white rounded-2xl border border-[#355872]/10 p-8 md:p-10 shadow-sm mb-10"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-[#0a1628]/60 text-sm leading-relaxed">
                This Refund &amp; Cancellation Policy (&quot;Policy&quot;) applies to all services provided by <strong>Grow Bridge</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a business consultancy firm headquartered in Ahmedabad, Gujarat, India. By engaging our services, you acknowledge that you have read and understood this Policy. This document should be read in conjunction with our <Link href="/terms-conditions" className="text-[#7AAACE] hover:underline font-medium">Terms &amp; Conditions</Link> and <Link href="/privacy-policy" className="text-[#7AAACE] hover:underline font-medium">Privacy Policy</Link>.
              </motion.p>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl border border-[#355872]/10 p-8 md:p-10 shadow-sm mb-6 scroll-mt-24"
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#355872]/10 flex items-center justify-center text-[#355872] flex-shrink-0">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#0a1628]">{section.title}</h2>
                </motion.div>

                <div className="space-y-5">
                  {section.items.map((item) => (
                    <motion.div key={item.subtitle} variants={fadeUp}>
                      <h3 className="text-sm font-semibold text-[#355872] mb-1.5">{item.subtitle}</h3>
                      <p className="text-[#0a1628]/60 text-sm leading-relaxed">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact for Refund Requests */}
            <motion.div
              className="bg-white rounded-2xl border border-[#355872]/10 p-8 md:p-10 shadow-sm"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#355872]/10 flex items-center justify-center text-[#355872] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#0a1628]">8. Contact for Refund Requests</h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-[#0a1628]/60 text-sm leading-relaxed mb-6">
                To initiate a refund request or for any questions regarding this policy, please reach out to us through the following channels:
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F0] border border-[#355872]/5">
                  <Mail className="w-5 h-5 text-[#7AAACE] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#0a1628]/40 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:abhay@growbridge.org" className="text-sm font-medium text-[#355872] hover:underline">abhay@growbridge.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F0] border border-[#355872]/5">
                  <Phone className="w-5 h-5 text-[#7AAACE] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#0a1628]/40 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+918487828752" className="text-sm font-medium text-[#355872] hover:underline">+91 84878 28752</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F0] border border-[#355872]/5">
                  <MapPin className="w-5 h-5 text-[#7AAACE] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#0a1628]/40 uppercase tracking-wider mb-1">Office</p>
                    <p className="text-sm font-medium text-[#355872]">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </motion.div>

              <motion.p variants={fadeUp} className="text-[#0a1628]/40 text-xs mt-6">
                Please include your full name, service engagement details, payment receipt/transaction ID, and reason for the refund request in your email. Our team will acknowledge your request within 48 hours and provide a resolution within 7 business days.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
