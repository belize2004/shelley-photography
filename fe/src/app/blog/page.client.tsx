"use client";
import { BlogCard } from "@/components/blog/card";
import { blogsOptions } from "@/lib/api/blog";

import { useSuspenseQuery } from "@tanstack/react-query";

export default function PageClient() {
  const { data } = useSuspenseQuery(blogsOptions);

  return (
    <>
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs?.map((blog) => (
          <BlogCard key={blog.id} blogPost={blog} />
        ))}
      </div>
    </>
  );
}
