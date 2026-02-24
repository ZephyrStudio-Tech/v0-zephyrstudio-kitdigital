import Link from 'next/link'
import { ChevronRight, FileCheck, Zap, Server } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { Header } from '@/components/header'

export const metadata = {
  title: 'Factura Electrónica (Ley Crea y Crece) - Kit Digital | ZephyrStudio',
  description: 'Automatiza tu facturación B2B y cumple con la Ley Crea y Crece. Software cloud 100% subvencionado con el Kit Digital.',
}

export default function FacturaElectronicaPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Header />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0018d8]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10 px-4 pt-36 pb-20 md:px-8 md:pt-48 md:pb-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-6">
            Ley Crea y Crece 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 text-balance">
            Facturación{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">
              Inteligente.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Adelántate a la normativa obligatoria. Despliega un sistema de facturación electrónica B2B en la nube, automatizado y 100% subvencionado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <FileCheck className="w-8 h-8" />,
              title: 'Cumplimiento Legal',
              desc: 'Emisión y recepción de facturas en formato estructurado (FacturaE) conectado con las AAPP.',
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Automatización',
              desc: 'Control de vencimientos, envío automático por email y conciliación bancaria inteligente.',
            },
            {
              icon: <Server className="w-8 h-8" />,
              title: 'Cloud Seguro',
              desc: 'Tus datos alojados en servidores europeos de alta disponibilidad con copias de seguridad diarias.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-400 mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/formulario-contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-[#0018d8] rounded-full text-white font-bold text-lg hover:shadow-[0_10px_40px_rgba(0,24,216,0.4)] transition-all hover:-translate-y-1"
          >
            Iniciar Despliegue <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
