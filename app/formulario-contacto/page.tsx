import { Metadata } from 'next'
import { TriageWizard } from '@/components/triage-wizard'
import { AnimatedBackground } from '@/components/animated-background'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Análisis de Viabilidad - Kit Digital | ZephyrStudio',
  robots: {
    index: false,
    follow: false,
  },
}

export default function FormularioContactoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center p-4 py-12 md:py-20">
      <AnimatedBackground />

      {/* Back button - Distraction free header */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">
          <ChevronLeft className="w-4 h-4" /> Volver a la web
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-2xl mt-12 md:mt-0">
        <TriageWizard />
      </div>
    </div>
  )
}
