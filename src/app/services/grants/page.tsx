import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏛️",
  breadcrumbLabel: "Government Grants",
  heroTitle: "Access Government Grants & Subsidies",
  heroHighlight: "for Your Business",
  heroDesc: "Expert guidance on securing non-repayable government grants, subsidies, and scheme benefits for MSMEs and startups across India.",
  heroImage: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹50Cr+", label: "Grants Secured" },
    { value: "200+", label: "Applications Filed" },
    { value: "85%", label: "Approval Rate" },
    { value: "30+", label: "Schemes Covered" },
  ],
  services: [
    { emoji: "🚀", title: "Startup India Grants", desc: "DPIIT recognition and seed fund access for innovative startups.", items: ["DPIIT Recognition & Benefits", "Seed Fund Scheme (up to ₹50L)", "Fund of Funds Access", "Tax Exemption under 80IAC"], timeline: "15-30 Days" },
    { emoji: "🏭", title: "MSME & Capital Subsidies", desc: "Capital subsidy schemes designed exclusively for micro and small enterprises.", items: ["CLCSS 15% Capital Subsidy", "PM Vishwakarma Benefits", "SFURTI Cluster Development", "Lean Manufacturing Support"], timeline: "30-60 Days" },
    { emoji: "🔬", title: "R&D & Innovation Grants", desc: "Funding for research-driven businesses pushing the boundaries of innovation.", items: ["DSIR Recognition & Grants", "BIRAC BIG Grant (up to ₹50L)", "NIDHI Prayas (up to ₹10L)", "Technology Development Board"], timeline: "45-90 Days" },
    { emoji: "🌾", title: "Sector-Specific Schemes", desc: "Targeted subsidies for food processing, textiles, agriculture, and manufacturing.", items: ["PMFME Food Processing (up to ₹10L)", "TUFS Textiles Support", "PLI Scheme Benefits", "Agri-Infrastructure Fund"], timeline: "Varies" },
    { emoji: "📋", title: "State Government Incentives", desc: "State-level industrial policy benefits, stamp duty waivers, and power subsidies.", items: ["State Industrial Policy Benefits", "Stamp Duty & SGST Reimbursement", "Land & Power Subsidies", "Employment-Linked Incentives"], timeline: "30-90 Days" },
    { emoji: "📑", title: "Documentation & Filing", desc: "Complete application support from eligibility check to disbursement.", items: ["Eligibility Assessment", "Project Report Preparation", "Application Filing & Follow-up", "Disbursement & Utilization Support"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "Deep knowledge of 30+ central & state government schemes",
    "85% grant approval rate — well above industry average",
    "End-to-end application management with zero hassle",
    "Expertise across both state and central government schemes",
    "Sector-specific guidance for your industry vertical",
    "Zero-cost initial eligibility assessment for all applicants",
    "Post-sanction compliance and utilization certificate support",
    "Dedicated tracking dashboard with real-time updates",
    "Regular alerts on new schemes and policy changes",
  ],
  process: [
    { step: "01", title: "Eligibility Check", desc: "We assess your business against 30+ government schemes to find the best matches." },
    { step: "02", title: "Documentation", desc: "Our team prepares all required documents, project reports, and application forms." },
    { step: "03", title: "Application Filing", desc: "We file your application and coordinate with government agencies on your behalf." },
    { step: "04", title: "Disbursement Support", desc: "We follow up until funds are disbursed and help with utilization compliance." },
  ],
  faqs: [
    { q: "What is the difference between a grant and a subsidy?", a: "A grant is a lump-sum amount given for a specific purpose (like starting a new unit), while a subsidy is a partial reimbursement of costs already incurred (like machinery purchase). Both are non-repayable government benefits that Grow Bridge can help you access." },
    { q: "Am I eligible for government grants?", a: "Eligibility depends on factors like business type, sector, location, turnover, and social category. Our free eligibility check assesses your profile against 30+ schemes to find every opportunity you qualify for." },
    { q: "How long does grant approval take?", a: "Timelines vary by scheme — Startup India takes 15-30 days, CLCSS subsidies 30-60 days, and R&D grants 45-90 days. We ensure fastest possible processing through our established government relationships." },
    { q: "Do I need to repay the grant amount?", a: "No. Grants and subsidies are non-repayable government benefits. Once sanctioned and disbursed, you only need to submit utilization certificates showing the funds were used for the intended purpose." },
    { q: "Can I apply for multiple grants at once?", a: "Yes, in many cases you can be eligible for multiple schemes simultaneously. For example, you could access Startup India benefits while also applying for state-level subsidies and CLCSS capital subsidy." },
  ],
}

export default function GrantsPage() {
  return <ServicePageTemplate data={data} />
}
