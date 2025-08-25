<<<<<<< HEAD
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
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-18 4xl:mb-20">
          <span className="bg-gray-800 text-gray-300 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 2xl:px-8 2xl:py-4 3xl:px-9 3xl:py-4.5 4xl:px-10 4xl:py-5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-medium">
            FAQs
          </span>
        </div>
        
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 3xl:mb-16 4xl:mb-18">
            We're here to help
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto">
            FAQs designed to provide the information you need.
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl 3xl:max-w-10xl 4xl:max-w-none mx-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8 3xl:space-y-9 4xl:space-y-10">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 3xl:px-16 4xl:px-18 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-9 3xl:py-10 4xl:py-11 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                  {faq.question}
                </span>
                <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 3xl:w-10 3xl:h-10 4xl:w-11 4xl:h-11 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 3xl:px-16 4xl:px-18 pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 2xl:pb-9 3xl:pb-10 4xl:pb-11">
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
                    {faq.answer}
                  </p>
=======
"use client";
import { useState } from "react";

const faqs = [
  { question: "What services does Unico offer?", answer: "Unico provides a range of services including AI development, automation solutions, and digital transformation consulting." },
  { question: "How do you manage and deliver projects?", answer: "We follow an agile methodology with clear milestones, regular updates, and collaborative tools to ensure smooth project delivery." },
  { question: "What industries have you worked with?", answer: "We have worked with industries such as finance, healthcare, retail, logistics, and technology." },
  { question: "How do you handle project confidentiality?", answer: "We prioritize confidentiality with NDAs, secure infrastructure, and strict data protection policies." },
  { question: "How do I get started with Unico?", answer: "You can start by contacting us via our website or email. We’ll schedule a consultation to understand your needs." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <button className="px-4 py-1 border rounded-lg text-sm mb-6 opacity-70">
          FAQs
        </button>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">We’re here to help</h2>
        <p className="text-gray-400 mb-12">
          FAQs designed to provide the information you need.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0f0f] to-[#000] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-medium"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
>>>>>>> c6926bc (Updated testimonial section UI)
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
<<<<<<< HEAD
  )
} 
=======
  );
}
>>>>>>> c6926bc (Updated testimonial section UI)
