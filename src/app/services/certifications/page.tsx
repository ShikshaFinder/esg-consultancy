import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏆",
  breadcrumbLabel: "Certifications & IP",
  heroTitle: "Industry-Leading Certifications &",
  heroHighlight: "IP Protection",
  heroDesc: "Obtain essential business certifications that build trust, open doors to government tenders, and protect your intellectual property rights.",
  heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "800+", label: "Certifications" },
    { value: "15-45 Days", label: "Average Time" },
    { value: "100%", label: "Approval Rate" },
    { value: "20+", label: "Cert Types" },
  ],
  services: [
    { emoji: "🏆", title: "ISO Certification", desc: "International quality standards that enhance credibility and open B2B opportunities.", items: ["ISO 9001 Quality Management", "ISO 14001 Environmental", "ISO 27001 Information Security", "ISO 45001 Occupational H&S"], timeline: "30-60 Days" },
    { emoji: "🍽️", title: "FSSAI License", desc: "Mandatory food safety license for all food business operators in India.", items: ["Central & State FSSAI License", "Food Safety Compliance Audit", "Label & Packaging Review", "Annual Return Filing Support"], timeline: "15-30 Days" },
    { emoji: "®️", title: "Trademark Registration", desc: "Protect your brand name, logo, and tagline from unauthorized use.", items: ["Comprehensive Trademark Search", "Application Filing & Prosecution", "Objection & Hearing Handling", "Registration Certificate Delivery"], timeline: "6-18 Months" },
    { emoji: "🌐", title: "Import Export Code (IEC)", desc: "Essential code for businesses involved in international trade and commerce.", items: ["DGFT Portal Application", "Complete Document Preparation", "IEC Certificate Issuance", "Export Benefit Scheme Guidance"], timeline: "3-5 Days" },
    { emoji: "✔️", title: "BIS Certification", desc: "Bureau of Indian Standards certification for product quality assurance.", items: ["Product Testing Coordination", "BIS Application Filing", "Factory Inspection Support", "License Renewal & Maintenance"], timeline: "45-90 Days" },
    { emoji: "📜", title: "Other Licenses & Permits", desc: "Complete assistance with industry-specific licenses and regulatory permits.", items: ["Shop & Establishment Act", "Trade License Filing", "Pollution & Fire NOC", "Industry-Specific Permits"], timeline: "7-30 Days" },
  ],
  whyChooseUs: [
    "100% approval rate across all certification types",
    "Experienced auditors and documentation specialists",
    "Fastest turnaround — ISO in 30 days, IEC in 3 days",
    "End-to-end support from application to certificate",
    "Factory inspection preparation and audit coaching",
    "Multi-standard certification packages available",
    "Annual renewal and surveillance audit support",
    "Government tender eligibility mapping with certifications",
    "IP portfolio management for growing businesses",
  ],
  process: [
    { step: "01", title: "Requirement Analysis", desc: "We assess which certifications your business needs based on industry and goals." },
    { step: "02", title: "Gap Assessment", desc: "Identify what's needed to meet certification standards and prepare accordingly." },
    { step: "03", title: "Application & Filing", desc: "Complete documentation, application filing, and coordination with authorities." },
    { step: "04", title: "Certification & Handover", desc: "You receive your certificate with ongoing renewal and compliance support." },
  ],
  faqs: [
    { q: "Which ISO certification does my business need?", a: "It depends on your industry — ISO 9001 (quality) is universal, ISO 14001 for environment-sensitive industries, ISO 27001 for IT/data companies, and ISO 45001 for manufacturing/construction. We help you choose the right one during consultation." },
    { q: "Is FSSAI license mandatory for all food businesses?", a: "Yes, FSSAI license is mandatory for anyone involved in food manufacturing, processing, packaging, distribution, or sale. The type (Basic, State, Central) depends on your turnover and operations scale." },
    { q: "How long does trademark registration take?", a: "Trademark application filing takes 1-2 days. Initial examination takes 1-3 months. If no objection, registration is granted in 6-8 months. If objected, it can take 12-18 months with hearing. We handle the entire process." },
    { q: "Is IEC valid for lifetime?", a: "Yes, IEC (Import Export Code) has lifetime validity and does not need renewal. However, you need to update it on the DGFT portal if there are changes in your business details." },
    { q: "How often do certifications need renewal?", a: "ISO certifications need annual surveillance audits and full recertification every 3 years. FSSAI needs annual renewal. BIS requires periodic inspection. We manage all renewal timelines for you." },
  ],
}

export default function CertificationsPage() {
  return <ServicePageTemplate data={data} />
}
