import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const switchLocale = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <div className="flex items-center">
      <Button
        asChild
        onClick={() => switchLocale("en")}
        disabled={isPending}
        variant={"ghost"}
        size={"icon"}
        className={"duration-300"}
      >
        <p
          className={cn(
            localActive == "en" ? "underline" : "",
            "cursor-pointer select-none"
          )}
        >
          en
        </p>
      </Button>

      <Button
        asChild
        onClick={() => switchLocale("kh")}
        disabled={isPending}
        variant={"ghost"}
        size={"icon"}
        className={"duration-300"}
      >
        <p
          className={cn(
            localActive == "kh" ? "underline" : "",
            "cursor-pointer select-none"
          )}
        >
          kh
        </p>
      </Button>
    </div>
  );
}
