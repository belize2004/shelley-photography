"use client";
import { BlogCard } from "@/components/blog/card";
import { getPhotos } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";
import Image from "next/image";
import { useQuery } from "react-query";

export default function Page() {
  const { data } = useQuery({
    queryKey: "categories",
    queryFn: getPhotos,
  });
  return (
    <>
      <div className="flex flex-wrap p-8">
        {data?.data
          .filter((c) => c.data.name === "Interior design")
          .map((category) =>
            category.data.gallery.map((image) => (
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
      <div className="flex flex-col p-8 gap-8">
        {data?.data
          .filter((c) => c.data.name === "Interior design")
          .map((category) =>
            category.data.posts.map((image) => (
              <BlogCard key={image.id} blogPost={image} />
            ))
          )}
      </div>
    </>
  );
}
