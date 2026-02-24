'use client'

import { motion } from 'framer-motion'
import { Check, ChevronRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedBackground } from '@/components/animated-background'
import { Header } from '@/components/header'
import { Marquee } from '@/components/marquee'
import { MagneticButton } from '@/components/magnetic-button'

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
    name: 'WEB',
    grantValue: 'Hasta 2.000€',
    description: 'No hacemos webs corporativas tradicionales. Desarrollamos plataformas de ultra-alta velocidad (Core Web Vitals) orientadas a la conversión B2B/B2C.',
    iconUrl: 'https://kitdigital-2026-supabase-kd2026.ijatkc.easypanel.host/storage/v1/object/public/img_web/icono%20web.png',
    features: [
      { title: 'Arquitectura Headless', sub: 'Cargas inferiores a 1 segundo.' },
      { title: 'Diseño UI/UX Custom', sub: 'Cero plantillas. Diseño a medida para tu marca.' },
      { title: 'CMS Autogestionable', sub: 'Panel de control intuitivo para tu equipo.' }
    ],
    techStack: ['Next.js', 'Vercel', 'TailwindCSS', 'React']
  },
  {
    name: 'ECOMMERCE',
    grantValue: 'Hasta 2.000€',
    description: 'Sistemas transaccionales escalables. Desde la captación del usuario hasta el checkout encriptado y la sincronización de stock bidireccional.',
    iconUrl: 'https://kitdigital-2026-supabase-kd2026.ijatkc.easypanel.host/storage/v1/object/public/img_web/icono%20ecom.png',
    features: [
      { title: 'Pasarelas de Pago Integradas', sub: 'Stripe, PayPal, Apple Pay y Redsys.' },
      { title: 'Gestión Avanzada de Inventario', sub: 'Control de stock y sincronización con tu ERP.' },
      { title: 'Funnels de Alta Conversión', sub: 'Checkout optimizado para evitar carritos abandonados.' }
    ],
    techStack: ['WooCommerce', 'Stripe', 'AWS Cloud']
  },
  {
    name: 'SOCIAL',
    grantValue: 'Hasta 2.500€',
    description: 'Construimos autoridad de marca. Estrategias algorítmicas diseñadas para capturar atención y derivar tráfico cualificado a tu embudo comercial.',
    iconUrl: 'https://kitdigital-2026-supabase-kd2026.ijatkc.easypanel.host/storage/v1/object/public/img_web/icono%20rrss.png',
    features: [
      { title: 'Auditoría de Mercado', sub: 'Análisis de competidores y blueprint estratégico.' },
      { title: 'Producción de Activos Visuales', sub: 'Creación de contenido estático y short-form video.' },
      { title: 'Reporting de KPIs', sub: 'Métricas de conversión mensuales transparentes.' }
    ],
    techStack: ['Meta Suite', 'LinkedIn B2B', 'TikTok Ads']
  },
  {
    name: 'SEO CORE',
    grantValue: 'Hasta 2.000€',
    description: 'Posicionamiento orgánico científico. Dominamos las SERPs mediante auditorías técnicas exhaustivas, arquitectura de enlaces y contenido semántico.',
    iconUrl: 'https://kitdigital-2026-supabase-kd2026.ijatkc.easypanel.host/storage/v1/object/public/img_web/1%20SEO.png',
    features: [
      { title: 'Keyword Research Transaccional', sub: 'Atacamos palabras clave que generan ingresos reales.' },
      { title: 'Auditoría de Indexación', sub: 'Corrección de crawl budget y errores técnicos WPO.' },
      { title: 'Estrategia Off-Page', sub: 'Construcción de autoridad de dominio (Linkbuilding).' }
    ],
    techStack: ['Ahrefs', 'Screaming Frog', 'Google Analytics 4']
  }
]

