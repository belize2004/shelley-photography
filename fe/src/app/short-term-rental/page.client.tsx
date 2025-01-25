"use client";

import { BlogCard } from "@/components/blog/card";
import { sh } from "@/lib/api/categories";

import { IMAGE_BASE_URL } from "@/lib/const";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Masonry from "react-masonry-css";

interface PageClientProps {
  isMobile: boolean;
}

export default function PageClient({ isMobile }: PageClientProps) {
  const { data } = useSuspenseQuery(sh);
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


      <div className="textblockpricing [&_a]:text-blue-500 [&_a]:underline">
        <h1 className="text-2xl">
          AirBNB Short Term Rental Photography Pricing
        </h1>
        <strong>Transform Your Airbnb and Vacation Rental Listings with Professional Photography<br /></strong>
        <br />
        Professional photography isn’t just a detail—it’s a game-changer for short-term rental success. Here’s why it makes all the difference:
        <strong><br /><br />Attract More Guests<br /></strong>
        Listings with professional photos receive 118% more online views. Stunning visuals captivate potential guests, leading to more bookings and increased revenue.
        <strong><br /><br />Maximize Your Earnings </strong>
        Properties with high-quality photos often command higher nightly rates, helping you achieve up to 47% more revenue per square foot. Guests are willing to pay more for spaces that look inviting and well-maintained.
        <strong><br /><br />Sell the Experience </strong>
        Professional photography doesn’t just showcase your property—it tells a story. From cozy bedrooms to sunlit patios, every shot invites guests to imagine themselves enjoying your space.
        <strong><br /><br />Stand Out in a Competitive Market<br /></strong>
        In a crowded rental market, great photos set your listing apart. Whether you’re hosting a beachfront escape or a charming city retreat, professional imagery ensures your property shines.
        <strong><br /><br />Highlight Every Detail<br /></strong>
        From perfectly framed interiors to the warm glow of natural light, professional photographers use angles, lighting, and composition to showcase the best features of your rental.
        <strong><br /><br />Build Trust with Guests<br /></strong>
        Crisp, vibrant, and polished photos give guests confidence that what they see is exactly what they’ll get. High-quality images convey professionalism and reliability.
        <strong><br /><br />Effortless and Hassle-Free<br /></strong>
        Quick setups, efficient shoots, and a fast turnaround mean you can start attracting guests in no time. Let us handle the photography while you focus on delivering a great guest experience.
        <strong><br /><br />Why Professional Photography?<br /></strong>
        Because your Airbnb or vacation rental deserves to stand out. Exceptional photos elevate your listing, attract more guests, and maximize your income.
        <strong><br /><br />Book Your Session Today<br /></strong>
        Let’s turn your rental into the one everyone wants to book.
        <strong><br /><br />Same-day appointments. 24-48 hour turnaround. High-quality images that move properties.<br /><br />1 to 15 images $299<br /></strong>
        <a href="https://shelleybressmanphotography.pixieset.com/booking/real-estate-photos-1-15-images" target="_blank" className="link-3" rel="noopener noreferrer">
          <strong>BOOK NOW</strong>
        </a>
        <strong><br /><br />16 to 25 images $349<br /></strong>
        <a href="https://shelleybressmanphotography.pixieset.com/booking/real-estate-photos-16-25-images" target="_blank" className="link-3" rel="noopener noreferrer">
          <strong>BOOK NOW</strong>
        </a>
        <strong><br /><br />26 to 35 images $399<br /></strong>
        <a href="https://shelleybressmanphotography.pixieset.com/booking/real-estate-photography-16-25-images" target="_blank" className="link-2" rel="noopener noreferrer">
          <strong>BOOK NOW</strong>
        </a>
        <br /><br />
      </div>

      <div className="flex flex-col p-8 gap-8">
        {data.data[0].blogs.map((b) => (
          <BlogCard key={b.id} blogPost={b} />
        ))}
      </div>
    </>
  );
}
