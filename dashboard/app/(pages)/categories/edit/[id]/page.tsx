import { Category } from "@/types/productsTypes";
import axios from "axios";
import React from "react";
import Body from "./body";

const getData = async (id: string) => {
  const data = await axios.get(`${process.env.URL}/api/categories/${id}`);

  return data.data;
};

export default async function page({ params }: { params: { id: string } }) {
  const data: Category = await getData(params.id);
  return <Body data={data} id={params.id} />;
}
