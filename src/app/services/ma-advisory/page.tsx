import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🤝",
  breadcrumbLabel: "M&A Advisory",
  heroTitle: "Strategic Business Growth Through",
  heroHighlight: "Mergers & Acquisitions",
  heroDesc: "Expert M&A advisory services for MSMEs and startups — from target identification and valuation to due diligence, deal structuring, and post-merger integration.",
  heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹50Cr+", label: "Deals Facilitated" },
    { value: "25+", label: "Successful Deals" },
    { value: "90%", label: "Deal Close Rate" },
    { value: "3-9 Mo", label: "Avg Timeline" },
  ],
  services: [
    { emoji: "🔍", title: "Target Identification", desc: "We identify and evaluate potential acquisition targets or merger partners aligned with your strategic goals.", items: ["Market Landscape Analysis", "Target Shortlisting & Scoring", "Competitor & Synergy Mapping", "Preliminary Valuation Assessment"], timeline: "2-4 Weeks" },
    { emoji: "📊", title: "Business Valuation", desc: "Comprehensive valuation using multiple methodologies to establish fair market value for negotiations.", items: ["DCF (Discounted Cash Flow) Analysis", "Comparable Company Analysis", "Asset-Based Valuation", "Revenue & EBITDA Multiples"], timeline: "1-2 Weeks" },
    { emoji: "🔬", title: "Due Diligence", desc: "Thorough investigation of financial, legal, operational, and commercial aspects of the target business.", items: ["Financial Due Diligence", "Legal & Compliance Review", "Operational Assessment", "Technology & IP Audit"], timeline: "3-6 Weeks" },
    { emoji: "📝", title: "Deal Structuring", desc: "Optimize the deal structure for tax efficiency, risk mitigation, and strategic alignment.", items: ["Share Purchase vs Asset Purchase", "Earn-out & Contingent Pricing", "Escrow & Holdback Mechanisms", "Tax-Efficient Structuring"], timeline: "2-4 Weeks" },
    { emoji: "⚖️", title: "Negotiation & Closure", desc: "Expert negotiation support to secure favorable terms and manage the closing process smoothly.", items: ["Term Sheet Drafting", "SPA (Share Purchase Agreement)", "Regulatory Approvals & Filings", "Closing Coordination"], timeline: "4-8 Weeks" },
    { emoji: "🔄", title: "Post-Merger Integration", desc: "Ensure smooth integration of operations, teams, systems, and cultures after the deal closes.", items: ["Integration Planning & Roadmap", "Cultural Alignment Program", "Systems & Process Merger", "Performance Monitoring"], timeline: "3-6 Months" },
  ],
  whyChooseUs: [
    "Deep understanding of MSME and startup ecosystem",
    "Network of 500+ potential buyers and sellers",
    "Multi-methodology valuation for accurate pricing",
    "Experienced legal team for deal documentation",
    "Tax-optimized deal structures saving 10-25% on transaction costs",
    "Dedicated M&A advisor assigned to each deal",
    "Confidential and NDA-protected process",
    "Post-merger integration support included",
    "Success-based fee structure for aligned incentives",
  ],
  process: [
    { step: "01", title: "Strategic Assessment", desc: "We understand your goals — whether you're looking to acquire, merge, or sell — and develop a tailored strategy." },
    { step: "02", title: "Target/Buyer Search", desc: "Leveraging our network and market intelligence, we identify and vet the most suitable counterparties." },
    { step: "03", title: "Valuation & Due Diligence", desc: "Comprehensive financial analysis, business valuation, and thorough due diligence to inform your decision." },
    { step: "04", title: "Deal Execution", desc: "From term sheet to final agreement — we manage negotiations, legal documentation, and closing formalities." },
  ],
  faqs: [
    { q: "Is M&A advisory relevant for small businesses?", a: "Absolutely. MSMEs are increasingly using acquisitions to enter new markets, acquire technology, or gain customers. We've facilitated deals as small as ₹50L and as large as ₹50Cr. The strategic principles are the same regardless of deal size." },
    { q: "How long does a typical M&A process take?", a: "From initial engagement to deal closure, the process typically takes 3-9 months. Simple transactions can close in 2-3 months, while complex deals with multiple stakeholders may take longer." },
    { q: "What are your fees for M&A advisory?", a: "We charge a small retainer fee plus a success fee calculated as a percentage of the deal value. Our success-based structure ensures our incentives are aligned with yours — we succeed only when your deal closes." },
    { q: "Can you help me sell my business?", a: "Yes, we provide sell-side advisory including business preparation for sale, valuation, buyer identification, marketing the business confidentially, and managing the entire sale process to maximize your returns." },
    { q: "Do you handle regulatory approvals?", a: "Yes, we manage all regulatory filings including CCI (Competition Commission of India) approvals, SEBI compliance (for listed entities), RBI approvals (for foreign investment), and sector-specific regulatory clearances." },
  ],
}

export default function MAAdvisoryPage() {
  return <ServicePageTemplate data={data} />
}
