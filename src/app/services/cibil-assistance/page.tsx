import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📊",
  breadcrumbLabel: "CIBIL Assistance",
  heroTitle: "Fix & Boost Your",
  heroHighlight: "Credit Score",
  heroDesc: "Professional credit repair and score improvement services. We rectify errors, resolve disputes, and build your creditworthiness for better loan approvals.",
  heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "500+", label: "Scores Improved" },
    { value: "85%", label: "Dispute Success" },
    { value: "150+", label: "Avg Pts Increase" },
    { value: "45 Days", label: "Avg Resolution" },
  ],
  services: [
    { emoji: "🔧", title: "CIBIL Error Correction", desc: "Identify and fix inaccurate entries that are dragging your credit score down.", items: ["Incorrect Account Removal", "Duplicate Entry Correction", "Wrong Payment Status Fix", "Identity Mismatch Resolution"], timeline: "30-45 Days" },
    { emoji: "🚫", title: "Negative Remarks Removal", desc: "Dispute and resolve written-off, settled, or incorrectly reported accounts.", items: ["Written-Off Account Disputes", "Settled Account Reclassification", "Late Payment Status Correction", "DPD (Days Past Due) Rectification"], timeline: "45-60 Days" },
    { emoji: "📊", title: "CCR Score Enhancement", desc: "Strategic improvement of your Commercial Credit Report for business loans.", items: ["CCR Score Optimization", "Business Credit Line Building", "Trade Line Improvement", "Credit Utilization Strategy"], timeline: "60-90 Days" },
    { emoji: "📈", title: "Credit Score Improvement", desc: "Comprehensive plan to boost your personal and business credit scores.", items: ["Score Boost Roadmap", "Debt Restructuring Advice", "Credit Mix Optimization", "Hard Inquiry Management"], timeline: "45-90 Days" },
    { emoji: "⚖️", title: "Multi-Bureau Disputes", desc: "File and manage disputes across all four credit bureaus in India.", items: ["CIBIL/TransUnion Disputes", "Experian India Disputes", "Equifax India Disputes", "CRIF High Mark Disputes"], timeline: "30-60 Days" },
    { emoji: "🎯", title: "Loan Eligibility Optimization", desc: "Prepare your credit profile for maximum loan approval probability.", items: ["Pre-Application Credit Audit", "Lender Requirement Mapping", "Profile Strengthening Plan", "Application Timing Strategy"], timeline: "30-45 Days" },
  ],
  whyChooseUs: [
    "Higher loan approval probability after score improvement",
    "Better interest rates with improved credit standing",
    "Increased credit limits and borrowing capacity",
    "Error-free credit reports across all 4 bureaus",
    "Improved financial reputation and business credibility",
    "Faster loan processing with clean credit history",
    "Enhanced creditworthiness for premium banking products",
    "Expert multi-bureau dispute management",
    "Target score of 750+ for all our clients",
  ],
  process: [
    { step: "01", title: "Free Credit Audit", desc: "We pull and analyze your credit reports from all four bureaus to identify issues." },
    { step: "02", title: "Strategy & Roadmap", desc: "Custom improvement plan with realistic timelines and expected score increases." },
    { step: "03", title: "Dispute & Rectification", desc: "We file disputes, send legal notices, and follow up until all errors are resolved." },
    { step: "04", title: "Score Monitoring", desc: "Regular monitoring and guidance until your target score of 750+ is achieved." },
  ],
  faqs: [
    { q: "How much can my credit score improve?", a: "Results depend on the nature of issues. Error corrections can improve scores by 50-200 points. Negative remark removal typically adds 80-150 points. On average, our clients see an improvement of 150+ points within 45-90 days." },
    { q: "Is credit repair legal in India?", a: "Absolutely. Credit repair through legitimate dispute resolution is completely legal. We follow RBI guidelines and credit bureau dispute mechanisms to correct genuine errors and inaccuracies in your credit report." },
    { q: "Which credit bureaus do you work with?", a: "We work with all four credit bureaus in India — CIBIL (TransUnion), Experian, Equifax, and CRIF High Mark. Most lenders check CIBIL, but we ensure your reports are clean across all bureaus." },
    { q: "Can settled or written-off accounts be fixed?", a: "Yes, in many cases. If the account was incorrectly marked or if the reporting period has issues, we can dispute and get it rectified. We also help with 'No Dues' certificates and reclassification of settled accounts." },
    { q: "How long does the credit repair process take?", a: "Simple error corrections take 30-45 days. Negative remark disputes take 45-60 days. Comprehensive score improvement programs run 60-90 days. We provide weekly progress updates throughout the process." },
  ],
}

export default function CibilAssistancePage() {
  return <ServicePageTemplate data={data} />
}
