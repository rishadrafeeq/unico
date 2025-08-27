"use client"

import { motion } from "framer-motion"

export default function Vision() {
  const processes = [
    {
      title: "Discovery & Strategize",
      description: "We align with your vision to craft tailored tech, design, or business strategies.",
      graphic: (
        <div className="relative w-full h-40 bg-gray-800 rounded-lg p-4 flex flex-col justify-between border border-white/10">
          <div className="absolute top-2 left-2 flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-grow flex items-center justify-center space-x-4 mt-4">
            <div className="flex flex-col justify-end h-full w-1/2 p-2">
              <div className="w-full h-1/3 bg-gray-600 rounded-sm mb-1"></div>
              <div className="w-full h-2/3 bg-gray-500 rounded-sm mb-1"></div>
              <div className="w-full h-full bg-gray-400 rounded-sm"></div>
            </div>
            <div className="relative w-1/2 h-full flex items-center justify-center">
              <div className="relative w-24 h-24 rounded-full border-2 border-gray-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                </div>
                <div className="absolute w-16 h-1 bg-blue-400 transform rotate-45 -translate-x-2 translate-y-2"></div>
                <div className="absolute w-1 h-16 bg-blue-400 transform rotate-45 translate-x-2 -translate-y-2"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-1">
            <div className="h-2 bg-gray-700 rounded-sm w-3/4"></div>
            <div className="h-2 bg-gray-700 rounded-sm w-1/2"></div>
          </div>
        </div>
      )
    },
    {
      title: "Design, Develop & Refine",
      description: "We craft digital and interior solutions, refined through testing and creative iteration.",
      graphic: (
        <div className="relative w-full h-40 bg-gray-800 rounded-lg p-4 flex flex-col justify-between border border-white/10">
          <div className="absolute top-2 left-2 flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-grow flex items-center justify-center mt-4">
            <div className="w-full h-full bg-gray-700 rounded-md"></div>
          </div>
        </div>
      )
    },
    {
      title: "Deliver & Elevate",
      description: "We launch precisely and offer ongoing support to ensure lasting performance and growth.",
      graphic: (
        <div className="relative w-full h-40 bg-gray-800 rounded-lg p-4 flex flex-col justify-between border border-white/10">
          <div className="absolute top-2 left-2 flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-grow flex items-start justify-center space-x-4 mt-4">
            <div className="w-1/2 h-full p-2 space-y-2">
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
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="w-3 h-3 rounded-full border border-gray-500"></span>
                <span>Accuracy</span>
              </div>
            </div>
            <div className="w-1/2 h-full p-2 flex flex-col justify-start">
              <span className="text-gray-400 text-sm mb-2">Status:</span>
              <div className="text-gray-400 text-sm mb-1">Updating:</div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div className="h-full w-2/3 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
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

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl border border-white/10 bg-gray-900 p-8 shadow-lg flex flex-col items-start" 
            >
              <div className="mb-6 w-full"> 
                {process.graphic}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white mt-6"> 
                {process.title}
              </h3>
              <p className="text-gray-400">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}