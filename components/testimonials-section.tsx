"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Setor Industrial",
      text: "Atendimento excelente! O gás chegou em menos de 1 hora. Super recomendo a AMORIM GÁS!",
      rating: 5,
      avatar: "/professional-woman-avatar.png",
    },
    {
      name: "João Santos",
      location: "Itapuã I",
      text: "Melhor distribuidora da região. Sempre pontuais e com preço justo. Sou cliente há anos!",
      rating: 5,
      avatar: "/professional-man-avatar.png",
    },
    {
      name: "Ana Paula",
      location: "Residencial Entre-Lagos",
      text: "Produtos de qualidade e entregadores muito educados. Virei cliente fiel!",
      rating: 5,
      avatar: "/professional-woman-avatar-2.png",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05612C] mb-4">Depoimentos de Clientes</h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nosso serviço
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-[#E6E6E6]">
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#0A8F42] text-[#0A8F42]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#4A4A4A] italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E6E6E6]">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#0A8F42]">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[#05612C]">{testimonial.name}</div>
                    <div className="text-sm text-[#4A4A4A]">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