const hardwareCatalog = [
  {
    name: 'MacBook Air M3',
    specs: 'Chip M3 · 8GB RAM · 256GB SSD',
    price: 1299,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1707329585306'
  },
  {
    name: 'iMac 24"',
    specs: 'Chip M3 · Pantalla 4.5K · 256GB',
    price: 1619,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697303846054'
  },
  {
    name: 'iPhone 15 Pro',
    specs: 'Titanio · Chip A17 Pro · 128GB',
    price: 1219,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846363993'
  },
  {
    name: 'Mac mini M2',
    specs: 'Chip M2 · 8GB RAM · 256GB SSD',
    price: 719,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671565009308'
  }
]

const projects = [
  { name: 'Plataforma B2B SaaS', tag: 'Web Corporativa + API' },
  { name: 'E-commerce Moda', tag: 'WooCommerce + Stripe' },
  { name: 'Portal Inmobiliario', tag: 'Next.js + CMS' },
  { name: 'App Gestión Recursos', tag: 'Odoo + Custom' },
  { name: 'Marketplace Multi-vendor', tag: 'Ecommerce + API' },
]

const reviews = [
  {
    text: 'La integración del hardware Mac con el software fue impecable. Ahora trabajamos con equipos de primer nivel sin inversión inicial.',
    author: 'María González',
    role: 'Dir. Comercial',
    company: 'TechSolutions SL',
  },
  {
    text: 'El proceso fue extremadamente ágil. En menos de una semana teníamos nuestro nuevo e-commerce operativo y el equipo Apple configurado.',
    author: 'Carlos Martínez',
    role: 'CEO',
    company: 'ModaOnline',
  },
  {
    text: 'Profesionales excepcionales. No solo nos digitalizaron, nos transformaron. El ROI ha sido inmediato.',
    author: 'Ana Rodríguez',
    role: 'Gerente TI',
    company: 'InnovaGroup',
  },
]

const blogPosts = [
  { tag: 'Hardware', title: 'Mac vs PC: Por qué empresas eligen Apple' },
  { tag: 'Subvenciones', title: 'Guía completa Kit Digital 2026' },
  { tag: 'Infraestructura', title: 'Cloud-first: Arquitectura moderna' },
]

const faqs = [
  {
    question: '¿Qué modelos de Mac incluye el servicio?',
    answer:
      'Dependiendo de tu segmento, incluimos desde MacBook Air M3 hasta MacBook Pro M3 Max, iMac 24", o Mac Studio. Todo hardware de grado empresarial con garantía Apple completa.',
  },
  {
    question: '¿Cómo funciona la financiación al 100%?',
    answer:
      'El Bono Digital cubre la totalidad de los servicios digitales Y el equipamiento necesario para operarlos. No requiere inversión inicial. Gestionamos toda la burocracia por ti.',
  },
  {
    question: '¿Cuánto tarda la concesión del bono?',
    answer:
      'El triage inicial es en menos de 1 minuto. La solicitud formal tarda 48-72h. Una vez aprobado (generalmente 2-3 semanas), iniciamos el despliegue inmediatamente.',
  },
  {
    question: '¿El IVA también está cubierto?',
    answer:
      'Sí, el bono cubre el 100% del importe incluyendo IVA. No hay costes ocultos ni sorpresas posteriores.',
  },
  {
    question: '¿Qué pasa después de implementar?',
    answer:
      'Ofrecemos soporte técnico continuado, actualizaciones de software, y un modelo de mantenimiento predictivo. Tu infraestructura siempre actualizada.',
  },
]

