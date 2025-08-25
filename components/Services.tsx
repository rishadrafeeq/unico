"use client"

import { motion } from 'framer-motion'

export default function Services() {
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
            Services
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
            Innovative services for growth
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored solutions to streamline, innovate, and grow.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="w-full">
          {/* Top Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Software Development */}
            <motion.div 
              className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Terminal Mockup */}
              <motion.div 
                className="bg-gray-800 rounded-lg p-4 mb-6 h-32 sm:h-36 relative overflow-hidden"
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
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-green-400 text-sm">$</span>
                    <div className="h-2 bg-gray-600 rounded w-24 sm:w-32"></div>
                  </motion.div>
                  <motion.div 
                    className="ml-4 space-y-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 bg-gray-700 rounded w-32 sm:w-40"></div>
                    <div className="h-2 bg-gray-700 rounded w-28 sm:w-36"></div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-green-400 text-sm">$</span>
                    <div className="h-2 bg-gray-600 rounded w-16 sm:w-24"></div>
                  </motion.div>
                  <motion.div 
                    className="ml-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 bg-purple-500 rounded w-24 sm:w-32"></div>
                  </motion.div>
                </div>
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Software Development</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Build robust applications with custom software that automates, streamlines, and elevates your operations.
              </p>
            </motion.div>
            
            {/* Portfolio Management */}
            <motion.div 
              className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Content Generation Mockup */}
              <motion.div 
                className="bg-gray-800 rounded-lg p-4 mb-6 h-32 sm:h-36 relative overflow-hidden"
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
                <motion.div 
                  className="flex items-center space-x-2 mb-3"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-gray-400 text-sm">Generate content...</span>
                </motion.div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((index) => (
                      <motion.div 
                        key={index}
                        className="bg-gray-700 rounded p-2 h-12 sm:h-14"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="h-2 bg-gray-600 rounded mb-1"></div>
                        <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div 
                    className="text-center mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <motion.button 
                      className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Generate
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Portfolio Management</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Effectively organize your assets with automated tools and efficient 
                technology for seamless business goals.
              </p>
            </motion.div>
            
          </div>
          
          {/* Bottom Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Interior Design */}
            <motion.div 
              className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* User Profile Mockup */}
              <motion.div 
                className="bg-gray-800 rounded-lg p-4 mb-6 h-32 sm:h-36 relative overflow-hidden"
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
                <motion.div 
                  className="flex items-center space-x-2 mb-3"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white text-sm font-bold">JD</span>
                  </motion.div>
                  <div>
                    <div className="text-white text-sm font-medium">Jack Daniel</div>
                    <div className="text-gray-400 text-xs">Designer</div>
                  </div>
                </motion.div>
                <div className="space-y-1">
                  <motion.div 
                    className="flex items-center justify-between text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-400">Email</span>
                    <span className="text-white">jack@example.com</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-400">Phone</span>
                    <span className="text-white">+1 234 567 890</span>
                  </motion.div>
                  <motion.div 
                    className="mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <motion.button 
                      className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm w-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Generate Leads
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Interior Design</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Transform your spaces with thoughtful designs that enhance visual appeal and 
                functionality to meet your needs.
              </p>
            </motion.div>
            
            {/* Data Insights */}
            <motion.div 
              className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Analytics Dashboard Mockup */}
              <motion.div 
                className="bg-gray-800 rounded-lg p-4 mb-6 h-32 sm:h-36 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <motion.div 
                  className="grid grid-cols-2 gap-2 mb-3"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-gray-700 rounded p-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xs text-gray-400 mb-1">Work Efficiency</div>
                    <div className="text-white font-bold text-sm">+23%</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-700 rounded p-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xs text-gray-400 mb-1">Overall</div>
                    <div className="text-white font-bold text-sm">48.9%</div>
                  </motion.div>
                </motion.div>
                <div className="space-y-1">
                  <motion.div 
                    className="flex items-center justify-between text-xs"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-400">Filters</span>
                    <span className="text-gray-400">Work Efficiency</span>
                  </motion.div>
                  <motion.div 
                    className="space-y-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-1 bg-gray-600 rounded"></div>
                    <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                    <motion.div 
                      className="h-1 bg-blue-500 rounded w-1/2"
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 1, delay: 1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                </div>
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Data Insights</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Extract actionable insights from complex data sets to drive informed decisions 
                and accelerate business growth.
              </p>
            </motion.div>
            
            {/* AI Consulting */}
            <motion.div 
              className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800 sm:col-span-2 md:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* AI Dashboard Mockup */}
              <motion.div 
                className="bg-gray-800 rounded-lg p-4 mb-6 h-32 sm:h-36 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  {[
                    { color: "green", text: "On-Call", status: "gray" },
                    { color: "blue", text: "File-Crt", status: "gray" },
                    { color: "purple", text: "Frontend", status: "gray" },
                    { color: "red", text: "Common-Crn", status: "red" },
                    { color: "yellow", text: "Frontend", status: "gray" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></div>
                      <span className="text-gray-400 text-xs">{item.text}</span>
                      <div className="ml-auto">
                        <div className={`w-6 h-6 bg-${item.status}-${item.status === "red" ? "600" : "700"} rounded-full`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">AI Consulting</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Work with our experts to develop personalized AI strategies that streamline 
                operations and deliver impactful results.
              </p>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  )
} 