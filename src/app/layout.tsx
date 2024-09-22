import React from "react";

interface RootLayoutProp {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProp>) {
  return <>{children}</>;
}
