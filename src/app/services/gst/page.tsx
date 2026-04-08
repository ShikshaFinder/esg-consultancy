import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🧾",
  breadcrumbLabel: "Goods and Service Tax",
  heroTitle: "Seamless GST Registration &",
  heroHighlight: "Compliance Solutions",
  heroDesc: "End-to-end GST registration, return filing, and compliance management for businesses of all sizes. Stay compliant, claim input tax credits, and avoid penalties with our expert team.",
  heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "8000+", label: "GST Registrations" },
    { value: "3-5 Days", label: "Registration Time" },
    { value: "100%", label: "Compliance Rate" },
    { value: "₹999", label: "Starting From" },
  ],
  services: [
    { emoji: "📋", title: "GST Registration", desc: "New GSTIN registration for businesses, freelancers, e-commerce sellers, and interstate traders.", items: ["Regular GST Registration", "Composition Scheme Registration", "E-Commerce Seller GST", "Casual / Non-Resident GST"], timeline: "3-5 Days" },
    { emoji: "📊", title: "GST Return Filing", desc: "Timely and accurate filing of all GST returns — monthly, quarterly, and annual.", items: ["GSTR-1 (Outward Supplies)", "GSTR-3B (Summary Return)", "GSTR-9 (Annual Return)", "GSTR-9C (Reconciliation)"], timeline: "Monthly" },
    { emoji: "💰", title: "Input Tax Credit (ITC)", desc: "Maximize your ITC claims through proper reconciliation and compliance.", items: ["ITC Reconciliation (GSTR-2A/2B)", "Vendor GSTIN Verification", "Blocked Credit Identification", "ITC Reversal Calculation"], timeline: "Monthly" },
    { emoji: "📑", title: "GST Audit & Assessment", desc: "Comprehensive GST audit preparation and assessment support for your business.", items: ["GST Audit Preparation", "Assessment Response Drafting", "Demand Notice Reply", "Appeal Filing Support"], timeline: "15-30 Days" },
    { emoji: "🔄", title: "GST Amendment & Cancellation", desc: "Modify your GST registration details or cancel GSTIN when no longer needed.", items: ["Core Field Amendment", "Non-Core Field Changes", "GSTIN Cancellation Filing", "Revocation of Cancellation"], timeline: "7-15 Days" },
    { emoji: "📈", title: "E-Way Bill & E-Invoice", desc: "Compliance with e-way bill generation and e-invoicing requirements for seamless logistics.", items: ["E-Way Bill Generation", "E-Invoice Integration", "Consolidated E-Way Bills", "Transporter ID Management"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "8000+ GST registrations completed successfully",
    "Zero penalty record for return filing clients",
    "Expert ITC reconciliation for maximum savings",
    "Automated return filing with accuracy checks",
    "GST audit preparation and assessment support",
    "E-way bill and e-invoice compliance included",
    "Dedicated GST compliance manager for each client",
    "Real-time updates on tax law changes",
    "Support for all GST return types and amendments",
  ],
  process: [
    { step: "01", title: "Assessment", desc: "We determine your GST applicability, registration type, and compliance requirements." },
    { step: "02", title: "Registration", desc: "File GST application with all documents and secure your GSTIN within 3-5 days." },
    { step: "03", title: "Compliance Setup", desc: "Set up return filing calendar, ITC tracking, and e-invoicing as applicable." },
    { step: "04", title: "Ongoing Support", desc: "Monthly return filing, ITC reconciliation, and year-round compliance management." },
  ],
  faqs: [
    { q: "Who needs to register for GST?", a: "GST registration is mandatory if: annual turnover exceeds ₹40 lakhs (₹20 lakhs for services / special category states), you sell interstate, you sell on e-commerce platforms, or you need to claim input tax credits. Voluntary registration is also allowed." },
    { q: "What documents are needed for GST registration?", a: "You need PAN card, Aadhaar card, business address proof (rent agreement / electricity bill), bank statement or cancelled cheque, passport-size photo, and business registration documents (incorporation certificate, partnership deed, etc.)." },
    { q: "What is the Composition Scheme?", a: "The Composition Scheme is for businesses with turnover up to ₹1.5 crore (₹75 lakhs for services). You pay a flat 1-6% tax rate with simplified quarterly returns, but cannot claim ITC or make interstate sales. It's ideal for small local businesses." },
    { q: "What happens if GST returns are filed late?", a: "Late filing attracts: late fee of ₹50/day (₹20 for nil returns) up to ₹10,000, interest at 18% p.a. on unpaid tax, and eventual GSTIN suspension after 6+ months of non-filing. We ensure timely filing to avoid all penalties." },
    { q: "Can I claim ITC on all business purchases?", a: "ITC can be claimed on most business purchases if the supplier has filed their returns and the purchase is for business purposes. Blocked credits include motor vehicles (with exceptions), food & beverages, personal expenses, and goods used for exempt supplies." },
  ],
}

export default function GSTPage() {
  return <ServicePageTemplate data={data} />
}
