"use client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";

export default function QueryClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
