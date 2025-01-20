import { BlogCard } from "@/components/blog/card";
import { getCategory } from "@/lib/api/categories";

import PageClient from "../family-portrait/page.client";

export default async function Page() {
  const data = await getCategory("micro wedding");

  return (
    <>
      <PageClient photos={data?.data[0].photos} />
      <div className="flex flex-col p-8 gap-8">
        {data?.data
          .filter((c) => c.name === "micro wedding")
          .map((category) =>
            category.blogs.map((b) => <BlogCard key={b.id} blogPost={b} />)
          )}
      </div>
    </>
  );
}
