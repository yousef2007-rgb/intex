import { Product } from "@/types/productsTypes";
import axios from "axios";
import React from "react";
import { productCards as ProductCard } from "@/components/product/productCards";
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

const getProducts = async (ageRange: string) => {
  const products = await axios.get(
    `${process.env.URL}/api/products/ageRange/${ageRange}`
  );

  return products.data;
};

const page = async ({
  params,
  searchParams,
}: {
  params: { ageRange: string };
  searchParams: { lang: string };
}) => {
  const products: Product[] = await getProducts(params.ageRange);

  return (
    <main
      className="flex flex-1 flex-col"
      style={{ fontFamily: searchParams.lang != "ar" ? "Poppins" : "Cairo" }}
    >
      <h1 className="mx-auto text-3xl mt-5 mb-10 font-bold">
        {params.ageRange} Years Old
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {products.map((product: Product, index: number) => (
          <ProductCard
            lang={searchParams.lang}
            index={index}
            product={product}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
