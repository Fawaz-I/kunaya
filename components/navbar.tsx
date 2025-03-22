"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Handle screen resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    
    // Initial check
    checkScreenSize()
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home", delay: "50ms" },
    { href: "/shop", label: "Shop", delay: "100ms" },
    { href: "/our-story", label: "Our Story", delay: "200ms" },
    { href: "/benefits", label: "Benefits", delay: "300ms" },
    { href: "/impact", label: "Impact", delay: "400ms" },
    { href: "/contact", label: "Contact", delay: "500ms" },
  ]

  return (
    <header className="bg-[#ffffff] py-4 absolute top-0 left-0 right-0 z-50 animate-fade-in-down">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Desktop Navigation */}
        <div className="flex-1 flex justify-start">
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href} className={`animate-fade-in-down [animation-delay:${link.delay}]`}>
                  <Link href={link.href} className="text-[#374151] hover:text-kunaya-green transition-colors duration-300 hover:scale-110 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Button */}
          <button 
            className="lg:hidden hamburger-button p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-kunaya-green"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 transform top-6 animate-fade-in">
          <Link href="/">
            <div className="h-[130px] w-[130px] hover:scale-110 transition-transform duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kunaya-09iw5HZOv8oPkTq7NfgOyT6U8poDG0.png"
                alt="Kunaya Logo"
                width={130}
                height={130}
                className="max-h-[130px] max-w-[130px]"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="flex-1 flex justify-end animate-fade-in-down [animation-delay:600ms]">
          <Link href="/cart" className="inline-block text-[#1d1d1b] hover:text-kunaya-orange transition-colors duration-300 hover:scale-110 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM19 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM21 6H7.8l-.4-2H3v2h3.18L8.6 18H19v-2h-9l-.4-2H19l2-8z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-24 mobile-menu lg:hidden overflow-y-auto">
          <div className="container mx-auto px-4">
            <nav className="mt-8">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <li key={link.href} className="border-b border-gray-100 pb-4">
                    <Link 
                      href={link.href} 
                      className="text-xl font-medium text-[#374151] hover:text-kunaya-green transition-colors duration-300 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-gray-100 pb-4">
                  <Link 
                    href="/cart" 
                    className="text-xl font-medium text-[#374151] hover:text-kunaya-green transition-colors duration-300 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2">Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM19 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM21 6H7.8l-.4-2H3v2h3.18L8.6 18H19v-2h-9l-.4-2H19l2-8z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
