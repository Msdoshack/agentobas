import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes ONLY for unauthenticated users (login/signup pages)
const authRoutes = ["/login", "/signup"];

// Routes ONLY for authenticated users
const protectedRoutes = ["/admin"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get("auth_token")?.value;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Redirect to login if accessing protected route without session
  if (isProtectedRoute && !sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to properties if logged-in user tries to access login/signup
  if (isAuthRoute && sessionCookie) {
    return NextResponse.redirect(new URL("/properties", request.url));
  }

  return NextResponse.next();
}

// 3. Configure the matcher to only run middleware on relevant paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (Next.js internal API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // Routes ONLY for unauthenticated users
// const authRoutes = ["/login", "/signup"];

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const sessionCookie = request.cookies.get("auth_token")?.value;

//   const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

//   // Protect admin routes
//   if (pathname.startsWith("/admin") && !sessionCookie) {
//     const loginUrl = new URL("/login", request.url);

//     loginUrl.searchParams.set("from", pathname);

//     return NextResponse.redirect(loginUrl);
//   }

//   // Prevent logged-in users from visiting login/signup
//   if (isAuthRoute && sessionCookie) {
//     return NextResponse.redirect(new URL("/properties", request.url));
//   }

//   return NextResponse.next();
// }

// // Middleware ONLY runs on these routes
// export const config = {
//   matcher: ["/admin/:path*", "/login", "/signup"],
// };
