"use client";

import { getPhotos } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";
import type { Photo } from "@/lib/types";
import Image from "next/image";
import { useQuery } from "react-query";
import Masonry from "react-masonry-css";

export default function Home() {
  const { data } = useQuery({
    queryKey: "categories",
    queryFn: getPhotos,
  });

  const photoIds = new Set();
  const uniquePhotos: Photo[] = [];

  data?.data.forEach((category) => {
    category.photos?.forEach((photo) => {
      if (!photoIds.has(photo.documentId)) {
        photoIds.add(photo.documentId);
        uniquePhotos.push(photo);
      }
    });
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="bg-clip-padding px-2"
      >
        {uniquePhotos.map((image) => (
          <div key={image.id} className="mb-4">
            <Image
              src={IMAGE_BASE_URL + image.url || "/placeholder.svg"}
              width={300}
              height={300}
              alt="Image"
              className="rounded-xl w-full h-auto"
              sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
              priority
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
