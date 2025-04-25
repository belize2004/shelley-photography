'use client'
import Image from 'next/image'
import {useMemo} from 'react'
import {Masonry} from 'masonic'
// import {useSuspenseQuery} from '@tanstack/react-query'
// import {home} from '@/lib/api/categories'
// import {IMAGE_BASE_URL} from '@/lib/const'
import {shimmer, toBase64} from '@/lib/image'
import {generalImageURL} from '@/lib/utils'

interface GalleryProps {
  isMobile: boolean
  homeData: any
}

export function Gallery({isMobile, homeData}: GalleryProps) {
  // const { data } = useSuspenseQuery(home);

  const breakpointCols = useMemo(
    () =>
      isMobile
        ? {
            default: 2
          }
        : {
            default: 3
          },
    [isMobile]
  )

  const photos = useMemo(() => homeData?.photos || [], [homeData])

  return (
    <Masonry
      items={photos}
      columnCount={breakpointCols.default}
      render={({index, data}: {index: number; data: any}) => {
        const {asset, title, alt} = data
        const imgUrl = generalImageURL(data)
        const dimension = asset?._ref?.split('-')[2]
        const width = dimension ? dimension?.split('x')[0] : 1200
        const height = dimension ? dimension?.split('x')[1] : 800
        return (
          <div className=" relative group p-2">
            <Image
              src={imgUrl}
              width={width ?? 1200}
              height={height ?? 800}
              alt={alt || title || 'Gallery image'}
              className="rounded-xl w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              priority={index < 4}
              loading={index < 4 ? 'eager' : 'lazy'}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              sizes="(max-width: 500px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
          </div>
        )
      }}
    />
  )
}
