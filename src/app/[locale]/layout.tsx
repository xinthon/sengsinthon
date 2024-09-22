import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../globals.css";
import BaseLayout from "@/layouts/Base";

import { unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import UnderDevelopmentLayout from "@/layouts/UnderDevelopment";

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
        {process.env.NODE_ENV == "development" ? (
          <UnderDevelopmentLayout>
            <div className="text-center">
              <h1>Our Website is Coming Soon!</h1>
              <div className="construction-icon">🚧</div>
              <p>Stay tuned for something amazing.</p>
              <p>
                Contact:{" "}
                <a href="mailto:sengsinthon.dev@gmail.com">
                  sengsinthon.dev@gmail.com
                </a>
              </p>
            </div>
          </UnderDevelopmentLayout>
        ) : (
          <BaseLayout>{children}</BaseLayout>
        )}
      </body>
    </html>
  );
}
