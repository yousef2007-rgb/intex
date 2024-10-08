import React from "react";
import axios from "axios";
import { Category, Product } from "@/types/productsTypes";
import Link from "next/link";
import { productCards as ProductCard } from "@/components/product/productCards";
import content from "@/data/homepage.json";
import axiosInstance from '@/lib/axiosInstance.js'

const getProducts = async () => {

  const products = await axiosInstance.get(
    `${process.env.URL}/api/products/?limitPerCategory=4`
);
  return products.data;
};

export const body = async ({ lang }: { lang: string }) => {
  const products = await getProducts();

  return (
    <div className="px-2">
      <div>
        {products.map(
          (
            productGroup: { category: Category; products: Product[] },
            index: number
          ) => (
            <div key={index} className="flex flex-col my-5">
              <h1 className="text-3xl font-bold text-gray-800 mx-auto w-fit my-10 text-center">
                {lang != "ar"
                  ? productGroup.category.title
                  : productGroup.category.title_ar}
              </h1>
              <div className="flex justify-evenly sm:justify-between flex-wrap">
                {productGroup.products.map(
                  (product: Product, index: number) => (
                    <ProductCard lang={lang} index={index} product={product} />
                  )
                )}
              </div>
              <Link
                href={`/category/${productGroup.category._id}/?lang=${lang}`}
                className="capitalize hover:scale-[0.98] transition-all px-8 py-2 rounded-md w-fit text-white font-semibold mx-auto my-10 bg-primary border-2 border-primary hover:text-primary hover:bg-white ease-in-out"
              >
                {!lang || lang == "en"
                  ? content.ViewAll.english
                  : content.ViewAll.arabic}
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};
