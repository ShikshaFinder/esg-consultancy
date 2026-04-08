"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const googleMapsLink = "https://maps.app.goo.gl/q8kKzNMVwuFQAUAC8"

/* ─── animation variants ─── */
const blurFade: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  show: (d: number = 0) => ({
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─── Google Icon ─── */
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

/* ─── Stars ─── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

/* ─── Review Data ─── */
const reviews = [
  {
    id: 1,
    name: "RAGHU PATEL",
    business: "",
    initials: "RP",
    text: "Amazing guys, Quick work, not a second wasted, was very satisfied with the pace and clarity they work with.",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Raj Modhavadiya",
    business: "",
    initials: "RM",
    text: "I had a great experience working with GrowBridge. They were very patient and cooperative, even when I requested multiple edits. Their team made sure every detail was correct and presented in the right way. The final pitch deck looked clean, attractive, and business-ready.",
    date: "2 months ago",
  },
  {
    id: 3,
    name: "Vhora Juned",
    business: "Filter Manufacturing Unit",
    initials: "VJ",
    text: "We are a filter manufacturing unit, and we recently had the pleasure of working with GrowBridge on a project report. The approach was professional and efficient, gathering crisp, relevant information and transforming it into a comprehensive and well-structured project report.",
    date: "5 months ago",
  },
  {
    id: 4,
    name: "Isha Pattani",
    business: "",
    initials: "IP",
    text: "I had a wonderful experience working with GrowBridge. I would like to express my sincere gratitude to the entire team for their guidance and support throughout the Universal Grant program process. Their professionalism and in-depth knowledge made the entire process smooth and efficient.",
    date: "5 months ago",
  },
  {
    id: 5,
    name: "Ishan Primehub",
    business: "Private Limited Company",
    initials: "IP",
    text: "We received seamless service and excellent support from their team for getting ISO Certificate of our private limited company. We really appreciate and will definitely recommend to friends.",
    date: "8 months ago",
  },
]

/* ─── helpers ─── */
function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

type Position = "center" | "left" | "right" | "hidden"

/* ─── ReviewCard ─── */
function ReviewCard({ review, position, onClick }: {
  review: typeof reviews[0]
  position: Position
  onClick?: () => void
}) {
  const positionStyles: Record<Position, React.CSSProperties> = {
    center: { transform: "translateX(-50%) scale(1)", zIndex: 20, opacity: 1 },
    left: { transform: "translateX(calc(-50% - 58%)) scale(0.82)", zIndex: 10, opacity: 0.5 },
    right: { transform: "translateX(calc(-50% + 58%)) scale(0.82)", zIndex: 10, opacity: 0.5 },
    hidden: { transform: "translateX(-50%) scale(0.7)", zIndex: 0, opacity: 0, pointerEvents: "none" as const },
  }

  const style = positionStyles[position] ?? positionStyles.hidden

  return (
    <div
      className="absolute top-0 left-1/2 w-[340px] sm:w-[400px] cursor-pointer select-none"
      style={{
        transition: "transform 0.45s cubic-bezier(0.34,1.2,0.64,1), opacity 0.45s ease",
        ...style,
      }}
      onClick={onClick}
    >
      <div
        className="rounded-2xl p-6 border"
        style={{
          background: position === "center"
            ? "linear-gradient(145deg, #EBF4FF 0%, #2E7DD9 100%)"
            : "#EBF4FF",
          borderColor: position === "center" ? "rgba(27,79,138,0.6)" : "rgba(27,79,138,0.3)",
          boxShadow: position === "center"
            ? "0 20px 60px rgba(27,79,138,0.3), 0 0 0 1px rgba(27,79,138,0.2)"
            : "0 8px 30px rgba(27,79,138,0.15)",
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GoogleIcon />
            <span className="text-black/70 text-sm font-semibold tracking-wide">Google Reviews</span>
          </div>
          <Stars />
        </div>

        {/* Reviewer */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-xs shrink-0"
            style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.15))" }}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-black font-bold text-sm">{review.name}</p>
            {review.business && <p className="text-black/50 text-xs font-medium">{review.business}</p>}
          </div>
          <span className="ml-auto text-black text-xs">{review.date}</span>
        </div>

        {/* Review text */}
        <p className="text-black/75 text-sm leading-relaxed line-clamp-4">
          &ldquo;{review.text}&rdquo;
        </p>

        {/* Read More */}
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 mt-4 text-black text-xs font-bold hover:text-black transition-colors"
        >
          Read More
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function PremiumReviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })
  const [current, setCurrent] = useState(0)
  const total = reviews.length

  const next = useCallback(() => setCurrent((c) => mod(c + 1, total)), [total])
  const prev = useCallback(() => setCurrent((c) => mod(c - 1, total)), [total])

  /* Auto-rotate */
  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  function getPosition(index: number): Position {
    const diff = mod(index - current, total)
    if (diff === 0) return "center"
    if (diff === 1) return "right"
    if (diff === total - 1) return "left"
    return "hidden"
  }

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={blurFade} custom={0} className="flex items-center justify-center gap-3 mb-4">
            <GoogleIcon />
            <span className="text-sm font-bold text-black">Google Reviews</span>
            <span className="text-sm font-bold text-black">4.9</span>
            <Stars />
          </motion.div>
          <motion.h2 variants={blurFade} custom={0.1} className="text-3xl md:text-5xl font-bold text-black mb-3">
            What Our{" "}
            <span className="text-black" style={{ backgroundImage: "linear-gradient(135deg, #EBF4FF, #2E7DD9)" }}>
              Clients Say
            </span>
          </motion.h2>
          <motion.p variants={blurFade} custom={0.2} className="text-black/80 max-w-md mx-auto">
            Real reviews from businesses we&apos;ve helped grow across India
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[320px] sm:h-[300px]">
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.id}
              review={review}
              position={getPosition(i)}
              onClick={() => {
                const pos = getPosition(i)
                if (pos === "left") prev()
                else if (pos === "right") next()
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/25 blue-card flex items-center justify-center text-black hover:text-black hover:border-[#9DB2BF]/40 transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#EBF4FF] w-6" : "bg-[#1B4F8A]/50"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/25 blue-card flex items-center justify-center text-black hover:text-black hover:border-[#9DB2BF]/40 transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Google link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:text-black transition-colors"
          >
            <GoogleIcon />
            See all reviews on Google
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
