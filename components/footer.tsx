export function Footer() {
  return (
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
  )
}
