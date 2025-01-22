"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { IMAGE_BASE_URL } from "@/lib/const";
import { useSuspenseQuery } from "@tanstack/react-query";
import { homeOptions } from "@/lib/api/home";
import { BlogCard } from "@/components/blog/card";
import { useEffect, useState } from "react";

export default function PageClient() {
  const { data } = useSuspenseQuery(homeOptions);

  const breakpointColumnsObj = {
    default: 5,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imagesSorted = data.data[0].gallery_item.filter((image) => image.order);

  const imagesUnSorted = data.data[0].gallery_item.filter(
    (image) => !image.order
  );

  return (
    <>
      {isClient && window.screen.width > 768 ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {imagesSorted
            ?.sort((a, b) => {
              return a.order - b.order;
            })
            .filter((image) => image.image?.url)
            .map((image, idx) => {
              return (
                <div key={"image" + image.id} className="mb-4">
                  <Image
                    src={IMAGE_BASE_URL + (image.image?.url || "")}
                    width={image.image?.width || 300}
                    height={image.image?.height || 300}
                    alt="Image"
                    className="rounded-xl w-full h-auto"
                    priority={idx < 2}
                  />
                </div>
              );
            })}
          {imagesUnSorted
            ?.sort((a, b) => {
              return a.order - b.order;
            })
            .filter((image) => image.image?.url)
            .map((image, idx) => {
              return (
                <div key={"image" + image.id} className="mb-4">
                  <Image
                    src={IMAGE_BASE_URL + (image.image?.url || "")}
                    width={image.image?.width || 300}
                    height={image.image?.height || 300}
                    alt="Image"
                    className="rounded-xl w-full h-auto"
                    priority={idx < 2}
                  />
                </div>
              );
            })}
        </Masonry>
      ) : (
        <div className="flex flex-col gap-4">
          {imagesSorted
            ?.sort((a, b) => {
              return a.order - b.order;
            })
            .filter((image) => image.image?.url)
            .map((image, idx) => {
              return (
                <div key={"image" + image.id} className="mb-4">
                  <Image
                    src={IMAGE_BASE_URL + (image.image?.url || "")}
                    width={image.image?.width || 300}
                    height={image.image?.height || 300}
                    alt="Image"
                    className="rounded-xl w-full h-auto"
                    priority={idx < 2}
                  />
                </div>
              );
            })}
          {imagesUnSorted
            ?.sort((a, b) => {
              return a.order - b.order;
            })
            .filter((image) => image.image?.url)
            .map((image, idx) => {
              return (
                <div key={"image" + image.id} className="mb-4">
                  <Image
                    src={IMAGE_BASE_URL + (image.image?.url || "")}
                    width={image.image?.width || 300}
                    height={image.image?.height || 300}
                    alt="Image"
                    className="rounded-xl w-full h-auto"
                    priority={idx < 2}
                  />
                </div>
              );
            })}
        </div>
      )}
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </>
  );
}
