"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNavbar() {
  const pathname = usePathname() || "/";
  const is = (p: string) =>
    p === "/" ? pathname === "/" : pathname.startsWith(p);

  return (
    <nav className="bottom-nav md:hidden">
      <Link href="/" className={is("/") ? "active" : ""}>
        Home
      </Link>
      <Link href="/journal" className={is("/journal") ? "active" : ""}>
        Journal
      </Link>
      <Link href="/shop" className={is("/shop") ? "active" : ""}>
        Shop
      </Link>
      <Link href="/cart" className={is("/cart") ? "active" : ""}>
        Cart
      </Link>
    </nav>
  );
}
