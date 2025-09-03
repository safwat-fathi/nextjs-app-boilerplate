import { MiddlewareFactory } from "@/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getTokenAction } from "@/app/[locale]/actions";

// Define user roles
type Role = "admin" | "user" | "guest";

// Define route permissions
const ROUTE_PERMISSIONS: Record<string, Role[]> = {
  "/admin": ["admin"],
  "/dashboard": ["admin", "user"],
  "/profile": ["admin", "user"],
};

const rbacMiddleware: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    // Skip RBAC for routes that don't require it
    const protectedRoutes = Object.keys(ROUTE_PERMISSIONS);
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route),
    );

    if (!isProtectedRoute) {
      return NextResponse.next();
    }

    try {
      // Get the user token/role
      // In a real implementation, you would decode the token to get the user role
      const tokenCookie = await getTokenAction();

      if (!tokenCookie) {
        // No token means guest user
        const requiredRoles = ROUTE_PERMISSIONS[pathname] || [];
        if (requiredRoles.length > 0 && requiredRoles.includes("guest")) {
          return NextResponse.next();
        }

        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
      }

      // In a real implementation, you would decode the JWT token to get the user role
      // For now, we'll simulate getting the user role
      const userRole: Role = "user"; // This would come from token decoding

      // Check if user has required role for this route
      const requiredRoles = ROUTE_PERMISSIONS[pathname] || [];
      if (requiredRoles.length > 0 && !requiredRoles.includes(userRole)) {
        // User doesn't have required role
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }

      // User has required role, allow request to proceed
      return NextResponse.next();
    } catch (error) {
      // If there's an error checking permissions, redirect to login
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  };
};

export default rbacMiddleware;
