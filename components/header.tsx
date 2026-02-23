'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal } from 'lucide-react'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#0018d8] flex items-center justify-center">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight">
              ZephyrStudio
            </span>
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="font-mono text-xs md:text-sm hover:bg-white/[0.05] hover:text-[#00e5ff] transition-all duration-300 border border-white/5 hover:border-[#00e5ff]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            <span className="mr-2">&gt;</span> sudo login
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
