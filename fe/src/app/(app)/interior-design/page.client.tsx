'use client'

import {BlogCard} from '@/components/blog/card'
import {inte} from '@/lib/api/categories'

import {IMAGE_BASE_URL} from '@/lib/const'

import {useSuspenseQuery} from '@tanstack/react-query'

import Image from 'next/image'

import Masonry from 'react-masonry-css'

interface PageClientProps {
  isMobile: boolean
}

export default function PageClient({isMobile}: PageClientProps) {
  const {data} = useSuspenseQuery(inte)
  // Function to upload image to Sanity

  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <>
      {isMobile ? (
        <Masonry
          breakpointCols={{
            default: 2,
            500: 2
          }}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {/* <Image
       src="/ratings.webp"
       width={2000}
       height={2000}
       alt="Ratings"
       className="my-8 w-full"
     /> */}

          {data.data[0].photos.map((image, idx) => (
            <div key={image.id} className="mb-4">
              <Image
                src={IMAGE_BASE_URL + image.url || '/placeholder.svg'}
                width={image.width || 1200}
                height={image.height || 120}
                alt="Image"
                className="rounded-xl w-full h-auto" // Made image responsive
              />
            </div>
          ))}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {/* <Image
            src="/ratings.webp"
            width={2000}
            height={2000}
            alt="Ratings"
            className="my-8 w-full"
          /> */}

          {data.data[0]?.photos?.map((image, idx) => (
            <div key={image.id} className="mb-4">
              {' '}
              {/* Changed margin to bottom only */}
              <Image
                src={IMAGE_BASE_URL + image.url || '/placeholder.svg'}
                width={image.width || 1200}
                height={image.height || 120}
                alt="Image"
                className="rounded-xl w-full h-auto" // Made image responsive
              />
            </div>
          ))}
        </Masonry>
      )}
      <div className="flex flex-col p-8 gap-2">
        <h1 className="text-2xl">INTERIOR DESIGN PHOTOGRAPHY PRICING</h1>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Interior Design Photography by Shelley Bressman</div>
          <div className="font-bold">Every space tells a story. We make it unforgettable.</div>
          <div>
            Your designs deserve to shine. Shelley Bressman captures the essence of your work with
            precision and artistry, creating imagery that feels as stunning as the spaces
            themselves.
          </div>
          <div className="font-bold">Crafted for designers, inspired by perfection.</div>
          <div>
            From the soft glow of natural light to the fine textures of your carefully chosen
            materials, Shelley’s lens transforms every detail into an unforgettable visual
            narrative. Her photography doesn’t just showcase interiors—it elevates them.
          </div>
          <div className="font-bold">Trusted by the best.</div>
          <div>
            Featured in The Wall Street Journal Luxury Global Mansion Section, Shelley’s work is a
            testament to her ability to bring out the beauty in every project.
          </div>
          <div className="font-bold">Tailored to your vision</div>
          <div>
            Whether it’s the warmth of a cozy nook or the grandeur of an open concept design,
            Shelley captures your aesthetic exactly as it was imagined. Every angle, every detail,
            thoughtfully considered to highlight your signature style.
          </div>
          <div className="font-bold">Effortless. Elevated. Exceptional.</div>
          <div>
            With professional-grade equipment, an eye for perfection, and an understanding of your
            creative process, Shelley delivers images that resonate—because your work deserves
            nothing less.
          </div>
          <div className="font-bold">Make your designs unforgettable.</div>
          <div>Let’s create something extraordinary.</div>
          <div className="font-bold">Schedule your session today.</div>
          <div className="font-bold">Starting at $800</div>
        </div>
      </div>
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </>
  )
}
