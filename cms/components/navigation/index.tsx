import React from "react";
import Link from "next/link";
import HomeIcon from "@/public/assets/icons/homeIcon";
import ProductsIcons from "@/public/assets/icons/productsIcons";
import CategoiresIconse from "@/public/assets/icons/categoiresIconse";
import BrandsIcons from "@/public/assets/icons/brandsIcons";
import OrdersIcons from "@/public/assets/icons/ordersIcons";
import UsersIcons from "@/public/assets/icons/usersIcons";
import UploadIcon from "@/public/assets/icons/uploadIcon";
import Button from "./button";

export default function index() {
  return (
    <div className="flex w-fit sm:bg-transparent sbg-white flex-col flex-wrap capitalize text-2xl">
      <Button text="home" link="/">
        <HomeIcon />
      </Button>
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
    </div>
  );
}
