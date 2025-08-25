"use client"

import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <motion.div 
<<<<<<< HEAD
          className="text-center mb-8"
=======
          className="text-center mb-6"
>>>>>>> c6926bc (Updated testimonial section UI)
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
<<<<<<< HEAD
          className="text-center mb-12 sm:mb-16"
=======
          className="text-center mb-8 sm:mb-10"
>>>>>>> c6926bc (Updated testimonial section UI)
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Maximize efficiency and impact
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
=======
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Maximize efficiency and impact
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
>>>>>>> c6926bc (Updated testimonial section UI)
            Discover the key benefits of partnering with us.
          </p>
        </motion.div>
        
        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Smart Cost Efficiency */}
          <motion.div 
<<<<<<< HEAD
            className="relative bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-purple-950/90 rounded-xl p-6 sm:p-8 overflow-hidden border border-purple-800/30"
=======
            className="relative rounded-xl p-4 sm:p-5 overflow-hidden border border-white/10 bg-black/80 shadow-[0_8px_24px_rgba(17,17,26,0.12)]"
>>>>>>> c6926bc (Updated testimonial section UI)
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
<<<<<<< HEAD
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-900/40 rounded-xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-40 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 90% at 85% 50%, rgba(124,58,237,0.9) 0%, rgba(124,58,237,0.4) 40%, rgba(124,58,237,0) 70%)',
                filter: 'blur(28px)'
              }}
            />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-md flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> c6926bc (Updated testimonial section UI)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              
<<<<<<< HEAD
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Smart Cost Efficiency</h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
=======
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Smart Cost Efficiency</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
>>>>>>> c6926bc (Updated testimonial section UI)
                Streamline tech, design, and management processes to reduce overhead and boost resource utilization.
              </p>
            </div>
          </motion.div>
          
          {/* Better Business Impact */}
          <motion.div 
<<<<<<< HEAD
            className="relative bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-purple-950/90 rounded-xl p-6 sm:p-8 overflow-hidden border border-purple-800/30"
=======
            className="relative rounded-xl p-4 sm:p-5 overflow-hidden border border-white/10 bg-black/80 shadow-[0_8px_24px_rgba(17,17,26,0.12)]"
>>>>>>> c6926bc (Updated testimonial section UI)
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
<<<<<<< HEAD
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-900/40 rounded-xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-40 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 90% at 85% 50%, rgba(124,58,237,0.9) 0%, rgba(124,58,237,0.4) 40%, rgba(124,58,237,0) 70%)',
                filter: 'blur(28px)'
              }}
            />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-md flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> c6926bc (Updated testimonial section UI)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
<<<<<<< HEAD
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Better Business Impact</h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
=======
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Better Business Impact</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
>>>>>>> c6926bc (Updated testimonial section UI)
                Apply data-backed strategies and creative solutions to elevate performance across software, portfolios, and spaces.
              </p>
            </div>
          </motion.div>
          
          {/* Productivity Unleashed */}
          <motion.div 
<<<<<<< HEAD
            className="relative bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-purple-950/90 rounded-xl p-6 sm:p-8 overflow-hidden border border-purple-800/30 sm:col-span-2 lg:col-span-1"
=======
            className="relative rounded-xl p-4 sm:p-5 overflow-hidden border border-white/10 bg-black/80 shadow-[0_8px_24px_rgba(17,17,26,0.12)] sm:col-span-2 lg:col-span-1"
>>>>>>> c6926bc (Updated testimonial section UI)
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
<<<<<<< HEAD
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-900/40 rounded-xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black bg-opacity-40 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 90% at 85% 50%, rgba(124,58,237,0.9) 0%, rgba(124,58,237,0.4) 40%, rgba(124,58,237,0) 70%)',
                filter: 'blur(28px)'
              }}
            />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-md flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> c6926bc (Updated testimonial section UI)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
<<<<<<< HEAD
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Productivity Unleashed</h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
=======
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Productivity Unleashed</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
>>>>>>> c6926bc (Updated testimonial section UI)
                Automate tasks, refine workflows, and accelerate delivery to maximize output across all service areas.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
} 