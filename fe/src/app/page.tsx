import { getPhotos } from "@/lib/api/categories";
import type { Photo } from "@/lib/types";
import PageClient from "./page.client";

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
    </div>
  );
}
