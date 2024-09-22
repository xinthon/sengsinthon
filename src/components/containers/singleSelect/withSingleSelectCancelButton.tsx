"use client";

import { Button } from "@/components/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import React, { PropsWithChildren } from "react";

export interface WithSingleSelectCancelButtonProp extends PropsWithChildren {
  onClick: () => void;
}

export default function WithSingleSelectCancelButton({
  children,
  onClick,
}: WithSingleSelectCancelButtonProp) {
  return (
    <Button
      onClick={onClick}
      size={"icon"}
      variant={"outline"}
      className="flex items-center justify-center rounded-full focus:outline-none"
    >
      {children ?? <Cross1Icon />}
    </Button>
  );
}
