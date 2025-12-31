import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#05612C] text-white py-12">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">

              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 overflow-hidden">
                <Image
                  src="/logo-amorim-gas.png"
                  alt="Amorim Gás"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <div>
                <div className="font-bold text-lg">Amorim Gás e Distribuidora</div>
                <div className="text-xs text-[#54D68B]">Gás e Água Mineral</div>
              </div>

            </div>

            <p className="text-sm text-[#54D68B]">
              Excelência na entrega de gás e água mineral com rapidez e segurança.
            </p>
          </div>

          {/* Quick Menu */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu Rápido</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-[#54D68B] hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-[#54D68B] hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#products" className="text-[#54D68B] hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#pricing" className="text-[#54D68B] hover:text-white transition-colors">Preços</a></li>
              <li><a href="#contact" className="text-[#54D68B] hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-sm text-[#54D68B]">
              <li>Segunda a Sexta: 8h às 21h</li>
              <li>Finais de Semana: 9h às 19h</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#54D68B]" />
                <span className="text-[#54D68B]">(61) 99296-2927</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#54D68B]" />
                <span className="text-[#54D68B]">eldyney@gmail.com</span>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#54D68B] mt-1 shrink-0" />
                <span className="text-[#54D68B]">
                  Q 1 CONJ B, Rua da Fazendinha
                  <br />
                  Itapoã, Brasília - DF
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0A8F42] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#54D68B]">

            <p>© 2021 AMORIM GÁS E DISTRIBUIDORA. Todos os direitos reservados.</p>

            <div className="flex gap-6">
              <a href="/politica-de-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}