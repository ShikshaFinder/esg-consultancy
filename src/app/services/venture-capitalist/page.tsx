import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📊",
  breadcrumbLabel: "Venture Capitalist",
  heroTitle: "Raise Growth Capital from",
  heroHighlight: "Venture Capitalists",
  heroDesc: "Connect with India's top VC firms and institutional investors. We prepare your startup for fundraising with compelling pitch decks, financial models, and investor-ready documentation.",
  heroImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹150Cr+", label: "VC Raises Facilitated" },
    { value: "300+", label: "Startups Supported" },
    { value: "120+", label: "VC Network" },
    { value: "Pre-Seed to Series B", label: "Stage Coverage" },
  ],
  services: [
    { emoji: "📊", title: "Fundraising Readiness Assessment", desc: "Evaluate if your startup is ready for VC funding and what you need to improve.", items: ["Business Model Evaluation", "Market & Traction Analysis", "Team & Cap Table Review", "Valuation Range Estimation"], timeline: "3-5 Days" },
    { emoji: "📑", title: "Pitch Deck & Investment Memo", desc: "Create a compelling narrative that resonates with VCs and communicates your growth potential.", items: ["Problem-Solution Story", "Market Sizing (TAM/SAM/SOM)", "Financial Projections (5-Year)", "Competitive Moat Articulation"], timeline: "7-10 Days" },
    { emoji: "💰", title: "Financial Model & Valuation", desc: "Build robust financial models and arrive at a defensible valuation for negotiations.", items: ["Revenue Model Building", "Unit Economics Analysis", "DCF / Comparable Valuation", "Use of Funds Planning"], timeline: "5-7 Days" },
    { emoji: "🤝", title: "Investor Matching & Outreach", desc: "Connect with pre-vetted VCs whose investment thesis aligns with your sector and stage.", items: ["VC Firm Research & Shortlisting", "Warm Introduction Facilitation", "Partner-Level Connections", "Multi-VC Parallel Process"], timeline: "15-30 Days" },
    { emoji: "📋", title: "Due Diligence Preparation", desc: "Prepare for VC due diligence with organized data room and clean documentation.", items: ["Virtual Data Room Setup", "Legal Document Organization", "Financial Audit Preparation", "Compliance Checklist Verification"], timeline: "7-14 Days" },
    { emoji: "⚖️", title: "Term Sheet & Negotiation", desc: "Expert advisory on term sheet review, negotiation, and deal structuring.", items: ["Term Sheet Analysis", "Valuation Negotiation Support", "Founder-Friendly Terms Advisory", "Legal Counsel Coordination"], timeline: "7-15 Days" },
  ],
  whyChooseUs: [
    "₹150 crore+ raised for startups across sectors",
    "Network of 120+ active VC firms and angel groups",
    "Pre-Seed to Series B fundraising experience",
    "Sector expertise: SaaS, D2C, fintech, healthtech, agritech",
    "Investor-tested pitch deck framework",
    "Complete data room and due diligence preparation",
    "Term sheet negotiation advisory",
    "Warm introductions through partner network",
    "Post-raise cap table management support",
  ],
  process: [
    { step: "01", title: "Readiness Assessment", desc: "We evaluate your business, metrics, and identify gaps to fix before approaching investors." },
    { step: "02", title: "Story & Materials", desc: "Create pitch deck, financial model, investment memo, and data room." },
    { step: "03", title: "Investor Outreach", desc: "Targeted outreach to 15-25 relevant VCs with warm introductions and follow-ups." },
    { step: "04", title: "Close the Round", desc: "Term sheet negotiation, due diligence, and deal closing support." },
  ],
  faqs: [
    { q: "When should a startup approach VCs?", a: "Typically, VCs invest in startups with: proven product-market fit (paying customers), growing revenue (MoM growth), clear unit economics, and a large addressable market. Pre-revenue startups can approach pre-seed/seed VCs with strong team and tech differentiation." },
    { q: "How much equity should I give up?", a: "Typically, founders dilute 15-25% per round. Seed rounds usually sell 15-20%, Series A 15-25%. The key is balancing dilution with growth potential. We help ensure founder-friendly terms and fair valuations based on comparable deals." },
    { q: "How long does VC fundraising take?", a: "A typical fundraise takes 3-6 months from preparation to close. Preparation (pitch deck, model) takes 2-3 weeks, outreach 4-8 weeks, due diligence 3-6 weeks, and legal/closing 2-4 weeks. Having strong materials and warm intros shortens the timeline." },
    { q: "What do VCs look for in Indian startups?", a: "VCs evaluate: 1) Large market (₹5000Cr+ TAM), 2) Strong founding team, 3) Product-market fit evidence, 4) Scalable unit economics, 5) Competitive moats, 6) Growth rate (3x+ year-over-year), and 7) Capital efficiency. We help position your startup on all these dimensions." },
    { q: "Can you help with angel investment too?", a: "Yes, we work across the funding spectrum — angel investors, angel networks (Mumbai Angels, Indian Angel Network, Lead Angels), micro-VCs, and institutional VCs. For early-stage startups, angel funding is often the right first step before approaching VCs." },
  ],
}

export default function VentureCapitalistPage() {
  return <ServicePageTemplate data={data} />
}
