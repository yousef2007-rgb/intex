import React, { useCallback } from "react";
import axios from "axios";
import { search as Search } from "@/components/search/index";
import { authIcon as AuthIcon } from "@/public/icons/authIcon";
import { cartButton as CartButton } from "./cartButton";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";
import Link from "next/link";
import Language from "./language";
import axiosInstance from "@/lib/axiosInstance";

const getCategories = async () => {
  const categories = await axiosInstance.get(`${process.env.URL}/api/categories`);
  return categories.data;
};

const header = async () => {
  const categories = await getCategories();
  const links = [];
  for (let i = 0; i < categories.length; i++) {
    links.push({
      text: categories[i].title,
      text_ar: categories[i].title_ar,
      link: `/category/${categories[i]._id}`,
    });
  }
  return (
    <div className="h-24 flex items-center bg-white mb-2">
      <header className="py-3 shadow-lg* h-24 font-medium px-2 flex max-w-[1200px] mx-auto fixed top-0 left-0 right-0 z-50 bg-white w-screen items-center justify-between">
        <div className="sm:hidden flex">
          <MobileNavigation links={links} />
          <CartButton />
        </div>

        {/* <Link href={"/"} className="h-[40px] ml-2 w-fit mx-auto sm:mx-0 ">
        <img className="h-full" src="/images/logo-ai.png" alt="kidzmarty logo" />
      </Link> */}
        <Link href={"/"} className="font-bold text-2xl max-w-[150px]">
          <img className="w-full" src="/images/logo.png" />
        </Link>

        <Navigation links={links} />

        <div className="flex">
          <Language />
          <Search />
          <span className="sm:flex hidden">
            <CartButton />
          </span>
          <Link
            href={"/user"}
            className="mx-4 hover:-translate-y-1 transition-all"
          >
            <AuthIcon />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default header;
