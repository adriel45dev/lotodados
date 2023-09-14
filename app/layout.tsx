import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import QueryClient from "./components/QueryClient";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

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
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2816167373541661"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <QueryClient>
          <Navbar />
          {children}
          <Footer />
        </QueryClient>
        <Script src="../node_modules/flowbite/dist/flowbite.min.js"></Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2816167373541661"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
