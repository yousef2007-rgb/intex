"use client";
import React from "react";
import { cartIcon as CartIcon } from "@/public/icons/cartIcon";
import { useAppContext } from "@/app/AppContext";
import { ItemWithQuantity } from "@/types/productsTypes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const cartButton = () => {
  const numberOfItems = useAppContext().state.cart.length;
  const cartItems = useAppContext().state.cart;

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  return (
    <Link
      href={`/cart?lang=${lang ? lang : "en"}`}
      className="relative mx-4 hover:-translate-y-1 transition-all"
    >
      {numberOfItems ? (
        <span className="bg-primary flex items-center justify-center absolute bottom-[50%] left-3 text-sm  h-5 w-5 rounded-full text-white font-semibold">
          {numberOfItems}
        </span>
      ) : (
        ""
      )}
      <CartIcon />
    </Link>
  );
};
