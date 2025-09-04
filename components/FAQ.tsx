"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What are AI development services?",
    answer:
      "AI development services encompass the creation of intelligent systems that can automate tasks, analyze data, and make predictions. This includes machine learning models, natural language processing, computer vision, and custom AI solutions tailored to your business needs.",
  },
  {
    question: "What types of processes can be automated using AI?",
    answer:
      "AI can automate various processes including data entry, customer service through chatbots, inventory management, predictive maintenance, document processing, fraud detection, and personalized recommendations. We analyze your workflows to identify the best automation opportunities.",
  },
  {
    question: "How long does it take to implement AI automation?",
    answer:
      "Implementation timelines vary based on project complexity. Simple automation solutions can be deployed in 2-4 weeks, while complex AI systems may take 3-6 months. We provide detailed project timelines during the consultation phase.",
  },
  {
    question: "Will AI automation disrupt my current operations?",
    answer:
      "We design AI solutions to integrate seamlessly with your existing systems. Our phased implementation approach ensures minimal disruption, with thorough testing and employee training to ensure smooth transitions.",
  },
  {
    question: "How much does AI automation cost?",
    answer:
      "Costs vary based on project scope, complexity, and required features. We offer flexible pricing models including one-time development fees and subscription-based solutions. Contact us for a customized quote based on your specific requirements.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-28">
      <div className="container-custom">
        {/* FAQs Button */}
        <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
          <span className="inline-flex rounded-full bg-gray-800 text-gray-300 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium cursor-pointer hover:bg-gray-700 transition">
            FAQs
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            We're here to help
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            FAQs designed to provide the information you need.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-600/30 hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-all duration-300"
              >
                <span className="text-white font-medium text-sm sm:text-lg pr-2">{faq.question}</span>
              </button>

              {/* Answer (no height/opacity animation) */}
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
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
