import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Exclude the login page from authentication check
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next()
  }

  // Check if user is authenticated (you might want to use a more secure method in production)
  const isAuthenticated = request.cookies.has("authenticated")

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

