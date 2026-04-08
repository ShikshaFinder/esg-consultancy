import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📝",
  breadcrumbLabel: "WordPress Website Development",
  heroTitle: "Professional Websites with",
  heroHighlight: "WordPress",
  heroDesc: "WordPress powers 43% of all websites worldwide. Get a feature-rich, easy-to-manage WordPress website with custom themes, plugins, and SEO optimization — at an affordable price.",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "400+", label: "WordPress Sites Built" },
    { value: "15-20 Days", label: "Avg Delivery" },
    { value: "₹10K", label: "Starting From" },
    { value: "100%", label: "Mobile Responsive" },
  ],
  services: [
    { emoji: "🎨", title: "Custom Theme Development", desc: "Unique WordPress themes designed and coded to match your brand identity.", items: ["Custom Design from Scratch", "Elementor / Gutenberg Builder", "Mobile Responsive Layout", "Speed Optimized Theme"], timeline: "10-15 Days" },
    { emoji: "🔌", title: "Plugin Integration & Customization", desc: "Expert plugin selection, configuration, and custom plugin development.", items: ["SEO (Yoast/RankMath) Setup", "Security (Wordfence) Config", "Contact Form 7 / WPForms", "Custom Plugin Development"], timeline: "3-7 Days" },
    { emoji: "🛒", title: "WooCommerce Setup", desc: "Transform your WordPress site into a full-featured online store with WooCommerce.", items: ["WooCommerce Installation", "Product Catalog Setup", "Payment Gateway Integration", "Shipping & Tax Configuration"], timeline: "10-15 Days" },
    { emoji: "📊", title: "WordPress SEO Setup", desc: "Complete SEO configuration to ensure your WordPress site ranks well on Google.", items: ["Technical SEO Configuration", "Sitemap & Schema Setup", "Page Speed Optimization", "Content Structure Planning"], timeline: "3-5 Days" },
    { emoji: "🛡️", title: "Security & Performance", desc: "Harden your WordPress site against threats and optimize for blazing-fast load times.", items: ["SSL & Firewall Setup", "Malware Scanning & Removal", "Caching & CDN Configuration", "Image & Database Optimization"], timeline: "2-3 Days" },
    { emoji: "🔄", title: "Migration & Maintenance", desc: "Migrate from another platform to WordPress, or ongoing maintenance for existing sites.", items: ["Website Migration (Any to WP)", "Content & SEO Migration", "Monthly Updates & Backups", "Bug Fixes & Support"], timeline: "5-10 Days" },
  ],
  whyChooseUs: [
    "400+ WordPress websites built and maintained",
    "Custom theme development — no generic templates",
    "WooCommerce e-commerce expertise",
    "Speed optimized — 90+ PageSpeed scores",
    "Security hardened with enterprise-grade protection",
    "SEO setup included with every website",
    "Easy-to-use admin panel training provided",
    "1-year free maintenance and support included",
    "MSME-friendly pricing starting from ₹10,000",
  ],
  process: [
    { step: "01", title: "Requirements Gathering", desc: "Understand your business, content, features needed, and design preferences." },
    { step: "02", title: "Design & Development", desc: "Create custom theme, build pages, configure plugins, and optimize performance." },
    { step: "03", title: "Content & Testing", desc: "Add content, test across devices and browsers, and fine-tune everything." },
    { step: "04", title: "Launch & Train", desc: "Deploy to live hosting, set up analytics, and train you to manage the site." },
  ],
  faqs: [
    { q: "Why should I choose WordPress?", a: "WordPress powers 43% of all websites — it's trusted, flexible, and has a massive ecosystem. Benefits: easy content management, 60,000+ plugins, SEO-friendly, WooCommerce for e-commerce, and cost-effective. It's ideal for business websites, blogs, portfolios, and online stores." },
    { q: "Is WordPress secure?", a: "WordPress core is secure, but plugins and themes can introduce vulnerabilities. We implement: SSL certificates, security plugins (Wordfence), regular updates, strong authentication, file permissions hardening, and server-level protection. Our sites have a 100% security track record." },
    { q: "Can I update my WordPress site myself?", a: "Yes, WordPress has an intuitive admin panel for updating text, images, pages, and blog posts. We also set up page builders (Elementor/Gutenberg) so you can make design changes without coding. Training session included with every project." },
    { q: "How much does a WordPress website cost?", a: "Simple business website: ₹10,000-₹25,000. Custom-designed site: ₹25,000-₹75,000. WooCommerce store: ₹30,000-₹1,00,000. Complex portals: ₹1,00,000+. Hosting is additional at ₹3,000-₹10,000/year." },
    { q: "Can you migrate my existing site to WordPress?", a: "Yes, we migrate from any platform — Wix, Squarespace, Joomla, static HTML, or custom CMS. We preserve all content, images, URL structure (for SEO), and set up redirects. Migration typically takes 5-10 days with zero downtime." },
  ],
}

export default function WordPressDevelopmentPage() {
  return <ServicePageTemplate data={data} />
}
