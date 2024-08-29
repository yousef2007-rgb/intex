export const dynamic = "force-dynamic";
import axios from "axios";
import React from "react";
import { getCookies } from "next-client-cookies/server";
import { redirect } from "next/navigation";
import Logout from "./logout";
import axiosInstance from "@/lib/axiosInstance";

const getUserData = async (token: string) => {
  const res = await axiosInstance.get(`${process.env.URL}/api/users/me`, {
    headers: {
      "x-web-token": token,
      "Cache-Control": "no-cache",
    },
  });

  return res.data;
};

async function UserPage() {
  const cookies = getCookies();
  const token = cookies.get("verification-token-kidz-marty");
  let data;
  if (token) {
    data = await getUserData(token);
  } else {
    redirect("/signin");
  }

  return (
    <div className="flex flex-col items-center px-5 justify-center h-fit">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex flex-col w-full bg-gray-100 text-lg font-semibold rounded-md p-5 shadow-md max-w-xl">
        <div className="mb-4 capitalize">
          <label htmlFor="username" className="text-lg font-semibold">
            Username:
          </label>{" "}
          {data.username}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-lg font-semibold">
            Email:
          </label>{" "}
          {data.email}
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="text-lg font-semibold">
            City:
          </label>{" "}
          {data.city}
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="text-lg font-semibold">
            Location:
          </label>{" "}
          {data.location}
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="text-lg font-semibold">
            Age:
          </label>{" "}
          {data.age}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="text-lg font-semibold">
            Phone:
          </label>{" "}
          {data.phone}
        </div>
        <Logout />
      </div>
    </div>
  );
}

export default UserPage;
