import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieBanner } from "@/components/CookieBanner"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AMORIM GÁS - Gás e Água Mineral com Entrega Rápida",
  description:
    "AMORIM GÁS oferece entrega rápida e segura de gás de cozinha e água mineral Itapuã entorno e Brasília DF. Atendimento ágil e humanizado, produtos certificados e logística otimizada.",
  keywords: [
    "gás 13kg",
    "entrega de gás",
    "água mineral 20L",
    "distribuidora de gás",
    "AMORIM GÁS",
    "botijão de gás",
    "entrega rápida",
    "gás no itapuã",
    "entrega de gás itapuã",
    "água mineral itapuã",
    "distribuidora de gás itapuã",
    "gás brasília df",
    "amorim gás",
  ],
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },

  verification: {
    google: "usbXiPYGwngB7ktLUE5bWNm1lYriGFFXwhK8JWc4woE",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  )
}
