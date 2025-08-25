"use client"

import { motion } from "framer-motion"

export default function Features() {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
            Benefits
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Maximize efficiency and impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the key benefits of partnering with us.
          </p>
        </motion.div>
        
        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Smart Cost Efficiency */}
          <motion.div
            className="relative bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-purple-950/90 rounded-xl p-6 sm:p-8 overflow-hidden border border-purple-800/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-900/40 rounded-xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-40 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Smart Cost Efficiency</h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Streamline tech, design, and management processes to reduce overhead and boost resource utilization.
              </p>
            </div>
          </motion.div>
          
          {/* Better Business Impact */}
          <motion.div
            className="relative bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-purple-950/90 rounded-xl p-6 sm:p-8 overflow-hidden border border-purple-800/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-900/40 rounded-xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-40 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Better Business Impact</h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Apply data-backed strategies and creative solutions to elevate performance across software, portfolios, and spaces.
              </p>
            </div>
          </motion.div>
          
          {/* Productivity Unleashed */}
          <motion.div
            className="relative bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-purple-950/90 rounded-xl p-6 sm:p-8 overflow-hidden border border-purple-800/30 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-900/40 rounded-xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-40 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Productivity Unleashed</h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Automate tasks, refine workflows, and accelerate delivery to maximize output across all service areas.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
