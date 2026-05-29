"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Btn } from "@/components/ui";
import cartStore from "@/modules/cart/store/cart.store";
import tweaksStore from "@/store/tweaksStore";

type Props = {
  open: boolean;
};

export function MobileNavbar({ open }: Props) {
  const router = useRouter();
  const cart = cartStore((s) => s.cart);
  const cartCount = cart.reduce((s, l) => s + l.qty, 0);
  const shopUnlocked = tweaksStore((s) => s.t.shopUnlocked);

  return (
    <div id="nav-mobile" className={`nav-mobile ${open ? "open" : ""}`}>
      <Link href="/">Home</Link>
      <Link href="/journal">Journal</Link>
      <Link href="/about">The House</Link>
      <Link href="/shop">
        Shop{" "}
        {!shopUnlocked && (
          <span className="badge-lock" style={{ marginLeft: 6 }}>
            <span className="icon" />
          </span>
        )}
      </Link>
      <Link href="/admin/login">Admin</Link>
      <Btn variant="ghost" small onClick={() => router.push("/cart")}>
        Cart{" "}
        <span className="mono" style={{ opacity: 0.6, marginLeft: 4 }}>
          {String(cartCount).padStart(2, "0")}
        </span>
      </Btn>
    </div>
  );
}
