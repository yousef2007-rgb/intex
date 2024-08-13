import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Provider } from "../AppContext";
import { Suspense } from "react";
import Loading from "../loading";
import Backbutton from "./backbutton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1200px] flex flex-col min-h-[70vh] mx-auto">
      <Provider>
        <Header />
        <Backbutton />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </Provider>
    </div>
  );
}
