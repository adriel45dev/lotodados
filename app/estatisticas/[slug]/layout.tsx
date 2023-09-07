import { Metadata, Route } from "next";

export const metadata: Metadata = {
  title: "Estátisticas",
  description: "A estátisticas estão no lado da sorte.",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

export default function RootLayout({
  params: { slug },
  children,
}: RootLayoutProps) {
  metadata.title = slug;

  return <>{children}</>;
}
