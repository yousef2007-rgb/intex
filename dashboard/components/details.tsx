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
    <div className="bg-white p-5 rounded-md shadow-md w-full ">
      <h1 className="mb-5 text-gray-700 font-semibold">Details</h1>
      <label
        htmlFor="title"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={data.title}
        onChange={handler}
        required
        maxLength={100}
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
      />

      <label
        htmlFor="discription"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Description
      </label>
      <textarea
        id="discription"
        name="discription"
        value={data.discription}
        onChange={handler}
        required
        maxLength={920}
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
      />

      <label
        htmlFor="lable"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Label
      </label>
      <input
        type="text"
        id="lable"
        name="lable"
        value={data.lable}
        onChange={handler}
        required
        maxLength={100}
        minLength={3}
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
      />
      <label
        htmlFor="keywords"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Keywords
      </label>
      <input
        type="text"
        id="keywords"
        name="keywords"
        value={data.keywords}
        onChange={handler}
        maxLength={920}
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
      />
    </div>
  );
}
