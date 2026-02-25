import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export function BlogGrid({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="relative px-4 py-24 overflow-hidden border-t border-white/[0.05]">
      <div className="container mx-auto max-w-7xl relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs uppercase tracking-widest mb-4">
              Novedades SEO
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Actualidad y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#00e5ff]">
                Recursos.
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-2 group transition-colors"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-black/50">
                {post.feature_image ? (
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-black flex items-center justify-center">
                    <span className="text-white/20 font-mono">ZephyrStudio</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {post.tags?.[0]?.name || 'Kit Digital'}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-slate-500 text-xs font-mono mb-4">
                  <time dateTime={post.published_at}>
                    {new Date(post.published_at).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.reading_time || 3} min
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center text-purple-400 font-medium text-sm gap-2 group-hover:gap-3 transition-all">
                  Leer artículo <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
