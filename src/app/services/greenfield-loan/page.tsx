import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏭",
  breadcrumbLabel: "Greenfield Loan",
  heroTitle: "Finance Your New Venture with",
  heroHighlight: "Greenfield Project Loans",
  heroDesc: "Setting up a new manufacturing plant, factory, or industrial unit from scratch? Greenfield loans provide the capital for land, construction, machinery, and working capital — all structured in one financing package.",
  heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹200Cr+", label: "Greenfield Loans" },
    { value: "150+", label: "Projects Financed" },
    { value: "90%", label: "Approval Rate" },
    { value: "₹50L-₹50Cr", label: "Loan Range" },
  ],
  services: [
    { emoji: "📊", title: "Project Viability Assessment", desc: "Technical and financial feasibility analysis for your greenfield project before approaching banks.", items: ["Technical Feasibility Study", "Market & Demand Analysis", "Financial Viability (IRR/DSCR)", "Location & Infrastructure Assessment"], timeline: "7-15 Days" },
    { emoji: "📑", title: "DPR & Project Report", desc: "Comprehensive Detailed Project Report accepted by all major banks and financial institutions.", items: ["Project Cost Breakdown", "Means of Finance Structure", "5-Year Financial Projections", "Break-Even & Sensitivity Analysis"], timeline: "10-20 Days" },
    { emoji: "🏗️", title: "Land & Building Finance", desc: "Financing for land acquisition, factory construction, and civil infrastructure.", items: ["Land Purchase Loan", "Construction Finance", "Industrial Shed / Building Loan", "Civil Infrastructure Funding"], timeline: "30-60 Days" },
    { emoji: "⚙️", title: "Machinery & Equipment Finance", desc: "Dedicated financing for machinery procurement, installation, and commissioning.", items: ["New Machinery Loans", "Imported Equipment Finance", "Installation & Commissioning Cost", "Technology Upgrade Component"], timeline: "20-40 Days" },
    { emoji: "💰", title: "Government Subsidy Layering", desc: "Integrate government subsidies, incentives, and PLI benefits into your greenfield financing.", items: ["State Capital Subsidy (25-40%)", "Interest Subvention Benefits", "PLI Scheme Integration", "MSME Technology Subsidy"], timeline: "30-90 Days" },
    { emoji: "🔄", title: "Post-Sanction & Disbursement", desc: "End-to-end support from loan sanction to final disbursement and project completion.", items: ["Disbursement Schedule Management", "CA Certificate Submissions", "Progress Report Filing", "Working Capital Transition"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "₹200 crore+ in greenfield project loans facilitated",
    "150+ successful greenfield projects across India",
    "90% first-application approval rate",
    "TEV reports accepted by all major banks",
    "Government subsidy integration for 25-40% cost reduction",
    "Multi-bank approach for competitive interest rates",
    "PLI scheme linkage for eligible sectors",
    "Post-sanction disbursement and compliance support",
    "Dedicated project finance manager end to end",
  ],
  process: [
    { step: "01", title: "Feasibility Study", desc: "We assess location, market, technical feasibility, and financial viability." },
    { step: "02", title: "DPR Preparation", desc: "Create bank-ready project report with financial projections and subsidy mapping." },
    { step: "03", title: "Bank Approach", desc: "Submit to multiple banks, negotiate terms, and secure the best financing structure." },
    { step: "04", title: "Disbursement", desc: "Coordinate disbursement in phases aligned with project milestones." },
  ],
  faqs: [
    { q: "What is a greenfield loan?", a: "A greenfield loan finances a completely new project — from scratch. It covers land acquisition, factory/plant construction, machinery purchase, installation, and initial working capital. Unlike brownfield loans (for existing units), greenfield loans fund entire new ventures." },
    { q: "What is the minimum promoter contribution?", a: "Typically 25-33% of the total project cost must come from the promoter (equity). For MSME projects under certain schemes, the effective equity can be lower as government subsidies (15-35%) reduce the promoter's out-of-pocket contribution." },
    { q: "What sectors are eligible for greenfield loans?", a: "All manufacturing sectors (food processing, textiles, chemicals, engineering, pharma, auto components), warehousing, cold chain, solar energy, and infrastructure. PLI-eligible sectors (electronics, pharma, food, auto, textiles) get additional incentives." },
    { q: "How long does it take from application to disbursement?", a: "DPR preparation: 10-20 days, bank processing: 30-60 days, sanction to first disbursement: 15-30 days. Total timeline: 2-4 months. Disbursements happen in phases aligned with project milestones (land, construction, machinery)." },
    { q: "Can I get subsidies on top of the loan?", a: "Yes, many state industrial policies offer 25-40% capital subsidy on fixed investment, interest subvention of 5-7%, stamp duty exemption, and power tariff subsidies. PLI schemes offer 4-6% production incentive. We layer all applicable subsidies to minimize your effective project cost." },
  ],
}

export default function GreenfieldLoanPage() {
  return <ServicePageTemplate data={data} />
}
