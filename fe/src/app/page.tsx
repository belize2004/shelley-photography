import { getPhotos } from "@/lib/api/categories";
import type { Photo } from "@/lib/types";
import PageClient from "./page.client";
import { BlogCard } from "@/components/blog/card";

export default async function Home() {
  const data = await getPhotos();

  const photoIds = new Set();
  const uniquePhotos: Photo[] = [];

  data?.data.forEach((category) => {
    category.photos?.forEach((photo) => {
      if (!photoIds.has(photo.documentId)) {
        photoIds.add(photo.documentId);
        uniquePhotos.push(photo);
      }
    });
  });

  return (
    <div className="p-4">
      <PageClient uniquePhotos={uniquePhotos} />
      <div className="flex flex-col p-8 gap-8">
        {data?.data
          // .filter((c) => c.name === "family portrait")
          .map((category) =>
            category.blogs.map((b) => <BlogCard key={b.id} blogPost={b} />)
          )}
      </div>
    </div>
  );
}
