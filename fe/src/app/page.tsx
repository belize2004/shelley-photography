"use client";
import { getPhotos } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";
import Image from "next/image";
import { useQuery } from "react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: "categories",
    queryFn: getPhotos,
  });
  return (
    <div className="flex flex-wrap p-8">
      {data?.data.map((category) =>
        category.photos.map((image) => (
          <div key={image.id} className="mx-2">
            <Image
              src={IMAGE_BASE_URL + image.url}
              width={300}
              height={300}
              alt="Image"
              className="rounded-xl"
            />
          </div>
        ))
      )}
    </div>
  );
}
