"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5561992962927?text=Olá! Gostaria de fazer um pedido."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-3 group"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:inline-block font-semibold pr-2 animate-in slide-in-from-right">
        Faça seu pedido
      </span>
    </a>
  )
}
