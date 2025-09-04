"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Services() {
  const topServices = [
    {
      type: "text",
      title: "Software Development",
      description: "Boost your digital presence with custom software that automates, streamlines, and enhances user experience.",
      image: null,
    },
    {
      type: "image",
      title: "Portfolio Management",
      description: "Effectively organize, track, and optimize your projects or assets with smart tools tailored to your business goals.",
      image: "/Portfolio Managment.png",
    },
    {
      type: "image",
      title: "Interior Design",
      description: "Transform spaces with thoughtful designs that attract, inspire, and align with your vision and functionality needs.",
      image: "/Interior Design.png",
    },
  ]

  const bottomServices = [
    {
      type: "image",
      title: "Data Insights",
      description: "Extract actionable insights from complex data sets to drive informed decisions and accelerate business growth.",
      image: "/Data insight.png",
    },
    {
      type: "image",
      title: "AI Consulting",
      description: "Work with our experts to develop personalized AI strategies that streamline operations and deliver impactful results.",
      image: "/Ai Consulting.png",
    },
  ]

  return (
    <section id="services" className="bg-black py-20 lg:py-28">
      <div className="container-custom">
        
        {/* Services Label */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full bg-[#1A1A1A] text-gray-200 px-4 py-2 text-sm font-medium border border-gray-700">
            Services
          </span>
        </motion.div>
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
            Innovative services for growth
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Tailored solutions to streamline, innovate, and grow.
          </p>
        </motion.div>

        {/* Top Row (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 px-4 sm:px-0">
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#111111] p-4 sm:p-6 rounded-xl border border-[#1F1F1F] hover:border-purple-500/40 transition-all duration-300 flex flex-col cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 6px 25px rgba(147, 51, 234, 0.25)"
              }}
            >
              <div className="w-full h-32 sm:h-40 lg:h-48 bg-[#1A1A1A] rounded-lg mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row (2 wider cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {bottomServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#111111] p-4 sm:p-6 rounded-xl border border-[#1F1F1F] hover:border-purple-500/40 transition-all duration-300 flex flex-col cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 6px 25px rgba(147, 51, 234, 0.25)"
              }}
            >
              <div className="w-full h-32 sm:h-40 lg:h-48 bg-[#1A1A1A] rounded-lg mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
