import { Product } from "@/types/productsTypes";
import { Category } from "@/types/productsTypes";
import axios from "axios";
import React from "react";
import { productCards as ProductCard } from "@/components/product/productCards";
import type { Metadata } from "next";

const getProducts = async (id: string) => {
  const products = await axios.get(
    `${process.env.URL}/api/products/category/${id}`
  );

  return products.data;
};

const getCategory = async (id: string) => {
  const category = await axios.get(`${process.env.URL}/api/categories/${id}`);

  return category.data;
};

export const metadata = {};

export async function generateMetaData({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { lang?: string };
}): Promise<Metadata> {
  const category: Category = await getCategory(params.id);
  console.log(category);

  return {
    title: `${category.title} | Intex | Jordan | Intex Jo`,
    description: category.discription,
    keywords: category.keywords,
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      title: `${category.title} | Intex | Jordan | Intex Jo`,
      description: category.discription,
      type: "website",
      url: `https://www.intexjordan.com/category/${params.id}`,
      images: ["https://www.intexjo.com/Assets/images/www.intexjo.com.png"],
    },
    twitter: {
      card: "summary",
      site: "@intex-jo",
      title: category.title,
      description: category.discription,
    },
    icons: {
      icon: "/icon.jpg",
    },
  };
}

const page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { lang?: string };
}) => {
  const products: Product[] = await getProducts(params.id);
  console.log(await getCategory(params.id));

  return (
    <main className="flex flex-1 flex-col">
      <h1 className="mx-auto text-3xl mt-5 mb-10 font-bold">
        {searchParams.lang != "ar"
          ? products[0].category.title
          : products[0].category.title_ar}
      </h1>{" "}
      <div className="flex flex-wrap justify-evenly">
        {products.map((product: Product, index: number) => (
          <ProductCard
            lang={searchParams?.lang}
            index={index}
            product={product}
          />
        ))}{" "}
      </div>
    </main>
  );
};

export default page;
