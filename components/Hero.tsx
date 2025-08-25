"use client"

import { motion } from 'framer-motion'
import Button from './Button'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 md:pt-10 pb-12">
      {/* Diagonal purple band and vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 bottom-0 w-[140%] h-64 rotate-[-8deg] blur-2xl opacity-50" style={{background:'linear-gradient(90deg, rgba(76,29,149,0.2) 0%, rgba(124,58,237,0.45) 50%, rgba(76,29,149,0.2) 100%)'}} />
        <div className="absolute inset-0" style={{background:'radial-gradient(1200px 600px at 50% -10%, rgba(124,58,237,0.18), rgba(2,6,23,0))'}} />
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-16 left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-500 rounded-full opacity-20 blur-xl"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-16 right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-500 rounded-full opacity-20 blur-xl"
          animate={{ y: [20, -20, 20], x: [10, -10, 10], scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink-500 rounded-full opacity-15 blur-lg"
          animate={{ y: [-15, 15, -15], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Top Label */}
          <motion.div
            className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs sm:text-sm text-white/80 shadow-[0_0_40px_rgba(124,58,237,0.25)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            AI Solutions for Seamless Automation
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="mt-3 sm:mt-4 text-1xl sm:text-xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 sm:mb-6 md:mb-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>Empowering Ambitions.</motion.span>
            <br />
            <motion.span initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>Building Global Legacies</motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From software development and AI consulting to data insights, portfolio management, and interior design, we transform your vision into reality with innovative solutions across finance, healthcare, e-commerce, and technology industries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              href="/services" 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-tr from-purple-700 to-indigo-500 hover:from-purple-600 hover:to-indigo-500 text-white py-3 px-6 sm:px-8 text-sm sm:text-base rounded-lg transition-all duration-200 shadow-[0_10px_60px_rgba(124,58,237,0.35)]"
            >
              <span className="inline-flex items-center gap-2">Our Services <ArrowUpRight className="w-4 h-4" /></span>
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border border-white/10 text-white/90 bg-black/40 hover:bg-white/5 py-3 px-6 sm:px-8 text-sm sm:text-base rounded-lg transition-all duration-200"
            >
              See Plans
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
