"use client";

import { useRouter } from "next/navigation";
import { PH, Tag } from "./ui";
import type { Post, Product } from "@/lib/types";

interface JournalCardProps {
  post: Post;
  onOpen?: (post: Post) => void;
}

export function JournalCard({ post, onOpen }: JournalCardProps) {
  const router = useRouter();
  const handleClick = () => {
    if (onOpen) onOpen(post);
    else router.push(`/journal/${post.id}`);
  };
  return (
    <article className="journal-card" onClick={handleClick}>
      <PH label={post.kind || "PHOTO"} />
      <div className="stack-2">
        <div className="meta">
          <Tag>{post.category}</Tag>
          <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>{post.date}</span>
          <span className="sep" />
          <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>{post.read}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}

interface ProductCardProps {
  product: Product;
  onOpen?: (product: Product) => void;
  locked?: boolean;
}

export function ProductCard({ product, onOpen, locked }: ProductCardProps) {
  const router = useRouter();
  const handleClick = () => {
    if (locked) return;
    if (onOpen) onOpen(product);
    else router.push(`/shop/${product.id}`);
  };
  return (
    <article
      className="product-card"
      onClick={handleClick}
      style={{ opacity: locked ? 0.55 : 1, cursor: locked ? "default" : "pointer" }}
    >
      <PH label={product.region} />
      <div className="stack-2">
        <div className="origin">
          {product.region} · {product.elevation}
        </div>
        <div className="name">{product.name}</div>
        <div className="between">
          <div className="price">LKR {product.price.toLocaleString()}</div>
          {locked ? (
            <span className="badge-lock">
              <span className="icon" /> Locked
            </span>
          ) : (
            <span className="tag" style={{ fontSize: 10 }}>
              {product.weight}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

interface CeylonMapProps {
  activeRegion?: string;
}

export function CeylonMap({ activeRegion }: CeylonMapProps) {
  return (
    <div className="region-map">
      <svg
        viewBox="0 0 200 260"
        style={{
          position: "absolute",
          inset: 16,
          width: "calc(100% - 32px)",
          height: "calc(100% - 32px)",
        }}
      >
        <path
          d="M100 12 C 130 14, 150 35, 158 70 C 168 110, 172 145, 160 185 C 150 218, 130 245, 100 248 C 70 248, 50 225, 42 192 C 34 158, 36 120, 46 86 C 56 50, 70 22, 100 12 Z"
          fill="var(--bg-3)"
          stroke="var(--ink-soft)"
          strokeWidth="0.6"
          strokeDasharray="2 2"
          opacity="0.7"
        />
      </svg>
      {[
        { id: "nuwara", name: "Nuwara Eliya", x: "52%", y: "44%" },
        { id: "uva", name: "Uva", x: "68%", y: "60%" },
        { id: "dimbula", name: "Dimbula", x: "42%", y: "54%" },
        { id: "kandy", name: "Kandy", x: "56%", y: "32%" },
        { id: "ruhuna", name: "Ruhuna", x: "50%", y: "78%" },
      ].map((p) => (
        <div
          key={p.id}
          className="pin"
          style={{
            left: p.x,
            top: p.y,
            opacity: activeRegion && activeRegion !== p.id ? 0.35 : 1,
          }}
        >
          <i />
          <span>{p.name}</span>
        </div>
      ))}
    </div>
  );
}

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-inner">
        {all.map((t, i) => (
          <span key={i}>
            <span className="glyph">◦</span>
            {t.includes("|") ? (
              <span>
                {t.split("|")[0]}
                <em>{t.split("|")[1]}</em>
              </span>
            ) : (
              t
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
