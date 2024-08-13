import React from "react";
import Body from "./body";
import axios from "axios";

const getCategories = async () => {
  const data = await axios.get(`${process.env.URL}/api/categories`);

  return data.data;
};

const getBrands = async () => {
  const data = await axios.get(`${process.env.URL}/api/brands`);

  return data.data;
};

export default async function page() {
  const categories = await getCategories();
  const brands = await getBrands();

  return <Body categories={categories} brands={brands} />;
}
