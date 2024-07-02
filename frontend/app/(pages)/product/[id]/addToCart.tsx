"use client";
import React, { FC } from "react";
import { useAppContext } from "@/app/AppContext";
import { Item, ItemWithQuantity } from "@/types/productsTypes";

export const addToCart = ({
  item,
  lang,
}: {
  item: ItemWithQuantity;
  lang: string;
}) => {
  const context = useAppContext();
  console.log(context.state);
  const handleAddToCart = () => {
    const oldItem = context.state.cart.find(
      (i: ItemWithQuantity) =>
        i.product_id == item.product_id && i.title == item.title
    );
    if (!oldItem) {
      context.setLocalStorage({ cart: [...context.state.cart, item] });
    } else {
      const array = context.state.cart.slice();
      array.splice(context.state.cart.indexOf(oldItem), 1, {
        ...oldItem,
        quantity: oldItem.quantity + item.quantity,
      });

      context.setLocalStorage({ cart: array });
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-primary text-white capitalize w-full rounded-md font-semibold my-4 border-2 border-primary p-3 hover:bg-transparent hover:text-primary"
    >
      {lang != "ar" ? "add to cart" : "أضف إلى السلة"}
    </button>
  );
};
