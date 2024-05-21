"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useAppContext } from "@/app/AppContext";
import { ItemWithQuantity } from "@/types/productsTypes";

export default function page() {
  const params = useSearchParams();
  const context = useAppContext();
  const dataString = params.get("data");
  const data = dataString ? JSON.parse(dataString) : null;
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    calculateTotal();
  }, [data]);

  useEffect(() => {
    context.setLocalStorage({ ...context.state, cart: [] });
  }, []);

  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < data.products.length; i++) {
      sum = sum + data.products[i].price * data.products[i].quantity;
    }
    setTotal(sum);
  };
  return (
    <>
      <Head>
        <title>Thank You for Your Purchase!</title>
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-2">
          Thank you for your purchase!
        </h1>
        <div className="flex justify-between flex-wrap gap-4">
          {data
            ? data.products.map((product: ItemWithQuantity, index: number) => (
                <div
                  key={index}
                  className="p-4 flex-1 my-5 min-w-[250px] flex flex-col bg-white rounded-lg shadow-lg"
                >
                  <img
                    src={`${process.env.URL}/${product.imageUrl}`}
                    alt={product.title}
                    className="w-full h-40 object-contain rounded-lg"
                  />
                  <div className="flex-1 mt-4 flex flex-col justify-center">
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <p className="text-gray-500">Price: {product.price}</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="flex items-center">
                      <span className="mx-2">{product.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
        <div className="mt-5">
          <p className="capitalize font-bold text-lg">
            total without dilivery: {total}JOD
          </p>
        </div>
        <p className="text-center mt-8">
          Your order is being processed and will be shipped shortly. You will
          receive an email with tracking information as soon as it becomes
          available.
        </p>
        <p className="text-center mt-8">
          In the meantime, you can browse our{" "}
          <Link className="text-blue-400 hover:underline" href={"/"}>
            website
          </Link>
        </p>
      </div>
    </>
  );
}
