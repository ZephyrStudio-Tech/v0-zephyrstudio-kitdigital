'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="glass-premium rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-3">
            <Image 
              src="https://kitdigital-2026-supabase-kd2026.ijatkc.easypanel.host/storage/v1/object/public/img_web/logo_zephyrstudio.png"
              alt="ZephyrStudio"
              width={140}
              height={32}
              className="h-7 w-auto md:h-8"
              priority
            />
          </div>

          <Button
            size="sm"
            className="bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-medium tracking-wide border border-white/[0.08] hover:border-white/20 rounded-xl px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(0,24,216,0.4)]"
          >
            Iniciar Sesión
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
