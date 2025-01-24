"use client";
import { useState } from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { SidebarNav } from "./side-bar-item";
import { MenuIcon, XIcon } from "lucide-react";
import "@fontsource-variable/playwrite-nz";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" flex items-center py-8 px-4 bg-white w-full lg:hidden gap-6 flex-col">
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-col">
          {/* <Image
            src="/logo1.webp"
            width={150}
            height={100}
            alt="Logo"
            priority
          /> */}
        </div>
        <div
          className="md:hidden text-black"
          onClick={toggleMenu}
          // variant="ghost"
        >
          {isOpen ? (
            <XIcon className="w-8 h-8" />
          ) : (
            <MenuIcon className="w-8 h-8" />
          )}
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        {/* <Image src="/logo1.webp" width={358} height={77.19} alt="Logo" /> */}
        <h1 className="text-sm font-semibold text-balance mx-auto w-fit text-center text-black flex flex-col gap-1">
          <span
            style={{
              fontFamily: "Playwrite NZ Variable",
            }}
            className="text-xl"
          >
            Shelley and Blaine Bressman
          </span>
          <span>Photography and Website Design</span>
        </h1>
        <p className="text-[#797878] text-base text-center md:text-left w-full z-10">
          Based in Pensacola Florida <br /> Published in the Wall Street Journal
          and Contemporary <br /> Christian Music Magazine
        </p>
        <Button
          className="text-lg bg-[#3898ec] font-bold w-fit mt-4 md:mt-0 mx-auto z-10"
          asChild
        >
          <Link href="https://m.me/shelleybressmanphotography">
            Chat with me
          </Link>
        </Button>
        <Image
          src="/mobile-ratings.webp"
          width={800}
          height={800}
          alt="Testmonial"
          className="w-full mt-4 md:mt-0"
          priority
        />
      </div>
      <div
        className={`${
          isOpen ? "flex h-screen" : "hidden"
        } absolute top-20 left-0 w-full flex-col items-center md:flex md:flex-row md:items-center gap-4 bg-white transition-opacity duration-300 ease-in-out z-20`}
      >
        {/* <Separator className="h-px bg-[#c7c7c7] w-full md:w-1/2" /> */}

        <Separator className="h-px bg-[#c7c7c7] w-full md:w-1/2 mb-8" />
        <SidebarNav
          items={[
            { name: "Home", href: "/" },
            { name: "Interior design", href: "/interior-design" },
            { name: "Real estate", href: "/real-estate" },
            { name: "Short term rental", href: "/short-term-rental" },
            { name: "Family portrait", href: "/family-portrait" },
            { name: "Engagement Sessions", href: "/engagement-sessions" },
            { name: "Senior Portraits", href: "/senior-portraits" },
            { name: "Micro Wedding", href: "/micro-wedding" },
            // { name: "WALL ART BY SHELLEY", href: "/wall-art" },
            { name: "Website Design Service", href: "/website-design-service" },
            { name: "Contact", href: "/contact" },
            { name: "About", href: "/about" },
            { name: "In the press", href: "/press" },
            { name: "Blog", href: "/blog" },
          ]}
        />
        <Separator className="h-px bg-[#c7c7c7] w-full md:w-1/2" />

        <Image
          src="/testmonial.webp"
          width={300}
          height={200}
          alt="Testmonial"
          className="w-60 mt-4 md:mt-0"
        />
        <Image
          src="/testmonial2.webp"
          width={300}
          height={200}
          alt="Testmonial"
          className="w-60 mt-4 md:mt-0"
        />
      </div>
    </nav>
  );
}
