"use client"

import { useParams } from "next/navigation"
import { getBlogBySlug, blogPosts } from "@/lib/blogs"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppFAB from "@/components/layout/whatsapp-fab"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  BookOpen,
  Lightbulb,
  ChevronRight,
  List,
} from "lucide-react"
import { useState, useEffect } from "react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
}
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const post = getBlogBySlug(slug)
  const [activeSection, setActiveSection] = useState<string>("")
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => {
    if (!post) return

    const handleScroll = () => {
      const sections = post.content.map((s) => ({
        id: s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        heading: s.heading,
      }))

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140) {
            setActiveSection(sections[i].id)
            return
          }
        }
      }
      if (sections.length > 0) setActiveSection(sections[0].id)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [post])

  // 404 state
  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#060e1a] flex items-center justify-center px-6">
          <motion.div
            className="text-center max-w-md"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <BookOpen className="w-16 h-16 text-black/40 mx-auto mb-6" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-3xl font-bold text-black mb-3"
            >
              Blog Not Found
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-black/40 text-base mb-8"
            >
              The article you&apos;re looking for doesn&apos;t exist or may have been
              moved.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-[#355872] to-[#7AAACE] text-black text-sm font-semibold hover:shadow-lg hover:shadow-[#355872]/30 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Blogs
              </Link>
            </motion.div>
          </motion.div>
        </main>
        <Footer />
        <WhatsAppFAB />
      </>
    )
  }

  const sectionIds = post.content.map((s) => ({
    id: s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    heading: s.heading,
  }))

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const moreRelated =
    relatedPosts.length < 3
      ? [
          ...relatedPosts,
          ...blogPosts
            .filter(
              (p) =>
                p.slug !== post.slug &&
                p.category !== post.category &&
                !relatedPosts.find((r) => r.slug === p.slug)
            )
            .slice(0, 3 - relatedPosts.length),
        ]
      : relatedPosts

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pb-20 px-6 bg-[#060e1a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(53,88,114,0.15)_0%,transparent_60%)] pointer-events-none" />

          <motion.div
            className="max-w-4xl mx-auto relative z-10"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {/* Back link */}
            <motion.div variants={fadeUp} className="mb-8">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-black/60 text-sm hover:text-black transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Blogs
              </Link>
            </motion.div>

            {/* Category badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-bold text-black bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              {post.featured && (
                <span className="text-[10px] font-bold text-black bg-[#7AAACE]/10 border border-[#7AAACE]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </span>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6"
            >
              {post.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 text-black/35 text-sm mb-6"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </span>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs text-black/50 bg-[#9CD5FF]/[0.06] border border-[#9CD5FF]/10 px-3 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Article Body */}
        <section className="py-12 md:py-20 px-6 bg-[#F7F8F0]">
          <div className="max-w-7xl mx-auto flex gap-10 relative">
            {/* Table of Contents — Desktop Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28">
                <motion.nav
                  initial="hidden"
                  animate="show"
                  variants={stagger}
                  className="rounded-2xl border border-[#355872]/[0.08] bg-white p-6"
                >
                  <motion.h3
                    variants={fadeUp}
                    className="flex items-center gap-2 text-sm font-bold text-black mb-4"
                  >
                    <List className="w-4 h-4 text-black" />
                    Table of Contents
                  </motion.h3>
                  <ul className="space-y-1">
                    {sectionIds.map((sec, i) => (
                      <motion.li key={sec.id} custom={i} variants={fadeUp}>
                        <a
                          href={`#${sec.id}`}
                          onClick={(e) => {
                            e.preventDefault()
                            document
                              .getElementById(sec.id)
                              ?.scrollIntoView({ behavior: "smooth", block: "start" })
                          }}
                          className={`block text-[13px] leading-snug py-1.5 px-3 rounded-lg transition-all duration-200 ${
                            activeSection === sec.id
                              ? "bg-[#9CD5FF]/10 text-black font-semibold border-l-2 border-[#355872]"
                              : "text-black/40 hover:text-black hover:bg-[#355872]/[0.04]"
                          }`}
                        >
                          {sec.heading}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>
              </div>
            </aside>

            {/* Mobile TOC Toggle */}
            <div className="lg:hidden fixed bottom-20 right-6 z-40">
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="w-12 h-12 rounded-full bg-[#355872] text-black shadow-lg shadow-[#355872]/30 flex items-center justify-center hover:bg-[#7AAACE] transition-colors"
                aria-label="Table of Contents"
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile TOC Drawer */}
            {tocOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="lg:hidden fixed bottom-36 right-6 z-40 w-72 max-h-80 overflow-y-auto rounded-2xl border border-[#355872]/10 bg-white shadow-2xl p-5"
              >
                <h3 className="flex items-center gap-2 text-sm font-bold text-black mb-3">
                  <List className="w-4 h-4 text-black" />
                  Contents
                </h3>
                <ul className="space-y-1">
                  {sectionIds.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          setTocOpen(false)
                          document
                            .getElementById(sec.id)
                            ?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }}
                        className={`block text-[13px] leading-snug py-1.5 px-3 rounded-lg transition-all duration-200 ${
                          activeSection === sec.id
                            ? "bg-[#9CD5FF]/10 text-black font-semibold"
                            : "text-black/40 hover:text-black"
                        }`}
                      >
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Main Content */}
            <motion.article
              className="flex-1 min-w-0"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              <div className="rounded-2xl border border-[#355872]/[0.06] bg-white p-6 md:p-10 lg:p-12">
                {/* Excerpt / Intro */}
                <motion.p
                  variants={fadeUp}
                  className="text-black/60 text-lg leading-relaxed mb-10 pb-8 border-b border-[#355872]/[0.06]"
                >
                  {post.excerpt}
                </motion.p>

                {/* Sections */}
                {post.content.map((section, idx) => {
                  const sectionId = section.heading
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")

                  return (
                    <motion.div
                      key={sectionId}
                      custom={idx}
                      variants={fadeUp}
                      className="mb-10 last:mb-0 scroll-mt-28"
                      id={sectionId}
                    >
                      <h2 className="text-xl md:text-2xl font-bold text-black mb-4 leading-snug">
                        {section.heading}
                      </h2>

                      {section.paragraphs.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-black/60 text-[15px] leading-[1.8] mb-4 last:mb-0"
                        >
                          {para}
                        </p>
                      ))}

                      {section.keyTakeaway && (
                        <div className="mt-5 rounded-xl bg-gradient-to-r from-[#9CD5FF]/[0.08] to-transparent border border-[#9CD5FF]/10 p-5 relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#355872] to-[#7AAACE]" />
                          <div className="flex items-start gap-3 pl-3">
                            <Lightbulb className="w-5 h-5 text-black shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-black/60 block mb-1">
                                Key Takeaway
                              </span>
                              <p className="text-black/70 text-sm font-medium leading-relaxed">
                                {section.keyTakeaway}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Back to blogs link at bottom */}
              <motion.div variants={fadeUp} className="mt-8 text-center">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-black text-sm font-medium hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Articles
                </Link>
              </motion.div>
            </motion.article>
          </div>
        </section>

        {/* Related Posts */}
        {moreRelated.length > 0 && (
          <section className="py-16 md:py-20 px-6 bg-[#0a1628]">
            <motion.div
              className="max-w-7xl mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/50 block mb-2">
                  Keep Reading
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  Related Articles
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moreRelated.map((related, i) => (
                  <motion.div key={related.slug} custom={i} variants={fadeUp}>
                    <Link
                      href={`/blogs/${related.slug}`}
                      className="group block rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 hover:border-[#7AAACE]/30 hover:bg-white/[0.05] transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center gap-1 text-[10px] font-bold text-black bg-[#9CD5FF]/10 border border-[#9CD5FF]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          <Tag className="w-3 h-3" />
                          {related.category}
                        </span>
                      </div>

                      <h3 className="text-black font-bold text-lg mb-2 group-hover:text-black transition-colors duration-200 leading-snug">
                        {related.title}
                      </h3>

                      <p className="text-black/40 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                        {related.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        <div className="flex items-center gap-3 text-black/30 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(related.date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {related.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-black text-xs font-medium group-hover:gap-2 transition-all duration-200">
                          Read <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-[#355872] to-[#7AAACE]">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-4xl font-bold text-black mb-4"
            >
              Need Help With This Topic?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-black/70 text-base mb-8"
            >
              Our experts can guide you through schemes, funding, and compliance
              tailored to your business. Get a free consultation today.
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
