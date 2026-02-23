'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="https://kitdigital-2026-supabase-kd2026.ijatkc.easypanel.host/storage/v1/object/public/img_web/logo_zephyrstudio.png"
              alt="ZephyrStudio"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="text-xs md:text-sm hover:bg-white/[0.05] hover:text-[#00e5ff] transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-[0_10px_20px_-10px_rgba(0,24,216,0.3)]"
          >
            Iniciar Sesión
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
