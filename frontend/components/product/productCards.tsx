import { Product } from "@/types/productsTypes";
import React, { FC } from "react";
import Link from "next/link";

interface Props {
  product: Product;
  index: number;
  lang: string | undefined;
}

export const productCards: FC<Props> = ({ product, index, lang }) => {
  return (
    <Link
      key={index}
      href={`/product/${product._id}/?lang=${lang}`}
      className="text-center rounded-md mx-auto px-2 my-5 hover:-translate-y-5 transition-all justify-between font-medium max-w-[160px] sm:max-w-[200px] flex flex-col items-center"
    >
      <div className="h-[200px] bg-white w-full flex justify-center items-center ">
        <img
          loading="lazy"
          className=" rounded-md h-fit max-h-[200px] object-contain"
          src={`${process.env.URL}/${product.imageUrl}`}
          alt={product.title}
        />
      </div>
      <h2 className="my-2  font-bold text-lg">
        {lang != "ar" ? product.title : product.title_ar}
      </h2>
      <h3
        className="font-semibold"
        style={
          product.discount != 0
            ? {
                textDecoration: "line-through",
                color: "gray",
              }
            : {}
        }
      >
        {product.online_price}JOD
      </h3>
      {product.discount != 0 ? (
        <h4 className="font-semibold">
          {product.online_price -
            (product.online_price * product.discount) / 100}
          JOD
        </h4>
      ) : (
        ""
      )}
    </Link>
  );
};
