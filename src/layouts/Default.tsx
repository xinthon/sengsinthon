"use client";

import WithFooter from "@/components/containers/withFooter";
import WithNavBar from "@/components/containers/withNavBar";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full overflow-auto no-scrollbar">
      <WithNavBar />
      <main className="container mx-auto max-w-4xl py-10 scroll-smooth">
        {children}
      </main>
      <WithFooter />
    </div>
  );
}
