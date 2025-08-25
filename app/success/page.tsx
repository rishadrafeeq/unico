import Button from '@/components/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You - Unico',
  description: 'Thank you for contacting us. We will get back to you soon.',
}

export default function Success() {
  return (
    <div className="section-padding min-h-screen flex items-center">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We've received your message and will get back to you within 24 hours. 
            Our team is excited to learn more about your project and how we can help.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-4">What happens next?</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>We'll review your project requirements</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Schedule a consultation call to discuss details</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Provide a detailed proposal and timeline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 