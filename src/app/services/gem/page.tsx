import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏪",
  breadcrumbLabel: "GeM",
  heroTitle: "Sell to the Government on",
  heroHighlight: "GeM Portal",
  heroDesc: "Government e-Marketplace (GeM) is India's largest public procurement platform with ₹4 lakh crore+ annual transactions. We register your business, list products/services, and help you win government tenders.",
  heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "1000+", label: "Sellers Registered" },
    { value: "3-5 Days", label: "Registration Time" },
    { value: "₹4L Cr+", label: "GeM Market Size" },
    { value: "98%", label: "Approval Rate" },
  ],
  services: [
    { emoji: "📋", title: "GeM Seller Registration", desc: "Complete registration on the GeM portal as an authorized seller for government procurement.", items: ["Udyam / MSME Verification", "PAN & GST Validation", "Bank Account Verification", "Digital Signature Setup"], timeline: "3-5 Days" },
    { emoji: "📦", title: "Product & Service Listing", desc: "List your products and services on GeM with optimized descriptions and competitive pricing.", items: ["Category & Catalog Mapping", "Product Specification Drafting", "Pricing Strategy & OEM Authorization", "Image & Document Upload"], timeline: "2-3 Days" },
    { emoji: "📑", title: "Bid & RA Participation", desc: "Strategic support for participating in GeM bids and Reverse Auctions (RA) to win orders.", items: ["Bid Document Preparation", "Technical & Financial Bid Filing", "Reverse Auction Strategy", "L1 Pricing Optimization"], timeline: "Per Bid" },
    { emoji: "🔄", title: "Order Fulfillment Support", desc: "End-to-end support for fulfilling government orders and maintaining seller ratings.", items: ["Invoice Generation & CRAC", "Consignee Receipt & Acceptance", "Payment Follow-up & Tracking", "Seller Rating Optimization"], timeline: "Ongoing" },
    { emoji: "⚙️", title: "GeM Compliance & Updates", desc: "Stay compliant with GeM policies and update your listings as marketplace norms evolve.", items: ["Annual Profile Renewal", "Policy Change Compliance", "Catalog Update & Pricing Revision", "Dispute Resolution Support"], timeline: "Ongoing" },
    { emoji: "📈", title: "GeM Growth Strategy", desc: "Scale your government sales with data-driven strategies and multi-category expansion.", items: ["Sales Analytics & Reporting", "Multi-Category Expansion Plan", "Direct Purchase Outreach", "GeM 4.0 Feature Optimization"], timeline: "Monthly" },
  ],
  whyChooseUs: [
    "1000+ sellers successfully registered and active on GeM",
    "Expert team trained on GeM 4.0 portal features",
    "Bid and Reverse Auction winning strategies",
    "Complete seller profile optimization for better visibility",
    "Payment follow-up and CRAC support",
    "Multi-category product listing expertise",
    "Government procurement policy knowledge",
    "Dedicated GeM account manager for each client",
    "Post-registration training and ongoing support",
  ],
  process: [
    { step: "01", title: "Eligibility Check", desc: "We verify your business eligibility, MSME status, GST, and other prerequisites for GeM." },
    { step: "02", title: "Registration & Listing", desc: "Complete seller registration and product/service listing with optimized catalogs." },
    { step: "03", title: "Bid Participation", desc: "We prepare and submit bids, handle technical evaluations, and strategize for RAs." },
    { step: "04", title: "Order & Growth", desc: "Ongoing order support, payment tracking, and scaling strategy for government sales." },
  ],
  faqs: [
    { q: "Who can register as a seller on GeM?", a: "Any Indian business entity — proprietorship, partnership, LLP, Pvt Ltd, OPC, or even individual service providers — with a valid PAN, GST registration, and bank account can register on GeM. MSME/Udyam registration is highly recommended for additional benefits." },
    { q: "What products/services can be sold on GeM?", a: "GeM has 10,000+ product categories and 250+ service categories covering IT, office supplies, furniture, machinery, consulting, manpower, security, cleaning, and virtually every government procurement need. We help map your offerings to the right categories." },
    { q: "How do government orders work on GeM?", a: "Government buyers can place Direct Purchase orders (up to ₹25K), use L1 buying for products listed in catalogs, or float Bids/RAs for bulk requirements. As a registered seller, you receive order notifications and can participate in all these modes." },
    { q: "What is the payment timeline on GeM?", a: "GeM mandates payment within 10 days of consignee receipt and acceptance (CRAC). Payments are processed through the PFMS system directly to your bank account. Delayed payments attract automatic interest." },
    { q: "Is there any registration fee for GeM?", a: "GeM seller registration itself is free — there's no platform fee. Our service covers profile setup, catalog listing, bid strategy, and ongoing support to ensure you start winning orders quickly." },
  ],
}

export default function GeMPage() {
  return <ServicePageTemplate data={data} />
}
