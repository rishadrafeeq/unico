<<<<<<< HEAD
"use client"

import { motion } from 'framer-motion'

export default function ContactForm() {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800 w-full">
      {/* Form Header */}
      <motion.div 
        className="text-center mb-6 lg:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="bg-gray-800 text-gray-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
          whileHover={{ scale: 1.05 }}
        >
          Get In Touch
        </motion.span>
      </motion.div>

      {/* Form Title */}
      <motion.div 
        className="mb-6 lg:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4 leading-tight">
          Send us a
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Message
          </span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
          We'd love to hear from you. Tell us about your project.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form 
        className="space-y-4 sm:space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all duration-300 hover:border-gray-600 text-sm sm:text-base"
          />
        </motion.div>
        
        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all duration-300 hover:border-gray-600 text-sm sm:text-base"
          />
        </motion.div>
        
        {/* Subject Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
            Subject
          </label>
          <input
            type="text"
            placeholder="What's this about?"
            className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all duration-300 hover:border-gray-600 text-sm sm:text-base"
          />
        </motion.div>
        
        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your project, questions, or how we can help you..."
            className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all duration-300 hover:border-gray-600 resize-none text-sm sm:text-base"
          ></textarea>
        </motion.div>
        
        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-sm sm:text-base"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Send Message</span>
              <motion.svg 
                className="w-4 h-4 sm:w-5 sm:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </motion.form>

      {/* Form Footer */}
      <motion.div 
        className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-gray-400 text-xs sm:text-sm">
          We typically respond within 24 hours
        </p>
      </motion.div>
    </div>
  )
} 
=======
"use client";
import React from "react";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div>
          <button className="px-4 py-1 border rounded-lg text-sm mb-6 opacity-70">
            Contacts
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Ask whatever you have in <br /> your mind
          </h1>
          <p className="text-gray-400 mb-8">
            Whether you have questions or are ready to discuss your business,
            we’re here to help. Reach out today.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <span className="text-lg">✉️</span>
              <span>admin@raddision.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <span>(969) 819-8061</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📍</span>
              <span>43 Roselle St. New York</span>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-gradient-to-b from-[#0f0f0f] to-[#000] p-6 rounded-2xl shadow-lg">
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-transparent focus:border-purple-500 outline-none text-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="jane@framer.com"
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-transparent focus:border-purple-500 outline-none text-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                placeholder="Hi, I am reaching out for..."
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-transparent focus:border-purple-500 outline-none text-gray-300 h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
>>>>>>> c6926bc (Updated testimonial section UI)
