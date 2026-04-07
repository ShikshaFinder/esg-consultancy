import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏦",
  breadcrumbLabel: "NBFC & Alternative Lending",
  heroTitle: "Access Quick Business Loans via",
  heroHighlight: "NBFC & Alternative Lenders",
  heroDesc: "When traditional bank loans don't work out, NBFCs and alternative lenders offer faster approvals, flexible eligibility, and collateral-free options for MSMEs with CIBIL scores as low as 550+.",
  heroImage: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹50L", label: "Max Unsecured Loan" },
    { value: "48 Hrs", label: "Fast Approval" },
    { value: "550+", label: "Min CIBIL Accepted" },
    { value: "15+", label: "NBFC Partners" },
  ],
  services: [
    { emoji: "⚡", title: "Quick Business Loans", desc: "Unsecured business loans from ₹1L to ₹50L with minimal documentation and fast disbursement.", items: ["Loan Amount: ₹1L – ₹50L", "Approval in 24-48 Hours", "No Collateral Required", "Flexible Repayment Tenure"], timeline: "1-3 Days" },
    { emoji: "📊", title: "Revenue-Based Financing", desc: "Pay a percentage of monthly revenue instead of fixed EMIs — perfect for seasonal businesses.", items: ["No Fixed EMI Pressure", "Scales With Your Revenue", "Ideal for Seasonal Businesses", "Quick Setup & Disbursement"], timeline: "3-7 Days" },
    { emoji: "💳", title: "Working Capital Lines", desc: "Revolving credit lines to manage cash flow gaps, inventory purchases, and operational expenses.", items: ["Credit Line up to ₹25L", "Pay Interest Only on Usage", "Instant Drawdown Facility", "Auto-Renewal Options"], timeline: "5-10 Days" },
    { emoji: "🏪", title: "Merchant Cash Advance", desc: "Advance against your future credit/debit card or UPI sales — repay automatically as you earn.", items: ["Based on Digital Sales History", "No Fixed EMI Schedule", "Auto-Deduction from Sales", "No Collateral Needed"], timeline: "2-5 Days" },
    { emoji: "📱", title: "Digital Lending Partners", desc: "We connect you with top fintech lenders offering the best rates for your business profile.", items: ["Bajaj Finserv, Tata Capital", "Lendingkart, FlexiLoans", "NeoGrowth, ZipLoan", "Best Rate Comparison"], timeline: "1-3 Days" },
    { emoji: "🔄", title: "Loan Refinancing", desc: "Refinance existing high-interest loans with better terms from our NBFC network.", items: ["Lower Interest Rates", "Longer Repayment Terms", "Consolidate Multiple Loans", "Balance Transfer Options"], timeline: "7-15 Days" },
  ],
  whyChooseUs: [
    "Access to 15+ NBFC and fintech lending partners",
    "CIBIL scores as low as 550 accepted by select lenders",
    "Alternative credit assessment using GST and bank data",
    "No collateral required for most loan products",
    "Same-day disbursement for pre-approved profiles",
    "Revenue-based options for seasonal businesses",
    "Dedicated relationship manager for loan processing",
    "Free CIBIL score check and improvement advisory",
    "Post-disbursement support and refinancing guidance",
  ],
  process: [
    { step: "01", title: "Profile Assessment", desc: "We analyze your business profile, revenue data, and credit history to match you with the right lender." },
    { step: "02", title: "Lender Matching", desc: "Our algorithm matches your profile with 15+ NBFCs to find the best rates and approval probability." },
    { step: "03", title: "Application & Approval", desc: "We submit your application with optimized documentation — most get approved within 24-48 hours." },
    { step: "04", title: "Disbursement", desc: "Once approved, funds are disbursed directly to your account. We assist with any post-disbursement needs." },
  ],
  faqs: [
    { q: "How is an NBFC loan different from a bank loan?", a: "NBFCs typically have more flexible eligibility criteria, faster processing (24-48 hours vs 2-3 weeks for banks), and accept lower CIBIL scores. Interest rates are slightly higher (14-24% vs 8-14% for banks), but the speed and accessibility make them ideal for urgent funding needs." },
    { q: "What is the minimum CIBIL score required?", a: "Most of our NBFC partners accept scores from 550+. Some fintech lenders use alternative credit assessment (GST data, bank statement analysis, digital transaction history) and may lend even without a traditional CIBIL score." },
    { q: "Can I get an NBFC loan if my bank loan was rejected?", a: "Yes, this is one of the most common scenarios we handle. Bank rejection doesn't mean you're not creditworthy — it often means you don't fit the bank's rigid criteria. NBFCs evaluate differently, and we help present your profile in the most favorable way." },
    { q: "What documents do I need for an NBFC loan?", a: "Basic requirements include PAN, Aadhaar, bank statements (6 months), GST returns (if registered), and business proof. Some lenders require only your bank statement and PAN for pre-approval. We provide a tailored checklist." },
    { q: "Should I choose NBFC or government scheme loans?", a: "We recommend government scheme loans (MUDRA, CGTMSE, PMEGP) as primary funding due to lower interest rates and subsidies. Use NBFC loans as bridge financing for urgent needs or when government scheme processing is in progress." },
  ],
}

export default function NBFCPage() {
  return <ServicePageTemplate data={data} />
}
