"use client"

<<<<<<< HEAD
import { motion } from 'framer-motion'
=======
import { motion } from "framer-motion"
import Image from "next/image"
>>>>>>> c6926bc (Updated testimonial section UI)

export default function Testimonials() {
  const testimonials = [
    {
      text: "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
<<<<<<< HEAD
      initials: "DW",
      name: "Dean Watson",
      role: "Managing director • Formland"
    },
    {
      text: "Radison provided game-changing insights that helped us optimize processes and scale operations fast.",
      initials: "EZ",
      name: "Emily Zhang",
      role: "CEO • Futuresync"
    },
    {
      text: "Radison's AI tools revolutionized how we work, saving time and driving our productivity forward.",
      initials: "JC",
      name: "James Carter",
      role: "Marketing director • Innolytic"
    },
    {
      text: "Working with Radison has been seamless. Their solutions are both innovative and highly effective.",
      initials: "LW",
      name: "Liam Walker",
      role: "Product manager • Brightpath"
    },
    {
      text: "Thanks to Radison, we've achieved incredible growth by automating tasks and improving accuracy.",
      initials: "MT",
      name: "Miguel Torres",
      role: "IT consultant • Alphasedge"
    },
    {
      text: "The team at Radison delivered outstanding results, improving our efficiency beyond what we imagined!",
      initials: "PS",
      name: "Priya Sharma",
      role: "Founder • NexGen"
=======
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
>>>>>>> c6926bc (Updated testimonial section UI)
    }
  ]

  return (
<<<<<<< HEAD
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36 4xl:py-40">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        
        {/* Section Label */}
        <motion.div 
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-18 4xl:mb-20"
=======
    <section className="bg-black py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Label */}
        <motion.div
          className="text-center mb-6"
>>>>>>> c6926bc (Updated testimonial section UI)
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          <span className="bg-gray-800 text-gray-300 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 2xl:px-8 2xl:py-4 3xl:px-9 3xl:py-4.5 4xl:px-10 4xl:py-5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-medium">
            Testimonials
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-36 4xl:mb-40"
=======
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
            Testimonials
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center mb-10"
>>>>>>> c6926bc (Updated testimonial section UI)
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 3xl:mb-16 4xl:mb-18">
            Trusted by satisfied clients
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto">
            Discover how we've driven growth and innovation.
          </p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-18 4xl:gap-20 max-w-6xl sm:max-w-7xl md:max-w-8xl lg:max-w-9xl xl:max-w-10xl 2xl:max-w-11xl 3xl:max-w-12xl 4xl:max-w-none mx-auto">
          
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-purple-950/90 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 3xl:p-16 4xl:p-18 border border-purple-800/30"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 3xl:mb-16 4xl:mb-18"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 2xl:space-x-7 3xl:space-x-8 4xl:space-x-9"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 3xl:w-20 3xl:h-20 4xl:w-22 4xl:h-22 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center border-2 border-gray-500"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-medium">{testimonial.initials}</span>
                </motion.div>
                <div>
                  <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-medium">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">{testimonial.role}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
          
=======
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted by satisfied clients
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how we’ve driven growth and innovation.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl bg-black border border-gray-800 shadow-lg overflow-hidden flex flex-col justify-between h-[200px] p-6"
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
                    "radial-gradient(70% 100% at 80% 50%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.15) 40%, rgba(124,58,237,0) 80%)",
                  filter: "blur(28px)"
                }}
              />

              {/* Text */}
              <p className="relative z-10 text-white text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* Avatar + Info */}
              <div className="relative z-10 flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover border border-white/60"
                />
                <div>
                  <div className="text-white font-medium text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-300 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
>>>>>>> c6926bc (Updated testimonial section UI)
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
} 
=======
}
>>>>>>> c6926bc (Updated testimonial section UI)
