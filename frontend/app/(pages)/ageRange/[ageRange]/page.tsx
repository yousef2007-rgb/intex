import { Product } from "@/types/productsTypes";
import axios from "axios";
import React from "react";
import { productCards as ProductCard } from "@/components/product/productCards";

const getProducts = async (ageRange: string) => {
  const products = await axios.get(
    `${process.env.URL}/api/products/ageRange/${ageRange}`
  );

  return products.data;
};

const page = async ({ params }: { params: { ageRange: string } }) => {
  const products: Product[] = await getProducts(params.ageRange);

  return (
    <main className="flex flex-1 flex-col">
      <h1 className="mx-auto text-3xl mt-5 mb-10 font-bold">
        {params.ageRange} Years Old
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {products.map((product: Product, index: number) => (
          <ProductCard index={index} product={product} />
        ))}
      </div>
    </main>
  );
};

export default page;
