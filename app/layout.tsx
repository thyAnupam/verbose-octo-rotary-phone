import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RehabNest Physiocare - Professional Physiotherapy Services",
  description:
    "RehabNest Physiocare provides professional physiotherapy services including orthopedic rehabilitation, neurological rehabilitation, sports injury treatment, and home visits.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}



import './globals.css'