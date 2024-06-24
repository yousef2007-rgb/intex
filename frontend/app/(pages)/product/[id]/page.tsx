import axios from "axios";
import Link from "next/link";
import React from "react";
import { Product, Varient } from "@/types/productsTypes";
import { operations as Operations } from "./operations";
import { imageSlider as ImageSlider } from "./imageSlider";
import { addToCart as AddToCart } from "./addToCart";
import { Metadata } from "next";
import Head from "next/head";
const getProduct = async (_id: string) => {
  const res = await axios.get(`${process.env.URL}/api/products/${_id}`);
  return res.data;
};
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { varientId: string };
}): Promise<Metadata> {
  const productData: Product = await getProduct(params.id);

  const { varientId } = searchParams;
  const varient: Varient | undefined = productData.varients?.find(
    (varient, index) => varient._id == varientId
  );

  const content: Varient | Product = varient ? varient : productData;

  return {
    title: `${content.title} | Intex | Jordan | Intex Jo`,
    description: content.discription,
    keywords: productData.keywords,
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      title: `${content.title} | Intex | Jordan | Intex Jo`,
      description: content.discription,
      type: "website",
      url: `https://www.intexjordan.com/productData/${params.id}`,
      images: [`${process.env.URL}/${content.imageUrl}`],
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
  };
}

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

  const content: Varient | Product = varient ? varient : productData;
  return (
    <>
      <main className="flex sm:flex-row flex-col flex-1 relative w-full">
        <ImageSlider productData={productData} varient={varient} />
        <article className="sm:w-1/2 my-5 w-full px-5">
          <h1 className="font-bold mb-4 text-3xl">{content.title}</h1>
          <h2 className="my-4 font-bold ">Item No: {productData.lable}</h2>
          <div
            // href={`/brand/${productData.brand._id}`}
            className="font-bold flex capitalize my-4"
          >
            <span>Brand:</span>{" "}
            <span className="text-primary hover:underline ml-2">
              {productData.brand.title}
            </span>
          </div>
          <Link
            href={`/productData/${productData.category._id}`}
            className="font-bold flex capitalize my-4"
          >
            <span>productData:</span>{" "}
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
          <p className="my-4 font-semibold">{content.discription}</p>

          <div className="text-xl font-semibold border-gray-300 w-full border-t pt-4 flex">
            {productData.discount != 0 ? (
              <span className="text-red-500 mr-2">
                -{productData.discount}%
              </span>
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
              title: content.title,
              imageUrl: content.imageUrl,
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
    </>
  );
};

export default page;
