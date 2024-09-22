import { Button } from "@/components/ui/button";
import React, { PropsWithChildren } from "react";

export interface WithSingleSelectButtonProp extends PropsWithChildren {
  onClick: () => void;
  variant?: "default" | "outline";
}

export default function WithSingleSelectButton({
  children,
  onClick,
  variant,
}: WithSingleSelectButtonProp) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      size={"icon"}
      className="flex items-center justify-center rounded-full focus:outline-none px-9"
    >
      {children}
    </Button>
  );
}
