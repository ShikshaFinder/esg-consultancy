import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🌐",
  breadcrumbLabel: "Website Development Services",
  heroTitle: "Professional Websites That",
  heroHighlight: "Drive Business Growth",
  heroDesc: "Custom-built, responsive websites that convert visitors into customers. From business websites to web applications — we deliver pixel-perfect designs with powerful functionality.",
  heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "500+", label: "Websites Built" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15-30 Days", label: "Avg Delivery" },
    { value: "₹15K", label: "Starting From" },
  ],
  services: [
    { emoji: "💻", title: "Business Website Development", desc: "Professional company websites that establish credibility and generate leads.", items: ["5-15 Page Business Website", "Mobile Responsive Design", "Contact Forms & CTAs", "Google Maps & Analytics"], timeline: "10-15 Days" },
    { emoji: "📱", title: "Landing Page Design", desc: "High-converting landing pages optimized for lead generation and ad campaigns.", items: ["Single-Page Conversion Design", "A/B Testing Ready", "Lead Capture Forms", "Speed Optimized (<2s Load)"], timeline: "3-5 Days" },
    { emoji: "⚙️", title: "Web Application Development", desc: "Custom web applications with complex functionality, dashboards, and user management.", items: ["Custom Feature Development", "Admin Dashboard & CMS", "User Authentication & Roles", "API Integration & Backend"], timeline: "30-60 Days" },
    { emoji: "🎨", title: "UI/UX Design", desc: "User-centered design that looks beautiful and delivers an intuitive user experience.", items: ["Wireframing & Prototyping", "Visual Design & Branding", "User Flow Optimization", "Interaction Design"], timeline: "7-14 Days" },
    { emoji: "🔧", title: "Website Redesign", desc: "Transform your outdated website into a modern, fast, mobile-first digital experience.", items: ["Current Site Audit", "Design & UX Overhaul", "Content Migration", "SEO Preservation"], timeline: "15-25 Days" },
    { emoji: "🛠️", title: "Maintenance & Support", desc: "Ongoing website maintenance, security updates, and technical support.", items: ["Monthly Security Updates", "Performance Monitoring", "Content Update Support", "Bug Fixes & Improvements"], timeline: "Monthly" },
  ],
  whyChooseUs: [
    "500+ websites built for businesses across India",
    "Mobile-first responsive design for all devices",
    "SEO-optimized structure from day one",
    "Google PageSpeed Score 90+ on all websites",
    "Free SSL certificate and security setup",
    "Custom CMS for easy content management",
    "1-year free maintenance with every project",
    "Post-launch SEO and analytics setup included",
    "Dedicated project manager for timely delivery",
  ],
  process: [
    { step: "01", title: "Discovery & Planning", desc: "Understand your goals, audience, and requirements. Create sitemap and wireframes." },
    { step: "02", title: "Design & Approval", desc: "Visual design concepts for feedback. Iterate until you're 100% satisfied." },
    { step: "03", title: "Development & Testing", desc: "Build the website with clean code, test across devices, and optimize performance." },
    { step: "04", title: "Launch & Support", desc: "Deploy to production, set up analytics, and provide ongoing maintenance support." },
  ],
  faqs: [
    { q: "How much does a business website cost?", a: "Business websites start from ₹15,000 (5-page template-based) to ₹50,000-₹1,50,000 for custom-designed multi-page websites. E-commerce sites start from ₹30,000. Complex web applications are quoted based on features and scope." },
    { q: "How long does website development take?", a: "Simple business website: 10-15 days. Landing pages: 3-5 days. E-commerce: 15-30 days. Custom web applications: 30-60 days. We follow agile methodology with milestone-based delivery and regular client reviews." },
    { q: "Will my website work on mobile?", a: "Every website we build is mobile-first and responsive — it works perfectly on all screen sizes (mobile, tablet, desktop). We test on multiple devices and browsers before delivery." },
    { q: "Do you provide hosting and domain?", a: "Yes, we can set up hosting and domain registration. We recommend managed hosting solutions that provide speed, security, and automatic backups. Hosting costs typically range from ₹3,000-₹10,000/year depending on requirements." },
    { q: "Can I update the website content myself?", a: "Yes, we set up an easy-to-use CMS (content management system) so you can update text, images, and blog posts without technical knowledge. We also provide a training session and documentation for your team." },
  ],
}

export default function WebsiteDevelopmentPage() {
  return <ServicePageTemplate data={data} />
}
