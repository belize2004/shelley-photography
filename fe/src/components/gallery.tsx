"use client";
import Image from "next/image";
import { useMemo } from "react";
import { Masonry } from "masonic";
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
        }
        : {
          default: 3,
        },
    [isMobile]
  );

  const photos = useMemo(() => data.data[0]?.photos || [], [data]);

  return (
    <Masonry
      items={photos}
      columnCount={breakpointCols.default}
      render={({ index, data: { width, height, url, alternativeText } }) =>
        <div className=" relative group p-2">
          <Image
            src={IMAGE_BASE_URL + url}
            width={width ?? 1200}
            height={height ?? 800}
            alt={alternativeText ?? "Gallery image"}
            className="rounded-xl w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
            priority={index < 4}
            loading={index < 4 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            sizes="(max-width: 500px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </div>
      } />
  );
}