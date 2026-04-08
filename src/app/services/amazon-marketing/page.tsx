import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📦",
  breadcrumbLabel: "Amazon Marketing",
  heroTitle: "Dominate Amazon with",
  heroHighlight: "Expert Marketing",
  heroDesc: "From product listing optimization to PPC campaigns and A+ content — we help brands maximize sales and visibility on Amazon India and Amazon Global marketplaces.",
  heroImage: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "200+", label: "Brands Managed" },
    { value: "3x", label: "Avg Sales Growth" },
    { value: "₹25Cr+", label: "Revenue Generated" },
    { value: "40%", label: "Avg ACoS Reduction" },
  ],
  services: [
    { emoji: "📋", title: "Amazon Account Setup", desc: "Complete Amazon Seller/Vendor Central account setup with brand registry and storefront.", items: ["Seller Central Registration", "Brand Registry Application", "Amazon Storefront Design", "FBA / Easy Ship Setup"], timeline: "5-7 Days" },
    { emoji: "📝", title: "Listing Optimization", desc: "SEO-optimized product listings with compelling copy, images, and keyword-rich content.", items: ["Product Title & Bullet Optimization", "Backend Keyword Research", "High-Quality Image Guidelines", "Product Description Enhancement"], timeline: "3-5 Days/ASIN" },
    { emoji: "💰", title: "Amazon PPC Management", desc: "Strategic Sponsored Product, Brand, and Display ad campaigns for maximum ROI.", items: ["Sponsored Products Campaigns", "Sponsored Brands & Video Ads", "Sponsored Display & DSP", "ACoS Optimization & Bid Management"], timeline: "Ongoing" },
    { emoji: "🎨", title: "A+ Content & Storefront", desc: "Premium A+ (EBC) content and brand storefront that converts browsers into buyers.", items: ["A+ Content Design & Copy", "Brand Story Module", "Comparison Charts & Infographics", "Amazon Storefront Pages"], timeline: "5-7 Days" },
    { emoji: "⭐", title: "Review & Rating Management", desc: "Organic review generation and reputation management to build social proof.", items: ["Amazon Vine Program Enrollment", "Review Request Automation", "Negative Review Response Strategy", "Product Insert Compliance"], timeline: "Ongoing" },
    { emoji: "🌍", title: "Amazon Global Selling", desc: "Expand your brand to international Amazon marketplaces (US, UK, UAE, EU).", items: ["Global Account Setup", "International Listing Translation", "FBA Export & NARF Setup", "Currency & Tax Compliance"], timeline: "15-30 Days" },
  ],
  whyChooseUs: [
    "200+ brands managed across Amazon India and Global",
    "3x average sales growth within first 6 months",
    "₹25 crore+ in cumulative Amazon revenue generated",
    "40% average ACoS reduction on PPC campaigns",
    "Amazon Ads Certified marketing professionals",
    "A+ Content and Brand Store design expertise",
    "FBA, Easy Ship, and self-ship optimization",
    "Global selling expansion to US, UK, UAE markets",
    "Dedicated Amazon account manager for each brand",
  ],
  process: [
    { step: "01", title: "Account Audit", desc: "We analyze your current Amazon account, listings, and ad campaigns for improvement areas." },
    { step: "02", title: "Optimization", desc: "Optimize listings with SEO keywords, enhanced images, and A+ content." },
    { step: "03", title: "Campaign Launch", desc: "Launch strategic PPC campaigns with keyword targeting and competitive bidding." },
    { step: "04", title: "Scale & Grow", desc: "Monthly optimization, new product launches, and marketplace expansion." },
  ],
  faqs: [
    { q: "How long does it take to see results on Amazon?", a: "Listing optimizations show impact within 1-2 weeks. PPC campaigns start delivering in 2-4 weeks after optimization. Significant sales growth is typically visible in 2-3 months. We provide weekly progress reports with action items." },
    { q: "What is a good ACoS (Advertising Cost of Sales)?", a: "A healthy ACoS depends on your profit margins — typically 15-25% for established products and 30-40% for new launches building reviews. We target reducing ACoS by 30-40% while maintaining or growing total sales volume." },
    { q: "Should I use FBA or self-ship?", a: "FBA (Fulfillment by Amazon) is recommended for most sellers — it provides Prime badge, better Buy Box win rate, and Amazon handles shipping/returns. Self-ship works for large/heavy items or low-margin products. We analyze your catalog and recommend the best mix." },
    { q: "How do you handle negative reviews?", a: "We implement a proactive strategy: improve product quality based on feedback patterns, respond professionally to negative reviews, use the Vine program for authenticity, and optimize listings to set correct expectations. We never engage in fake review practices." },
    { q: "Can you help with Amazon Global (export)?", a: "Yes, we help Indian sellers expand to Amazon US, UK, UAE, and EU. We handle account setup, listing translation, NARF/FBA Export enrollment, international PPC, and help navigate customs/taxation requirements." },
  ],
}

export default function AmazonMarketingPage() {
  return <ServicePageTemplate data={data} />
}
