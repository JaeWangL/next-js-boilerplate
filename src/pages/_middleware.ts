import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // If the user is not logged in, redirect to 'auth/signIn' except for the signIn page itself
  // to avoid redirect loops or when accessing public resources (e.g., API calls, static files)
  if (!token && pathname !== '/auth/signIn') {
    const url = req.nextUrl.clone();
    url.pathname = '/auth/signIn';
    return NextResponse.redirect(url);
  }

  // If the user is logged in and tries to access the 'auth/signIn' page, redirect them to the home page
  if (token && pathname === '/auth/signIn') {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
