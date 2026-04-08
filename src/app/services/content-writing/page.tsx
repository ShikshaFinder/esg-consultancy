import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "✍️",
  breadcrumbLabel: "Content Writing",
  heroTitle: "Engage Your Audience with",
  heroHighlight: "Professional Content",
  heroDesc: "High-quality content that ranks on Google, engages readers, and converts visitors into customers. Blog posts, website copy, social media content, and technical writing for businesses of all sizes.",
  heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "10000+", label: "Articles Written" },
    { value: "500+", label: "Clients Served" },
    { value: "85%", label: "First-Page Rankings" },
    { value: "50+", label: "Writers" },
  ],
  services: [
    { emoji: "📝", title: "Blog & Article Writing", desc: "SEO-optimized blog posts and articles that drive organic traffic and establish thought leadership.", items: ["Keyword-Researched Topics", "1000-3000 Word Long-Form", "Internal & External Linking", "Meta Title & Description"], timeline: "2-5 Days/Article" },
    { emoji: "🌐", title: "Website Copywriting", desc: "Conversion-focused website copy that communicates your value proposition clearly.", items: ["Homepage & Landing Pages", "Product / Service Pages", "About Us & Company Story", "CTA & Conversion Copy"], timeline: "7-14 Days" },
    { emoji: "📱", title: "Social Media Content", desc: "Engaging social media captions, scripts, and content calendars for consistent brand presence.", items: ["Instagram & Facebook Captions", "LinkedIn Posts & Articles", "X (Twitter) Threads", "YouTube Script Writing"], timeline: "Monthly" },
    { emoji: "📧", title: "Email & Newsletter Writing", desc: "Compelling email sequences and newsletters that nurture leads and drive conversions.", items: ["Welcome Email Sequences", "Product Launch Campaigns", "Newsletter Content", "Abandoned Cart Recovery"], timeline: "3-5 Days/Sequence" },
    { emoji: "📑", title: "Technical & Business Writing", desc: "Professional documentation, white papers, case studies, and business content.", items: ["White Papers & Reports", "Case Studies & Success Stories", "Product Documentation", "Business Proposals & Profiles"], timeline: "5-10 Days" },
    { emoji: "🎯", title: "Content Strategy", desc: "Data-driven content strategy that aligns with your business goals and target audience.", items: ["Content Audit & Gap Analysis", "Editorial Calendar Planning", "Competitor Content Analysis", "Content Performance Tracking"], timeline: "5-7 Days" },
  ],
  whyChooseUs: [
    "10000+ articles written with 85% achieving first-page rankings",
    "50+ experienced writers across industries and domains",
    "SEO-first approach with keyword research included",
    "Plagiarism-free content with originality reports",
    "Industry expertise: tech, finance, healthcare, legal, MSME",
    "Turnaround as fast as 24 hours for urgent content",
    "Unlimited revisions till satisfaction",
    "Dedicated content manager for each client",
    "Content performance tracking and optimization",
  ],
  process: [
    { step: "01", title: "Brief & Research", desc: "We understand your brand voice, target audience, and content goals. Keyword research included." },
    { step: "02", title: "Writing & Review", desc: "Our writers create content with SEO optimization and your brand guidelines." },
    { step: "03", title: "Editing & QC", desc: "Professional editing for grammar, readability, SEO, and plagiarism checks." },
    { step: "04", title: "Delivery & Optimization", desc: "Final content delivered, published, and tracked for performance optimization." },
  ],
  faqs: [
    { q: "What types of content do you write?", a: "We write: blog posts, website copy, landing pages, product descriptions, social media content, email sequences, newsletters, white papers, case studies, press releases, business profiles, and technical documentation. If it needs words, we write it." },
    { q: "How do you ensure SEO optimization?", a: "Every piece includes: keyword research (primary + LSI keywords), optimized title/meta description, proper heading hierarchy (H1-H4), internal/external linking, image alt text suggestions, and readability optimization (Flesch score 60+)." },
    { q: "What is your turnaround time?", a: "Standard: 3-5 business days for articles, 7-14 days for website copy. Rush delivery available in 24-48 hours at additional cost. Monthly content packages (8-12 articles) are delivered on a scheduled editorial calendar." },
    { q: "Do you write in specific tones/styles?", a: "Yes, we adapt to your brand voice — formal, conversational, technical, persuasive, or any custom style. We create a brand voice guide during onboarding and maintain consistency across all content pieces." },
    { q: "What about content in regional languages?", a: "We offer content writing in Hindi, Gujarati, Marathi, Tamil, Telugu, and other major Indian languages. We also provide English-to-regional translation and localization services for multi-language content strategies." },
  ],
}

export default function ContentWritingPage() {
  return <ServicePageTemplate data={data} />
}
