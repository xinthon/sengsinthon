import WithSwoosh from "@/components/containers/withSwoosh";
import WithTreeCanvas from "@/components/containers/withTreeCanvas";
import I18nProvider from "@/providers/i18n-provider";
import ThemeProvider from "@/providers/them-provider";
import { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <WithTreeCanvas></WithTreeCanvas>
        {children}
        <WithSwoosh></WithSwoosh>
      </I18nProvider>
    </ThemeProvider>
  );
}
