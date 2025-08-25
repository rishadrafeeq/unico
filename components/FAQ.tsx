'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "What are AI development services?",
    answer: "AI development services encompass the creation of intelligent systems that can automate tasks, analyze data, and make predictions. This includes machine learning models, natural language processing, computer vision, and custom AI solutions tailored to your business needs."
  },
  {
    question: "What types of processes can be automated using AI?",
    answer: "AI can automate various processes including data entry, customer service through chatbots, inventory management, predictive maintenance, document processing, fraud detection, and personalized recommendations. We analyze your workflows to identify the best automation opportunities."
  },
  {
    question: "How long does it take to implement AI automation?",
    answer: "Implementation timelines vary based on project complexity. Simple automation solutions can be deployed in 2-4 weeks, while complex AI systems may take 3-6 months. We provide detailed project timelines during the consultation phase."
  },
  {
    question: "Will AI automation disrupt my current operations?",
    answer: "We design AI solutions to integrate seamlessly with your existing systems. Our phased implementation approach ensures minimal disruption, with thorough testing and employee training to ensure smooth transitions."
  },
  {
    question: "How much does AI automation cost?",
    answer: "Costs vary based on project scope, complexity, and required features. We offer flexible pricing models including one-time development fees and subscription-based solutions. Contact us for a customized quote based on your specific requirements."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36 4xl:py-40">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        
        {/* Section Label */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
          <span className="bg-gray-800 text-gray-300 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium">
            FAQs
          </span>
        </div>
        
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            We're here to help
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            FAQs designed to provide the information you need.
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-medium text-lg">
                  {faq.question}
                </span>
                <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
