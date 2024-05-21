"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function backbutton() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  if (pathname != "/") {
    return (
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm p-2 font-semibold my-5  w-fit mx-3 text-gray-900 rounded hover:bg-gray-300 transition duration-300 ease-in-out"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_145_2)">
<path d="M19.25 10.0833H6.26083L9.5425 6.7925L8.25 5.5L2.75 11L8.25 16.5L9.5425 15.2075L6.26083 11.9167H19.25V10.0833Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_145_2">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>

      </button>
    );
  } else {
    return <h1></h1>;
  }
}
