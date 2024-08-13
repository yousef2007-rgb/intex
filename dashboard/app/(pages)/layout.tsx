"use";
import React from "react";
import Link from "next/link";
import Nav from "@/components/nav";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Nav />
      <div className="flex !h-screen overflow-y-auto bg-gray-50 flex-col w-full">
        <header></header>
        {children}
      </div>
    </div>
  );
}
