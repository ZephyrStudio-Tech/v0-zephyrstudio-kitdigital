import { getAllPosts } from '@/lib/ghost'
import Link from 'next/link'
import { Calendar, Clock, Search, ChevronRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog y Recursos Kit Digital 2026 | ZephyrStudio',
  description: 'Guías, normativas, trucos fiscales y novedades para sacar el máximo partido a tu bono digital sin cometer errores legales.',
}

export default async function BlogIndexPage() {
  const allPosts = await getAllPosts()
  const featuredPost = allPosts?.[0]
  const feedPosts = allPosts?.slice(1) || []

  return (
    <div className="min-h-screen bg-[#030305] pt-32 pb-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-[#0018d8]/15 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 font-mono mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#00e5ff] transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-white">Recursos y Blog</span>
        </nav>

        {/* SEO Header */}
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight text-balance">
            Recursos Kit Digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">2026</span>
          </h1>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Descubre guías técnicas, normativas actualizadas y estrategias fiscales para aprovechar al máximo tu bono digital. Toda la información validada por nuestros Agentes Digitalizadores Adheridos.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: MAIN FEED */}
          <div className="flex flex-col gap-12">

            {/* FEATURED POST */}
            {featuredPost && (
              <article className="group flex flex-col gap-6 pb-12 border-b border-white/10">
                <Link href={`/blog/${featuredPost.slug}`} className="block w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 relative">
                  {featuredPost.feature_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={featuredPost.feature_image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0018d8]/30 to-[#00e5ff]/10" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-60" />
                </Link>

                <div>
                  {featuredPost.tags?.[0] && (
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-bold uppercase tracking-widest">
                      {featuredPost.tags[0].name}
                    </div>
                  )}
                  <Link href={`/blog/${featuredPost.slug}`} className="block">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-[#00e5ff] transition-colors leading-tight text-balance">
                      {featuredPost.title}
                    </h2>
                  </Link>
                  <p className="text-slate-400 text-lg mb-6 line-clamp-3 font-light leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-slate-500 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={featuredPost.published_at}>
                        {new Date(featuredPost.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.reading_time || 3} min
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* FEED LIST */}
            <div className="flex flex-col gap-8">
              {feedPosts.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-8 items-center p-4 -mx-4 rounded-3xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10"
                >
                  <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-white/10 relative shrink-0">
                    {post.feature_image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.feature_image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0018d8]/20 to-[#00e5ff]/5" />
                    )}
                  </div>
                  <div>
                    {post.tags?.[0] && (
                      <div className="inline-block px-3 py-1 mb-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-widest">
                        {post.tags[0].name}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors leading-snug text-balance">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-base line-clamp-2 font-light mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-slate-500 text-xs font-mono">
                      <time dateTime={post.published_at}>
                        {new Date(post.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </time>
                      {post.reading_time && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.reading_time} min
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}

              {/* Empty state */}
              {feedPosts.length === 0 && !featuredPost && (
                <div className="text-center py-24 text-slate-500">
                  <p className="text-lg">No hay artículos disponibles por el momento.</p>
                  <p className="text-sm mt-2">Vuelve pronto para nuevos recursos sobre Kit Digital.</p>
                </div>
              )}
            </div>

            {/* Pagination placeholder */}
            {feedPosts.length > 0 && (
              <div className="flex justify-center gap-2 mt-8 pt-8 border-t border-white/10">
                <button className="w-10 h-10 rounded-xl bg-[#00e5ff] text-black font-bold flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center">2</button>
                <button className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-32 flex flex-col gap-8">

            {/* Search Widget */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4">Buscar en el blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ej: Factura Electrónica..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00e5ff] transition-colors text-sm"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              </div>
            </div>

            {/* SEO Silos (Categories) */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-4">Categorías</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Puesto de Trabajo Seguro', count: 12, href: '/puesto-de-trabajo-seguro' },
                  { label: 'Factura Electrónica B2B', count: 8, href: '/factura-electronica' },
                  { label: 'Normativas Red.es', count: 15, href: '#' },
                  { label: 'Sitio Web y SEO', count: 6, href: '#' },
                ].map((cat) => (
                  <li key={cat.label}>
                    <Link
                      href={cat.href}
                      className="flex justify-between items-center text-slate-400 hover:text-[#00e5ff] transition-colors text-sm font-medium"
                    >
                      {cat.label}
                      <span className="bg-white/5 px-2 py-0.5 rounded-full text-xs">{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Posts (Internal Backlinks) */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">Más leídos</h3>
              <div className="flex flex-col gap-6">
                {[
                  { title: 'Requisitos obligatorios para elegir un Apple Mac con Kit Digital', href: '/puesto-de-trabajo-seguro' },
                  { title: 'Todo sobre el Segmento III (0 a 2 empleados)', href: '/segmento-iii' },
                  { title: '¿Qué pasa si cierro la empresa antes de gastar el bono?', href: '#' },
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="group flex gap-4 items-center">
                    <span
                      className="text-4xl font-black font-mono text-transparent shrink-0 transition-colors duration-300 group-hover:text-[#00e5ff]"
                      style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
                    >
                      0{i + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#00e5ff] transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Conversion CTA */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0018d8]/20 to-[#00e5ff]/10 border border-[#00e5ff]/30 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/20 blur-[50px] rounded-full pointer-events-none" />
              <h4 className="text-xl font-bold text-white mb-2 relative z-10">Tienes dudas?</h4>
              <p className="text-slate-300 text-sm mb-6 relative z-10 font-light">
                Verificamos si tienes derecho a los 1.000 euros gratis en 60 segundos.
              </p>
              <Link
                href="/formulario-contacto"
                className="inline-flex items-center justify-center w-full py-4 bg-[#00e5ff] hover:bg-white text-black rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] relative z-10"
              >
                Verificar mi Bono
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  )
}
