import { Metadata, Route } from "next";
import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Estatística | ${slug}`,
    description: "",
    icons: {
      icon: `\\${slug}.svg`,
    },
  };
}

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
  //metadata.title = slug;

  return <>{children}</>;
}
