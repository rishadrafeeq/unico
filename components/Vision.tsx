"use client"

import { motion } from "framer-motion"

export default function Vision() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="container-custom">
        
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            To revolutionize the digital landscape by empowering businesses with cutting-edge AI solutions that drive innovation and growth.
          </p>
        </motion.div>

        {/* Vision Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Innovation Pillar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300">
              Pioneering next-generation AI solutions that transform industries and create new possibilities.
            </p>
          </motion.div>

          {/* Excellence Pillar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
            <p className="text-gray-300">
              Delivering unparalleled quality and performance in every solution we create for our clients.
            </p>
          </motion.div>

          {/* Growth Pillar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
            <p className="text-gray-300">
              Empowering businesses to scale new heights through strategic digital transformation.
            </p>
          </motion.div>

        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your business with AI?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
            Start Your Journey
          </button>
        </motion.div>

      </div>
    </section>
  )
}