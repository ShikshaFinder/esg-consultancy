import type { Metadata } from "next"
import localFont from "next/font/local"
import ClientPopupWrapper from "@/components/layout/client-popup-wrapper"
import SiteAnimations from "@/components/layout/site-animations"
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
  title: "Grow Bridge — Where Business Growth Begins",
  description:
    "India's trusted MSME growth platform. Government funding, business registration, compliance support, and digital transformation — serving entrepreneurs across 28+ states.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-overlay bg-[#27374D] text-[#DDE6ED]`}
      >
        <ClientPopupWrapper />
        <SiteAnimations />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
