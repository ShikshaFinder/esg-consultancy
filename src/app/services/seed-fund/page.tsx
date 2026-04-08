import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🌱",
  breadcrumbLabel: "Seed Fund",
  heroTitle: "Kickstart Your Startup with",
  heroHighlight: "Seed Fund Scheme",
  heroDesc: "The Startup India Seed Fund Scheme (SISFS) provides up to ₹50 lakhs to DPIIT-recognized startups for proof of concept, prototype development, product trials, and market entry. We connect you with the right incubators.",
  heroImage: "https://images.unsplash.com/photo-1553729459-uj8bt8093d-fix?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "₹12Cr+", label: "Seed Funding Facilitated" },
    { value: "400+", label: "Applications Filed" },
    { value: "65%", label: "Approval Rate" },
    { value: "₹50L", label: "Max Funding" },
  ],
  services: [
    { emoji: "🔍", title: "Eligibility Assessment", desc: "Verify your startup's eligibility for the SISFS scheme and identify the right funding track.", items: ["DPIIT Recognition Verification", "Stage Assessment (Ideation/Growth)", "Incubator Eligibility Matching", "Grant vs. Convertible Debenture Track"], timeline: "2-3 Days" },
    { emoji: "📋", title: "DPIIT Recognition Support", desc: "If not yet recognized, we get your startup DPIIT-recognized — a prerequisite for seed funding.", items: ["Startup India Portal Filing", "Innovation Statement Drafting", "DPIIT Certificate Issuance", "Seed Fund Portal Access"], timeline: "7-14 Days" },
    { emoji: "📊", title: "Business Plan & Pitch Deck", desc: "Craft a compelling business plan and pitch deck tailored for the seed fund committee.", items: ["Market Opportunity Analysis", "Financial Model & Projections", "Milestone-Based Fund Utilization", "Investor-Ready Pitch Deck"], timeline: "5-10 Days" },
    { emoji: "🏛️", title: "Incubator Network Access", desc: "Connect with SISFS-approved incubators who can nominate you for seed funding.", items: ["100+ Approved Incubator Network", "Incubator Application Support", "Selection Committee Prep", "Multi-Incubator Strategy"], timeline: "7-15 Days" },
    { emoji: "📑", title: "Application Filing & Follow-up", desc: "Complete application on the Seed Fund portal with all supporting documents.", items: ["Portal Application Filing", "Document Upload & Verification", "Committee Presentation Prep", "Follow-up & Status Tracking"], timeline: "15-30 Days" },
    { emoji: "💰", title: "Post-Approval Compliance", desc: "Support for fund utilization, milestone reporting, and compliance after seed fund approval.", items: ["Fund Utilization Tracking", "Quarterly Milestone Reports", "Audit & Compliance Documentation", "Next-Round Fundraising Prep"], timeline: "Ongoing" },
  ],
  whyChooseUs: [
    "₹12 crore+ facilitated through seed fund schemes",
    "Network of 100+ SISFS-approved incubators",
    "65% approval rate — well above national average",
    "Complete DPIIT recognition + seed fund application",
    "Committee-tested pitch deck preparation",
    "Milestone-based fund utilization planning",
    "Post-approval compliance and reporting support",
    "Multi-scheme strategy for maximum startup funding",
    "Dedicated startup funding advisor for each client",
  ],
  process: [
    { step: "01", title: "Eligibility Check", desc: "Verify DPIIT recognition, business stage, and match with the right incubator network." },
    { step: "02", title: "Application Prep", desc: "Prepare business plan, pitch deck, financial projections, and milestone plan." },
    { step: "03", title: "Filing & Review", desc: "Submit through an approved incubator, prepare for committee review and presentation." },
    { step: "04", title: "Funding & Compliance", desc: "Receive funds, track utilization, and submit milestone reports as required." },
  ],
  faqs: [
    { q: "What is the Startup India Seed Fund Scheme?", a: "SISFS provides financial assistance to DPIIT-recognized startups for proof of concept, prototype, product testing, and market entry. Startups can receive up to ₹20 lakhs as grant for validation and up to ₹50 lakhs as convertible debentures or debt for commercialization." },
    { q: "What are the eligibility criteria?", a: "Your startup must be: DPIIT-recognized, incorporated not more than 2 years ago at the time of application, not received more than ₹10 lakhs of monetary support under any other central/state scheme, and the idea should be focused on innovation with market fit potential." },
    { q: "How does the seed fund disbursement work?", a: "Funds are disbursed through SISFS-approved incubators. The incubator evaluates and nominates startups. An Expert Advisory Committee reviews nominations. Approved startups receive funds in tranches based on milestones." },
    { q: "Can I apply to multiple incubators?", a: "You can apply through multiple incubators, but funding can be received through only one incubator under SISFS. We help identify the incubator with the best fit for your domain and highest approval probability." },
    { q: "What can the seed fund be used for?", a: "For validation stage (grant up to ₹20L): proof of concept, prototype development, and product trials. For commercialization stage (up to ₹50L as convertible debentures): market launch, customer acquisition, hiring, and scaling operations." },
  ],
}

export default function SeedFundPage() {
  return <ServicePageTemplate data={data} />
}
