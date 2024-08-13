import React, { useState } from "react";
import { BrandWithId, CategoryWithId, Product } from "@/types/productsTypes";
import AddIcon from "@/public/assets/icons/addIcon";
import { trashIcon as TrashIcon } from "@/public/assets/icons/trashIcon";

export default function datails({
  data,
  categories,
  brands,
  handler,
  setFormData,
}: {
  data: Product;
  handler: any;
  categories: CategoryWithId[];
  brands: BrandWithId[];
  setFormData: any;
}) {
  const [currentDimension, setCurrentDimension] = useState("");

  const handleDimensionChange = (e: any) => {
    setCurrentDimension(e.target.value);
  };

  const handleOldDimensionChange = (index: number) => (e: any) => {
    const newArray = data.dimensions?.slice();
    newArray?.splice(index, 1, e.target.value);
    if (newArray) {
      setFormData({
        ...data,
        dimensions: newArray,
      });
    }
  };
  const handleDimensionDelete = (index: number) => (e: any) => {
    e.preventDefault();
    const newArray = data.dimensions?.slice();
    newArray?.splice(index, 1);
    if (newArray) {
      setFormData({
        ...data,
        dimensions: newArray,
      });
    }
  };
  const handleAddDimensions = (e: any) => {
    e.preventDefault();
    if (currentDimension != "") {
      setFormData({
        ...data,
        dimensions: data.dimensions
          ? [...data.dimensions, currentDimension]
          : [currentDimension],
      });
      setCurrentDimension("");
    }
  };
  const handleIsPublishedChange = () => {
    setFormData({ ...data, isPublished: !data.isPublished });
  };

  const handleInStockChange = () => {
    setFormData({ ...data, isInStock: !data.isInStock });
  };

  return (
    <div className="bg-white p-5 rounded-md shadow-md w-full ">
      <h1 className="mb-5 text-gray-700 font-semibold">Details</h1>
      <label
        htmlFor="ageRange"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        age range
      </label>
      <select
        name="ageRange"
        id="age-range"
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
        value={data.ageRange}
        onChange={handler}
      >
        <option>0-2</option>
        <option>2-6</option>
        <option>7-12</option>
        <option>13-up</option>
      </select>

      <label
        htmlFor="category"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Category
      </label>
      <select
        name="category"
        id="category"
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
        value={typeof data.category == "string" ? data.category : ""}
        onChange={handler}
      >
        {categories.map((category: CategoryWithId, index: number) => (
          <option key={index} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>

      <label
        htmlFor="brand"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Brand
      </label>
      <select
        name="brand"
        id="brand"
        className="border rounded w-full py-2 px-3 mb-2 outline-none"
        value={typeof data.category == "string" ? data.category : ""}
        onChange={handler}
      >
        {brands.map((brand: BrandWithId, index: number) => (
          <option key={index} value={brand._id}>
            {brand.title}
          </option>
        ))}
      </select>

      <div className="flex items-center my-5 ">
        <input
          type="checkbox"
          name="isPublished"
          className="toggle-checkbox cursor-pointer"
          checked={data.isPublished}
          onChange={handleIsPublishedChange}
        />
        <span
          className={`toggle-slider ${
            data.isPublished ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></span>
        <label className="flex ml-2 items-center space-x-2 cursor-pointer">
          <span className="block text-gray-700 text-sm font-bold ">
            Is Published
          </span>
        </label>
      </div>

      <div className="flex items-center my-5 ">
        <input
          type="checkbox"
          className="toggle-checkbox cursor-pointer"
          name="isInStock"
          checked={data.isInStock}
          onChange={handleInStockChange}
        />
        <span
          className={`toggle-slider ${
            data.isInStock ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></span>
        <label className="flex ml-2 items-center space-x-2 cursor-pointer">
          <span className="block text-gray-700 text-sm font-bold ">
            Is In Stock
          </span>
        </label>
      </div>
      <div className="bg-gray-200 p-5 rounded-md">
        <div className="flex items-center bg-white px-2 py-3 rounded-md">
          <label
            htmlFor="dimensions"
            className="block text-gray-700 text-sm font-bold "
          >
            New Dimension:
          </label>
          <input
            type="text"
            id="dimensions"
            name="dimensions"
            value={currentDimension}
            onChange={handleDimensionChange}
            maxLength={920}
            minLength={1}
            className="border mx-2 rounded flex-1 w-full py-2 px-3  outline-none"
          />
          <button onClick={handleAddDimensions}>
            <AddIcon />
          </button>
        </div>
        {data.dimensions?.map((dimension: string, index: number) => (
          <div
            key={index}
            className="flex items-center my-2 px-2 py-3 rounded-md bg-white"
          >
            <label
              htmlFor="dimensions"
              className="block text-gray-700 text-sm font-bold "
            >
              Dimension {index + 1}:
            </label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              value={dimension}
              onChange={handleOldDimensionChange(index)}
              required
              maxLength={920}
              minLength={1}
              className="border mx-2 rounded flex-1 py-2 px-3  outline-none"
            />
            <button onClick={handleDimensionDelete(index)}>
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
