'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, AlertTriangle, ShieldCheck, Terminal } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'

/* ── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

/* ── Data ────────────────────────────────────────────────────── */
const taxCases = [
  {
    regime: 'Régimen General',
    desc: 'La mayoría de autónomos y PYMEs. Presentas el Modelo 303 trimestral y deduces el IVA soportado íntegramente.',
    badge: 'Deduce 100%',
    badgeClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    borderClass: 'border-emerald-500/20',
  },
  {
    regime: 'Actividad Exenta',
    desc: 'Médicos, educadores, servicios sociales... No presentas el 303. El IVA que pagas en la factura es un coste real para ti.',
    badge: 'No Deduce',
    badgeClass: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    borderClass: 'border-amber-500/20',
  },
  {
    regime: 'Recargo de Equivalencia',
    desc: 'Comerciantes minoristas. Tu proveedor ya incluye el recargo; no puedes deducir el IVA soportado en servicios externos.',
    badge: 'No Deduce',
    badgeClass: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    borderClass: 'border-amber-500/20',
  },
  {
    regime: 'Canarias (IGIC)',
    desc: 'En lugar de IVA se aplica el IGIC (7%). Las reglas de deducción son análogas al IVA peninsular pero con tipos distintos.',
    badge: 'Regla Especial',
    badgeClass: 'bg-[#00e5ff]/10 border-[#00e5ff]/30 text-[#00e5ff]',
    borderClass: 'border-[#00e5ff]/20',
  },
]

const solutions = [
  { name: 'Puesto de Trabajo Seguro', base: '1.000€', iva: '210€ (21%)', pays: '210€ *', paysNote: true },
  { name: 'Factura Electrónica', base: '2.000€', iva: '420€ (21%)', pays: '420€ *', paysNote: true },
  { name: 'Sitio Web (Seg. III)', base: '2.000€', iva: '420€ (21%)', pays: '420€ *', paysNote: true },
]

const invoiceExamples = [
  {
    label: 'Segmento III · Régimen General',
    sublabel: '0–2 empleados',
    rows: [
      { concept: 'Base imponible (bono)', amount: '1.000,00€', muted: false },
      { concept: 'IVA (21%)', amount: '210,00€', muted: false },
      { concept: 'Total factura', amount: '1.210,00€', muted: false },
      { concept: 'Abonado por Red.es', amount: '-1.000,00€', muted: true },
      { concept: 'IVA deducido (303)', amount: '-210,00€', muted: true },
    ],
    result: 'Coste real: 0,00€',
    resultClass: 'text-emerald-400',
  },
  {
    label: 'Segmento II · Régimen General',
    sublabel: '3–9 empleados',
    rows: [
      { concept: 'Base imponible (bono)', amount: '6.000,00€', muted: false },
      { concept: 'IVA (21%)', amount: '1.260,00€', muted: false },
      { concept: 'Total factura', amount: '7.260,00€', muted: false },
      { concept: 'Abonado por Red.es', amount: '-6.000,00€', muted: true },
      { concept: 'IVA deducido (303)', amount: '-1.260,00€', muted: true },
    ],
    result: 'Coste real: 0,00€',
    resultClass: 'text-emerald-400',
  },
  {
    label: 'Actividad Exenta',
    sublabel: 'Médico / Educador / Social',
    rows: [
      { concept: 'Base imponible (bono)', amount: '1.000,00€', muted: false },
      { concept: 'IVA (21%)', amount: '210,00€', muted: false },
      { concept: 'Total factura', amount: '1.210,00€', muted: false },
      { concept: 'Abonado por Red.es', amount: '-1.000,00€', muted: true },
      { concept: 'IVA NO deducible', amount: '210,00€', muted: false },
    ],
    result: 'Coste real: 210,00€',
    resultClass: 'text-amber-400',
  },
]

