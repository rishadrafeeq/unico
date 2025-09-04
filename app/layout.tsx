import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
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

export const metadata: Metadata = {
  title: 'Unico - Software Development & Business Solutions',
  description:
    'Professional software development, portfolio management, interior design, data insights, and AI consulting services.',
  keywords: 'software development, portfolio management, interior design, data insights, AI consulting',
  authors: [{ name: 'Unico Team' }],
  openGraph: {
    title: 'Unico - Software Development & Business Solutions',
    description:
      'Professional software development, portfolio management, interior design, data insights, and AI consulting services.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} scroll-smooth`}>
        <Navbar />
        <main className="pt-14 sm:pt-16 relative z-10">{children}</main>
        <CursorGlow />
        <Footer />
      </body>
    </html>
  )
}
