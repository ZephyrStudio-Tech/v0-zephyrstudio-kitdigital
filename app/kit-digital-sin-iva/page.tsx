'use client'

import { motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/animated-background'
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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardFade = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 90, mass: 0.8 },
  },
}

/* ── Data ────────────────────────────────────────────────────── */

const steps = [
  {
    number: '01',
    title: 'La subvencion cubre el coste base',
    description: 'El Bono Digital europeo financia el 100% del importe neto de los servicios digitales contratados. Para el Segmento III (freelancers), esto supone hasta 3.000€ de base imponible. Para Segmento II (3-9 empleados), hasta 6.000€.',
    highlight: 'Hasta 6.000€ financiados',
    highlightColor: 'text-[#00e5ff]',
    borderColor: 'border-[#00e5ff]/30',
    bgGradient: 'from-[#00e5ff]/10 via-transparent to-transparent',
  },
  {
    number: '02',
    title: 'El IVA lo abona el cliente',
    description: 'Conforme a la legislacion fiscal espanola, el Impuesto sobre el Valor Anadido (21%) no esta cubierto por la subvencion. El cliente debe abonar unicamente el IVA de la factura. Para un servicio de 3.000€, esto equivale a 630€ de IVA.',
    highlight: '21% IVA = 630€ (sobre 3.000€)',
    highlightColor: 'text-white',
    borderColor: 'border-white/20',
    bgGradient: 'from-[#0018d8]/15 via-transparent to-transparent',
  },
  {
    number: '03',
    title: 'El IVA es 100% deducible',
    description: 'El IVA soportado en esta operacion es totalmente deducible en la declaracion trimestral del modelo 303. Esto significa que, en la practica, el coste real para tu negocio es cero. Recuperas integramente el IVA en el siguiente trimestre fiscal.',
    highlight: 'Coste real: 0€',
    highlightColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
    bgGradient: 'from-emerald-400/10 via-transparent to-transparent',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function KitDigitalSinIva() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      {/* ─── Hero: Centered Editorial ─────────────────────── */}
      <section className="relative px-4 pt-36 pb-20 md:px-8 md:pt-48 md:pb-36">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-10 inline-flex items-center gap-2.5 rounded-full glass-premium px-5 py-2.5 text-sm font-medium text-white"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Transparencia Fiscal
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.88] mb-8"
            >
              <span className="text-gradient-heading">Kit Digital 100% Financiado.</span>
              <br />
              <span className="text-gradient-cyan">{'¿Que pasa con el IVA?'}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-2xl"
            >
              La pregunta mas frecuente de nuestros clientes. Aqui te lo explicamos con total transparencia: el IVA se paga, pero se recupera integramente. El coste real es cero.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Explainer Steps ──────────────────────────────── */}
      <section className="relative px-4 pb-20 md:px-8 md:pb-36">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="space-y-8"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={cardFade}
                className={`glass-premium rounded-3xl p-8 md:p-12 relative overflow-hidden border-l-2 ${step.borderColor}`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.bgGradient} opacity-60`} />

                <div className="relative z-10">
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl md:text-6xl font-extrabold text-white/10 tracking-tighter leading-none">
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-base text-slate-400 leading-relaxed mb-6 max-w-2xl">
                    {step.description}
                  </p>

                  {/* Highlight pill */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    <div className={`w-2 h-2 rounded-full ${step.highlightColor === 'text-[#00e5ff]' ? 'bg-[#00e5ff]' : step.highlightColor === 'text-emerald-400' ? 'bg-emerald-400' : 'bg-white'}`} />
                    <span className={`text-sm font-semibold ${step.highlightColor}`}>
                      {step.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="mt-16"
          >
            <div
              className="rounded-[2rem] p-8 md:p-14 text-center relative overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at 50% 40%, rgba(0,24,216,0.4) 0%, rgba(67,56,202,0.2) 40%, rgba(3,3,5,0.9) 80%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Resumen Financiero
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-[#00e5ff] tracking-tighter">3.000€</p>
                  <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-mono">Subvencion</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter">630€</p>
                  <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-mono">IVA (21%)</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-emerald-400 tracking-tighter">0€</p>
                  <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-mono">Coste Real</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 mt-10 max-w-lg mx-auto leading-relaxed">
                * El IVA soportado se deduce integramente en la declaracion trimestral (Modelo 303). Ejemplo basado en Segmento III (0-2 empleados).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
