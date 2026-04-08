import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🤝",
  breadcrumbLabel: "Limited Liability Partnership",
  heroTitle: "Register Your",
  heroHighlight: "LLP with Ease",
  heroDesc: "Limited Liability Partnership combines partnership flexibility with corporate limited liability. Ideal for professional firms, consultancies, and service businesses with lower compliance burden.",
  heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "2000+", label: "LLPs Registered" },
    { value: "10-15 Days", label: "Avg Timeline" },
    { value: "98%", label: "Success Rate" },
    { value: "₹4,999", label: "Starting From" },
  ],
  services: [
    { emoji: "📝", title: "LLP Name Reservation", desc: "Name search, availability check, and RUN-LLP application filing with MCA.", items: ["Name Availability Search", "RUN-LLP Filing", "Alternative Name Strategy", "Trademark Conflict Verification"], timeline: "1-2 Days" },
    { emoji: "🏛️", title: "LLP Incorporation", desc: "Complete FiLLiP (Form for Incorporation of LLP) filing with all required documents.", items: ["FiLLiP Form Filing", "DPIN for All Partners", "DSC Procurement & Linking", "Certificate of Incorporation"], timeline: "7-10 Days" },
    { emoji: "📄", title: "LLP Agreement Drafting", desc: "Customized LLP Agreement covering profit-sharing, roles, obligations, and dispute resolution.", items: ["Partner Rights & Obligations", "Profit-Sharing Ratio Definition", "Capital Contribution Terms", "Exit & Dissolution Clauses"], timeline: "3-5 Days" },
    { emoji: "💼", title: "PAN, TAN & GST Setup", desc: "Post-incorporation statutory registrations for seamless business operations.", items: ["PAN Application & Issuance", "TAN Registration", "GST Registration (if applicable)", "Bank Account Opening Assistance"], timeline: "3-7 Days" },
    { emoji: "📊", title: "Annual Compliance Setup", desc: "Configure your LLP compliance calendar — lighter than Pvt Ltd requirements.", items: ["Form 11 (Annual Return) Schedule", "Form 8 (Statement of Accounts)", "Income Tax Return Calendar", "Partner KYC Reminders"], timeline: "5-7 Days" },
    { emoji: "🔄", title: "LLP Conversion Services", desc: "Convert your existing business structure to an LLP or from LLP to Pvt Ltd.", items: ["Proprietorship to LLP Conversion", "Partnership to LLP Conversion", "LLP to Pvt Ltd Conversion", "MCA Form Filing & Compliance"], timeline: "15-30 Days" },
  ],
  whyChooseUs: [
    "2000+ LLP registrations with 98% approval rate",
    "Customized LLP Agreement by experienced legal team",
    "DPIN & DSC processing included at no extra cost",
    "Lower compliance burden compared to Pvt Ltd",
    "No minimum capital contribution requirement",
    "Bank account opening assistance with partner banks",
    "Ongoing compliance support post-registration",
    "Expert guidance on profit-sharing structure",
    "Conversion support to/from other business structures",
  ],
  process: [
    { step: "01", title: "Consultation", desc: "We assess your business needs, partner structure, and recommend the right LLP configuration." },
    { step: "02", title: "Documentation", desc: "Prepare DPIN, DSC, LLP Agreement, and all MCA-required filing documents." },
    { step: "03", title: "Filing & Incorporation", desc: "File FiLLiP form with MCA, handle objections, and secure incorporation certificate." },
    { step: "04", title: "Handover & Support", desc: "Receive all documents, LLP Agreement, compliance calendar, and dedicated support." },
  ],
  faqs: [
    { q: "What is the minimum requirement for LLP registration?", a: "You need minimum 2 designated partners (at least one Indian resident), no minimum capital requirement, and a registered office address in India. Partners can be individuals or body corporates." },
    { q: "What is the difference between LLP and Partnership Firm?", a: "LLP provides limited liability protection — partners' personal assets are protected from business debts. Partnership firms have unlimited liability. LLP is registered with MCA and governed by the LLP Act 2008, while partnerships are governed by the Indian Partnership Act 1932." },
    { q: "Can an LLP raise funding from investors?", a: "LLPs cannot issue equity shares, so traditional VC/angel investment is not possible. However, LLPs can raise debt funding, partner contributions, and can convert to Pvt Ltd if equity funding is needed. We help plan the transition." },
    { q: "What is the annual compliance cost for an LLP?", a: "LLP compliance is significantly lighter — you need Form 11 (Annual Return), Form 8 (Statement of Accounts), Income Tax Return, and GST returns if applicable. No mandatory audit if turnover is below ₹40 lakhs and capital below ₹25 lakhs." },
    { q: "How long does LLP registration take?", a: "Total timeline is 10-15 working days including DPIN/DSC processing, name reservation, FiLLiP filing, and LLP Agreement submission. We handle the entire process through our MCA-connected channels." },
  ],
}

export default function LLPPage() {
  return <ServicePageTemplate data={data} />
}
