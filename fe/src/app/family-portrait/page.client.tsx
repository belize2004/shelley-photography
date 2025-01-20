"use client";
import { IMAGE_BASE_URL } from "@/lib/const";
import { Photo } from "@/lib/types";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function PageClient({ photos }: { photos: Photo[] }) {
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
      {photos?.map((image) => (
        <div key={image.id} className="m-2">
          <Image
            src={IMAGE_BASE_URL + image.url}
            width={300}
            height={300}
            alt="Image"
            className="rounded-xl"
          />
        </div>
      ))}
    </Masonry>
  );
}
