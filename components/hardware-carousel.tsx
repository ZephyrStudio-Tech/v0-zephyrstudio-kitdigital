'use client'

import React from 'react'
import Link from 'next/link'
import { hardwareCatalog } from '@/lib/hardware-catalog'

export function HardwareCarousel() {
  return (
    <section className="relative px-4 py-20 md:px-8 md:py-36 overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#0018d8]/20 to-transparent blur-[80px] pointer-events-none z-0" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-12 md:text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {'Catálogo 2026'}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white leading-tight">
            Equipo de trabajo: hasta 1.000{'€'} subvencionados
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl md:mx-auto">
            Te aplicamos el bono al equipo: pagas solo la diferencia o 0{'€'} si cubre el total {'(según tu caso)'}.
          </p>
          <Link
            href="/kit-digital-sin-iva"
            className="inline-block mt-2 text-sm text-[#00e5ff] hover:text-white underline decoration-[#00e5ff]/30 underline-offset-4 transition-colors"
          >
            {'IVA/IGIC y "sin IVA": te lo explicamos en 2 minutos.'}
          </Link>
        </div>

        {/* Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {hardwareCatalog.map((item, idx) => {
            const isFree = item.price <= 1000
            const difference = item.price - 1000
            return (
              <div
                key={idx}
                className="snap-center shrink-0 w-[300px] md:w-[340px] glass-premium rounded-3xl p-6 relative group overflow-hidden hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-[200px] mb-6 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-slate-400 font-mono mb-6">{item.specs}</p>
                <div
                  className={`py-3 px-4 rounded-xl border flex flex-col gap-0.5 ${
                    isFree
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider font-bold">
                    {isFree ? '100% Subvencionado' : `Precio Oficial: ${item.price}€`}
                  </span>
                  <span className="text-sm font-bold">
                    {isFree ? 'GRATIS' : `Solo pagas ${difference}€ (según tu caso)`}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile swipe indicator */}
        <div className="flex items-center justify-center gap-3 mt-4 md:hidden">
          {hardwareCatalog.map((_, idx) => (
            <span
              key={idx}
              className={`block rounded-full transition-all duration-300 ${
                idx === 0 ? 'w-5 h-1.5 bg-[#00e5ff]' : 'w-1.5 h-1.5 bg-white/20'
              }`}
            />
          ))}
          <span className="ml-2 text-xs text-slate-500 flex items-center gap-1">
            desliza
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-slate-500 animate-[pulse_1.5s_ease-in-out_infinite]"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  )
}
