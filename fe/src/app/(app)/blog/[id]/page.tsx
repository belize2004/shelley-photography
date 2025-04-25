import Image from 'next/image'
import {format} from 'date-fns'
import {notFound} from 'next/navigation'
import {getBlogById} from '@/lib/api/blog'
// import {IMAGE_BASE_URL} from '@/lib/const'
// import {Root} from '@/lib/types'
import {generalImageURL} from '@/lib/utils'
import {PortableText} from 'next-sanity'

interface Props {
  params: Promise<{id: string}>
}

export default async function Page({params}: Props) {
  const blog = await getBlogById((await params)?.id)
  if (!blog) {
    notFound()
  }

  const postData = blog
  const dimension = blog?.cover ? postData?.cover?.asset?._ref?.split('-')[2] : ''
  const width = dimension ? dimension.split('x')[0] : 'initial'
  const height = dimension ? dimension.split('x')[1] : 'initial'

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold mb-4">{postData?.name}</h1>
        <p className="text-muted-foreground mb-4">
          Published on {format(new Date(postData?._createdAt), 'MMMM d, yyyy')}
        </p>
      </header>
      {postData?.cover && (
        <div className="mb-8">
          <Image
            src={generalImageURL(postData?.cover)}
            width={width}
            height={height}
            alt={postData?.cover?.alt || 'Cover image'}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none mb-8">
        <p>{postData?.desc}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <PortableText value={postData?.content} />
      </div>
    </article>
  )
}
