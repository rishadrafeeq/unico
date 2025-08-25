'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!dotRef.current) return
      const x = e.clientX
      const y = e.clientY
      dotRef.current.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      aria-hidden
      ref={dotRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: 'screen' }}
    >
      <div
        className="w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, rgba(124,58,237,0.65) 0%, rgba(59,130,246,0.35) 40%, rgba(2,6,23,0) 70%)',
        }}
      />
    </div>
  )
}


