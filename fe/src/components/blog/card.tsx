import { IMAGE_BASE_URL } from "@/lib/const";
import { Root } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
export function BlogCard({
  blogPost,
}: {
  blogPost: Root["data"][0]["data"]["posts"][0];
}) {
  console.log(blogPost);
  return (
    <div className="bg-white flex flex-col rounded-xl gap-4 pb-4">
      {blogPost.cover && (
        <Image
          src={IMAGE_BASE_URL + blogPost.cover?.url}
          width={300}
          height={300}
          alt="Image"
          className=" w-full h-60 object-cover rounded-t-xl"
        />
      )}
      <h1 className="px-4 text-2xl font-bold">{blogPost.title}</h1>
      <p className="px-4 line-clamp-2 text-zinc-500">{blogPost.desc}</p>
      <Button asChild className="w-fit" variant={"link"}>
        <Link href={`/blog/${blogPost.id}`}>Read more</Link>
      </Button>
    </div>
  );
}
