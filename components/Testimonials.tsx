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
      text: "Radison's AI tools revolutionized how we work, saving time and driving our productivity forward.",
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
      text: "Thanks to Radison, we've achieved incredible growth by automating tasks and improving accuracy.",
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
    <section className="bg-black py-20 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Label */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 -z-10 blur-2xl rounded-full bg-purple-700/30" />
            <span className="inline-flex rounded-full bg-gray-800 text-white px-4 py-2 text-sm font-medium border border-gray-600">
              Testimonials
            </span>
          </div>
        </motion.div>
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
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

        {/* Testimonials Grid with equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl bg-black border border-gray-800 p-5 md:p-6 flex flex-col justify-between h-full overflow-hidden hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -2,
                boxShadow: "0 8px 40px rgba(147,51,234,0.18)"
              }}
            >
              {/* Purple corner glows (pointer-events-none so it doesn't block interactions) */}
              <div className="pointer-events-none absolute inset-0">
                {/* top-right soft orb */}
                <div className="absolute -top-10 -right-10 w-[220px] h-[220px] rounded-full bg-purple-600/20 blur-3xl" />
                {/* bottom-left soft orb */}
                <div className="absolute -bottom-10 -left-10 w-[180px] h-[180px] rounded-full bg-purple-500/12 blur-3xl" />
                {/* subtle radial wash (fine-tunes the corner glow) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(147,51,234,0.14),transparent_55%)]" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <p className="text-white text-sm md:text-base leading-relaxed mb-4 flex-grow overflow-hidden">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover border border-white/20"
                    priority={index < 3}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
