/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5000,
            //@ts-expect-error
            cacheTime: 0,
            refetchOnWindowFocus: true,
          },
        },
      })
  );

  return (
    <>
      <GoogleTagManager gtmId="G-8J64RKE9D8" />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};
