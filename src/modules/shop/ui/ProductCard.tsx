"use client";

import { useRouter } from "next/navigation";

import { PH } from "@/components/ui";
import type { ProductCardProps } from "../shop.types";

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
