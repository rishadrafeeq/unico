import FAQ from '@/components/FAQ'
import SectionTitle from '@/components/SectionTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Unico',
  description: 'Frequently asked questions about our services and how we can help your business.',
}

export default function FAQPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services"
        />
        
        <div className="mt-16">
          <FAQ />
        </div>
      </div>
    </div>
  )
} 