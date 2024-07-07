import "./globals.css";
import { CookiesProvider } from "next-client-cookies/server";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <CookiesProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </CookiesProvider>
      </body>
    </html>
  );
}
