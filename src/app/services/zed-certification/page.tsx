import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "✅",
  breadcrumbLabel: "ZED Certification",
  heroTitle: "Achieve Zero Defect Zero Effect with",
  heroHighlight: "ZED Certification",
  heroDesc: "ZED (Zero Defect Zero Effect) certification by QCI enhances your product quality, reduces waste, and opens doors to government incentives. Get certified under the MSME ZED scheme with up to 80% subsidy.",
  heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "500+", label: "ZED Certifications" },
    { value: "30-60 Days", label: "Avg Timeline" },
    { value: "95%", label: "Success Rate" },
    { value: "80%", label: "Govt Subsidy" },
  ],
  services: [
    { emoji: "📋", title: "ZED Pledge & Bronze", desc: "Start your ZED journey with the online pledge and Bronze level assessment.", items: ["ZED Portal Registration", "Online ZED Pledge", "Bronze Self-Assessment", "Basic Quality Parameters"], timeline: "7-10 Days" },
    { emoji: "🥈", title: "ZED Silver Certification", desc: "Achieve Silver level through desktop assessment covering 20 quality parameters.", items: ["20 Parameter Compliance Prep", "Desktop Assessment Support", "Gap Analysis & Remediation", "Silver Certificate Issuance"], timeline: "15-30 Days" },
    { emoji: "🥇", title: "ZED Gold Certification", desc: "Highest ZED level through onsite assessment verifying quality and sustainability practices.", items: ["50 Parameter Compliance", "Plant-Level Implementation", "Onsite Assessment Preparation", "Gold Certificate Achievement"], timeline: "30-60 Days" },
    { emoji: "💰", title: "ZED Subsidy Processing", desc: "Claim government subsidies of up to 80% on ZED certification and technology upgrade costs.", items: ["Subsidy Application Filing", "Micro Enterprise (80%) Claim", "Small Enterprise (60%) Claim", "Medium Enterprise (50%) Claim"], timeline: "30-60 Days" },
    { emoji: "📊", title: "Quality System Implementation", desc: "Hands-on support to implement quality management systems aligned with ZED parameters.", items: ["5S Implementation", "Quality Policy Development", "Process Documentation", "Environmental Compliance Setup"], timeline: "15-30 Days" },
    { emoji: "🔄", title: "ZED Renewal & Upgrade", desc: "Renew your existing ZED certification or upgrade from Bronze to Silver/Gold.", items: ["Certificate Validity Extension", "Level Upgrade Assessment Prep", "Continuous Improvement Tracking", "Annual Compliance Review"], timeline: "15-30 Days" },
  ],
  whyChooseUs: [
    "500+ ZED certifications across manufacturing & services",
    "Maximum subsidy claim success (80% for Micro MSMEs)",
    "Experienced QCI-empanelled assessment support",
    "Complete 50-parameter compliance preparation",
    "5S and quality system implementation on-ground",
    "Environmental and sustainability compliance integrated",
    "Technology upgrade subsidy linkage under ZED",
    "Post-certification continuous improvement support",
    "Industry-specific ZED implementation playbooks",
  ],
  process: [
    { step: "01", title: "ZED Pledge", desc: "Register on the ZED portal and take the online pledge to begin your certification journey." },
    { step: "02", title: "Gap Analysis", desc: "We assess your current quality practices against ZED parameters and create an action plan." },
    { step: "03", title: "Implementation", desc: "Implement quality systems, documentation, and process improvements for your target ZED level." },
    { step: "04", title: "Assessment & Certification", desc: "Support during desktop/onsite assessment and subsidy claim filing post-certification." },
  ],
  faqs: [
    { q: "What is ZED certification?", a: "ZED (Zero Defect Zero Effect) is a quality certification scheme by the Quality Council of India (QCI) under the Ministry of MSME. It promotes quality manufacturing with zero defects in products and zero negative impact on the environment, across Bronze, Silver, and Gold levels." },
    { q: "What subsidy is available for ZED certification?", a: "Under the MSME ZED scheme: Micro enterprises get 80% subsidy, Small enterprises get 60%, and Medium enterprises get 50% on certification costs. Additional subsidies are available for technology upgrade, testing equipment, and consultancy charges." },
    { q: "Who is eligible for ZED certification?", a: "Any MSME registered on the Udyam portal (manufacturing or service) can apply for ZED certification. There's no minimum turnover or employee requirement. Even micro enterprises with 1-2 employees can get certified." },
    { q: "What are the ZED assessment parameters?", a: "ZED assessment covers parameters like: leadership commitment, quality policy, customer focus, 5S implementation, environmental management, health & safety, process control, corrective action, and continuous improvement — totaling up to 50 parameters for Gold level." },
    { q: "How long does ZED certification remain valid?", a: "ZED certificates are valid for 3 years. You can upgrade your level (Bronze to Silver to Gold) at any time. Re-assessment is required before expiry for renewal. The subsidy claim must be filed within the specified timeline." },
  ],
}

export default function ZEDCertificationPage() {
  return <ServicePageTemplate data={data} />
}
