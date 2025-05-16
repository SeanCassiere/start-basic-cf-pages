import { json } from '@tanstack/react-start'
import { fetchPosts } from '~/utils/posts'

export const ServerRoute = createServerFileRoute().methods({
  GET: async () => {
    const posts = await fetchPosts()
    return json(posts)
  },
})
