import axios from "axios";
import React from "react";
import ProductList from "../../../components/List";
import { Category, CategoryWithId } from "@/types/productsTypes";

const getProductsData = async () => {
  const data = await axios.get(`${process.env.URL}/api/categories`);
  return data.data;
};

const dashboard = async () => {
  const data: CategoryWithId[] = await getProductsData();
  return (
    <main className="w-full">
      <ProductList products={data} />
    </main>
  );
};

export default dashboard;
