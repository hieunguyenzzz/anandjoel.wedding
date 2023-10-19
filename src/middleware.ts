import { NextRequest } from "next/server"


let locales = ['en', 'vi']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  return locales[0]
}
const paths = [
  '/bites',
  '/explore',
  '/qa',
  '/story',
  '/travel',
  '/event',
  '/admin',
]
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname, } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return
  if (!paths.includes(pathname)) return

  const locale = getLocale(request)
  // Redirect if there is no locale
  // const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'

    /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
    '/((?!api|_next/static|admin|_next/image|favicon.ico).*)',
  ],
}