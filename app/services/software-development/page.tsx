import Button from '@/components/Button'
import SectionTitle from '@/components/SectionTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Development - Unico',
  description: 'Custom software development solutions, web applications, mobile apps, and enterprise systems.',
}

export default function SoftwareDevelopment() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Software Development"
          subtitle="Custom solutions tailored to your business needs"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">What We Offer</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-2">Web Applications</h4>
                  <p className="text-gray-600">Modern, responsive web applications built with cutting-edge technologies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-2">Mobile Development</h4>
                  <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-2">Enterprise Systems</h4>
                  <p className="text-gray-600">Scalable enterprise solutions that grow with your business.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-2">API Development</h4>
                  <p className="text-gray-600">Robust APIs and microservices architecture for seamless integration.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="font-semibold mb-2">1. Discovery & Planning</h4>
                <p className="text-gray-600">We understand your requirements and create a detailed project roadmap.</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="font-semibold mb-2">2. Design & Prototyping</h4>
                <p className="text-gray-600">Create user-friendly designs and interactive prototypes.</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="font-semibold mb-2">3. Development & Testing</h4>
                <p className="text-gray-600">Agile development with continuous testing and quality assurance.</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-6">
                <h4 className="font-semibold mb-2">4. Deployment & Support</h4>
                <p className="text-gray-600">Seamless deployment with ongoing maintenance and support.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button href="/contact" variant="primary">
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  )
} 