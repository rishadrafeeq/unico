'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
<<<<<<< HEAD

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Plans', href: '/plans' },
  { name: 'Contact', href: '/contact' },
=======
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/#industries' },
>>>>>>> c6926bc (Updated testimonial section UI)
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">U</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">UNICO</span>
=======
    <nav className="fixed left-0 right-0 top-2 sm:top-3 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* bottom purple glow line */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px]" style={{background:'linear-gradient(90deg, rgba(124,58,237,0.0) 0%, rgba(124,58,237,0.6) 50%, rgba(124,58,237,0.0) 100%)'}} />

          <div className="flex justify-between items-center h-12 sm:h-14 px-2.5 sm:px-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/nav-icon.png"
              alt="UNICO Logo"
              width={120}
              height={40}
              priority
              className="h-7 sm:h-8 w-auto"
            />
>>>>>>> c6926bc (Updated testimonial section UI)
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
<<<<<<< HEAD
            <div className="flex items-center space-x-8">
=======
            <div className="flex items-center space-x-6">
>>>>>>> c6926bc (Updated testimonial section UI)
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
                  className={`font-medium transition-colors duration-200 text-base sm:text-lg ${
=======
                  className={`group relative font-medium transition-colors duration-200 text-sm sm:text-base ${
>>>>>>> c6926bc (Updated testimonial section UI)
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
<<<<<<< HEAD
=======
                  {item.name !== 'Home' && (
                    <span className={`pointer-events-none absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 transition-all duration-300 ${isActive(item.href) ? 'w-6 opacity-100' : 'group-hover:w-6 opacity-100'}`}></span>
                  )}
>>>>>>> c6926bc (Updated testimonial section UI)
                </Link>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Spacer to balance the layout */}
          <div className="hidden md:block w-32 sm:w-40">
            {/* This div balances the layout by taking up the same space as the logo */}
=======
          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-3 py-1.5 text-white text-sm font-medium hover:bg-purple-700 transition-colors">
              Contact Us <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
>>>>>>> c6926bc (Updated testimonial section UI)
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
<<<<<<< HEAD
                className="h-6 w-6"
=======
                className="h-5 w-5"
>>>>>>> c6926bc (Updated testimonial section UI)
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
                />
              </svg>
            </button>
          </div>
<<<<<<< HEAD
=======
          </div>
>>>>>>> c6926bc (Updated testimonial section UI)
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
<<<<<<< HEAD
          <div className="md:hidden border-t border-gray-700 bg-black bg-opacity-95 backdrop-blur-md">
=======
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl">
>>>>>>> c6926bc (Updated testimonial section UI)
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
=======
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
>>>>>>> c6926bc (Updated testimonial section UI)
                    isActive(item.href)
                      ? 'text-white bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
<<<<<<< HEAD
=======
              <Link
                href="/contact"
                className="mt-1 block px-3 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
>>>>>>> c6926bc (Updated testimonial section UI)
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 