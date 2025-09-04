"use client"

import { motion } from 'framer-motion'
import Button from './Button'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-16 sm:pb-20 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl sm:max-w-5xl mx-auto">
          {/* Top Label */}
          <motion.div
            className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/80 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-2 sm:px-0">AI Solutions for Business Automation</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering Ambitions.
            <br className="hidden sm:block" />
            <span className="block sm:inline">Building Global Legacies</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 leading-relaxed max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From cutting-edge software development to stunning interior designs and comprehensive portfolio management, we transform your vision into reality with innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              href="/#services" 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 sm:py-3 px-6 sm:px-8 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 shadow-lg"
            >
              <span className="inline-flex items-center gap-2">Our Services <ArrowUpRight className="w-4 h-4" /></span>
            </Button>
            <Button 
              href="/#contact" 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-white/20 text-white bg-transparent hover:bg-white/5 py-3 sm:py-3 px-6 sm:px-8 text-sm sm:text-base font-medium rounded-lg transition-all duration-200"
            >
              See Plans
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
