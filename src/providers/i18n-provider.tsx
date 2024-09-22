import { PropsWithChildren } from "react";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";

export default function I18nProvider({ children }: PropsWithChildren) {
  const locale = useLocale();
  const messages = useMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
