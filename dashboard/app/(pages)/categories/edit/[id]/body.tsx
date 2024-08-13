"use client";
import React, { useState } from "react";

import { Category } from "@/types/productsTypes";
import { InputEvent } from "@/types/productsTypes";
import { SubmitEvent } from "@/types/productsTypes";

import axios from "axios";

import Details from "@/components/details";
import DetailsAr from "@/components/detailsAr";
import { media as Media } from "@/components/meida";
import { useRouter } from "next/navigation";

export default function body({ data, id }: { data: Category; id: string }) {
  const [formData, setFormData] = useState<Category>({
    title: data.title,
    discription: data.discription,
    lable: data.lable,
    keywords: data.keywords,
    title_ar: data.title_ar,
    discription_ar: data.title_ar,
    imageUrl: data.imageUrl,
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
      const token =
        window != undefined ? localStorage.getItem("token") : undefined;

      await axios.put(`${process.env.URL}/api/categories/${id}`, formData, {
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
        defaultImage={`${process.env.URL}/${data.imageUrl}`}
      />
      <input
        className="capitalize cursor-pointer rounded-md bg-primary text-white font-bold w-full text-center py-3 my-2"
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
