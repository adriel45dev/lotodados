// "use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import QueryClient from "./components/QueryClient";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

// import { Tilt_Warp } from "next/font/google";

// const tiltWarp = Tilt_Warp({
//   subsets: ["latin"],
//   variable: "--custom-tilt-warp",
//   weight: "400",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Lotodados - Análise de dados",
  description: "A estátisticas estão no lado da sorte.",
  icons: {
    icon: "/caixa.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClient>
          <Navbar />
          {children}
          <Footer />
        </QueryClient>
        <Script src="../node_modules/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
