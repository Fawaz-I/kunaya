import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="bg-[#ffffff] py-4 absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex-1 flex justify-start">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/shop" className="text-[#374151] hover:text-[#73c9db]">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-[#374151] hover:text-[#73c9db]">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-[#374151] hover:text-[#73c9db]">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-[#374151] hover:text-[#73c9db]">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#374151] hover:text-[#73c9db]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 transform top-6">
          <Link href="/">
            <div className="h-[130px] w-[130px]">
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

        <div className="flex-1 flex justify-end">
          <Link href="/cart" className="inline-block text-[#1d1d1b]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM19 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM21 6H7.8l-.4-2H3v2h3.18L8.6 18H19v-2h-9l-.4-2H19l2-8z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
