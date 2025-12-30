"use client"

import { useEffect, useState } from "react"

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies")
    if (!accepted) setShow(true)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 w-full bg-black/90 text-white px-6 py-4 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm">
            Usamos cookies para melhorar sua experiência.
          </p>

          <p className="text-xs opacity-80 mt-1">
            Ao continuar navegando, você concorda com o uso de cookies conforme
            nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="underline hover:opacity-100"
            >
              Política de Privacidade
            </a>.
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.setItem("cookies", "ok")
            setShow(false)
          }}
          className="px-4 py-2 rounded-lg bg-[#54D68B] text-black text-sm font-semibold hover:opacity-90 transition"
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}