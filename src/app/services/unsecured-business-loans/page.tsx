import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "💳",
  breadcrumbLabel: "Unsecured Business Loans",
  heroTitle: "Quick Collateral-Free",
  heroHighlight: "Business Loans",
  heroDesc: "No property, no guarantor — get business loans purely based on your business performance and credit score. Unsecured business loans from ₹1 lakh to ₹50 lakhs with minimal documentation.",
  heroImage: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹75Cr+", label: "Disbursed" },
    { value: "3000+", label: "Loans Processed" },
    { value: "80%", label: "Approval Rate" },
    { value: "48hrs", label: "Fast Approval" },
  ],
  services: [
    { emoji: "⚡", title: "Instant Business Loans", desc: "Quick-approval unsecured loans for urgent working capital needs — disbursement in 48-72 hours.", items: ["₹1L - ₹50L Loan Amount", "No Collateral Required", "Minimal Documentation", "48-Hour Disbursement"], timeline: "2-3 Days" },
    { emoji: "📊", title: "Revenue-Based Financing", desc: "Loans based on your business revenue and cash flow rather than traditional collateral.", items: ["GST Turnover-Based Loans", "Bank Statement Analysis Loans", "POS/Payment Data Lending", "E-Commerce Seller Financing"], timeline: "3-5 Days" },
    { emoji: "🛡️", title: "CGTMSE-Backed Loans", desc: "Collateral-free credit up to ₹5 crore with government guarantee cover.", items: ["Up to ₹5 Cr Without Collateral", "Government Guarantee Cover", "Lower Interest Rates", "Extended Repayment Terms"], timeline: "15-25 Days" },
    { emoji: "💼", title: "Business Line of Credit", desc: "Revolving credit facility — draw what you need, pay interest only on utilized amount.", items: ["Revolving Credit Facility", "Interest on Utilization Only", "Flexible Drawdown & Repay", "Instant Repeat Disbursement"], timeline: "5-7 Days" },
    { emoji: "📱", title: "Fintech & Digital Loans", desc: "Quick loans through fintech partners with digital-first application and instant approval.", items: ["100% Digital Application", "AI-Based Credit Assessment", "E-Sign & E-Stamp", "API-Based Disbursement"], timeline: "1-3 Days" },
    { emoji: "📈", title: "Credit Profile Enhancement", desc: "If you don't qualify today, we help improve your profile for approval in 30-90 days.", items: ["CIBIL Score Improvement", "Banking Habit Optimization", "Financial Statement Preparation", "Re-Application Strategy"], timeline: "30-90 Days" },
  ],
  whyChooseUs: [
    "₹75 crore+ disbursed in unsecured business loans",
    "3000+ successful unsecured loan applications",
    "48-hour fast-track approval for eligible businesses",
    "Zero collateral — no property or guarantor needed",
    "50+ lender partnerships (banks, NBFCs, fintechs)",
    "Revenue-based and GST-based lending options",
    "CGTMSE guarantee facilitation for larger amounts",
    "Credit enhancement for borderline cases",
    "Dedicated loan advisor for each application",
  ],
  process: [
    { step: "01", title: "Quick Assessment", desc: "We check your CIBIL score, turnover, and banking to identify the best unsecured loan option." },
    { step: "02", title: "Lender Matching", desc: "Match you with 3-5 lenders offering the best rates and terms for your profile." },
    { step: "03", title: "Application & Approval", desc: "File applications with minimal documentation and fast-track approval." },
    { step: "04", title: "Disbursement", desc: "Funds in your account within 48-72 hours of approval." },
  ],
  faqs: [
    { q: "What is the eligibility for unsecured business loans?", a: "Basic eligibility: minimum 1 year of business vintage, CIBIL score 650+ (flexible with some lenders), annual turnover ₹10 lakhs+, and regular banking activity. Some fintech lenders accept 6-month-old businesses with good cash flow." },
    { q: "What interest rates can I expect?", a: "Unsecured business loan rates range from 12-24% depending on your credit profile, turnover, and lender. Banks typically offer 12-18%, NBFCs 14-21%, and fintechs 15-24%. CGTMSE-backed loans get the best rates at 10-14%." },
    { q: "How much can I borrow without collateral?", a: "Through our lender network: instant digital loans up to ₹50 lakhs, CGTMSE-backed loans up to ₹5 crore, and revenue-based financing up to ₹2 crore. The amount depends on your turnover, credit score, and business vintage." },
    { q: "What documents are needed?", a: "Minimal documentation: PAN, Aadhaar, 6-12 months bank statements, GST returns (if applicable), and business proof. No property documents, no guarantor. Some fintech lenders provide loans with just PAN+Aadhaar+bank statement." },
    { q: "Can I get an unsecured loan with a low CIBIL score?", a: "If your CIBIL is below 650, options are limited but not zero. Some NBFCs and fintechs approve loans at 600+ with higher interest. We also offer credit enhancement services to improve your score within 30-90 days before re-applying." },
  ],
}

export default function UnsecuredBusinessLoansPage() {
  return <ServicePageTemplate data={data} />
}
