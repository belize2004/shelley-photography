/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { clsx, type ClassValue } from "clsx";
import Link from "next/link";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
