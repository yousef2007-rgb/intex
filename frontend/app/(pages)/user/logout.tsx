"use client";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import React from "react";

export default function logout() {
  const cookies = useCookies();
  const router = useRouter();
  return (
    <button
      onClick={() => {
        cookies.remove("verification-token-kidz-marty");
        router.refresh();
        router.push("/");
      }}
      className="bg-secondary text-white font-bold p-2 rounded-md w-full hover:bg-white border-2 border-secondary hover:text-secondary transition-all"
    >
      LogOut
    </button>
  );
}
