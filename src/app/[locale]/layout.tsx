import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../globals.css";
import BaseLayout from "@/layouts/Base";

import { unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seng Sinthon",
  description: "Software Developer",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface I18nLayoutProp {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function I18nLayout({
  children,
  params: { locale },
}: Readonly<I18nLayoutProp>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
