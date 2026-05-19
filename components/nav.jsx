"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo, Btn } from "./ui";
import { useCart, useTweakValues } from "@/app/providers";

export function Nav() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const { cartCount } = useCart();
  const { shopUnlocked } = useTweakValues();

  const is = (path) => {
    if (path === "/") return pathname === "/";
    if (path === "/journal") return pathname.startsWith("/journal");
    if (path === "/shop") return pathname.startsWith("/shop");
    if (path === "/about") return pathname.startsWith("/about");
    if (path === "/admin") return pathname.startsWith("/admin");
    return false;
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/">
          <Logo />
        </Link>
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
        </nav>
        <div className="row" style={{ gap: 10 }}>
          <Btn variant="ghost" small onClick={() => router.push("/cart")}>
            Cart{" "}
            <span className="mono" style={{ opacity: 0.6, marginLeft: 4 }}>
              {String(cartCount).padStart(2, "0")}
            </span>
          </Btn>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Logo />
            <p
              style={{
                marginTop: 18,
                maxWidth: "36ch",
                color: "var(--ink-soft)",
                fontSize: 14,
              }}
            >
              Single-origin Ceylon tea from the upcountry mist of Sri Lanka. Stories from the leaf.
              A small cottage in the hills, coming soon.
            </p>
          </div>
          <div>
            <h5>Read</h5>
            <Link href="/journal">Journal</Link>
            <Link href="/about">The House</Link>
            <a href="#">Brewing guide</a>
            <a href="#">Estate map</a>
          </div>
          <div>
            <h5>Shop</h5>
            <Link href="/shop">All tea</Link>
            <a href="#">Loose leaf</a>
            <a href="#">Gift sets</a>
            <a href="#">Subscription</a>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="#">hello@cloudhouse.lk</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Press</a>
          </div>
        </div>
        <div className="meta">
          <span>© 2026 Cloudhouse Ceylon · Nuwara Eliya, Sri Lanka</span>
          <span>06°58&apos;N · 80°46&apos;E · ELEV. 1,868 M</span>
        </div>
      </div>
    </footer>
  );
}
