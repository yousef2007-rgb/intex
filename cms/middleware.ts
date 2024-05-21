import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = cookies().get("token");

  if (!token?.value) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }else{
  return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth"],
};
