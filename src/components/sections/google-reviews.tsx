"use client"
import { motion, type Variants, useInView } from "framer-motion"
import { Star, ExternalLink, MapPin, Shield, Quote } from "lucide-react"
import { useRef } from "react"
import { Marquee } from "@/components/devComponents/3d-testimonails"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

const reviews = [
  { name: "Vikram Mehta", time: "2 weeks ago", stars: 5, text: "Exceptional service! Got my MSME registration and MUDRA loan processed within 15 days. The team was extremely professional and kept me updated at every step. Highly recommended for any business owner.", location: "Ahmedabad, Gujarat", verified: true },
  { name: "Sunita Rawat", time: "1 month ago", stars: 5, text: "Best consultancy for government schemes. They helped me understand my eligibility for Stand-Up India and processed everything seamlessly. Their knowledge is unmatched.", location: "Mumbai, Maharashtra", verified: true },
  { name: "Karan Joshi", time: "3 weeks ago", stars: 5, text: "I approached several consultancies before finding Grow Bridge. They are the only ones who genuinely understand the documentation maze of PMEGP. Got approved on the first attempt.", location: "Surat, Gujarat", verified: true },
  { name: "Deepa Nair", time: "1 month ago", stars: 5, text: "Professional, transparent, and result-oriented. They handled my Startup India registration and DPIIT certificate. The digital marketing package they offer is also top-notch.", location: "Bangalore, Karnataka", verified: true },
  { name: "Manish Agarwal", time: "2 months ago", stars: 4, text: "Very knowledgeable team. They guided me through the entire CGTMSE process and even helped with my company registration. A one-stop solution for all business needs.", location: "Jaipur, Rajasthan", verified: true },
]

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function GoogleReviewsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  const avgRating = (reviews.reduce((a, r) => a + r.stars, 0) / reviews.length).toFixed(1)

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#F7F8F0] relative overflow-hidden">
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E")` }}
      />

      <motion.div className="max-w-7xl mx-auto relative z-10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-3">Verified Reviews</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black leading-tight">
              What Our Clients Say on{" "}
              <span className="inline-flex items-center gap-2"><GoogleLogo size={32} /> Google</span>
            </motion.h2>
          </div>

          {/* Aggregate */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 bg-white rounded-2xl border border-[#355872]/10 p-5 shadow-sm">
            <div className="text-center">
              <p className="text-4xl font-black text-black">{avgRating}</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(Number(avgRating)) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-[#355872]/10" />
            <div>
              <p className="text-lg font-bold text-black">{reviews.length * 43}+</p>
              <p className="text-xs text-black/60">Google Reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Review cards with Marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#F7F8F0] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#F7F8F0] to-transparent z-10" />
          <Marquee pauseOnHover className="[--duration:45s] [--gap:1.25rem]">
            {reviews.map((r, i) => (
              <div key={`${r.name}-${i}`}
                className="rounded-2xl bg-white border border-[#355872]/[0.08] p-6 flex flex-col gap-4 group hover:border-[#355872]/20 hover:shadow-lg transition-all duration-300 min-w-[320px] max-w-[360px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-3.5 h-3.5 ${j < r.stars ? "text-amber-400 fill-amber-400" : "text-gray-200"}`} />
                    ))}
                  </div>
                  <GoogleLogo size={16} />
                </div>

                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 text-black/30" />
                  <p className="text-black/70 text-sm leading-relaxed pl-5 line-clamp-4">{r.text}</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#355872]/[0.06] mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#355872] to-[#7AAACE] flex items-center justify-center text-black font-bold text-sm shrink-0">
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-black font-semibold text-sm truncate">{r.name}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-black/50">
                      <MapPin className="w-3 h-3" />
                      <span>{r.location}</span>
                      <span>·</span>
                      <span>{r.time}</span>
                    </div>
                  </div>
                  {r.verified && (
                    <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full shrink-0">
                      <Shield className="w-3 h-3" /> Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-10 text-center">
          <a
            href="https://g.page/growbridge/review" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black transition-colors"
          >
            See all reviews on Google <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
