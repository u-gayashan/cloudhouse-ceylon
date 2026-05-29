"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Btn } from "@/components/ui";
import cartStore from "@/modules/cart/store/cart.store";
import tweaksStore from "@/store/tweaksStore";

export function DesktopNavbar() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const cart = cartStore((s) => s.cart);
  const cartCount = cart.reduce((s, l) => s + l.qty, 0);
  const shopUnlocked = tweaksStore((s) => s.t.shopUnlocked);

  const is = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="nav-links">
      <Link href="/" className={is("/") ? "active" : ""}>
        Home
      </Link>
      <Link href="/journal" className={is("/journal") ? "active" : ""}>
        Journal
      </Link>
      <Link href="/about" className={is("/about") ? "active" : ""}>
        The House
      </Link>
      <Link href="/shop" className={is("/shop") ? "active" : ""}>
        Shop{" "}
        {!shopUnlocked && (
          <span className="badge-lock" style={{ marginLeft: 6 }}>
            <span className="icon" />
          </span>
        )}
      </Link>
      <Link href="/admin/login" className={is("/admin") ? "active" : ""}>
        Admin
      </Link>
      <Btn variant="ghost" small onClick={() => router.push("/cart")}>
        Cart{" "}
        <span className="mono" style={{ opacity: 0.6, marginLeft: 4 }}>
          {String(cartCount).padStart(2, "0")}
        </span>
      </Btn>
    </nav>
  );
}
