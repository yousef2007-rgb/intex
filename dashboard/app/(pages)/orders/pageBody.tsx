"use client";
import React, { FC, useState } from "react";
import CheckIcon from "@/public/assets/icons/checkIcon";
import CloseIcon from "@/public/assets/icons/closeIcon";
import AddIcon from "@/public/assets/icons/addIcon";
import { Order } from "@/types/productsTypes";
import SearchIcon from "@/public/assets/icons/searchIcon";
import DropdownMenu from "./dropDown";
import Link from "next/link";

interface Props {
  data: Order[];
}

const pageBody: FC<Props> = ({ data }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const res = data.filter((order: Order, index: number) => {
    return inputValue == ""
      ? true
      : order.user.username.includes(inputValue) ||
          order.user._id.includes(inputValue) ||
          order.user.city.includes(inputValue) ||
          order.user.location.includes(inputValue) ||
          order.user.phone.includes(inputValue) ||
          order._id.includes(inputValue);
  });
  console.log(res);
  return (
    <>
      <div className="flex w-full">
        <div className="rounded-md shadow-md bg-white flex items-center flex-1 px-5">
          <input
            className="w-full text-gray-800 rounded-md  outline-none  text-base font-semibold  py-[12px] flex-1"
            placeholder="Search for a Order"
            type="text"
            onChange={handleChange}
            name=""
            id=""
          />
          <SearchIcon />
        </div>
      </div>
      <div>
        {res.map((order: Order, index: number) => (
          <div
            className="[&>*>span]:text-gray-600 rounded-md  shadow-md bg-white [&>*>span]:mx-2 h-fit flex flex-col border-black p-5 my-4 font-bold "
            key={index}
          >
            <h1>
              Customer Id:<span>{order.user._id}</span>
            </h1>
            <h2>
              Customer Name:
              <span>{order.user.username}</span>
            </h2>
            <h3>
              Customer Phone:
              <span>{order.user.phone}</span>
            </h3>
            <h3>
              Customer Email:
              <span>{order.user.email}</span>
            </h3>
            <h4>
              Customer Location:
              <span>
                {order.user.location} in {order.user.city}
              </span>
            </h4>
            <div className="flex sm:flex-row flex-col mt-2">
              <Link
                className="transition-all hover:text-primary bg-primary text-white hover:bg-white px-4 py-2 rounded-md my-2 capitalize border-2 border-primary w-full sm:w-[50%] text-center mr-2"
                href={`/orders/${order._id}`}
              >
                Details
              </Link>
              <Link
                className="transition-all hover:text-green-500 bg-green-500 text-white hover:bg-white px-4 py-2 rounded-md my-2 capitalize border-2 border-green-500 w-full sm:w-[50%] text-center"
                href={`https://wa.me/${order.user.phone}`}
                target={"blank"}
              >
                contact on whatsapp
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default pageBody;
