'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronRight, ArrowUpRight, User, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedBackground } from '@/components/animated-background'
import { Marquee } from '@/components/marquee'
import { MagneticButton } from '@/components/magnetic-button'
import Link from 'next/link'
import { BlogSection } from '@/components/blog-section'
import { ProcessSteps } from '@/components/process-steps'
import { HardwareCarousel } from '@/components/hardware-carousel'
import { FeaturedProjects } from '@/components/featured-projects'

/* ── Animation Variants ────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 22,
      stiffness: 100,
      mass: 0.8,
    },
  },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const heroLine = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 18,
      stiffness: 80,
      mass: 1,
    },
  },
}

const cardFade = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 90,
      mass: 0.8,
    },
  },
}

/* ── Data ──────────────────────────────────────────────────────── */

const packages = [
  {
    name: 'Sitio Web y Presencia Digital',
    grantValue: 'Hasta 2.000€',
    description: 'Tu web nueva en modo performance: rápida, indexable y preparada para captar leads desde el día 1.',
    iconUrl: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/icono%20web.png',
    features: [
      { title: 'Core Web Vitals + SEO técnico', sub: 'Cargas inferiores a 1 segundo.' },
      { title: 'Diseño orientado a conversión', sub: 'Cero plantillas. Diseño a medida para tu marca.' },
      { title: 'CMS editable por tu equipo', sub: 'Panel de control intuitivo para tu equipo.' }
    ],
    techStack: ['Next.js', 'Vercel', 'TailwindCSS', 'React']
  },
  {
    name: 'Comercio Electrónico',
    grantValue: 'Hasta 2.000€',
    description: 'E-commerce listo para vender: catálogo, pagos y logística con checkout optimizado.',
    iconUrl: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/icono%20ecom.png',
    features: [
      { title: 'Pagos (Stripe/Redsys) + seguridad', sub: 'Stripe, PayPal, Apple Pay y Redsys.' },
      { title: 'Stock + integraciones', sub: 'Control de stock y sincronización con tu ERP.' },
      { title: 'Recuperación de carrito + analítica', sub: 'Checkout optimizado para evitar carritos abandonados.' }
    ],
    techStack: ['WooCommerce', 'Stripe', 'AWS Cloud']
  },
  {
    name: 'Gestión de Redes Sociales',
    grantValue: 'Hasta 2.500€',
    description: 'Contenido y reporting para tener presencia constante y generar demanda sin improvisar.',
    iconUrl: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/icono%20rrss.png',
    features: [
      { title: 'Plan editorial + posicionamiento', sub: 'Análisis de competidores y blueprint estratégico.' },
      { title: 'Creatividades + formatos cortos', sub: 'Creación de contenido estático y short-form video.' },
      { title: 'KPIs claros (mes a mes)', sub: 'Métricas de conversión mensuales transparentes.' }
    ],
    techStack: ['Meta Suite', 'LinkedIn B2B', 'TikTok Ads']
  },
  {
    name: 'Posicionamiento SEO',
    grantValue: 'Hasta 2.000€',
    description: 'SEO para negocio: arquitectura, contenido y autoridad para captar búsquedas con intención.',
    iconUrl: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/1%20SEO.png',
    features: [
      { title: 'Keywords con intención (money)', sub: 'Atacamos palabras clave que generan ingresos reales.' },
      { title: 'Indexación + CWV + logs si aplica', sub: 'Corrección de crawl budget y errores técnicos WPO.' },
      { title: 'Autoridad y enlaces seguros', sub: 'Construcción de autoridad de dominio (Linkbuilding).' }
    ],
    techStack: ['Ahrefs', 'Screaming Frog', 'Google Analytics 4']
  }
]



