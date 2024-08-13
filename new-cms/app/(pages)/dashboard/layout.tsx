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
      <div className="flex flex-col">
        <header></header>
        <Nav />
        {children}
      </div>
    </div>
  );
}