/* ── Page ──────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Header />

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
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e5ff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00e5ff]" />
              </span>
              Kit Digital 2026 Activo
            </motion.div>

            {/* H1 – staggers line by line */}
            <div className="mb-8">
              <motion.h1
                variants={heroLine}
                className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.85]"
              >
                <span className="text-gradient-heading">Arquitectura Digital.</span>
              </motion.h1>
              <motion.h1
                variants={heroLine}
                className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.85]"
              >
                <span className="text-gradient-cyan drop-shadow-[0_0_40px_rgba(0,229,255,0.3)]">Equipamiento Premium</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mb-14 max-w-xl text-base md:text-lg font-light text-slate-400 leading-relaxed"
            >
              Desplegamos tu infraestructura en la nube y te equipamos con
              hardware de grado empresarial financiado al 100% por el Bono
              Digital.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                className="btn-neon-pulse group rounded-full bg-gradient-to-b from-[#0022ff] to-[#000f8a] px-8 py-4 text-white font-bold tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_40px_-10px_rgba(0,34,255,0.8)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_60px_-10px_rgba(0,34,255,1)] transition-all text-base flex items-center gap-2 justify-center"
              >
                Solicitar Consulta
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
              <button
                className="btn-liquid-fill glass-premium font-medium text-white px-8 py-4 text-base rounded-2xl transition-all duration-300"
              >
                Ver Soluciones
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Marquee ──────────────────────────────────────────── */}
      <Marquee />

      {/* ─── Hardware Catalogue Carousel ──────────────────────── */}
      <section className="relative px-4 py-20 md:px-8 md:py-36 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#0018d8]/20 to-transparent blur-[80px] pointer-events-none z-0" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-12 md:text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Catálogo 2024
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white leading-tight">
              Equipamiento <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-500">Premium.</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl md:mx-auto">
              Financia hasta 1.000€ de cualquier equipo. Si cuesta más, solo pagas la diferencia. Si cuesta menos, es 100% gratuito.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            {hardwareCatalog.map((item, idx) => {
              const isFree = item.price <= 1000;
              const difference = item.price - 1000;

              return (
                <div key={idx} className="snap-center shrink-0 w-[300px] md:w-[340px] glass-premium rounded-3xl p-6 relative group overflow-hidden hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-[200px] mb-6 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-sm text-slate-400 font-mono mb-6">{item.specs}</p>

                  {/* Pricing Logic Badge */}
                  <div className={`py-3 px-4 rounded-xl border ${isFree ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-300'} flex flex-col gap-0.5`}>
                    <span className="text-[10px] uppercase tracking-wider font-bold">
                      {isFree ? '100% Subvencionado' : `Precio Oficial: ${item.price}€`}
                    </span>
                    <span className="text-sm font-bold">
                      {isFree ? 'GRATIS' : `Solo pagas ${difference}€ + IVA`}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

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
                  Agentes Digitalizadores
                </span>
                <br />
                <span className="text-[#00e5ff]">Adheridos</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg font-light max-w-lg">
                No somos una agencia tradicional. Somos ingenieros de software
                especializados en arquitectura cloud y modernización
                empresarial. Diseñamos sistemas escalables, implementamos
                infraestructura crítica y te equipamos con las herramientas que
                Silicon Valley usa para liderar.
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
                  Proceso 100% Digital
                </p>
              </div>

              <div className="space-y-5 mt-4">
                {[
                  'Evaluación inicial en menos de 1 minuto',
                  'Solicitud completamente automatizada',
                  'Sin gestiones presenciales requeridas',
                  'Concesión en 2-3 semanas',
                  'Hardware empresarial incluido',
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
              <span className="text-gradient-heading">Framework de</span>{' '}
              <span className="text-[#00e5ff]">Soluciones</span>
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
                      + Mac Incluido
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

                  <a href="#triage" className="flex justify-between items-center w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm font-medium transition-all duration-300 mt-auto group/btn hover:bg-white/[0.08] hover:border-white/20">
                    <span>Configurar Módulo</span>
                    <ChevronRight className="w-4 h-4 text-[#00e5ff] transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Projects Bento Grid ──────────────────────────────── */}
      <section className="relative px-4 py-20 md:px-8 md:py-36">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92]">
              <span className="text-gradient-heading">Proyectos</span>{' '}
              <span className="text-gradient-cyan">Destacados</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardFade}
                className={`${
                  idx === 0
                    ? 'col-span-2 row-span-1 md:row-span-2'
                    : 'col-span-1 row-span-1'
                } group glass-premium rounded-3xl p-6 md:p-8 relative overflow-hidden cursor-pointer ${
                  idx === 0
                    ? 'min-h-[280px] md:min-h-[520px]'
                    : 'min-h-[200px] md:min-h-[250px]'
                } flex flex-col justify-end transition-all duration-300`}
              >
                {/* Abstract mesh gradient inside card */}
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background:
                      idx === 0
                        ? 'radial-gradient(ellipse at 30% 20%, rgba(0, 24, 216, 0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(67, 56, 202, 0.25) 0%, transparent 50%)'
                        : idx % 2 === 0
                          ? 'radial-gradient(ellipse at 50% 30%, rgba(0, 229, 255, 0.15) 0%, transparent 60%)'
                          : 'radial-gradient(ellipse at 40% 70%, rgba(0, 24, 216, 0.2) 0%, transparent 55%)',
                  }}
                />
                {/* Bottom fade for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-xs md:text-sm text-[#00e5ff] mb-2 font-medium tracking-wide">
                    {project.tag}
                  </p>
                  <h3
                    className={`${
                      idx === 0
                        ? 'text-2xl md:text-4xl'
                        : 'text-base md:text-xl'
                    } font-bold tracking-tight`}
                  >
                    {project.name}
                  </h3>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="h-5 w-5 text-white/60" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Reviews ──────────────────────────────────────────── */}
      <section className="relative py-20 md:py-36">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="text-center mb-20 px-4"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92]">
              <span className="text-gradient-heading">Lo que dicen</span>{' '}
              <span className="text-gradient-cyan">nuestros clientes</span>
            </h2>
          </motion.div>

          <div className="md:px-8">
            <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 px-4 md:px-0">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={cardFade}
                  className="glass-premium rounded-3xl p-8 min-w-[85vw] md:min-w-0 snap-center flex-shrink-0 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-[#00e5ff] text-sm"
                      >
                        {'★'}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base font-light">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {review.author}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {review.role} &middot; {review.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Blog / Resources ─────────────────────────────────── */}
      <section className="relative px-4 py-20 md:px-8 md:py-36">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92]">
              <span className="text-gradient-heading">Centro de</span>{' '}
              <span className="text-gradient-cyan">Recursos</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-5"
          >
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                variants={cardFade}
                className="glass-premium rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300"
              >
                <div className="h-52 relative overflow-hidden">
                  <div
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      background:
                        idx === 0
                          ? 'radial-gradient(ellipse at 30% 40%, rgba(0, 24, 216, 0.3) 0%, rgba(67, 56, 202, 0.15) 50%, transparent 80%)'
                          : idx === 1
                            ? 'radial-gradient(ellipse at 60% 50%, rgba(0, 229, 255, 0.2) 0%, rgba(0, 24, 216, 0.1) 50%, transparent 80%)'
                            : 'radial-gradient(ellipse at 50% 60%, rgba(67, 56, 202, 0.25) 0%, rgba(0, 24, 216, 0.1) 50%, transparent 80%)',
                    }}
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs text-[#00e5ff] mb-3 font-semibold tracking-wider uppercase">
                    {post.tag}
                  </p>
                  <h3 className="text-lg font-bold mb-4 group-hover:text-white text-slate-200 transition-colors tracking-tight">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-slate-500 group-hover:text-[#00e5ff] transition-colors font-medium">
                    Leer Artículo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              <span className="text-gradient-heading">Preguntas</span>{' '}
              <span className="text-gradient-cyan">Frecuentes</span>
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
                  <AccordionTrigger className="text-left hover:text-[#00e5ff] transition-colors font-semibold py-6 text-base tracking-tight [&[data-state=open]]:text-[#00e5ff]">
                    {faq.question}
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

      {/* Final CTA Asymmetrical Section */}
      <section className="relative px-4 py-20 md:px-8 md:py-36 overflow-x-clip">
        <div className="mx-auto w-full max-w-[1200px]">

          {/* Outer Glass Container */}
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

            {/* ===== LEFT COLUMN: Content ===== */}
            <div className="relative z-10 text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#00e5ff]/5 border border-[#00e5ff]/20 mb-4 sm:mb-8">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"
                  style={{ boxShadow: '0 0 10px #00e5ff', animation: 'pulse 2s infinite' }}
                />
                <span className="text-[#00e5ff] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  System Ready
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-extrabold leading-[0.95] tracking-tighter mb-3 sm:mb-6"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}
              >
                <span className="text-white">Arquitectura Web.</span>
                <span
                  className="block mt-1 sm:mt-2 text-transparent"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.6)',
                  }}
                >
                  Cero Burocracia.
                </span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-lg text-slate-400 leading-relaxed sm:leading-[1.7] mb-6 sm:mb-12 max-w-[500px]">
                Desplegamos tu infraestructura digital y te equipamos con
                hardware de grado empresarial (Apple Mac) financiado al 100%
                por los fondos europeos.
              </p>

              {/* CTA Button */}
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 sm:gap-3 bg-white text-[#030305] font-semibold text-xs sm:text-sm md:text-base px-5 sm:px-10 py-2.5 sm:py-4 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,229,255,0.4)] no-underline"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]" />
                <span className="relative z-[2] group-hover:text-white transition-colors duration-300">
                  Iniciar_Deploy()
                </span>
                <svg
                  className="relative z-[2] w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] group-hover:text-white transition-all duration-300 group-hover:translate-x-2"
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
              </a>
            </div>

            {/* ===== RIGHT COLUMN: 3D Visuals ===== */}
            <div className="relative w-full flex items-center justify-center group" style={{ perspective: '1200px' }}>

              {/* Terminal Card */}
              <div
                className="relative w-full max-w-[400px] backdrop-blur-xl rounded-xl sm:rounded-3xl p-4 sm:p-8 transition-all duration-700 ease-out
                           transform lg:[transform:rotateY(-8deg)_rotateX(4deg)] 
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

                {/* Rows */}
                <div className="space-y-2 sm:space-y-5">
                  {[
                    { cmd: '> Verify_Grant_Limit', val: '[3.000€]', color: 'text-[#00e5ff]' },
                    { cmd: '> Hardware_Payload', val: 'MAC_READY', color: 'text-blue-500' },
                    { cmd: '> Bureaucracy_Bypass', val: '[OK]', color: 'text-[#00e5ff]' },
                    { cmd: '> System_Status', val: 'ONLINE', color: 'text-emerald-400 animate-pulse' },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between items-center font-mono text-[9px] sm:text-[13px] text-slate-400">
                      <span>{r.cmd}</span>
                      <span className={`${r.color} font-bold`}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chip 1 - Top Right */}
              <div className="absolute top-[-0.5rem] right-[-0.25rem] sm:top-[-1rem] sm:right-0 lg:top-[-2rem] lg:right-[-2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-float" style={{ transform: 'translateZ(20px)' }}>
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
              <div className="absolute bottom-[-0.5rem] left-[-0.25rem] sm:bottom-[-1rem] sm:left-0 lg:bottom-[-1rem] lg:left-[-3rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-lg sm:rounded-2xl p-2 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-float-delayed" style={{ transform: 'translateZ(30px)' }}>
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

      {/* ─── Footer ───────────────────────────────────────────── */}
      <footer className="relative px-4 py-14 md:px-8 border-t border-white/[0.06]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-slate-500 font-light">
              &copy; 2026 ZephyrStudio. Agente digitalizador adherido.
            </p>
            <p className="text-xs text-slate-600 font-light">
              Desarrollado con Next.js + Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
