"use client"

<<<<<<< HEAD
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background overlay for texture */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Floating background elements - constrained to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500 rounded-full opacity-15 blur-lg"
          animate={{ 
            y: [-15, 15, -15],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Badge Pill */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="bg-purple-600 bg-opacity-20 border border-purple-500 text-white px-6 py-3 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight px-4">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to transform your vision into reality? We're here to help you achieve your goals.
            </p>
          </motion.div>
          
          {/* Main Content Grid */}
          <div className="max-w-7xl mx-auto px-4">
            {/* Contact Information Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Email Card */}
              <motion.div 
                className="bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Email Us</h3>
                <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base">Send us a message anytime</p>
                <a 
                  href="mailto:contact@unico.com" 
                  className="text-purple-400 font-medium hover:text-purple-300 transition-colors text-sm lg:text-base"
                >
                  contact@unico.com
                </a>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                className="bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Call Us</h3>
                <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base">Speak with our team</p>
                <a 
                  href="tel:+15551234567" 
                  className="text-purple-400 font-medium hover:text-purple-300 transition-colors text-sm lg:text-base"
                >
                  +1 (555) 123-4567
                </a>
              </motion.div>

              {/* Office Card */}
              <motion.div 
                className="bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 group sm:col-span-2 lg:col-span-1"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Visit Us</h3>
                <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base">Come by our office</p>
                <div className="text-purple-400 font-medium text-sm lg:text-base">
                  <div>123 Business Ave</div>
                  <div>Suite 100</div>
                  <div>City, State 12345</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Left Side - Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">Ready to Get Started?</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we're here to help. Our team of experts is ready to discuss your needs and 
                  provide tailored solutions that drive results.
                </p>
                
                {/* Quick Contact */}
                <motion.div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 lg:p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4">Need Immediate Help?</h3>
                  <p className="text-purple-100 mb-4 lg:mb-6 text-sm lg:text-base">
                    For urgent inquiries or quick questions, feel free to reach out directly.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="mailto:contact@unico.com"
                      className="bg-white text-purple-600 px-4 lg:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-sm lg:text-base"
                    >
                      Send Quick Email →
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Right Side - Contact Form */}
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
=======
export default function ContactClient() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header chip */}
        <div className="mb-10">
          <span className="inline-flex rounded-full bg-[#202228] text-gray-300 px-5 py-2 text-sm">Contacts</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Headline and contact details */}
          <div>
            <h1 className="text-white font-bold tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-6xl mb-6">
              Ask whatever you have in your mind
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-10">
              Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-white/90">
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-white/10">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" stroke="none"/>
                    <path d="M4 8l8 5 8-5" />
                  </svg>
                </span>
                <span className="text-sm md:text-base">admin@raddision.com</span>
              </li>
              <li className="flex items-center space-x-3 text-white/90">
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-white/10">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 6 6l1.36-1.25a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-sm md:text-base">(969) 819-8061</span>
              </li>
              <li className="flex items-center space-x-3 text-white/90">
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-white/10">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-sm md:text-base">43 Roselle St. New York</span>
              </li>
            </ul>
          </div>

          {/* Right: Contact form */}
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  'radial-gradient(60% 90% at 85% 50%, rgba(124,58,237,0.7) 0%, rgba(124,58,237,0.3) 40%, rgba(124,58,237,0) 70%)',
                filter: 'blur(30px)'
              }}
            />

            <form className="relative bg-[#0f0f10]/90 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <div>
                <label className="block text-white/80 text-sm mb-2">Name</label>
                <input
                  className="w-full rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Jane Smith"
                  style={{ backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.05) 50%, rgba(124,58,237,0.15) 100%)' }}
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="jane@framer.com"
                  style={{ backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.05) 50%, rgba(124,58,237,0.15) 100%)' }}
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg bg-black/60 border border-white/10 text-white placeholder-white/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Hi, I am reaching out for..."
                  style={{ backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.05) 50%, rgba(124,58,237,0.15) 100%)' }}
                />
              </div>
              <button type="submit" className="w-full rounded-lg bg-[#5430ff] hover:bg-[#4a27f5] text-white py-3 md:py-3.5 font-medium transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
>>>>>>> c6926bc (Updated testimonial section UI)
