"use client"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919998035607"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg shadow-[#25d366]/30 hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-black" />
    </a>
  )
}
