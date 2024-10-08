import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("token");
  if (!token?.value) {
  }
  return (
    <html lang="en">
      <body
        className={
          "font-sans bg-gradient-page bg-no-repeat bg-size-cover min-h-screen"
        }
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
