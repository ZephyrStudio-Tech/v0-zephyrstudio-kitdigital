'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary blue orb - top left */}
      <motion.div
        className="absolute -top-[200px] -left-[200px] w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 24, 216, 0.25) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cyan orb - center right */}
      <motion.div
        className="absolute top-1/3 -right-[100px] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Indigo orb - bottom */}
      <motion.div
        className="absolute -bottom-[200px] left-1/4 w-[900px] h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(67, 56, 202, 0.2) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cinematic film-grain noise overlay */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07] mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}
