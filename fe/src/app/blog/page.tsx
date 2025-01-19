import { BlogCard } from "@/components/blog/card";
import { getBlogPosts } from "@/lib/api/blog";

export default async function Page() {
  const data = await getBlogPosts();
  return (
    <div className="flex flex-col p-8 gap-8">
      {data.data.map((blog) => (
        <BlogCard key={blog.id} blogPost={blog} />
      ))}
    </div>
  );
}
