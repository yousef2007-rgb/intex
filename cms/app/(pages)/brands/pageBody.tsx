"use client";
import React, { FC, useState } from "react";
import AddIcon from "@/public/assets/icons/addIcon";
import { Brand } from "@/types/productsTypes";
import SearchIcon from "@/public/assets/icons/searchIcon";
import DropdownMenu from "./dropDown";
import Link from "next/link";

interface Props {
    data: Brand[];
}

const pageBody: FC<Props> = ({ data }) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };
    const res = data.filter((product: Brand, index: number) => {
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
                        placeholder="Search for a Brand"
                        type="text"
                        onChange={handleChange}
                        name=""
                        id=""
                    />
                    <SearchIcon />
                </div>
                <Link
                    href={"/brands/add"}
                    className="rounded-md   shadow-md bg-white flex items-center px-5 ml-2"
                >
                    <AddIcon />
                </Link>
            </div>
            <div className="rounded-md  shadow-md bg-white my-5">
                {res.map((product: Brand, index: number) =>
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
        </>
    );
};

export default pageBody;
