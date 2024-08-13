"use client";
import React, { FC, useState } from "react";
import CheckIcon from "@/public/assets/icons/checkIcon";
import CloseIcon from "@/public/assets/icons/closeIcon";
import AddIcon from "@/public/assets/icons/addIcon";
import { Product } from "@/types/productsTypes";
import SearchIcon from "@/public/assets/icons/searchIcon";
import DropdownMenu from "./dropDown";
import Link from "next/link";

interface Props {
    data: Product[];
}

const pageBody: FC<Props> = ({ data }) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };
    const res = data.filter((product: Product, index: number) => {
        return inputValue == ""
            ? true
            : product.title.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.title_ar.includes(inputValue) ||
            product.discription.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.discription_ar?.includes(inputValue) ||
            product.lable.toLowerCase().includes(inputValue.toLowerCase());
    });
    console.log(res)
    return (
        <>
            <div className="flex w-full">
                <div className="rounded-md shadow-md bg-white flex items-center flex-1 px-5">
                    <input
                        className="w-full text-gray-800 rounded-md  outline-none  text-base font-semibold  py-[12px] flex-1"
                        placeholder="Search for a Product"
                        type="text"
                        onChange={handleChange}
                        name=""
                        id=""
                    />
                    <SearchIcon />
                </div>
                <Link
                    href={"/products/add"}
                    className="rounded-md   shadow-md bg-white flex items-center px-5 ml-2"
                >
                    <AddIcon />
                </Link>
            </div>
            <div className="rounded-md overflow-y-auto max-h-[385px] overflow-x-hidden  shadow-md bg-white my-5">
                {res.map((product: Product, index: number) =>
                    res.length != 0 ? (
                        <div className=" p-5 flex items-center" key={index}>
                            <img
                                className="max-w-[150px] w-[25%] rounded-md"
                                src={`${process.env.URL}/${product.imageUrl}`}
                                alt={product.title}
                            />
                            <div className="flex flex-1 flex-col mx-5">
                                <h1 className="font-semibold">{product.title}</h1>
                                <p className="text-gray-600">Label: {product.lable}</p>
                            </div>

                            <div className="ml-auto items-center sm:flex-row flex-col flex flex-wrap h-full">
                                <snap className="sm:mr-2 mr-0 mb-2">{product.isPublished ? <CheckIcon /> : <CloseIcon />}</snap>
                                <DropdownMenu isPublished={product.isPublished} _id={product?._id} />
                            </div>
                        </div>
                    ) : (
                        ""
                    )
                )}
            </div>
        </>
    );
};

export default pageBody;