const reviews = [
  {
    text: 'Nos gestionaron el Kit Digital de forma súper rápida y eficiente. De todas las opciones que valoré, fueron los más claros y ágiles. Repetiría.',
    author: 'Àlex Aubets Toneu',
    role: 'Reseña de Google',
    company: 'Verificada',
  },
  {
    text: 'Nos hicieron todo el tramite del kit digital de forma gratuita, la web la teníamos funcional a las dos semanas de haber sido aprobado el bono y el ordenado llegó correctamente',
    author: 'Vaby Rodríguez',
    role: 'Reseña de Google',
    company: 'Verificada',
  },
  {
    text: 'Captaron nuestras necesidades desde el primer momento y las llevaron a una web moderna y funcional. Profesionales, atentos y muy resolutivos en todo el proceso.',
    author: 'Con Perros y a lo Loco',
    role: 'Reseña de Google',
    company: 'Verificada',
  },
]

const faqs = [
  {
    question: '¿Qué equipo puedo conseguir con el Kit Digital (Mac o PC)?',
    highlight: 'equipo',
    answer:
      'Depende de tu segmento y de la solución contratada (p. ej. Puesto de Trabajo Seguro). Tras verificar tu caso, te indicamos las opciones disponibles y la diferencia a pagar si el equipo supera el importe subvencionable.',
  },
  {
    question: '¿Cómo funciona la subvención y qué parte pagas tú?',
    highlight: 'subvención',
    answer:
      'La ayuda cubre hasta el límite de tu bono según segmento. Si eliges una opción superior al importe subvencionable, solo pagarías la diferencia. Antes de avanzar te lo dejamos por escrito, con el desglose.',
  },
  {
    question: '¿Cuánto tarda el proceso y cuándo empiezo sin esperas?',
    highlight: 'sin esperas',
    answer:
      'La concesión depende de plazos administrativos. Lo que sí aceleramos nosotros: validación, preparación del expediente y documentación. Si eliges Proceso Automatizado, el flujo se dispara sin esperas: contratos, firmas y pasos siguientes van entrando de forma guiada.',
  },
  {
    question: '¿El bono incluye IVA/IGIC? ¿Qué significa "sin IVA"?',
    highlight: 'IVA/IGIC',
    answer:
      'Depende de tu situación fiscal. Por eso lo tratamos como un caso individual: verificamos tu escenario y te decimos exactamente qué aplica (IVA/IGIC) y cómo queda el pago final, antes de firmar nada.',
  },
  {
    question: '¿Qué pasa después? Soporte, mantenimiento y siguientes pasos',
    highlight: 'Soporte',
    answer:
      'Tras la entrega/activación, tienes un periodo de soporte incluido según solución. Además, te dejamos el proceso documentado (entregables, accesos y checklist) para que todo quede trazable.',
  },
  {
    question: '¿Sois Agente Digitalizador?',
    highlight: 'Agente Digitalizador',
    answer:
      'Trabajamos mediante un partner Agente Digitalizador (acreditado) que es quien formaliza la tramitación. Nosotros operamos la parte técnica y el proceso automatizado para que tú no pierdas tiempo.',
  },
  {
    question: '¿Tengo que hacer llamadas o trámites presenciales?',
    highlight: 'sin llamadas',
    answer:
      'No. El proceso puede hacerse 100% online. Si eliges Proceso Automatizado, todo va por flujo guiado: notificaciones, documentos y firmas digitales sin esperas.',
  },
]

