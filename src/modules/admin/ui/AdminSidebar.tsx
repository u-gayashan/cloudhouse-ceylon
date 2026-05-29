"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo, PH } from "@/components/ui";
import { POSTS } from "@/modules/journal/services/journal.service";
import { PRODUCTS } from "@/modules/shop/services/shop.service";
import tweaksStore from "@/store/tweaksStore";

export function AdminSidebar() {
  const pathname = usePathname() || "";
  const { audienceCurrent, audienceTarget } = tweaksStore((s) => s.t);
  const pct = Math.min(100, Math.round((audienceCurrent / audienceTarget) * 100));
  const isActive = (p: string) => pathname === p;
  return (
    <aside className="admin-side">
      <Logo />
      <div className="group">
        <h6>Newsroom</h6>
        <Link
          href="/admin/dashboard"
          className={isActive("/admin/dashboard") ? "active" : ""}
        >
          <span>Overview</span>
        </Link>
        <Link href="/admin/posts" className={isActive("/admin/posts") ? "active" : ""}>
          <span>Posts</span>
          <span className="num">{POSTS.length}</span>
        </Link>
        <Link
          href="/admin/editor"
          className={isActive("/admin/editor") ? "active" : ""}
        >
          <span>New entry</span>
          <span className="num">⏎ N</span>
        </Link>
        <Link href="/admin/media" className={isActive("/admin/media") ? "active" : ""}>
          <span>Media</span>
          <span className="num">142</span>
        </Link>
      </div>
      <div className="group">
        <h6>Shop</h6>
        <Link
          href="/admin/products"
          className={isActive("/admin/products") ? "active" : ""}
        >
          <span>Products</span>
          <span className="num">{PRODUCTS.length}</span>
        </Link>
        <a href="#">
          <span>Orders</span>
          <span className="num">—</span>
        </a>
        <a href="#">
          <span>Inventory</span>
          <span className="num">—</span>
        </a>
      </div>
      <div className="group">
        <h6>Site</h6>
        <a href="#">
          <span>Pages</span>
        </a>
        <a href="#">
          <span>Subscribers</span>
          <span className="num">{audienceCurrent.toLocaleString()}</span>
        </a>
        <a href="#">
          <span>Settings</span>
        </a>
      </div>

      <div
        style={{
          marginTop: 32,
          padding: 14,
          border: "1px solid var(--line)",
          borderRadius: "var(--r-2)",
          background: "var(--bg-2)",
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 10.5,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          Audience gate
        </div>
        <div style={{ fontFamily: "var(--f-display)", fontSize: 24, marginTop: 4 }}>
          {audienceCurrent.toLocaleString()}{" "}
          <span style={{ color: "var(--ink-mute)", fontSize: 14 }}>
            / {audienceTarget.toLocaleString()}
          </span>
        </div>
        <div className="threshold-bar" style={{ marginTop: 8, height: 4 }}>
          <i style={{ width: pct + "%" }} />
        </div>
        <div
          className="mono"
          style={{ fontSize: 10, color: "var(--ink-mute)", marginTop: 6 }}
        >
          Shop opens at 100%
        </div>
      </div>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 10px",
        }}
      >
        <PH className="round" style={{ width: 32, height: 32, aspectRatio: "1" }} />
        <div>
          <div style={{ fontSize: 13.5 }}>Sahan W.</div>
          <div
            className="mono"
            style={{
              fontSize: 10,
              color: "var(--ink-mute)",
              letterSpacing: ".1em",
              textTransform: "uppercase",
            }}
          >
            Editor
          </div>
        </div>
      </div>
    </aside>
  );
}
