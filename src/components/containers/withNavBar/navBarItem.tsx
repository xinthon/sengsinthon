"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export interface NavbarItemProps {
  className?: string;
  activeClassName?: string;
  href: string;
  children: React.ReactNode;
}

export function NavbarItem({
  className,
  activeClassName = "active",
  href,
  children,
}: NavbarItemProps) {
  return (
    <Link className={cn(className)} href={`/${href}`} passHref locale="en">
      {children}
    </Link>
  );
}
