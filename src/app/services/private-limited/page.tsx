import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🏛️",
  breadcrumbLabel: "Private Limited Company",
  heroTitle: "Register Your",
  heroHighlight: "Private Limited Company",
  heroDesc: "The most trusted business structure for funded startups and growing businesses in India. Complete incorporation with MCA filing, PAN, TAN, GST, and post-registration compliance support.",
  heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "3000+", label: "Companies Registered" },
    { value: "7-10 Days", label: "Avg Timeline" },
    { value: "99%", label: "Success Rate" },
    { value: "₹5,999", label: "Starting From" },
  ],
  services: [
    { emoji: "📝", title: "Name Approval & Reservation", desc: "Strategic name search and RUN (Reserve Unique Name) application with MCA for guaranteed approval.", items: ["Name Availability Search", "RUN Application Filing", "Alternative Name Strategy", "Trademark Conflict Check"], timeline: "1-2 Days" },
    { emoji: "🏛️", title: "Company Incorporation", desc: "Complete SPICe+ form filing with MCA for company incorporation including all statutory registrations.", items: ["SPICe+ Form Filing", "DIN & DSC for Directors", "MOA & AOA Drafting", "Incorporation Certificate"], timeline: "5-7 Days" },
    { emoji: "📄", title: "PAN, TAN & Bank Account", desc: "Post-incorporation PAN/TAN application and assistance with opening your company bank account.", items: ["PAN Application via SPICe+", "TAN Application & Issuance", "Bank Account Opening Assistance", "Authorized Signatory Documentation"], timeline: "3-5 Days" },
    { emoji: "💼", title: "GST Registration", desc: "Mandatory GST registration for your newly incorporated company with input tax credit setup.", items: ["GSTIN Application & Issuance", "HSN/SAC Code Mapping", "Input Tax Credit Setup", "Return Filing Calendar"], timeline: "3-7 Days" },
    { emoji: "📊", title: "Statutory Compliance Setup", desc: "Set up all post-incorporation compliance requirements to keep your company in good standing.", items: ["Board Meeting Calendar", "Statutory Register Maintenance", "Auditor Appointment (if required)", "ROC Annual Filing Schedule"], timeline: "7-10 Days" },
    { emoji: "🚀", title: "Startup India & DPIIT", desc: "Get your Pvt Ltd recognized under Startup India for tax benefits and government scheme access.", items: ["DPIIT Recognition Filing", "Innovation Certificate Preparation", "80-IAC Tax Benefit Application", "Seed Fund Eligibility Check"], timeline: "7-14 Days" },
  ],
  whyChooseUs: [
    "3000+ successful incorporations with 99% approval rate",
    "DSC & DIN processing included at no extra cost",
    "MOA/AOA drafted by experienced company law professionals",
    "PAN & TAN applications processed simultaneously",
    "Free bank account opening assistance with partner banks",
    "Complete post-registration compliance calendar",
    "Name approval strategy with alternative options",
    "All MCA portal filings managed end to end",
    "Ongoing compliance support for the first year",
  ],
  process: [
    { step: "01", title: "Consultation", desc: "We help finalize company name, authorized capital, director details, and registered office address." },
    { step: "02", title: "Documentation", desc: "Our team prepares DSC, DIN applications, MOA/AOA, and all MCA-required documents." },
    { step: "03", title: "Filing & Incorporation", desc: "We file SPICe+ with MCA, handle queries, and secure your incorporation certificate." },
    { step: "04", title: "Handover & Support", desc: "Receive all documents, PAN, TAN, compliance calendar, and ongoing support." },
  ],
  faqs: [
    { q: "What is the minimum requirement to register a Pvt Ltd company?", a: "You need minimum 2 directors (at least one Indian resident), 2 shareholders (can be same as directors), a registered office address in India, and minimum ₹1 lakh authorized share capital (no minimum paid-up capital required)." },
    { q: "How long does Pvt Ltd registration take?", a: "With SPICe+ form, the entire process takes 7-10 working days — including DSC/DIN processing, name approval, and incorporation certificate issuance. We fast-track through our established MCA channels." },
    { q: "Can NRIs or foreigners be directors?", a: "Yes, NRIs and foreign nationals can be directors and shareholders. However, at least one director must be an Indian resident (stayed in India for 182+ days in the previous calendar year). Foreign directors need a valid passport and address proof." },
    { q: "What is the difference between Pvt Ltd and LLP?", a: "Pvt Ltd allows equity funding (VC/angel investment), has better credibility with banks and clients, and enables ESOPs. LLP has lower compliance costs, no minimum capital requirement, and is ideal for professional service firms. We recommend Pvt Ltd for startups seeking funding." },
    { q: "What are the annual compliance requirements?", a: "Annual requirements include: ROC filing (MGT-7 & AOC-4), Income Tax Return, GST returns (monthly/quarterly), board meetings (minimum 4/year), AGM, statutory audit (if applicable), and DIR-3 KYC for directors. We provide a complete compliance calendar." },
  ],
}

export default function PrivateLimitedPage() {
  return <ServicePageTemplate data={data} />
}
