"use client"
import { motion } from "framer-motion"

const LOGOS = [
  "SIDBI", "MUDRA", "NSIC", "MSME Udyam", "Startup India",
  "GeM Portal", "CGTMSE", "PMEGP", "Make in India", "Digital India",
  "Stand-Up India", "KVIC",
]

function MarqueeRow({ reverse = false, speed = 30 }: { reverse?: boolean; speed?: number }) {
  const items = [...LOGOS, ...LOGOS]
  return (
    <div className="relative flex overflow-hidden group">
      {/* gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-[#526D82] via-[#526D82]/90 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-[#526D82] via-[#526D82]/90 to-transparent" />

      <motion.div
        className="flex gap-6 shrink-0"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items.map((name, i) => (
          <motion.div
            key={`${name}-${i}`}
            whileHover={{ scale: 1.06, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex-shrink-0 px-6 py-3.5 rounded-xl border border-[#9DB2BF]/20 bg-[#27374D]/55
                       hover:bg-[#27374D]/75 hover:border-[#9DB2BF]/35 hover:shadow-md hover:shadow-[#27374D]/20 transition-all duration-300
                       flex items-center gap-3 group/logo cursor-default backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9DB2BF]/25 to-[#526D82]/35 flex items-center justify-center
                            text-[10px] font-bold text-[#9DB2BF] group-hover/logo:from-[#9DB2BF]/35 group-hover/logo:to-[#526D82]/45 transition-colors">
              {name.slice(0, 2).toUpperCase()}
            </div>
            <span className="text-sm text-[#9DB2BF] group-hover/logo:text-[#DDE6ED] whitespace-nowrap transition-colors font-medium">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default function PremiumMarquee() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: "linear-gradient(180deg, #526D82 0%, #476078 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#9DB2BF]">Trusted Ecosystem</p>
        <h2 className="text-2xl font-semibold text-[#DDE6ED] md:text-3xl">
          Integrated with India&apos;s MSME Growth Network
        </h2>
      </motion.div>

      <div className="space-y-5">
        <MarqueeRow speed={35} />
        <MarqueeRow reverse speed={40} />
      </div>
    </section>
  )
}
