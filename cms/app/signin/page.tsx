import React from "react";
import SignInForm from "@/components/signinForm";

export default function Signin() {
  return (
    <main className="flex flex-col justify-center items-center w-screen min-h-screen bg-hero bg-no-repeat bg-cover">
      <SignInForm />
    </main>
  );
}
