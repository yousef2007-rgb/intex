"use client";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";
import { ItemWithQuantity } from "@/types/productsTypes";
import { trashIcon as TrashIcon } from "@/public/icons/trashIcon";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";

const page = (props: {}) => {
  const cookies = useCookies();
  const router = useRouter();
  const searchParams = useSearchParams();
  const checkout = searchParams.get("checkout");
  const lang = searchParams.get("lang");
  const cartItems = useAppContext().state.cart;
  const context = useAppContext();
  const [total, setTotal] = useState<number>(0);
  const isEn = lang != "ar";

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  useEffect(() => {
    if (checkout) {
      handleCheckout();
    }
  }, []);

  const handleDelete = (index: number) => (e: any) => {
    const newArray = cartItems.slice();
    newArray.splice(index, 1);
    context.setLocalStorage({ ...context.state, cart: newArray });
  };

  const increaseQuantity = (index: number) => (e: any) => {
    const newArray = cartItems.slice();
    newArray.splice(index, 1, {
      ...newArray[index],
      quantity: newArray[index].quantity + 1,
    });
    context.setLocalStorage({ ...context.state, cart: newArray });
  };
  const decreaseQuantity = (index: number) => (e: any) => {
    const newArray = cartItems.slice();
    if (newArray[index].quantity != 1) {
      newArray.splice(index, 1, {
        ...newArray[index],
        quantity: newArray[index].quantity - 1,
      });
      context.setLocalStorage({ ...context.state, cart: newArray });
    }
  };

  const handleCheckout = async () => {
    const token = cookies.get("verification-token-kidz-marty");
    if (token) {
      try {
        const response = await axiosInstance.post(
          `${process.env.URL}/api/orders`,
          { products: cartItems },
          { headers: { "x-web-token": token } }
        );
        router.push(
          `/thankyoupage/?data=${JSON.stringify(response.data)}&total=${total}`
        );
      } catch (err: any) {
        console.error(err.response.data);
      }
    } else {
      router.push("/signin/?checkout=true");
    }
  };

  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum = sum + cartItems[i].price * cartItems[i].quantity;
    }
    setTotal(sum);
  };
  return (
    <div className=" !w-full mx-auto px-5 flex-1  flex flex-col justify-center">
      {cartItems.length === 0 ? (
        <div className="text-center mt-10 font-bold text-xl capitalize flex min-h-[50vh] items-center">
          <span className="mx-auto">
            {isEn ? "your cart is empty " : "سلتك فارغة"}
          </span>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold my-5">
            {isEn ? "Your Cart" : "قائمة التسوق"}
          </h1>
          <div className="flex justify-between flex-wrap gap-4">
            {cartItems.map((product: ItemWithQuantity, index: number) => (
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
                  <p className="text-gray-500">
                    Price: {product.price}JOD x {product.quantity} ={" "}
                    {product.price * product.quantity}JOD
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <button
                      className="bg-gray-200 text-gray-600 rounded-lg px-2 py-1"
                      onClick={decreaseQuantity(index)}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="bg-gray-200 text-gray-600 rounded-lg px-2 py-1"
                      onClick={increaseQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-white rounded-lg w-10 h-10 px-4 py-2"
                    onClick={handleDelete(index)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <p className="capitalize font-bold text-lg">
              total without dilivery: {total}JOD
            </p>
          </div>
          <div className="mt-10">
            <div className="flex items-center sm:flex-row flex-col">
              <button
                onClick={handleCheckout}
                className="bg-primary border-2 w-full sm:w-fit border-primary hover:bg-transparent hover:text-primary font-semibold text-white rounded-lg px-4 py-2"
              >
                Checkout
              </button>
              <span className="m-3 text-gray-500">or</span>
              <a
                className="bg-green-500 capitalize font-semibold w-full sm:w-fit text-center text-white rounded-lg px-4 py-2 border-2 border-green-500 hover:bg-transparent hover:text-green-500 "
                target="blank"
                href={`https://wa.me/795798970?text=${JSON.stringify(
                  cartItems
                )}`}
              >
                Checkout using whatapp
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
