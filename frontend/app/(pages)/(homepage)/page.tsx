import { intro as Intro } from "@/components/intro";
import { body as Body } from "./body";
import { shopByAge as ShopByAge } from "./shopByAge";
import type { Metadata } from "next";
import data from "@/data/homepage.json";
const content = data.Head.english;

export const metadata: Metadata = {
  title: content.title,
  description: content.discription,
  keywords: content.keywords,
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: content.title,
    description: content.discription,
    type: "website",
    url: content.url,
    images: ["https://www.intexjo.com/Assets/images/www.intexjo.com.png"],
  },
  twitter: {
    card: "summary",
    site: "@intex-jo",
    title: content.title,
    description: content.discription,
  },
  icons: {
    icon: "/icon.jpg",
  },
  robots: "index, follow",
};

export default function Home({
  searchParams,
}: {
  searchParams: { lang: string };
}) {
  return (
    <main className="flex min-h-screen flex-col ">
      <Intro />
      <ShopByAge lang={searchParams.lang} />
      <Body lang={searchParams.lang} />
    </main>
  );
}
