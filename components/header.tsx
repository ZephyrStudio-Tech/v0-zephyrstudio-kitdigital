'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/segmento-iii', label: 'Segmento III' },
  { href: '/segmento-ii', label: 'Segmento II' },
  { href: '/kit-digital-sin-iva', label: 'Sin IVA' },
  { href: '/faq', label: 'FAQ' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="glass-premium rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="https://kitdigital-2026-supabase-kd2026.ijatkc.easypanel.host/storage/v1/object/public/img_web/logo_zephyrstudio.png"
              alt="ZephyrStudio"
              width={140}
              height={32}
              className="h-7 w-auto md:h-8"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/triage"
              className="hidden md:inline-flex items-center bg-gradient-to-r from-[#00e5ff]/10 to-[#0018d8]/10 hover:from-[#00e5ff]/20 hover:to-[#0018d8]/20 text-[#00e5ff] text-xs font-bold tracking-wide border border-[#00e5ff]/30 hover:border-[#00e5ff]/50 rounded-xl px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.4)] uppercase"
            >
              Diagnóstico Gratis
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-2 glass-premium rounded-2xl p-6 md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors duration-200 px-4 py-3 rounded-xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <Link
                  href="/triage"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#00e5ff]/10 to-[#0018d8]/10 text-[#00e5ff] text-xs font-bold tracking-wide border border-[#00e5ff]/30 rounded-xl px-5 py-2.5 transition-all duration-300 uppercase"
                >
                  Diagnóstico Gratis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
