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
    <div className="flex bg-[#FEF7FF]">
      <Nav />
      <div className="flex !h-screen overflow-y-auto flex-col w-full">
        <header></header>
        {children}
      </div>
    </div>
  );
}
