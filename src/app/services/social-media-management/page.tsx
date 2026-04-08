import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📱",
  breadcrumbLabel: "Social Media Management",
  heroTitle: "Build Your Brand with",
  heroHighlight: "Social Media Management",
  heroDesc: "Consistent, engaging social media presence that builds community, drives engagement, and converts followers into customers. We handle everything — strategy, content creation, posting, and analytics.",
  heroImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "250+", label: "Brands Managed" },
    { value: "10M+", label: "Total Reach" },
    { value: "5x", label: "Avg Engagement Growth" },
    { value: "4", label: "Platforms Covered" },
  ],
  services: [
    { emoji: "📋", title: "Social Media Strategy", desc: "Custom strategy aligned with your business goals, audience, and competitive landscape.", items: ["Audience Persona Development", "Competitor Analysis", "Platform Selection & Strategy", "KPI & Goal Setting"], timeline: "5-7 Days" },
    { emoji: "🎨", title: "Content Creation", desc: "Professional graphic design, video editing, and copywriting for all social platforms.", items: ["Post Design (Static & Carousel)", "Reel & Short Video Editing", "Caption & Hashtag Writing", "Story & Highlight Design"], timeline: "Monthly" },
    { emoji: "📅", title: "Content Calendar & Scheduling", desc: "Planned, organized content calendar with timely posting across all platforms.", items: ["Monthly Content Calendar", "Festival & Trend Alignment", "Optimal Posting Time Analysis", "Automated Scheduling Setup"], timeline: "Monthly" },
    { emoji: "💬", title: "Community Management", desc: "Active engagement with your audience — responding to comments, DMs, and building relationships.", items: ["Comment Response Management", "DM & Inbox Management", "Review & Feedback Handling", "UGC Curation & Sharing"], timeline: "Daily" },
    { emoji: "📊", title: "Analytics & Reporting", desc: "Detailed monthly reports tracking growth, engagement, and ROI of social media efforts.", items: ["Follower & Reach Growth", "Engagement Rate Analysis", "Content Performance Ranking", "Competitor Benchmarking"], timeline: "Monthly" },
    { emoji: "🤝", title: "Influencer Collaboration", desc: "Identify and manage influencer partnerships to amplify your brand reach.", items: ["Micro-Influencer Identification", "Collaboration Negotiation", "Campaign Management", "Performance Tracking & ROI"], timeline: "Per Campaign" },
  ],
  whyChooseUs: [
    "250+ brands managed with consistent growth results",
    "5x average engagement growth in first 3 months",
    "In-house design and video editing team",
    "Platform expertise: Instagram, Facebook, LinkedIn, YouTube",
    "Community management with same-day response guarantee",
    "Festival and trending topic content included",
    "Micro-influencer network for collaboration campaigns",
    "Monthly reports with actionable growth insights",
    "MSME-friendly packages starting from ₹12K/month",
  ],
  process: [
    { step: "01", title: "Brand Audit", desc: "We analyze your current social presence, competitors, and target audience." },
    { step: "02", title: "Strategy & Calendar", desc: "Custom strategy and monthly content calendar aligned with your brand goals." },
    { step: "03", title: "Create & Post", desc: "Design content, write captions, and publish on schedule across all platforms." },
    { step: "04", title: "Engage & Grow", desc: "Community management, performance tracking, and strategy refinement for growth." },
  ],
  faqs: [
    { q: "Which social media platforms should my business be on?", a: "Instagram for visual brands (fashion, food, lifestyle), LinkedIn for B2B and professional services, Facebook for local businesses and communities, YouTube for educational/explainer content. We analyze your audience and recommend the right platform mix." },
    { q: "How many posts per week do you create?", a: "Standard packages include 12-16 posts/month (3-4 per week) across selected platforms. This includes static posts, carousels, reels, and stories. We can customize frequency based on your goals and budget." },
    { q: "Do you handle comments and DMs?", a: "Yes, community management is a core part of our service. We respond to comments within 4-6 hours during business hours, manage DM inquiries, and escalate sales/support queries to your team. Weekend coverage available in premium packages." },
    { q: "How do you measure social media ROI?", a: "We track: follower growth, engagement rate, reach & impressions, website traffic from social, lead generation, and brand mention share. Monthly reports include all metrics with comparison to previous periods and competitor benchmarks." },
    { q: "Can you work with our existing brand guidelines?", a: "Absolutely. We follow your brand colors, fonts, tone of voice, and visual style. If you don't have formal brand guidelines, we create a social media style guide during onboarding to ensure consistent brand representation." },
  ],
}

export default function SocialMediaManagementPage() {
  return <ServicePageTemplate data={data} />
}
