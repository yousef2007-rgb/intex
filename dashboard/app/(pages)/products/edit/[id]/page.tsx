import React from "react";
import Body from "./body";
import axios from "axios";

const getData = async (id: string) => {
  const data = await axios.get(`${process.env.URL}/api/products/${id}`);

  return data.data;
};

const getCategories = async () => {
  const data = await axios.get(`${process.env.URL}/api/categories`);

  return data.data;
};

const getBrands = async () => {
  const data = await axios.get(`${process.env.URL}/api/brands`);

  return data.data;
};

export default async function page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <Body id={params.id} data={data} categories={categories} brands={brands} />
  );
}
