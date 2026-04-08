import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🌍",
  breadcrumbLabel: "IEC Certification",
  heroTitle: "Start International Trade with",
  heroHighlight: "IEC Registration",
  heroDesc: "Import Export Code (IEC) is mandatory for any business involved in importing or exporting goods/services from India. Get your IEC from DGFT in just 2-3 days with our hassle-free process.",
  heroImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "3000+", label: "IECs Issued" },
    { value: "2-3 Days", label: "Avg Timeline" },
    { value: "100%", label: "Success Rate" },
    { value: "₹1,499", label: "Starting From" },
  ],
  services: [
    { emoji: "📋", title: "IEC Code Registration", desc: "New Import Export Code application on the DGFT portal with complete documentation.", items: ["DGFT Portal Application", "IEC Code Issuance", "Lifetime Validity (No Renewal)", "Digital IEC Certificate"], timeline: "2-3 Days" },
    { emoji: "🏦", title: "AD Code Registration", desc: "Link your IEC with your bank's AD (Authorized Dealer) code for foreign exchange transactions.", items: ["AD Code Application at Bank", "Port-Wise AD Code Linking", "Multi-Bank AD Code Setup", "SWIFT Code Configuration"], timeline: "3-5 Days" },
    { emoji: "📦", title: "Export Documentation", desc: "Complete export documentation support for smooth international shipments.", items: ["Shipping Bill Preparation", "Bill of Lading / Airway Bill", "Certificate of Origin", "Commercial Invoice & Packing List"], timeline: "Per Shipment" },
    { emoji: "📑", title: "Import Compliance", desc: "Navigate customs regulations, duties, and import compliance for your products.", items: ["HS Code Classification", "Import Duty Calculation", "Customs Clearance Documentation", "IGST & BCD Compliance"], timeline: "Per Shipment" },
    { emoji: "💰", title: "Export Benefit Schemes", desc: "Maximize your export earnings through government incentive schemes.", items: ["RoDTEP / RoSCTL Benefits", "Advance Authorization Scheme", "EPCG Scheme Guidance", "Duty Drawback Claims"], timeline: "Ongoing" },
    { emoji: "🔄", title: "IEC Modification & Updates", desc: "Update your IEC details for changes in business address, directors, or bank accounts.", items: ["Address / Director Changes", "Bank Account Updates", "Entity Type Modification", "Branch Office Addition"], timeline: "2-3 Days" },
  ],
  whyChooseUs: [
    "3000+ IEC registrations with 100% success rate",
    "2-3 day turnaround for IEC issuance",
    "AD code linkage with all major banks",
    "Complete export documentation support",
    "Government export scheme benefit guidance",
    "HS code classification for accurate duty calculation",
    "Customs clearance support for imports",
    "Dedicated trade compliance advisor",
    "One-time fee — IEC has lifetime validity",
  ],
  process: [
    { step: "01", title: "Document Collection", desc: "We collect PAN, Aadhaar, business proof, bank details, and address proof." },
    { step: "02", title: "DGFT Application", desc: "File the IEC application on the DGFT portal with all required documents." },
    { step: "03", title: "IEC Issuance", desc: "Receive your IEC code and digital certificate within 2-3 working days." },
    { step: "04", title: "Trade Ready", desc: "AD code linkage, export documentation setup, and scheme benefit guidance." },
  ],
  faqs: [
    { q: "Who needs an IEC code?", a: "Any person or business entity importing or exporting goods/services from India needs an IEC. It's issued by DGFT (Directorate General of Foreign Trade). Exemptions exist for personal imports, government departments, and exports below ₹5 lakhs." },
    { q: "What is the validity of an IEC?", a: "IEC has lifetime validity — no renewal is required. However, you need to update the IEC on the DGFT portal annually between April-June. Failure to update can result in deactivation." },
    { q: "Can I use one IEC for both import and export?", a: "Yes, a single IEC code is used for both importing and exporting. It serves as your unique identification number for all international trade transactions. You can trade in any product category with the same IEC." },
    { q: "What documents are required for IEC?", a: "You need PAN card of the business/applicant, Aadhaar of the applicant, cancelled cheque or bank certificate, passport-size photo, and business address proof. For companies/LLPs, additional documents like incorporation certificate and board resolution are needed." },
    { q: "Can e-commerce sellers get an IEC?", a: "Yes, e-commerce sellers exporting through platforms like Amazon Global, eBay, or Etsy need an IEC. We also help with LUT (Letter of Undertaking) filing for GST-free exports and AD code setup for receiving foreign payments." },
  ],
}

export default function IECCertificationPage() {
  return <ServicePageTemplate data={data} />
}
