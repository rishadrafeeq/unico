import Button from '@/components/Button'
import SectionTitle from '@/components/SectionTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Consulting - Unico',
  description: 'Strategic AI consulting services to help businesses leverage artificial intelligence for competitive advantage.',
}

export default function AIConsulting() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="AI Consulting"
          subtitle="Harness the power of artificial intelligence for your business"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">AI Solutions</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 text-red-900">Machine Learning</h4>
                <p className="text-red-800">Develop custom ML models to automate processes, predict outcomes, and optimize operations.</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 text-blue-900">Natural Language Processing</h4>
                <p className="text-blue-800">Implement chatbots, sentiment analysis, and document processing solutions.</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 text-orange-900">Computer Vision</h4>
                <p className="text-orange-800">Deploy image recognition, quality control, and visual inspection systems.</p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 text-green-900">AI Strategy</h4>
                <p className="text-green-800">Develop comprehensive AI roadmaps aligned with your business objectives.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Implementation Process</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Assessment & Strategy</h4>
                  <p className="text-gray-600">Evaluate your current state and identify AI opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Data Preparation</h4>
                  <p className="text-gray-600">Clean, organize, and prepare your data for AI implementation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Model Development</h4>
                  <p className="text-gray-600">Build and train custom AI models tailored to your needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-semibold mb-2">Integration & Deployment</h4>
                  <p className="text-gray-600">Seamlessly integrate AI solutions into your existing systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h4 className="font-semibold mb-2">Monitoring & Optimization</h4>
                  <p className="text-gray-600">Continuous monitoring and improvement of AI performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary-900">Ready to Transform Your Business with AI?</h3>
            <p className="text-primary-800 mb-6">
              Join the AI revolution and stay ahead of the competition with our expert consulting services.
            </p>
            <Button href="/contact" variant="primary">
              Schedule AI Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 