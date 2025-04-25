'use client'

import {BlogCard} from '@/components/blog/card'
// import {reale} from '@/lib/api/categories'
// import {IMAGE_BASE_URL} from '@/lib/const'
import {generalImageURL} from '@/lib/utils'

// import {useSuspenseQuery} from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import Masonry from 'react-masonry-css'

interface PageClientProps {
  isMobile: boolean
  realEstates?: any
}

export default function PageClient({isMobile, realEstates = null}: PageClientProps) {
  // const {data} = useSuspenseQuery(reale)

  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1
  }
  const renderImages = () => {
    return realEstates?.photos?.map((image, idx) => {
      const imgUrl = generalImageURL(image)
      const dimension = image?.asset?._ref?.split('-')[2]
      const width = dimension ? dimension.split('x')[0] : 1200
      const height = dimension ? dimension.split('x')[1] : 120
      return (
        <div key={image?._key} className="mb-4">
          <Image
            src={imgUrl || '/placeholder.svg'}
            width={width || 1200}
            height={height || 120}
            alt="Image"
            className="rounded-xl w-full h-auto" // Made image responsive
          />
        </div>
      )
    })
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
          {renderImages()}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {renderImages()}
        </Masonry>
      )}

      <div className="flex flex-col p-8 gap-2">
        <h1 className="text-2xl">REAL ESTATE PRICING</h1>
        <div>
          Transform your real estate listings with professional photography. Professional
          photography isn’t just a detail—it’s a difference-maker. Here’s why it matters:{' '}
          <div className="py-1 block" /> Sell Faster. Homes with professional photography sell 32%
          faster. On average, they spend 89 days on the market compared to 123 days for those with
          standard or low-quality images. <div className="py-1 block" /> Achieve Higher Prices.
          Properties with high-quality photos command between $934 and $116,076 more than comparable
          listings with amateur photography. <div className="py-1 block" /> Capture More Attention.
          Listings with professional images receive 118% more online views, putting your property in
          front of more potential buyers. <div className="py-1 block" /> Create Perceived Value.
          Homes with professionally edited photos see a 47% higher asking price per square foot,
          enhancing their market appeal. <div className="py-1 block" /> Make a First Impression That
          Lasts. Your photos are the first thing buyers see. Professionally shot images captivate
          and invite them to explore further.
          <div className="py-1 block" /> Highlight Every Detail. Angles, lighting, and composition
          are expertly used to showcase every unique feature of your property, from natural light to
          architectural highlights.
          <div className="py-1 block" /> Stand Out in a Competitive Market. In a sea of listings,
          professional photography helps yours rise above, especially for luxury homes where quality
          visuals are essential.
          <div className="py-1 block" /> Effortless for Agents. We handle the photography so you can
          focus on selling. Quick setups, efficient shoots, and fast turnarounds keep you ahead.
          <div className="py-1 block" /> Showcase the Lifestyle. Beyond a house, sell the dream.
          From cozy outdoor spaces to inviting living areas, our photography paints a picture buyers
          can step into.
          <div className="py-1 block" /> ‍ Precision Technology. With state-of-the-art cameras and
          professional editing, every photo is crisp, vibrant, and meticulously polished. ‍
          <div className="py-1 block" /> Why choose professional photography? Because every listing
          deserves the attention it gets. Elevate your brand, attract more buyers, and close deals
          faster.
          <div className="py-1 block" /> Same-day appointments.24-48 hour turnaround.High-quality
          images that move properties.
          <div className="py-1 block" /> 1 to 15 images $299 ‍
        </div>
        <Link
          href="https://shelleybressmanphotography.pixieset.com/booking/real-estate-photos-1-15-images"
          target="_blank"
          className="text-blue-600 underline"
        >
          Book Now
        </Link>
        <p>16 to 25 images $349</p>
        <Link
          href="https://shelleybressmanphotography.pixieset.com/booking/real-estate-photos-16-25-images"
          target="_blank"
          className="text-blue-600 underline"
        >
          Book Now
        </Link>
        <p>26 to 35 images $399</p>
        <Link
          href="https://shelleybressmanphotography.pixieset.com/booking/real-estate-photography-16-25-images"
          target="_blank"
          className="text-blue-600 underline"
        >
          Book Now
        </Link>
      </div>

      <div className="flex flex-col p-8 gap-8">
        {realEstates?.blogs?.map((b) => <BlogCard key={b._id} blogPost={b} />)}
      </div>
    </>
  )
}
