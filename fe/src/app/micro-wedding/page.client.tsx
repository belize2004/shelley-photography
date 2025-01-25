"use client";

import { BlogCard } from "@/components/blog/card";
import { micro } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Masonry from "react-masonry-css";

interface PageClientProps {
  isMobile: boolean;
}

export default function PageClient({ isMobile }: PageClientProps) {
  const { data } = useSuspenseQuery(micro);
  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      {isMobile ? (
        <Masonry
          breakpointCols={{
            default: 2,
            500: 2,
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
                src={IMAGE_BASE_URL + image.url || "/placeholder.svg"}
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

          {data.data[0].photos.map((image, idx) => (
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
      )}
      <h1 className="text-2xl">
        Intimate Micro Wedding Photography Pricing
      </h1>
      <div className="textblockpricing prose  [&_a]:text-blue-500 [&_a]:underline">
        <strong>
          A micro wedding is an intimate wedding celebration that typically includes a smaller guest list—usually 20 people or fewer.
          <br /><br />
          1 Hour $900
          <br />
        </strong>
        <a href="https://shelleybressmanphotography.pixieset.com/booking/micro-wedding" target="_blank" className="link-3" rel="noopener noreferrer">
          <strong>BOOK NOW</strong>
        </a>
        <strong>
          <br /><br />
          Up to 2 Hours $1200
          <br />
        </strong>
        <a href="https://shelleybressmanphotography.pixieset.com/booking/micro-wedding-2-hours" target="_blank" className="link-3" rel="noopener noreferrer">
          <strong>BOOK NOW</strong>
        </a>
        <strong>
          <br /><br />
          Up to 3 Hours $1500
          <br />
        </strong>
        <a href="https://shelleybressmanphotography.pixieset.com/booking/micro-wedding-3-hour" target="_blank" className="link-2" rel="noopener noreferrer">
          <strong>BOOK NOW</strong>
        </a>
        <br /><br />
      </div>
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </>
  );
}
