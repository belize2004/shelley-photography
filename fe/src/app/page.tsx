"use client";
import { getPhotos } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";
import { Photo } from "@/lib/types";
import Image from "next/image";
import { useQuery } from "react-query";

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

  return (
    <div className="flex flex-wrap p-8 mx-auto w-full items-center justify-center">
      {uniquePhotos.map((image) => (
        <div key={image.id} className="m-2">
          <Image
            src={IMAGE_BASE_URL + image.url}
            width={300}
            height={300}
            alt="Image"
            className="rounded-xl w-full"
          />
        </div>
      ))}
    </div>
  );
}
