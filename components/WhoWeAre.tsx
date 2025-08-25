"use client"

import { motion } from "framer-motion"

export default function WhoWeAre() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Small label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Who We Are
            </span>
          </motion.div>
          
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pioneers in AI-Driven Digital Transformation
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              At Radison, we are a team of visionary technologists, data scientists, and digital experts 
              dedicated to pushing the boundaries of what's possible with artificial intelligence. 
              Our mission is to empower businesses with transformative solutions that drive growth, 
              efficiency, and competitive advantage in an increasingly digital world.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {/* Years of Experience */}
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>

            {/* Projects Completed */}
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>

            {/* Happy Clients */}
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>

            {/* Team Members */}
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400 text-sm">Team Members</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Learn More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}