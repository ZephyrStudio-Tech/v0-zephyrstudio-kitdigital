import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.kitdigitalzephyrstudio.es'
const GHOST_URL = process.env.NEXT_PUBLIC_GHOST_URL   // e.g. https://tu-ghost.com
const GHOST_KEY = process.env.GHOST_CONTENT_API_KEY   // Content API key

// ── Fetch all published Ghost posts ──────────────────────────────
async function getGhostPosts(): Promise<{ slug: string; updatedAt: string }[]> {
  if (!GHOST_URL || !GHOST_KEY) return []

  try {
    const res = await fetch(
      `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_KEY}&fields=slug,updated_at&limit=all`,
      { next: { revalidate: 3600 } } // ISR: revalidate every hour
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.posts ?? []
  } catch {
    return []
  }
}

// ── Static routes ─────────────────────────────────────────────────
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/formulario-contacto`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/segmento-ii`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/segmento-iii`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/kit-digital-sin-iva`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/faq`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
]

// ── Sitemap (async) ───────────────────────────────────────────────
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getGhostPosts()

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}