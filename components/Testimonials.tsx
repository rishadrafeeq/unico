"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      text: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
      name: "Dean Watson",
      role: "Managing director : Farmland",
      avatar: "/people_icon/Dean Watson.png"
    },
    {
      text: "Radison provided game-changing insights that helped us optimize processes and scale operations fast.",
      name: "Emily Zhang",
      role: "CEO : Futuresync",
      avatar: "/people_icon/Emily Zhang.png"
    },
    {
      text: "Radison's AI tools revolutionized how we work, saving time and driving our productivity forward.",
      name: "James Carter",
      role: "Marketing director : Innolystic",
      avatar: "/people_icon/James Carter.png"
    },
    {
      text: "Working with Radison has been seamless. Their solutions are both innovative and highly effective.",
      name: "Liam Walker",
      role: "Product manager : Brightpath",
      avatar: "/people_icon/Liam Walker.png"
    },
    {
      text: "Thanks to Radison, we've achieved incredible growth by automating tasks and improving accuracy.",
      name: "Miguel Torres",
      role: "IT consultant : Alphaedge",
      avatar: "/people_icon/Miguel Torres.png"
    },
    {
      text: "The team at Radison delivered outstanding results, improving our efficiency beyond what we imagined!",
      name: "Priya Sharma",
      role: "Founder : NexGen",
      avatar: "/people_icon/Priya Sharma.png"
    }
  ]

  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Label */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full bg-gray-800 text-white px-4 py-2 text-sm font-medium border border-gray-600">
            Testimonials
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by satisfied clients
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how we've driven growth and innovation.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl bg-gradient-to-r from-gray-900/80 to-black border border-gray-700 p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -2,
                boxShadow: "0 4px 20px rgba(147, 51, 234, 0.1)"
              }}
            >
              {/* Text */}
              <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Avatar + Info */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="text-white font-medium text-sm md:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
