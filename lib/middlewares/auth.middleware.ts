import { MiddlewareFactory } from "@/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getTokenAction } from "@/app/[locale]/actions";

const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

const isPublicRoute = (pathname: string) => {
  return PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
};

const authMiddleware: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    // Skip authentication for public routes
    if (isPublicRoute(pathname)) {
      return NextResponse.next();
    }

    // For API routes that don't require authentication, we can skip
    if (pathname.startsWith("/api/auth")) {
      return NextResponse.next();
    }

    try {
      // Get the authentication token
      const tokenCookie = await getTokenAction();

      // If no token, redirect to login
      if (!tokenCookie) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
      }

      // Has token - verify it
      // token verification implementation

      // Token exists, allow the request to proceed
      return NextResponse.next();
    } catch (error) {
      // If there's an error checking auth, redirect to login
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  };
};

export default authMiddleware;
