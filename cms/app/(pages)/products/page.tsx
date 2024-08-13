import SearchIcon from "@/public/assets/icons/searchIcon";
import axios from "axios";
import { Product } from "@/types/productsTypes";
import PageBody from "./pageBody";

const getProducts = async () => {
  const data = await axios.get(`${process.env.URL}/api/products`);
  return data.data;
};

export default async function Products() {
  const data: Product[] = await getProducts();
  return (
    <main className="flex flex-col flex-1 h-full ">
      <PageBody data={data} />
    </main>
  );
}
