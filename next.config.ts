import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // HTTPS'e yalnızca canlıda anlamlı; yerelde (http) tarayıcı yok sayar
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during build
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // Eski adresler yeni Türkçe adreslere kalıcı yönlendirilir
    return [
      { source: "/ozgecmis", destination: "/hakkinda", permanent: true },
      { source: "/contact", destination: "/iletisim", permanent: true },
      { source: "/tedaviler/yer-tutucular", destination: "/tedaviler/cocuklarda-dis-cekimi-yer-tutucu", permanent: true },
      { source: "/tedaviler/yer-tutucu-band-loop-crown-loop", destination: "/tedaviler/cocuklarda-dis-cekimi-yer-tutucu", permanent: true },
      { source: "/tedaviler/yer-tutucu-lingual-ark-nance-tpa", destination: "/tedaviler/cocuklarda-dis-cekimi-yer-tutucu", permanent: true },
      { source: "/tedaviler/yer-tutucu-distal-shoe-hareketli", destination: "/tedaviler/cocuklarda-dis-cekimi-yer-tutucu", permanent: true },
      { source: "/tedaviler/dolayli-pulpa-kaplamasi", destination: "/tedaviler/kuafaj-tedavileri", permanent: true },
      { source: "/tedaviler/dogrudan-pulpa-kaplamasi", destination: "/tedaviler/kuafaj-tedavileri", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
