import Image from "next/image";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design Pensacola Florida",
  description:
    "Elevate your online presence with a luxury architecture and interior design website design company based in Pensacola, Florida. Specializing in bespoke, elegant designs tailored to showcase your unique vision.",
};

export default async function Page() {
  return (
    <div className="flex flex-col p-8 gap-8 *:w-fit *:mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Website Design Services Let us tell your story
      </h1>
      <p>
        We offer professional website design services tailored to elevate your
        brand, enhance user experience and elevate your brand.
      </p>
      <p>
        A professionally designed website is essential for any business seeking
        to make a strong digital impression. We specialize in creating visually
        stunning, user-friendly websites tailored to your unique brand. ‍
      </p>
      <Button asChild className="w-fit py-6 text-xl mx-auto">
        <Link href="/contact">Get a quote</Link>
      </Button>
      <p className="text-lg text-center">
        We create clean, minimalist website designs for realtors, seamlessly
        integrating IDX data feeds to showcase property listings with style and
        functionality.
      </p>
      <Image
        src="/straight.webp"
        alt="Real estate website design"
        height={800}
        width={800}
        className="w-full"
      />
      <p className="text-center">
        For photographers, we craft galleries that highlight your artistry with
        high-resolution visuals and seamless navigation.
      </p>
      <p className="text-center">
        For interior designers, we design layouts that reflect your aesthetic,
        integrating project showcases, client testimonials, and interactive
        features.
      </p>
      <Image
        src="/old.webp"
        alt="Real estate website design"
        height={800}
        width={800}
        className="w-full"
      />
      <p className="text-center">
        Whether you’re an established business looking to enhance your online
        presence or a photographer or interior designer aiming to showcase your
        portfolio, we deliver websites that captivate and convert.
      </p>
      <p className="text-center">
        Our websites are mobile-friendly, SEO-optimized, and customized to help
        you attract and engage your target audience. Let us transform your
        vision into a website that not only represents your business but also
        drives success.
      </p>
    </div>
  );
}
