import React, { FC } from "react";
import Link from "next/link";

interface Props {
  text: string;
  link: string;
}

export const attribute: FC<Props> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="hover:-translate-y-1 hover:underline decoration-2 transition-all hover:border-b-2 rounded-md p-2 hover:bg-gray-100"
    >
      {text}
    </Link>
  );
};
