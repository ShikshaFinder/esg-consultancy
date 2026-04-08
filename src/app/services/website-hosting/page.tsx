import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🖥️",
  breadcrumbLabel: "Website Hosting",
  heroTitle: "Reliable & Fast",
  heroHighlight: "Website Hosting",
  heroDesc: "Enterprise-grade hosting solutions for businesses of all sizes. 99.9% uptime guarantee, blazing-fast servers, automatic backups, and 24/7 security monitoring — fully managed so you can focus on business.",
  heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "500+", label: "Sites Hosted" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "<2s", label: "Avg Load Time" },
    { value: "24/7", label: "Support" },
  ],
  services: [
    { emoji: "🚀", title: "Managed WordPress Hosting", desc: "Optimized hosting for WordPress sites with automatic updates, caching, and security.", items: ["WordPress Auto-Updates", "Built-In Caching (LiteSpeed)", "Free SSL Certificate", "Daily Automatic Backups"], timeline: "Same Day" },
    { emoji: "🏢", title: "Business Hosting", desc: "Powerful hosting for business websites with dedicated resources and scalability.", items: ["Dedicated CPU & RAM", "SSD NVMe Storage", "Unlimited Bandwidth", "Free Domain & Email"], timeline: "Same Day" },
    { emoji: "☁️", title: "Cloud Hosting", desc: "Scalable cloud infrastructure on AWS, Google Cloud, or DigitalOcean for high-traffic sites.", items: ["Auto-Scaling Resources", "Load Balancer Setup", "Multi-Region Deployment", "99.99% Uptime SLA"], timeline: "1-2 Days" },
    { emoji: "🛡️", title: "Security & SSL", desc: "Comprehensive security measures to protect your website from threats and data breaches.", items: ["Free SSL/TLS Certificates", "Web Application Firewall (WAF)", "DDoS Protection", "Malware Scanning & Removal"], timeline: "Same Day" },
    { emoji: "📧", title: "Business Email Hosting", desc: "Professional email addresses with your domain name — reliable and spam-protected.", items: ["Custom Domain Email", "30GB+ Mailbox Storage", "Anti-Spam Filtering", "Mobile & Desktop Access"], timeline: "Same Day" },
    { emoji: "🔄", title: "Migration & Management", desc: "Free website migration from any host and ongoing server management.", items: ["Free Website Migration", "Zero-Downtime Transfer", "DNS Management", "Server Monitoring & Alerts"], timeline: "1-3 Days" },
  ],
  whyChooseUs: [
    "500+ websites hosted with 99.9% uptime track record",
    "Sub-2-second load times with SSD NVMe servers",
    "Free SSL certificates and security suite included",
    "Daily automatic backups with one-click restore",
    "24/7 server monitoring and security scanning",
    "Free website migration from any existing host",
    "Managed updates for WordPress and plugins",
    "Scalable plans — upgrade as your traffic grows",
    "Dedicated support team for hosting issues",
  ],
  process: [
    { step: "01", title: "Plan Selection", desc: "We assess your website type, traffic, and requirements to recommend the right hosting plan." },
    { step: "02", title: "Setup & Migration", desc: "Provision the server, install SSL, and migrate your website with zero downtime." },
    { step: "03", title: "Optimization", desc: "Configure caching, CDN, security rules, and optimize server settings for speed." },
    { step: "04", title: "Ongoing Management", desc: "24/7 monitoring, automatic backups, security scanning, and technical support." },
  ],
  faqs: [
    { q: "What hosting plan do I need?", a: "For small business websites: shared hosting (₹3,000-₹5,000/year). Medium sites with 10K+ monthly visitors: business hosting (₹5,000-₹12,000/year). High-traffic sites or applications: cloud hosting (₹1,000-₹5,000/month). We recommend based on your actual needs." },
    { q: "Do you provide a free domain?", a: "Yes, most hosting plans include a free .com or .in domain for the first year. We also handle domain registration, DNS setup, and yearly renewal management so you never lose your domain." },
    { q: "What is your uptime guarantee?", a: "We guarantee 99.9% uptime — that's less than 8.76 hours of downtime per year. Our cloud hosting plans offer 99.99% uptime. We monitor servers 24/7 and resolve issues proactively before they affect your website." },
    { q: "How do backups work?", a: "We perform automatic daily backups of your entire website (files + database). Backups are stored for 30 days in a separate location. You can restore with one click. Additionally, we take manual backups before any major update or change." },
    { q: "Can you migrate my existing website?", a: "Yes, we provide free website migration from any hosting provider — GoDaddy, Hostinger, Bluehost, or any other. Migration includes all files, databases, emails, and DNS transfer. Zero downtime guaranteed during migration." },
  ],
}

export default function WebsiteHostingPage() {
  return <ServicePageTemplate data={data} />
}
