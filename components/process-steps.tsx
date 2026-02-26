import React from 'react'

export function ProcessSteps() {
  return (
    <section className="relative px-4 py-20 md:py-28 overflow-visible z-20">
      <div className="container mx-auto max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold uppercase tracking-widest mb-4">
            Proceso Cero Estres
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            Nosotros hacemos el papeleo.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">Tu recibes el Kit Digital.</span>
          </h2>
        </div>

        {/* Stacking Cards — each card is sticky and stacks on top of the previous */}
        <div className="flex flex-col pb-[240px] relative">

          {/* Card 1 */}
          <article className="sticky top-[80px] z-10 bg-[#0b0b12]/95 backdrop-blur-2xl border border-white/[0.08] border-t-2 border-t-[#00e5ff]/50 rounded-2xl px-6 py-5 flex items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div
              className="text-4xl font-black font-mono shrink-0 leading-none w-12 text-center"
              style={{ WebkitTextStroke: '1.5px #00e5ff', color: 'transparent' }}
            >
              01
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Verificamos tu viabilidad</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                Rellenas nuestro formulario en 60 segundos. Comprobamos tus datos con Red.es y confirmamos si cumples los requisitos legales.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="sticky top-[100px] z-20 bg-[#0b0b12]/95 backdrop-blur-2xl border border-white/[0.08] border-t-2 border-t-[#0018d8]/60 rounded-2xl px-6 py-5 flex items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] mt-3">
            <div
              className="text-4xl font-black font-mono shrink-0 leading-none w-12 text-center"
              style={{ WebkitTextStroke: '1.5px #0018d8', color: 'transparent' }}
            >
              02
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Tramitamos el expediente</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                Como Agentes Digitalizadores Adheridos, hacemos toda la burocracia con el Gobierno para que tu no pierdas ni un minuto.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="sticky top-[120px] z-30 bg-[#0b0b12]/95 backdrop-blur-2xl border border-white/[0.08] border-t-2 border-t-purple-500/50 rounded-2xl px-6 py-5 flex items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] mt-3">
            <div
              className="text-4xl font-black font-mono shrink-0 leading-none w-12 text-center"
              style={{ WebkitTextStroke: '1.5px #a855f7', color: 'transparent' }}
            >
              03
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Aprobacion del Bono</h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                El Estado te notifica la concesion de tu bono (1.000–12.000€ segun segmento). Firmamos el Acuerdo de Prestacion de Soluciones.
              </p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="sticky top-[140px] z-40 bg-gradient-to-br from-[#0b0b12]/95 to-[#0018d8]/15 backdrop-blur-2xl border border-[#00e5ff]/20 border-t-2 border-t-[#00e5ff]/40 rounded-2xl px-6 py-5 flex items-center gap-6 shadow-[0_8px_32px_rgba(0,229,255,0.08)] mt-3">
            <div className="text-4xl font-black font-mono bg-clip-text text-transparent bg-gradient-to-b from-[#00e5ff] to-[#0018d8] shrink-0 leading-none w-12 text-center">
              04
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Despliegue y Hardware</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Entregamos tu Mac/PC blindado, publicamos tu web o activamos Factura Electronica. 12 meses de soporte premium incluido.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
