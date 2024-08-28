"use client";
import React, { useState } from "react";
import DropdownMenu from "./dropDown";
import SearchIcon from "@/public/assets/icons/searchIcon";
import AddIcon from "@/public/assets/icons/addIcon";
import Link from "next/link";
import {
  Brand,
  BrandWithId,
  Category,
  CategoryWithId,
  ProductWithId,
} from "@/types/productsTypes";
import { usePathname } from "next/navigation";

export default function productsList({
  products,
}: {
  products: ProductWithId[] | CategoryWithId[] | BrandWithId[];
}) {
  type InputEvent = React.ChangeEvent<HTMLInputElement>;
  type SubmitEvent = React.SyntheticEvent<HTMLFormElement>;
  const [searchText, setSearchText] = useState("");
  const handleSearchBoxChange = (e: InputEvent) => {
    setSearchText(e.target.value);
  };
  const res = products.filter(
    (product: ProductWithId | CategoryWithId | BrandWithId, index: number) => {
      return searchText == ""
        ? true
        : product.title.toLowerCase().includes(searchText.toLowerCase()) ||
            product.title_ar.includes(searchText) ||
            product.discription
              .toLowerCase()
              .includes(searchText.toLowerCase()) ||
            product.discription_ar?.includes(searchText) ||
            product.lable.toLowerCase().includes(searchText.toLowerCase());
    }
  );

  const path = usePathname();
  return (
    <div className="felx flex-col w-full px-2 max-h-screen max-w-[800px]s mx-auto">
      <div className="flex w-full my-3">
        <div className="rounded-md  bg-primary cursor-text flex items-center flex-1 px-5">
          <input
            className="w-full bg-inherit placeholder:font-medium  text-gray-800 rounded-md  outline-none  text-base font-semibold  py-[12px] flex-1"
            placeholder="Search for a Product"
            type="text"
            onChange={handleSearchBoxChange}
            name=""
            id=""
          />
          <SearchIcon />
        </div>
        <Link
          href={`${path}/add`}
          className="rounded-md    bg-primary flex items-center px-5 ml-2"
        >
          <AddIcon />
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto flex-1 bg-white rounded-md">
        {res.map(
          (
            product: ProductWithId | CategoryWithId | BrandWithId,
            index: number
          ) => (
            <div
              style={{ backgroundColor: index % 2 != 0 ? "#e9e3f1" : "white" }}
              className="flex items-center mx-auto p-5 text-sm font-semibold border-b w-full"
              key={index}
            >
              <div className="max-w-32 min-h-32 rounded-md !w-full flex items-center bg-white">
                <img
                  className="w-full rounded-md"
                  src={`${process.env.URL}/${product.imageUrl}`}
                />
              </div>
              <div className="flex ml-5 font-semibold flex-col">
                <p className="">{product.title}</p>
                <p className="text-gray-600">{product.lable}</p>
                {/* <p>{product.category.title}</p>
              <p>{product.brand.title}</p> */}
              </div>
              <DropdownMenu _id={product._id} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
