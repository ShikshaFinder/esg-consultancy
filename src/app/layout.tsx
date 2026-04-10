import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "ESG Catalyst — Ship Recycling Compliance & HSE Advisory",
  description:
    "Structured compliance, safety frameworks, and ESG traceability for ship recycling operations at Alang. HKC, EU SRR, GMB readiness.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#0f172a]`}
      >
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
