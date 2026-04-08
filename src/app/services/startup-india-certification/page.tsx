import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🇮🇳",
  breadcrumbLabel: "Startup India Certification",
  heroTitle: "Get DPIIT Recognition under",
  heroHighlight: "Startup India",
  heroDesc: "Startup India (DPIIT) recognition unlocks tax exemptions, fast-track patents, self-certification compliance, and access to the Seed Fund Scheme. We handle the entire application process.",
  heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "2500+", label: "Startups Recognized" },
    { value: "7-14 Days", label: "Avg Timeline" },
    { value: "96%", label: "Approval Rate" },
    { value: "₹2,999", label: "Starting From" },
  ],
  services: [
    { emoji: "📋", title: "DPIIT Registration", desc: "Complete application for DPIIT (Department for Promotion of Industry & Internal Trade) recognition.", items: ["Startup India Portal Registration", "Entity Verification & Validation", "Innovation Description Drafting", "Recognition Certificate Issuance"], timeline: "7-10 Days" },
    { emoji: "📄", title: "Innovation Certificate", desc: "Prepare the innovation narrative required by DPIIT to demonstrate your startup's uniqueness.", items: ["Innovation Statement Drafting", "Technology Differentiation Document", "Market Problem-Solution Mapping", "Recommendation Letter Facilitation"], timeline: "3-5 Days" },
    { emoji: "💰", title: "Tax Exemption (80-IAC)", desc: "Apply for 3-year income tax exemption under Section 80-IAC for DPIIT-recognized startups.", items: ["80-IAC Application Filing", "Inter-Ministerial Board Prep", "Financial Statement Review", "Tax Holiday Documentation"], timeline: "30-60 Days" },
    { emoji: "⚡", title: "Fast-Track Patents & IP", desc: "Leverage startup India benefits for expedited patent examination and 80% fee rebate.", items: ["Patent Fast-Track Application", "80% Fee Rebate Processing", "Trademark Expedited Filing", "IP Facilitation Center Access"], timeline: "Varies" },
    { emoji: "🌱", title: "Seed Fund Scheme Access", desc: "Apply for the Startup India Seed Fund Scheme (up to ₹50 lakhs) through DPIIT-recognized incubators.", items: ["Seed Fund Eligibility Check", "Incubator Network Matching", "Business Plan & Pitch Prep", "Application Support & Follow-up"], timeline: "30-90 Days" },
    { emoji: "📊", title: "Self-Certification Compliance", desc: "Use startup India's self-certification facility for 9 environmental and labor laws.", items: ["Labour Law Self-Certification", "Environmental Law Self-Certification", "Compliance Calendar Setup", "Annual Return Filing Guidance"], timeline: "5-7 Days" },
  ],
  whyChooseUs: [
    "2500+ startups successfully recognized by DPIIT",
    "Innovation statement drafted by sector experts",
    "96% approval rate on first application",
    "80-IAC tax exemption application expertise",
    "Seed Fund Scheme network with 100+ incubators",
    "Fast-track patent filing support included",
    "Self-certification compliance setup for all 9 laws",
    "Post-recognition benefit activation support",
    "Dedicated startup ecosystem advisor for each client",
  ],
  process: [
    { step: "01", title: "Eligibility Check", desc: "We verify your entity type, incorporation date, turnover, and innovation criteria." },
    { step: "02", title: "Application Prep", desc: "Draft innovation statement, collect supporting documents, and prepare the complete application." },
    { step: "03", title: "DPIIT Submission", desc: "File the application on the Startup India portal and handle any queries from DPIIT." },
    { step: "04", title: "Benefit Activation", desc: "Post-recognition, we help activate tax exemptions, seed fund access, and IP benefits." },
  ],
  faqs: [
    { q: "What are the eligibility criteria for Startup India recognition?", a: "Your entity must be: registered as Pvt Ltd, LLP, or Partnership; incorporated within 10 years; annual turnover below ₹100 crore; working towards innovation, development, or improvement of products/services. You should not have been formed by splitting/restructuring an existing business." },
    { q: "What are the key benefits of DPIIT recognition?", a: "Benefits include: 3-year income tax exemption (80-IAC), angel tax exemption, 80% rebate on patent fees, fast-track patent examination, self-certification for 9 labor/environmental laws, easier public procurement compliance, and access to the Seed Fund Scheme." },
    { q: "How long does DPIIT recognition take?", a: "The online application typically gets approved within 7-14 working days. If additional information is requested, it may take 2-3 more weeks. Our prepared applications have a 96% first-attempt approval rate." },
    { q: "Is Startup India recognition the same as MSME registration?", a: "No, they are different. MSME/Udyam registration is based on investment and turnover, while Startup India/DPIIT recognition is based on innovation criteria. A startup can (and should) have both for maximum benefits." },
    { q: "Can existing businesses get Startup India recognition?", a: "Yes, if your business was incorporated within the last 10 years, has turnover below ₹100 crore, and works on innovation. Service businesses, tech companies, and even manufacturing units can qualify if the innovation criteria is met." },
  ],
}

export default function StartupIndiaCertificationPage() {
  return <ServicePageTemplate data={data} />
}
