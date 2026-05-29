"use client";

import Link from "next/link";

import type { BreadcrumbsProps } from "@/type/commen.types";

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.href}>
            {isLast ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <>
                <Link href={item.href}>{item.name}</Link>
                <span className="sep" aria-hidden> / </span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}
