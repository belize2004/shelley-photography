"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { IMAGE_BASE_URL } from "@/lib/const";
import { useSuspenseQuery } from "@tanstack/react-query";
import { homeOptions } from "@/lib/api/home";
import { BlogCard } from "@/components/blog/card";

interface PageClientProps {
  isMobile: boolean;
}

export default function PageClient({ isMobile }: PageClientProps) {
  const { data } = useSuspenseQuery(homeOptions);

  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const imagesSorted = data.data[0].gallery_item?.filter(
    (image) => image.order
  );

  const imagesUnSorted = data.data[0].gallery_item?.filter(
    (image) => !image.order
  );

  const ImageComponent = ({ image, index }: { image: any; index: number }) => (
    <div key={`image${image.id}`} className="mb-4">
      <Image
        src={IMAGE_BASE_URL + (image.image?.url || "")}
        width={image.image?.width || 1000}
        height={image.image?.height || 1000}
        alt={image.image?.alt || "Gallery image"}
        className="rounded-xl w-full h-auto"
        priority={index < 4}
        loading={index < 4 ? "eager" : "lazy"}
      />
    </div>
  );

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
          {imagesSorted
            .sort((a, b) => a.order - b.order)
            .map((image, idx) => (
              <ImageComponent key={image.id} image={image} index={idx} />
            ))}
          {imagesUnSorted.map((image, idx) => (
            <ImageComponent key={image.id} image={image} index={idx} />
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
          {imagesSorted
            .sort((a, b) => a.order - b.order)
            .map((image, idx) => (
              <ImageComponent key={image.id} image={image} index={idx} />
            ))}
          {imagesUnSorted.map((image, idx) => (
            <ImageComponent key={image.id} image={image} index={idx} />
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
