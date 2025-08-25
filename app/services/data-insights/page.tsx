import Button from '@/components/Button'
import SectionTitle from '@/components/SectionTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Insights - Unico',
  description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
}

export default function DataInsights() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Data Insights"
          subtitle="Transform data into actionable business intelligence"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Analytics Solutions</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 text-indigo-900">Business Intelligence</h4>
                <p className="text-indigo-800">Comprehensive dashboards and reporting solutions that provide real-time visibility into your business performance.</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 text-emerald-900">Predictive Analytics</h4>
                <p className="text-emerald-800">Leverage machine learning to forecast trends, identify opportunities, and predict customer behavior.</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border">
                <h4 className="font-semibold mb-3 text-violet-900">Data Visualization</h4>
                <p className="text-violet-800">Transform complex data sets into clear, interactive visualizations that drive decision-making.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Improved decision-making with data-driven insights</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Increased operational efficiency and cost reduction</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Enhanced customer understanding and segmentation</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Risk identification and mitigation strategies</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Competitive advantage through market insights</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Industries We Serve</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>• E-commerce</div>
                <div>• Healthcare</div>
                <div>• Finance</div>
                <div>• Manufacturing</div>
                <div>• Retail</div>
                <div>• Technology</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary-900">Ready to unlock your data's potential?</h3>
            <p className="text-primary-800 mb-6">Let us help you turn your data into a competitive advantage.</p>
            <Button href="/contact" variant="primary">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 