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
        <div className="flex flex-col gap-4">
          {/* <Image
            src="/ratings.webp"
            width={2000}
            height={2000}
            alt="Ratings"
            className="my-8 w-full"
          /> */}
          {data.data[0].photos
            // ?.sort((a, b) => a.order - b.order)
            .map((image, idx) => (
              <div key={image.id} className="mb-4">
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
        </div>
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
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </>
  );
}
