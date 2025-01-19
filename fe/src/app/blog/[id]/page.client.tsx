/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
"use client";
import { IMAGE_BASE_URL } from "@/lib/const";
import Image from "next/image";
import { JSX } from "react";

interface ContentNode {
  type: string;
  level?: number;
  children?: ContentNode[];
  text?: string;
}

export function PageClient({
  post,
}: {
  post: {
    id: string | number;
    title: string;
    desc: string;
    content: ContentNode[];
    cover: {
      url: string;
      width: number;
      height: number;
      alternativeText: string;
    };
  };
}) {
  return (
    <article className=" mx-auto px-4 py-8 h-full overflow-x-hidden">
      <header className="mb-8 space-y-2">
        {/* <Badge variant="secondary" className="mb-2 text-lg border-zinc-400">
          {post.category.name}
        </Badge> */}
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-4">
          {/* Published on {format(new Date(post.publishedAt), "MMMM d, yyyy")} */}
        </p>
      </header>

      <Image
        src={IMAGE_BASE_URL + post.cover?.url}
        width={post.cover?.width}
        height={post.cover?.height}
        alt={post.cover?.alternativeText || ""}
        className="w-full h-auto rounded-lg mb-8"
        priority
      />

      <div className="prose prose-lg  mb-8 max-w-sm ">
        <p>{post.desc}</p>
      </div>

      <div className="prose prose-lg w-full h-full m-20">
        <RenderContent content={post.content} />
      </div>
    </article>
  );
}

function RenderContent({ content }: { content: ContentNode[] }) {
  return (
    <div className="max-w-sm">
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
              <div className="`!w-20" key={index}>
                <RenderContent content={node.children || []} />
              </div>
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
            //@ts-expect-error
            if (node.bold) {
              return <strong key={index}>{node.text}</strong>;
            }
            return <span key={index}>{node.text}</span>;
          case "image":
            return (
              <img
                key={index}
                //@ts-expect-error
                src={node.image.url || ""}
                //@ts-expect-error
                alt={node.image.alt || "Image"}
                //@ts-expect-error
                title={node.image.title || ""}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
