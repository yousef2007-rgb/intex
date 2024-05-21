"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface FormData {
    email: string;
    password: string;
}

export default function index() {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (event: any) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const payload: any = { email: formData.email, password: formData.password };
        try {
            await axios.post("/api/auth/login", payload);
            router.push("/");
        } catch (err: any) {
            if (err.response.status == 400) {
                setErrorMessage(err.response.data);
            } else {
                setErrorMessage(`${err.response.data} try again`)
            }
        }
    };

    return (
        <div className="w-[50vw] ml-auto flex flex-col justify-center !font-sans items-center text-left h-screen bg-gray-100">
            <form
                className="max-w-[405px] w-full mx-2"
                onSubmit={handleSubmit}
            >
                <h1 className="text-black !font-sans text-7xl font-bold mt-5 w-full">Welcome to</h1>
                <h2 className="text-black !font-sans text-7xl font-bold mb-5 text-primary w-full">Kids<span className="text-[#BD1A1A]">Marty</span></h2>
                <div className="flex flex-col text-md font-semibold my-5 w-full ">
                    <label htmlFor="email" className="text-gray-700">Email:</label>
                    <input
                        className="outline-none border-b font-normal border-gray-400 !bg-transparent  my-1 p-2 "
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col text-md font-semibold my-5">
                    <label htmlFor="password" className="text-gray-700">Password:</label>
                    <input
                        className="outline-none font-normal my-1 p-2 bg-transparent border-b border-gray-400"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    className=" p-2 capitalize text-center w-full bg-primary rounded-md  text-white font-semibold border-2 mt- border-primary hover:bg-transparent hover:text-primary"
                    type="submit"
                >
                    sign in
                </button>
            </form>
            {errorMessage ? (
                <div className="w-full font-semibold capitalize bg-red-400 text-white p-2 rounded-md  my-2 max-w-[405px] mx-2">
                    {errorMessage}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
