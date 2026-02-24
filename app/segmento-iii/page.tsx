'use client'

import { motion } from 'framer-motion'
import { Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/animated-background'
import { Header } from '@/components/header'

/* ── Animation Variants ─────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', damping: 22, stiffness: 100, mass: 0.8 },
  },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardFade = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 90, mass: 0.8 },
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const bentoCards = [
  {
    title: 'Ecosistema Apple',
    description: 'MacBook Air M3 o iMac 24" configurados con MDM empresarial, cifrado FileVault y sincronización iCloud Business.',
    features: ['MacBook Air M3 / iMac 24"', 'MDM & FileVault', 'iCloud Business', 'Garantía AppleCare+'],
    gradient: 'from-[#0018d8]/30 via-[#4338ca]/15 to-transparent',
  },
  {
    title: 'Ciberseguridad EDR',
    description: 'Protección endpoint de nivel enterprise con monitorización 24/7, respuesta a incidentes y auditoría de cumplimiento.',
    features: ['Endpoint Detection & Response', 'Firewall gestionado', 'Auditoría RGPD', 'Backup cifrado'],
    gradient: 'from-[#00e5ff]/20 via-[#0018d8]/10 to-transparent',
  },
  {
    title: 'Soporte Premium',
    description: 'Asistencia técnica dedicada con SLA de 4h, onboarding personalizado y migración de datos sin interrupciones.',
    features: ['SLA 4h respuesta', 'Onboarding dedicado', 'Migración de datos', 'Formación incluida'],
    gradient: 'from-[#4338ca]/25 via-[#00e5ff]/10 to-transparent',
  },
]

const terminalRows = [
  { cmd: '> Hardware_Payload', val: 'MAC_READY', color: 'text-[#00e5ff]' },
  { cmd: '> Grant_Segment', val: '[III]', color: 'text-blue-500' },
  { cmd: '> Budget_Limit', val: '[3.000€]', color: 'text-[#00e5ff]' },
  { cmd: '> System_Status', val: 'ONLINE', color: 'text-emerald-400 animate-pulse' },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function SegmentoIII() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Header />

      {/* ─── Hero: 2-Column 3D Split ──────────────────────── */}
      <section className="relative px-4 pt-36 pb-20 md:px-8 md:pt-48 md:pb-36 overflow-x-clip">
        <div className="mx-auto w-full max-w-[1200px]">
          <div
            className="relative w-full rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-10 lg:p-[5rem_4rem] grid grid-cols-[1.1fr_0.9fr] gap-4 sm:gap-10 lg:gap-16 items-center"
            style={{
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderTop: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
            }}
          >
            {/* Left Column */}
            <div className="relative z-10 text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#00e5ff]/5 border border-[#00e5ff]/20 mb-4 sm:mb-8">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"
                  style={{ boxShadow: '0 0 10px #00e5ff', animation: 'pulse 2s infinite' }}
                />
                <span className="text-[#00e5ff] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  Segmento III &mdash; 0-2 empleados
                </span>
              </div>

              <h1
                className="font-extrabold leading-[0.95] tracking-tighter mb-3 sm:mb-6"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}
              >
                <span className="text-white">Tu Nuevo Mac + Web.</span>
                <span className="block mt-1 sm:mt-2 text-outline">
                  A coste cero.
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-lg text-slate-400 leading-relaxed sm:leading-[1.7] mb-6 sm:mb-12 max-w-[500px]">
                Recibe un Mac de grado empresarial y tu web profesional desplegada en la nube. Todo financiado al 100% por los fondos europeos del Kit Digital.
              </p>

              <a
                href="#"
                className="group relative inline-flex items-center gap-2 sm:gap-3 bg-white text-[#030305] font-semibold text-xs sm:text-sm md:text-base px-5 sm:px-10 py-2.5 sm:py-4 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,229,255,0.4)] no-underline"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]" />
                <span className="relative z-[2] group-hover:text-white transition-colors duration-300">
                  Solicitar Consulta
                </span>
                <ChevronRight className="relative z-[2] w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Column: 3D Terminal */}
            <div className="relative w-full flex items-center justify-center group" style={{ perspective: '1200px' }}>
              <div
                className="relative w-full max-w-[400px] backdrop-blur-xl rounded-xl sm:rounded-3xl p-4 sm:p-8 transition-all duration-700 ease-out
                           transform lg:[transform:rotateY(-8deg)_rotateX(4deg)]
                           group-hover:[transform:rotateY(0deg)_rotateX(0deg)_translateY(-10px)]
                           shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_40px_80px_rgba(0,229,255,0.15)]
                           border border-white/10 border-t-white/20 group-hover:border-[#00e5ff]/30"
                style={{ background: 'rgba(10,10,15,0.7)', transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-center border-b border-white/5 pb-2 sm:pb-4 mb-3 sm:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2">
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" y1="19" x2="20" y2="19" />
                    </svg>
                    <span className="text-white font-mono text-[10px] sm:text-sm">hardware.sh</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700" />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-5">
                  {terminalRows.map((r, i) => (
                    <div key={i} className="flex justify-between items-center font-mono text-[9px] sm:text-[13px] text-slate-400">
                      <span>{r.cmd}</span>
                      <span className={`${r.color} font-bold`}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Chip 1 */}
              <div className="absolute top-[-0.5rem] right-[-0.25rem] sm:top-[-1rem] sm:right-0 lg:top-[-2rem] lg:right-[-2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-float">
                <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-[#00e5ff]/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-mono">Proteccion</span>
                  <span className="text-[10px] sm:text-sm font-semibold text-white">Ciberseguridad</span>
                </div>
              </div>

              {/* Floating Chip 2 */}
              <div className="absolute bottom-[-0.5rem] left-[-0.25rem] sm:bottom-[-1rem] sm:left-0 lg:bottom-[-1rem] lg:left-[-3rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-float-delayed">
                <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-[#0018d8]/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7e8cff" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-mono">Hardware</span>
                  <span className="text-[10px] sm:text-sm font-semibold text-white">Ecosistema Apple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bento Grid: Puesto de Trabajo Seguro ─────────── */}
      <section className="relative px-4 py-20 md:px-8 md:py-36">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.92] mb-5">
              <span className="text-gradient-heading">Puesto de Trabajo</span>{' '}
              <span className="text-gradient-cyan">Seguro</span>
            </h2>
            <p className="text-slate-400 text-base font-light max-w-xl mx-auto leading-relaxed">
              Todo lo que necesitas para operar como un profesional desde el primer dia
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-5"
          >
            {bentoCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardFade}
                className="glass-premium rounded-3xl p-8 relative overflow-hidden group transition-all duration-300"
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-60`} />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{card.description}</p>
                  <ul className="space-y-3">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#00e5ff]" />
                        </div>
                        <span className="text-sm text-slate-300 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Link
            href="/puesto-de-trabajo-seguro"
            className="block mt-8 p-6 bg-[#00e5ff]/5 border border-[#00e5ff]/30 rounded-2xl hover:bg-[#00e5ff]/10 transition-colors"
          >
            <h3 className="text-[#00e5ff] font-bold text-xl mb-2">Novedad: Consigue tu Mac o PC Gratis</h3>
            <p className="text-slate-300">Descubre el nuevo bono Puesto de Trabajo Seguro exclusivo para tu segmento &rarr;</p>
          </Link>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────── */}
      <footer className="relative px-4 py-14 md:px-8 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} ZephyrStudio. Agentes Digitalizadores Adheridos.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
              <a href="#" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
