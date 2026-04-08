import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "⚡",
  breadcrumbLabel: "Custom Website Development",
  heroTitle: "Bespoke Websites Built",
  heroHighlight: "From Scratch",
  heroDesc: "Custom-coded websites and web applications tailored to your exact business requirements. No templates, no limitations — built with modern technologies for performance, scalability, and unique user experience.",
  heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "200+", label: "Custom Builds" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "20-45 Days", label: "Avg Delivery" },
    { value: "React/Next.js", label: "Tech Stack" },
  ],
  services: [
    { emoji: "⚛️", title: "React / Next.js Development", desc: "Modern, fast, and SEO-friendly websites built with React and Next.js framework.", items: ["Server-Side Rendering (SSR)", "Static Site Generation (SSG)", "Dynamic Routing & Pages", "API Routes & Backend"], timeline: "20-40 Days" },
    { emoji: "🎨", title: "Custom UI/UX Design", desc: "Unique visual designs that stand out from template-based competitors.", items: ["Brand-Aligned Design System", "Custom Animations & Interactions", "Figma Design Deliverables", "User Journey Mapping"], timeline: "10-15 Days" },
    { emoji: "🔌", title: "API & Integration Development", desc: "Connect your website with CRMs, payment gateways, and third-party services.", items: ["REST & GraphQL API Development", "Payment Gateway Integration", "CRM & ERP Connectivity", "Third-Party API Integration"], timeline: "7-20 Days" },
    { emoji: "📊", title: "Dashboard & Admin Panels", desc: "Custom admin dashboards for data management, analytics, and business operations.", items: ["Data Visualization Dashboards", "User Management Panels", "Content Management System", "Reporting & Analytics"], timeline: "15-30 Days" },
    { emoji: "📱", title: "Progressive Web Apps (PWA)", desc: "App-like web experiences that work offline and can be installed on mobile devices.", items: ["Offline-First Architecture", "Push Notification Setup", "App-Like Navigation", "Mobile Install Capability"], timeline: "25-45 Days" },
    { emoji: "🚀", title: "Performance Optimization", desc: "Achieve sub-second load times with advanced performance optimization techniques.", items: ["Code Splitting & Lazy Loading", "Image Optimization & CDN", "Core Web Vitals Optimization", "Server & Caching Strategy"], timeline: "5-10 Days" },
  ],
  whyChooseUs: [
    "200+ custom-coded websites with modern tech stacks",
    "React, Next.js, TypeScript — cutting-edge technologies",
    "Google PageSpeed Score 95+ guaranteed",
    "Custom animations and interaction design",
    "Scalable architecture for growing businesses",
    "Clean, maintainable, documented code",
    "Full API development and third-party integrations",
    "Git-based version control and CI/CD setup",
    "Post-launch performance monitoring and support",
  ],
  process: [
    { step: "01", title: "Discovery & Architecture", desc: "Define requirements, tech stack, information architecture, and project timeline." },
    { step: "02", title: "Design & Prototype", desc: "UI/UX design in Figma with interactive prototypes for client review and feedback." },
    { step: "03", title: "Development & Testing", desc: "Agile development with sprint reviews. Testing across devices and browsers." },
    { step: "04", title: "Deploy & Optimize", desc: "Production deployment, performance optimization, and post-launch support." },
  ],
  faqs: [
    { q: "Why choose custom over template-based?", a: "Custom development offers: unique design matching your brand, no template limitations, better performance (leaner code), full SEO control, scalability for future features, and no dependency on template updates. It's the right choice when your website is a core business asset." },
    { q: "What technologies do you use?", a: "Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, Express, PostgreSQL. Infrastructure: Vercel, AWS. We choose the best stack for your specific requirements rather than forcing one-size-fits-all." },
    { q: "How much more does custom development cost?", a: "Custom websites start from ₹50,000 for simple sites and ₹1,00,000-₹5,00,000 for complex web applications. While more expensive than templates, the ROI is higher due to better performance, unique design, and scalability." },
    { q: "Will I be able to update content myself?", a: "Yes, we build a custom CMS (or integrate headless CMS like Sanity/Strapi) so you can update content without touching code. For frequent updates, we can set up a user-friendly admin panel tailored to your workflow." },
    { q: "Do you provide source code ownership?", a: "Yes, 100% source code ownership transfers to you upon final payment. Code is hosted on your Git repository (GitHub/GitLab). You can engage any developer to maintain or modify the code in the future." },
  ],
}

export default function CustomWebsiteDevelopmentPage() {
  return <ServicePageTemplate data={data} />
}
