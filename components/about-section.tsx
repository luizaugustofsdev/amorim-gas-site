import { Shield, Clock, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05612C] mb-4">Sobre a Amorim Gás Distribuidora </h2>
          <p className="text-lg text-[#4A4A4A] text-pretty">
            A AMORIM GÁS atua com excelência na entrega de gás de cozinha e água mineral, oferecendo rapidez,
            segurança e qualidade superior. Nossa equipe é treinada, nossos produtos são certificados e nossa logística
            é otimizada para garantir comodidade e confiança ao cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#F7F7F7] rounded-full flex items-center justify-center mx-auto border-2 border-[#0A8F42]">
              <Shield className="w-8 h-8 text-[#0A8F42]" />
            </div>
            <h3 className="text-xl font-semibold text-[#05612C]">Segurança Total</h3>
            <p className="text-[#4A4A4A]">Produtos certificados e equipe treinada para garantir sua tranquilidade</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#F7F7F7] rounded-full flex items-center justify-center mx-auto border-2 border-[#0A8F42]">
              <Clock className="w-8 h-8 text-[#0A8F42]" />
            </div>
            <h3 className="text-xl font-semibold text-[#05612C]">Rapidez</h3>
            <p className="text-[#4A4A4A]">Logística otimizada para entrega no menor tempo possível</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#F7F7F7] rounded-full flex items-center justify-center mx-auto border-2 border-[#0A8F42]">
              <Heart className="w-8 h-8 text-[#0A8F42]" />
            </div>
            <h3 className="text-xl font-semibold text-[#05612C]">Atendimento Humanizado</h3>
            <p className="text-[#4A4A4A]">Tratamos cada cliente com respeito, atenção e profissionalismo</p>
          </div>
        </div>

        {/* Team Photo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/professional-team-in-green-uniforms-at-distributio.jpg"
              alt="Equipe AMORIM GÁS DISTRIBUIDORA"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
