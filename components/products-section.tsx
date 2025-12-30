import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductsSection() {
  const products = [
    {
      title: "Botijão de Gás P45",
      features: [
        "Selo de segurança certificado",
        "Válvula original e testada",
        "Gás de alta qualidade",
        "Entrega imediata",
      ],
      image: "/Botijão p45.png",
    },  
    {
      title: "Botijão de Gás P20",
      features: [
        "Selo de segurança certificado",
        "Válvula original e testada",
        "Gás de alta qualidade",
        "Entrega imediata",
      ],
      image: "/Botijão p20.png",
    },
    {
      title: "Botijão de Gás P13",
      features: [
        "Selo de segurança certificado",
        "Válvula original e testada",
        "Gás de alta qualidade",
        "Entrega imediata",
      ],
      image: "/professional-gas-cylinder-13kg-with-safety-seal.jpg",
    },
    {
      title: "Água Mineral 20L",
      features: ["Pureza certificada", "Com ou sem troca de garrafão", "Água mineral natural", "Embalagem higienizada"],
      image: "/clean-20l-water-gallon-mineral-water.jpg",
    },
    {
      title: "Acessórios",
      features: ["Regulador de pressão", "Mangueira de gás", "Suportes para botijão", "Kits completos"],
      image: "/gas-regulator-hose-and-accessories-kit.jpg",
    },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05612C] mb-4">Nossos Produtos</h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Produtos de qualidade certificada para sua casa ou empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-white border-[#E6E6E6] hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#05612C]">{product.title}</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0A8F42] shrink-0 mt-0.5" />
                        <span className="text-[#4A4A4A] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#0A8F42] hover:bg-[#05612C]">
                    <a
                      href="https://wa.me/5561998455466?text=Olá! Gostaria de fazer um pedido."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fazer Pedido Agora
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
