"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const singOut = async () => {
  return await axios.delete("/api/auth/login");
};

export default function signout() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        singOut().then(() => router.push("/signin"));
      }}
      className=" p-2  capitalize text-center w-full mx-auto bg-primary rounded-md  text-white font-semibold border-2 border-primary hover:bg-white hover:text-primary my-2 "
    >
      Signout
    </button>
  );
}
