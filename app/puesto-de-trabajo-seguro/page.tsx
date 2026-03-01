import Link from 'next/link'
import {
  ChevronRight,
  Shield,
  Laptop,
  Settings,
  Cpu,
  Lock,
  FileCheck,
  Server,
  Smartphone,
  CheckCircle2,
  ArrowDown,
} from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { ProcessSteps } from '@/components/process-steps'
import { HardwareCarousel } from '@/components/hardware-carousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Puesto de Trabajo Seguro - Kit Digital 2026 | ZephyrStudio',
  description:
    'Consigue tu ordenador Mac o PC con ciberseguridad empresarial, 100% subvencionado con el Bono Kit Digital. Tramitación automática sin llamadas.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué Mac puedo conseguir con el Kit Digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dependiendo del bono disponible y del stock, podemos asignarte un MacBook Air M2/M3 o un Mac mini. El modelo exacto se confirma tras verificar tu segmento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hay opción de PC Windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Disponemos de portátiles y sobremesas Windows (Intel Core i5/i7 o AMD Ryzen) con Windows 11 Pro y el mismo stack de ciberseguridad empresarial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye el EDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El EDR (Endpoint Detection & Response) incluye: antivirus de próxima generación, detección de comportamiento anómalo en tiempo real, políticas de firewall, y alertas ante ransomware y malware avanzado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda el proceso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una vez aprobado el bono por Red.es (entre 4 y 12 semanas), el despliegue del hardware se realiza en 5–10 días laborables.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Tengo que hacer llamadas o reuniones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Todo el proceso es 100% digital y asíncrono. Las firmas son electrónicas y la verificación de documentación se realiza vía formulario seguro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si el equipo que quiero cuesta más de 1.000€?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El bono cubre hasta 1.000€ (Segmento III). Si eliges un modelo con precio superior, únicamente abonas la diferencia. Te lo detallamos por escrito antes de firmar nada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Quién tramita el expediente ante el Gobierno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ZephyrStudio, como Agente Digitalizador Adherido al programa Kit Digital, actúa como tu representante voluntario y gestiona todo el expediente ante Red.es.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El soporte está incluido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El programa incluye 12 meses de soporte técnico por parte del Agente Digitalizador, incluyendo incidencias de software y actualizaciones de seguridad.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://kitdigitalzephyrstudio.es' },
    { '@type': 'ListItem', position: 2, name: 'Servicios Kit Digital', item: 'https://kitdigitalzephyrstudio.es/#packages' },
    { '@type': 'ListItem', position: 3, name: 'Puesto de Trabajo Seguro', item: 'https://kitdigitalzephyrstudio.es/puesto-de-trabajo-seguro' },
  ],
}