/* ── Page ──────────────────────────────────────────────────────── */

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZephyrStudio',
    url: 'https://kitdigitalzephyrstudio.es',
    logo: 'https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/logo_zephyrstudio.png',
    description: 'Agente Digitalizador Adherido especializado en la tramitación e implantación de soluciones tecnológicas B2B y Kit Digital para PYMEs.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34614286277',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué equipo puedo conseguir con el Kit Digital (Mac o PC)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depende de tu segmento y de la solución contratada (p. ej. Puesto de Trabajo Seguro). Tras verificar tu caso, te indicamos las opciones disponibles y la diferencia a pagar si el equipo supera el importe subvencionable.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo funciona la subvención y qué parte pagas tú?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La ayuda cubre hasta el límite de tu bono según segmento. Si eliges una opción superior al importe subvencionable, solo pagarías la diferencia. Antes de avanzar te lo dejamos por escrito, con el desglose.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tarda el proceso y cuándo empiezo sin esperas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La concesión depende de plazos administrativos. Lo que sí aceleramos nosotros: validación, preparación del expediente y documentación. Si eliges Proceso Automatizado, el flujo se dispara sin esperas: contratos, firmas y pasos siguientes van entrando de forma guiada.',
        },
      },
      {
        '@type': 'Question',
        name: '¿El bono incluye IVA/IGIC? ¿Qué significa "sin IVA"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depende de tu situación fiscal. Por eso lo tratamos como un caso individual: verificamos tu escenario y te decimos exactamente qué aplica (IVA/IGIC) y cómo queda el pago final, antes de firmar nada.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué pasa después? Soporte, mantenimiento y siguientes pasos',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tras la entrega/activación, tienes un periodo de soporte incluido según solución. Además, te dejamos el proceso documentado (entregables, accesos y checklist) para que todo quede trazable.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Sois Agente Digitalizador?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajamos mediante un partner Agente Digitalizador (acreditado) que es quien formaliza la tramitación. Nosotros operamos la parte técnica y el proceso automatizado para que tú no pierdas tiempo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Tengo que hacer llamadas o trámites presenciales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. El proceso puede hacerse 100% online. Si eliges Proceso Automatizado, todo va por flujo guiado: notificaciones, documentos y firmas digitales sin esperas.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="relative min-h-screen">
        <AnimatedBackground />

        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="relative px-4 pt-36 pb-20 md:px-8 md:pt-48 md:pb-36 lg:pt-56 lg:pb-44">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col items-center text-center"
            >
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                className="mb-10 inline-flex items-center gap-2.5 rounded-full glass-premium px-5 py-2.5 text-sm font-medium text-white"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(229,255,0)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgb(229,255,0)]" />
                </span>
                Lista de espera disponible
              </motion.div>

              {/* H1 — single tag, CRO-first copy */}
              <motion.h1
                variants={fadeUp}
                className="mb-8 text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter leading-[0.9] text-white text-balance"
              >
                Kit Digital para Pymes y autónomos,{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-500">
                  equipo incluido.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="mb-10 max-w-xl text-base md:text-lg font-light text-slate-400 leading-relaxed"
              >
                Verificamos tu caso en 60s. Si encajas, activamos un proceso prioritario (sin llamadas) y dejamos la solicitud lista.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/formulario-contacto">
                  <MagneticButton
                    className="btn-neon-pulse group rounded-full bg-gradient-to-b from-[#0022ff] to-[#000f8a] px-8 py-4 text-white font-bold tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_40px_-10px_rgba(0,34,255,0.8)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_60px_-10px_rgba(0,34,255,1)] transition-all text-base flex items-center gap-2 justify-center"
                  >
                    Verificar mi caso (60s)
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </MagneticButton>
                </Link>
                <a
                  href="#packages"
                  className="btn-liquid-fill glass-premium font-medium text-white px-8 py-4 text-base rounded-2xl transition-all duration-300 flex items-center justify-center"
                >
                  Ver soluciones
                </a>
              </motion.div>

              {/* Microcopy trust bar */}
              <motion.p
                variants={fadeUp}
                className="mt-6 text-xs text-slate-400 text-center"
              >
                Sin papeleo en cualquier opción · Tramitación automática = sin esperas · Soporte en toda España
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─── Marquee ──────────────────────────────────────────── */}
        <Marquee />

        {/* ─── Segment Navigation Block (SEO Siloing) ──────────────────────── */}
        <section className="relative px-4 py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto max-w-5xl relative z-10">

            {/* Header & Side Link */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Tu Kit Digital según el <span className="text-[#00e5ff]">tamaño de tu empresa</span>
                </h2>
                <p className="text-slate-400 mt-2 font-light">
                  Selecciona tu segmento y te mostramos qué puedes solicitar y cuánto te corresponde (con tramitación guiada o automática)
                </p>
              </div>
              <Link
                href="/kit-digital-sin-iva"
                className="text-sm text-slate-400 hover:text-[#00e5ff] underline decoration-slate-700 hover:decoration-[#00e5ff] underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                {'Kit Digital sin IVA: cómo funciona en tu caso →'}
              </Link>
            </div>

            {/* Segment Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card Segmento III */}
              <Link href="/segmento-iii" className="group glass-premium rounded-3xl p-8 border border-white/10 hover:border-[#00e5ff]/50 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 block relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00e5ff]/5 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center border border-[#00e5ff]/20">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    HASTA 3.000€ · Prioritario
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors relative z-10">
                  Segmento III <span className="text-slate-400 text-lg font-medium">(0-2 empleados)</span>
                </h3>
                <p className="text-slate-400 mb-8 relative z-10 leading-relaxed font-light">
                  Incluye <strong className="text-white font-medium">Equipo de trabajo (Ordenador Mac o PC)</strong> y soluciones para empezar a digitalizarte. Si eliges Tramitación automática, va sin esperas y sin llamadas.
                </p>

                <div className="flex items-center text-white font-medium text-sm gap-2 group-hover:gap-3 transition-all relative z-10">
                  Ver opciones del Segmento III <ChevronRight className="w-4 h-4 text-[#00e5ff]" />
                </div>
              </Link>

              {/* Card Segmento II */}
              <Link href="/segmento-ii" className="group glass-premium rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 block relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    HASTA 6.000€ · Automatizable
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors relative z-10">
                  Segmento II <span className="text-slate-400 text-lg font-medium">(3-9 empleados)</span>
                </h3>
                <p className="text-slate-400 mb-8 relative z-10 leading-relaxed font-light">
                  Cumple con <strong className="text-white font-medium">Factura Electrónica (Ley Crea y Crece)</strong> y automatiza tu gestión. Con Tramitación automática, activamos el proceso prioritario y sin llamadas.
                </p>

                <div className="flex items-center text-white font-medium text-sm gap-2 group-hover:gap-3 transition-all relative z-10">
                  Ver opciones del Segmento II <ChevronRight className="w-4 h-4 text-blue-400" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Process Steps ────────────────────────────────────── */}
        <ProcessSteps />

        {/* ─── Projects ────────────────────────────────────── */}
        <FeaturedProjects />

        {/* ─── Hardware Catalogue Carousel ──────────────────────── */}
        <HardwareCarousel />

        {/* ─── Authority & SEO Block ────────────────────────────── */}
        <section className="relative px-4 py-20 md:px-8 md:py-36">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.92] mb-8">
                  <span className="text-gradient-heading">
                    Tramitación con Partner.
                  </span>
                  <br />
                  <span className="text-[#00e5ff]">100% automatizado</span>
                </h2>
                <p className="text-slate-400 leading-relaxed text-base md:text-lg font-light max-w-lg">
                  Orquestamos el Kit Digital de principio a fin junto a nuestro partner Agente Digitalizador: validación, contratos, firma y presentación del expediente. Tú eliges la solución (web, factura electrónica o puesto de trabajo seguro) y el sistema lo mueve todo — sin llamadas y con seguimiento por escrito.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                className="glass-premium rounded-3xl p-8 md:p-10 relative"
              >
                <div className="absolute -top-3.5 left-8 bg-[#030305] px-5 py-1.5 rounded-full border border-[#00e5ff]/30 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                  <p className="text-xs font-semibold text-[#00e5ff] tracking-wide">
                    Proceso 100% Automatizado
                  </p>
                </div>

                <div className="space-y-5 mt-4">
                  {[
                    'Verificación en 60s (viabilidad y segmento)',
                    'Contratos y firma digital automáticos (sin llamadas)',
                    'Presentación del expediente vía partner Agente Digitalizador',
                    'Seguimiento del expediente y estado en todo momento',
                    'Equipo de trabajo incluido',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00e5ff]/10 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-[#00e5ff]" />
                      </div>
                      <span className="text-sm text-slate-300 font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Packages (Compact Refactor) ──────────────────────── */}
        <section id="packages" className="relative px-4 py-20 md:px-8 md:py-36">
          <div className="container mx-auto max-w-[1100px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.92] mb-4">
                <span className="text-gradient-heading">Soluciones Kit Digital</span>{' '}
                <span className="text-[#00e5ff]">listas para activar</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  variants={cardFade}
                  className="group relative glass-premium rounded-[2rem] p-6 md:p-8 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9),0_0_30px_rgba(0,229,255,0.1)] hover:border-[#00e5ff]/30"
                >
                  {/* Watermark Icon */}
                  <svg className="absolute -right-[15%] -top-[10%] w-[300px] h-[300px] text-white/[0.03] pointer-events-none z-0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-12 group-hover:text-[#00e5ff]/[0.06]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    {idx === 0 && <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>}
                    {idx === 1 && <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>}
                    {idx === 2 && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>}
                    {idx === 3 && <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>}
                  </svg>

                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div className="flex items-center gap-5">
                        {/* 3D PNG Icon - INCREASED SIZE from 72px to 90px */}
                        <div className="w-[90px] h-[90px] flex items-center justify-center animate-[float-soft_4s_ease-in-out_infinite] relative z-10 shrink-0">
                          <img
                            src={pkg.iconUrl}
                            alt={`${pkg.name} Icon`}
                            className="w-full h-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_25px_30px_rgba(0,229,255,0.3)]"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-none m-0 tracking-tight mb-2">{pkg.name}</h3>
                          <span className="font-mono text-xs text-[#00e5ff] block">&gt; Bono: {pkg.grantValue}</span>
                        </div>
                      </div>
                      <div className="bg-[#0018d8]/20 border border-[#0018d8]/50 text-blue-300 px-3 py-1 rounded-full font-mono text-[0.65rem] font-bold uppercase tracking-widest whitespace-nowrap shrink-0">
                        + Equipo Incluido
                      </div>
                    </div>

                    {/* Reduced Text Size and Spacing */}
                    <p className="text-slate-400 text-sm md:text-base font-light mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />

                    {/* Tighter list spacing */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <div className="mt-1 w-4 h-4 rounded-md bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center shrink-0">
                            <div className="w-[4px] h-[7px] border-solid border-[#00e5ff] border-b-[1.5px] border-r-[1.5px] border-l-0 border-t-0 rotate-45 -mt-0.5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-slate-50 text-sm font-medium mb-0.5">{feature.title}</span>
                            <span className="text-slate-400 text-xs font-light leading-snug">{feature.sub}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills - Smaller and tighter */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {pkg.techStack.map((tech, tidx) => (
                        <span key={tidx} className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.08] rounded-md text-[0.7rem] text-slate-400 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link href="/formulario-contacto" className="flex justify-between items-center w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm font-medium transition-all duration-300 mt-auto group/btn hover:bg-white/[0.08] hover:border-white/20">
                      <span>Configurar Módulo</span>
                      <ChevronRight className="w-4 h-4 text-[#00e5ff] transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── Slim CTA Ribbon (Conversion Point) ──────────────────────── */}
        <section className="relative px-4 py-12 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="glass-premium rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-[#00e5ff]/20 bg-gradient-to-r from-white/[0.02] to-[#0018d8]/10 shadow-[0_0_40px_rgba(0,229,255,0.05)] hover:shadow-[0_0_60px_rgba(0,229,255,0.1)] transition-shadow duration-500">

              {/* LEFT: Copy */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                  ¿Listo para activar tu Kit Digital{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">
                    en automático?
                  </span>
                </h3>
                <p className="text-slate-400 font-light text-sm md:text-base mb-4">
                  Diagnóstico en 60s + Proceso Automatizado sin llamadas ni esperas.
                </p>

                {/* Micro-badges */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: '✦', label: 'Sin llamadas' },
                    { icon: '✦', label: 'Sin papeleo' },
                    { icon: '✦', label: 'Proceso Prioritario' },
                  ].map((badge) => (
                    <span
                      key={badge.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(0,229,255,0.06)',
                        border: '1px solid rgba(0,229,255,0.15)',
                        color: '#94a3b8',
                      }}
                    >
                      <span className="text-[#00e5ff] text-[8px]">{badge.icon}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT: CTA Block */}
              <div className="shrink-0 flex flex-col items-center md:items-end gap-2">
                <Link
                  href="/formulario-contacto"
                  className="btn-neon-pulse group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm md:text-base transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, #0022ff, #000f8a)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 0 30px -8px rgba(0,34,255,0.7)',
                    border: '1px solid rgba(0,229,255,0.25)',
                  }}
                >
                  Activar Proceso Automatizado
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                {/* Microcopy under button */}
                <p className="text-xs text-slate-500 font-light flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
                    style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }}
                  />
                  Tarda 60s · Respuesta inmediata
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Reviews ───────��──────────────────────────────────── */}
        <section className="relative py-20 md:py-36 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="text-center mb-12 md:mb-20 px-4"
            >
              <h2 className="text-3xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92]">
                <span className="text-gradient-heading">Reseñas reales en</span>{' '}
                <span className="text-gradient-cyan">Google</span>
              </h2>
            </motion.div>

            <div className="w-full">
              {/* Mobile: horizontal snap carousel — Desktop: 3-col grid */}
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-2 md:grid md:grid-cols-3 md:gap-5 md:px-8 md:overflow-visible md:pb-0">
                {reviews.map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardFade}
                    className="glass-premium rounded-2xl p-6 md:rounded-3xl md:p-8 min-w-[82vw] md:min-w-0 w-full flex-shrink-0 snap-center transition-all duration-300"
                  >
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#00e5ff] text-sm">{'★'}</span>
                      ))}
                    </div>
                    <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base font-light">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-white text-sm">{review.author}</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {review.role} &middot; {review.company}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile scroll indicator — hidden on desktop */}
              <div className="flex items-center justify-center gap-3 mt-5 md:hidden">
                {reviews.map((_, idx) => (
                  <span
                    key={idx}
                    className={`block rounded-full transition-all duration-300 ${idx === 0 ? 'w-5 h-1.5 bg-[#00e5ff]' : 'w-1.5 h-1.5 bg-white/20'}`}
                  />
                ))}
                <span className="ml-2 text-xs text-slate-500 flex items-center gap-1">
                  desliza
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-500 animate-[pulse_1.5s_ease-in-out_infinite]">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Blog / Resources ─────────────────────────────────── */}
        <BlogSection />

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <section className="relative px-4 py-20 md:px-8 md:py-36">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92]">
                <span className="text-gradient-heading">Preguntas frecuentes sobre</span>{' '}
                <span className="text-gradient-cyan">Kit Digital</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="glass-premium rounded-2xl px-7 border-white/[0.08] transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-[#00e5ff] transition-colors font-semibold py-6 text-base tracking-tight [&[data-state=open]]:text-[#00e5ff] [&>svg]:text-white">
                      <span>
                        {faq.highlight
                          ? faq.question.split(faq.highlight).map((part, i, arr) =>
                            i < arr.length - 1 ? (
                              <React.Fragment key={i}>
                                {part}
                                <span className="text-[#00e5ff]">{faq.highlight}</span>
                              </React.Fragment>
                            ) : (
                              part
                            )
                          )
                          : faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 leading-relaxed pb-6 text-sm font-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ─── Final CTA Asymmetrical Section ───────────────────── */}
        {/* FIX 2: overflow-x-clip → overflow-hidden (clip breaks sticky children) */}
        <section className="relative px-4 py-20 md:px-8 md:py-36 overflow-hidden">
          <div className="mx-auto w-full max-w-[1200px]">

            {/* grid-cols-1 on mobile, 2-col on md+ */}
            <div
              className="relative w-full rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-10 lg:p-[5rem_4rem] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10 lg:gap-16 items-center"
              style={{
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderTop: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
              }}
            >

              {/* ===== LEFT COLUMN: Content ===== */}
              <div className="relative z-10 text-left">

                {/* FIX 4: animate-pulse via className, not inline style */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#00e5ff]/5 border border-[#00e5ff]/20 mb-4 sm:mb-8">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse"
                    style={{ boxShadow: '0 0 10px #00e5ff' }}
                  />
                  <span className="text-[#00e5ff] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    PROCESO AUTOMATIZADO
                  </span>
                </div>

                <h2
                  className="font-extrabold leading-[0.95] tracking-tighter mb-3 sm:mb-6"
                  style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}
                >
                  <span className="text-white">Kit Digital, sin llamadas.</span>
                  <span
                    className="block mt-1 sm:mt-2 text-transparent"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}
                  >
                    Proceso claro. Por escrito.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-lg text-slate-400 leading-relaxed sm:leading-[1.7] mb-6 sm:mb-12 max-w-[500px]">
                  Validamos tu segmento, activamos el flujo automatizado y te enviamos los contratos para firma digital. Nuestro partner Agente Digitalizador presenta la solicitud y nosotros ejecutamos la entrega (software/hardware) sin esperas.
                </p>

                {/* FIX 5: CTA button — consistent blue gradient (not white) */}
                <Link
                  href="/formulario-contacto"
                  className="btn-neon-pulse group relative inline-flex items-center gap-2 sm:gap-3 font-semibold text-white text-xs sm:text-sm md:text-base px-5 sm:px-10 py-2.5 sm:py-4 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 no-underline"
                  style={{
                    background: 'linear-gradient(135deg, #0022ff, #000f8a)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 0 30px -8px rgba(0,34,255,0.7)',
                    border: '1px solid rgba(0,229,255,0.25)',
                  }}
                >
                  <span className="relative z-[2]">
                    Verificar mi caso (60s)
                  </span>
                  <svg
                    className="relative z-[2] w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* ===== RIGHT COLUMN: 3D Terminal ===== */}
              <div className="relative w-full flex items-center justify-center group" style={{ perspective: '1200px' }}>

                <div
                  className="relative w-full max-w-[400px] backdrop-blur-xl rounded-xl sm:rounded-3xl p-4 sm:p-8 transition-all duration-700 ease-out
                    lg:[transform:rotateY(-8deg)_rotateX(4deg)]
                    group-hover:[transform:rotateY(0deg)_rotateX(0deg)_translateY(-10px)]
                    shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_40px_80px_rgba(0,229,255,0.15)]
                    border border-white/10 border-t-white/20 group-hover:border-[#00e5ff]/30"
                  style={{
                    background: 'rgba(10,10,15,0.7)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Header bar */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-2 sm:pb-4 mb-3 sm:mb-6">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2">
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                      </svg>
                      <span className="text-white font-mono text-[10px] sm:text-sm">diagnostic.sh</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700" />
                      <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700" />
                    </div>
                  </div>

                  {/* Terminal rows */}
                  <div className="space-y-2 sm:space-y-5">
                    {[
                      { cmd: '> Grant_Limit', val: 'Segmento_Verificado [OK]', color: 'text-[#00e5ff]' },
                      { cmd: '> Hardware_Payload', val: 'EQUIPO_GRATIS', color: 'text-blue-500' },
                      { cmd: '> Bureaucracy_Bypass', val: '[Proceso_Guiado]', color: 'text-[#00e5ff]' },
                      { cmd: '> System_Status', val: 'Atención_Rápida [OK]', color: 'text-emerald-400 animate-pulse' },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between items-center font-mono text-[9px] sm:text-[13px] text-slate-400">
                        <span>{r.cmd}</span>
                        <span className={`${r.color} font-bold`}>{r.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chip 1 - Top Right */}
                <div className="absolute top-[-0.5rem] right-[-0.25rem] sm:top-[-1rem] sm:right-0 lg:top-[-2rem] lg:right-[-2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-float">
                  <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-[#00e5ff]/10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-mono">Seguridad</span>
                    <span className="text-[10px] sm:text-sm font-semibold text-white">Biometría Cripto</span>
                  </div>
                </div>

                {/* Chip 2 - Bottom Left */}
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
                    <span className="text-[10px] sm:text-sm font-semibold text-white">Apple Silicon</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  )
}
