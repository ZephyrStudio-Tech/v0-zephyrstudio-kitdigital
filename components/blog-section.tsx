import { getLatestPosts } from '@/lib/ghost'
import { BlogGrid } from '@/components/blog-grid'

export async function BlogSection() {
  const posts = await getLatestPosts(3)
  return <BlogGrid posts={posts} />
}
