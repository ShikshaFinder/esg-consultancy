"use client"

const ITEMS = [
  "MSME Registered", "Pan India Service", "Expert Consultants",
  "Transparent Process", "500+ Businesses Helped", "4.9★ Google Rating",
  "DPIIT Recognized", "ISO Certified",
]

export default function TrustMarquee() {
  return (
    <div className="relative py-4 bg-[#0a1628] border-y border-white/[0.06] overflow-hidden">
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{ "--duration": "30s" } as React.CSSProperties}
      >
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="mx-6 text-xs text-white/30 flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9CD5FF]/50" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
