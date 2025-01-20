"use client";
import { BlogCard } from "@/components/blog/card";
import { getPhotos } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { useQuery } from "react-query";

export default function Page() {
  const { data } = useQuery({
    queryKey: "categories",
    queryFn: getPhotos,
  });
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="pt-8 px-4">
      <h1 className="text-4xl font-bold w-fit mx-auto text-center">
        Family Portrait Photography <br /> Let us tell your story
      </h1>
      <p className="text-xl text-center my-4">
        Pensacola, Perdido Key, Orange Beach, Gulf Shores, Fort Morgan and
        Navarre Includes 2 photographers
      </p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="bg-clip-padding px-2"
      >
        {data?.data
          .filter((c) => c.name === "family portrait")
          .map((category) =>
            category.photos?.map((image) => (
              <div key={image.id} className="m-2">
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
      </Masonry>
      <Image
        src="/ratings.webp"
        width={800}
        height={800}
        alt="Ratings"
        className="my-8 w-full"
      />
      <div className="flex flex-col p-8 gap-8">
        {data?.data
          .filter((c) => c.name === "family portrait")
          .map((category) =>
            category.blogs.map((b) => <BlogCard key={b.id} blogPost={b} />)
          )}
      </div>
    </div>
  );
}
