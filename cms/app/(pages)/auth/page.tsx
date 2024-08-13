import axios from "axios";
import { cookies } from "next/headers";
import Signout from "./Signout";

interface User {
  username: string;
  email: string;
  phone?: string;
  city:
  | "Amman"
  | "Zarqa"
  | "Irbid"
  | "Jerash"
  | "Aqaba"
  | "Ajloun"
  | "Alsalt"
  | "Almafraq"
  | "Altafila"
  | "Alkarek"
  | "Maan"
  | "Madaba"
  | "Alagwar";
  location: string;
  age?: number;
}

const getData = async () => {
  const token: any = cookies().get("token");

  const data = await axios.get(process.env.URL + "/api/users/me", {
    headers:{
      "x-web-token": token.value,
    },
  });

  return data;
};

export default async function Home() {
  const res = await getData();
  const data: User = res.data;

  return (
    <main className="flex capitalize bg-white rounded-md justify-evenly text-gray-700 p-5 font-semibold flex-col flex-1 w-full">
      <p className="my-2 font-sans">Name: <span className="text-primary">{data?.username}</span></p>
      <p className="my-2">Email: <span className="text-primary">{data?.email}</span></p>
      <p className="my-2">city: <span className="text-primary">{data?.city}</span></p>
      <p className="my-2">location: <span className="text-primary">{data?.location}</span></p>
      <p className="my-2">phone: <span className="text-primary">{data?.phone}</span></p>
      <p className="my-2">Age: <span className="text-primary">{data?.age}</span></p>
      <Signout />
    </main>
  );
}
