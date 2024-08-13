import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
let locales = ["en", "fa"];

function getLocale(request: NextRequest) {
  const negotiator = new Negotiator({
    headers: { "accept-language": request.headers.get("accept-language")! },
  });
  const languages = negotiator.languages();
  const locale = matchLocale(languages, locales, "en");
  return locale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/favicon.ico") {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
