import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📣",
  breadcrumbLabel: "Digital Marketing",
  heroTitle: "Grow Your Business with",
  heroHighlight: "Digital Marketing",
  heroDesc: "Data-driven digital marketing strategies that generate leads, build brand awareness, and drive revenue. From SEO to paid ads, social media to email — we deliver measurable results for MSMEs and startups.",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "300+", label: "Brands Served" },
    { value: "5x", label: "Avg ROI" },
    { value: "1M+", label: "Leads Generated" },
    { value: "15+", label: "Industries" },
  ],
  services: [
    { emoji: "🔍", title: "SEO & Organic Growth", desc: "Dominate search results with white-hat SEO strategies that drive consistent organic traffic.", items: ["Technical SEO Audit & Fixes", "Keyword Research & Mapping", "On-Page & Off-Page Optimization", "Local SEO & GMB Optimization"], timeline: "Ongoing" },
    { emoji: "💰", title: "Paid Advertising (PPC)", desc: "High-ROI paid campaigns on Google, Meta, and LinkedIn that deliver quality leads.", items: ["Google Search & Display Ads", "Meta (Facebook + Instagram) Ads", "LinkedIn B2B Campaigns", "Remarketing & Retargeting"], timeline: "Ongoing" },
    { emoji: "📱", title: "Social Media Marketing", desc: "Build a loyal following and drive engagement across all major social platforms.", items: ["Content Calendar & Strategy", "Post Design & Copywriting", "Community Management", "Influencer Collaborations"], timeline: "Monthly" },
    { emoji: "📧", title: "Email & WhatsApp Marketing", desc: "Nurture leads and retain customers with automated email and WhatsApp campaigns.", items: ["Email Automation Sequences", "Newsletter Design & Sending", "WhatsApp Business API", "Drip Campaign Setup"], timeline: "Ongoing" },
    { emoji: "📊", title: "Analytics & Optimization", desc: "Track, measure, and optimize every marketing rupee for maximum return on investment.", items: ["Google Analytics 4 Setup", "Conversion Tracking & Attribution", "A/B Testing Framework", "Monthly Performance Dashboards"], timeline: "Ongoing" },
    { emoji: "📝", title: "Content Marketing", desc: "Create valuable content that attracts, educates, and converts your target audience.", items: ["Blog & Article Writing", "Video Script & Production", "Infographic & Visual Content", "Lead Magnet Creation"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "300+ brands served with measurable growth results",
    "5x average return on marketing investment",
    "1 million+ qualified leads generated for clients",
    "Google & Meta Certified marketing professionals",
    "MSME-friendly budgets starting from ₹15K/month",
    "Transparent weekly performance dashboards",
    "Data-driven decisions, no guesswork",
    "Experience across 15+ industries and verticals",
    "Dedicated account manager for personalized attention",
  ],
  process: [
    { step: "01", title: "Discovery & Audit", desc: "We audit your current digital presence, competitors, and identify growth opportunities." },
    { step: "02", title: "Strategy & Planning", desc: "Custom marketing plan with channel mix, budgets, KPIs, and content calendar." },
    { step: "03", title: "Execution & Launch", desc: "Launch campaigns across chosen channels with conversion-optimized creatives." },
    { step: "04", title: "Optimize & Scale", desc: "Continuous optimization, A/B testing, and budget scaling based on performance data." },
  ],
  faqs: [
    { q: "How much should I budget for digital marketing?", a: "For MSMEs, we recommend ₹15K-₹50K/month for paid ads plus management fees. SEO starts from ₹10K/month. Social media management from ₹15K/month. We scale budgets based on proven ROI — start small, scale what works." },
    { q: "How soon will I see results?", a: "Paid ads generate leads within the first week. SEO takes 3-6 months for meaningful organic traffic. Social media growth is visible in 2-3 months. We set realistic expectations and provide weekly progress reports." },
    { q: "Which digital marketing channel is best for my business?", a: "It depends on your business: Google Ads for high-intent searches, Meta for B2C awareness, LinkedIn for B2B lead generation, SEO for long-term organic growth, and email for nurturing existing leads. We recommend a multi-channel strategy." },
    { q: "Do you provide reports?", a: "Yes, comprehensive weekly and monthly reports covering: impressions, clicks, leads, conversions, cost per lead, ROI, and actionable insights. We use Google Analytics, Meta Ads Manager, and custom dashboards for transparent reporting." },
    { q: "Can you manage our existing ad accounts?", a: "Absolutely. We can take over your existing Google, Meta, or LinkedIn ad accounts, audit current campaigns, and optimize for better performance. We also help set up fresh accounts with proper conversion tracking if needed." },
  ],
}

export default function DigitalMarketingPage() {
  return <ServicePageTemplate data={data} />
}
