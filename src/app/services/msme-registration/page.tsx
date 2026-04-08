import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏭",
  breadcrumbLabel: "MSME Registration",
  heroTitle: "Unlock Government Benefits with",
  heroHighlight: "MSME Registration",
  heroDesc: "MSME registration (Udyam) gives your business access to priority lending, government subsidies, tax benefits, and protection under the MSMED Act. Register in just 1-2 days.",
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "10000+", label: "MSMEs Registered" },
    { value: "1-2 Days", label: "Avg Timeline" },
    { value: "100%", label: "Success Rate" },
    { value: "₹499", label: "Starting From" },
  ],
  services: [
    { emoji: "📋", title: "Udyam Registration", desc: "Online MSME registration on the Udyam portal linked with Aadhaar, PAN, and GST.", items: ["Udyam Portal Application", "Aadhaar & PAN Verification", "Investment & Turnover Declaration", "Udyam Registration Certificate"], timeline: "1-2 Days" },
    { emoji: "📄", title: "Udyam Certificate Update", desc: "Update your existing MSME/Udyam certificate for changes in turnover, investment, or details.", items: ["Turnover & Investment Update", "Business Activity Changes", "Address / Contact Modification", "Re-classification (Micro/Small/Medium)"], timeline: "1-2 Days" },
    { emoji: "💰", title: "MSME Scheme Mapping", desc: "Identify and apply for government schemes available to registered MSMEs.", items: ["CLCSS Subsidy Mapping", "PMEGP Eligibility Check", "ZED Certification Linkage", "State MSME Scheme Access"], timeline: "7-15 Days" },
    { emoji: "🏦", title: "Priority Lending Access", desc: "Leverage MSME status for priority sector lending and collateral-free loan access.", items: ["Bank Loan Priority Processing", "CGTMSE Guarantee Access", "MUDRA Loan Eligibility", "Interest Subsidy Schemes"], timeline: "15-30 Days" },
    { emoji: "📑", title: "Delayed Payment Protection", desc: "Use MSMED Act provisions to recover delayed payments from buyers.", items: ["MSME Samadhan Portal Filing", "Interest on Delayed Payments", "Facilitation Council Support", "Payment Recovery Advisory"], timeline: "As Needed" },
    { emoji: "🔄", title: "MSME to Udyam Migration", desc: "Migrate your old EM-I/EM-II or UAM registration to the new Udyam portal.", items: ["Old MSME Certificate Verification", "Udyam Portal Migration", "Data Reconciliation", "New Certificate Issuance"], timeline: "1-3 Days" },
  ],
  whyChooseUs: [
    "10000+ MSME registrations completed pan-India",
    "Same-day processing for urgent registrations",
    "Government scheme eligibility mapping included",
    "Priority lending facilitation with partner banks",
    "Delayed payment recovery support under MSMED Act",
    "Free annual Udyam certificate update",
    "Complete scheme benefit activation post-registration",
    "Expert team familiar with all state MSME policies",
    "Dedicated relationship manager for ongoing support",
  ],
  process: [
    { step: "01", title: "Quick Assessment", desc: "We verify your business eligibility and classify as Micro, Small, or Medium enterprise." },
    { step: "02", title: "Document Collection", desc: "Collect Aadhaar, PAN, GST details, and business information for Udyam application." },
    { step: "03", title: "Registration Filing", desc: "File on the Udyam portal and secure your MSME registration certificate." },
    { step: "04", title: "Benefit Activation", desc: "Map eligible schemes, facilitate priority lending, and set up delayed payment protection." },
  ],
  faqs: [
    { q: "What is the classification criteria for MSMEs?", a: "As per the revised 2020 criteria: Micro — investment up to ₹1 crore & turnover up to ₹5 crore; Small — investment up to ₹10 crore & turnover up to ₹50 crore; Medium — investment up to ₹50 crore & turnover up to ₹250 crore. Both criteria must be satisfied." },
    { q: "Is MSME registration mandatory?", a: "MSME registration is not legally mandatory, but it's highly recommended as it unlocks priority lending, government subsidies, tax benefits, delayed payment protection under MSMED Act, and eligibility for numerous government schemes." },
    { q: "What documents are needed for Udyam registration?", a: "You need only Aadhaar number and PAN of the business (or proprietor). GST number is optional but recommended. The process is largely Aadhaar-based and auto-validates against government databases." },
    { q: "Can service businesses register as MSME?", a: "Yes, the 2020 revised criteria applies equally to manufacturing and service enterprises. IT companies, consultancies, restaurants, logistics firms — all service businesses can register as MSMEs if they meet the investment and turnover criteria." },
    { q: "What is the validity of Udyam registration?", a: "Udyam registration has lifetime validity — there's no expiry or renewal. However, you should update your certificate annually (or when there are changes in investment/turnover) to ensure correct classification and scheme eligibility." },
  ],
}

export default function MSMERegistrationPage() {
  return <ServicePageTemplate data={data} />
}
