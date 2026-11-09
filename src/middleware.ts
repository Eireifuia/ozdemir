import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// GEÇİCİ: site güncellenirken tüm ziyaretçileri bakım sayfasına yönlendirir.
// Sadece canlı (production) ortamda çalışır, yerel geliştirmede (npm run dev)
// devre dışı kalır. İşimiz bitince bu dosyayı sil.
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }
  return NextResponse.rewrite(new URL('/maintenance', request.url));
}

export const config = {
  matcher: ['/((?!maintenance|api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)'],
};
