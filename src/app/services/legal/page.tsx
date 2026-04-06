import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "⚖️",
  breadcrumbLabel: "Legal Services",
  heroTitle: "Comprehensive Legal Protection",
  heroHighlight: "for Your Business",
  heroDesc: "Expert legal support for contract drafting, compliance management, intellectual property protection, and dispute resolution — all under one roof.",
  heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "500+", label: "Legal Matters" },
    { value: "100%", label: "Compliance Record" },
    { value: "300+", label: "Contracts Drafted" },
    { value: "50+", label: "IP Registrations" },
  ],
  services: [
    { emoji: "📄", title: "Contract Drafting", desc: "Legally sound contracts that protect your interests in every business relationship.", items: ["Partnership & JV Agreements", "Employment Contracts & NDAs", "Vendor & Service Agreements", "Licensing & Franchise Contracts"], timeline: "3-7 Days" },
    { emoji: "✅", title: "Legal Compliance", desc: "Stay fully compliant with all statutory requirements and avoid penalties.", items: ["Annual ROC Filings (MGT-7, AOC-4)", "Board Meeting & AGM Minutes", "Statutory Register Maintenance", "Director KYC & DIN Updates"], timeline: "Ongoing" },
    { emoji: "©️", title: "Intellectual Property", desc: "Protect your brand, inventions, and creative works with proper IP registration.", items: ["Trademark & Copyright Filing", "Patent Application & Prosecution", "Design Registration", "Infringement & Enforcement Action"], timeline: "Varies" },
    { emoji: "🤝", title: "Contract Review", desc: "Thorough review and negotiation of business agreements to minimize risk.", items: ["Risk Assessment & Audit", "Clause Modification & Redlining", "Negotiation Strategy Support", "Final Agreement Review & Sign-off"], timeline: "2-5 Days" },
    { emoji: "⚡", title: "Dispute Resolution", desc: "Swift and strategic resolution of business disputes through legal channels.", items: ["Legal Notice Drafting & Reply", "Mediation & Arbitration Support", "Litigation Coordination", "Settlement Negotiation Strategy"], timeline: "Case-dependent" },
    { emoji: "🏛️", title: "Corporate Advisory", desc: "Strategic legal advice for complex corporate transactions and restructuring.", items: ["Due Diligence for Transactions", "Share Purchase & SHA Agreements", "Corporate Restructuring Advisory", "Investor Term Sheet Review"], timeline: "Project-based" },
  ],
  whyChooseUs: [
    "Experienced legal team with expertise across business law",
    "100% compliance record — zero penalties for our clients",
    "Quick turnaround — most contracts delivered within 3-7 days",
    "Industry-specific contract templates and legal frameworks",
    "Proactive compliance calendar with automated reminders",
    "Cost-effective retainer models for ongoing legal needs",
    "Confidential and secure handling of all legal matters",
    "Multi-jurisdictional expertise across Indian states",
    "Regular legal updates and regulatory change alerts",
  ],
  process: [
    { step: "01", title: "Legal Assessment", desc: "We understand your situation and identify the legal requirements and risks involved." },
    { step: "02", title: "Strategy & Planning", desc: "Our team creates a tailored legal strategy with clear timelines and outcomes." },
    { step: "03", title: "Drafting & Filing", desc: "We draft contracts, file applications, and handle all legal documentation." },
    { step: "04", title: "Ongoing Advisory", desc: "Continuous legal support, compliance monitoring, and periodic reviews." },
  ],
  faqs: [
    { q: "What types of contracts can you draft?", a: "We draft all business contracts — partnership agreements, JV agreements, employment contracts, NDAs, vendor/service agreements, franchise agreements, licensing contracts, SHAs, and custom agreements tailored to your specific requirements." },
    { q: "Why is ROC compliance important?", a: "ROC compliance (annual filings, board resolutions, etc.) is mandatory under the Companies Act. Non-compliance can lead to heavy penalties (₹1L+ per year), striking off the company, and director disqualification. We ensure you never miss a deadline." },
    { q: "How do you protect intellectual property?", a: "We offer trademark registration (brand protection), copyright filing (creative works), patent applications (inventions), and design registration (product designs). We also handle infringement actions and IP enforcement." },
    { q: "How do you handle business disputes?", a: "We follow a graduated approach — starting with legal notice, then mediation/negotiation, then arbitration, and litigation only as a last resort. Our goal is always the fastest and most cost-effective resolution for you." },
    { q: "What annual legal compliance does my company need?", a: "Key requirements include MGT-7 (Annual Return), AOC-4 (Financial Statements), Board Meeting minutes (4/year), AGM, Director KYC, GST returns, income tax filing, and statutory audits (if applicable). We manage all of this for you." },
  ],
}

export default function LegalPage() {
  return <ServicePageTemplate data={data} />
}
