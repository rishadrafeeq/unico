import Button from '@/components/Button'
import SectionTitle from '@/components/SectionTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Management - Unico',
  description: 'Professional portfolio management services to optimize your investments and financial growth.',
}

export default function PortfolioManagement() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Portfolio Management"
          subtitle="Strategic investment solutions for sustainable growth"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Investment Strategies</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Growth Portfolio</h4>
                <p className="text-gray-600">Focus on capital appreciation through carefully selected growth stocks and emerging market opportunities.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Income Portfolio</h4>
                <p className="text-gray-600">Generate steady income through dividend-paying stocks, bonds, and income-generating assets.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Balanced Portfolio</h4>
                <p className="text-gray-600">Optimize risk-return balance through diversified asset allocation and strategic rebalancing.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">→</span>
                <span className="text-gray-600">Comprehensive risk assessment and profiling</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">→</span>
                <span className="text-gray-600">Personalized investment strategy development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">→</span>
                <span className="text-gray-600">Continuous monitoring and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">→</span>
                <span className="text-gray-600">Regular performance reporting and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">→</span>
                <span className="text-gray-600">Tax-efficient investment structuring</span>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h4 className="font-semibold mb-3 text-primary-900">Why Choose Our Management?</h4>
              <p className="text-primary-800">
                Our data-driven approach combined with years of market experience ensures your 
                portfolio is positioned for both growth and protection in any market condition.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button href="/contact" variant="primary">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  )
} 