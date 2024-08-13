import axios from "axios";
import React from "react";
import ProductList from "../../../components/List";
import { Product, ProductWithId } from "@/types/productsTypes";

const getProductsData = async () => {
  const data = await axios.get(`${process.env.URL}/api/products`);
  return data.data;
};

const dashboard = async () => {
  const data: ProductWithId[] = await getProductsData();
  console.log(data);

  return (
    <main className="w-full">
      <ProductList products={data} />
    </main>
  );
};

export default dashboard;
