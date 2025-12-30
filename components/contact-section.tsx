"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/5561998455466?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05612C] mb-4">Fale Conosco</h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">Entre em contato e faça seu pedido agora mesmo</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A8F42] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#05612C] mb-1">Telefones</h3>
                <p className="text-[#4A4A4A]">(61) 99296-2927</p>
                <p className="text-[#4A4A4A]">(61) 99845-5466</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A8F42] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#05612C] mb-1">Endereço</h3>
                <p className="text-[#4A4A4A]">
                  Q 1 CONJ B, Rua da Fazendinha
                  <br />
                 Itapoã, Brasília - DF, 71596-156
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A8F42] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#05612C] mb-1">Horários de Atendimento</h3>
                <p className="text-[#4A4A4A]">
                  Segunda a Sexta: 08h às 21h
                  <br />
                  Sábado e Domingo: 09h às 19h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A8F42] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#05612C] mb-1">E-mail</h3>
                <p className="text-[#4A4A4A]">eldyney@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F7F7F7] p-8 rounded-2xl border border-[#E6E6E6]">
            <h3 className="text-2xl font-bold text-[#05612C] mb-6">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-[#E6E6E6]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(61) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="border-[#E6E6E6]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos como podemos ajudar..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="border-[#E6E6E6]"
                />
              </div>
              <Button type="submit" className="w-full bg-[#0A8F42] hover:bg-[#05612C]">
                Enviar Mensagem via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
