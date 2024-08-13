import React, { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  text?: string;
  link?: string;
}

const button: FC<Props> = ({ children, text, link }) => {
  return (
    <Link
      className="shadow-md rounded-md  py-3 px-4  bg-white hover:bg-gray-300 text-gray-700 my-3 sm:min-w-[200px] text-left flex items-center  h-fit"
      href={link ? link:"/"}
      title={text?.toUpperCase()}
    >
      {children}
      <span className=" mx-2 text-base sm:block hidden font-semibold h-5 align-middle">
        {text}
      </span>
    </Link>
  );
};

export default button;
