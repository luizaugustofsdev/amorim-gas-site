// lib/site-config.ts
// Centralized, single source of truth for client/company data.
// IMPORTANT: Update ONLY this file to reflect changes across the entire site.

export type SiteSocialKey = "whatsapp" | "instagram" | "facebook" | "email"

export const SITE = {
  company: {
    name: "Amorim Gás",
    shortName: "AG", // Used in the circle logo (keep short for visual consistency)
    segment: "Gás e Água Mineral",
    locationShort: "Brasília - DF",
  },

  contact: {
    // Numbers should be E.164 without "+" for wa.me, with country code.
    whatsapp: {
      e164: "5561992962927",
      display: "(61) 99296-2927",
    },
    phoneSecondary: {
      e164: "5561998455466",
      display: "(61) 99845-5466",
    },
    email: "eldyney@gmail.com",

    // If you later get a full street address, just replace the lines below.
    addressLines: ["Brasília - DF"],
  },

  hours: {
    weekdays: "Segunda a Sexta: 8h às 21h",
    weekends: "Finais de semana: 9h às 19h",
  },

socials: {
  instagram: "https://www.instagram.com/amorimgasdf/",
  facebook: "https://facebook.com/SUA_PAGINA",
},

  copy: {
    metaTitle: "Amorim Gás - Gás e Água Mineral com Entrega Rápida",
    metaDescription:
      "Amorim Gás oferece entrega rápida e segura de gás de cozinha e água mineral. Atendimento humanizado, produtos certificados e logística otimizada.",
    footerDescription: "Excelência na entrega de gás e água mineral com rapidez e segurança.",
  },

  links: {
    whatsapp(message?: string) {
      const base = `https://wa.me/${SITE.contact.whatsapp.e164}`
      if (!message) return base
      return `${base}?text=${encodeURIComponent(message)}`
    },
    telPrimary() {
      return `tel:+${SITE.contact.whatsapp.e164}`
    },
    telSecondary() {
      return `tel:+${SITE.contact.phoneSecondary.e164}`
    },
    email() {
      return `mailto:${SITE.contact.email}`
    },
  },
} as const
