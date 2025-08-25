import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us - Unico',
  description: 'Get in touch with our team for a consultation about your project needs.',
}

export default function Contact() {
  return <ContactClient />
} 