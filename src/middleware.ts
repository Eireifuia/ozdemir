import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// GEÇİCİ: site güncellenirken tüm ziyaretçileri bakım sayfasına yönlendirir.
// İşimiz bitince bu dosyayı sil.
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL('/maintenance', request.url));
}

export const config = {
  matcher: ['/((?!maintenance|api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)'],
};
