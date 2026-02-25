import { getPostBySlug, getLatestPosts } from '@/lib/ghost'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Calendar } from 'lucide-react'
import type { Metadata } from 'next'
import { AnimatedBackground } from '@/components/animated-background'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | ZephyrStudio`,
    description: post.excerpt,
    openGraph: {
      images: post.feature_image ? [post.feature_image] : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [post, relatedPosts] = await Promise.all([
    getPostBySlug(slug),
    getLatestPosts(2),
  ])

  if (!post) notFound()

  // Extract H2 headings for Table of Contents
  const headingRegex = /<h2 id="([^"]+)">(.*?)<\/h2>/g
  const toc: { id: string; text: string }[] = []
  let match
  while ((match = headingRegex.exec(post.html)) !== null) {
    toc.push({ id: match[1], text: match[2].replace(/<[^>]+>/g, '') })
  }

  return (
    <div className="min-h-screen bg-[#030305] relative overflow-hidden">
      <AnimatedBackground />
      <Header />

      <div className="pt-32 pb-20 px-4 md:px-8 relative z-10">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#0018d8]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 font-mono mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#00e5ff] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#00e5ff] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px] md:max-w-none">{post.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* LEFT COLUMN: MAIN CONTENT */}
            <main>
              <article>
                <header className="mb-10">
                  {post.tags?.[0] && (
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#0018d8]/20 border border-[#0018d8]/40 text-[#00e5ff] text-xs font-bold uppercase tracking-widest">
                      {post.tags[0].name}
                    </div>
                  )}

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight text-balance">
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-mono border-y border-white/10 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">ZephyrStudio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0018d8]" />
                      <time dateTime={post.published_at}>
                        {new Date(post.published_at).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#00e5ff]" />
                      {post.reading_time || 3} min de lectura
                    </div>
                  </div>
                </header>

                {post.feature_image && (
                  <div className="mb-12 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                    <img
                      src={post.feature_image}
                      alt={post.title}
                      className="w-full h-auto max-h-[500px] object-cover"
                    />
                  </div>
                )}

                {/* Ghost HTML content */}
                <div
                  className="ghost-content"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />

                {/* Author / EEAT box */}
                <div className="mt-16 p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00e5ff] to-[#0018d8] flex items-center justify-center shrink-0 text-white font-bold text-2xl select-none">
                    Z
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">ZephyrStudio Tech Team</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      Agentes Digitalizadores Adheridos especializados en la tramitación e implantación de soluciones tecnológicas B2B para PYMEs en toda España.
                    </p>
                  </div>
                </div>
              </article>
            </main>

            {/* RIGHT COLUMN: STICKY SIDEBAR */}
            <aside className="lg:sticky lg:top-32 flex flex-col gap-8">

              {/* TABLE OF CONTENTS */}
              {toc.length > 0 && (
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-white mb-4">Índice</h3>
                  <ul className="space-y-3">
                    {toc.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={`#${item.id}`}
                          className="text-slate-400 hover:text-[#00e5ff] text-sm transition-colors block pl-3 border-l-2 border-transparent hover:border-[#00e5ff]"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related posts */}
              {relatedPosts && relatedPosts.length > 0 && (
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                    Ultimos Articulos
                  </h3>
                  <div className="flex flex-col gap-4">
                    {relatedPosts.map((rp: any) => (
                      <Link
                        key={rp.id}
                        href={`/blog/${rp.slug}`}
                        className="group flex gap-4 items-center"
                      >
                        {rp.feature_image && (
                          <img
                            src={rp.feature_image}
                            alt={rp.title}
                            className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10 group-hover:border-[#00e5ff]/50 transition-colors"
                          />
                        )}
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#00e5ff] transition-colors line-clamp-2 leading-tight mb-1">
                            {rp.title}
                          </h4>
                          <span className="text-xs text-slate-500 font-mono">
                            {rp.reading_time || 3} min
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Sticky CTA */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0018d8]/20 to-[#00e5ff]/10 border border-[#00e5ff]/30 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/20 blur-[50px] rounded-full pointer-events-none" />
                <h4 className="text-xl font-bold text-white mb-3 relative z-10">Bono Kit Digital</h4>
                <p className="text-slate-300 text-sm mb-6 relative z-10 font-light">
                  Verifica si tienes derecho a los 1.000€ en menos de 60 segundos.
                </p>
                <Link
                  href="/formulario-contacto"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#00e5ff] hover:bg-white text-black rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] relative z-10"
                >
                  Verificar Viabilidad
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
