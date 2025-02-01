"use client";

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";



if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
  })
}
export function CSPostHogProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

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
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </>
  );
};
