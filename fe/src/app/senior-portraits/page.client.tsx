"use client";

import { BlogCard } from "@/components/blog/card";
import { senior } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Masonry from "react-masonry-css";

interface PageClientProps {
  isMobile: boolean;
}

export default function PageClient({ isMobile }: PageClientProps) {
  const { data } = useSuspenseQuery(senior);
  const breakpointColumnsObj = {
    default: 3,
    1440: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      {isMobile ? (
        <Masonry
          breakpointCols={{
            default: 2,
            500: 2,
          }}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {/* <Image
      src="/ratings.webp"
      width={2000}
      height={2000}
      alt="Ratings"
      className="my-8 w-full"
    /> */}

          {data.data[0]?.photos?.map((image, idx) => (
            <div key={image.id} className="mb-4">
              <Image
                src={IMAGE_BASE_URL + image.url || "/placeholder.svg"}
                width={image.width || 1200}
                height={image.height || 120}
                alt="Image"
                className="rounded-xl w-full h-auto" // Made image responsive
              />
            </div>
          ))}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {/* <Image
            src="/ratings.webp"
            width={2000}
            height={2000}
            alt="Ratings"
            className="my-8 w-full"
          /> */}

          {data.data[0]?.photos?.map((image, idx) => (
            <div key={image.id} className="mb-4">
              <Image
                src={IMAGE_BASE_URL + image.url || "/placeholder.svg"}
                width={image.width || 1200}
                height={image.height || 120}
                alt="Image"
                className="rounded-xl w-full h-auto" // Made image responsive
              />
            </div>
          ))}
        </Masonry>
      )}
      <h1 className="text-2xl">
        Senior Portrait Pricing
      </h1>
      <div className="paragraphpricing prose  [&_a]:text-blue-500 [&_a]:underline">
        <strong>
          Senior Portrait Session Pricing Shelley Bressman Photography Pensacola Florida
          <br />
        </strong>
        Capture your senior year memories with professional, timeless portraits that showcase your unique style.
        <br /><br />
        <strong>Senior Session</strong>
        <br />
        <strong>Time:</strong> 1 Hour
        <br />
        <strong>Images:</strong> 20 professionally edited images
        <br />
        <strong>Price:</strong> $350
        <br />
        <strong>Details:</strong>
        <br />
        Up to 2 locations
        <br />
        1 clothing change
        <br />
        Option to purchase additional images or the whole gallery after delivery
        <br /><br />
        <a href="https://shelleybressmanphotography.pixieset.com/booking/senior-portraits-prom-photos" target="_blank" rel="noopener noreferrer">
          <strong>Book Your Session Now</strong>
        </a>
        <br /><br />
        <strong>What’s Included</strong>
        <br />
        • A personalized photography experience tailored to reflect your personality and style.
        <br />
        • High-quality, professionally edited images perfect for sharing and printing.
        <br />
        Ready to celebrate your senior year with stunning portraits?
        <br />
        Contact Shelley Bressman Photography to schedule your session today!
      </div>
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </>
  );
}
