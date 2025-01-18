"use client";

import Image from "next/image";

export default function PressPage() {
  return (
    <main className=" space-y-4 items-center justify-center  p-8 h-screen overflow-y-scroll w-fit mx-auto">
      <h1 className="text-4xl font-bold text-center">In The Press</h1>
      <p className="text-lg  text-center">
        In April of 2023 the Wall Street Journal asked me to do a photo shoot in
        Orange Beach Alabama.It included photos the beach as well as there home
        on Ono Island.It was published in the Global Luxury Mansion section
      </p>
      <Image
        src="/67198b763e6a2b15e95f325d_Image 10-23-24 at 6.48 PM.webp"
        width={500}
        height={500}
        alt="In The Press1"
        className="w-fit mx-auto"
      />
      <h1 className="text-4xl font-bold text-center">In the Press</h1>
      <p className="text-lg text-center">
        October 2023 Dove Christian Music Awards
      </p>
      <Image
        src="/67198ad94744380bb51baaaa_662a9ad4ab12f38b69110e1d_DoveLogo53.webp"
        width={500}
        height={500}
        alt="In The Press2"
        className="w-fit mx-auto"
      />
      <Image
        src="/67198aee410377c6a63ba508_662278fa5939720c861caa81_live events-min.webp"
        width={500}
        height={500}
        alt="Image"
        className="w-fit mx-auto"
      />
    </main>
  );
}
