"use client";
import React, { useState } from "react";
import { addToCart as AddToCart } from "./addToCart";
import { Item } from "@/types/productsTypes";

export const operations = ({
  item,
  dimensions,
  lang,
}: {
  item: Item;
  dimensions?: string[];
  lang: string;
}) => {
  const [counter, setCounter] = useState(1);
  const [choosenDimension, setChoosenDimension] = useState(
    dimensions ? dimensions[0] : null
  );

  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      {dimensions && dimensions.length != 0 ? (
        <div className="flex flex-col my-4">
          <span className="capitalize font-bold mr-2">
            {lang != "ar" ? "dimension" : "الأبعاد"}:
          </span>
          <select
            onClick={(e: any) => setChoosenDimension(e.target.value)}
            className="font-bold outline-none flex-1 mt-2 text-center bg-gray-100 rounded-md px-3 py-2"
          >
            {dimensions.map((dimension, index) => (
              <option key={index} value={dimension}>
                {dimension}
              </option>
            ))}
          </select>
        </div>
      ) : (
        ""
      )}
      <div className="flex font-semibold bg-gray-100 my-4 rounded-md">
        <button
          className="p-3  rounded-l-lg bg-primary text-white"
          onClick={handleDecrease}
        >
          -
        </button>
        <p className="flex-1 text-center p-3">{counter}</p>
        <button
          className="p-3 rounded-r-lg bg-primary text-white"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <AddToCart
        item={{
          ...item,
          quantity: counter,
          title: choosenDimension
            ? item.title + ` (${choosenDimension})`
            : item.title,
        }}
        lang={lang}
      />
    </>
  );
};
