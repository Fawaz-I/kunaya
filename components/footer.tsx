import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";
import NewsletterSignup from "./newsletter-signup";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-12" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold" id="footer-brand">Kunaya</h3>
            <p className="text-white/80">Nourishing traditions, sustainable future.</p>
            <div className="mt-4">
              <div className="relative w-32 h-32">
                <Image 
                  src="/footer_logo.png" 
                  alt="Kunaya Logo - Tiger Nut Milk Brand" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 128px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Shop section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" id="footer-shop">Shop</h3>
            <nav className="flex flex-col space-y-2" aria-labelledby="footer-shop">
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
            <h3 className="text-lg font-semibold" id="footer-about">About</h3>
            <nav className="flex flex-col space-y-2" aria-labelledby="footer-about">
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
            <h3 className="text-lg font-semibold" id="footer-social">Follow Us</h3>
            <div className="flex space-x-3" aria-labelledby="footer-social">
              <a href="https://www.instagram.com/taste.kunaya/" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              {/* Facebook and Twitter pages not available yet */}
              <a href="#" className="text-white/50 cursor-not-allowed" aria-label="Facebook (coming soon)">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/50 cursor-not-allowed" aria-label="Twitter (coming soon)">
                <Twitter size={20} />
              </a>
            </div>
            
            {/* Newsletter signup */}
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2" id="footer-newsletter">Join our newsletter</h4>
              <NewsletterSignup variant="inline" aria-labelledby="footer-newsletter" />
            </div>
            
            {/* Pattern images - decorative only */}
            <div className="mt-6 flex space-x-2" aria-hidden="true">
              <div className="relative w-16 h-16">
                <Image 
                  src="/pattern.png" 
                  alt="" 
                  fill 
                  sizes="64px"
                  className="object-contain"
                  role="presentation"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image 
                  src="/pattern.png" 
                  alt="" 
                  fill 
                  sizes="64px"
                  className="object-contain"
                  role="presentation"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image 
                  src="/pattern.png" 
                  alt="" 
                  fill 
                  sizes="64px"
                  className="object-contain"
                  role="presentation"
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
