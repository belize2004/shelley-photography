import PageClient from "./page.client";
import { BlogCard } from "@/components/blog/card";
import { getHome } from "@/lib/api/home";

export default async function Home() {
  const data = await getHome();

  return (
    <div className="p-4">
      <PageClient
        uniquePhotos={data.data[0].gallery_item
          .sort((a, b) => a.order - b.order)
          .map((item) => item.image)}
      />
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </div>
  );
}
