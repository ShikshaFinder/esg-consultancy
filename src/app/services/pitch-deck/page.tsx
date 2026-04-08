import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🎯",
  breadcrumbLabel: "Pitch Deck",
  heroTitle: "Win Investors with a",
  heroHighlight: "Compelling Pitch Deck",
  heroDesc: "Investor-ready pitch decks that tell your startup story, showcase market opportunity, and convince VCs and angel investors to fund your vision. Designed by experts who understand what investors want to see.",
  heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "500+", label: "Pitch Decks Created" },
    { value: "₹200Cr+", label: "Funding Raised" },
    { value: "70%", label: "Meeting Conversion" },
    { value: "5-7 Days", label: "Avg Delivery" },
  ],
  services: [
    { emoji: "📊", title: "Investor Pitch Deck", desc: "Comprehensive 15-20 slide deck designed to secure meetings with VCs and angel investors.", items: ["Problem-Solution Narrative", "Market Sizing (TAM/SAM/SOM)", "Business Model & Revenue", "Financial Projections & Ask"], timeline: "5-7 Days" },
    { emoji: "📑", title: "Business Plan Document", desc: "Detailed business plan complementing the pitch deck with in-depth analysis.", items: ["Executive Summary", "Market & Competitor Analysis", "Operations & Growth Plan", "5-Year Financial Model"], timeline: "7-10 Days" },
    { emoji: "🎨", title: "Pitch Deck Design", desc: "Visually stunning deck design that makes your content stand out and be memorable.", items: ["Custom Brand-Aligned Design", "Data Visualization & Charts", "Professional Imagery & Icons", "Print & Screen Versions"], timeline: "3-5 Days" },
    { emoji: "💰", title: "Financial Model", desc: "Robust financial model with assumptions, projections, and scenario analysis.", items: ["Revenue Model Building", "Unit Economics Calculation", "P&L, Cash Flow, Balance Sheet", "Scenario & Sensitivity Analysis"], timeline: "5-7 Days" },
    { emoji: "🎤", title: "Pitch Coaching", desc: "Prepare for investor meetings with practice sessions, Q&A prep, and delivery coaching.", items: ["Presentation Skills Coaching", "Investor Q&A Preparation", "Demo Day Practice Runs", "Body Language & Confidence"], timeline: "2-3 Sessions" },
    { emoji: "📋", title: "Competition & Grant Decks", desc: "Specialized decks for startup competitions, accelerators, and government grant applications.", items: ["Startup Competition Decks", "Accelerator Application Support", "Government Grant Proposals", "Award & Recognition Submissions"], timeline: "5-7 Days" },
  ],
  whyChooseUs: [
    "500+ pitch decks created for startups across stages",
    "₹200 crore+ raised by startups using our decks",
    "70% investor meeting conversion rate",
    "VC-tested deck structure and storytelling framework",
    "Professional designers + startup strategy experts",
    "Financial model building included in premium packages",
    "Pitch coaching with mock investor sessions",
    "Industry expertise: SaaS, D2C, fintech, healthcare, deeptech",
    "Quick 5-7 day turnaround with revision rounds",
  ],
  process: [
    { step: "01", title: "Deep Dive Session", desc: "We interview you about your business, market, traction, team, and funding needs." },
    { step: "02", title: "Content & Story", desc: "Draft the narrative structure — problem, solution, market, business model, traction, team, ask." },
    { step: "03", title: "Design & Financial Model", desc: "Create visually stunning slides and build supporting financial models." },
    { step: "04", title: "Review & Coach", desc: "Multiple revision rounds, final delivery, and pitch coaching for investor meetings." },
  ],
  faqs: [
    { q: "How many slides should a pitch deck have?", a: "The ideal investor pitch deck has 12-15 slides covering: Title, Problem, Solution, Market Size, Business Model, Traction, Competition, Team, Financials, and The Ask. We follow the proven structure that top VCs (Sequoia, Accel) recommend." },
    { q: "What information do you need from me?", a: "We need: business description, problem you're solving, your solution, target market info, traction/revenue data, team bios, financial data (or projections), competitive landscape, and how much you're raising. A 1-hour deep dive session covers everything." },
    { q: "Can you also build the financial model?", a: "Yes, we build detailed financial models with: revenue projections (3-5 years), unit economics, P&L, cash flow, balance sheet, break-even analysis, and scenario modeling. The model is Excel/Google Sheets-based with clear assumptions." },
    { q: "Do you offer pitch coaching?", a: "Yes, our premium package includes 2-3 pitch coaching sessions covering: presentation delivery, investor Q&A preparation, common objections handling, and body language. We simulate real investor meetings for practice." },
    { q: "How fast can I get my pitch deck?", a: "Standard delivery is 5-7 working days including 2 revision rounds. Rush delivery available in 3 days at additional cost. Financial model adds 3-5 days. Complete package (deck + model + coaching) takes 10-14 days." },
  ],
}

export default function PitchDeckPage() {
  return <ServicePageTemplate data={data} />
}
