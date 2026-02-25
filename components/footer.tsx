import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative px-4 pt-10 pb-14 md:px-8 border-t border-white/[0.06]">
      <div className="container mx-auto max-w-7xl">

        {/* Quick Links row for internal SEO */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          <Link
            href="/puesto-de-trabajo-seguro"
            className="text-sm text-slate-400 hover:text-[#00e5ff] transition-colors"
          >
            Puesto de Trabajo Seguro (Hardware)
          </Link>
          <Link
            href="/factura-electronica"
            className="text-sm text-slate-400 hover:text-[#00e5ff] transition-colors"
          >
            Factura Electronica (Ley Crea y Crece)
          </Link>
          <Link
            href="/kit-digital-sin-iva"
            className="text-sm text-slate-400 hover:text-[#00e5ff] transition-colors"
          >
            Como funciona el IVA
          </Link>
        </div>

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
  )
}
