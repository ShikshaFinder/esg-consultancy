import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏛️",
  breadcrumbLabel: "Government Grants and Funding",
  heroTitle: "Access Government",
  heroHighlight: "Grants & Subsidies",
  heroDesc: "India offers 200+ government schemes providing grants, subsidies, and financial support to MSMEs and startups. We identify eligible schemes, prepare applications, and maximize your funding success.",
  heroImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹85Cr+", label: "Grants Facilitated" },
    { value: "3000+", label: "Applications Filed" },
    { value: "78%", label: "Approval Rate" },
    { value: "200+", label: "Schemes Covered" },
  ],
  services: [
    { emoji: "🔍", title: "Scheme Eligibility Mapping", desc: "Comprehensive assessment of your business to identify all applicable government grant schemes.", items: ["Central Government Schemes", "State Government Schemes", "Sector-Specific Grants", "Stage-Based Eligibility Analysis"], timeline: "3-5 Days" },
    { emoji: "📋", title: "PMEGP Grant Application", desc: "Prime Minister's Employment Generation Programme — up to ₹50 lakhs with 15-35% subsidy.", items: ["DIC/KVIC Application Filing", "Project Report Preparation", "Margin Money Subsidy Claim", "Bank Loan Coordination"], timeline: "30-60 Days" },
    { emoji: "🚀", title: "Startup India Grants", desc: "Access grants under Startup India including Seed Fund, SISFS, and innovation grants.", items: ["Seed Fund Scheme (up to ₹50L)", "SISFS Application Support", "Incubator Network Access", "Milestone-Based Disbursement"], timeline: "30-90 Days" },
    { emoji: "🏭", title: "State Industrial Subsidies", desc: "Navigate state industrial policies for capital subsidies, interest subsidies, and incentives.", items: ["State Policy Analysis", "Capital Subsidy Application", "Interest Subsidy Claims", "Stamp Duty & Power Rebates"], timeline: "30-90 Days" },
    { emoji: "🔬", title: "R&D and Innovation Grants", desc: "Access grants from BIRAC, DST, DSIR, and other science & technology departments.", items: ["BIRAC BIG / SBIRI Grants", "DST NIDHI Prayas Funding", "DSIR Recognition & Grants", "TDB Project Funding"], timeline: "60-120 Days" },
    { emoji: "📊", title: "Grant Documentation & Reporting", desc: "Complete documentation, utilization certificates, and milestone reporting for approved grants.", items: ["Project Report Preparation", "Utilization Certificate Filing", "Milestone Report Submission", "Audit & Compliance Support"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "₹85 crore+ in government grants successfully facilitated",
    "200+ government schemes mapped and tracked",
    "78% approval rate — 2x the national average",
    "Expert team across central and state schemes",
    "Complete project report and DPR preparation",
    "Post-approval utilization and compliance support",
    "Relationships with DIC, KVIC, and state bodies",
    "Multi-scheme application strategy for maximum benefit",
    "Dedicated grant advisor assigned to every client",
  ],
  process: [
    { step: "01", title: "Eligibility Assessment", desc: "We analyze your business and map all eligible government schemes across central and state levels." },
    { step: "02", title: "Documentation", desc: "Prepare project reports, DPR, financial projections, and all scheme-specific documents." },
    { step: "03", title: "Application & Filing", desc: "File applications through appropriate channels and coordinate with government bodies." },
    { step: "04", title: "Approval & Disbursement", desc: "Track applications, handle queries, and support disbursement and compliance." },
  ],
  faqs: [
    { q: "What types of government grants are available?", a: "Grants include: subsidy on capital investment (15-35%), interest subsidies on loans, technology upgrade grants, R&D funding, export promotion incentives, employment generation subsidies, and sector-specific grants for food processing, textiles, technology, etc." },
    { q: "Am I eligible for government grants?", a: "Most MSMEs and startups are eligible for multiple schemes. Eligibility depends on: business type, sector, location (special zones get additional benefits), investment size, turnover, innovation level, and social category of promoter. Our free assessment covers all criteria." },
    { q: "How much funding can I get through grants?", a: "Grant amounts vary: PMEGP offers up to ₹50 lakhs (15-35% subsidy), Startup India Seed Fund up to ₹50 lakhs, state subsidies 25-40% of capital investment, BIRAC grants ₹50L-₹1Cr, and specialized schemes can go up to ₹5-10 crore." },
    { q: "How long does grant approval take?", a: "Timelines vary by scheme: Udyam-related benefits are instant, PMEGP takes 30-60 days, state subsidies 60-90 days, and R&D grants from BIRAC/DST take 90-120 days. We fast-track applications through established channels." },
    { q: "Do I need to repay government grants?", a: "Grants are non-repayable — they are subsidies, not loans. However, you must use the funds for the stated purpose and file utilization certificates. If misused, grants can be recalled. Loan-linked subsidies reduce your loan burden but the remaining loan must be repaid." },
  ],
}

export default function GovernmentGrantsPage() {
  return <ServicePageTemplate data={data} />
}
