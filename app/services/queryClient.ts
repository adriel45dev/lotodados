import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 24 * (60 * 60 * 1000), // 24horas
      cacheTime: 24 * (65 * 60 * 1000), // 24horas
    },
  },
});
