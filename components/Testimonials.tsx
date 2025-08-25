"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      text: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
      name: "Dean Watson",
      role: "Managing director : Farmland",
      avatar: "/people_icon/Dean%20Watson.png"
    },
    {
      text: "Radison provided game-changing insights that helped us optimize processes and scale operations fast.",
      name: "Emily Zhang",
      role: "CEO : Futuresync",
      avatar: "/people_icon/Emily%20Zhang.png"
    },
    {
      text: "Radison’s AI tools revolutionized how we work, saving time and driving our productivity forward.",
      name: "James Carter",
      role: "Marketing director : Innolystic",
      avatar: "/people_icon/James%20Carter.png"
    },
    {
      text: "Working with Radison has been seamless. Their solutions are both innovative and highly effective.",
      name: "Liam Walker",
      role: "Product manager : Brightpath",
      avatar: "/people_icon/Liam%20Walker.png"
    },
    {
      text: "Thanks to Radison, we’ve achieved incredible growth by automating tasks and improving accuracy.",
      name: "Miguel Torres",
      role: "IT consultant : Alphaedge",
      avatar: "/people_icon/Miguel%20Torres.png"
    },
    {
      text: "The team at Radison delivered outstanding results, improving our efficiency beyond what we imagined!",
      name: "Priya Sharma",
      role: "Founder : NexGen",
      avatar: "/people_icon/Priya%20Sharma.png"
    }
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
            Testimonials
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by satisfied clients
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how we’ve driven growth and innovation.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl bg-black border border-gray-800 shadow-xl overflow-hidden flex flex-col justify-between min-h-[220px] max-h-[260px] p-6 md:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Purple Glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 100% at 80% 50%, rgba(124,58,237,0.4) 0%, rgba(124,58,237,0.15) 40%, rgba(124,58,237,0) 80%)",
                  filter: "blur(30px)"
                }}
              />

              {/* Text */}
              <p className="relative z-10 text-white text-base md:text-lg leading-relaxed mb-6 flex-grow">
                "{testimonial.text}"
              </p>

              {/* Avatar + Info */}
              <div className="relative z-10 flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border border-white/60"
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
