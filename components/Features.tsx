"use client"

import { motion } from "framer-motion"
import { TrendingDown, Check, TrendingUp } from "lucide-react"

export default function Features() {
  const benefits = [
    {
      title: "Smart Cost Efficiency",
      description:
        "Streamline tech, design, and management processes to reduce overhead and boost resource utilization.",
      icon: <TrendingDown className="w-6 h-6 text-white" />,
    },
    {
      title: "Better Business Impact",
      description:
        "Apply data-backed strategies and creative solutions to elevate performance across software, portfolios, and spaces.",
      icon: <Check className="w-6 h-6 text-white" />,
    },
    {
      title: "Productivity Unleashed",
      description:
        "Automate tasks, refine workflows, and accelerate delivery to maximize output across all service areas.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
    },
  ]

  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Label */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-md bg-gray-900 text-gray-200 px-4 py-1.5 text-sm font-medium border border-gray-700">
            Benefits
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Maximize efficiency and impact
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Discover the key benefits of partnering with us.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative bg-[#0A0A0A] p-6 rounded-2xl border border-gray-800 transition-all duration-300 flex flex-col justify-between min-h-[220px] overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow:
                  "0 8px 30px rgba(139, 92, 246, 0.25), 0 8px 40px rgba(59, 130, 246, 0.25)", // Purple + Blue glow
              }}
            >
              {/* Animated Gradient Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 blur-3xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-md flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
