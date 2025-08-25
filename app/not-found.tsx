import Button from '@/components/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section-padding min-h-screen flex items-center">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-8xl font-bold text-primary-600 mb-8">404</div>
          <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button href="/" variant="primary">
              Go Home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
          
          <div className="mt-12">
            <h3 className="font-semibold mb-4">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/about" className="text-primary-600 hover:underline">
                About Us
              </Link>
              <Link href="/services" className="text-primary-600 hover:underline">
                Our Services
              </Link>
              <Link href="/services/software-development" className="text-primary-600 hover:underline">
                Software Development
              </Link>
              <Link href="/services/ai-consulting" className="text-primary-600 hover:underline">
                AI Consulting
              </Link>
              <Link href="/faq" className="text-primary-600 hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 