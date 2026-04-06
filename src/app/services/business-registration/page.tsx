import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏛️",
  breadcrumbLabel: "Business Registration",
  heroTitle: "Launch Your Business with",
  heroHighlight: "Complete Legal Compliance",
  heroDesc: "End-to-end company registration services — from entity selection and incorporation to PAN, TAN, GST, and post-registration compliance.",
  heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "5000+", label: "Businesses Registered" },
    { value: "7-10 Days", label: "Avg Timeline" },
    { value: "99%", label: "Success Rate" },
    { value: "50+", label: "Entity Types" },
  ],
  services: [
    { emoji: "🏛️", title: "Private Limited Company", desc: "The most popular structure for funded startups and growing businesses.", items: ["DIN & DSC Processing", "Name Approval & MOA/AOA Drafting", "PAN, TAN & Bank Account Setup", "Post-Incorporation Compliance"], timeline: "7-10 Days" },
    { emoji: "🤝", title: "LLP Registration", desc: "Limited liability with partnership flexibility — ideal for professional firms.", items: ["DPIN & DSC for All Partners", "LLP Agreement Drafting", "Name Reservation & Filing", "ROC Compliance Setup"], timeline: "10-15 Days" },
    { emoji: "👤", title: "OPC Registration", desc: "One Person Company for solo entrepreneurs wanting limited liability protection.", items: ["Single Director Incorporation", "Nominee Director Appointment", "Complete Company Formation", "Annual Compliance Calendar"], timeline: "7-10 Days" },
    { emoji: "📋", title: "MSME Udyam Registration", desc: "Get your Udyam certificate and unlock government scheme benefits instantly.", items: ["Udyam Portal Registration", "MSME Certificate Issuance", "Scheme Eligibility Mapping", "Annual Update & Maintenance"], timeline: "1-2 Days" },
    { emoji: "💼", title: "GST Registration", desc: "Mandatory for businesses crossing ₹40L turnover — we handle the entire process.", items: ["GSTIN Application & Issuance", "Input Tax Credit Setup", "Return Filing Guidance", "Compliance Calendar Setup"], timeline: "3-7 Days" },
    { emoji: "🚀", title: "Startup India (DPIIT)", desc: "Get recognized by DPIIT and access tax benefits, fast-track patents, and more.", items: ["DPIIT Portal Filing", "Innovation Certificate Preparation", "Tax Benefit Application (80IAC)", "Government Scheme Access Setup"], timeline: "7-14 Days" },
  ],
  whyChooseUs: [
    "DSC & DIN processing included free of charge",
    "Dedicated compliance manager assigned to every client",
    "MOA/AOA drafted by experienced legal professionals",
    "PAN & TAN application handled simultaneously",
    "Bank account opening assistance with partner banks",
    "Post-registration compliance calendar provided",
    "Name approval strategy with alternative options",
    "All portal filings managed end to end",
    "Ongoing compliance support after registration",
  ],
  process: [
    { step: "01", title: "Consultation", desc: "We help you choose the right business structure based on your goals and requirements." },
    { step: "02", title: "Documentation", desc: "Our team collects and prepares all required documents, DSC, and DIN applications." },
    { step: "03", title: "Filing & Registration", desc: "We file with MCA/ROC, handle objections, and secure your incorporation certificate." },
    { step: "04", title: "Handover & Support", desc: "You receive all documents, compliance calendar, and ongoing registration support." },
  ],
  faqs: [
    { q: "Which business structure should I choose?", a: "It depends on your goals — Pvt Ltd is best for funded startups, LLP suits professional firms and partners, OPC works for solo entrepreneurs, and Proprietorship is simplest for small businesses. Our free consultation helps you decide." },
    { q: "How fast can I get my company registered?", a: "Pvt Ltd and OPC typically take 7-10 days, LLP takes 10-15 days, MSME Udyam is done in 1-2 days, and GST registration takes 3-7 days. We fast-track every application through our established channels." },
    { q: "Is there a minimum capital requirement?", a: "No, there is no minimum paid-up capital requirement for Pvt Ltd, LLP, or OPC registration in India. You can start with as low as ₹1 authorized capital, though we recommend ₹1L for credibility." },
    { q: "Do I need a physical office to register a company?", a: "You need a registered address, but it can be your home address, a co-working space, or a virtual office. We can help arrange a registered address if needed." },
    { q: "What are the ongoing compliance requirements?", a: "After registration, you need annual ROC filings (MGT-7, AOC-4), board meeting minutes, GST returns, income tax filing, and statutory audit (if applicable). We provide a complete compliance calendar and ongoing support." },
  ],
}

export default function BusinessRegistrationPage() {
  return <ServicePageTemplate data={data} />
}
