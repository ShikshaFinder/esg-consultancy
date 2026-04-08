import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏅",
  breadcrumbLabel: "ISO Certification",
  heroTitle: "Get Internationally Recognized",
  heroHighlight: "ISO Certification",
  heroDesc: "ISO certification enhances your business credibility, opens global markets, and improves operational efficiency. We handle the entire certification process — from gap analysis to final audit.",
  heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "1500+", label: "Certifications Done" },
    { value: "15-30 Days", label: "Avg Timeline" },
    { value: "100%", label: "Certification Rate" },
    { value: "20+", label: "ISO Standards" },
  ],
  services: [
    { emoji: "📋", title: "ISO 9001 (Quality Management)", desc: "The world's most popular quality management system standard for consistent product/service quality.", items: ["Gap Analysis & Documentation", "QMS Implementation Support", "Internal Audit Facilitation", "Certification Body Coordination"], timeline: "15-30 Days" },
    { emoji: "🌿", title: "ISO 14001 (Environmental)", desc: "Environmental management system certification for businesses committed to sustainability.", items: ["Environmental Aspect Identification", "EMS Policy & Procedure Setup", "Compliance Obligation Mapping", "Certification Audit Preparation"], timeline: "20-30 Days" },
    { emoji: "⚠️", title: "ISO 45001 (OH&S)", desc: "Occupational health and safety management system for reducing workplace risks.", items: ["Hazard Identification & Risk Assessment", "OH&S Policy Development", "Worker Consultation Framework", "Safety Audit & Certification"], timeline: "20-30 Days" },
    { emoji: "🔒", title: "ISO 27001 (Information Security)", desc: "ISMS certification for businesses handling sensitive data and IT services.", items: ["Information Asset Identification", "Risk Assessment & Treatment", "ISMS Policy Framework Setup", "SOA & Certification Audit"], timeline: "30-45 Days" },
    { emoji: "🍽️", title: "ISO 22000 (Food Safety)", desc: "Food safety management system for manufacturers, processors, and food chain businesses.", items: ["HACCP Prerequisite Programs", "Food Safety Hazard Analysis", "Control Measure Implementation", "FSMS Certification Audit"], timeline: "20-30 Days" },
    { emoji: "🔄", title: "Surveillance & Renewal", desc: "Ongoing surveillance audit support and timely ISO certificate renewal.", items: ["Annual Surveillance Audit Prep", "Non-Conformity Closure", "Certificate Renewal Filing", "Continual Improvement Tracking"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "1500+ successful ISO certifications across 20+ standards",
    "Complete gap analysis and documentation support",
    "Partnership with accredited certification bodies (NABCB)",
    "QMS/EMS/OH&S implementation expertise",
    "Internal auditor training for your team included",
    "100% first-attempt certification success rate",
    "Post-certification surveillance and renewal support",
    "Industry-specific ISO implementation experience",
    "Affordable packages for MSMEs and startups",
  ],
  process: [
    { step: "01", title: "Gap Analysis", desc: "We assess your current systems against the ISO standard and identify gaps to address." },
    { step: "02", title: "Implementation", desc: "Develop documentation, policies, and implement the required management system." },
    { step: "03", title: "Internal Audit", desc: "Conduct internal audit to verify conformity and readiness for the certification audit." },
    { step: "04", title: "Certification Audit", desc: "We coordinate with the certification body, prepare you for the audit, and secure your ISO certificate." },
  ],
  faqs: [
    { q: "Which ISO certification does my business need?", a: "It depends on your industry: ISO 9001 (quality) is universal, ISO 14001 for environmental commitment, ISO 45001 for safety-critical industries, ISO 27001 for IT/data companies, ISO 22000 for food businesses, and ISO 13485 for medical devices. We help you identify the right standard." },
    { q: "How long is an ISO certificate valid?", a: "ISO certificates are valid for 3 years with annual surveillance audits. You must pass these surveillance audits to maintain certification. At the end of 3 years, a re-certification audit is required for renewal." },
    { q: "Is ISO certification mandatory?", a: "ISO certification is not legally mandatory for most businesses, but it's often required by clients (especially government, PSUs, and MNCs) for vendor qualification, tender participation, and supply chain compliance." },
    { q: "What is the cost of ISO certification?", a: "Costs vary by standard and company size. For MSMEs, ISO 9001 certification starts from ₹15,000-₹25,000 including documentation, implementation support, and certification body fees. Multi-standard integration reduces per-standard costs." },
    { q: "Can we get multiple ISO certifications together?", a: "Yes, Integrated Management Systems (IMS) allow simultaneous certification for multiple standards (e.g., ISO 9001 + 14001 + 45001). This reduces audit time, documentation overlap, and overall certification cost by 30-40%." },
  ],
}

export default function ISOCertificationPage() {
  return <ServicePageTemplate data={data} />
}
