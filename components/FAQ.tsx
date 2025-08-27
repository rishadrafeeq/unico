'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <section className="bg-black py-20 lg:py-28">
      <div className="container-custom">
        
        {/* FAQs Button */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-flex rounded-full bg-gray-800 text-gray-300 px-4 py-2 text-sm font-medium cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#374151"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            FAQs
          </motion.span>
        </motion.div>
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            We're here to help
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            FAQs designed to provide the information you need.
          </p>
        </motion.div>
        
        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -2,
                borderColor: "rgb(147, 51, 234, 0.3)",
                boxShadow: "0 4px 20px rgba(147, 51, 234, 0.1)"
              }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-white font-medium text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0,
                    scale: openIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="px-6 pb-5"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.p 
                      className="text-gray-300 leading-relaxed text-base"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
