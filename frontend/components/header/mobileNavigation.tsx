"use client";
import React, { useState } from "react";
import { dropDown as DropDown } from "./dropDown";
import { attribute as Attribute } from "./attribute";
import { closeIcon as CloseIcon } from "@/public/icons/closeIcon";
import MenuIcon from "@/public/icons/menuIcon";

export default function navigation({
  links,
}: {
  links: { text: string; link: string }[];
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)} className="mx-4 ">
        {isVisible ? <CloseIcon /> : <MenuIcon />}
      </button>
      <nav
        style={{
          transform: `translateX(${isVisible ? 0 : -1000}px)`,
        }}
        className="flex ease-in-out fixed top-24 px-5 transition-all left-0 h-full w-full sm:hidden  bg-white z-50 flex-col  text-gray-900 font-bold text-left text-lg"
      >
        <div className="flex flex-col" onClick={() => setIsVisible(false)}>
          <Attribute link="/" text="Home" />
          <Attribute link="/aboutus" text="About Us" />
        </div>
        <DropDown
          title={"Categories"}
          links={links}
          setNavVisability={setIsVisible}
        />
      </nav>
    </>
  );
}
