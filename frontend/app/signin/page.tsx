"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import axios from "axios";

const page = (props: {}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const checkout = searchParams.get("checkout");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cookies = useCookies();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const token = cookies.get("verification-token-kidz-marty");
    if (token) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const token = await axios.post(`${process.env.URL}/api/auth`, {
        email: email,
        password: password,
      });
      console.log(token);
      cookies.set("verification-token-kidz-marty", token.data);
      setIsLoading(false);
      if (checkout) {
        router.push("/cart/?checkout=true");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setIsLoading(false);
      if (err.response.status == 400) {
        setError(err.response.data);
      } else {
        alert("something went wrong try again");
      }
    }
  };

  return (
    <div className="flex flex-col w-full justify-center min-h-screen bg-hero bg-no-repeat bg-cover">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col justify-center  shadow-md w-[90%] sm:rounded-none rounded-md mx-auto sm:ml-auto sm:mr-0 sm:w-[50vw] h-fit sm:min-h-screen"
      >
        <h1 className="text-xl font-bold">Sign In</h1>

        <div className="mt-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 outline-none border rounded-md focus:border-blue-500"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Password</label>
          <div className="flex pr-2 items-center border  rounded-md">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full py-2 outline-none pl-2 focus:border-blue-500"
              required
            />
            <span
              className=" cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className="fas fa-eye-slash relative text-gray-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_137_5)">
                      <path
                        d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                        fill="black"
                      />
                      <line
                        x1="21.5032"
                        y1="1.55615"
                        x2="0.503185"
                        y2="20.5562"
                        stroke="url(#paint0_linear_137_5)"
                        stroke-width="1.5"
                      />
                      <line
                        x1="22.5032"
                        y1="2.55615"
                        x2="1.50318"
                        y2="21.5562"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_137_5"
                        x1="10.5"
                        y1="10.5"
                        x2="9.82909"
                        y2="9.75846"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <clipPath id="clip0_137_5">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
              ) : (
                <i className="fas fa-eye relative text-gray-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_137_2)">
                      <path
                        d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_137_2">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
              )}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-orange flex items-center justify-center text-white font-bold p-2 rounded-md w-full hover:bg-white border-2 border-orange hover:text-orange transition-all"
          >
            {!isLoading ? (
              "Sign In"
            ) : (
              <div className="animate-spin rounded-full h-8 w-8  border-t-4 border-4 border-gray-300 border-t-gray-500"></div>
            )}
          </button>
        </div>

        {error != "" ? (
          <span className="bg-red-300 my-5 text-red-500 p-5 w-full text-center rounded-md">
            {error}
          </span>
        ) : (
          ""
        )}
        <span className="capitalize mt-5">
          don't have an account?{" "}
          <Link className="text-blue-400 hover:underline" href={"/signup"}>
            sign up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default page;
