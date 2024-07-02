import React, { FC } from "react";
import content from "@/data/content.json";
import Link from "next/link";

interface Props {
  lang: string;
}
export const shopByAge: FC<Props> = ({ lang }) => {
  const data =
    lang != "ar"
      ? content.shopByAgeSection.items.en
      : content.shopByAgeSection.items.ar;
  const title =
    lang != "ar"
      ? content.shopByAgeSection.title.en
      : content.shopByAgeSection.title.ar;
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-800 mx-auto w-fit my-10 text-center">
        {title}
      </h1>
      <div className="flex flex-wrap justify-evenly py-5">
        {data.map((section, index: number) => (
          <Link
            key={index}
            href={`/ageRange/${section.ageRange}?lang=${lang}`}
            className="flex hover:underline decoration-2 flex-col text-center sm:max-w-[190px] transition-all max-w-[170px] px-5 my-2 items-center font-medium text-lg"
          >
            <img src={section.image} alt={section.title} />
            <h2 className="my-2 font-bold">{section.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
