"use client";

import { BlogCard } from "@/components/blog/card";
import { family } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";
import { RenderContent } from "@/lib/utils";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Masonry from "react-masonry-css";

interface PageClientProps {
  isMobile: boolean;
}

export default function PageClient({ isMobile }: PageClientProps) {
  const { data } = useSuspenseQuery(family);
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
        // <div className=" flex flex-col gap-4">
        //   {/* <Image
        //     src="/ratings.webp"
        //     width={2000}
        //     height={2000}
        //     alt="Ratings"
        //     className="my-8 w-full"
        //   /> */}
        //   {data.data[0].photos
        //     // ?.sort((a, b) => a.order - b.order)
        //     .map((image, idx) => (
        //       <div key={image.id} className="mb-4">
        //         {/* Changed margin to bottom only */}
        //         <Image
        //           src={IMAGE_BASE_URL + image.url || "/placeholder.svg"}
        //           width={image.width || 1200}
        //           height={image.height || 120}
        //           alt="Image"
        //           className="rounded-xl w-full h-auto" // Made image responsive
        //         />
        //       </div>
        //     ))}
        // </div>
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

          {data.data[0].photos.map((image, idx) => (
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

          {data.data[0].photos.map((image, idx) => (
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
      <Image
        src="/ratings.webp"
        width={2000}
        height={2000}
        alt="Ratings"
        className="my-8 w-full"
      />
      <div className="flex flex-col p-8 gap-8">
        <PhotographySessions />
      </div>{" "}
      {data?.data
        ?.filter((c) => c.name === "family-portrait")
        .map((category) =>
          category.blogs.map((b) => <BlogCard key={b.id} blogPost={b} />)
        )}
    </>
  );
}

import Link from 'next/link';

function PhotographySessions() {
  const sessions = [
    {
      title: '30 Minute Morning Beach Family Session',
      price: '$400 (Normally $600)',
      duration: '30 minutes',
      people: 'Up to 6 People',
      images: '20 downloadable images',
      extraImages: '$30 for each additional image or $200 for the entire gallery',
      link: 'https://shelleybressmanphotography.pixieset.com/booking/morning-family-session',
    },
    {
      title: '30 Minute Hidden Oaks Farm Family Session',
      price: '$400 (Normally $600)',
      duration: '30 minutes',
      people: 'Up to 6 People',
      images: '20 downloadable images',
      extraImages: '$30 for each additional image or $200 for the entire gallery',
      link: 'https://shelleybressmanphotography.pixieset.com/booking/morning-or-evening-hidden-oaks-farm-family-session',
    },
    {
      title: '45 to 60 Minute Family Session',
      price: '$600 (Normally $800)',
      duration: '45 to 60 minutes',
      people: 'Up to 10 People',
      images: '30 downloadable images',
      extraImages: '$30 for each additional image or $300 for the entire gallery',
      printCredit: '$100 print credit (printed by us)',
      link: 'https://shelleybressmanphotography.pixieset.com/booking/family-session',
    },
    {
      title: '60 to 90 Minute Extended Family Session',
      price: '$800 (Normally $1000)',
      duration: '60 to 90 minutes',
      people: '10 to 30 People',
      images: '40 downloadable images',
      extraImages: '$30 for each additional image or $300 for the entire gallery',
      printCredit: '$100 print credit (printed by us)',
      link: 'https://shelleybressmanphotography.pixieset.com/booking/extended-family-session',
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">What to Expect for Your Session</h1>
      <p className="mb-4">
        You can expect 2 photographers. Blaine and I will come to your session together. This allows us to focus on two different aspects of your session.
        I am able to concentrate on posed photos while Blaine is able to watch your family interacting with each other and concentrate on candid moments.
        We also use different areas of the beach such as sitting near the dunes, standing at the water, and using walkways or stairs.
      </p>
      <p className="mb-4">
        We try to keep your session as relaxed and comfortable as we possibly can but also add some fun.
      </p>
      <p className="mb-4">
        We only book one sunrise session and one sunset session per day so our sole focus is on your family and not trying to rush through the session.
      </p>
      <h2 className="text-xl font-bold mt-6">Print Credit</h2>
      <p className="mb-4">
        We can print on photo paper or canvas in our office. We use high-quality photo paper. Canvases are gallery-wrapped and ready to hang.
        You choose your pictures, media, and size, then we ship it to you within 3-4 weeks of ordering.
      </p>
      <h2 className="text-xl font-bold mt-6">Special Pricing</h2>
      <p className="mb-4">$200 off each package</p>
      {sessions.map((session, index) => (
        <div key={index} className="border p-4 mb-4 rounded-lg shadow">
          <h3 className="text-lg font-bold">{session.title}</h3>
          <p>{session.price}</p>
          <p>{session.duration}</p>
          <p>{session.people}</p>
          <p>{session.images}</p>
          <p>{session.extraImages}</p>
          {session.printCredit && <p>{session.printCredit}</p>}
          <Link href={session.link} className="text-blue-600 underline mt-2 inline-block">Book Now</Link>
        </div>
      ))}
    </div>
  );
}
