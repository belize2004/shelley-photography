"use client";

import dynamic from "next/dynamic";

const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then((m) => m.GoogleTagManager),
  {}
);
export function GoogleTag() {
  return <GoogleTagManager gtmId="G-8J64RKE9D8" />;
}
