"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { IMAGE_BASE_URL } from "@/lib/const";
import { useSuspenseQuery } from "@tanstack/react-query";
import { homeOptions } from "@/lib/api/home";
import { BlogCard } from "@/components/blog/card";

export default function PageClient() {
  const { data } = useSuspenseQuery(homeOptions);
  const breakpointColumnsObj = {
    default: 5,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="bg-clip-padding px-2"
      >
        {data.data[0].gallery_item
          .sort((a, b) => {
            if (a.order === undefined && b.order === undefined) return -1;
            if (a.order === undefined) return -1;
            if (b.order === undefined) return -1;
            return a.order + b.order;
          })
          .map((image, idx) => (
            <div key={image.id} className="mb-4">
              <Image
                src={IMAGE_BASE_URL + image.image.url || "/placeholder.svg"}
                width={image.image.width}
                height={image.image.height}
                alt="Image"
                className="rounded-xl w-full h-auto"
                priority={idx < 5}
              />
            </div>
          ))}
      </Masonry>
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </>
  );
}
