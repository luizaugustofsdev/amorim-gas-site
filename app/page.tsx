import Link from "next/link"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import DifferentialsSection from "@/components/differentials-section"
import PricingSection from "@/components/pricing-section"
import CoverageSection from "@/components/coverage-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <DifferentialsSection />
      <PricingSection />
      <CoverageSection />
      <TestimonialsSection />
      <ContactSection />

      {/* 🔥 SEO LOCAL — LINKS INTERNOS ESTRATÉGICOS */}
      <section className="py-12 text-center bg-gray-50 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Atendimento em Brasília e Região
        </h2>

        <p className="text-gray-600">
          Entregamos gás e água mineral no Itapuã, Brasília e bairros próximos com rapidez e segurança.
        </p>

        <div className="flex flex-col items-center gap-2 text-green-700 underline font-medium">
          <Link href="/gas-no-itapua">Gás no Itapuã</Link>
          <Link href="/agua-mineral-no-itapua">Água mineral no Itapuã</Link>
          <Link href="/entrega-de-gas-brasilia">Entrega de gás em Brasília</Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
