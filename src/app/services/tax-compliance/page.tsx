import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "💰",
  breadcrumbLabel: "Tax & Compliance",
  heroTitle: "Smart Tax Planning &",
  heroHighlight: "Full Compliance",
  heroDesc: "Complete tax planning and compliance services including GST filing, income tax returns, TDS compliance, startup tax benefits, and financial advisory.",
  heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "100%", label: "Compliance Rate" },
    { value: "500+", label: "Businesses Served" },
    { value: "₹5Cr+", label: "Tax Saved" },
    { value: "Zero", label: "Penalty Record" },
  ],
  services: [
    { emoji: "📝", title: "GST Filing & Compliance", desc: "Timely and accurate GST return filing to keep your business fully compliant.", items: ["GSTR-1 & GSTR-3B Monthly Filing", "Annual Return (GSTR-9)", "GST Registration & Amendment", "Input Tax Credit Reconciliation"], timeline: "Monthly" },
    { emoji: "💰", title: "Income Tax Services", desc: "Strategic tax planning and filing to minimize your liability legally.", items: ["ITR Filing (All Forms)", "Tax Planning & Advisory", "Capital Gains Computation", "Advance Tax Calculation"], timeline: "Annual" },
    { emoji: "📋", title: "TDS Compliance", desc: "Accurate TDS deduction, deposit, and return filing every quarter.", items: ["TDS Return Filing (24Q/26Q)", "Form 16 & 16A Generation", "TDS Payment & Challan Prep", "TDS Reconciliation & Correction"], timeline: "Quarterly" },
    { emoji: "🔍", title: "Tax Audit & Assessment", desc: "Professional audit support and representation before tax authorities.", items: ["Section 44AB Tax Audit", "GST Audit Support", "Transfer Pricing Documentation", "IT Authority Representation"], timeline: "Annual" },
    { emoji: "🚀", title: "Startup Tax Benefits", desc: "Maximize tax savings through DPIIT recognition and Section 80IAC exemptions.", items: ["DPIIT Recognition Filing", "80-IAC Tax Holiday Application", "3-Year Complete Tax Exemption", "Angel Tax Exemption (56(2)(viib))"], timeline: "One-Time" },
    { emoji: "📊", title: "Financial Planning", desc: "Strategic advisory to optimize your tax position and build wealth.", items: ["Tax-Saving Investment Advisory", "Capital Gains Planning", "Deduction Optimization (80C/80D)", "Business Wealth Management"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "100% compliance record — zero penalties for our clients",
    "₹5Cr+ total tax savings achieved for MSME clients",
    "Dedicated CA assigned for every business account",
    "Proactive tax planning — not just filing after the fact",
    "Real-time compliance dashboard with deadline alerts",
    "Startup-friendly pricing with monthly payment options",
    "Expert handling of all government notices and assessments",
    "Multi-entity expertise — companies, LLPs, partnerships, sole props",
    "Regular tax law updates and planning recommendations",
  ],
  process: [
    { step: "01", title: "Assessment", desc: "We review your business structure, income sources, and current compliance status." },
    { step: "02", title: "Registration", desc: "Complete setup of GST, PAN, TAN, and any pending tax registrations." },
    { step: "03", title: "Compliance", desc: "Timely filing of all returns, TDS, and statutory requirements on your behalf." },
    { step: "04", title: "Optimization", desc: "Ongoing tax planning to minimize liability and maximize eligible deductions." },
  ],
  faqs: [
    { q: "Can startups really save 100% tax for 3 years?", a: "Yes! Under Section 80IAC, DPIIT-recognized startups can claim a complete tax holiday for any 3 consecutive years out of the first 10 years. This means zero income tax on your profits. We handle the entire 80IAC application process." },
    { q: "How often do I need to file GST returns?", a: "Regular taxpayers file GSTR-1 (outward supplies) and GSTR-3B (summary) monthly. Businesses under ₹5Cr turnover can opt for quarterly filing under QRMP scheme. Annual return GSTR-9 is filed once yearly." },
    { q: "Is income tax filing mandatory for all businesses?", a: "Yes, all registered companies and LLPs must file ITR regardless of income. For individuals/proprietors, filing is mandatory if income exceeds ₹2.5L (or ₹3L/5L for senior citizens). We recommend filing even below the threshold for loan eligibility." },
    { q: "What happens if I miss a GST filing deadline?", a: "Late filing attracts ₹50/day penalty (₹20/day for nil returns), capped at ₹5,000 per return. Continuous non-filing can lead to GST cancellation. We ensure you never miss a deadline through our automated reminder system." },
    { q: "Can you handle tax notices and assessments?", a: "Absolutely. Our experienced CAs handle all types of tax notices — income tax scrutiny, GST show cause notices, TDS default notices, and assessment proceedings. We represent you before tax authorities and ensure the best possible outcome." },
  ],
}

export default function TaxCompliancePage() {
  return <ServicePageTemplate data={data} />
}
