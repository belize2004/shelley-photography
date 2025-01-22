/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";

import { getBlog } from "@/lib/api/blog";
import { IMAGE_BASE_URL } from "@/lib/const";
import { JSX } from "react";
import { Root } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ id: string }>;
}

interface ContentNode {
  bold: any;
  url: string;
  image: any;
  type: string;
  level?: number;
  children?: ContentNode[];
  text?: string;
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

      <Image
        src={IMAGE_BASE_URL + postData.cover.url}
        width={postData.cover.width}
        height={postData.cover.height}
        alt={postData.cover.alternativeText || ""}
        className="w-full h-auto rounded-lg mb-8"
        priority
      />

      <div className="prose prose-lg max-w-none mb-8">
        <p>{postData.desc}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <RenderContent content={postData.content as ContentNode[]} />
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

export function RenderContent({ content }: { content: ContentNode[] }) {
  return (
    <>
      {content.map((node, index) => {
        switch (node.type) {
          case "heading":
            const HeadingTag = `h${
              node.level || 1
            }` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag key={index}>
                <RenderContent content={node.children || []} />
              </HeadingTag>
            );
          case "paragraph":
            return (
              <p key={index}>
                <RenderContent content={node.children || []} />
              </p>
            );
          case "bullet_list":
            return (
              <ul key={index}>
                {node.children?.map((item, idx) => (
                  <li key={idx}>
                    <RenderContent content={item.children || []} />
                  </li>
                ))}
              </ul>
            );
          case "ordered_list":
            return (
              <ol key={index}>
                {node.children?.map((item, idx) => (
                  <li key={idx}>
                    <RenderContent content={item.children || []} />
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={index}>
                <RenderContent content={node.children || []} />
              </blockquote>
            );
          case "text":
            if (node.bold) {
              return <strong key={index}>{node.text}</strong>;
            }
            return <span key={index}>{node.text}</span>;
          case "link":
            return (
              <Button asChild key={index} className="bg-blue-600">
                <Link href={node.url || "#"} className="no-underline">
                  <RenderContent content={node.children || []} />
                </Link>
              </Button>
            );
          case "image":
            return (
              <img
                key={index}
                src={node.image?.url || ""}
                alt={node.image?.alt || "Image"}
                title={node.image?.title || ""}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
