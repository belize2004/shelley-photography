import { BlogCard } from "@/components/blog/card";
import { getBlogPosts } from "@/lib/api/blog";

export default async function Page() {
  const data = await getBlogPosts();
  return (
    <div className="flex flex-col p-8 gap-8">
      {data.data.map((category) =>
        category.data.posts.map((image) => (
          <BlogCard key={image.id} blogPost={image} />
        ))
      )}
    </div>
  );
}
