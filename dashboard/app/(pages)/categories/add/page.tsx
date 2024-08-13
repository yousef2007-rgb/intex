"use client";
import {
  Category,
  Product,
  InputEvent,
  SubmitEvent,
} from "@/types/productsTypes";
import React, { useState } from "react";
import Details from "@/components/details";
import DetailsAr from "@/components/detailsAr";
import { media as Media } from "@/components/meida";
import axios from "axios";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";

export default function add() {
  const [formData, setFormData] = useState<Category>({
    title: "",
    discription: "",
    lable: "",
    keywords: "",
    title_ar: "",
    imageUrl: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await axios.post(process.env.URL + "/api/categories", formData, {
        headers: {
          "x-web-token": token,
        },
      });

      router.push("/categories");
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
