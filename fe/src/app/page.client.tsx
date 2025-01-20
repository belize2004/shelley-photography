/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";

import Masonry from "react-masonry-css";
import { IMAGE_BASE_URL } from "@/lib/const";
import { Formats } from "@/lib/types";

export default function PageClient({
  uniquePhotos,
}: {
  uniquePhotos: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
}) {
  const breakpointColumnsObj = {
    default: 5,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto"
      columnClassName="bg-clip-padding px-2"
    >
      {uniquePhotos.map((image, idx) => (
        <div key={image.id} className="mb-4">
          <Image
            src={IMAGE_BASE_URL + image.url || "/placeholder.svg"}
            width={300}
            height={300}
            alt="Image"
            className="rounded-xl w-full h-auto"
            // sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
            priority={idx < 2}
          />
        </div>
      ))}
    </Masonry>
  );
}
