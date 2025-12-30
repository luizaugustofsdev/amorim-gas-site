"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Produtos", href: "#products" },
    { label: "Preços", href: "#pricing" },
    { label: "Área de Atendimento", href: "#coverage" },
    { label: "Contato", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#0A8F42] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">AG</span>
            </div>
            <div className="hidden md:block">
              <div className="text-[#05612C] font-bold text-lg leading-tight">AMORIM GÁS</div>
              <div className="text-xs text-[#4A4A4A]">Gás e Água Mineral</div>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#4A4A4A] hover:text-[#0A8F42] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+55619984554667" className="flex items-center gap-2 text-[#0A8F42]">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(61) 9 9845-5466</span>
            </a>
            <Button className="bg-[#0A8F42] hover:bg-[#05612C]">
              <a href="https://wa.me/5561998455466" target="_blank" rel="noopener noreferrer">
                Pedir Agora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-[#0A8F42]" /> : <Menu className="w-6 h-6 text-[#0A8F42]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#E6E6E6]">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-[#4A4A4A] hover:text-[#0A8F42] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E6E6E6] mt-4">
              <a href="tel:+5561992962927" className="flex items-center gap-2 text-[#0A8F42] mb-3">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(61) 99296-2927</span>
              </a>
              <Button className="w-full bg-[#0A8F42] hover:bg-[#05612C]">
                <a href="https://wa.me/5561992962927" target="_blank" rel="noopener noreferrer">
                  Pedir Agora
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
