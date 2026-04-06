import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📣",
  breadcrumbLabel: "Marketing & Branding",
  heroTitle: "Amplify Your Brand &",
  heroHighlight: "Drive Business Growth",
  heroDesc: "Data-driven marketing strategies and creative branding solutions tailored for MSMEs and startups. From brand identity to lead generation, we do it all.",
  heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "200+", label: "Brands Built" },
    { value: "5x", label: "Avg ROI" },
    { value: "150+", label: "Campaigns Run" },
    { value: "15+", label: "Industry Sectors" },
  ],
  services: [
    { emoji: "🌐", title: "Digital Marketing", desc: "Performance marketing campaigns that deliver measurable leads and conversions.", items: ["Google Ads & PPC Campaigns", "Social Media Advertising", "Email Marketing Automation", "SEO & Content Marketing"], timeline: "Ongoing" },
    { emoji: "🎨", title: "Brand Identity Design", desc: "Build a professional brand image that leaves a lasting impression.", items: ["Logo & Visual Identity System", "Brand Guidelines & Style Book", "Stationery & Business Collateral", "Packaging & Label Design"], timeline: "10-15 Days" },
    { emoji: "💻", title: "Website & App Development", desc: "High-converting digital platforms that work as your 24/7 sales team.", items: ["Business Websites & Landing Pages", "E-Commerce Store Development", "Mobile App (iOS & Android)", "UI/UX Design & Optimization"], timeline: "15-30 Days" },
    { emoji: "📱", title: "Social Media Management", desc: "Consistent, engaging social presence that builds community and drives sales.", items: ["Content Calendar & Strategy", "Post Design & Copywriting", "Community Management", "Analytics & Performance Reports"], timeline: "Monthly" },
    { emoji: "📊", title: "Market Research & Analysis", desc: "Data-backed insights to guide your marketing investments and strategy.", items: ["Competitor Landscape Analysis", "Target Audience Profiling", "Industry Trend Reports", "Go-to-Market Strategy"], timeline: "5-10 Days" },
    { emoji: "🎬", title: "Video & Content Production", desc: "Compelling video and written content that tells your brand story.", items: ["Explainer & Brand Videos", "Testimonial & Case Study Videos", "Blog & Article Writing", "Social Media Reels & Shorts"], timeline: "7-14 Days" },
  ],
  whyChooseUs: [
    "200+ brands successfully built and scaled",
    "5x average ROI on marketing investments",
    "Full-service agency — design, development, marketing, content",
    "MSME-friendly budgets starting from ₹15K/month",
    "Transparent reporting with weekly performance dashboards",
    "Dedicated account manager for personalized attention",
    "Experience across 15+ industries and verticals",
    "Platform expertise: Google, Meta, LinkedIn, YouTube, WhatsApp",
    "Creative team with award-winning design capabilities",
  ],
  process: [
    { step: "01", title: "Discovery & Audit", desc: "We analyze your brand, market position, competitors, and growth opportunities." },
    { step: "02", title: "Strategy & Planning", desc: "Custom marketing plan with clear goals, channels, budgets, and KPIs." },
    { step: "03", title: "Execution & Launch", desc: "Our creative team produces and launches campaigns across all chosen channels." },
    { step: "04", title: "Optimize & Scale", desc: "Continuous monitoring, A/B testing, and budget optimization for maximum returns." },
  ],
  faqs: [
    { q: "How soon will I see results from digital marketing?", a: "Paid ads (Google/Meta) can generate leads within the first week. SEO takes 3-6 months for meaningful organic traffic. Social media growth is typically visible in 2-3 months. We set realistic expectations during strategy planning." },
    { q: "What budget do you recommend for digital marketing?", a: "For MSMEs, we recommend starting with ₹15K-₹50K/month for paid ads, plus agency management fees. This allows meaningful testing and optimization. We scale budgets based on proven performance and ROI." },
    { q: "Do you have experience in my industry?", a: "We've served 15+ industries including manufacturing, food processing, textiles, IT services, healthcare, education, retail, e-commerce, real estate, and professional services. Our strategies are customized to your industry dynamics." },
    { q: "Which platforms do you manage?", a: "We manage campaigns across Google Ads, Meta (Facebook & Instagram), LinkedIn, YouTube, X (Twitter), as well as email platforms (Mailchimp, Sendinblue) and WhatsApp Business marketing." },
    { q: "How long does a website redesign take?", a: "A standard business website takes 15-20 days. E-commerce stores take 20-30 days. Complex portals with custom features take 30-45 days. We follow agile methodology with milestone-based delivery and regular client approvals." },
  ],
}

export default function MarketingPage() {
  return <ServicePageTemplate data={data} />
}
