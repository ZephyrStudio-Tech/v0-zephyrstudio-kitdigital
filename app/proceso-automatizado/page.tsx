'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, FileText, Clock, AlertTriangle, CheckCircle2, Database, ArrowRight, Cpu, GitMerge } from 'lucide-react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/animated-background'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function ProcesoAutomatizadoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <AnimatedBackground />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-4 md:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold uppercase tracking-widest mb-8">
              <Cpu className="w-3.5 h-3.5" />
              Motor de Automatización
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-6 text-balance">
              <span className="text-white">Magia pura.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">Cero papeleo.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Nuestro motor de automatización conecta directamente con los sistemas de Red.es y valida tu expediente en milisegundos. Sin formularios en PDF, sin esperas, sin errores humanos.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/formulario-contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <Zap className="w-4 h-4" />
                Prueba el motor ahora
              </Link>
            </motion.div>
          </motion.div>

          {/* Ambient glow orbs */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0018d8]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* ── Versus Comparison ────────────────────────────────────── */}
      <section className="relative px-4 py-24 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Nosotros vs. la competencia
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 font-light max-w-xl mx-auto">
              La diferencia entre tramitar tu Kit Digital con una agencia tradicional y hacerlo con nuestro motor automatizado.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Traditional agency — muted red */}
            <motion.div variants={fadeUp} className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-red-300">Agencia Tradicional</h3>
              </div>
              {[
                { icon: FileText, text: 'Formularios en PDF que debes rellenar tú' },
                { icon: Clock, text: 'Revisiones manuales que tardan semanas' },
                { icon: AlertTriangle, text: 'Errores humanos que retrasan el expediente' },
                { icon: Clock, text: 'Sin visibilidad del estado de tu solicitud' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300/70 font-light">{item.text}</p>
                </div>
              ))}
            </motion.div>

            {/* ZephyrStudio — cyan/blue */}
            <motion.div variants={fadeUp} className="rounded-3xl border border-[#00e5ff]/20 bg-[#00e5ff]/[0.03] p-8 flex flex-col gap-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-[#0018d8]/5 pointer-events-none" />
              <div className="flex items-center gap-3 mb-2 relative">
                <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#00e5ff]" />
                </div>
                <h3 className="text-lg font-bold text-[#00e5ff]">ZephyrStudio</h3>
              </div>
              {[
                { text: 'Wizard de 60 segundos, nosotros hacemos el resto' },
                { text: 'Validación instantánea con APIs de Red.es' },
                { text: 'Cero errores: lógica 100% automatizada y testeada' },
                { text: 'Dashboard en tiempo real con el estado de tu expediente' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 relative">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 font-light">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── How the Engine Works ─────────────────────────────────── */}
      <section className="relative px-4 py-24 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Cómo funciona el motor
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 font-light max-w-xl mx-auto">
              Tres pasos. Ningún humano tocando tu expediente a menos que sea estrictamente necesario.
            </motion.p>
          </motion.div>

          {/* Vertical timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="relative flex flex-col gap-0"
          >
            {/* Vertical line */}
            <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-[#00e5ff]/40 via-[#0018d8]/40 to-transparent hidden md:block" />

            {[
              {
                step: '01',
                icon: GitMerge,
                color: '#00e5ff',
                title: 'Entrada de datos — Wizard',
                desc: 'El cliente rellena nuestro wizard inteligente en menos de 60 segundos. El sistema captura NIF, segmento de empresa, CNAE y empleados — y ya no necesitamos nada más.',
              },
              {
                step: '02',
                icon: Database,
                color: '#0018d8',
                title: 'Validación instantánea — APIs',
                desc: 'Nuestro backend ejecuta llamadas en paralelo a la API de Red.es, el Registro Mercantil y la AEAT. En menos de 2 segundos sabemos si el bono está disponible y en qué cuantía.',
              },
              {
                step: '03',
                icon: Zap,
                color: '#00e5ff',
                title: 'Aprobación automatizada — RPA',
                desc: 'Un agente de RPA (Robotic Process Automation) rellena, firma digitalmente y envía el Acuerdo de Prestación de Soluciones directamente en la plataforma de Acelera Pyme. Sin intervención humana.',
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="relative flex gap-6 md:gap-10 pb-12 last:pb-0">
                {/* Step icon */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border"
                  style={{ background: `${item.color}10`, borderColor: `${item.color}30` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold" style={{ color: item.color }}>{item.step}</span>
                    <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="relative px-4 py-24 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative rounded-3xl border border-[#00e5ff]/20 bg-white/[0.02] backdrop-blur-2xl p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 via-transparent to-[#0018d8]/10 pointer-events-none rounded-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3.5 h-3.5" />
                60 segundos
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight text-balance">
                Prueba nuestro motor<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">ahora mismo.</span>
              </h2>

              <p className="text-slate-400 font-light mb-10 max-w-lg mx-auto">
                Rellena nuestro wizard y en menos de un minuto sabrás cuánto dinero puedes conseguir y si tu empresa cumple los requisitos.
              </p>

              <Link
                href="/formulario-contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] text-white font-bold text-sm uppercase tracking-wide px-10 py-4 rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                Iniciar el Wizard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
