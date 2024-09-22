import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration mismatch by checking if the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing until mounted to avoid flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <Button
      size={"icon"}
      variant={"link"}
      className="flex items-center justify-center cursor-pointer transition"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Sun icon */}
      <Sun
        className={cn(
          `h-[1.2rem] w-[1.2rem] transition-transform duration-300`,
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0 hidden"
        )}
      />

      {/* Moon icon */}
      <Moon
        className={cn(
          `h-[1.2rem] w-[1.2rem] transition-transform duration-300`,
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0 hidden"
        )}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
