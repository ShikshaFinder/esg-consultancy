"use client"
import { motion, type Variants } from "framer-motion"
import { Shield, FileText, Eye, Lock, Cookie, Share2, Bell, UserCheck, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const sections = [
  {
    id: "information-we-collect",
    icon: FileText,
    title: "1. Information We Collect",
    items: [
      {
        subtitle: "Personal Information",
        body: "When you contact us, register for a consultation, or engage our services, we may collect your full name, email address, phone/mobile number, business name and type, Aadhaar number (where required for government scheme applications), PAN number, GST number, date of birth, gender, residential and business address, and bank account details necessary for processing funding applications.",
      },
      {
        subtitle: "Business Information",
        body: "To evaluate your eligibility for government schemes and funding, we collect business-related data including Udyam/MSME registration number, annual turnover, number of employees, industry sector, year of incorporation, business registration certificates, financial statements, project reports, and other documents you provide to facilitate your applications.",
      },
      {
        subtitle: "Usage Data",
        body: "When you visit our website, we automatically collect technical data such as your IP address, browser type and version, operating system, device identifiers, pages visited, time spent on each page, referring URLs, click patterns, and other diagnostic data. This information helps us improve our platform and understand how users interact with our services.",
      },
      {
        subtitle: "Communication Records",
        body: "We retain records of all communications between you and Grow Bridge, including emails, WhatsApp messages, phone call logs, consultation notes, and any documents shared in connection with government scheme applications, funding assistance, or business advisory services.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "2. How We Use Your Information",
    items: [
      {
        subtitle: "Service Delivery",
        body: "To provide our consultancy, funding assistance, business registration, certification, and advisory services. This includes preparing Detailed Project Reports (DPRs), submitting applications to government portals (Udyam, PMEGP, CGTMSE, MUDRA, Startup India, etc.), facilitating bank introductions, coordinating with regulatory authorities, and managing your scheme applications end-to-end.",
      },
      {
        subtitle: "Eligibility Assessment",
        body: "To evaluate your eligibility for various government schemes, subsidies, and funding programs. Our AI-powered eligibility matching system analyses your business profile against 30+ government schemes to identify the best opportunities for your business growth.",
      },
      {
        subtitle: "Communication & Support",
        body: "To send you service updates, appointment confirmations, document requests, consultation reminders, application status updates, and other service-related notifications via phone, email, SMS, or WhatsApp.",
      },
      {
        subtitle: "Legal & Regulatory Compliance",
        body: "To comply with applicable Indian laws including the Information Technology Act, 2000, the Income Tax Act, 1961, the Companies Act, 2013, the MSMED Act, 2006, the Digital Personal Data Protection Act, 2023, and any other applicable regulations.",
      },
      {
        subtitle: "Improvement & Analytics",
        body: "To analyse usage trends, improve our website performance, develop new features, and enhance the overall quality of our services. All analytics data is processed in aggregate form and does not identify individual users.",
      },
    ],
  },
  {
    id: "information-sharing",
    icon: Share2,
    title: "3. Information Sharing and Disclosure",
    items: [
      {
        subtitle: "Government Portals & Financial Institutions",
        body: "As part of providing our services, we submit your information to relevant government portals (Udyam Registration, PMEGP, CGTMSE, MUDRA, Stand-Up India, GeM, DPIIT Startup India, state government portals, etc.) and financial institutions (banks, NBFCs, SFBs) strictly as required to process your applications. This is done only with your explicit knowledge and consent.",
      },
      {
        subtitle: "Trusted Service Partners",
        body: "We may share your data with authorised third-party partners such as chartered accountants, company secretaries, legal consultants, ISO certification bodies, and technology platforms that assist us in delivering services. All such partners are bound by strict confidentiality agreements.",
      },
      {
        subtitle: "No Sale of Personal Data",
        body: "Grow Bridge does not sell, rent, trade, or otherwise commercially distribute your personal information to any third party for marketing or advertising purposes. Your data is used exclusively for the purposes described in this policy.",
      },
      {
        subtitle: "Legal Obligations",
        body: "We may disclose your information if required by law, court order, government authority, or regulatory body, or to protect the rights, property, or safety of Grow Bridge, our clients, or the public.",
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "4. Data Security",
    items: [
      {
        subtitle: "Technical Safeguards",
        body: "We implement industry-standard security measures including SSL/TLS encryption for data in transit, encrypted cloud storage, role-based access controls, two-factor authentication for internal systems, regular security audits, and firewalls to protect your personal and financial information from unauthorized access, misuse, alteration, or disclosure.",
      },
      {
        subtitle: "Organizational Measures",
        body: "Access to your personal data is restricted to authorised Grow Bridge personnel who require it for service delivery. All team members sign non-disclosure agreements and receive regular training on data protection practices. We maintain detailed access logs and conduct periodic internal audits.",
      },
      {
        subtitle: "Data Retention",
        body: "We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, typically for a period of 5 years from the date of last engagement or as required by applicable law. After this period, data is securely deleted or anonymised.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "5. Your Rights",
    items: [
      {
        subtitle: "Right to Access",
        body: "You have the right to request a copy of the personal data we hold about you. We will respond to your request within 30 days of receiving it.",
      },
      {
        subtitle: "Right to Correction",
        body: "You may request correction of any inaccurate or incomplete personal data. We will update your records promptly upon verification of the corrected information.",
      },
      {
        subtitle: "Right to Deletion",
        body: "You may request deletion of your personal data, subject to legal and regulatory retention requirements. Please note that deletion of certain data may impact our ability to provide ongoing services or maintain records required by law.",
      },
      {
        subtitle: "Right to Withdraw Consent",
        body: "Where processing is based on your consent, you may withdraw consent at any time by writing to us at abhay@growbridge.org. Withdrawal of consent does not affect the lawfulness of processing carried out prior to withdrawal.",
      },
      {
        subtitle: "Right to Grievance Redressal",
        body: "If you have concerns about how your data is handled, you may contact our Grievance Officer at abhay@growbridge.org. We will acknowledge your complaint within 48 hours and resolve it within 30 days.",
      },
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "6. Cookies and Tracking Technologies",
    items: [
      {
        subtitle: "Types of Cookies",
        body: "We use essential cookies (required for website functionality), analytics cookies (to understand usage patterns via Google Analytics), and preference cookies (to remember your settings). We do not use advertising or third-party tracking cookies.",
      },
      {
        subtitle: "Managing Cookies",
        body: "You can control cookie preferences through your browser settings. Disabling essential cookies may affect website functionality. Most browsers allow you to block or delete cookies — please refer to your browser's help documentation for instructions.",
      },
      {
        subtitle: "Third-Party Analytics",
        body: "We use Google Analytics to understand website traffic and usage patterns. Google Analytics collects anonymised data and is governed by Google's Privacy Policy. We have enabled IP anonymisation to further protect your privacy.",
      },
    ],
  },
  {
    id: "third-party",
    icon: Share2,
    title: "7. Third-Party Services",
    items: [
      {
        subtitle: "External Links",
        body: "Our website may contain links to third-party websites, government portals, or external services. Grow Bridge is not responsible for the privacy practices, content, or security of these external sites. We encourage you to review the privacy policies of any third-party service before sharing your information.",
      },
      {
        subtitle: "Payment Processors",
        body: "We use trusted third-party payment processors to handle financial transactions. Your payment information is processed directly by these providers in compliance with PCI-DSS standards. Grow Bridge does not store your full credit/debit card details on our servers.",
      },
    ],
  },
  {
    id: "changes",
    icon: Bell,
    title: "8. Changes to This Policy",
    items: [
      {
        subtitle: "Policy Updates",
        body: "Grow Bridge reserves the right to update this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or business operations. Material changes will be communicated via email or a prominent notice on our website.",
      },
      {
        subtitle: "Continued Use",
        body: "Your continued use of our website or services after any changes to this policy constitutes acceptance of the updated terms. We recommend reviewing this page periodically to stay informed about how we protect your information.",
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
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
              <span className="text-white/70">Privacy Policy</span>
            </motion.nav>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#355872]/20 border border-[#355872]/30 mb-6">
              <Shield className="w-4 h-4 text-[#9CD5FF]" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#9CD5FF]">Your Privacy Matters</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Privacy{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Policy</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              At Grow Bridge, we are committed to protecting your personal information. This policy explains how we collect, use, store, and safeguard your data.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mt-8 text-sm text-white/30">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#7AAACE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Last updated: April 1, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#7AAACE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                10 min read
              </span>
            </motion.div>
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
                This Privacy Policy (&quot;Policy&quot;) applies to the website <strong>growbridge.org</strong> and all services provided by <strong>Grow Bridge</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a business consultancy firm headquartered in Ahmedabad, Gujarat, India. By accessing our website or engaging our services, you consent to the practices described in this Policy. This Policy is governed by the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
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

            {/* Contact Section */}
            <motion.div
              className="bg-white rounded-2xl border border-[#355872]/10 p-8 md:p-10 shadow-sm"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#355872]/10 flex items-center justify-center text-[#355872] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#0a1628]">9. Contact Us</h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-[#0a1628]/60 text-sm leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us:
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
                For grievance redressal under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, please write to our Grievance Officer at <a href="mailto:abhay@growbridge.org" className="text-[#7AAACE] hover:underline">abhay@growbridge.org</a>. We will acknowledge your complaint within 48 hours and endeavour to resolve it within 30 days.
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
