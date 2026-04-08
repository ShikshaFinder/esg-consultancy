import ServicePageTemplate, { type ServicePageData } from "@/components/sections/service-page-template"

const data: ServicePageData = {
  breadcrumbEmoji: "📜",
  breadcrumbLabel: "Udyam Certification",
  heroTitle: "Get Your Official",
  heroHighlight: "Udyam Certificate",
  heroDesc: "Udyam Registration is the government's new, simplified MSME registration system replacing UAM. Get your permanent Udyam Registration Number (URN) and unlock benefits across 200+ government schemes.",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  heroStats: [
    { value: "8000+", label: "Udyam Registrations" },
    { value: "1-2 Days", label: "Avg Timeline" },
    { value: "100%", label: "Success Rate" },
    { value: "Free*", label: "Govt Fee" },
  ],
  services: [
    { emoji: "📋", title: "New Udyam Registration", desc: "Fresh Udyam registration for businesses not previously registered under any MSME scheme.", items: ["Aadhaar-Based Registration", "PAN & GST Auto-Validation", "Micro/Small/Medium Classification", "Permanent URN Issuance"], timeline: "1-2 Days" },
    { emoji: "🔄", title: "UAM to Udyam Migration", desc: "Migrate your old UAM (Udyog Aadhaar Memorandum) or EM-I/EM-II to the Udyam portal.", items: ["Old Registration Verification", "Data Migration & Validation", "Re-classification if Required", "New Udyam Certificate Issuance"], timeline: "1-3 Days" },
    { emoji: "📊", title: "Udyam Certificate Update", desc: "Update your Udyam registration for changes in investment, turnover, or business details.", items: ["Annual Turnover Update", "Investment Figure Revision", "NIC Code / Activity Change", "Factory / Office Address Update"], timeline: "1-2 Days" },
    { emoji: "💼", title: "Multi-Unit Registration", desc: "Register multiple business units or manufacturing plants under a single Udyam number.", items: ["Multi-Plant Registration", "Unit-Wise NIC Code Mapping", "Combined Investment Declaration", "Consolidated Certificate"], timeline: "2-5 Days" },
    { emoji: "💰", title: "Scheme Benefit Activation", desc: "Post-registration support to activate benefits under various government schemes.", items: ["CLCSS Technology Upgrade Subsidy", "Priority Lending Facilitation", "Government Tender Preference", "GeM Registration Linkage"], timeline: "7-30 Days" },
    { emoji: "📑", title: "MSME Databank Registration", desc: "Register on the MSME Databank for enhanced visibility and scheme notifications.", items: ["MSME Databank Portal Filing", "Business Profile Optimization", "Scheme Notification Setup", "Vendor Development Access"], timeline: "1-2 Days" },
  ],
  whyChooseUs: [
    "8000+ Udyam registrations processed pan-India",
    "Same-day registration for urgent requirements",
    "Complete UAM to Udyam migration support",
    "Multi-unit registration expertise",
    "Government scheme benefit activation included",
    "Annual update and maintenance support",
    "MSME Databank registration included free",
    "Priority lending facilitation with partner banks",
    "Dedicated MSME advisor for ongoing support",
  ],
  process: [
    { step: "01", title: "Verification", desc: "We verify your Aadhaar, PAN, and GST details for Udyam portal compatibility." },
    { step: "02", title: "Classification", desc: "Determine your MSME category (Micro/Small/Medium) based on investment and turnover." },
    { step: "03", title: "Registration", desc: "File on the Udyam portal and secure your permanent URN and digital certificate." },
    { step: "04", title: "Benefit Linkage", desc: "Activate scheme benefits, priority lending access, and government procurement eligibility." },
  ],
  faqs: [
    { q: "What is the difference between Udyam and UAM?", a: "Udyam is the new MSME registration system (launched July 2020) replacing UAM (Udyog Aadhaar Memorandum). Key differences: Udyam is Aadhaar-based with auto-validation, uses both investment and turnover for classification, and issues a permanent URN. All old UAMs should be migrated to Udyam." },
    { q: "Is there any government fee for Udyam registration?", a: "No, the government does not charge any fee for Udyam registration. Our service fee covers end-to-end assistance including eligibility assessment, application filing, certificate download, and post-registration scheme benefit guidance." },
    { q: "Can I register on Udyam without GST?", a: "Yes, GST is optional for Udyam registration. Businesses below the GST threshold or those not yet registered for GST can still get Udyam registration using PAN and Aadhaar. However, having GST improves your access to certain benefits." },
    { q: "What is the URN (Udyam Registration Number)?", a: "URN is a permanent, unique identification number assigned to your business upon Udyam registration. It follows the format UDYAM-XX-00-0000000 (XX = state code). Unlike UAM, URN never expires and serves as your permanent MSME identity." },
    { q: "Can one person have multiple Udyam registrations?", a: "One person can register multiple businesses/units, but ideally all units of a single enterprise should be under one Udyam registration. Separate Udyam numbers can be obtained for genuinely separate business entities." },
  ],
}

export default function UdyamCertificationPage() {
  return <ServicePageTemplate data={data} />
}