const faqs = [
  {
    q: '¿El Kit Digital cubre el IVA?',
    a: 'No. El Bono Kit Digital financia únicamente la base imponible (el importe neto) de los servicios contratados. El IVA o IGIC lo abona el beneficiario directamente al agente digitalizador, como en cualquier otra factura de servicios.',
  },
  {
    q: '¿Cuándo tengo que pagar el IVA?',
    a: 'El IVA se abona en el momento de la factura, igual que cualquier servicio profesional. Si estás en Régimen General, lo recuperas en tu próxima declaración trimestral del Modelo 303, normalmente en un plazo de 1 a 3 meses.',
  },
  {
    q: '¿Qué pasa si estoy en Recargo de Equivalencia?',
    a: 'Los autónomos en Recargo de Equivalencia no pueden deducir el IVA soportado en servicios externos. En ese caso, el IVA de la factura Kit Digital (21%) sí supone un coste real. Te recomendamos consultarlo con tu asesor fiscal antes de contratar.',
  },
  {
    q: '¿Cómo funciona en Canarias con el IGIC?',
    a: 'En Canarias no se aplica IVA sino IGIC, cuyo tipo general es el 7%. Si tu empresa está en Canarias y tributa en Régimen General, puedes deducir el IGIC soportado en tu declaración periódica. El importe a anticipar es significativamente menor que en la Península.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

/* ── Page ────────────────────────────────────────────────────── */
export default function KitDigitalSinIva() {
  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AnimatedBackground />

      {/* ── 1. STICKY MINI-CTA ─────────────────────────────────── */}
      <div className="sticky top-[72px] z-40 backdrop-blur-md bg-[#030305]/80 border-b border-[#00e5ff]/20">
        <div className="container mx-auto max-w-5xl px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs md:text-sm text-slate-300 font-light">
            {'¿No sabes si el \'Sin IVA\' se aplica a tu empresa?'}{' '}
            <span className="text-white font-medium">Te decimos si deduces el IVA/IGIC en 1 minuto.</span>
          </p>
          <Link
            href="/wizard"
            className="shrink-0 px-4 py-1.5 rounded-full bg-[#00e5ff] text-[#030305] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors duration-200"
          >
            Verificar ahora
          </Link>
        </div>
      </div>

      {/* ── 2. HERO & DEFINITION BOX ───────────────────────────── */}
      <section className="relative px-4 pt-16 pb-8 md:px-8 md:pt-24 md:pb-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full glass-premium px-5 py-2.5 text-sm font-medium text-white"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e5ff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00e5ff]" />
              </span>
              Transparencia Fiscal · Kit Digital 2026
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-6 text-balance"
            >
              <span className="text-gradient-heading">La letra pequeña del Kit Digital</span>
              <br />
              <span className="text-gradient-cyan">{'\'Sin IVA\''}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-2xl mb-10"
            >
              La subvención cubre la base neta. El IVA lo pagas tú en la factura, pero si tributas en Régimen General lo recuperas íntegramente. Aquí te explicamos exactamente qué aplica a tu caso.
            </motion.p>
          </motion.div>

          {/* Definition glassmorphism box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="glass-premium rounded-3xl p-7 md:p-10 border-l-2 border-[#00e5ff]/40"
          >
            <h2 className="text-lg font-bold text-white mb-5">Cómo funciona realmente</h2>
            <ul className="space-y-3 mb-6">
              {[
                'El bono cubre el 100% de la base imponible (el importe neto del servicio).',
                'El IVA (21%) aparece en la factura y lo abonas tú al agente digitalizador.',
                'Si estás en Régimen General, ese IVA es 100% deducible en tu Modelo 303 trimestral.',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-light leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* Amber warning */}
            <div className="flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-500/25 px-5 py-4">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-300 leading-relaxed">
                <span className="font-bold">Importante:</span> El impacto final depende de tu régimen fiscal. Actividades exentas (sanitaria, educativa) y comerciantes en Recargo de Equivalencia no pueden deducir el IVA. Consulta siempre a tu asesor fiscal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. TYPICAL CASES 2x2 ───────────────────────────────── */}
      <section className="relative px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Casos habituales según régimen fiscal
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-light">Identifica cuál es el tuyo para saber cuánto pagas realmente.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {taxCases.map((c, idx) => (
              <motion.div
                key={idx}
                variants={cardFade}
                className={`glass-premium rounded-2xl p-6 border-l-2 ${c.borderClass}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-bold text-white leading-tight">{c.regime}</h3>
                  <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${c.badgeClass}`}>
                    {c.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. BREAKDOWN TABLE ─────────────────────────────────── */}
      <section className="relative px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Desglose por solución Kit Digital
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-light">Importes oficiales vigentes en 2026 para Segmento III.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="glass-premium rounded-2xl overflow-hidden"
          >
            {/* Table header */}
            <div className="grid grid-cols-4 gap-0 border-b border-white/[0.08] bg-white/[0.03]">
              {['Solución', 'Base (Bono)', 'IVA (21%)', 'Tú pagas *'].map((h, i) => (
                <div key={i} className={`px-5 py-3.5 text-xs font-bold uppercase tracking-wider ${i === 3 ? 'text-[#00e5ff]' : 'text-slate-400'}`}>
                  {h}
                </div>
              ))}
            </div>
            {/* Table rows */}
            {solutions.map((s, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-4 gap-0 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.02] transition-colors ${idx % 2 === 1 ? 'bg-white/[0.015]' : ''}`}
              >
                <div className="px-5 py-4 text-sm text-white font-medium">{s.name}</div>
                <div className="px-5 py-4 text-sm text-slate-300 font-mono">{s.base}</div>
                <div className="px-5 py-4 text-sm text-slate-300 font-mono">{s.iva}</div>
                <div className="px-5 py-4 text-sm text-[#00e5ff] font-bold font-mono">{s.pays}</div>
              </div>
            ))}
            <div className="px-5 py-3 bg-white/[0.02]">
              <p className="text-[10px] text-slate-500 font-light">* En Régimen General el IVA se recupera vía Modelo 303. Importe anticipado, no coste final.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. INVOICE / RECEIPT CARDS ─────────────────────────── */}
      <section className="relative px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Ejemplos numéricos reales
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-light">Así quedan las cifras según tu situación fiscal.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {invoiceExamples.map((inv, idx) => (
              <motion.div
                key={idx}
                variants={cardFade}
                className="glass-premium rounded-2xl overflow-hidden"
              >
                {/* Receipt header */}
                <div className="bg-white/[0.04] border-b border-white/[0.08] px-5 py-4">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">{inv.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-mono">{inv.sublabel}</p>
                </div>
                {/* Receipt rows */}
                <div className="px-5 py-4 space-y-2 font-mono">
                  {inv.rows.map((row, rIdx) => (
                    <div key={rIdx} className={`flex justify-between text-xs ${row.muted ? 'text-slate-500 line-through decoration-slate-600' : 'text-slate-300'}`}>
                      <span>{row.concept}</span>
                      <span>{row.amount}</span>
                    </div>
                  ))}
                </div>
                {/* Receipt total */}
                <div className={`border-t border-white/[0.08] px-5 py-3 flex justify-between items-center font-mono font-bold text-sm ${inv.resultClass}`}>
                  <span>{inv.result.split(':')[0]}:</span>
                  <span>{inv.result.split(':')[1]}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. TRANSPARENCY BLOCK ──────────────────────────────── */}
      <section className="relative px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="rounded-3xl overflow-hidden border border-[#00e5ff]/15"
            style={{ background: 'linear-gradient(135deg, rgba(0,24,216,0.10) 0%, rgba(0,229,255,0.06) 100%)' }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/[0.06]">
                <ShieldCheck className="w-8 h-8 text-[#00e5ff] mb-5" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
                  Transparencia: Cero Sorpresas
                </h3>
                <ul className="space-y-3">
                  {[
                    'Presupuesto detallado antes de firmar nada.',
                    'Factura con desglose fiscal completo.',
                    'Te explicamos exactamente qué deduces y cuándo.',
                    'Sin cláusulas ocultas ni costes de tramitación.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — terminal block */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Terminal className="w-6 h-6 text-slate-500 mb-4" />
                <div className="bg-[#0a0a0f] rounded-xl border border-white/[0.06] p-5 font-mono text-xs space-y-2">
                  <div className="flex gap-2">
                    <span className="text-slate-600">$</span>
                    <span className="text-[#00e5ff]">verificar --empresa mi-pyme --bono kit-digital</span>
                  </div>
                  <div className="text-slate-500">Conectando con Red.es API...</div>
                  <div className="text-slate-500">Comprobando régimen fiscal...</div>
                  <div className="border-t border-white/[0.06] pt-2 mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">BASE_IMPONIBLE</span>
                      <span className="text-white">1.000,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">IVA_SOPORTADO</span>
                      <span className="text-amber-400">210,00€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">IVA_DEDUCIBLE</span>
                      <span className="text-emerald-400">-210,00€</span>
                    </div>
                    <div className="flex justify-between font-bold border-t border-white/[0.06] pt-1 mt-1">
                      <span className="text-white">COSTE_OCULTO</span>
                      <span className="text-emerald-400">0,00€ ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. FAQ ─────────────────────────────────────────────── */}
      <section className="relative px-4 py-16 md:px-8 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Preguntas frecuentes sobre el IVA
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="space-y-3"
          >
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                variants={cardFade}
                className="group glass-premium rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-semibold text-sm hover:text-[#00e5ff] transition-colors [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg
                    className="w-4 h-4 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-45"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-slate-400 text-sm font-light leading-relaxed border-t border-white/[0.05] pt-4">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ───────────────────────────────────────── */}
      <section className="relative px-4 py-24 md:px-8 md:py-36 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-[#00e5ff]/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.92] text-white mb-6 text-balance"
            >
              Quítate las dudas<br />
              <span className="text-gradient-cyan">de encima</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-base md:text-lg font-light mb-10 max-w-xl"
            >
              Dinos en 60 segundos cuál es tu régimen fiscal y te decimos exactamente cuánto pagarás y cuánto recuperarás.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/wizard"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#00e5ff] text-[#030305] font-bold text-sm uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_40px_rgba(0,229,255,0.3)]"
              >
                Verificar mi caso fiscal en 60s
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
