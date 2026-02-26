import Link from 'next/link'
import { ChevronRight, Shield, Laptop, Lock } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'

export const metadata = {
  title: 'Puesto de Trabajo Seguro - Kit Digital | ZephyrStudio',
  description: 'Consigue tu ordenador portátil o sobremesa (Mac o Windows) con ciberseguridad avanzada. 100% Subvencionado con el Kit Digital.',
}

export default function PuestoTrabajoPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://kitdigitalzephyrstudio.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Servicios Kit Digital',
        item: 'https://kitdigitalzephyrstudio.es/#packages',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Puesto de Trabajo Seguro',
        item: 'https://kitdigitalzephyrstudio.es/puesto-de-trabajo-seguro',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00e5ff]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10 px-4 pt-36 pb-20 md:px-8 md:pt-48 md:pb-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] font-mono text-xs uppercase tracking-widest mb-6">
            Segmento III · Bono de 1.000€
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 text-balance">
            Puesto de Trabajo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">
              Seguro.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Renueva tu equipo informático a coste cero. Hardware premium (Apple o Windows) integrado con licencias de ciberseguridad empresarial y encriptación militar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Laptop className="w-8 h-8" />,
              title: 'Hardware Premium',
              desc: 'Portátiles y sobremesas de última generación. Core i7 / Apple Silicon, 16GB RAM y 512GB SSD mínimo.',
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'EDR Avanzado',
              desc: 'Antivirus de próxima generación y monitorización activa contra Ransomware y Malware.',
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: 'Cifrado Total',
              desc: 'Encriptación de disco duro en reposo para cumplir estrictamente con las normativas RGPD europeas.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-[#00e5ff]/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-[#00e5ff] mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/formulario-contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] rounded-full text-white font-bold text-lg hover:shadow-[0_10px_40px_rgba(0,229,255,0.4)] transition-all hover:-translate-y-1"
          >
            Verificar Viabilidad <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      </div>
    </>
  )
}
