"use client";
import Image from "next/image";
import { Photo } from "@/lib/types";
import Masonry from "react-masonry-css";
import { IMAGE_BASE_URL } from "@/lib/const";

export default function PageClient({
  uniquePhotos,
}: {
  uniquePhotos: Photo[];
}) {
  const breakpointColumnsObj = {
    default: 4,
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
  );
}
