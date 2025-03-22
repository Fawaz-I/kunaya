import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";
import NewsletterSignup from "./newsletter-signup";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Kunaya</h3>
            <p className="text-white/80">Nourishing traditions, sustainable future.</p>
            <div className="mt-4">
              <div className="relative w-32 h-32">
                <Image 
                  src="/footer_logo.png" 
                  alt="Kunaya Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Shop section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/products" className="text-white/80 hover:text-white transition-colors">
                All Products
              </Link>
              <Link href="/subscriptions" className="text-white/80 hover:text-white transition-colors">
                Subscriptions
              </Link>
              <Link href="/gift-cards" className="text-white/80 hover:text-white transition-colors">
                Gift Cards
              </Link>
            </nav>
          </div>

          {/* About section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/our-story" className="text-white/80 hover:text-white transition-colors">
                Our Story
              </Link>
              <Link href="/impact" className="text-white/80 hover:text-white transition-colors">
                Impact
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Follow Us section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="https://instagram.com" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:opacity-80 transition-opacity" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
            
            {/* Newsletter signup */}
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2">Join our newsletter</h4>
              <NewsletterSignup variant="inline" />
            </div>
            
            {/* Pattern images */}
            <div className="mt-6 flex space-x-2">
              <div className="relative w-16 h-16">
                <Image 
                  src="/pattern.png" 
                  alt="Decorative pattern" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image 
                  src="/pattern.png" 
                  alt="Decorative pattern" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image 
                  src="/pattern.png" 
                  alt="Decorative pattern" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-500/30">
          <div className="text-center">
            <p className="text-white/80 text-sm">© {new Date().getFullYear()} Kunaya. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
