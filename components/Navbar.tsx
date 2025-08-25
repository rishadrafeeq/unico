'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/#industries' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    // Handle the anchor link case
    if (href === '/#industries') return pathname === '/' || pathname === '/#industries'
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed left-0 right-0 top-2 sm:top-3 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px]" style={{background:'linear-gradient(90deg, rgba(124,58,237,0.0) 0%, rgba(124,58,237,0.6) 50%, rgba(124,58,237,0.0) 100%)'}} />
          <div className="flex justify-between items-center h-12 sm:h-14 px-2.5 sm:px-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/nav-icon.png" 
                alt="UNICO Logo" 
                width={120} 
                height={40} 
                priority 
                className="h-7 sm:h-8 w-auto" 
              />
            </Link>
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-6">
                {navigation.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className={`group relative font-medium transition-colors duration-200 text-sm sm:text-base ${isActive(item.href) ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                  >
                    {item.name}
                    {item.name !== 'Home' && (
                      <span className={`pointer-events-none absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 transition-all duration-300 ${isActive(item.href) ? 'w-6 opacity-100' : 'group-hover:w-6 opacity-100'}`}></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-3 py-1.5 text-white text-sm font-medium hover:bg-purple-700 transition-colors">
                Contact Us <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="md:hidden">
              <button 
                type="button" 
                className="text-gray-300 hover:text-white transition-colors duration-200" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? 'text-white bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="mt-1 block px-3 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}