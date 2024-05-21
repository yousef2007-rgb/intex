"use client";
import Link from "next/link";
import { config } from "process";
import React, { FC, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
    isPublished: boolean;
    _id: string | undefined;
}

const DropdownMenu: FC<Props> = ({ isPublished, _id }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const handleDelete = async () => {
        const result = confirm("are you sure you want to delete this product")
        if (result) {
            try {
                const res = await axios.get("/api/auth/login")
                const token: string = res.data;
                const data = await axios.delete(`${process.env.URL}/api/products/${_id}`, {
                    headers: {
                        "x-web-token": token
                    }
                })
                if(data) router.refresh();
            } catch(err){
                alert("unable to delete something went wrong")
            }
        }

    };
    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="flex items-center p-2 bg-gray-200 rounded-full"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-800"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute z-full top-full left-1/2 -translate-x-1/2 mt-2 py-2 bg-white border border-gray-300 rounded shadow-lg z-30 text-left">
                    <Link
                        href={`/products/edit/${_id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="block px-4 py-2 text-red-600 hover:bg-red-100 w-full"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
