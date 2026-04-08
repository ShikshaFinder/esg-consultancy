import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📧",
  breadcrumbLabel: "Email Marketing",
  heroTitle: "Convert Leads into Customers with",
  heroHighlight: "Email Marketing",
  heroDesc: "Strategic email marketing campaigns that nurture leads, retain customers, and drive repeat purchases. From drip sequences to newsletters — we deliver emails that get opened, read, and acted upon.",
  heroImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "200+", label: "Clients Served" },
    { value: "42x", label: "Avg Email ROI" },
    { value: "35%", label: "Avg Open Rate" },
    { value: "50M+", label: "Emails Sent" },
  ],
  services: [
    { emoji: "📋", title: "Email Strategy & Setup", desc: "Complete email marketing strategy with list building, segmentation, and platform setup.", items: ["ESP Selection & Setup", "List Segmentation Strategy", "Opt-In Form & Landing Pages", "Compliance (CAN-SPAM/GDPR)"], timeline: "5-7 Days" },
    { emoji: "🔄", title: "Automated Email Sequences", desc: "Set-and-forget automation sequences that nurture leads and drive conversions 24/7.", items: ["Welcome Email Series", "Lead Nurture Drip Campaigns", "Abandoned Cart Recovery", "Post-Purchase Follow-Up"], timeline: "7-14 Days" },
    { emoji: "📰", title: "Newsletter Design & Sending", desc: "Regular newsletters that keep your audience engaged and your brand top-of-mind.", items: ["Template Design & Branding", "Content Curation & Writing", "A/B Subject Line Testing", "Optimal Send Time Analysis"], timeline: "Weekly/Monthly" },
    { emoji: "🎯", title: "Campaign Management", desc: "One-time promotional campaigns for launches, sales, events, and announcements.", items: ["Product Launch Emails", "Seasonal Sale Campaigns", "Event Invitation Sequences", "Re-Engagement Campaigns"], timeline: "Per Campaign" },
    { emoji: "📊", title: "Analytics & Optimization", desc: "Data-driven optimization of every email metric — open rates, clicks, and conversions.", items: ["Open Rate Optimization", "Click-Through Rate Improvement", "Conversion Tracking Setup", "List Health & Deliverability"], timeline: "Ongoing" },
    { emoji: "📱", title: "WhatsApp Business Marketing", desc: "Leverage WhatsApp Business API for transactional and promotional messaging.", items: ["WhatsApp Business API Setup", "Broadcast & Template Messages", "Chatbot Integration", "Catalog & Quick Reply Setup"], timeline: "7-10 Days" },
  ],
  whyChooseUs: [
    "200+ clients with proven email marketing results",
    "42x average ROI — highest of any marketing channel",
    "35% average open rate (industry avg is 21%)",
    "50 million+ emails sent with 98% deliverability",
    "Automation expertise across Mailchimp, Sendinblue, HubSpot",
    "WhatsApp Business API integration included",
    "GDPR & CAN-SPAM compliant practices",
    "A/B testing on every campaign for continuous improvement",
    "Dedicated email marketing specialist per client",
  ],
  process: [
    { step: "01", title: "Strategy & Setup", desc: "Platform setup, list import, segmentation, and email strategy planning." },
    { step: "02", title: "Template Design", desc: "Create branded email templates, automation workflows, and opt-in forms." },
    { step: "03", title: "Campaign Launch", desc: "Launch automated sequences and start regular newsletter cadence." },
    { step: "04", title: "Optimize & Scale", desc: "A/B testing, list growth, deliverability optimization, and ROI reporting." },
  ],
  faqs: [
    { q: "Is email marketing still effective?", a: "Email marketing has a 42x ROI — the highest of any digital channel. It's the best way to nurture leads, retain customers, and drive repeat purchases. Unlike social media, you own your email list and aren't dependent on algorithm changes." },
    { q: "Which email platform do you recommend?", a: "For MSMEs: Mailchimp (free up to 500 contacts), Brevo/Sendinblue (good free tier), or Zoho Campaigns (India-based). For growing businesses: HubSpot, ActiveCampaign, or ConvertKit. We help select and set up the right platform for your needs." },
    { q: "How do you build my email list?", a: "We create: website opt-in forms, pop-ups with lead magnets, landing pages, social media lead generation campaigns, and content upgrades. We never purchase email lists — all subscribers are organically acquired and permission-based." },
    { q: "How often should I send emails?", a: "For most businesses: 1 newsletter/week + automated sequences running in the background. E-commerce can send 2-3/week during active seasons. The key is consistency and value — we track unsubscribe rates to find the optimal frequency." },
    { q: "Do you handle WhatsApp marketing too?", a: "Yes, we set up WhatsApp Business API for automated transactional messages, promotional broadcasts, chatbot responses, and product catalogs. WhatsApp has 98% open rates — perfect for urgent promotions and customer engagement." },
  ],
}

export default function EmailMarketingPage() {
  return <ServicePageTemplate data={data} />
}
