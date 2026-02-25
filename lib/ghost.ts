import GhostContentAPI from '@tryghost/content-api'

export const ghost = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL || 'https://demo.ghost.io',
  key: process.env.NEXT_PUBLIC_GHOST_KEY || '22444f78447824223cefc48062',
  version: 'v5.0'
})

export async function getPostBySlug(slug: string) {
  try {
    return await ghost.posts.read({ slug }, { include: ['tags', 'authors'] })
  } catch (err) {
    return null
  }
}

export async function getLatestPosts(limit = 3) {
  try {
    return await ghost.posts.browse({
      limit,
      include: ['tags', 'authors'],
      fields: ['id', 'title', 'slug', 'feature_image', 'excerpt', 'published_at', 'reading_time']
    })
  } catch (err) {
    console.error('Ghost API Error:', err)
    return []
  }
}
