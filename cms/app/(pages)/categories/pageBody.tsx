"use client";
import React, { FC, Suspense, useState } from "react";
import AddIcon from "@/public/assets/icons/addIcon";
import { Category } from "@/types/productsTypes";
import SearchIcon from "@/public/assets/icons/searchIcon";
import DropdownMenu from "./dropDown";
import Link from "next/link";

interface Props {
    data: Category[];
}

const pageBody: FC<Props> = ({ data }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const res = data.filter((product: Category, index: number) => {
        return inputValue == ""
            ? true
            : product.title.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.title_ar.includes(inputValue) ||
            product.discription.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.discription_ar?.includes(inputValue)
    });

    return (
        <>
            <div className="flex w-full">
                <div className="rounded-md shadow-md bg-white flex items-center flex-1 px-5">
                    <input
                        className="w-full text-gray-800 rounded-md  outline-none  text-base font-semibold  py-[12px] flex-1"
                        placeholder="Search for a Category"
                        type="text"
                        onChange={handleChange}
                        name="search"
                        id="search"
                    />
                    <SearchIcon />
                </div>
                <Link
                    href={"/categories/add"}
                    className="rounded-md   shadow-md bg-white flex items-center px-5 ml-2"
                >
                    <AddIcon />
                </Link>
            </div>
            <Suspense fallback={<h1></h1>}>
            <div className="rounded-md  shadow-md bg-white my-5">
                {res.map((product: Category, index: number) =>
                    res.length != 0 ? (
                        <div className=" p-5 flex items-center" key={index}>
                            <img
                                className="max-w-[150px] w-[25%] rounded-md"
                                src={`${process.env.URL}/${product.imageUrl}`}
                                alt={product.title}
                            />
                            <div className="flex flex-col ml-5 mr-auto">
                                <h1 className="font-semibold">{product.title}</h1>
                            </div>

                            <DropdownMenu _id={product?._id} />
                        </div>
                    ) : (
                        ""
                    )
                )}
            </div>
            </Suspense>
        </>
    );
};

export default pageBody;
