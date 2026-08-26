import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dr. Ömer Özdemir | Çocuk Diş Kliniği",
  description: "Dr. Ömer Özdemir ile çocuklarınız için özel pedodonti (çocuk diş hekimliği) hizmetleri. Dijital diş hekimliği ve yapay zeka destekli modern yaklaşım.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <div className="pt-24 md:pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
