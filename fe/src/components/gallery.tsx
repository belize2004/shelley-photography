"use client";

import Image from "next/image";
import { useMemo } from "react";
import Masonry from "react-masonry-css";
import { useSuspenseQuery } from "@tanstack/react-query";
import { home } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";
import { shimmer, toBase64 } from "@/lib/image";

interface GalleryProps {
  isMobile: boolean;
}

export function Gallery({ isMobile }: GalleryProps) {
  const { data } = useSuspenseQuery(home);

  const breakpointCols = useMemo(
    () =>
      isMobile
        ? {
          default: 2,
          500: 2,
        }
        : {
          default: 4,
          1440: 3,
          1100: 3,
          700: 2,
          500: 1,
        },
    [isMobile]
  );

  const photos = useMemo(() => data.data[0]?.photos || [], [data]);

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="flex w-auto"
      columnClassName="bg-clip-padding px-2 first:pl-4 last:pr-4 py-4"
    >
      {photos.map((image, idx) => (
        <div key={image.id} className="mb-4 relative group">
          <Image
            src={IMAGE_BASE_URL + image.url}
            width={image.width || 1200}
            height={image.height || 800}
            alt={image.alt || "Gallery image"}
            className="rounded-xl w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
            priority={idx < 4}
            loading={idx < 4 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            sizes="(max-width: 500px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </div>
      ))}
    </Masonry>
  );
}