import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Kunaya - Tiger Nut Milk | Pure Plant-Based Power",
  description: "Discover Kunaya's premium Tiger Nut Milk - a naturally dairy-free, nut-free, and lactose-free alternative rich in nutrients and rooted in West African tradition.",
  keywords: ["tiger nut milk", "plant-based milk", "dairy-free", "West African", "Kunaya", "healthy drinks"],
  authors: [{ name: "Kunaya" }],
  creator: "Kunaya",
  publisher: "Kunaya",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://kunaya.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kunaya - Tiger Nut Milk | Pure Plant-Based Power",
    description: "Discover Kunaya's premium Tiger Nut Milk - a naturally dairy-free, nut-free, and lactose-free alternative rich in nutrients and rooted in West African tradition.",
    url: 'https://kunaya.vercel.app',
    siteName: 'Kunaya',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Make sure to create this image in the public folder
        width: 1200,
        height: 630,
        alt: 'Kunaya Tiger Nut Milk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kunaya - Tiger Nut Milk | Pure Plant-Based Power",
    description: "Discover Kunaya's premium Tiger Nut Milk - naturally dairy-free and nutrient-rich.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

