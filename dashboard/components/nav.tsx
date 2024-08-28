"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./button";
import HomeIcon from "@/public/assets/icons/homeIcon";
import ProductsIcons from "@/public/assets/icons/productsIcons";
import CategoiresIconse from "@/public/assets/icons/categoiresIconse";
import BrandsIcons from "@/public/assets/icons/brandsIcons";
import OrdersIcons from "@/public/assets/icons/ordersIcons";
import UsersIcons from "@/public/assets/icons/usersIcons";
import UploadIcon from "@/public/assets/icons/uploadIcon";

export default function nav() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
  }, []);

  return (
    <nav className="h-fit mt-1 flex flex-col text-center text-black   min-w-[200px]  sticky ">
      <Button text="products" link="/products">
        <ProductsIcons />
      </Button>
      <Button text="categories" link="/categories">
        <CategoiresIconse />
      </Button>
      <Button text="brands" link="/brands">
        <BrandsIcons />
      </Button>
      <Button text="orders" link="/orders">
        <OrdersIcons />
      </Button>
      <Button text="users" link="/users">
        <UsersIcons />
      </Button>
      <Button text="upload" link="/upload">
        <UploadIcon />
      </Button>
      <button
        onClick={() => {
          localStorage.setItem("token", "");
          router.push("/signin");
        }}
        className="bg-[#FFD8E4] m-2 px-3 py-3 text-md rounded-md font-semibold text-black flex items-center text-center capitalize"
      >
        Logout
      </button>
    </nav>
  );
}
