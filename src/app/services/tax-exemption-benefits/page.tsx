import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📊",
  breadcrumbLabel: "Tax Exemption & Benefits",
  heroTitle: "Maximize Your Savings with",
  heroHighlight: "Tax Exemption Benefits",
  heroDesc: "Expert guidance on GST filing, income tax returns, startup tax exemptions (80-IAC), 12A & 80G registrations, and comprehensive tax planning for MSMEs and startups.",
  heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹5Cr+", label: "Tax Savings Delivered" },
    { value: "500+", label: "Businesses Optimized" },
    { value: "100%", label: "Compliance Rate" },
    { value: "3 Yrs", label: "Tax Holiday (80-IAC)" },
  ],
  services: [
    { emoji: "📊", title: "GST Filing & Compliance", desc: "Complete GST return filing, reconciliation, and compliance management for your business.", items: ["GSTR-1, GSTR-3B Filing", "Input Tax Credit Optimization", "GST Reconciliation & Audit", "E-invoicing Setup & Compliance"], timeline: "Monthly" },
    { emoji: "💰", title: "Income Tax & TDS Returns", desc: "Accurate and timely income tax filing with optimization strategies to minimize your tax burden.", items: ["ITR Filing for All Entity Types", "TDS Return Filing & Compliance", "Advance Tax Calculation", "Tax Planning & Advisory"], timeline: "Annual" },
    { emoji: "🚀", title: "Startup Tax Exemption (80-IAC)", desc: "Help DPIIT-recognized startups claim 100% income tax exemption for 3 consecutive years.", items: ["80-IAC Application Filing", "Inter-Ministerial Board Preparation", "Strategic Year Selection Advisory", "Exemption Claim Support"], timeline: "15-25 Days" },
    { emoji: "🏛️", title: "12A & 80G Registrations", desc: "Enable your NGO/Trust to receive tax-exempt donations and provide donors with tax benefits.", items: ["12A Registration Application", "80G Registration & Renewal", "FCRA Registration Support", "Compliance & Audit Support"], timeline: "30-60 Days" },
    { emoji: "📋", title: "Tax Planning & Advisory", desc: "Proactive tax planning strategies to optimize your business structure and minimize tax liability.", items: ["Business Structure Optimization", "Capital Gains Tax Planning", "Presumptive Taxation Advisory", "International Tax Planning"], timeline: "Ongoing" },
    { emoji: "✅", title: "Annual Compliance Filing", desc: "End-to-end annual compliance management including ROC filings, audits, and statutory returns.", items: ["ROC Annual Return (MGT-7, AOC-4)", "Statutory Audit Coordination", "Director KYC & DIN Updates", "Compliance Calendar Management"], timeline: "Annual" },
  ],
  whyChooseUs: [
    "Dedicated CA and tax professional for each client",
    "Proactive tax-saving strategies, not just filing",
    "100% on-time filing record across all clients",
    "Deep expertise in startup tax exemptions (80-IAC)",
    "State and central tax incentive identification",
    "Automated reminders for all due dates",
    "ITC optimization recovering average 15% more credits",
    "GST audit-proof documentation practices",
    "Multi-entity and group compliance management",
  ],
  process: [
    { step: "01", title: "Tax Health Assessment", desc: "We review your current tax structure, identify gaps, and outline optimization opportunities." },
    { step: "02", title: "Strategy & Planning", desc: "Our tax experts design a personalized strategy to minimize liability while ensuring full compliance." },
    { step: "03", title: "Implementation & Filing", desc: "We handle all filings, registrations, and applications with accuracy and timeliness." },
    { step: "04", title: "Ongoing Monitoring", desc: "Regular reviews, compliance tracking, and advisory to keep your tax position optimized year-round." },
  ],
  faqs: [
    { q: "What is the 80-IAC tax exemption for startups?", a: "Section 80-IAC allows DPIIT-recognized startups to claim 100% income tax exemption for 3 consecutive years out of the first 10 years from incorporation. You choose which 3 years to claim — ideally the most profitable years." },
    { q: "Can I claim both 80-IAC and Angel Tax exemption?", a: "Yes, DPIIT-recognized startups can claim both. 80-IAC provides income tax holiday, while Section 56(2)(viib) exemption protects you from angel tax on share premium. We help you file for both." },
    { q: "How much does GST filing cost?", a: "Our GST filing packages start from ₹999/month for basic compliance. We offer comprehensive packages including GSTR-1, GSTR-3B, reconciliation, and audit support. Contact us for a custom quote based on your transaction volume." },
    { q: "Is 12A registration mandatory for NGOs?", a: "12A registration is required for NGOs/Trusts to claim income tax exemption on their surplus. Without 12A, the NGO's income will be taxed at the applicable rate. We recommend applying within the first year of formation." },
    { q: "How do you help with tax planning for MSMEs?", a: "We analyze your business structure, revenue streams, and expense patterns to identify legitimate tax-saving opportunities — from presumptive taxation to depreciation optimization, state incentives, and scheme-linked benefits." },
  ],
}

export default function TaxExemptionBenefitsPage() {
  return <ServicePageTemplate data={data} />
}
