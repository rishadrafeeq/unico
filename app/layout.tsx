import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
<<<<<<< HEAD
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
=======
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const CursorGlow = dynamic(() => import('@/components/CursorGlow'), { ssr: false })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})
>>>>>>> c6926bc (Updated testimonial section UI)

export const metadata: Metadata = {
  title: 'Unico - Software Development & Business Solutions',
  description: 'Professional software development, portfolio management, interior design, data insights, and AI consulting services.',
  keywords: 'software development, portfolio management, interior design, data insights, AI consulting',
  authors: [{ name: 'Unico Team' }],
  openGraph: {
    title: 'Unico - Software Development & Business Solutions',
    description: 'Professional software development, portfolio management, interior design, data insights, and AI consulting services.',
    type: 'website',
  },
<<<<<<< HEAD
  viewport: 'width=device-width, initial-scale=1',
=======
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
>>>>>>> c6926bc (Updated testimonial section UI)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
<<<<<<< HEAD
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar />
        <main className="pt-16 sm:pt-20">{children}</main>
=======
      <body className={`${poppins.className} scroll-smooth`}> 
        <Navbar />
        <main className="pt-16 sm:pt-20 relative z-10">{children}</main>
        <CursorGlow />
>>>>>>> c6926bc (Updated testimonial section UI)
        <Footer />
      </body>
    </html>
  )
} 