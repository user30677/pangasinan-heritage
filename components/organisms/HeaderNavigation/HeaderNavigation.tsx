"use client";

import { usePathname } from "next/navigation";
import NavigationItem from "@/components/molecules/NavigationItem/NavigationItem";

export default function HeaderNavigation() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="site-logo">
          Pangasinan Heritage
        </a>

        <nav
          className="site-navigation"
          aria-label="Main navigation"
        >
          <NavigationItem
            label="Home"
            href="/"
            active={pathname === "/"}
          />

          <NavigationItem
            label="Heritage Sites"
            href="/heritage"
            active={pathname === "/heritage"}
          />

          <NavigationItem
            label="About"
            href="/about"
            active={pathname === "/about"}
          />
        </nav>
      </div>
    </header>
  );
}