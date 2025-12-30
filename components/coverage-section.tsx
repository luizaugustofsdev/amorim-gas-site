import { MapPin } from "lucide-react"

export default function CoverageSection() {
  const neighborhoods = [
    "Centro do Itapuã",
    "Itapuã I e II",
    "Paranoá Parque",
    "Paranoá Norte",
    "Setor Entre-Lagos",
    "Residencial Entre-Lagos",
    "Residencial La Fonte",
    "La Fonte I",
    "São Caetano",
    "Novo Horizonte I e II",
    "Vila Nova",
    "Setor Industrial",
  ]

  return (
    <section id="coverage" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05612C] mb-4">Área de Atendimento</h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">Atendemos toda a região com rapidez e segurança</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Map Illustration */}
          <div className="aspect-video bg-gradient-to-br from-[#54D68B] to-[#0A8F42] rounded-2xl mb-8 flex items-center justify-center shadow-xl">
            <div className="text-center text-white space-y-4">
              <MapPin className="w-16 h-16 mx-auto" />
              <div className="text-2xl font-bold">Brasília-DF</div>
              <div className="text-lg">Itapoã - Paranoá - Entre Lagos e Entorno</div>
            </div>
          </div>

          {/* Neighborhoods Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] p-4 rounded-lg text-center border border-[#E6E6E6] hover:border-[#0A8F42] transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#0A8F42] mx-auto mb-2" />
                <span className="text-[#4A4A4A] font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#4A4A4A] mb-4">
              Não encontrou seu bairro? Entre em contato para verificar disponibilidade!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
