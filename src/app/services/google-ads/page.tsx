import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🎯",
  breadcrumbLabel: "Google Ads",
  heroTitle: "Drive Instant Leads with",
  heroHighlight: "Google Ads (PPC)",
  heroDesc: "Get your business in front of high-intent customers searching on Google. We create, manage, and optimize Google Ads campaigns that deliver quality leads at the lowest cost per acquisition.",
  heroImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "500+", label: "Campaigns Managed" },
    { value: "4.5x", label: "Avg ROAS" },
    { value: "₹10Cr+", label: "Ad Spend Managed" },
    { value: "35%", label: "Avg CPA Reduction" },
  ],
  services: [
    { emoji: "🔍", title: "Search Ads", desc: "Appear at the top of Google when potential customers search for your products or services.", items: ["Keyword Research & Selection", "Ad Copy A/B Testing", "Bid Strategy Optimization", "Negative Keyword Management"], timeline: "Ongoing" },
    { emoji: "🖼️", title: "Display & Banner Ads", desc: "Visual banner ads across Google's display network of 2 million+ websites.", items: ["Banner Design & Creative", "Audience Targeting (Interest/Demo)", "Placement Optimization", "Remarketing Display Campaigns"], timeline: "Ongoing" },
    { emoji: "🎬", title: "YouTube Video Ads", desc: "Engage audiences with video ads on YouTube — the world's second-largest search engine.", items: ["In-Stream & Discovery Ads", "Bumper Ads (6-Second)", "Video Action Campaigns", "Audience Targeting & Remarketing"], timeline: "Ongoing" },
    { emoji: "🛒", title: "Google Shopping Ads", desc: "Product listing ads for e-commerce businesses that show product images, prices, and ratings.", items: ["Merchant Center Setup", "Product Feed Optimization", "Shopping Campaign Structure", "Smart Shopping / PMax Campaigns"], timeline: "Ongoing" },
    { emoji: "📊", title: "Conversion Tracking & Analytics", desc: "Accurate tracking setup to measure every lead, call, and sale from your ad campaigns.", items: ["Google Tag Manager Setup", "Conversion Action Configuration", "Call Tracking Integration", "Multi-Touch Attribution"], timeline: "3-5 Days" },
    { emoji: "🔄", title: "Performance Max Campaigns", desc: "Google's AI-powered campaign type that runs across all Google properties simultaneously.", items: ["PMax Campaign Structure", "Asset Group Creation", "Audience Signal Configuration", "Automated Bidding Optimization"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "500+ Google Ads campaigns managed across industries",
    "4.5x average return on ad spend (ROAS)",
    "Google Ads Certified professionals on the team",
    "35% average cost-per-acquisition reduction",
    "₹10 crore+ in total ad spend managed",
    "Comprehensive conversion tracking setup included",
    "Weekly optimization and budget reallocation",
    "Transparent reporting with clear ROI metrics",
    "No long-term contracts — month-to-month flexibility",
  ],
  process: [
    { step: "01", title: "Account Audit", desc: "We analyze your current account (or start fresh) and identify opportunities." },
    { step: "02", title: "Strategy & Setup", desc: "Keyword research, campaign structure, ad copy creation, and tracking setup." },
    { step: "03", title: "Launch & Monitor", desc: "Launch campaigns and monitor performance daily for the first 2 weeks." },
    { step: "04", title: "Optimize & Scale", desc: "Continuous bid optimization, negative keywords, and scaling winning campaigns." },
  ],
  faqs: [
    { q: "How much should I spend on Google Ads?", a: "For MSMEs, we recommend starting with ₹15,000-₹50,000/month in ad spend (plus management fee). This allows enough data for optimization. We scale budgets based on proven ROAS — only invest more when it's profitable." },
    { q: "How fast will I get leads from Google Ads?", a: "Google Ads can generate leads from day one. However, the first 2-3 weeks are an optimization period where we refine keywords, bids, and targeting. Stable, cost-effective lead flow typically establishes by week 3-4." },
    { q: "What is ROAS and what should I target?", a: "ROAS (Return on Ad Spend) = Revenue / Ad Spend. A 4x ROAS means ₹4 revenue for every ₹1 spent on ads. For lead-gen businesses, we focus on CPA (Cost Per Acquisition) instead. Target ROAS varies by industry — we set realistic benchmarks." },
    { q: "Should I run Google Ads or SEO first?", a: "Google Ads for immediate leads, SEO for long-term organic traffic. Ideally, run both simultaneously — Ads for quick wins while SEO builds over 3-6 months. Ad data (keywords, conversion rates) also informs SEO strategy." },
    { q: "Do you manage the ad account or do I own it?", a: "You own the account 100%. We manage it through a manager account (MCC) and you retain full access and control. If you ever switch agencies, your account, data, and history come with you." },
  ],
}

export default function GoogleAdsPage() {
  return <ServicePageTemplate data={data} />
}
