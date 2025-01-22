"use client";

import { BlogCard } from "@/components/blog/card";
import { senior } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function PageClient() {
  const { data } = useSuspenseQuery(senior);
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

      <div className="flex flex-col p-8 gap-8">
        {data?.data
          .filter((c) => c.name === "senior portraits")
          .map((category) =>
            category.blogs.map((b) => <BlogCard key={b.id} blogPost={b} />)
          )}
      </div>
    </>
  );
}
