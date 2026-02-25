'use client'

import React, { useEffect, useState } from 'react'
import { getLatestPosts } from '@/lib/ghost'
import { BlogGrid } from './blog-grid'

export function BlogSection() {
  const [posts, setPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function fetchPosts() {
      try {
        const data = await getLatestPosts(3)
        if (isMounted) {
          setPosts(data || [])
        }
      } catch (error) {
        console.error('Error fetching ghost posts:', error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchPosts()

    return () => {
      isMounted = false
    }
  }, [])

  if (isLoading) {
    return (
      <div className="w-full py-24 flex justify-center">
        <div className="w-8 h-8 border-4 border-[#00e5ff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return <BlogGrid posts={posts} />
}
