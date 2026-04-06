"use client"
import dynamic from "next/dynamic"

const WelcomePopup = dynamic(
  () => import("@/components/layout/welcome-popup"),
  { ssr: false }
)

export default function ClientPopupWrapper() {
  return <WelcomePopup />
}
