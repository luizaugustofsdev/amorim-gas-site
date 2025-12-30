import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#F7F7F7] to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#05612C] leading-tight text-balance">
              Amorim Gás e Distribuidora – Gás e Água Mineral com Entrega Rápida e Segura
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] text-pretty">
              Seu gás e sua água chegam no tempo certo, com atendimento humanizado e confiança garantida.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-[#E6E6E6]">
                <Check className="w-5 h-5 text-[#0A8F42]" />
                <span className="text-sm font-medium text-[#4A4A4A]">Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-[#E6E6E6]">
                <Check className="w-5 h-5 text-[#0A8F42]" />
                <span className="text-sm font-medium text-[#4A4A4A]">Distribuidora confiável</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-[#E6E6E6]">
                <Check className="w-5 h-5 text-[#0A8F42]" />
                <span className="text-sm font-medium text-[#4A4A4A]">Atendimento 7 dias</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#0A8F42] hover:bg-[#05612C] text-base">
                <a
                  href="https://wa.me/5561992962927?text=Olá! Gostaria de fazer um pedido."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Pedir Agora pelo WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0A8F42] text-[#0A8F42] hover:bg-[#F7F7F7] bg-transparent"
              >
                <a href="#pricing">Consultar Preços</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-delivery-person-in-green-uniform-hold.jpg"
                alt="Entregador RCA DISTRIBUIDORA com botijão de gás e galão de água"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0A8F42] text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">+5000</div>
              <div className="text-sm">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