export default function PuestoTrabajoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />

        {/* ── 1. HERO ─────────────────────────────────────────────── */}
        <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-4 text-center">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00e5ff]/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#0018d8]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] font-mono text-xs uppercase tracking-widest mb-6">
              Kit Digital · Puesto de Trabajo Seguro
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[0.9] mb-6 text-balance">
              Puesto de Trabajo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">
                Seguro.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Ordenador (Mac o Windows) + ciberseguridad + puesta en marcha, con el bono Kit Digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/wizard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00e5ff] hover:bg-white rounded-2xl text-[#030305] font-bold text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,229,255,0.4)] hover:-translate-y-1"
              >
                Verificar viabilidad (60s)
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/10 hover:border-[#00e5ff]/40 rounded-2xl text-white font-semibold text-base transition-all duration-300 hover:-translate-y-1"
              >
                Ver equipos incluidos
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. WHAT'S INCLUDED ──────────────────────────────────── */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-4">
              Todo lo que incluye el bono
            </h2>
            <p className="text-slate-400 text-center mb-12 font-light">Un único paquete. Sin letra pequeña.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Laptop className="w-7 h-7" />,
                  title: 'Hardware (Mac o Windows)',
                  items: ['MacBook Air M2/M3 o equivalente Windows', 'Core i5/i7 o Apple Silicon', '16 GB RAM · 512 GB SSD mínimo', 'Configuración inicial incluida'],
                },
                {
                  icon: <Shield className="w-7 h-7" />,
                  title: 'Ciberseguridad EDR',
                  items: ['Antivirus de próxima generación', 'Detección y respuesta en endpoint', 'Políticas de firewall corporativo', 'Hardening y bastionado del sistema'],
                },
                {
                  icon: <Settings className="w-7 h-7" />,
                  title: 'Entrega y Configuración',
                  items: ['Setup completo del usuario', 'Configuración de backups', 'Cifrado total del disco', '12 meses de soporte (según solución)'],
                },
              ].map((card, idx) => (
                <article
                  key={idx}
                  className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-[#00e5ff]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-[#00e5ff] mb-5">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                  <ul className="space-y-2.5">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400 text-sm font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. HARDWARE CAROUSEL (same as landing) ───────────────── */}
        <div id="catalogo">
          <HardwareCarousel />
        </div>

        {/* ── 4. PROCESS STEPS (same as landing) ──────────────────── */}
        <ProcessSteps />

        {/* ── 5. TRANSPARENCY / TRUST BOX ─────────────────────────── */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-[#00e5ff]/20 rounded-3xl p-10 shadow-[0_0_60px_rgba(0,229,255,0.06)]">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-8">
                Transparencia total en el precio
              </h2>
              <ul className="space-y-5">
                {[
                  { icon: <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0" />, text: 'Hasta 1.000€ subvencionados por el Bono Kit Digital.' },
                  { icon: <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0" />, text: 'Si eliges un equipo superior, pagas solo la diferencia. Sin sorpresas.' },
                  { icon: <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0" />, text: 'Te lo dejamos por escrito antes de firmar. Sin compromisos previos.' },
                  { icon: <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0" />, text: 'Desglose por escrito antes de firmar nada.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    {item.icon}
                    <p className="text-slate-300 font-light leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 6. SEGMENT REQUIREMENTS ─────────────────────────────── */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-12">
              Requisitos por segmento
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  seg: 'Segmento III',
                  range: '0 – 2 empleados',
                  bono: 'Hasta 1.000€',
                  color: 'border-[#00e5ff]/30',
                  badge: 'bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/20',
                },
                {
                  seg: 'Segmento II',
                  range: '3 – 9 empleados',
                  bono: 'Consultar limite aplicable',
                  color: 'border-[#0018d8]/30',
                  badge: 'bg-[#0018d8]/10 text-slate-300 border-[#0018d8]/30',
                },
              ].map((s, idx) => (
                <article
                  key={idx}
                  className={`bg-white/[0.02] backdrop-blur-xl border ${s.color} rounded-3xl p-8`}
                >
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${s.badge} mb-5`}>
                    {s.seg}
                  </span>
                  <p className="text-slate-400 text-sm mb-2 font-light">{s.range}</p>
                  <p className="text-2xl font-extrabold text-white">{s.bono}</p>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/wizard"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/10 hover:border-[#00e5ff]/40 rounded-2xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
              >
                Comprobar mi segmento
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. SECURITY & COMPLIANCE ────────────────────────────── */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-12">
              Seguridad y cumplimiento normativo
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <Lock className="w-5 h-5" />, label: 'Cifrado completo de disco', sub: 'FileVault / BitLocker' },
                { icon: <FileCheck className="w-5 h-5" />, label: 'Cumplimiento RGPD', sub: 'Reglamento Europeo' },
                { icon: <Shield className="w-5 h-5" />, label: 'Politicas de Endpoint', sub: 'MDM + Group Policy' },
                { icon: <Cpu className="w-5 h-5" />, label: 'Hardening corporativo', sub: 'CIS Benchmarks' },
                { icon: <Smartphone className="w-5 h-5" />, label: 'Mobile Device Management', sub: 'Apple MDM / Intune' },
                { icon: <Server className="w-5 h-5" />, label: 'EDR de proxima generacion', sub: 'Deteccion en tiempo real' },
              ].map((feat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-2 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-[#00e5ff]/20 transition-all duration-300"
                >
                  <div className="text-[#00e5ff]">{feat.icon}</div>
                  <p className="text-sm font-semibold text-white leading-tight">{feat.label}</p>
                  <p className="text-xs text-slate-500 font-light">{feat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ──────────────────────────────────────────────── */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center mb-12">
              Preguntas frecuentes
            </h2>

            <div className="space-y-3">
              {faqSchema.mainEntity.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-semibold text-sm hover:text-[#00e5ff] transition-colors">
                    {faq.name}
                    <ChevronRight className="w-4 h-4 shrink-0 text-slate-500 group-open:rotate-90 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-5 text-slate-400 text-sm font-light leading-relaxed border-t border-white/[0.05] pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA ────────────────────────────────────────── */}
        <section className="py-24 md:py-36 px-4 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[300px] bg-[#0018d8]/20 blur-[120px] rounded-full" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-6 text-balance">
              Verifica tu caso en 60s y activa el proceso automatico.
            </h2>
            <p className="text-slate-400 font-light mb-10 text-lg">
              Sin llamadas. Sin burocracia manual. Solo resultados.
            </p>
            <Link
              href="/wizard"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#00e5ff] hover:bg-white rounded-2xl text-[#030305] font-bold text-lg transition-all duration-300 hover:shadow-[0_10px_60px_rgba(0,229,255,0.5)] hover:-translate-y-1"
            >
              Verificar viabilidad
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
