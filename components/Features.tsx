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
      glow: "left-0 top-0", // left glow
    },
    {
      title: "Better Business Impact",
      description:
        "Apply data-backed strategies and creative solutions to elevate performance across software, portfolios, and spaces.",
      icon: <Check className="w-6 h-6 text-white" />,
      glow: "center top-0", // center glow
    },
    {
      title: "Productivity Unleashed",
      description:
        "Automate tasks, refine workflows, and accelerate delivery to maximize output across all service areas.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      glow: "right-0 top-0", // right glow
    },
  ]

  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Label */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium border border-gray-700">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Maximize efficiency and impact
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the key benefits of partnering with us.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-gray-900/90 to-black p-8 rounded-2xl border border-gray-700 transition-all duration-300 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 8px 30px rgba(147, 51, 234, 0.15)",
              }}
            >
              {/* Purple Glow Background (per card) */}
              <div
                className={`absolute inset-0 rounded-2xl bg-purple-600/20 blur-3xl opacity-50 ${index === 0 ? "left-[-20%]" : index === 1 ? "inset-0" : "right-[-20%]"}`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
