"use client"

import { motion } from 'framer-motion'

export default function Vision() {
  return (
<<<<<<< HEAD
    <section className="bg-black py-20 lg:py-32">
=======
    <section className="bg-black py-20 lg:py-28">
>>>>>>> c6926bc (Updated testimonial section UI)
      <div className="container-custom">
        
        {/* Section Label */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
=======
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
>>>>>>> c6926bc (Updated testimonial section UI)
            Process
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.div 
<<<<<<< HEAD
          className="text-center mb-16"
=======
          className="text-center mb-12"
>>>>>>> c6926bc (Updated testimonial section UI)
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering Vision, Delivering Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
=======
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Empowering Vision, Delivering Impact
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
>>>>>>> c6926bc (Updated testimonial section UI)
            A streamlined, smart approach to tech, design, and business solutions.
          </p>
        </motion.div>
        
        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Discovery & Strategize */}
          <motion.div 
<<<<<<< HEAD
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
=======
            className="rounded-2xl p-6 md:p-8 border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl"
>>>>>>> c6926bc (Updated testimonial section UI)
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Dashboard Mockup */}
            <motion.div 
              className="bg-gray-800 rounded-xl p-4 mb-6 h-40 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
                <motion.div 
                  className="w-16 h-16 bg-gray-700 rounded-full mx-auto mt-4 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-8 h-8 border-4 border-gray-600 border-t-blue-500 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
            
<<<<<<< HEAD
            <h3 className="text-xl font-semibold text-white mb-3">Discovery & Strategize</h3>
            <p className="text-gray-400 leading-relaxed">
=======
            <h3 className="text-lg font-semibold text-white mb-2">Discovery & Strategize</h3>
            <p className="text-white/70 leading-relaxed text-sm">
>>>>>>> c6926bc (Updated testimonial section UI)
              We align with your vision to craft tailored tech, design, or business strategies.
            </p>
          </motion.div>
          
          {/* Design, Develop & Refine */}
          <motion.div 
<<<<<<< HEAD
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
=======
            className="rounded-2xl p-6 md:p-8 border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl"
>>>>>>> c6926bc (Updated testimonial section UI)
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Dashboard Mockup */}
            <motion.div 
              className="bg-gray-800 rounded-xl p-4 mb-6 h-40 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2 h-20">
                <motion.div 
                  className="bg-gray-700 rounded p-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="h-2 bg-purple-500 rounded mb-1"></div>
                  <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                </motion.div>
                <motion.div 
                  className="bg-gray-700 rounded p-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="h-2 bg-green-500 rounded mb-1"></div>
                  <div className="h-1 bg-gray-600 rounded w-2/3"></div>
                </motion.div>
                <motion.div 
                  className="bg-gray-700 rounded p-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="h-2 bg-blue-500 rounded mb-1"></div>
                  <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                </motion.div>
                <motion.div 
                  className="bg-gray-700 rounded p-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="h-2 bg-yellow-500 rounded mb-1"></div>
                  <div className="h-1 bg-gray-600 rounded w-3/5"></div>
                </motion.div>
              </div>
            </motion.div>
            
<<<<<<< HEAD
            <h3 className="text-xl font-semibold text-white mb-3">Design, Develop & Refine</h3>
            <p className="text-gray-400 leading-relaxed">
=======
            <h3 className="text-lg font-semibold text-white mb-2">Design, Develop & Refine</h3>
            <p className="text-white/70 leading-relaxed text-sm">
>>>>>>> c6926bc (Updated testimonial section UI)
              We craft digital and interior solutions, refined through testing and creative iteration.
            </p>
          </motion.div>
          
          {/* Deliver & Elevate */}
          <motion.div 
<<<<<<< HEAD
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
=======
            className="rounded-2xl p-6 md:p-8 border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl"
>>>>>>> c6926bc (Updated testimonial section UI)
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Dashboard Mockup */}
            <motion.div 
              className="bg-gray-800 rounded-xl p-4 mb-6 h-40 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-400">Security</span>
                  </div>
                  <span className="text-xs text-green-400">Active</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-400">Backend</span>
                  </div>
                  <span className="text-xs text-blue-400">Running</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-xs text-gray-400">Frontend</span>
                  </div>
                  <span className="text-xs text-purple-400">Updating</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-400">Analytics</span>
                  </div>
                  <span className="text-xs text-yellow-400">Monitoring</span>
                </motion.div>
              </div>
            </motion.div>
            
<<<<<<< HEAD
            <h3 className="text-xl font-semibold text-white mb-3">Deliver & Elevate</h3>
            <p className="text-gray-400 leading-relaxed">
=======
            <h3 className="text-lg font-semibold text-white mb-2">Deliver & Elevate</h3>
            <p className="text-white/70 leading-relaxed text-sm">
>>>>>>> c6926bc (Updated testimonial section UI)
              We launch precisely and offer ongoing support to ensure lasting performance and growth.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
} 