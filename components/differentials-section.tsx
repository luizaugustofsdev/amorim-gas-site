import { Truck, ShieldCheck, Award, MessageCircle, CreditCard } from "lucide-react"

export default function DifferentialsSection() {
  const differentials = [
    {
      icon: Truck,
      title: "Entrega Super Rápida",
      description: "Receba seu pedido em tempo recorde com nossa logística otimizada",
    },
    {
      icon: ShieldCheck,
      title: "Segurança Total",
      description: "Produtos certificados e entregadores treinados",
    },
    {
      icon: Award,
      title: "Distribuidora Autorizada",
      description: "Parceiros oficiais das melhores marcas do mercado",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Imediato",
      description: "Atendimento rápido e humanizado pelo WhatsApp",
    },
    {
      icon: CreditCard,
      title: "PIX, Cartão de Crédito, Dinheiro, Cartões Vale gás e Gás do Povo",
      description: "Flexibilidade total nas formas de pagamento para você amigo cliente",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05612C] mb-4">Diferenciais da Amorim Gás </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            O que nos torna a melhor escolha para sua casa ou empresa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-[#F7F7F7] p-6 rounded-xl hover:shadow-lg transition-shadow border border-[#E6E6E6]"
              >
                <div className="w-14 h-14 bg-[#0A8F42] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#05612C] mb-2">{item.title}</h3>
                <p className="text-[#4A4A4A]">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
