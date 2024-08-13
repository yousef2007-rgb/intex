"use client";
import React from "react";
import { dropDown as DropDown } from "./dropDown";
import { attribute as Attribute } from "./attribute";
import { useSearchParams } from "next/navigation";
import content from "@/data/content.json";

export default function navigation({
  links,
}: {
  links: { text: string; text_ar: string; link: string }[];
}) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const navContent =
    lang != "ar" ? content.navigation.en : content.navigation.ar;
  return (
    <nav
      className="hidden mx-2 h-full capitalize max-w-sm w-full sm:flex justify-between relative text-gray-900 font-bold items-center text-lg"
      style={{ fontFamily: lang != "ar" ? "Poppins" : "Cairo" }}
    >
      <Attribute link={`/?lang=${lang}`} text={navContent.home} />
      <Attribute link="/aboutus" text={navContent.aboutus} />
      <DropDown title={navContent.categories} links={links} lang={lang} />
    </nav>
  );
}
