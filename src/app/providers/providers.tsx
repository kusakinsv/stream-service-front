import type { PropsWithChildren } from "react";

import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "@/app/theme/theme.ts";

export const Providers = ({ children }: PropsWithChildren) => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 3600000,
        staleTime: Infinity,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
      {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};