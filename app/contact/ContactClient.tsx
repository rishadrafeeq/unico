"use client"

import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Ask whatever you have in your mind
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Whether you have questions or are ready to discuss your business, we're here to help. Reach out today.
            </p>
          </motion.div>

          {/* Contact grid */}
          <div className="max-w-7xl mx-auto px-4">
            {/* Contact cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Email */}
              <motion.div 
                className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:border-purple-500 transition-all duration-300 group shadow-sm"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-purple-200 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:admin@reddision.com" className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                  admin@reddision.com
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:border-purple-500 transition-all duration-300 group shadow-sm"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-purple-200 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+19098198061" className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                  (909) 819-8061
                </a>
              </motion.div>

              {/* Address */}
              <motion.div 
                className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:border-purple-500 transition-all duration-300 group shadow-sm"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-purple-200 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <div className="text-gray-700">
                  <div>43 Roselle St.</div>
                  <div>New York</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact form section */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  We're committed to providing exceptional service and would love to hear from you. 
                  Whether you have questions about our services or want to discuss a potential project, 
                  our team is ready to assist you.
                </p>

                <motion.div 
                  className="bg-purple-50 rounded-xl p-6 lg:p-8 border border-purple-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Response Time</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </motion.div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="order-1 lg:order-2 lg:sticky lg:top-8"
              >
                <ContactForm />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}