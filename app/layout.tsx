"use client";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";

export const metadata: Metadata = {
  title: "Loto Dados",
  description: "A estátisticas estão no lado da sorte.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
