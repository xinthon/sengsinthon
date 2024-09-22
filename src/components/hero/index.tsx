"use client";

import { Profile } from "@/types/profile.type";
import privateApi from "@/lib/privateApi";
import { cn } from "@/lib/utils";

interface HeroProp {
  className?: string;
}

const fetchMe = (): Promise<Profile | null> => {
  return privateApi
    .get("api/me")
    .then((rs) => rs.data)
    .catch((er) => null);
};

export default function Hero({ className }: HeroProp) {
  return (
    <section
      className={cn("relative flex items-center justify-center", className)}
    >
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="">.NET Developer</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Crafting Scalable Web Solution
        </p>
      </div>
    </section>
  );
}
