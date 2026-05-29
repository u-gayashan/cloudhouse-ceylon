"use client";

import Link from "next/link";

import { Logo } from "./ui";
import { Navbar } from "./navbar/Navbar";

export function Nav() {
  return <Navbar />;
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
