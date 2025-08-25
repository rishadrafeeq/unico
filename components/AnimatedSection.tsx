"use client"

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

export default function AnimatedSection({ 
  children, 
  variants, 
  className = "",
  threshold = 0.1,
  triggerOnce = true
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: threshold,
    once: triggerOnce,
    margin: "-100px"
  })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
} 