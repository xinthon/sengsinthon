import { ThemeProvider as NextThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

interface ThemeProviderProp extends PropsWithChildren {}

export default function ThemeProvider({ children }: ThemeProviderProp) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
