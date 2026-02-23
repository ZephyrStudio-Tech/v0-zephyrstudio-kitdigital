'use client'

import { motion } from 'framer-motion'
import { Check, ChevronRight, Terminal } from 'lucide-react'
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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const packages = [
  {
    name: 'WEB',
    features: [
      'Diseño responsive premium',
      'Arquitectura Next.js 15',
      'Deploy en Vercel/AWS',
      'SSL & CDN global',
      'CMS headless integrado',
      'Analítica avanzada'
    ]
  },
  {
    name: 'ECOMMERCE',
    features: [
      'Plataforma WooCommerce',
      'Pasarela de pago Stripe',
      'Gestión de inventario',
      'Panel de administración',
      'Optimización SEO',
      'Integración ERP'
    ]
  },
  {
    name: 'RRSS',
    features: [
      'Estrategia de contenido',
      'Gestión multicanal',
      'Calendario editorial',
      'Analítica y reporting',
      'Community management',
      'Campañas publicitarias'
    ]
  },
  {
    name: 'SEO',
    features: [
      'Auditoría técnica completa',
      'Keyword research',
      'Optimización on-page',
      'Link building',
      'Contenido optimizado',
      'Reporting mensual'
    ]
  }
]

const projects = [
  { name: 'Plataforma B2B SaaS', tag: './web_corp + api', span: 'col-span-2 row-span-2' },
  { name: 'E-commerce Moda', tag: './woocommerce + stripe', span: 'col-span-1' },
  { name: 'Portal Inmobiliario', tag: './next_js + cms', span: 'col-span-1' },
  { name: 'App Gestión Recursos', tag: './odoo + custom', span: 'col-span-1' },
  { name: 'Marketplace Multi-vendor', tag: './ecommerce + api', span: 'col-span-1' }
]

const reviews = [
  {
    text: 'La integración del hardware Mac con el software fue impecable. Ahora trabajamos con equipos de primer nivel sin inversión inicial.',
    author: 'María González',
    role: 'Dir. Comercial',
    company: 'TechSolutions SL'
  },
  {
    text: 'El proceso fue extremadamente ágil. En menos de una semana teníamos nuestro nuevo e-commerce operativo y el equipo Apple configurado.',
    author: 'Carlos Martínez',
    role: 'CEO',
    company: 'ModaOnline'
  },
  {
    text: 'Profesionales excepcionales. No solo nos digitalizaron, nos transformaron. El ROI ha sido inmediato.',
    author: 'Ana Rodríguez',
    role: 'Gerente TI',
    company: 'InnovaGroup'
  }
]

const blogPosts = [
  {
    tag: '/hardware',
    title: 'Mac vs PC: Por qué empresas eligen Apple',
    image: '/blog/mac-vs-pc.jpg'
  },
  {
    tag: '/grants',
    title: 'Guía completa Kit Digital 2026',
    image: '/blog/kit-digital.jpg'
  },
  {
    tag: '/infrastructure',
    title: 'Cloud-first: Arquitectura moderna',
    image: '/blog/cloud.jpg'
  }
]

