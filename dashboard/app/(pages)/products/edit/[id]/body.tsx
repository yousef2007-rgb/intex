"use client";
import {
  Category,
  Product,
  InputEvent,
  SubmitEvent,
  Brand,
  CategoryWithId,
  BrandWithId,
  ProductWithId,
} from "@/types/productsTypes";
import React, { useState } from "react";
import Details from "@/components/details";
import DetailsAr from "@/components/detailsAr";
import Pricing from "@/components/pricing";
import Options from "@/components/options";
import AdditionalMedia from "@/components/additionalMedia";
import Varients from "@/components/varients";
import { media as Media } from "@/components/meida";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function add({
  data,
  categories,
  brands,
  id,
}: {
  data: Product;
  categories: CategoryWithId[];
  brands: BrandWithId[];
  id: string;
}) {
  const [formData, setFormData] = useState<Product>({
    title: data.title,
    discription: data.discription,
    lable: data.lable,
    keywords: data.keywords,
    title_ar: data.title_ar,
    discription_ar: data.discription_ar,
    imagesUrls: data.imagesUrls,
    online_price: data.online_price,
    wholesale_price: data.wholesale_price,
    discount: data.discount,
    imageUrl: data.imageUrl,
    category:
      typeof data.category == "string" ? data.category : data.category._id,
    brand: typeof data.brand == "string" ? data.brand : data.brand._id,
    isPublished: data.isPublished,
    isInStock: data.isInStock,
    ageRange: data.ageRange,
    varients: data.varients,
    dimensions: data.dimensions,
    similarProducts: data.similarProducts,
  });

  const router = useRouter();

  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await axios.put(`${process.env.URL}/api/products/${id}`, formData, {
        headers: {
          "x-web-token": token,
        },
      });

      router.push("/products");
    } catch (err: any) {
      setErrorMessage(err.response.data);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-5">
      <Details data={formData} handler={handleChange} />
      <DetailsAr data={formData} handler={handleChange} />
      <Media
        formData={formData}
        setFormData={setFormData}
        defaultImage={`${process.env.URL}/${data.imageUrl}`}
      />
      <AdditionalMedia formData={formData} setFormData={setFormData} />
      <Pricing formData={formData} handleInputChange={handleChange} />
      <Options
        data={formData}
        handler={handleChange}
        categories={categories}
        brands={brands}
        setFormData={setFormData}
      />
      <Varients setFormData={setFormData} formData={formData} />
      <input
        className="capitalize cursor-pointer rounded-md bg-secondary text-white font-bold w-full text-center py-3 my-2"
        type="submit"
        value={"edit"}
      />
      {errorMessage ? (
        <p className="text-red-200 bg-red-400 rounded-md mt-2 p-2">
          {errorMessage}
        </p>
      ) : (
        ""
      )}
    </form>
  );
}
