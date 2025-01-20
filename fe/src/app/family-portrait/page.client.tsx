"use client";

import { IMAGE_BASE_URL } from "@/lib/const";
import type { Photo } from "@/lib/types";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function PageClient({ photos }: { photos: Photo[] }) {
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
      className="flex w-auto mt-4"
      columnClassName="bg-clip-padding px-2"
    >
      {photos?.map((image) => (
        <div key={image.id} className="mb-4">
          {" "}
          {/* Changed margin to bottom only */}
          <Image
            src={IMAGE_BASE_URL + image.url || "/placeholder.svg"}
            width={1200}
            height={1200}
            alt="Image"
            className="rounded-xl w-full h-auto" // Made image responsive
          />
        </div>
      ))}
    </Masonry>
  );
}
