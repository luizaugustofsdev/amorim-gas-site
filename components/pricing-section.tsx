import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PricingSection() {
  const prices = [
    {
      title: "Botijão de Gás",
      description: "Converse com um de nossos atendentes",
      popular: false,
    },
    {
      title: "Água Mineral 20L",
      description: "Veja agora a entrega e troca do seu garrafão",
      popular: false,
    },
    {
      title: "Combo: Gás + Água",
      description: "Economize muito mais comprando conosco",
      popular: true,
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05612C] mb-4">Tabela de Preços</h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">Preços justos e competitivos para sua comodidade</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prices.map((item, index) => (
            <Card
              key={index}
              className={`bg-white border-2 ${item.popular ? "border-[#0A8F42]" : "border-[#E6E6E6]"} relative`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A8F42] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Vendido
                </div>
              )}
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-xl font-bold text-[#05612C]">{item.title}</h3>
                <p className="text-sm text-[#4A4A4A]">{item.description}</p>
                <Button className="w-full bg-[#0A8F42] hover:bg-[#05612C] mt-6">
                  <a
                    href="https://wa.me/5561998455466?text=Olá! Eu gostaria de fazer um pedido."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pedir Agora pelo WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#4A4A4A]">
            Taxa de entrega pode variar conforme a região. Consulte-nos para mais informações.
          </p>
        </div>
      </div>
    </section>
  )
}
