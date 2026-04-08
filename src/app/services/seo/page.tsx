import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🔍",
  breadcrumbLabel: "Search Engine Optimization",
  heroTitle: "Rank #1 on Google with",
  heroHighlight: "Expert SEO Services",
  heroDesc: "Sustainable organic growth through white-hat SEO strategies. We improve your search rankings, drive targeted traffic, and increase conversions — without depending on paid ads.",
  heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "400+", label: "SEO Clients" },
    { value: "85%", label: "First-Page Rankings" },
    { value: "3x", label: "Avg Traffic Growth" },
    { value: "150+", label: "Keywords Ranked #1" },
  ],
  services: [
    { emoji: "🔧", title: "Technical SEO", desc: "Fix the foundation — site speed, crawlability, indexing, and core web vitals optimization.", items: ["Site Speed Optimization", "Core Web Vitals (CWV) Fixes", "XML Sitemap & Robots.txt", "Schema Markup Implementation"], timeline: "7-14 Days" },
    { emoji: "📝", title: "On-Page SEO", desc: "Optimize every page for target keywords with content structure, meta tags, and internal linking.", items: ["Title & Meta Description Optimization", "Header Tag Hierarchy (H1-H4)", "Keyword Density & LSI Integration", "Internal Linking Strategy"], timeline: "Ongoing" },
    { emoji: "🔗", title: "Off-Page SEO & Link Building", desc: "Build domain authority through quality backlinks from relevant, authoritative websites.", items: ["Guest Post Outreach", "Digital PR & Brand Mentions", "Niche Directory Submissions", "Broken Link Building"], timeline: "Ongoing" },
    { emoji: "📍", title: "Local SEO", desc: "Dominate local search results and Google Maps for location-based businesses.", items: ["Google Business Profile Optimization", "Local Citation Building", "Review Generation Strategy", "NAP Consistency Audit"], timeline: "Ongoing" },
    { emoji: "📊", title: "SEO Audit & Strategy", desc: "Comprehensive audit of your current SEO health with actionable improvement roadmap.", items: ["200+ Point SEO Audit", "Competitor Gap Analysis", "Keyword Opportunity Mapping", "6-Month SEO Roadmap"], timeline: "5-7 Days" },
    { emoji: "📈", title: "Content SEO", desc: "Strategic content creation and optimization that targets high-value keywords.", items: ["Content Gap Analysis", "SEO Blog Writing", "Content Refresh & Update", "Topic Cluster Strategy"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "400+ SEO clients with 85% achieving first-page rankings",
    "3x average organic traffic growth within 6 months",
    "100% white-hat techniques — no black-hat shortcuts",
    "Google Analytics & Search Console certified team",
    "Technical + Content + Off-Page holistic approach",
    "Transparent monthly reports with keyword tracking",
    "Local SEO expertise for multi-location businesses",
    "MSME-friendly plans starting from ₹10K/month",
    "Dedicated SEO strategist for every client",
  ],
  process: [
    { step: "01", title: "SEO Audit", desc: "200+ point audit covering technical, on-page, off-page, and competitive landscape." },
    { step: "02", title: "Strategy & Roadmap", desc: "Custom 6-month SEO roadmap with keyword targets, content plan, and milestones." },
    { step: "03", title: "Implementation", desc: "Technical fixes, content optimization, link building, and local SEO setup." },
    { step: "04", title: "Monitor & Grow", desc: "Monthly ranking reports, traffic analysis, and strategy refinement for continuous growth." },
  ],
  faqs: [
    { q: "How long does SEO take to show results?", a: "Typically, 3-6 months for meaningful improvements. Technical SEO fixes show impact in 2-4 weeks, new content ranks in 1-3 months, and sustained traffic growth builds over 4-6 months. We provide monthly progress reports to track improvement." },
    { q: "How much does SEO cost?", a: "Our SEO packages start from ₹10,000/month for small businesses and ₹25,000-₹50,000/month for competitive industries. Cost depends on: number of target keywords, competition level, content requirements, and business goals." },
    { q: "Is SEO better than Google Ads?", a: "They complement each other. SEO provides long-term, sustainable organic traffic (lower cost per lead over time). Google Ads provides immediate visibility (pay per click). We recommend running both — Ads for quick leads while SEO builds organic authority." },
    { q: "Do you guarantee #1 rankings?", a: "We do not guarantee specific rankings (any agency that does is misleading). Google's algorithm considers 200+ factors. We guarantee: ethical practices, consistent improvement, transparent reporting, and applying proven strategies that have achieved first-page rankings for 85% of our clients." },
    { q: "What tools do you use for SEO?", a: "We use industry-leading tools: Ahrefs/SEMrush for keyword research, Google Search Console for performance, Screaming Frog for technical audits, SurferSEO for content optimization, and custom dashboards for reporting." },
  ],
}

export default function SEOPage() {
  return <ServicePageTemplate data={data} />
}
