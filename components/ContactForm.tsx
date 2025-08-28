// components/ContactForm.jsx
"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactForm() {
  return (
    <section className="bg-black py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contacts Button - Centered with Glow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center relative"
        >
          {/* Purple Glow Behind Button */}
          <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_70%)] blur-2xl pointer-events-none" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 inline-flex rounded-md border border-white/10 bg-black/30 px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 transition-colors duration-300"
          >
            Contacts
          </motion.button>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Purple glow behind text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.15),transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Ask whatever you have in<br /> your mind
              </h2>
              
              <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-lg">
                Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">admin@raddision.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">(969) 819-8061</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">43 Roselle St. New York</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue="Jane Smith"
                  className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue="jane@framer.com"
                  className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  defaultValue="Hi, I am reaching out for..."
                  className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#5A28F1] text-white font-medium py-3.5 rounded-md hover:bg-[#4b21c8] transition-all"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
