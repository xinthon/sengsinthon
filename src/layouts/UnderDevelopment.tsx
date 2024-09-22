"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface UnderDevelopmentLayoutProp {
  children: ReactNode;
  className?: string;
}

export default function UnderDevelopmentLayout({
  children,
  className,
}: UnderDevelopmentLayoutProp) {
  return (
    <div
      className={cn(
        className,
        "h-screen w-full flex items-center justify-center"
      )}
    >
      {children}
    </div>
  );
}
