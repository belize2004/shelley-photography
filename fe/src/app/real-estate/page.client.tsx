"use client";

import { BlogCard } from "@/components/blog/card";
import { reale } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";

export default function PageClient() {
  const { data } = useSuspenseQuery(reale);
  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto mt-4"
        columnClassName="bg-clip-padding px-2"
      >
        {data.data[0].photos?.map((image) => (
          <div key={image.id} className="mb-4">
            {" "}
            {/* Changed margin to bottom only */}
            <Image
              src={IMAGE_BASE_URL + image.url || "/placeholder.svg"}
              width={image.width || 1200}
              height={image.height || 120}
              alt="Image"
              className="rounded-xl w-full h-auto" // Made image responsive
            />
          </div>
        ))}
      </Masonry>
      <Image
        src="/ratings.webp"
        width={2000}
        height={2000}
        alt="Ratings"
        className="my-8 w-full"
      />
      <div className="flex flex-col p-8 gap-8">
        <h1 className="text-2xl">REAL ESTATE PRICING</h1>
        <div>
          Transform your real estate listings with professional photography.
          Professional photography isn’t just a detail—it’s a difference-maker.
          Here’s why it matters: <div className="py-2 block" /> Sell Faster.
          Homes with professional photography sell 32% faster. On average, they
          spend 89 days on the market compared to 123 days for those with
          standard or low-quality images. <div className="py-2 block" /> Achieve
          Higher Prices. Properties with high-quality photos command between
          $934 and $116,076 more than comparable listings with amateur
          photography. <div className="py-2 block" /> Capture More Attention.
          Listings with professional images receive 118% more online views,
          putting your property in front of more potential buyers.{" "}
          <div className="py-2 block" /> Create Perceived Value. Homes with
          professionally edited photos see a 47% higher asking price per square
          foot, enhancing their market appeal. <div className="py-2 block" />{" "}
          Make a First Impression That Lasts. Your photos are the first thing
          buyers see. Professionally shot images captivate and invite them to
          explore further.
          <div className="py-2 block" /> Highlight Every Detail. Angles,
          lighting, and composition are expertly used to showcase every unique
          feature of your property, from natural light to architectural
          highlights.
          <div className="py-2 block" /> Stand Out in a Competitive Market. In a
          sea of listings, professional photography helps yours rise above,
          especially for luxury homes where quality visuals are essential.
          <div className="py-2 block" /> Effortless for Agents. We handle the
          photography so you can focus on selling. Quick setups, efficient
          shoots, and fast turnarounds keep you ahead.
          <div className="py-2 block" /> Showcase the Lifestyle. Beyond a house,
          sell the dream. From cozy outdoor spaces to inviting living areas, our
          photography paints a picture buyers can step into.
          <div className="py-2 block" /> ‍ Precision Technology. With
          state-of-the-art cameras and professional editing, every photo is
          crisp, vibrant, and meticulously polished. ‍
          <div className="py-2 block" /> Why choose professional photography?
          Because every listing deserves the attention it gets. Elevate your
          brand, attract more buyers, and close deals faster.
          <div className="py-2 block" /> Same-day appointments.24-48 hour
          turnaround.High-quality images that move properties.
          <div className="py-2 block" /> 1 to 15 images $299 ‍
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
        {data?.data
          .filter((c) => c.name === "real estate")
          .map((category) =>
            category.blogs.map((b) => <BlogCard key={b.id} blogPost={b} />)
          )}
      </div>
    </>
  );
}
