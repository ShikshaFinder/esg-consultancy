"use client"
import { motion, type Variants } from "framer-motion"
import { ScrollText, CheckCircle2, Briefcase, UserCheck, CreditCard, Copyright, ShieldAlert, AlertTriangle, LogOut, Scale, Mail, Phone, MapPin } from "lucide-react"
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
    id: "acceptance",
    icon: CheckCircle2,
    title: "1. Acceptance of Terms",
    items: [
      {
        subtitle: "Agreement to Terms",
        body: "By accessing our website (growbridge.org) or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please refrain from using our website or services.",
      },
      {
        subtitle: "Capacity to Contract",
        body: "By using our services, you represent that you are at least 18 years of age and have the legal authority to enter into a binding agreement under the Indian Contract Act, 1872. If you are entering into these terms on behalf of a business entity, you represent that you have the authority to bind that entity to these terms.",
      },
      {
        subtitle: "Modifications to Terms",
        body: "Grow Bridge reserves the right to modify these Terms & Conditions at any time. Material changes will be communicated via email or a prominent notice on our website. Your continued use of our services after any such modifications constitutes acceptance of the revised terms.",
      },
    ],
  },
  {
    id: "services",
    icon: Briefcase,
    title: "2. Services Description",
    items: [
      {
        subtitle: "Scope of Services",
        body: "Grow Bridge provides professional consultancy services to Indian MSMEs and startups including but not limited to: government funding facilitation (PMEGP, CGTMSE, MUDRA, Stand-Up India, Startup India, state subsidies), business registration (Udyam, GST, Company/LLP incorporation), MSME certifications (ISO, FSSAI, BIS, ZED), project report (DPR) preparation, CIBIL assistance, tax compliance, legal advisory, marketing support, and business growth strategy.",
      },
      {
        subtitle: "Consultancy Nature",
        body: "Grow Bridge is a business consultancy firm. Our services are advisory and facilitative in nature. We assist, guide, and support clients through government and regulatory processes but do not constitute a law firm, chartered accountancy firm, or SEBI-registered entity. For legal advice, tax filing, and regulated financial services, please engage appropriately licensed professionals.",
      },
      {
        subtitle: "Service Modifications",
        body: "Grow Bridge reserves the right to modify, expand, suspend, or discontinue any service at any time. We will provide reasonable notice for material changes to existing engagements. Continuation of the engagement after notice constitutes acceptance of the modifications.",
      },
    ],
  },
  {
    id: "user-responsibilities",
    icon: UserCheck,
    title: "3. User Responsibilities",
    items: [
      {
        subtitle: "Accurate Information",
        body: "You agree to provide accurate, complete, and up-to-date information as required for the provision of services. Providing false, misleading, or fabricated information to Grow Bridge, government portals, banks, or financial institutions is a violation of these terms and may constitute a criminal offence under applicable Indian law including the Indian Penal Code and the Information Technology Act.",
      },
      {
        subtitle: "Cooperation & Timeliness",
        body: "You agree to cooperate with Grow Bridge in a timely manner, including responding to requests for documents within reasonable timelines, providing authorizations (such as power of attorney where required), attending bank meetings or government offices when requested, completing your portion of tasks within agreed timelines, and keeping us informed of any changes to your business status.",
      },
      {
        subtitle: "Prohibited Activities",
        body: "You agree not to: (a) use our services for any unlawful purpose, (b) misrepresent your identity or business details, (c) attempt to gain unauthorized access to our systems, (d) reproduce, distribute, or commercially exploit our proprietary content without written permission, (e) interfere with the proper functioning of our website or services, or (f) use our services to defraud any government authority or financial institution.",
      },
      {
        subtitle: "Document Authenticity",
        body: "You are solely responsible for the authenticity and legality of all documents provided to Grow Bridge. We rely on the documents you furnish and are not liable for any consequences arising from forged, tampered, or fraudulent documentation.",
      },
    ],
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "4. Payment Terms",
    items: [
      {
        subtitle: "Service Fees",
        body: "Our service fees are communicated upfront before commencement of any paid engagement. Fees vary by service type, complexity, and specific requirements. An initial consultation and eligibility assessment are provided free of charge. Detailed Project Reports (DPRs), application processing, registration services, and ongoing retainer engagements are subject to separate fee agreements.",
      },
      {
        subtitle: "Government & Third-Party Costs",
        body: "Our service fee is distinct from any government fees, statutory charges, filing fees, stamp duty, or third-party costs (such as ISO certification body fees, trademark filing fees, or notary charges). All such external costs are to be paid by the client directly or reimbursed to Grow Bridge as per prior agreement. Our invoices clearly separate service fees from pass-through charges.",
      },
      {
        subtitle: "Payment Schedule",
        body: "Unless otherwise agreed in writing, fees are payable as follows: an advance portion upon confirmation of the engagement, and the balance upon delivery of agreed deliverables or completion of specified milestones. Payments can be made via bank transfer, UPI, or other modes specified in your service agreement.",
      },
      {
        subtitle: "GST & Taxes",
        body: "All fees quoted are exclusive of Goods and Services Tax (GST) unless explicitly stated. Applicable GST at the prevailing rate (currently 18% for consultancy services) will be charged in addition to the service fee and reflected in tax invoices issued by Grow Bridge.",
      },
      {
        subtitle: "Late Payment",
        body: "In the event of delayed payment beyond the agreed due date, Grow Bridge reserves the right to pause or suspend work until outstanding dues are cleared. Overdue amounts may attract simple interest at 18% per annum from the due date. Persistent default may result in termination of the engagement.",
      },
    ],
  },
  {
    id: "intellectual-property",
    icon: Copyright,
    title: "5. Intellectual Property",
    items: [
      {
        subtitle: "Grow Bridge IP",
        body: "All content on our website — including text, graphics, logos, icons, images, audio clips, software, and the compilation thereof — is the property of Grow Bridge or its content suppliers and is protected by Indian and international copyright, trademark, and intellectual property laws. The Grow Bridge name, logo, tagline, and brand elements are trademarks of Grow Bridge.",
      },
      {
        subtitle: "Client Deliverables",
        body: "Reports, project documents (DPRs), business plans, and other deliverables prepared specifically for you become your property upon full payment of applicable fees. However, Grow Bridge retains the right to use anonymized and aggregated data, methodologies, templates, and frameworks developed during the engagement for future client work.",
      },
      {
        subtitle: "Restrictions",
        body: "You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any content from our website or proprietary materials without prior written consent from Grow Bridge. Unauthorized use may result in legal action under the Copyright Act, 1957 and the Trade Marks Act, 1999.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    icon: ShieldAlert,
    title: "6. Limitation of Liability",
    items: [
      {
        subtitle: "Service Limitations",
        body: "To the maximum extent permitted by applicable law, Grow Bridge's total liability for any claim arising out of or relating to our services shall not exceed the total fees paid by you to Grow Bridge for the specific service engagement giving rise to the claim.",
      },
      {
        subtitle: "Exclusion of Damages",
        body: "In no event shall Grow Bridge be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of business opportunity, loss of data, or loss of goodwill, arising from or in connection with the use of our services, even if we have been advised of the possibility of such damages.",
      },
      {
        subtitle: "Force Majeure",
        body: "Grow Bridge shall not be liable for any delay or failure to perform obligations under these terms due to events beyond our reasonable control, including but not limited to natural disasters, government actions, changes in law or regulation, pandemic, civil unrest, internet/power outage, or acts of God.",
      },
    ],
  },
  {
    id: "disclaimer",
    icon: AlertTriangle,
    title: "7. Disclaimer",
    items: [
      {
        subtitle: "No Guarantee of Government Approval",
        body: "Grow Bridge facilitates, prepares, and submits applications for government schemes, subsidies, loans, grants, and certifications on your behalf. However, we expressly do not guarantee the approval, sanction, or disbursement of any government scheme, subsidy, loan, or grant. The final decision on any application rests solely with the respective government authority, bank, or financial institution. Rejection of an application does not entitle the client to a refund of consultancy fees for services already rendered.",
      },
      {
        subtitle: "As-Is Basis",
        body: "Our website and services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our website will be uninterrupted, error-free, or free of viruses.",
      },
      {
        subtitle: "Third-Party Content",
        body: "Our website may contain references to government schemes, policies, and third-party services. While we strive to keep information accurate and up-to-date, government policies and scheme guidelines change frequently. We recommend verifying critical information with the respective government authority. Grow Bridge is not responsible for any discrepancies in third-party information.",
      },
      {
        subtitle: "Professional Advice",
        body: "Content on our website and communications from our team are for informational and general guidance purposes. They do not constitute legal, financial, tax, or investment advice. For specific professional advice, please consult a qualified chartered accountant, lawyer, or financial advisor as appropriate.",
      },
    ],
  },
  {
    id: "termination",
    icon: LogOut,
    title: "8. Termination",
    items: [
      {
        subtitle: "Termination by Client",
        body: "You may terminate any ongoing engagement by providing written notice via email to growbridgeinfo@gmail.com. Termination is effective from the date the written notice is received. Fees for services already rendered up to the termination date remain payable and are non-refundable. Please refer to our Refund Policy for details on applicable refund conditions.",
      },
      {
        subtitle: "Termination by Grow Bridge",
        body: "Grow Bridge reserves the right to suspend or terminate your access to our services, with or without notice, if: (a) you breach any provision of these terms, (b) you provide false or fraudulent information, (c) you engage in activities harmful to Grow Bridge or other clients, (d) you fail to make payments within agreed timelines, or (e) continuing the engagement would expose Grow Bridge to legal or regulatory risk.",
      },
      {
        subtitle: "Effect of Termination",
        body: "Upon termination: (a) all rights granted to you under these terms cease immediately, (b) you must pay all outstanding fees for services rendered, (c) confidentiality obligations survive termination, (d) Grow Bridge will return or destroy your documents as per your instructions (subject to legal retention requirements), and (e) provisions that by their nature should survive termination (liability, indemnity, IP, dispute resolution) shall survive.",
      },
    ],
  },
  {
    id: "governing-law",
    icon: Scale,
    title: "9. Governing Law",
    items: [
      {
        subtitle: "Applicable Law",
        body: "These Terms & Conditions are governed by and construed in accordance with the laws of India, including but not limited to the Indian Contract Act, 1872, the Information Technology Act, 2000, the Consumer Protection Act, 2019, and all applicable rules and regulations thereunder.",
      },
      {
        subtitle: "Jurisdiction",
        body: "Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India. Both parties agree to submit to the personal jurisdiction of such courts.",
      },
      {
        subtitle: "Dispute Resolution",
        body: "Before initiating legal proceedings, both parties agree to attempt resolution through good-faith negotiation for a period of 30 days. If negotiation fails, the dispute shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration being Ahmedabad, Gujarat. The arbitration shall be conducted in English by a sole arbitrator mutually appointed by both parties.",
      },
    ],
  },
]

export default function TermsConditionsPage() {
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
            <motion.nav variants={fadeUp} className="flex items-center justify-center gap-2 text-sm text-black/40 mb-8">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black/70">Terms &amp; Conditions</span>
            </motion.nav>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#355872]/20 border border-[#355872]/30 mb-6">
              <ScrollText className="w-4 h-4 text-black" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-black">Legal Agreement</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Terms &amp;{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>Conditions</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-black/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website or engaging our consultancy services. These terms govern your relationship with Grow Bridge.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mt-8 text-sm text-black/30">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Last updated: April 1, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                12 min read
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
              <motion.p variants={fadeUp} className="text-black/60 text-sm leading-relaxed">
                These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the website <strong>growbridge.org</strong> and all services provided by <strong>Grow Bridge</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a business consultancy firm headquartered in Ahmedabad, Gujarat, India. By accessing our website or engaging our services, you agree to be bound by these Terms, our <Link href="/privacy-policy" className="text-black hover:underline font-medium">Privacy Policy</Link>, and our <Link href="/refund-policy" className="text-black hover:underline font-medium">Refund Policy</Link>.
              </motion.p>
            </motion.div>

            {/* Sections */}
            {sections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl border border-[#355872]/10 p-8 md:p-10 shadow-sm mb-6 scroll-mt-24"
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#355872]/10 flex items-center justify-center text-black flex-shrink-0">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-black">{section.title}</h2>
                </motion.div>

                <div className="space-y-5">
                  {section.items.map((item) => (
                    <motion.div key={item.subtitle} variants={fadeUp}>
                      <h3 className="text-sm font-semibold text-black mb-1.5">{item.subtitle}</h3>
                      <p className="text-black/60 text-sm leading-relaxed">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Information & Privacy Cross-Reference */}
            <motion.div
              className="bg-white rounded-2xl border border-[#355872]/10 p-8 md:p-10 shadow-sm"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#355872]/10 flex items-center justify-center text-black flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-black">10. Contact Information</h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-black/60 text-sm leading-relaxed mb-6">
                For any questions, concerns, or notices regarding these Terms &amp; Conditions, please contact us:
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F0] border border-[#355872]/5">
                  <Mail className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:growbridgeinfo@gmail.com" className="text-sm font-medium text-black hover:underline">growbridgeinfo@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F0] border border-[#355872]/5">
                  <Phone className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+919998035607" className="text-sm font-medium text-black hover:underline">+91 99980 35607</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F0] border border-[#355872]/5">
                  <MapPin className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-1">Office</p>
                    <p className="text-sm font-medium text-black">630, Solaris Business Hub, Sola Rd, Ahmedabad 380063</p>
                  </div>
                </div>
              </motion.div>

              {/* Privacy Cross-Reference */}
              <motion.div variants={fadeUp} className="mt-8 p-5 rounded-xl bg-[#355872]/5 border border-[#355872]/10">
                <h3 className="text-sm font-semibold text-black mb-2">Privacy Policy Cross-Reference</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  Your use of our services is also governed by our <Link href="/privacy-policy" className="text-black hover:underline font-medium">Privacy Policy</Link>, which describes how we collect, use, store, and protect your personal information. Our <Link href="/refund-policy" className="text-black hover:underline font-medium">Refund Policy</Link> outlines the terms for cancellations and refund requests. These documents form an integral part of your agreement with Grow Bridge and should be read in conjunction with these Terms &amp; Conditions.
                </p>
              </motion.div>

              <motion.p variants={fadeUp} className="text-black/40 text-xs mt-6">
                These Terms &amp; Conditions, together with the Privacy Policy and Refund Policy, constitute the entire agreement between you and Grow Bridge regarding the use of our website and services. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
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
