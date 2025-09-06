'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#who-we-are' },
  { name: 'Services', href: '/#services' },
  { name: 'Industries', href: '/#vision' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href === '/#who-we-are') return pathname === '/' || pathname === '/#who-we-are'
    if (href === '/#services') return pathname === '/' || pathname === '/#services'
    if (href === '/#vision') return pathname === '/' || pathname === '/#vision'
    if (href === '/#contact') return pathname === '/' || pathname === '/#contact'
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="UNICO Logo" 
              width={120} 
              height={40} 
              priority 
              className="h-10 w-auto" 
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`font-medium transition-colors duration-200 text-sm ${
                  isActive(item.href) ? 'text-white font-semibold' : 'text-white hover:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-1.5 rounded-md bg-purple-600 px-3 py-1.5 text-white text-sm font-medium hover:bg-purple-700 transition-all duration-200"
            >
              Contact Us <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button 
              type="button" 
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href) ? 'text-white bg-gray-800/50' : 'text-white hover:text-gray-300 hover:bg-gray-700/50'
                  }`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link 
                  href="/#contact" 
                  className="block px-3 py-3 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition-all duration-200" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}