import { Roboto } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"
import type React from "react"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-white min-h-screen">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}

