import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { NewsProvider } from "@/context/news-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "YANEWS PORTAL",
  description: "A modern news portal built with Next.js",
  author: "Handayani"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewsProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </NewsProvider>
      </body>
    </html>
  )
}



import './globals.css'