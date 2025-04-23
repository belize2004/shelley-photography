import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { getBlog } from "@/lib/api/blog";
import { IMAGE_BASE_URL } from "@/lib/const";
import { Root } from "@/lib/types";
import { RenderContent } from "@/lib/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const post = await getBlog((await params).id);

  if (!post || !post.data) {
    notFound();
  }

  const postData: Root["data"][0]["blogs"][0] = post.data;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 space-y-2">
        {/* <Badge variant="secondary" className="mb-2 text-lg border-zinc-400">
          {postData.category.name}
        </Badge> */}
        <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
        <p className="text-muted-foreground mb-4">
          Published on {format(new Date(postData.publishedAt), "MMMM d, yyyy")}
        </p>
      </header>
      {
        postData.cover && (
          <div className="mb-8">
            <Image
              src={IMAGE_BASE_URL + postData.cover.url}
              width={postData.cover.width}
              height={postData.cover.height}
              alt={postData.cover.alternativeText || "Cover image"}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )
      }

      <div className="prose prose-lg max-w-none mb-8">
        <p>{postData.desc}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <RenderContent content={postData.content as any} />
      </div>

      {/* {postData.gallery && postData.gallery.length > 0 && (
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {postData.gallery.map((image, index) => (
              <Image
                key={index}
                src={IMAGE_BASE_URL + image.url}
                width={image.width}
                height={image.height}
                alt={image.alternativeText || `Gallery image ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        </section>
      )} */}
    </article>
  );
}
