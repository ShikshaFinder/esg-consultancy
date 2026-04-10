"use client"

import { Marquee } from "@/components/devComponents/3d-testimonails"

const ITEMS = [
  { icon: "🏛️", text: "MSME Registered" },
  { icon: "🌍", text: "Pan India Service" },
  { icon: "👨‍💼", text: "Expert Consultants" },
  { icon: "✅", text: "Transparent Process" },
  { icon: "🏆", text: "500+ Businesses Helped" },
  { icon: "⭐", text: "4.9★ Google Rating" },
  { icon: "🚀", text: "DPIIT Recognized" },
  { icon: "📜", text: "ISO Certified" },
]

export default function TrustMarquee() {
  return (
    <div className="relative py-3 bg-[#0a1628] border-y border-white/6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0a1628] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0a1628] to-transparent z-10" />
      <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
        {ITEMS.map((item) => (
          <span key={item.text} className="flex items-center gap-2 text-xs text-black/40 whitespace-nowrap group">
            <span className="text-sm group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
            <span className="group-hover:text-black/60 transition-colors duration-200">{item.text}</span>
            <span className="w-1 h-1 rounded-full bg-[#9CD5FF]/30 ml-2" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
