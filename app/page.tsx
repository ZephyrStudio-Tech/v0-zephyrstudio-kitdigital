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
      '> Diseño responsive premium',
      '> Arquitectura Next.js 15',
      '> Deploy en Vercel/AWS',
      '> SSL & CDN global',
      '> CMS headless integrado',
      '> Analítica avanzada'
    ]
  },
  {
    name: 'ECOMMERCE',
    features: [
      '> Plataforma WooCommerce',
      '> Pasarela de pago Stripe',
      '> Gestión de inventario',
      '> Panel de administración',
      '> Optimización SEO',
      '> Integración ERP'
    ]
  },
  {
    name: 'RRSS',
    features: [
      '> Estrategia de contenido',
      '> Gestión multicanal',
      '> Calendario editorial',
      '> Analítica y reporting',
      '> Community management',
      '> Campañas publicitarias'
    ]
  },
  {
    name: 'SEO',
    features: [
      '> Auditoría técnica completa',
      '> Keyword research',
      '> Optimización on-page',
      '> Link building',
      '> Contenido optimizado',
      '> Reporting mensual'
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
      <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.div 
              variants={fadeUpVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 font-mono text-xs md:text-sm text-cyan-400"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              [SYS.UPDATE: KIT_DIGITAL_2026]
            </motion.div>

            <motion.h1 
              variants={fadeUpVariants}
              className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Arquitectura Digital.
              <br />
              <span className="text-gradient-cyan">Equipamiento Premium</span>
              <span className="inline-block ml-2 animate-pulse">█</span>
            </motion.h1>

            <motion.p 
              variants={fadeUpVariants}
              className="mb-10 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Desplegamos tu infraestructura en la nube y te equipamos con hardware de grado empresarial (Apple/Mac) financiado al 100% por el Bono Digital.
            </motion.p>

            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#0018d8] to-[#4338ca] hover:shadow-[0_0_40px_rgba(0,24,216,0.5)] text-white font-mono transition-all duration-300"
              >
                Init_Deploy()
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="glass-card glass-card-hover font-mono text-white border-white/20"
              >
                Ver_Paquetes
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Authority & SEO Block */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Agentes Digitalizadores
                <br />
                <span className="text-cyan-400">Adheridos</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                No somos una agencia tradicional. Somos ingenieros de software especializados en arquitectura cloud y modernización empresarial. Diseñamos sistemas escalables, implementamos infraestructura crítica y te equipamos con las herramientas que Silicon Valley usa para liderar.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="glass-card glass-card-hover rounded-2xl p-8 relative"
            >
              <div className="absolute -top-3 left-8 bg-[#030305] px-4 py-1 rounded-full border border-cyan-400/50">
                <p className="font-mono text-sm text-cyan-400">El fin del papeleo manual</p>
              </div>
              
              <div className="space-y-4 mt-4">
                {[
                  'Triage en < 1 min',
                  'Solicitud automatizada',
                  'Sin gestiones presenciales',
                  'Concesión en 2-3 semanas',
                  'Hardware incluido'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-mono text-sm">
                    <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">[OK] {item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Paquetes <span className="text-cyan-400">Digitales</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm">// Todos incluyen Mac empresarial</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className="glass-card glass-card-hover rounded-2xl p-6 relative"
              >
                {/* MAC Badge */}
                <div className="absolute -top-3 -right-3 bg-black border-2 border-cyan-400 rounded-lg px-3 py-1 rotate-12 shadow-[0_0_20px_rgba(0,229,255,0.5)]">
                  <p className="font-mono text-xs font-bold text-cyan-400">INCL. MAC</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="font-mono text-sm text-gray-300">
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 font-mono"
                  variant="outline"
                >
                  Install
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Proyectos <span className="text-cyan-400">Desplegados</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className={`${project.span} group glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden cursor-pointer min-h-[200px] md:min-h-[250px] flex flex-col justify-end`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-mono text-xs text-cyan-400 mb-2">{project.tag}</p>
                  <h3 className="text-lg md:text-xl font-bold">{project.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Lo que dicen <span className="text-cyan-400">nuestros clientes</span>
            </h2>
          </motion.div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-6 w-max md:w-full md:grid md:grid-cols-3">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUpVariants}
                  className="glass-card glass-card-hover rounded-2xl p-8 w-[85vw] md:w-auto snap-center"
                >
                  <div className="flex gap-1 mb-4 text-cyan-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{review.text}</p>
                  <div>
                    <p className="font-bold">{review.author}</p>
                    <p className="font-mono text-sm text-gray-400">{review.role}</p>
                    <p className="text-sm text-gray-500">{review.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Recursos <span className="text-cyan-400">& Artículos</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Terminal className="h-12 w-12 text-cyan-400/50" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs text-cyan-400 mb-2">{post.tag}</p>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-mono text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    Leer_Articulo() →
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Preguntas <span className="text-cyan-400">Frecuentes</span>
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
                  className="glass-card rounded-xl border-white/10 px-6"
                >
                  <AccordionTrigger className="text-left hover:text-cyan-400 transition-colors font-semibold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#0018d8] via-[#4338ca] to-[#030305]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Compila tu futuro <span className="text-cyan-400">hoy</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Infraestructura enterprise. Hardware premium. Financiación 100%. Sin papeleo.
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#0018d8] hover:bg-cyan-400 hover:text-black font-mono text-lg px-8 py-6 transition-all duration-300"
              >
                RUN DIAGNOSTIC
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-12 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm text-gray-400">
              © 2026 ZephyrStudio. Agente digitalizador adherido.
            </p>
            <p className="font-mono text-xs text-gray-500">
              // Built with Next.js + Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
