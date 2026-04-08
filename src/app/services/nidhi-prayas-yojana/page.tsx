import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "🔬",
  breadcrumbLabel: "Nidhi Prayas Yojana",
  heroTitle: "Prototype & Innovation Funding via",
  heroHighlight: "Nidhi Prayas Yojana",
  heroDesc: "DST's NIDHI-PRAYAS (Promoting and Accelerating Young and Aspiring Innovators & Startups) provides up to ₹10 lakhs for prototype development and proof of concept. Ideal for early-stage innovators and student entrepreneurs.",
  heroImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "200+", label: "Innovators Supported" },
    { value: "₹10L", label: "Max Grant" },
    { value: "70%", label: "Success Rate" },
    { value: "6-12 Months", label: "Program Duration" },
  ],
  services: [
    { emoji: "🔍", title: "Eligibility Assessment", desc: "Evaluate your innovation idea against Nidhi Prayas criteria and identify the right PRAYAS center.", items: ["Innovation Idea Evaluation", "TRL Level Assessment", "PRAYAS Center Matching", "Application Timeline Planning"], timeline: "3-5 Days" },
    { emoji: "📋", title: "Application Preparation", desc: "Comprehensive application with innovation narrative, technical plan, and budget justification.", items: ["Innovation Description Drafting", "Technical Development Plan", "Budget & Milestone Planning", "Supporting Evidence Compilation"], timeline: "7-10 Days" },
    { emoji: "🏗️", title: "Prototype Development Support", desc: "Technical and strategic support during the prototype development and testing phase.", items: ["Design & Development Guidance", "Testing Facility Access", "Fab Lab & Makerspace Linkage", "Technical Mentor Connection"], timeline: "3-6 Months" },
    { emoji: "📊", title: "Proof of Concept Documentation", desc: "Prepare comprehensive PoC documentation for evaluation and next-stage funding.", items: ["Test Results Documentation", "Technical Feasibility Report", "Market Validation Evidence", "IP Filing Guidance"], timeline: "1-2 Months" },
    { emoji: "🏛️", title: "PRAYAS Center Coordination", desc: "Facilitate your engagement with DST-approved PRAYAS centers across India.", items: ["Center Selection Strategy", "Application Submission Support", "Interview & Review Prep", "Incubation Facility Access"], timeline: "15-30 Days" },
    { emoji: "🚀", title: "Next-Stage Funding Linkage", desc: "After PRAYAS, connect to larger funding through NIDHI-SSS, BIRAC, or private investors.", items: ["NIDHI-SSS Application Support", "BIRAC BIG Grant Linkage", "Angel Investor Introductions", "Startup India Seed Fund Bridge"], timeline: "Post-PRAYAS" },
  ],
  whyChooseUs: [
    "200+ innovators supported through PRAYAS applications",
    "Network across 15+ PRAYAS centers pan-India",
    "70% application success rate",
    "Complete prototype development advisory",
    "Technical mentor network for domain expertise",
    "IP filing guidance during prototype stage",
    "Post-PRAYAS funding bridge to larger schemes",
    "Fab lab and testing facility partnerships",
    "Dedicated innovation advisor for each applicant",
  ],
  process: [
    { step: "01", title: "Idea Assessment", desc: "We evaluate your innovation, TRL level, and match with the appropriate PRAYAS center." },
    { step: "02", title: "Application Filing", desc: "Prepare and submit the complete application with technical plan and budget to the PRAYAS center." },
    { step: "03", title: "Prototype Phase", desc: "Support during the 6-12 month prototype development with mentorship and facility access." },
    { step: "04", title: "Evaluation & Next Steps", desc: "PoC documentation, evaluation support, and linkage to next-stage funding opportunities." },
  ],
  faqs: [
    { q: "What is Nidhi Prayas Yojana?", a: "NIDHI-PRAYAS is a scheme by the Department of Science & Technology (DST) under its National Initiative for Developing and Harnessing Innovations (NIDHI) umbrella. It provides up to ₹10 lakhs grant support for prototype development and proof of concept to early-stage innovators." },
    { q: "Who is eligible for Nidhi Prayas?", a: "Indian citizens with an innovative product/process idea at the early stage (TRL 1-4) can apply. Students, researchers, professionals, and aspiring entrepreneurs are eligible. You apply through a DST-approved PRAYAS center (typically hosted at Technology Business Incubators)." },
    { q: "What expenses does the ₹10 lakh grant cover?", a: "The grant covers: raw materials, consumables, equipment hiring, testing charges, prototype fabrication, travel for testing/validation, and a monthly stipend for the innovator. It does not cover capital equipment purchase or salaries of hired staff." },
    { q: "How long is the PRAYAS program?", a: "The PRAYAS program typically runs for 6-12 months. During this time, innovators work at or with the PRAYAS center to develop their prototype, with access to mentorship, fabrication facilities, and technical guidance." },
    { q: "What happens after PRAYAS?", a: "Successful PRAYAS graduates can apply for NIDHI-SSS (Seed Support System, up to ₹1 Cr), NIDHI-EIR (Entrepreneur in Residence), BIRAC BIG grants (up to ₹50L), or seek private investment. We help plan this transition to larger funding." },
  ],
}

export default function NidhiPrayasYojanaPage() {
  return <ServicePageTemplate data={data} />
}
