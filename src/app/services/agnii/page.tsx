import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🚀",
  breadcrumbLabel: "AGNIi",
  heroTitle: "Accelerate Innovation with",
  heroHighlight: "AGNIi Registration",
  heroDesc: "AGNIi (Accelerating Growth of New India's Innovations) connects Indian innovators with markets and funding. We help you get listed on the AGNIi platform to access government procurement, industry partnerships, and commercialization support.",
  heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "500+", label: "Innovators Registered" },
    { value: "15-20 Days", label: "Avg Timeline" },
    { value: "95%", label: "Approval Rate" },
    { value: "₹50Cr+", label: "Tech Deployed" },
  ],
  services: [
    { emoji: "📋", title: "AGNIi Platform Registration", desc: "End-to-end assistance to get your innovation listed on the AGNIi portal managed by Invest India.", items: ["Profile Creation & Documentation", "Innovation Description & Impact Mapping", "Technology Readiness Level (TRL) Assessment", "Platform Submission & Follow-up"], timeline: "10-15 Days" },
    { emoji: "🔬", title: "Innovation Documentation", desc: "Comprehensive documentation of your technology or product for AGNIi evaluation.", items: ["Technical Specification Drafting", "Use-Case & Market Fit Analysis", "IP & Patent Status Documentation", "Prototype & Pilot Evidence Compilation"], timeline: "7-10 Days" },
    { emoji: "🏛️", title: "Government Procurement Access", desc: "Leverage AGNIi listing to access government procurement opportunities across ministries.", items: ["GeM Marketplace Integration", "Ministry-Level Opportunity Mapping", "Public Procurement Policy Compliance", "Bid & Tender Assistance"], timeline: "Ongoing" },
    { emoji: "🤝", title: "Industry Partnership Matching", desc: "Connect with corporates and PSUs looking to adopt innovative Indian technologies.", items: ["Corporate Partnership Facilitation", "PSU Technology Adoption Support", "Pilot Project Coordination", "Scale-Up Strategy Planning"], timeline: "15-30 Days" },
    { emoji: "💰", title: "Funding & Grant Linkage", desc: "Link your AGNIi-listed innovation to relevant government grants and funding schemes.", items: ["BIRAC & DST Grant Mapping", "Startup India Seed Fund Access", "State Innovation Fund Linkage", "CSR Funding Opportunity Matching"], timeline: "30-45 Days" },
    { emoji: "📈", title: "Commercialization Support", desc: "Go-to-market strategy and support to commercialize your innovation post-AGNIi listing.", items: ["Market Entry Strategy", "Pricing & Revenue Model Design", "Channel Partner Identification", "Brand & Marketing Collateral"], timeline: "15-30 Days" },
  ],
  whyChooseUs: [
    "Official knowledge partner for AGNIi registration process",
    "TRL assessment expertise for technology evaluation",
    "Direct linkage to government procurement channels",
    "End-to-end documentation and filing support",
    "Post-listing support for industry partnerships",
    "Funding and grant mapping for listed innovations",
    "Experienced team with 500+ successful registrations",
    "Dedicated relationship manager for each innovator",
    "Integration support with GeM and other platforms",
  ],
  process: [
    { step: "01", title: "Innovation Assessment", desc: "We evaluate your technology, its TRL level, and market readiness for AGNIi listing." },
    { step: "02", title: "Documentation Prep", desc: "Our team prepares comprehensive technical and business documentation." },
    { step: "03", title: "Platform Submission", desc: "We submit your profile on the AGNIi platform and handle all queries." },
    { step: "04", title: "Post-Listing Support", desc: "Ongoing assistance for procurement access, partnerships, and funding linkage." },
  ],
  faqs: [
    { q: "What is AGNIi and who can register?", a: "AGNIi (Accelerating Growth of New India's Innovations) is a national initiative by the Office of the Principal Scientific Adviser, managed by Invest India. Indian startups, MSMEs, R&D labs, and innovators with technology solutions at TRL 5+ can register." },
    { q: "What are the benefits of AGNIi registration?", a: "AGNIi-listed innovators get access to government procurement opportunities, industry partnerships with PSUs and corporates, visibility at national/international events, mentorship, and linkage to funding schemes like BIRAC, DST, and Startup India." },
    { q: "How long does AGNIi registration take?", a: "The entire process typically takes 15-20 days including documentation preparation, platform submission, and review. TRL assessment may add 5-7 days for complex technologies." },
    { q: "Is there any fee for AGNIi registration?", a: "AGNIi registration on the platform itself is free. Our service fee covers end-to-end documentation, TRL assessment, filing, and post-listing support to maximize the value you get from the listing." },
    { q: "Can AGNIi help with exports?", a: "Yes, AGNIi actively promotes Indian innovations for global deployment. Listed technologies get visibility through diplomatic missions, international tech summits, and bilateral innovation agreements." },
  ],
}

export default function AGNIiPage() {
  return <ServicePageTemplate data={data} />
}
