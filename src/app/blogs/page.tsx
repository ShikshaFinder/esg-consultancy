"use client"
import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { Calendar, Clock, ArrowRight, BookOpen, Tag, Sparkles, ChevronRight, Landmark, TrendingUp, Banknote, Award, Monitor, Globe, ShieldCheck, LayoutGrid } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import { BouncingBalls } from "@/components/devComponents/bouncing-balls"
import { blogPosts, blogCategories, getBlogsByCategory } from "@/lib/blogs"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const filteredBlogs = getBlogsByCategory(selectedCategory)
  const featuredBlogs = blogPosts.filter((p) => p.featured)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
            <BouncingBalls
              numBalls={45}
              colors={["#355872", "#7AAACE", "#9CD5FF"]}
              opacity={0.25}
              minRadius={0.2}
              maxRadius={1.2}
              speed={0.15}
              interactive={false}
            />
          </div>

          <motion.div className="max-w-4xl mx-auto text-center relative z-10" initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[11px] font-bold tracking-[0.18em] uppercase text-black block mb-4">
              Insights & Guides
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              Resources to{" "}
              <span style={{ background: "linear-gradient(90deg,#9CD5FF,#355872)", WebkitBackgroundClip: "text", WebkitTextFillColor: "#000000", backgroundClip: "text" }}>
                Grow Your Business
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-black/50 text-lg max-w-2xl mx-auto">
              Expert guides on government schemes, funding strategies, compliance, and everything MSMEs need to scale from micro to medium.
            </motion.p>
          </motion.div>
        </section>

        {/* Featured Blogs */}
        {featuredBlogs.length > 0 && (
          <section className="py-16 px-6 bg-[#0a1628]">
            <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
                <Sparkles className="w-5 h-5 text-black" />
                <h2 className="text-black font-bold text-xl">Featured Articles</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredBlogs.map((post, i) => (
                  <motion.div key={post.slug} custom={i} variants={fadeUp}>
                    <Link href={`/blogs/${post.slug}`} className="group block rounded-2xl border border-white/6 bg-white/[0.03] p-8 hover:border-[#7AAACE]/30 hover:bg-white/5 transition-all duration-300 h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-bold text-black bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Featured
                        </span>
                        <span className="text-[10px] font-bold text-black bg-[#7AAACE]/10 border border-[#7AAACE]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-black font-bold text-xl mb-3 group-hover:text-black transition-colors duration-200 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-black/40 text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-black/30 text-xs">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-black text-xs font-medium group-hover:gap-2 transition-all duration-200">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Category Filter + Blog Grid */}
        <section className="py-20 px-6 bg-[#F7F8F0]">
          <motion.div className="max-w-7xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }} variants={stagger}>
            {/* Section Heading */}
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/50 block mb-2">Browse by Topic</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">All Articles</h2>
            </motion.div>

            {/* Category Tabs */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-12">
              {blogCategories.map((cat) => {
                const iconMap: Record<string, React.ReactNode> = {
                  "All": <LayoutGrid className="w-3.5 h-3.5" />,
                  "Government Schemes": <Landmark className="w-3.5 h-3.5" />,
                  "Business Growth": <TrendingUp className="w-3.5 h-3.5" />,
                  "Funding": <Banknote className="w-3.5 h-3.5" />,
                  "Certifications": <Award className="w-3.5 h-3.5" />,
                  "Digital Transformation": <Monitor className="w-3.5 h-3.5" />,
                  "Export": <Globe className="w-3.5 h-3.5" />,
                  "Compliance": <ShieldCheck className="w-3.5 h-3.5" />,
                }
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-linear-to-r from-[#355872] to-[#7AAACE] text-black shadow-md shadow-[#355872]/20"
                        : "bg-white border border-[#355872]/10 text-black/60 hover:border-[#355872]/25 hover:text-black"
                    }`}
                  >
                    {iconMap[cat]}
                    {cat}
                  </button>
                )
              })}
            </motion.div>

            {/* Blog Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              animate="show"
              key={selectedCategory}
            >
              {filteredBlogs.map((post, i) => (
                <motion.div key={post.slug} custom={i} variants={fadeUp}>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="group block rounded-2xl border border-[#355872]/8 bg-white p-6 hover:border-[#355872]/20 hover:shadow-xl hover:shadow-[#355872]/5 transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Category Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex items-center gap-1 text-[10px] font-bold text-black bg-[#9CD5FF]/15 border border-[#9CD5FF]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-black bg-[#7AAACE]/10 border border-[#7AAACE]/15 px-2 py-1 rounded-full">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-black font-bold text-lg mb-2 group-hover:text-black transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-black/50 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-black/60 bg-[#355872]/5 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#355872]/6">
                      <div className="flex items-center gap-3 text-black/35 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-black text-xs font-medium group-hover:gap-2 transition-all duration-200">
                        Read <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredBlogs.length === 0 && (
              <motion.div variants={fadeUp} className="text-center py-16">
                <BookOpen className="w-12 h-12 text-black/20 mx-auto mb-4" />
                <p className="text-black/40 text-lg font-medium">No articles in this category yet.</p>
                <p className="text-black/25 text-sm mt-1">Check back soon — we&apos;re always adding new content.</p>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-linear-to-r from-[#355872] to-[#7AAACE]">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black mb-4">
              Need Personalized Guidance?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-black/70 text-base mb-8">
              Our experts can help you navigate schemes, funding, and compliance tailored to your business. Get a free consultation today.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:shadow-lg hover:shadow-black/20 transition-all"
              >
                Talk to an Expert <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
