import { BlogCard } from "@/components/blog/card";
import { getCategory } from "@/lib/api/categories";
import Image from "next/image";

import PageClient from "./page.client";

export default async function Page() {
  const data = await getCategory("family portrait");

  return (
    <div className="pt-8 px-4">
      <h1 className="text-4xl font-bold w-fit mx-auto text-center">
        Family Portrait Photography <br /> Let us tell your story
      </h1>
      <p className="text-xl text-center my-4">
        Pensacola, Perdido Key, Orange Beach, Gulf Shores, Fort Morgan and
        Navarre Includes 2 photographers
      </p>
      <PageClient photos={data?.data[0].photos} />

      <Image
        src="/ratings.webp"
        width={2000}
        height={2000}
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
