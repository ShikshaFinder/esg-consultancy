import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "💰",
  breadcrumbLabel: "Business Loans",
  heroTitle: "Fast & Affordable Business Loans",
  heroHighlight: "for MSMEs & Startups",
  heroDesc: "Connecting you with the best loan products from 50+ banks and NBFCs. Collateral-free options, competitive rates, and 48-hour fast-track approvals.",
  heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹110Cr+", label: "Loans Disbursed" },
    { value: "2000+", label: "Loans Processed" },
    { value: "12-18%", label: "Interest Rates" },
    { value: "48hrs", label: "Fast Approval" },
  ],
  services: [
    { emoji: "📈", title: "Working Capital Loans", desc: "Keep your business running with short-term financing for daily operations and cash flow.", items: ["CC/OD Facility (up to ₹5Cr)", "Invoice Discounting & Factoring", "Channel Financing Solutions", "Short-Term Business Loans"], timeline: "5-10 Days" },
    { emoji: "🏗️", title: "Term Loans for Expansion", desc: "Long-term financing for business growth, new projects, and infrastructure development.", items: ["Expansion Loans (up to ₹50Cr)", "Project Finance & Setup Loans", "Green Energy Business Loans", "Startup Term Loans"], timeline: "7-15 Days" },
    { emoji: "🛡️", title: "Equipment & Machinery Finance", desc: "Purpose-built loans for purchasing or upgrading your business equipment and machinery.", items: ["New Machinery Purchase Loans", "Used Equipment Refinancing", "Technology Upgrade Finance", "Construction Equipment Loans"], timeline: "7-10 Days" },
    { emoji: "🏠", title: "MUDRA & Government Loans", desc: "Access government-backed loan schemes with subsidized rates and easier eligibility.", items: ["MUDRA (Shishu/Kishore/Tarun)", "Stand-Up India (₹10L–₹1Cr)", "CGTMSE Collateral-Free Loans", "PMEGP with Margin Money Subsidy"], timeline: "15-30 Days" },
    { emoji: "📑", title: "Loan Against Property", desc: "Unlock the value of your property with competitive interest rates and flexible terms.", items: ["Residential Property LAP", "Commercial Property Mortgage", "Industrial Property Loans", "Balance Transfer & Top-Up"], timeline: "10-15 Days" },
    { emoji: "🎯", title: "Loan Advisory & Documentation", desc: "Expert guidance on loan selection, CIBIL improvement, and complete documentation support.", items: ["CMA Data & Financial Projections", "Bank Proposal Preparation", "CIBIL Score Improvement Plan", "Loan Restructuring Advisory"], timeline: "3-7 Days" },
  ],
  whyChooseUs: [
    "Partnerships with 50+ banks and NBFCs across India",
    "Best interest rate negotiation on your behalf",
    "48-hour fast-track processing for eligible applicants",
    "Minimal documentation with digital-first approach",
    "Collateral-free options under CGTMSE and MUDRA",
    "Expert CIBIL advisory and score improvement support",
    "End-to-end management from application to disbursement",
    "Transparent fees — no hidden charges whatsoever",
    "Dedicated relationship manager for every client",
  ],
  process: [
    { step: "01", title: "Requirement Analysis", desc: "We understand your funding needs and match you with the best loan products available." },
    { step: "02", title: "Documentation & Filing", desc: "Our team prepares CMA data, projections, and all bank-required documents." },
    { step: "03", title: "Processing & Sanction", desc: "We coordinate with banks, handle queries, and fast-track your loan approval." },
    { step: "04", title: "Disbursement & Support", desc: "Funds reach your account and we provide ongoing support for compliance." },
  ],
  faqs: [
    { q: "What is the minimum CIBIL score required?", a: "For unsecured loans, most banks require a CIBIL score of 650+. For secured loans (LAP, machinery), 600+ is generally accepted. If your score is low, our CIBIL assistance team can help improve it before applying." },
    { q: "How much loan can I get for my business?", a: "Loan amounts depend on your business turnover, profitability, collateral, and scheme chosen. MUDRA offers up to ₹10L, CGTMSE up to ₹5Cr collateral-free, and term loans can go up to ₹50Cr with adequate security." },
    { q: "What documents are required for a business loan?", a: "Basic requirements include KYC documents, 6-12 months bank statements, ITR for 2-3 years, GST returns, business proof, and a project report. Our team handles the entire documentation process for you." },
    { q: "Can startups without revenue get business loans?", a: "Yes! Schemes like PMEGP (for new enterprises) and MUDRA Shishu (up to ₹50K) are designed for startups. Startup India-registered companies can also access the Seed Fund Scheme without revenue history." },
    { q: "How fast can I get the loan disbursed?", a: "Timelines vary: Working capital CC/OD can be approved in 5-10 days, MUDRA in 15-20 days, and term loans in 7-15 days. Our banking relationships ensure the fastest possible turnaround." },
  ],
}

export default function LoansPage() {
  return <ServicePageTemplate data={data} />
}
