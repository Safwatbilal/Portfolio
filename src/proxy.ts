import { NextResponse, type NextRequest } from "next/server";

// Unprefixed paths (/, old /work/x links) go to the visitor's language.
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const locale = /^\s*ar\b/i.test(accept) ? "ar" : "en";
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname === "/" ? "" : url.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/", "/work/:slug*"],
};
