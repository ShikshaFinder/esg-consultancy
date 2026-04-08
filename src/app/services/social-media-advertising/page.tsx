import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📢",
  breadcrumbLabel: "Social Media Advertising",
  heroTitle: "Reach Millions with",
  heroHighlight: "Social Media Ads",
  heroDesc: "Targeted paid advertising on Facebook, Instagram, LinkedIn, and YouTube that puts your brand in front of the right audience. Generate leads, drive sales, and build awareness at scale.",
  heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "400+", label: "Campaigns Run" },
    { value: "5x", label: "Avg ROAS" },
    { value: "₹8Cr+", label: "Ad Spend Managed" },
    { value: "2M+", label: "Leads Generated" },
  ],
  services: [
    { emoji: "📘", title: "Facebook & Instagram Ads", desc: "Meta's powerful targeting reaches 450M+ Indian users with precise demographic and interest targeting.", items: ["Lead Generation Campaigns", "Traffic & Conversion Ads", "Carousel & Video Ads", "Lookalike & Custom Audiences"], timeline: "Ongoing" },
    { emoji: "💼", title: "LinkedIn Advertising", desc: "B2B-focused advertising reaching decision-makers, CXOs, and professionals on LinkedIn.", items: ["Sponsored Content Campaigns", "InMail & Message Ads", "Job Title & Industry Targeting", "Lead Gen Form Integration"], timeline: "Ongoing" },
    { emoji: "🎬", title: "YouTube Advertising", desc: "Video ads on YouTube reaching 500M+ Indian viewers with demographic and interest targeting.", items: ["TrueView In-Stream Ads", "Shorts Ads & Bumper Ads", "Video Action Campaigns", "Audience & Placement Targeting"], timeline: "Ongoing" },
    { emoji: "🔄", title: "Remarketing & Retargeting", desc: "Re-engage website visitors and app users with targeted ads across social platforms.", items: ["Website Visitor Retargeting", "Video Viewer Audiences", "Cart Abandonment Campaigns", "Cross-Platform Remarketing"], timeline: "Ongoing" },
    { emoji: "🎨", title: "Ad Creative & Design", desc: "Scroll-stopping ad creatives designed for each platform's format and audience.", items: ["Static Image Ads", "Carousel & Collection Ads", "Video & Reel Creatives", "A/B Creative Testing"], timeline: "3-5 Days" },
    { emoji: "📊", title: "Campaign Analytics & Reporting", desc: "Full-funnel tracking and analytics for transparent performance measurement.", items: ["Meta Pixel & CAPI Setup", "LinkedIn Insight Tag", "Multi-Platform Attribution", "Weekly Performance Dashboards"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "400+ social ad campaigns delivering measurable results",
    "5x average return on ad spend across platforms",
    "Meta & LinkedIn Certified advertising professionals",
    "In-house creative team for ad design & video",
    "Advanced audience targeting and lookalike strategies",
    "Full-funnel tracking with pixel/CAPI implementation",
    "Transparent weekly reporting with clear ROI metrics",
    "MSME-friendly budgets starting from ₹10K/month",
    "No long-term lock-in — flexible monthly engagement",
  ],
  process: [
    { step: "01", title: "Audience Research", desc: "We define your ideal customer profiles and build targeted audience segments." },
    { step: "02", title: "Creative & Setup", desc: "Design ad creatives, set up campaigns, and configure tracking pixels." },
    { step: "03", title: "Launch & Test", desc: "Launch campaigns with A/B testing across audiences, creatives, and placements." },
    { step: "04", title: "Optimize & Scale", desc: "Scale winning combinations, pause underperformers, and maximize ROAS." },
  ],
  faqs: [
    { q: "Which social platform is best for advertising?", a: "Facebook/Instagram for B2C brands, local businesses, and e-commerce. LinkedIn for B2B, SaaS, and professional services. YouTube for brand awareness and video-first products. We recommend a multi-platform strategy based on where your audience spends time." },
    { q: "How much should I spend on social media ads?", a: "Minimum recommended: ₹10,000-₹30,000/month per platform for meaningful testing and optimization. Competitive industries may need ₹50K+. We start with test budgets, identify what works, then scale profitable campaigns." },
    { q: "What's the difference between organic social and paid ads?", a: "Organic social is free posting that reaches a small % of your followers (2-5% on Facebook). Paid ads let you reach precise audiences beyond your followers, at scale, with measurable results. Both work best together — organic for brand building, paid for lead generation." },
    { q: "How do you target the right audience?", a: "We use: demographic targeting (age, gender, location), interest-based targeting, behavioral targeting, custom audiences (website visitors, email lists), and lookalike audiences (people similar to your customers). Advanced strategies include job title, industry, and company size targeting on LinkedIn." },
    { q: "Do you create the ad creatives?", a: "Yes, our in-house design team creates all ad creatives — images, carousels, videos, and reels optimized for each platform's format. We A/B test multiple creative variations and optimize based on performance data." },
  ],
}

export default function SocialMediaAdvertisingPage() {
  return <ServicePageTemplate data={data} />
}
