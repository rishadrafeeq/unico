"use client"

import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, Mail, Phone, Building, CheckCircle, Mic, Video, Subtitles, Monitor, Search, Linkedin, Twitter, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      type: "text",
      title: "Software Development",
      description: "Boost your digital presence with custom software that automates, streamlines, and enhances user experience.",
      icon: "💻"
    },
    {
      type: "text",
      title: "Portfolio Management",
      description: "Effectively organize, track, and optimize your projects or assets with smart tools tailored to your business goals.",
      icon: "📊"
    },
    {
      type: "ui",
      title: "Lead Generation",
      content: (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
            <span className="text-white text-sm">Jack Daniel (Founder)</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="p-3 bg-gray-800 rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-sm font-medium">Justin Rocks (Marketing head)</span>
              <ChevronUp className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-1 text-xs text-gray-300">
              <div>E-mail: justin@main.com</div>
              <div>Phone: +1(812)98XXX</div>
              <div>Company: XYZ LLC</div>
              <div>Verified: Yes</div>
            </div>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-purple-700 transition-colors">
            Generate Leads
          </button>
        </div>
      )
    },
    {
      type: "ui",
      title: "Data Insights",
      content: (
        <div className="space-y-3">
          <div className="text-xs text-gray-300">
            <div className="mb-2">Filters:</div>
            <div className="space-y-1">
              <div className="text-purple-400">• Work Efficiency</div>
              <div>• Cost Reduction</div>
              <div>• Automated Tasks</div>
              <div>• Lead Nurturing</div>
            </div>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <div className="text-white text-sm font-medium mb-2">Work Efficiency +23%</div>
            <div className="h-16 bg-gray-700 rounded flex items-end justify-between px-2 pb-1">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div key={day} className="w-2 bg-purple-500 rounded-t" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <div className="text-white text-sm font-medium mb-2">Overall: 48.9%</div>
            <div className="text-xs text-gray-300 mb-2">Overall now you have 48.9% better system as compared to previous week.</div>
            <button className="w-full bg-gray-700 text-white py-2 px-4 rounded text-xs hover:bg-gray-600 transition-colors">
              Export
            </button>
          </div>
        </div>
      )
    },
    {
      type: "ui",
      title: "AI Consulting",
      content: (
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-white text-sm">On Call..</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Mic className="w-4 h-4 text-purple-400" />
              <span className="text-white text-xs">Mic On</span>
            </div>
            <div className="flex items-center space-x-2">
              <Video className="w-4 h-4 text-gray-400" />
              <span className="text-white text-xs">Video Off</span>
            </div>
            <div className="flex items-center space-x-2">
              <Subtitles className="w-4 h-4 text-purple-400" />
              <span className="text-white text-xs">Caption On</span>
            </div>
            <div className="flex items-center space-x-2">
              <Monitor className="w-4 h-4 text-gray-400" />
              <span className="text-white text-xs">Present</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-1"></div>
              <div className="text-white text-xs">AI Developer</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-1"></div>
              <div className="text-white text-xs">Sales expert</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-1"></div>
              <div className="text-white text-xs">Marketing expert</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-1"></div>
              <div className="text-white text-xs">You</div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: "ui",
      title: "Content Generation",
      content: (
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Q Generate content.." 
              className="flex-1 bg-gray-800 text-white text-xs px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded text-xs font-medium hover:bg-purple-700 transition-colors">
              Generate
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span className="text-white text-xs">in</span>
              <div className="flex-1 h-2 bg-gray-700 rounded"></div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
              <Twitter className="w-4 h-4 text-blue-400" />
              <span className="text-xs">X</span>
              <div className="flex-1 h-2 bg-gray-700 rounded"></div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-white text-xs">Web</span>
              <div className="flex-1 h-2 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="container-custom">
        
        {/* Services Label */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full bg-gray-800 text-white px-4 py-2 text-sm font-medium border border-purple-500/30">
            Services
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
            Innovative services for growth
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tailored solutions to streamline, innovate, and grow.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 4px 20px rgba(147, 51, 234, 0.1)"
              }}
            >
              {service.type === "text" ? (
                <>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  {service.content}
                </>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
} 