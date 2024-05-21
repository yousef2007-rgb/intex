"use client";
import axios from "axios";
import Link from "next/link";
import React, { FC, useState } from "react";
import {useRouter} from "next/navigation";

interface Props {
    _id: string | undefined;
}

const DropdownMenu: FC<Props> = ({ _id }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleEdit = () => {
        // Add your edit logic here
        alert("Edit clicked");
    };

    const handleDelete = async () => {
        const result = confirm("are you sure you want to delete this category");
        if (result) {
            try {
                const res = await axios.get("/api/auth/login")
                const token: string = res.data;
                const data = await axios.delete(`${process.env.URL}/api/categories/${_id}`, {
                    headers: {
                        "x-web-token": token
                    }
                });
                if(data) router.refresh();
            } catch (err) {
                alert("something went wrong can't delete category")
            }
        }
    };
    const handlePublish = () => {
        // Add your delete logic here
        alert("Delete clicked");
    };

    const handleUnpublish = () => {
        // Add your delete logic here
        alert("Delete clicked");
    };
    return (
        <div className="relative ml-5">
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 bg-white border border-gray-300 rounded shadow-lg z-30 text-left">
                    <Link
                        href={`/categories/edit/${_id}`}
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
