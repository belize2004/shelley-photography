'use client'
import {BlogCard} from '@/components/blog/card'
// import {blogsOptions} from '@/lib/api/blog'

// import {useSuspenseQuery} from '@tanstack/react-query'

export default function PageClient({blogs = []}) {
  // const {data} = useSuspenseQuery(blogsOptions)

  return (
    <>
      <div className="flex flex-col p-8 gap-8">
        {blogs?.map((blog) => <BlogCard key={blog._id} blogPost={blog} />)}
      </div>
    </>
  )
}
