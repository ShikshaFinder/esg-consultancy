import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📊",
  breadcrumbLabel: "Growth Strategy",
  heroTitle: "Scale Your Business",
  heroHighlight: "Strategically & Sustainably",
  heroDesc: "Accelerate your growth with data-driven strategies in digital marketing, branding, market expansion, and business planning tailored for MSMEs.",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "300%", label: "Avg Growth" },
    { value: "200+", label: "Brands Scaled" },
    { value: "5x", label: "ROI Achieved" },
    { value: "15+", label: "Industries" },
  ],
  services: [
    { emoji: "🎯", title: "Digital Marketing", desc: "Performance-driven campaigns that bring qualified leads and measurable ROI.", items: ["SEO & Search Marketing", "Google & Meta Paid Ads", "Content Marketing Strategy", "Email & WhatsApp Automation"], timeline: "Ongoing" },
    { emoji: "🎨", title: "Brand Building", desc: "Create a memorable brand identity that resonates with your target audience.", items: ["Logo & Visual Identity Design", "Brand Positioning Strategy", "Brand Guidelines & Style Book", "Messaging & Tone Development"], timeline: "2-4 Weeks" },
    { emoji: "📊", title: "Market Analysis", desc: "Data-backed insights to understand your competition and seize opportunities.", items: ["Competitor Landscape Mapping", "Customer Persona Development", "Market Size & Opportunity", "Industry Trend Analysis"], timeline: "1-2 Weeks" },
    { emoji: "💡", title: "Business Planning", desc: "Strategic documents that attract investors and guide your expansion.", items: ["DPR & Project Report Writing", "Investor Pitch Deck Creation", "Revenue Model Design", "Expansion Blueprint & Roadmap"], timeline: "2-3 Weeks" },
    { emoji: "🌐", title: "Website & App Development", desc: "High-performing digital products that convert visitors into customers.", items: ["Business Websites & Portals", "E-Commerce Store Development", "Mobile App (iOS & Android)", "Performance & SEO Optimization"], timeline: "4-8 Weeks" },
    { emoji: "📱", title: "Social Media Management", desc: "Build community, drive engagement, and grow your brand on social platforms.", items: ["Content Calendar & Creation", "Community Engagement Strategy", "Influencer Collaboration", "Analytics & Performance Reporting"], timeline: "Monthly" },
  ],
  whyChooseUs: [
    "Proven track record — 300% average growth for our clients",
    "Industry expertise across 15+ business verticals",
    "Data-driven approach with measurable KPIs and ROI",
    "Full-stack team: strategists, designers, developers, marketers",
    "Integrated approach — branding, marketing, and tech under one roof",
    "MSME-friendly pricing with flexible payment plans",
    "Weekly reporting with transparent performance dashboards",
    "Dedicated account manager for every project",
    "Post-launch optimization and scaling support",
  ],
  process: [
    { step: "01", title: "Business Audit", desc: "We analyze your current position, market landscape, and growth opportunities." },
    { step: "02", title: "Strategy Design", desc: "Custom growth plan with clear goals, timelines, budgets, and KPIs." },
    { step: "03", title: "Implementation", desc: "Our team executes across branding, digital marketing, web, and content." },
    { step: "04", title: "Optimization", desc: "Continuous monitoring, A/B testing, and iterative improvements for maximum ROI." },
  ],
  faqs: [
    { q: "How long does it take to see results from digital marketing?", a: "SEO typically shows results in 3-6 months, while paid ads (Google/Meta) can generate leads within the first week. Social media growth is gradual over 2-3 months. We set realistic timelines during the strategy phase." },
    { q: "Do you work with specific industries?", a: "We've worked with 15+ industries including manufacturing, food processing, textiles, IT services, healthcare, education, retail, and e-commerce. Our strategies are customized to your industry dynamics." },
    { q: "What's included in brand building?", a: "Our brand building package includes logo design, color palette, typography, brand guidelines document, business card design, letterhead, social media templates, and brand messaging framework — everything you need for a professional identity." },
    { q: "Can you help expand to new cities or markets?", a: "Absolutely. Our market analysis service includes geographic expansion research, distributor network planning, local marketing strategy, and go-to-market execution support for new regions." },
    { q: "How long does website or app development take?", a: "A business website typically takes 2-4 weeks, e-commerce stores 4-6 weeks, and mobile apps 6-10 weeks. We follow an agile approach with milestone-based delivery and regular client reviews." },
  ],
}

export default function GrowthStrategyPage() {
  return <ServicePageTemplate data={data} />
}
