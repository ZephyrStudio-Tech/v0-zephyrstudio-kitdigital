import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'

export const metadata: Metadata = {
  title: '¡Solicitud Recibida! | ZephyrStudio',
  robots: {
    index: false,
    follow: false,
  },
}

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-[#030305] flex items-center justify-center p-4 relative overflow-hidden">
      <AnimatedBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full relative z-10 text-center">
        <div className="inline-block mb-8 animate-bounce">
          <CheckCircle2 className="w-24 h-24 text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.6)]" />
        </div>

        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          ¡Expediente Registrado!
        </h1>

        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-xl">
          <p className="text-[#00e5ff] font-semibold mb-2">
            Hemos recibido tus datos correctamente.
          </p>
          <p className="text-slate-400 text-sm">
            Nuestro equipo consultor está analizando tu viabilidad para el Kit Digital. Te contactaremos en un plazo máximo de 24 a 48 horas laborales con los siguientes pasos.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://wa.me/34602678771?text=Hola,%20acabo%20de%20completar%20el%20formulario%20del%20Kit%20Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] rounded-xl text-white font-bold text-lg transition-all hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Hablar por WhatsApp AHORA
          </a>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] rounded-xl text-white font-medium transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Volver a la web
          </Link>
        </div>
      </div>
    </div>
  )
}
