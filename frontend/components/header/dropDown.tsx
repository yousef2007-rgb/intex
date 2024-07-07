"use client";
import React, { FC, useState } from "react";
import Link from "next/link";

interface Props {
  title: string;
  links: { text: string; text_ar: string; link: string }[];
  setNavVisability?: React.Dispatch<React.SetStateAction<boolean>>;
  lang: string | null;
}
export const dropDown: FC<Props> = ({
  title,
  links,
  setNavVisability,
  lang,
}) => {
  const [dropDownVisability, setDropDownVisability] = useState<boolean>(false);
  const handleMouseOver = () => {
    setDropDownVisability(true);
  };
  const handleMouseOut = () => {
    setDropDownVisability(false);
  };
  return (
    <div
      className="flex z-10 hover:-translate-y-1 transition-all p-2 sm:rounded-b-none rounded-b-md rounded-t-md hover:bg-gray-100"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <button className="hover:underline decoration-2 text-left w-full">
        {title}
      </button>
      <div
        className="flex absolute top-full  text-left sm:text-center w-[90%] sm:w-[300px] p-2 rounded-b-md  sm:rounded-t-md left-1/2 -translate-x-1/2 flex-col bg-gray-100"
        style={{ display: dropDownVisability == true ? "flex" : "none" }}
        onClick={() => {
          if (setNavVisability) {
            setNavVisability(false);
          }
        }}
      >
        {links.map((link, index) => (
          <Link
            className="my-2 hover:underline decoration-2 text-md"
            key={index}
            href={`${link.link}/?lang=${lang}`}
          >
            {lang != "ar" ? link.text : link.text_ar}
          </Link>
        ))}
      </div>
    </div>
  );
};
