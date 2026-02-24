'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MessageSquare } from 'lucide-react'

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && !isOpen) {
        setIsScrollingDown(true)
      } else {
        setIsScrollingDown(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isOpen])

  const actions = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      label: 'WhatsApp',
      href: 'https://wa.me/34602678771',
      color: 'hover:bg-[#25D366] hover:border-[#25D366] text-[#25D366] hover:text-white border-[#25D366]/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:hola@zephyrstudio.es',
      color: 'hover:bg-[#a855f7] hover:border-[#a855f7] text-[#c084fc] hover:text-white border-[#a855f7]/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Llamar',
      href: 'tel:+34602678771',
      color: 'hover:bg-[#00e5ff] hover:border-[#00e5ff] text-[#00e5ff] hover:text-black border-[#00e5ff]/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]',
    },
  ]

  return (
    <motion.div
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] flex flex-col-reverse items-end gap-4"
      initial={false}
      animate={{
        opacity: isScrollingDown ? 0.4 : 1,
        scale: isScrollingDown ? 0.9 : 1,
      }}
      whileHover={{ opacity: 1, scale: 1 }}
    >
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar contacto' : 'Abrir contacto'}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all duration-300 ${
          isOpen
            ? 'bg-white text-black border-white shadow-[0_10px_40px_rgba(255,255,255,0.3)]'
            : 'bg-white/5 text-white border-white/20 shadow-[0_10px_30px_rgba(0,229,255,0.15)] hover:border-[#00e5ff] hover:shadow-[0_10px_40px_rgba(0,229,255,0.4)]'
        }`}
      >
        <motion.div animate={{ rotate: isOpen ? 135 : 0 }} transition={{ duration: 0.3 }}>
          <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
        </motion.div>
      </button>

      {/* Expanded Actions */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col-reverse items-end gap-3 mb-2">
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.label === 'WhatsApp' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center backdrop-blur-xl border bg-white/5 transition-all duration-300 ${action.color} ${action.shadow}`}
              >
                {action.icon}
                {/* Tooltip */}
                <span className="absolute right-16 md:right-20 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {action.label}
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
