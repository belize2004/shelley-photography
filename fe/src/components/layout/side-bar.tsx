import Image from "next/image";
import { Separator } from "../ui/separator";

import { Button } from "../ui/button";
import Link from "next/link";
import { SidebarNav } from "./side-bar-item";
export function Sidebar() {
  return (
    <main className="hidden lg:flex flex-col py-8 px-4 bg-white h-full w-96 gap-6">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Image src="/logo1.webp" width={300} height={200} alt="Logo" priority />
        <h1 className="text-sm font-semibold text-balance mx-auto w-fit text-center text-black">
          Shelley and Blaine Bressman Photography and Website Design
        </h1>
      </div>
      <Separator className="h-px bg-[#c7c7c7] w-1/2" />
      <p className="text-[#797878] text-base">
        Based in Pensacola Florida <br /> Published in the Wall Street <br />
        Journal and Contemporary <br /> Christian Music Magazine
      </p>
      <Separator className="h-px bg-[#c7c7c7] w-1/2" />
      <SidebarNav
        items={[
          { name: "Home", href: "/" },
          { name: "Interior design", href: "/interior-design" },
          { name: "real estate", href: "/real-estate" },
          { name: "short term rental", href: "/short-term-rental" },
          { name: "family portrait", href: "/family-portrait" },
          { name: "Engagement Sessions", href: "/engagement-sessions" },
          { name: "Senior Portraits", href: "/senior-portraits" },
          { name: "Micro Wedding", href: "/micro-wedding" },
          { name: "WALL ART BY SHELLEY", href: "/WALL-ART-BY-SHELLEY" },
          { name: "Website Design Service", href: "/website-design-service" },
          { name: "contact", href: "/contact" },
          { name: "about", href: "/about" },
          { name: "in the press", href: "/press" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <Separator className="h-px bg-[#c7c7c7] w-1/2" />

      <Button className="text-lg bg-[#3898ec] font-bold w-fit" asChild>
        <Link href="https://m.me/shelleybressmanphotography">Chat with me</Link>
      </Button>
      <Image
        src="/testmonial.webp"
        width={300}
        height={200}
        alt="Testmonial"
        className="w-60"
      />

      <Image
        src="/testmonial2.webp"
        width={300}
        height={200}
        alt="Testmonial"
        className="w-60"
      />
    </main>
  );
}
