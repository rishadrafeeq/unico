"use client"

import { motion } from "framer-motion"

export default function Vision() {
  const processes = [
    {
      title: "Discovery & Strategize",
      description: "We align with your vision to craft tailored tech, design, or business strategies.",
      graphic: (
        <div className="relative w-full h-36 bg-gray-800 rounded-lg p-4 border border-white/10">
          {/* Browser controls */}
          <div className="absolute top-2 left-2 flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>

          {/* Content */}
          <div className="flex-grow flex items-center justify-center space-x-4 mt-4">
            <div className="flex flex-col justify-end h-full w-1/2 p-2">
              <div className="w-full h-2 bg-gray-600 rounded-sm mb-2"></div>
              <div className="w-full h-3 bg-gray-500 rounded-sm mb-2"></div>
              <div className="w-full h-4 bg-gray-400 rounded-sm"></div>
            </div>
            <div className="relative w-1/2 h-full flex items-center justify-center">
              <div className="relative w-16 h-16 rounded-full border-2 border-gray-500 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Design, Develop & Refine",
      description: "We craft digital and interior solutions, refined through testing and creative iteration.",
      graphic: (
        <div className="relative w-full h-36 bg-gray-800 rounded-lg p-4 border border-white/10">
          {/* Browser controls */}
          <div className="absolute top-2 left-2 flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>

          {/* Content */}
          <div className="flex-grow flex items-center justify-center mt-4">
            <div className="w-full h-20 bg-gray-700 rounded-md"></div>
          </div>
        </div>
      )
    },
    {
      title: "Deliver & Elevate",
      description: "We launch precisely and offer ongoing support to ensure lasting performance and growth.",
      graphic: (
        <div className="relative w-full h-36 bg-gray-800 rounded-lg p-4 border border-white/10">
          {/* Browser controls */}
          <div className="absolute top-2 left-2 flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>

          {/* Content */}
          <div className="flex-grow flex items-start justify-center space-x-4 mt-4">
            <div className="w-1/2 space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="w-3 h-3 rounded-full border border-gray-500"></span>
                <span>Security</span>
              </div>
              <div className="flex items-center space-x-2 text-white bg-gray-700 rounded-md p-1">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span>Efficiency</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="w-3 h-3 rounded-full border border-gray-500"></span>
                <span>Speed</span>
              </div>
              {/* Accuracy removed */}
            </div>
            <div className="w-1/2 flex flex-col justify-start">
              <span className="text-gray-400 text-sm mb-1">Status:</span>
              <div className="text-gray-400 text-sm mb-1">Updating:</div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full w-1/3 bg-purple-500 rounded-full absolute left-0"
                  animate={{ x: ["0%", "200%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="relative bg-black py-20 lg:py-28 overflow-hidden">
      {/* Purple glow in corners */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-700/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
            Process
          </span>
        </motion.div>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
          >
            Empowering Vision, Delivering Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-16"
          >
            A streamlined, smart approach to tech, design, and business solutions.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-black p-6 shadow-lg hover:shadow-purple-900/20 transition-shadow duration-300"
            >
              <div className="mb-4 w-full"> 
                {process.graphic}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white"> 
                {process.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
