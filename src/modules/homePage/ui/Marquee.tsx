"use client";

import type { MarqueeProps } from "../homePage.types";

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
