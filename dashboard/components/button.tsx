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
      className="bg-primary  m-2 px-3 py-3 text-md rounded-md  text-[#1D192B] flex items-center text-center capitalize"
      href={link ? link : "/"}
      title={text?.toUpperCase()}
    >
      {/* <div className="mr-2">{children}</div> */}
      <span className="sm:block hidden font-semibold h-5 align-middle">
        {text}
      </span>
    </Link>
  );
};

export default button;
