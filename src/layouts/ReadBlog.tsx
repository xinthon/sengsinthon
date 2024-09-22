"use client";

import React, { PropsWithChildren } from "react";
import DefaultLayout from "./Default";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ReadBlogLayout({ children }: PropsWithChildren) {
  const { back } = useRouter();
  return (
    <DefaultLayout>
      <Button onClick={back}>Back</Button>
      {children}
    </DefaultLayout>
  );
}
