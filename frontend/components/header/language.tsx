"use client";

import React, { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function language() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const language = searchParams.get("lang");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <Link
      href={`${pathname}?${
        !language || language == "en"
          ? createQueryString("lang", "ar")
          : createQueryString("lang", "en")
      }`}
      className="mx-4 hover:-translate-y-1 transition-all"
    >
      {!language || language == "en" ? "AR" : "EN"}
    </Link>
  );
}
