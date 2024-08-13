"use client";
import axios, { Axios } from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  type InputEvent = React.ChangeEvent<HTMLInputElement>;
  type SubmitEvent = React.SyntheticEvent<HTMLFormElement>;

  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e: InputEvent) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handlePasswordChange = (e: InputEvent) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const tokenReq = await axios.post(
        `${process.env.URL}/api/auth/?isAdmin=true`,
        userData
      );
      localStorage.setItem("token", tokenReq.data);
      router.push("/dashboard");
    } catch (err: any) {
      setErrorMessage(err.response.data);
    }
  };
  return (
    <main className=" flex flex-col items-center justify-center w-screen min-h-screen">
      {/* <div className=" flex p-5 h-fit">
        <img src="/logo.png" alt="logo" className="h-fit w-fit" />
      </div> */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  w-full p-5 text-xl  w-50vw max-w-[400px] min-w-[300px] shadow-xl border rounded-xl mx-auto"
      >
        <h1 className="capitalize my-2 font-bold !text-4xl">Sign in</h1>
        <label className="font-bold mt-2 capitalize" htmlFor="email">
          Email
        </label>
        <input
          className=" border-2 my-2 rounded-md h-16 px-2"
          id="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleEmailChange}
        />
        <label className="font-bold mt-2 capitalize" htmlFor="password">
          Password
        </label>
        <input
          className=" border-2 my-2 rounded-md h-16 px-2"
          id="password"
          placeholder="Enter the password"
          type="password"
          onChange={handlePasswordChange}
        />
        <input
          type="submit"
          value={"signin"}
          className="bg-blue-800 rounded-full p-2 h-14 mt-5 text-white font-bold rounded-md "
        />
        {errorMessage ? (
          <p className="text-red-200 bg-red-400 rounded-md mt-2 p-2">
            {errorMessage}
          </p>
        ) : (
          ""
        )}
      </form>
    </main>
  );
}
