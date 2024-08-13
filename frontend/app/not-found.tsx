import Link from "next/link";
import React from "react";

const Notfound = (props: {}) => {
  return (
    <div className="flex flex-col items-center">
      <img className="max-h-[500px] w-fit mx-auto" src="/images/404.png" />
      <Link
        href={"/"}
        className="capitalize bg-primary text-white font-bold px-5 py-2 border-2 border-primary hover:bg-white hover:text-primary"
      >
        go back to home
      </Link>
    </div>
  );
};
export default Notfound;
