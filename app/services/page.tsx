import { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Our Services - Unico',
  description: 'Comprehensive business solutions including software development, portfolio management, interior design, data insights, and AI consulting.',
}

export default function Services() {
  return <ServicesClient />
} 