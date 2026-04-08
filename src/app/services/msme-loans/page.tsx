import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "💰",
  breadcrumbLabel: "MSME Loans",
  heroTitle: "Affordable Business Loans for",
  heroHighlight: "MSMEs & Startups",
  heroDesc: "Access collateral-free and subsidized loans through MUDRA, CGTMSE, Stand-Up India, and 50+ banking partners. From ₹50,000 to ₹5 crore — we match you with the right loan product.",
  heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹110Cr+", label: "Loans Disbursed" },
    { value: "2500+", label: "Loans Processed" },
    { value: "85%", label: "Approval Rate" },
    { value: "50+", label: "Banking Partners" },
  ],
  services: [
    { emoji: "📈", title: "MUDRA Loans", desc: "Pradhan Mantri MUDRA Yojana — collateral-free loans up to ₹10 lakhs for micro businesses.", items: ["Shishu (up to ₹50,000)", "Kishore (₹50K - ₹5 Lakhs)", "Tarun (₹5L - ₹10 Lakhs)", "MUDRA Card Facility"], timeline: "15-20 Days" },
    { emoji: "🛡️", title: "CGTMSE Guarantee Loans", desc: "Collateral-free credit up to ₹5 crore with Credit Guarantee Fund Trust coverage.", items: ["CGTMSE Guarantee Application", "Bank Loan Coordination", "Up to ₹5 Cr Collateral-Free", "Annual Guarantee Fee Support"], timeline: "20-30 Days" },
    { emoji: "🏗️", title: "Term Loans for Expansion", desc: "Long-term financing for machinery, equipment, infrastructure, and business expansion.", items: ["Machinery & Equipment Loans", "Plant Expansion Finance", "Technology Upgrade Loans", "Working Capital Term Loans"], timeline: "15-30 Days" },
    { emoji: "📊", title: "Working Capital Loans", desc: "Short-term financing for day-to-day operations, inventory, and cash flow management.", items: ["CC/OD Facility", "Invoice Discounting", "Channel Finance", "Packing Credit"], timeline: "7-15 Days" },
    { emoji: "🏛️", title: "Government Scheme Loans", desc: "Loans under PMEGP, Stand-Up India, and other government-backed MSME schemes.", items: ["PMEGP (up to ₹50L with subsidy)", "Stand-Up India (₹10L-₹1Cr)", "PSB Loans in 59 Minutes", "CLCSS Technology Upgrade"], timeline: "30-60 Days" },
    { emoji: "📑", title: "Loan Documentation & CMA", desc: "Complete documentation support including CMA data, project reports, and bank proposals.", items: ["CMA Data Preparation", "Project Report / DPR", "Financial Projections (3-5 Yr)", "Bank Proposal Document"], timeline: "5-10 Days" },
  ],
  whyChooseUs: [
    "₹110 crore+ in MSME loans successfully disbursed",
    "50+ banking and NBFC partnerships pan-India",
    "85% loan approval rate — industry leading",
    "Collateral-free loan expertise (MUDRA, CGTMSE)",
    "Complete CMA data and project report preparation",
    "Government scheme loan specialists (PMEGP, Stand-Up India)",
    "Best interest rate negotiation across multiple banks",
    "48-hour fast-track for eligible applications",
    "Dedicated loan relationship manager for each client",
  ],
  process: [
    { step: "01", title: "Needs Analysis", desc: "We assess your loan requirement, eligibility, and match you with the best loan product." },
    { step: "02", title: "Documentation", desc: "Prepare CMA data, project report, financials, and all bank-required documents." },
    { step: "03", title: "Bank Processing", desc: "File with the right bank, coordinate all queries, and fast-track approval." },
    { step: "04", title: "Disbursement", desc: "Loan sanctioned and disbursed to your account with ongoing compliance support." },
  ],
  faqs: [
    { q: "What is the minimum CIBIL score for MSME loans?", a: "For collateral-free loans (MUDRA, CGTMSE), most banks want 650+ CIBIL. For secured loans, 600+ works. Government scheme loans like PMEGP and Stand-Up India are more flexible. If your score is low, we offer CIBIL improvement services." },
    { q: "Can new businesses get MSME loans?", a: "Yes! PMEGP is specifically for new enterprises (up to ₹50L with 15-35% subsidy). MUDRA Shishu (up to ₹50K) requires minimal documentation. Stand-Up India provides ₹10L-₹1Cr for SC/ST and women entrepreneurs. Startup India schemes also work for new businesses." },
    { q: "What is CGTMSE and how does it help?", a: "CGTMSE (Credit Guarantee Fund Trust for MSEs) guarantees loans up to ₹5 crore so you don't need to provide collateral. The guarantee covers up to 85% of the loan amount. Banks are more willing to lend under CGTMSE, and interest rates are typically 1-2% lower." },
    { q: "What documents are needed for MSME loans?", a: "Basic documents: KYC (PAN, Aadhaar, address proof), 6-12 months bank statements, 2-3 years ITR, GST returns, business proof (Udyam/GST certificate), and a project report. For government schemes, additional scheme-specific documents are needed. We handle all documentation." },
    { q: "How fast can I get the loan?", a: "PSB Loans in 59 Minutes gives in-principle approval in under an hour. MUDRA loans take 15-20 days, CGTMSE 20-30 days, and term loans 15-30 days. Our banking relationships ensure fastest turnaround — we've achieved 48-hour approval for select cases." },
  ],
}

export default function MSMELoansPage() {
  return <ServicePageTemplate data={data} />
}
