"use client";
import { notFound } from "next/navigation";

import { PageClient } from "./page.client";
import { getBlogPosts } from "@/lib/api/blog";
import { useQuery } from "react-query";

interface Props {
  params: Promise<{ id: number }>;
}

export default function Page({ params }: Props) {
  const { data } = useQuery({
    queryKey: "posts",
    queryFn: getBlogPosts,
  });

  const id = params.then((p) => p.id);

  const post = data?.data
    .map((category) => category)
    .flat()
    .find(async (post) => post.id === (await id));

  if (!post) {
    notFound();
  }

  return (
    <div className="">
      <PageClient
        post={{
          id: post.id,
          title: post.title,
          desc: post.desc,
          content: post.content,
          cover: post.cover!,
        }}
      />
    </div>
  );
}
