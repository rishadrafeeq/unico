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
            <p className="text-lg text-white/80 leading-relaxed">
              Unico international is a multidisciplinary firm blending software development, portfolio management, and interior design to deliver innovative, tech-driven solutions for modern business.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}