import SearchIcon from "@/public/assets/icons/searchIcon";
import axios from "axios";
import { Order } from "@/types/productsTypes";
import PageBody from "./pageBody";

const getProducts = async () => {
  const data = await axios.get(`${process.env.URL}/api/orders`);
  return data.data;
};

export default async function Products() {
  const data: Order[] = await getProducts();
  return (
    <main className="flex m-5 flex-col flex-1 h-full ">
      <PageBody data={data} />
    </main>
  );
}
