"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function nav() {
  const router = useRouter();

  if (localStorage) {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
  }

  return (
    <nav className="h-full min-h-screen [&_a]:w-full [&_*]:p-4 flex flex-col bg-purple-900 text-left text-white text-sm font-bold capitalize min-w-[250px]  sticky ">
      <div className="flex items-center">
        <img src="/logo.png" className="!w-fit !p-0" />
        <p className="!text-center h-fit !p-0 ml-3">CMS</p>
      </div>
      <Link className="hover:bg-purple-950 " href={"/products"}>
        products
      </Link>
      <Link className="hover:bg-purple-950 " href={"/categories"}>
        categories
      </Link>
      <Link className="hover:bg-purple-950 " href={"/brands"}>
        brands
      </Link>
      <Link className="hover:bg-purple-950 " href={"/upload"}>
        upload
      </Link>
      <Link className="hover:bg-purple-950 " href={"/orders"}>
        Orders
      </Link>
      <button
        onClick={() => {
          localStorage.setItem("token", "");
          router.push("/signin");
        }}
        className="bg-purple-950 mt-auto !p-4 !text-left"
      >
        Logout
      </button>
    </nav>
  );
}
