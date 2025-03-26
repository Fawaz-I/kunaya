import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AccessibilityProvider } from "@/components/accessibility-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"

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
  title: "Kunaya | Organic Tiger Nut Milk",
  description: "Experience the authentic taste of West African tiger nut milk - naturally dairy-free, nutrient-rich, and deliciously refreshing.",
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
    title: "Kunaya | Organic Tiger Nut Milk",
    description: "Experience the authentic taste of West African tiger nut milk - naturally dairy-free, nutrient-rich, and deliciously refreshing.",
    url: 'https://kunaya.vercel.app',
    siteName: 'Kunaya',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/footer_logo.png',
        width: 150,
        height: 150,
        alt: 'Kunaya Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kunaya | Organic Tiger Nut Milk",
    description: "Experience the authentic taste of West African tiger nut milk - naturally dairy-free and nutrient-rich.",
    images: ['/footer_logo.png'],
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
          <AccessibilityProvider>
            {/* Skip link for screen readers and keyboard users */}
            <a href="#main-content" className="sr-only focus-visible:not(.sr-only) focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:p-4 focus-visible:bg-white focus-visible:text-black focus-visible:outline-2 focus-visible:outline-kunaya-green focus-visible:rounded-md">
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>{children}</main>
            <Footer />
            <SpeedInsights />
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

