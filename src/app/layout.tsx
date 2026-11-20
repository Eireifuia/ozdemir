import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import MobileActionBar from "@/components/MobileActionBar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LocaleProvider } from "@/i18n/client";
import { localeMeta } from "@/i18n/config";
import { getLocale, makeT, uiDictionaries } from "@/i18n/server";
import { siteDescription, siteName, siteTitle, siteUrl } from "@/data/site";

// next/font yazı tiplerini derleme sırasında indirip kendi sunucumuzdan sunar;
// ziyaretçi tarayıcısı Google'a istek göndermez. Türkçe karakterler için latin-ext şart.
// Başlıklar karakterli ve sıcak bir grotesk, gövde yumuşak hatlı okunaklı bir sans.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = makeT(locale);
  const title = t(siteTitle);
  const description = t(siteDescription);
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: siteName,
    openGraph: {
      siteName,
      locale: localeMeta[locale].ogLocale,
      type: "website",
      title,
      description,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = makeT(locale);
  const ui = locale === "tr" ? {} : uiDictionaries[locale];
  return (
    <html lang={locale}>
      <body
        className={`${bricolage.variable} ${figtree.variable} font-sans antialiased`}
      >
        <LocaleProvider locale={locale} ui={ui}>
          <a
            href="#icerik"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:text-cream focus:px-5 focus:py-3 focus:text-sm focus:font-medium"
          >
            {t("İçeriğe geç")}
          </a>
          <div className="pt-24 md:pt-28 pb-14 md:pb-0">
            {children}
          </div>
          <MobileActionBar />
          <LanguageSwitcher />
        </LocaleProvider>
      </body>
    </html>
  );
}
