"use client"
import { motion, type Variants } from "framer-motion"

const blurFadeUp: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  show: {
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const LOGOS: { name: string; logo?: string }[] = [
  { name: "SIDBI", logo: "/logos/sidbi.png" },
  { name: "MUDRA", logo: "/logos/mudra.png" },
  { name: "NSIC" },
  { name: "MSME Udyam" },
  { name: "Startup India", logo: "/logos/startup-india.png" },
  { name: "GeM Portal" },
  { name: "CGTMSE", logo: "/logos/cgtmse.png" },
  { name: "PMEGP" },
  { name: "Make in India" },
  { name: "Digital India" },
  { name: "Stand-Up India" },
  { name: "NABARD", logo: "/logos/nabard.png" },
  { name: "SBI", logo: "/logos/sbi.png" },
  { name: "HDFC Bank", logo: "/logos/hdfc-bank.png" },
  { name: "Bank of Baroda", logo: "/logos/bank-of-baroda.png" },
]

export default function PremiumMarquee() {
  const items = [...LOGOS, ...LOGOS]

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: "linear-gradient(180deg, #526D82 0%, #FFF8F0 100%)" }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={blurFadeUp}
        className="text-center mb-12"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-black">Trusted Ecosystem</p>
        <h2 className="text-2xl font-semibold text-black md:text-3xl">
          Integrated with India&apos;s MSME Growth Network
        </h2>
      </motion.div>

      {/* Single scrollable row */}
      <div className="relative flex overflow-hidden group/marquee">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-40 bg-linear-to-r from-[#526D82] via-[#526D82]/95 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-40 bg-linear-to-l from-[#526D82] via-[#526D82]/95 to-transparent" />

        <motion.div
          className="flex gap-6 shrink-0 group-hover/marquee:[animation-play-state:paused]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {items.map((item, i) => (
            <motion.div
              key={`${item.name}-${i}`}
              whileHover={{ scale: 1.1, y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex-shrink-0 px-5 py-3 rounded-xl border border-[#9DB2BF]/15 blue-card backdrop-blur-md
                         hover:bg-[#1e3a5c]/70 hover:border-[#9DB2BF]/40 hover:shadow-lg hover:shadow-[#1B4F8A]/20 transition-all duration-300
                         flex items-center gap-3 group/logo cursor-default relative overflow-hidden
                         shadow-[inset_0_1px_0_rgba(30,58,92,0.08)]"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-linear-to-r from-[#9DB2BF]/0 via-[#9DB2BF]/5 to-[#9DB2BF]/0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300" />

              {item.logo ? (
                <div className="relative w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center overflow-hidden p-1 shrink-0">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-9 h-9 rounded-lg bg-linear-to-br from-[#9DB2BF]/25 to-[#526D82]/35 flex items-center justify-center
                                text-[10px] font-bold text-black group-hover/logo:from-[#9DB2BF]/35 group-hover/logo:to-[#526D82]/45 transition-colors shrink-0">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <span className="relative text-sm text-black group-hover/logo:text-black whitespace-nowrap transition-colors font-medium">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
