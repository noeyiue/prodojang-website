import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/member')) {
    const accessToken = request.cookies.get('accessToken');
    if (!accessToken) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('refreshToken');
      return response;
    }

    try {
      
    } catch (error: any) {
      
    }
  }
  if (request.nextUrl.pathname.startsWith('/login')) {
    const accessToken = request.cookies.get('accessToken');

    
  }
}

export const config = {
  matcher: [
    '/member/:path*',
    '/login/:path*',
  ],
}