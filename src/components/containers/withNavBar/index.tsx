"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
// import { LocaleSwitcher } from "@/components/locale-switcher"; // Uncomment if needed
import { NavbarItem } from "./navBarItem";
import { useLocale, useTranslations } from "next-intl";
import data from "./navbar-data.json";

// Define type for NavItem
export type NavItem = {
  link: string;
  title: string;
};

// Custom hook to handle scroll and navbar visibility
const useNavbarVisibility = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = scrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;

      // Update navbar visibility based on scroll direction or if near the top
      setShowNavbar(isScrollingUp || isAtTop);
      setScrollPos(currentScrollPos);
    };

    // Throttle scroll event to improve performance
    const throttledHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [scrollPos]);

  return showNavbar;
};

export default function WithNavBar() {
  const locale = useLocale();
  const t = useTranslations("navbar");
  const routes: NavItem[] = data;

  // Use custom hook to determine if navbar should be shown
  const showNavbar = useNavbarVisibility();

  return (
    <nav
      className={`rounded-lg sticky backdrop-blur-sm top-7 right-0 z-50 mx-auto sm:flex sm:flex-row flex-col max-w-4xl px-8 lg:justify-center transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-label="Main navigation"
    >
      <div className="h-[60px] relative sm:mr-auto flex items-center justify-start">
        <Logo />
        <ModeToggle />
        {/* Uncomment if LocaleSwitcher is needed */}
        {/* <LocaleSwitcher /> */}
      </div>

      <div className="h-[60px] items-center flex space-x-6 px-2">
        {routes.map((item) => (
          <NavbarItem href={`${locale}/${item.link}`} key={item.link}>
            <span>{t(item.link)}</span>
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
}
