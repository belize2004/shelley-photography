"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { home } from "@/lib/api/categories";
import { BlogCard } from "./card";

export function BlogList() {
  const { data } = useSuspenseQuery(home);
  const blogs = data.data[0].blogs || [];

  if (blogs.length === 0) return null;

  return (
    <div className="flex flex-col p-4 md:p-8 gap-8 max-w-5xl mx-auto">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blogPost={blog} />
      ))}
    </div>
  );
}