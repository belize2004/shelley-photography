"use client";

import { BlogCard } from "@/components/blog/card";
import { engage } from "@/lib/api/categories";
import { IMAGE_BASE_URL } from "@/lib/const";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Masonry from "react-masonry-css";

interface PageClientProps {
  isMobile: boolean;
}

export default function PageClient({ isMobile }: PageClientProps) {
  const { data } = useSuspenseQuery(engage);
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
              {" "}
              {/* Changed margin to bottom only */}
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
        ENGAGEMENT SESSION PRICING
      </h1>
      <p className="paragraphpricing prose [&_a]:text-blue-500 [&_a]:underline">
        <strong>
          What to expect for your session: You can expect 2 photographers. Blaine and I will come to your session together. We use different areas of the beach such as sitting near the dunes, standing at the water, and also using walkways or stairs. We try to keep your session as relaxed and comfortable as we possibly can but also add some fun.
          <br /><br />
          We only book one sunrise session and one sunset session per day, so our sole focus would be on you and not trying to rush through the session.
          <br /><br />
          Print Credit: We can print on photo paper or canvas in our office. We use high-quality photo paper. Canvases are gallery-wrapped and ready to hang. You choose your pictures, media, and size, then we ship it to you within 3-4 weeks of ordering.
          <br /><br />
          Morning Engagement Session
          <br />
          $400 30 minute
          <br />
          2 People
          <br />
          20 downloadable images
          <br />
          $30 for each additional image or $200 for the entire gallery
          <br /><br />
        </strong>
        <a href="https://shelleybressmanphotography.pixieset.com/booking/morning-engagement-session" target="_blank" className="link-3" rel="noopener noreferrer">
          <strong>BOOK NOW</strong>
        </a>
        <strong>
          <br /><br />
          $600 45 to 60 minute
          <br />
          2 People
          <br />
          30 downloadable images
          <br />
          $30 for each additional image or $300 for the entire gallery
          <br />
          $100 print credit (printed by us)
          <br /><br />
        </strong>
        <a href="https://shelleybressmanphotography.pixieset.com/booking/Engagement-Session" target="_blank" className="link-3" rel="noopener noreferrer">
          <strong>BOOK NOW</strong>
        </a>
        <strong>
          <br /><br />
          We travel to you! If you have beach access from where you are staying, we will meet you there and walk right out to the beach for your session. No beach access, no problem. We have many beautiful options for meeting close to where you will be staying. Alternative places to meet: For Perdido Key, Johnson&apos;s Beach is a beautiful location. FYI, this lovely Florida State Park has a $20-day pass fee. It is well worth the investment! Shell Beach is a public beach location between Perdido Key and Orange Beach. FYI, it is a paid parking lot. Opal Beach is a gorgeous stretch of public beach located between Pensacola Beach and Navarre Beach. Fort Pickens is a State Park located off Pensacola Beach. Since this is a State Park, there is a $20-day pass fee. As well as beautiful beach areas, the Fort itself is a great backdrop for pictures.
          <br /><br />
          Cancellation Fee: A 50% retainer is due at the time of booking. There will be a $300 cancellation fee deducted from your refund. If weather is an issue, all efforts will be made to reschedule your session. If an alternative time cannot be scheduled, you will receive a full refund.
        </strong>
      </p>
      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </>
  );
}
