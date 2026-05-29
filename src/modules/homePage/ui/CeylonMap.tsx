"use client";

import React from "react";

import { CEYLON_REGIONS } from "../services/homePage.service";
import type { CeylonMapProps } from "../homePage.types";

const PLACEHOLDER_GIF = "/regions/mist.gif";
const REGION_GIFS: Record<string, string> = {};

export function CeylonMap({ activeRegion, onRegionHover }: CeylonMapProps) {
  const [lastRegion, setLastRegion] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (activeRegion) setLastRegion(activeRegion);
  }, [activeRegion]);
  const gif = lastRegion ? REGION_GIFS[lastRegion] ?? PLACEHOLDER_GIF : null;

  return (
    <div className="region-map" data-active={activeRegion ? "1" : "0"}>
      <div
        className="region-gif"
        data-show={activeRegion ? "1" : "0"}
        style={gif ? { backgroundImage: `url(${gif})` } : undefined}
      />
      <div className="region-gif-overlay" data-show={activeRegion ? "1" : "0"} />
      <svg
        className="region-outline"
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
      {CEYLON_REGIONS.map((p) => (
        <div
          key={p.id}
          className="pin"
          data-active={activeRegion === p.id ? "1" : "0"}
          onMouseEnter={() => onRegionHover?.(p.id)}
          onMouseLeave={() => onRegionHover?.(null)}
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
