import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "👤",
  breadcrumbLabel: "Proprietorship",
  heroTitle: "Start Your Business as a",
  heroHighlight: "Sole Proprietorship",
  heroDesc: "The simplest and fastest way to start a business in India. Minimal compliance, complete control, and quick setup — ideal for freelancers, small traders, and individual entrepreneurs.",
  heroImage: "https://images.unsplash.com/photo-1507679799987-c73b1604ad19?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "5000+", label: "Businesses Registered" },
    { value: "1-3 Days", label: "Avg Timeline" },
    { value: "100%", label: "Success Rate" },
    { value: "₹1,999", label: "Starting From" },
  ],
  services: [
    { emoji: "📋", title: "Proprietorship Registration", desc: "Quick business registration with Udyam, GST, and Shop & Establishment Act as applicable.", items: ["Udyam / MSME Registration", "Trade Name Registration", "Shop & Establishment License", "Business Commencement Proof"], timeline: "1-2 Days" },
    { emoji: "💼", title: "GST Registration", desc: "Mandatory GST registration for businesses exceeding turnover threshold or for interstate trade.", items: ["GSTIN Application & Issuance", "HSN/SAC Code Classification", "Composition Scheme Guidance", "Return Filing Setup"], timeline: "3-5 Days" },
    { emoji: "🏦", title: "Current Account Opening", desc: "Assistance with opening a business current account in your trade name at partner banks.", items: ["Bank Documentation Preparation", "Trade License & GST Certificate", "Partner Bank Introductions", "Digital Banking Setup"], timeline: "2-3 Days" },
    { emoji: "📑", title: "FSSAI License", desc: "Food safety license for proprietors in the food business — manufacturing, trading, or catering.", items: ["Basic/State/Central FSSAI", "Food Category Classification", "Application Filing & Tracking", "License Renewal Setup"], timeline: "7-30 Days" },
    { emoji: "🔐", title: "Import Export Code (IEC)", desc: "IEC registration for proprietors looking to engage in international trade.", items: ["DGFT Portal Application", "IEC Code Issuance", "AD Code Linking with Bank", "Export Benefit Scheme Guidance"], timeline: "2-3 Days" },
    { emoji: "🔄", title: "Conversion to Pvt Ltd / LLP", desc: "When your business grows, seamlessly convert your proprietorship to a formal structure.", items: ["Business Valuation Assessment", "Structure Recommendation", "MCA Filing & Transfer", "Bank & License Transfer Support"], timeline: "15-30 Days" },
  ],
  whyChooseUs: [
    "Fastest business setup — operational in 1-3 days",
    "Complete documentation and registration support",
    "GST registration with return filing guidance",
    "Bank account opening at partner banks included",
    "MSME Udyam certificate for scheme benefits",
    "Minimal annual compliance requirements",
    "Expert guidance on choosing the right structure",
    "Conversion support when business scales up",
    "Ongoing tax filing and compliance support",
  ],
  process: [
    { step: "01", title: "Quick Consultation", desc: "We understand your business type and recommend the right registrations needed." },
    { step: "02", title: "Documentation", desc: "Collect identity, address, and business proofs. Prepare all application forms." },
    { step: "03", title: "Registration Filing", desc: "File Udyam, GST, and other applicable registrations simultaneously." },
    { step: "04", title: "Ready to Operate", desc: "Receive all certificates, bank account setup, and compliance guidance." },
  ],
  faqs: [
    { q: "What documents are needed for proprietorship registration?", a: "You need PAN card, Aadhaar card, passport-size photo, address proof (electricity bill/rent agreement for business address), and bank statement. For GST, you'll also need the business address proof." },
    { q: "Is proprietorship registration mandatory?", a: "There's no single 'proprietorship registration' — it's established through other registrations like Udyam/MSME, GST, Shop & Establishment License, or professional tax. We handle whichever combination your business needs." },
    { q: "What are the tax implications of a proprietorship?", a: "Proprietorship income is taxed as personal income of the owner under individual income tax slabs. You can choose between old and new tax regimes. Business expenses are deductible. GST is separate from income tax." },
    { q: "When should I convert to a Pvt Ltd?", a: "Consider converting when: annual turnover exceeds ₹40 lakhs, you want to raise equity funding, you need to hire large teams with ESOPs, or you want limited liability protection. We help plan the right time for conversion." },
    { q: "Can a proprietorship have employees?", a: "Yes, proprietorships can hire employees. You'll need to comply with PF/ESI if you cross the employee threshold (20 employees for PF, 10 for ESI in some states), professional tax, and maintain employment records." },
  ],
}

export default function ProprietorshipPage() {
  return <ServicePageTemplate data={data} />
}
