import Link from 'next/link'

export function Footer() {
  return (
    <div className="w-full flex flex-col mt-auto">
      {/* --- MAIN DARK FOOTER --- */}
      <footer className="relative bg-[#030305]/98 border-t border-white/10 pt-20 pb-8 px-4 md:px-8 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00e5ff]/5 blur-[150px] pointer-events-none z-0" />

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_1.5fr_1.5fr_1.5fr] gap-12 lg:gap-16 mb-16">

            {/* Col 1: Brand */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/logo_zephyrstudio.png"
                alt="ZephyrStudio Logo"
                className="h-[65px] w-auto mb-6"
              />
              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-[340px]">
                Agentes Digitalizadores Adheridos. Transformamos empresas con tecnología subvencionada a través del programa Kit Digital.
              </p>
              <a
                href="mailto:hola@zephyrstudio.es"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] rounded-full text-sm font-semibold hover:bg-[#00e5ff]/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all"
              >
                hola@zephyrstudio.es
              </a>
            </div>

            {/* Col 2: Soluciones */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,1)]" />
                Soluciones Kit Digital
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/puesto-de-trabajo-seguro" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Puesto de Trabajo Seguro (Mac/PC)</Link></li>
                <li><Link href="/factura-electronica" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Factura Electronica B2B</Link></li>
                <li><Link href="/sitio-web" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Sitio Web y Presencia Digital</Link></li>
                <li><Link href="/comercio-electronico" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">E-Commerce</Link></li>
                <li><Link href="/seo" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Posicionamiento SEO Avanzado</Link></li>
              </ul>
            </div>

            {/* Col 3: Informacion */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,1)]" />
                Informacion de Interes
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/segmento-iii" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Bono Segmento III (0-2 emp.)</Link></li>
                <li><Link href="/segmento-ii" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Bono Segmento II (3-9 emp.)</Link></li>
                <li><Link href="/segmento-i" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Bono Segmento I (10+ emp.)</Link></li>
                <li><Link href="/kit-digital-sin-iva" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Como funciona lo del IVA?</Link></li>
                <li><Link href="/blog" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Blog y Novedades</Link></li>
              </ul>
            </div>

            {/* Col 4: Legal */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,1)]" />
                Legal y Soporte
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/formulario-contacto" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Verificar Viabilidad</Link></li>
                <li><Link href="/aviso-legal" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Aviso Legal</Link></li>
                <li><Link href="/politica-privacidad" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Politica de Privacidad</Link></li>
                <li><Link href="/politica-cookies" className="text-slate-400 hover:text-[#00e5ff] hover:translate-x-1 transition-all text-sm block">Politica de Cookies</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} ZephyrStudio. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/aviso-legal" className="text-slate-500 hover:text-white transition-colors text-sm">Terminos</Link>
              <Link href="/politica-privacidad" className="text-slate-500 hover:text-white transition-colors text-sm">Privacidad</Link>
              <Link href="/politica-cookies" className="text-slate-500 hover:text-white transition-colors text-sm">Cookies</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* --- INSTITUTIONAL WHITE BAND --- */}
      <div className="w-full bg-white border-t-4 border-[#00e5ff] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/ue.svg"
            alt="Financiado por la Union Europea"
            className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/r.svg"
            alt="Plan de Recuperacion"
            className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/gobierno-1.jpg"
            alt="Gobierno de Espana"
            className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105 rounded-sm"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/red.svg"
            alt="Red.es"
            className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://supabase.kitdigitalzephyrstudio.es/storage/v1/object/public/img_web/kitdigital.svg"
            alt="Kit Digital"
            className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
