import React from "react";
import { dropDown as DropDown } from "./dropDown";
import { attribute as Attribute } from "./attribute";

export default function navigation({
  links,
}: {
  links: { text: string; link: string }[];
}) {
  return (
    <nav className="hidden mx-2 h-full max-w-sm w-full sm:flex justify-between relative text-gray-900 font-bold items-center text-lg">
      <Attribute link="/" text="Home" />
      <Attribute link="/aboutus" text="About Us" />
      <DropDown title={"Categories"} links={links} />
    </nav>
  );
}
