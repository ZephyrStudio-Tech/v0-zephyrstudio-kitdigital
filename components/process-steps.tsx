import React from 'react'

export function ProcessSteps() {
  return (
    <section className="relative px-4 py-24 md:py-32 overflow-visible z-20">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold uppercase tracking-widest mb-4">
            Proceso Cero Estres
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            Nosotros hacemos el papeleo.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">Tu recibes el Kit Digital.</span>
          </h2>
        </div>

        {/* Stacking Cards Container */}
        <div className="flex flex-col gap-4 pb-24 relative">

          {/* Card 1 */}
          <article className="sticky top-[88px] z-10 bg-[#0a0a0f]/98 backdrop-blur-2xl border border-white/10 border-t-2 border-t-[#00e5ff]/40 rounded-2xl p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 shadow-[0_-12px_30px_rgba(0,0,0,0.4)] transition-transform">
            <div
              className="text-4xl md:text-5xl font-black font-mono opacity-50 shrink-0 leading-none"
              style={{ WebkitTextStroke: '1.5px #00e5ff', color: 'transparent' }}
            >
              01
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">Verificamos tu viabilidad</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Rellenas nuestro formulario en 60 segundos. Comprobamos tus datos con la base de Red.es y te confirmamos si cumples los requisitos legales para la subvencion.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="sticky top-[108px] z-20 bg-[#0a0a0f]/98 backdrop-blur-2xl border border-white/10 border-t-2 border-t-[#0018d8]/50 rounded-2xl p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 shadow-[0_-12px_30px_rgba(0,0,0,0.4)] transition-transform">
            <div
              className="text-4xl md:text-5xl font-black font-mono opacity-50 shrink-0 leading-none"
              style={{ WebkitTextStroke: '1.5px #0018d8', color: 'transparent' }}
            >
              02
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">Tramitamos el expediente</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Como Agentes Digitalizadores Adheridos, nos convertimos en tus representantes voluntarios. Hacemos toda la burocracia con el Gobierno para que tu no pierdas ni un minuto.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="sticky top-[128px] z-30 bg-[#0a0a0f]/98 backdrop-blur-2xl border border-white/10 border-t-2 border-t-purple-500/40 rounded-2xl p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 shadow-[0_-12px_30px_rgba(0,0,0,0.4)] transition-transform">
            <div
              className="text-4xl md:text-5xl font-black font-mono opacity-50 shrink-0 leading-none"
              style={{ WebkitTextStroke: '1.5px #a855f7', color: 'transparent' }}
            >
              03
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">Aprobacion del Bono</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                El Estado te notifica la concesion de tu bono (de 1.000 a 12.000 euros segun tu segmento). Firmamos el Acuerdo de Prestacion de Soluciones y ponemos los motores en marcha.
              </p>
            </div>
          </article>

          {/* Card 4 (Highlight) */}
          <article className="sticky top-[148px] z-40 bg-gradient-to-br from-[#0a0a0f] to-[#0018d8]/20 backdrop-blur-2xl border border-white/10 border-t-2 border-t-white/20 rounded-2xl p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 shadow-[0_-12px_30px_rgba(0,0,0,0.4)] transition-transform">
            <div className="text-4xl md:text-5xl font-black font-mono bg-clip-text text-transparent bg-gradient-to-b from-[#00e5ff] to-[#0018d8] shrink-0 leading-none">
              04
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">Despliegue y Hardware</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Entregamos tu ordenador Mac/PC blindado, publicamos tu nueva web o activamos tu software de Factura Electronica. Disfrutas de 12 meses de soporte premium incluido.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
