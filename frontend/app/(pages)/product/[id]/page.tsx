import axios from "axios";
import Link from "next/link";
import React from "react";
import { Product, Varient } from "@/types/productsTypes";
import { operations as Operations } from "./operations";
import { imageSlider as ImageSlider } from "./imageSlider";
import { addToCart as AddToCart } from "./addToCart";

const getProduct = async (_id: string) => {
  const res = await axios.get(`${process.env.URL}/api/products/${_id}`);
  return res.data;
};

const page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { varientId: string };
}) => {
  const productData: Product = await getProduct(params.id);

  const { varientId } = searchParams;
  const varient: Varient | undefined = productData.varients?.find(
    (varient, index) => varient._id == varientId
  );
  return (
    <main className="flex sm:flex-row flex-col flex-1 relative w-full">
      <ImageSlider productData={productData} varient={varient} />
      <article className="sm:w-1/2 my-5 w-full px-5">
        <h1 className="font-bold mb-4 text-3xl">
          {varient ? varient.title : productData.title}
        </h1>
        <h2 className="my-4 font-bold ">Item No: {productData.lable}</h2>
        <Link
          href={`/brand/${productData.brand._id}`}
          className="font-bold flex capitalize my-4"
        >
          <span>Brand:</span>{" "}
          <span className="text-primary hover:underline ml-2">
            {productData.brand.title}
          </span>
        </Link>
        <Link
          href={`/category/${productData.category._id}`}
          className="font-bold flex capitalize my-4"
        >
          <span>Category:</span>{" "}
          <span className="text-primary hover:underline ml-2">
            {productData.category.title}
          </span>
        </Link>
        <Link
          href={`/ageRange/${productData.ageRange}`}
          className="font-bold capitalize flex my-4"
        >
          <span>age range:</span>{" "}
          <span className="text-primary hover:underline ml-2">
            {productData.ageRange}
          </span>
        </Link>
        <p className="my-4 font-semibold">
          {varient ? varient.discription : productData.discription}
        </p>

        <div className="text-xl font-semibold border-gray-300 w-full border-t pt-4 flex">
          {productData.discount != 0 ? (
            <span className="text-red-500 mr-2">-{productData.discount}%</span>
          ) : (
            ""
          )}
          <p className="">
            {productData.discount == 0
              ? productData.online_price
              : productData.online_price -
                (productData.online_price * productData.discount) / 100}
            JOD
          </p>
        </div>
        {productData.discount != 0 ? (
          <p className="capitalize line-through text-gray-500 through font-bold">
            list price: {productData.online_price}
          </p>
        ) : (
          ""
        )}
        {!productData.isInStock ? (
          <p className="font-bold capitalize text-red-500 my-4 text-center">
            out of stock
          </p>
        ) : (
          ""
        )}

        <Operations
          item={{
            title: varient ? varient.title : productData.title,
            imageUrl: varient ? varient.imageUrl : productData.imageUrl,
            product_id: productData._id,
            price:
              productData.discount == 0
                ? productData.online_price
                : productData.online_price -
                  (productData.online_price * productData.discount) / 100,
          }}
          dimensions={productData.dimensions}
        />
        {productData.varients && productData.varients.length != 0 ? (
          <>
            <h1 className="font-bold mt-5 mb-2 text-xl">Varients:</h1>
            <div className="flex flex-wrap">
              {varient ? (
                <Link
                  href={`/product/${productData._id}`}
                  className="max-w-[150px] flex rounded-md flex-1 mr-2 bg-white"
                >
                  <img
                    loading="lazy"
                    className=" aspect-square rounded-md object-contain w-full"
                    src={`${process.env.URL}/${productData.imageUrl}`}
                    alt={productData.title}
                  />
                </Link>
              ) : (
                ""
              )}
              {productData.varients
                .filter((varient) => varient._id != varientId)
                .map((varient, index) => (
                  <Link
                    href={`/product/${productData._id}/?varientId=${varient._id}`}
                    className="max-w-[150px] flex rounded-md flex-1 mr-2 bg-white"
                    key={index}
                  >
                    <img
                      loading="lazy"
                      className=" aspect-square rounded-md object-contain w-full"
                      src={`${process.env.URL}/${varient.imageUrl}`}
                      alt={varient.title}
                    />
                  </Link>
                ))}
            </div>
          </>
        ) : (
          ""
        )}
      </article>
    </main>
  );
};

export default page;
