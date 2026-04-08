import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🛒",
  breadcrumbLabel: "E-Commerce Website Development",
  heroTitle: "Launch Your Online Store with",
  heroHighlight: "E-Commerce Development",
  heroDesc: "Feature-rich e-commerce websites that sell 24/7. From product catalogs to payment gateways, shipping integration to inventory management — we build complete online stores.",
  heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "300+", label: "E-Commerce Stores" },
    { value: "₹50Cr+", label: "GMV Processed" },
    { value: "15-30 Days", label: "Avg Delivery" },
    { value: "₹25K", label: "Starting From" },
  ],
  services: [
    { emoji: "🛍️", title: "Shopify Store Development", desc: "Professional Shopify stores with custom themes, apps, and conversion optimization.", items: ["Custom Theme Development", "App Integration & Setup", "Payment & Shipping Config", "Multi-Currency Support"], timeline: "10-20 Days" },
    { emoji: "🏪", title: "WooCommerce Development", desc: "WordPress-based e-commerce with full customization and plugin ecosystem.", items: ["WooCommerce Setup & Config", "Custom Plugin Development", "Product Catalog Setup", "Tax & Shipping Rules"], timeline: "15-25 Days" },
    { emoji: "⚡", title: "Custom E-Commerce (Headless)", desc: "High-performance headless e-commerce with React/Next.js frontend for speed.", items: ["Headless Commerce Architecture", "Custom Cart & Checkout", "API-First Product Management", "CDN-Delivered Storefronts"], timeline: "30-45 Days" },
    { emoji: "💳", title: "Payment & Logistics Integration", desc: "Seamless integration with Indian payment gateways and logistics providers.", items: ["Razorpay / PayU / Cashfree", "Shiprocket / Delhivery / DTDC", "COD Management System", "Automated Invoice Generation"], timeline: "3-7 Days" },
    { emoji: "📊", title: "Inventory & Order Management", desc: "Backend systems to manage products, orders, and inventory efficiently.", items: ["Multi-Location Inventory", "Order Tracking Dashboard", "Low Stock Alerts", "Bulk Import/Export Tools"], timeline: "7-15 Days" },
    { emoji: "📱", title: "Mobile Commerce Optimization", desc: "Mobile-first shopping experience optimized for India's mobile-heavy e-commerce market.", items: ["Mobile-First Responsive Design", "One-Page Checkout", "WhatsApp Order Integration", "PWA for App-Like Experience"], timeline: "5-10 Days" },
  ],
  whyChooseUs: [
    "300+ e-commerce stores built and launched",
    "₹50 crore+ in GMV processed through our stores",
    "Shopify, WooCommerce, and custom development expertise",
    "Indian payment gateway expertise (Razorpay, PayU)",
    "Logistics integration with all major couriers",
    "Mobile-first design for Indian market",
    "SEO-optimized product pages for organic traffic",
    "Post-launch marketing and growth support",
    "Dedicated e-commerce consultant per project",
  ],
  process: [
    { step: "01", title: "Store Planning", desc: "Define product catalog, categories, payment, shipping, and business requirements." },
    { step: "02", title: "Design & UX", desc: "Custom store design focused on conversion, mobile experience, and brand identity." },
    { step: "03", title: "Development & Integration", desc: "Build the store, integrate payments, logistics, and set up inventory management." },
    { step: "04", title: "Launch & Grow", desc: "Launch store, set up marketing tools, and provide ongoing optimization support." },
  ],
  faqs: [
    { q: "Which platform is best for my e-commerce store?", a: "Shopify for quick launch and ease of use, WooCommerce for flexibility with WordPress, and custom (headless) for large catalogs needing maximum performance. We analyze your product range, budget, and growth plans to recommend the right platform." },
    { q: "How much does an e-commerce website cost?", a: "Shopify store: ₹25,000-₹75,000. WooCommerce: ₹30,000-₹1,00,000. Custom headless: ₹1,50,000-₹5,00,000. Cost depends on: number of products, custom features, design complexity, and integrations needed." },
    { q: "Which payment gateways do you integrate?", a: "We integrate all major Indian gateways: Razorpay, PayU, Cashfree, Instamojo, CCAvenue, and Paytm. International: Stripe and PayPal. We also set up COD (Cash on Delivery) and UPI payment options." },
    { q: "Do you handle product photography and catalog setup?", a: "We can set up your product catalog with descriptions, images, categories, and variants. For product photography, we partner with professional studios or guide you on DIY setups. We also handle bulk product import from spreadsheets." },
    { q: "Can you help with marketing after launch?", a: "Yes, we offer post-launch services: Google Shopping Ads, Facebook/Instagram shop integration, SEO for product pages, email marketing setup, and abandoned cart recovery. Our goal is not just building the store but making it profitable." },
  ],
}

export default function EcommerceDevelopmentPage() {
  return <ServicePageTemplate data={data} />
}
