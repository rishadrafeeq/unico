import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  margin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: options.threshold || 0.1,
    once: options.triggerOnce !== false,
    margin: options.margin || "-100px" as any
  })

  return { ref, isInView }
} 