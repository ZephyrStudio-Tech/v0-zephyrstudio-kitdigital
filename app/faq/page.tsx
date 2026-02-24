'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

/* ── Data ────────────────────────────────────────────────────── */

const faqs = [
  {
    question: '¿Que modelos de Mac incluye el servicio?',
    answer: 'Dependiendo de tu segmento, incluimos desde MacBook Air M3 hasta MacBook Pro M3 Max, iMac 24", o Mac Studio. Todo hardware de grado empresarial con garantia Apple completa y configuracion MDM profesional. El modelo exacto se determina en la consulta inicial segun tus necesidades operativas.',
  },
  {
    question: '¿Como funciona la financiacion al 100%?',
    answer: 'El Bono Digital europeo cubre la totalidad de la base imponible de los servicios digitales Y el equipamiento necesario para operarlos. No requiere inversion inicial por tu parte. Nosotros gestionamos toda la burocracia: solicitud, justificacion tecnica, y seguimiento hasta la aprobacion. Tu unico coste es el IVA, que es 100% deducible en el trimestre siguiente.',
  },
  {
    question: '¿Cuanto tarda la concesion del bono?',
    answer: 'El triage inicial (verificacion de elegibilidad) es inmediato. La solicitud formal se tramita en 48-72h habiles. Una vez enviada, la aprobacion por parte de Red.es tarda generalmente entre 2-4 semanas. En cuanto recibimos la aprobacion, iniciamos el despliegue de la infraestructura y la configuracion del hardware el mismo dia.',
  },
  {
    question: '¿El IVA tambien esta cubierto?',
    answer: 'La subvencion cubre el 100% de la base imponible. El IVA (21%) lo abona el cliente, pero es integramente deducible en la declaracion trimestral del Modelo 303 de la Agencia Tributaria. En la practica, el coste real es cero. Puedes consultar nuestra pagina dedicada /kit-digital-sin-iva para una explicacion detallada.',
  },
  {
    question: '¿Como se entrega el hardware?',
    answer: 'El hardware Apple se entrega configurado y listo para usar. Incluye: instalacion del sistema operativo optimizado, configuracion MDM empresarial (Jamf o Apple Business Manager), cifrado FileVault activado, VPN preconfigurada si es necesaria, y todas las aplicaciones corporativas instaladas. La entrega se realiza en 24-48h tras la aprobacion del bono.',
  },
  {
    question: '¿Que pasa si mi solicitud es rechazada?',
    answer: 'Nuestro ratio de aprobacion supera el 95% gracias a la verificacion previa que realizamos. En caso de rechazo, analizamos los motivos, corregimos la solicitud y la reenviamos sin coste adicional. Si el rechazo es definitivo (por no cumplir requisitos de elegibilidad), no te cobramos nada. Sin riesgo.',
  },
  {
    question: '¿Quien es propietario del software desarrollado?',
    answer: 'Tu eres el propietario al 100% de todo el codigo fuente, diseno, contenido y activos digitales creados. Entregamos acceso completo al repositorio Git, credenciales de hosting, dominio, y toda la documentacion tecnica. No hay lock-in: puedes migrar o modificar el proyecto libremente en cualquier momento.',
  },
  {
    question: '¿Que soporte tecnico ofreceis post-implementacion?',
    answer: 'Incluimos 12 meses de soporte tecnico con SLA de 4h para incidencias criticas. Esto cubre: actualizaciones de seguridad, monitorizacion de uptime 24/7, backups automaticos, y hasta 2h mensuales de modificaciones menores. Tras el primer ano, ofrecemos planes de mantenimiento opcionales desde 99€/mes.',
  },
  {
    question: '¿Puedo elegir las tecnologias de mi proyecto?',
    answer: 'Trabajamos con un stack moderno y probado: Next.js 15 para webs, WooCommerce/Shopify para ecommerce, y Odoo/Holded para ERP. Dicho esto, si tu negocio requiere una tecnologia especifica por compatibilidad o preferencia, lo evaluamos en la consulta inicial y adaptamos la solucion. La arquitectura siempre prioriza rendimiento, seguridad y mantenibilidad.',
  },
  {
    question: '¿Que documentos necesito para solicitar el Kit Digital?',
    answer: 'Necesitas: Certificado digital de la empresa (o del autonomo), alta en el censo de la Agencia Tributaria, estar al corriente de obligaciones fiscales y con la Seguridad Social, y tener domicilio fiscal en Espana. Si no tienes el certificado digital, te ayudamos a obtenerlo como parte del servicio sin coste adicional.',
  },
]

/* ── Page ────────────────────────────────────────────────────── */

export default function FAQ() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Header />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative px-4 pt-36 pb-10 md:px-8 md:pt-48 md:pb-20">
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
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e5ff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00e5ff]" />
              </span>
              Centro de Soporte
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.88] mb-8"
            >
              <span className="text-gradient-heading">Centro de Datos</span>
              <br />
              <span className="text-gradient-cyan">y Soporte.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-xl"
            >
              Todas las respuestas sobre el Kit Digital, hardware Apple, plazos de entrega, propiedad del software y financiacion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Accordion ────────────────────────────────── */}
      <section className="relative px-4 py-20 md:px-8 md:py-36">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <AccordionItem
                    value={`item-${idx}`}
                    className="glass-premium rounded-2xl px-7 border-white/[0.08] transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-[#00e5ff] transition-colors font-semibold py-6 text-base tracking-tight [&[data-state=open]]:text-[#00e5ff] [&>svg]:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 leading-relaxed pb-6 text-sm font-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
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
