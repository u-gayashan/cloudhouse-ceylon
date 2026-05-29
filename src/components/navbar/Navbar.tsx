"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export function Navbar() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/">
          <Logo />
        </Link>
        <DesktopNavbar />
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`burger ${menuOpen ? "open" : ""}`}>
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>
      <MobileNavbar open={menuOpen} />
    </header>
  );
}
