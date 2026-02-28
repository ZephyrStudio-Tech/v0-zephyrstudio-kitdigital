'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const solucionesLinks = [
  { href: '/segmento-iii', label: 'Segmento III', sub: '0–2 empleados' },
  { href: '/segmento-ii', label: 'Segmento II', sub: '3–9 empleados' },
  { href: '/puesto-de-trabajo-seguro', label: 'Puesto de Trabajo Seguro', sub: 'Mac incluido' },
  { href: '/factura-electronica', label: 'Factura Electrónica', sub: 'Ley Crea y Crece' },
  { href: '/kit-digital-sin-iva', label: 'Sin IVA', sub: 'Deducción total' },
]

const topLinks = [
  { href: '/proceso-automatizado', label: 'Proceso Automatizado' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/logo_zephyrstudio.png"
              alt="ZephyrStudio"
              className="h-7 w-auto md:h-8"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Soluciones dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
                Soluciones
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#030305]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  >
                    {solucionesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-colors duration-150 group"
                      >
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{link.label}</span>
                        <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">{link.sub}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* All top links rendered the same way */}
            {topLinks.map((link) => (
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
              href="/formulario-contacto"
              className="hidden md:inline-flex items-center bg-gradient-to-r from-[#00e5ff]/10 to-[#0018d8]/10 hover:from-[#00e5ff]/20 hover:to-[#0018d8]/20 text-[#00e5ff] text-xs font-bold tracking-wide border border-[#00e5ff]/30 hover:border-[#00e5ff]/50 rounded-xl px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.4)] uppercase"
            >
              Verificar mi caso
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
              className="mt-2 md:hidden z-[100] relative bg-[#030305]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 p-6 pb-4">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono px-4 mb-2">Soluciones</p>
                <nav className="flex flex-col gap-1">
                  {solucionesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-200"
                    >
                      <span className="text-sm font-medium text-slate-300">{link.label}</span>
                      <span className="text-xs text-slate-500">{link.sub}</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-1">
                  {topLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors duration-200 px-4 py-3 rounded-xl"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sticky CTA at bottom */}
              <div className="p-4 border-t border-white/[0.08] bg-[#030305]/80">
                <Link
                  href="/formulario-contacto"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#00e5ff] to-[#0018d8] text-white text-sm font-bold tracking-wide rounded-xl px-5 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] uppercase"
                >
                  Verificar mi caso
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}