"use client";
import {
  Category,
  Product,
  InputEvent,
  SubmitEvent,
  Brand,
  CategoryWithId,
  BrandWithId,
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
  categories,
  brands,
}: {
  categories: CategoryWithId[];
  brands: BrandWithId[];
}) {
  const [formData, setFormData] = useState<Product>({
    title: "",
    discription: "",
    lable: "",
    keywords: "",
    title_ar: "",
    discription_ar: "",
    imagesUrls: [],
    online_price: 0,
    wholesale_price: 0,
    discount: 0,
    imageUrl: "",
    category: categories[0]._id,
    brand: brands[0]._id,
    isPublished: true,
    isInStock: true,
    ageRange: "0-2",
    varients: [],
    dimensions: [],
    similarProducts: [],
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

      await axios.post(process.env.URL + "/api/products", formData, {
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
        defaultImage={null}
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
        className="capitalize cursor-pointer rounded-md bg-primary text-white font-bold w-full text-center py-3 my-2"
        type="submit"
        value={"add"}
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
