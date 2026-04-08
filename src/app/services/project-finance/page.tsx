import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏗️",
  breadcrumbLabel: "Project Finance",
  heroTitle: "Structured Financing for",
  heroHighlight: "Large-Scale Projects",
  heroDesc: "End-to-end project finance solutions for manufacturing plants, infrastructure, real estate, and industrial projects. We structure debt packages, coordinate with multiple lenders, and ensure optimal financing.",
  heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹500Cr+", label: "Projects Financed" },
    { value: "200+", label: "Projects Completed" },
    { value: "30+", label: "Lender Partners" },
    { value: "₹1Cr-₹100Cr", label: "Ticket Size" },
  ],
  services: [
    { emoji: "📊", title: "Project Feasibility Analysis", desc: "Comprehensive feasibility study covering technical, financial, and market viability of your project.", items: ["Techno-Economic Viability (TEV)", "Market Demand Assessment", "Financial Viability Analysis", "Risk Assessment & Mitigation"], timeline: "10-15 Days" },
    { emoji: "📑", title: "Detailed Project Report (DPR)", desc: "Bank-ready DPR with financial projections, break-even analysis, and capacity planning.", items: ["Project Cost Estimation", "Revenue & P&L Projections", "Break-Even & IRR Analysis", "Working Capital Assessment"], timeline: "10-20 Days" },
    { emoji: "🏦", title: "Debt Structuring & Syndication", desc: "Optimal debt structuring with multiple lenders for the best terms and interest rates.", items: ["Debt-Equity Ratio Optimization", "Term Loan Structuring", "Working Capital Arrangement", "Multi-Bank Consortium Syndication"], timeline: "30-60 Days" },
    { emoji: "💰", title: "Government Subsidy Integration", desc: "Layer government subsidies and incentives on top of your project financing.", items: ["Capital Subsidy Mapping", "Interest Subvention Claims", "State Industrial Policy Benefits", "PLI Scheme Linkage"], timeline: "30-90 Days" },
    { emoji: "📋", title: "CMA Data & Bank Proposals", desc: "Prepare comprehensive CMA data and presentations for bank appraisal committees.", items: ["CMA Data (Past 3 + Projected 5 Yr)", "Fund Flow & Balance Sheet Projections", "Bank Appraisal Presentation", "Collateral Valuation Support"], timeline: "7-15 Days" },
    { emoji: "🔄", title: "Disbursement & Monitoring", desc: "Post-sanction support for loan disbursement, utilization, and compliance monitoring.", items: ["Disbursement Coordination", "CA Certificate Submissions", "Stock & Book Debt Statements", "Annual Review Documentation"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "₹500 crore+ in project financing facilitated",
    "200+ projects across manufacturing & infrastructure",
    "Consortium lending coordination with 30+ banks",
    "TEV and DPR preparation by chartered engineers",
    "Government subsidy integration for lower project cost",
    "CMA data accepted by all major banks",
    "Post-sanction compliance and monitoring support",
    "Interest rate negotiation saving 0.5-1% on average",
    "Dedicated project finance manager for each project",
  ],
  process: [
    { step: "01", title: "Feasibility Study", desc: "We conduct TEV analysis, market study, and financial viability assessment." },
    { step: "02", title: "DPR & Documentation", desc: "Prepare detailed project report, CMA data, and bank proposal documents." },
    { step: "03", title: "Bank Coordination", desc: "Approach banks, structure debt, negotiate terms, and coordinate consortium if needed." },
    { step: "04", title: "Sanction & Disbursement", desc: "Support through sanction to disbursement and ongoing compliance monitoring." },
  ],
  faqs: [
    { q: "What projects qualify for project finance?", a: "Manufacturing plants, food processing units, warehousing, logistics hubs, solar/renewable energy projects, real estate, infrastructure, industrial expansion, and greenfield/brownfield projects. Minimum project cost is typically ₹1 crore for structured financing." },
    { q: "What is the typical debt-equity ratio?", a: "Most banks require 25-35% equity (promoter contribution) and finance 65-75% as debt. For government scheme-linked projects, the equity requirement can be lower as subsidies count towards promoter contribution in certain cases." },
    { q: "How long does project loan approval take?", a: "From DPR submission to sanction: 30-60 days for single-bank loans, 60-90 days for consortium lending. TEV study takes 7-10 days, CMA/DPR preparation 10-20 days. Total cycle: 2-4 months including documentation." },
    { q: "What interest rates can I expect?", a: "Project finance rates range from 9-13% depending on project risk, collateral, promoter track record, and bank relationship. Government scheme projects (PLI, state industrial policy) can get subsidized rates 2-3% lower. We negotiate the best rate across multiple banks." },
    { q: "Can I get project finance without collateral?", a: "For large projects, banks typically require land/building/machinery as primary security. However, CGTMSE covers up to ₹5 crore collateral-free for MSMEs. Stand-Up India and certain state schemes also reduce collateral requirements for specific categories." },
  ],
}

export default function ProjectFinancePage() {
  return <ServicePageTemplate data={data} />
}
