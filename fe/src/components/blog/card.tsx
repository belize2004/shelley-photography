// import {IMAGE_BASE_URL} from '@/lib/const'
// import {Root} from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '../ui/button'
import {generalImageURL} from '@/lib/utils'
export function BlogCard({blogPost}: {blogPost: any}) {
  const imgUrl = generalImageURL(blogPost?.cover)

  return (
    <Link href={`/blog/${blogPost?._id}`}>
      <div className="bg-white flex flex-col rounded-xl gap-4 pb-4 border shadow-md">
        {blogPost?.cover && (
          <Image
            src={imgUrl}
            width={1000}
            height={1000}
            alt="Image"
            className=" w-full h-60 object-cover  rounded-t-xl"
          />
        )}
        <h1 className={`px-4 text-2xl font-bold ${!blogPost?.cover ? 'pt-4' : ''}`}>
          {blogPost?.name}
        </h1>
        <p className="px-4 line-clamp-2 text-zinc-500">{blogPost?.desc}</p>
        <Button className="w-fit" variant={'link'}>
          Read more
        </Button>
      </div>
    </Link>
  )
}