const faqs = [
  {
    question: '¿Qué modelos de Mac incluye el servicio?',
    answer: 'Dependiendo de tu segmento, incluimos desde MacBook Air M3 hasta MacBook Pro M3 Max, iMac 24", o Mac Studio. Todo hardware de grado empresarial con garantía Apple completa.'
  },
  {
    question: '¿Cómo funciona la financiación al 100%?',
    answer: 'El Bono Digital cubre la totalidad de los servicios digitales Y el equipamiento necesario para operarlos. No requiere inversión inicial. Gestionamos toda la burocracia por ti.'
  },
  {
    question: '¿Cuánto tarda la concesión del bono?',
    answer: 'El triage inicial es en menos de 1 minuto. La solicitud formal tarda 48-72h. Una vez aprobado (generalmente 2-3 semanas), iniciamos el despliegue inmediatamente.'
  },
  {
    question: '¿El IVA también está cubierto?',
    answer: 'Sí, el bono cubre el 100% del importe incluyendo IVA. No hay costes ocultos ni sorpresas posteriores.'
  },
  {
    question: '¿Qué pasa después de implementar?',
    answer: 'Ofrecemos soporte técnico continuado, actualizaciones de software, y un modelo de mantenimiento predictivo. Tu infraestructura siempre actualizada.'
  }
]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-16 md:px-8 md:pt-40 md:pb-32 lg:py-48">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              variants={fadeUpVariants}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 px-5 py-2.5 text-sm text-white font-medium"
            >
              <div className="h-2 w-2 rounded-full bg-[#00e5ff]" />
              Kit Digital 2026 Activo
            </motion.div>

            <motion.h1 
              variants={fadeUpVariants}
              className="mb-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
            >
              Arquitectura Digital.
              <br />
              <span className="text-gradient-cyan">Equipamiento Premium</span>
            </motion.h1>

            <motion.p 
              variants={fadeUpVariants}
              className="mb-12 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed"
            >
              Desplegamos tu infraestructura en la nube y te equipamos con hardware de grado empresarial (Apple/Mac) financiado al 100% por el Bono Digital.
            </motion.p>

            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-[#0018d8] hover:bg-[#0018d8]/90 hover:shadow-[0_10px_30px_-10px_rgba(0,24,216,0.5)] text-white font-semibold transition-all duration-300 px-8"
              >
                Solicitar Consulta
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/[0.03] hover:bg-white/[0.05] border-white/10 hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(0,24,216,0.3)] text-white transition-all duration-300"
              >
                Ver Soluciones
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Authority & SEO Block */}
      <section className="relative px-4 py-16 md:px-8 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-[1] tracking-tight">
                Agentes Digitalizadores
                <br />
                <span className="text-[#00e5ff]">Adheridos</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                No somos una agencia tradicional. Somos ingenieros de software especializados en arquitectura cloud y modernización empresarial. Diseñamos sistemas escalables, implementamos infraestructura crítica y te equipamos con las herramientas que Silicon Valley usa para liderar.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="bg-white/[0.03] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(0,24,216,0.3)] transition-all duration-300 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-3 left-8 bg-[#030305] px-4 py-1.5 rounded-full border border-[#00e5ff]/50">
                <p className="text-xs font-medium text-[#00e5ff]">Proceso 100% Digital</p>
              </div>
              
              <div className="space-y-4 mt-4">
                {[
                  'Evaluación inicial en menos de 1 minuto',
                  'Solicitud completamente automatizada',
                  'Sin gestiones presenciales requeridas',
                  'Concesión en 2-3 semanas',
                  'Hardware empresarial incluido'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <Check className="h-5 w-5 text-[#00e5ff] flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="relative px-4 py-16 md:px-8 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Framework de <span className="text-[#00e5ff]">Soluciones</span>
            </h2>
            <p className="text-slate-400 text-sm">Todos los paquetes incluyen equipamiento Mac empresarial</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className="bg-white/[0.03] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(0,24,216,0.3)] transition-all duration-300 rounded-2xl p-6 relative overflow-hidden"
              >
                {/* MAC Badge */}
                <div className="absolute -top-2 -right-2 bg-white rounded-lg px-3 py-1.5 rotate-12 shadow-lg">
                  <p className="text-[10px] font-bold text-[#0018d8]">+ EQUIPO MAC</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] rounded-full" />
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="text-sm text-slate-300">
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all duration-300 text-sm"
                  variant="outline"
                >
                  Más Información
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="relative px-4 py-16 md:px-8 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Proyectos <span className="text-[#00e5ff]">Destacados</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className={`${idx === 0 ? 'col-span-2 row-span-1 md:row-span-2' : 'col-span-1 row-span-1'} group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(0,24,216,0.3)] transition-all duration-300 rounded-2xl p-6 md:p-8 relative overflow-hidden cursor-pointer ${idx === 0 ? 'min-h-[250px] md:min-h-[500px]' : 'min-h-[200px] md:min-h-[240px]'} flex flex-col justify-end`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0018d8]/10 to-[#4338ca]/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/50 to-transparent opacity-90 group-hover:opacity-70 transition-all duration-300" />
                
                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs md:text-sm text-[#00e5ff] mb-2 font-medium">{project.tag}</p>
                  <h3 className={`${idx === 0 ? 'text-xl md:text-3xl' : 'text-base md:text-lg'} font-bold`}>{project.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative py-16 md:px-8 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Logs de <span className="text-[#00e5ff]">Clientes</span>
            </h2>
          </motion.div>

          <div className="md:px-4">
            <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 px-4 md:px-0 -mx-4 md:mx-0">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUpVariants}
                  className="bg-white/[0.03] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(0,24,216,0.3)] transition-all duration-300 rounded-2xl p-8 min-w-[85vw] md:min-w-0 snap-center flex-shrink-0"
                >
                  <div className="flex gap-1 mb-4 text-[#00e5ff]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm md:text-base">{review.text}</p>
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-xs text-slate-400">{review.role}</p>
                    <p className="text-xs text-slate-500">{review.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources */}
      <section className="relative px-4 py-16 md:px-8 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Centro de <span className="text-[#00e5ff]">Datos</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className="bg-white/[0.03] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(0,24,216,0.3)] transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-[#0018d8]/20 to-[#4338ca]/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Terminal className="h-12 w-12 text-[#00e5ff]/30 group-hover:text-[#00e5ff]/50 transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#00e5ff] mb-2 font-medium">{post.tag}</p>
                  <h3 className="text-lg font-bold mb-4 group-hover:text-[#00e5ff] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-[#00e5ff] transition-colors">
                    Leer Artículo →
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 py-16 md:px-8 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Preguntas <span className="text-[#00e5ff]">Frecuentes</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left hover:text-[#00e5ff] transition-colors font-semibold py-6 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 leading-relaxed pb-6 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 py-16 md:px-8 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#0018d8]/80 via-[#4338ca]/60 to-[#030305]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Construye tu futuro <span className="text-[#00e5ff]">hoy</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Infraestructura enterprise. Hardware premium. Financiación 100%. Sin papeleo.
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#030305] hover:bg-[#00e5ff] hover:text-[#030305] hover:shadow-[0_10px_40px_rgba(0,229,255,0.4)] font-semibold text-sm md:text-base px-8 py-6 transition-all duration-300"
              >
                Solicitar Consulta
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-12 md:px-8 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-slate-400">
              © 2026 ZephyrStudio. Agente digitalizador adherido.
            </p>
            <p className="text-xs text-slate-500">
              Desarrollado con Next.js + Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
