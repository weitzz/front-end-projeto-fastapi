
//export { default } from 'next-auth/middleware';
import { NextResponse,NextRequest } from 'next/server';




export default function middleware(req: NextRequest) {
  
    const user = req.cookies.get('next-auth.session-token')?.value;
  const isLoginPage = req.nextUrl.pathname === '/';

  if (!user) {
    if (isLoginPage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (isLoginPage) {
    return NextResponse.redirect(new URL('/medicamentos', req.url));
  }
}




export const config = { matcher: ['/', "/medicamentos/:path*"] }