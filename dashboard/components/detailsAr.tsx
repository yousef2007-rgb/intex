import { Brand, Category, Product } from "@/types/productsTypes";
import React from "react";

export default function datails({
  data,
  handler,
}: {
  data: Product | Category | Brand;
  handler: any;
}) {
  return (
    <div className="bg-white p-5 rounded-md shadow-md w-full my-6">
      <h1 className="mb-5 text-gray-700 font-semibold">Details arabic</h1>
      <label
        htmlFor="title"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Title Ar
      </label>
      <input
        type="text"
        id="title_ar"
        name="title_ar"
        value={data.title_ar}
        onChange={handler}
        required
        maxLength={100}
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
      />

      <label
        htmlFor="discription_Ar"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Description Ar
      </label>
      <textarea
        id="discription_Ar"
        name="discription_ar"
        value={data.discription_ar}
        onChange={handler}
        required
        maxLength={920}
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
      />
    </div>
  );
}
