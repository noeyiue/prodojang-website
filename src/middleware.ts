import { jwtVerify } from 'jose';
import { NextResponse, NextRequest } from 'next/server';
import { getUserAccount } from './app/api/get-user/route';


const jwtSecret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

export async function middleware(request: NextRequest) {
  
  if (request.nextUrl.pathname.startsWith('/member')) {
    const accessToken = request.cookies.get('accessToken');
    if (!accessToken) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('refreshToken');
      return response;
    }

    try {
      await jwtVerify(accessToken.value, jwtSecret);      
      return NextResponse.next();
    } catch (error: any) {
      if (error.name === 'JWTExpired') {
        // const refreshToken = request.cookies.get('refreshToken');
        // if (!refreshToken) {
        //   const response = NextResponse.redirect(new URL('/login', request.url));
        //   response.cookies.delete('accessToken');
        //   response.cookies.delete('refreshToken');
        //   return response;
        // }
        // const headers = new Headers({
        //   'Cookie': `${refreshToken.name}=${refreshToken.value}; `,
        // })
        // const responseAccessToken = await fetch('http://localhost:3003/refresh-token', {
        //   headers,
        // });
        // const resJson = await responseAccessToken.json();
        // if (resJson.success) {
        //   const response = NextResponse.next();
        //   response.cookies.set({
        //     name: 'accessToken',
        //     value: resJson.accessToken,
        //     maxAge: 24 * 60 * 60,
        //     httpOnly: true,
        //   });
        //   return response;
        // }
        return NextResponse.redirect(new URL('/login', request.url));
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith('/login')) {
    const accessToken = request.cookies.get('accessToken');
    const response = NextResponse.next();
    response.cookies.delete('accessToken');
    response.cookies.delete('refreshToken');

    if (accessToken) {
      if (await jwtVerify(accessToken.value, jwtSecret)) {
        return NextResponse.redirect(new URL('/member/dashboard', request.url));
      }
    }

    return response;
  }
}

export const config = {
  matcher: [
    '/member/:path*',
    '/login/:path*',
  ],
}