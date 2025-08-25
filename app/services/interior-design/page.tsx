import Button from '@/components/Button'
import SectionTitle from '@/components/SectionTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Design - Unico',
  description: 'Professional interior design services for residential and commercial spaces.',
}

export default function InteriorDesign() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Interior Design"
          subtitle="Transform your space into something extraordinary"
        />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Design Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Residential Design</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Living rooms & bedrooms</li>
                  <li>• Kitchens & bathrooms</li>
                  <li>• Home offices</li>
                  <li>• Outdoor spaces</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Commercial Design</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Office spaces</li>
                  <li>• Retail environments</li>
                  <li>• Restaurants & hospitality</li>
                  <li>• Healthcare facilities</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">3D Visualization</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Realistic 3D renderings</li>
                  <li>• Virtual walk-throughs</li>
                  <li>• Material selection</li>
                  <li>• Lighting design</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Project Management</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Timeline coordination</li>
                  <li>• Vendor management</li>
                  <li>• Budget oversight</li>
                  <li>• Quality control</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Design Process</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Consultation</h4>
                  <p className="text-gray-600 text-sm">Understanding your vision, needs, and budget.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Concept</h4>
                  <p className="text-gray-600 text-sm">Creating mood boards and initial design concepts.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Design</h4>
                  <p className="text-gray-600 text-sm">Detailed plans, 3D renderings, and specifications.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <p className="text-gray-600 text-sm">Project management and quality oversight.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button href="/contact" variant="primary">
            Start Your Design Journey
          </Button>
        </div>
      </div>
    </div>
  )
} 