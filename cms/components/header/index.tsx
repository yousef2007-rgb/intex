import React from "react";
import PersonIcon from "../../public/assets/icons/personIcon";
import Link from "next/link";
import MenuIcon from "@/public/assets/icons/menuIcon";

export default function index() {
    return (
        <header className="flex justify-between items-center  py-5 max-w-5xl mx-auto w-[90vw]">
            <Link href="/">
                <img
                    className="w-16"
                    src="/assets/images/logo.png"
                    alt="kids marty logo"
                />
            </Link>
            <Link href="/auth" className="">
                <PersonIcon />
            </Link>
        </header>
    );
}
