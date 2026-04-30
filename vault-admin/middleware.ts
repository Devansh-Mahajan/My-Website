import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const PUBLIC = [
  '/login',
  '/forgot-password',
  '/reset-password',
  '/api/auth/',
  '/_next/',
  '/favicon.ico',
]

const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? 'fallback-dev-secret')

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (PUBLIC.some(p => pathname.startsWith(p))) return NextResponse.next()

  const session = request.cookies.get('vault-session')
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    await jwtVerify(session.value, secret)
    return NextResponse.next()
  } catch {
    const res = NextResponse.redirect(new URL('/login', request.url))
    res.cookies.delete('vault-session')
    return res
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
