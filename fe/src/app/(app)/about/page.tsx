import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col p-8 gap-8  h-screen overflow-y-scroll w-fit mx-auto">
      <Image
        src="/us.webp"
        alt="Us"
        height={500}
        width={500}
        className="rounded-xl"
      />
      <h1 className="text-3xl font-bold">About us</h1>
      <p className="text-xl font-semibold">
        Capturing the Beauty of the World Through Photography
      </p>
      <p className="text-lg ">
        My name is Shelley. In 2021 my church was in need of a photographer.
        After a month of using the equipment that I had for 20 years I decided
        it was time to invest in newer, better equipment. In making that
        decision to purchase new equipment
      </p>
      <p className="text-lg ">
        I also decided it was time to start doing photography professionally. I
        have not looked back. I really enjoy what I do by capturing special
        family moments. ‍‍In early 2023 Wall Street Journal asked me to do a
        photo shoot of a retired couple in Orange Beach which included their
        home on Ono Island as well as some photos on the Beach which they
        published in the Global Luxury Mansion section.
      </p>
      <p className="text-lg ">
        My husband and I enjoy working together. The first few years I was
        behind the camera and him at the computer doing the editing. After a few
        years I grew my business to the point I need help. Blaine decided to
        start coming with me to photo sessions. We now shoot together. Me
        working on poses while he watches for those special candid moments.
      </p>
      <p className="text-lg">
        Together we are Shelley and Blaine Bressman Photography.
      </p>
      <p className="text-lg">
        Shelley and Blaine, as a husband and wife photography team. We bring a
        unique blend of perspectives and shared passion to capturing your most
        meaningful moments. Our combined talents ensure that every detail and
        emotion is beautifully documented, creating timeless memories that
        reflect the essence of your special day.
      </p>
      <Button
        asChild
        variant="default"
        size="lg"
        className="text-xl py-8 w-fit"
      >
        <Link href="/contact">Get in touch</Link>
      </Button>
    </div>
  );
}
