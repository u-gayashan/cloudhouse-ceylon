"use client";

import React from "react";
import { PRODUCTS } from "@/lib/data";
import { Btn, Eyebrow } from "@/components/ui";
import { ProductCard } from "@/components/cards";
import { useTweakValues } from "@/app/providers";

function ShopLocked({ audienceCurrent, audienceTarget }) {
  const pct = Math.min(100, Math.round((audienceCurrent / audienceTarget) * 100));
  return (
    <main className="page">
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <Eyebrow>The Shop · Closed for now</Eyebrow>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              lineHeight: 0.98,
              letterSpacing: "-.025em",
              margin: "18px 0 24px",
              fontWeight: 400,
            }}
          >
            Opening at{" "}
            <em style={{ color: "var(--accent)" }}>{audienceTarget.toLocaleString()}</em>
            <br />
            readers.
          </h1>
          <p style={{ maxWidth: "62ch", fontSize: 18, color: "var(--ink-soft)" }}>
            We're slow-launching Cloudhouse. The shop opens to the public once the journal reaches{" "}
            {audienceTarget.toLocaleString()} subscribers — enough demand to back a small, ethical
            harvest without overpromising the smallholder estates we work with.
          </p>

          <div style={{ maxWidth: 640, marginTop: 36 }}>
            <div className="threshold-bar" style={{ height: 8 }}>
              <i style={{ width: pct + "%" }} />
            </div>
            <div className="threshold-label" style={{ marginTop: 10 }}>
              <span>
                {audienceCurrent.toLocaleString()} readers · {pct}%
              </span>
              <span>Target: {audienceTarget.toLocaleString()}</span>
            </div>
            <div className="row" style={{ marginTop: 22, gap: 10 }}>
              <input
                className="field"
                placeholder="you@somewhere.com"
                style={{ maxWidth: 320 }}
              />
              <Btn variant="accent">Join the journal</Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Preview · What's coming</Eyebrow>
              <h2 style={{ marginTop: 10 }}>The first eight teas.</h2>
            </div>
            <span className="badge-lock">
              <span className="icon" /> Locked until launch
            </span>
          </div>
          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} locked />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ShopOpen() {
  const [region, setRegion] = React.useState("All");
  const regions = ["All", ...new Set(PRODUCTS.map((p) => p.region))];
  const list = region === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.region === region);
  return (
    <main className="page">
      <section className="section" style={{ paddingTop: 56, paddingBottom: 32 }}>
        <div className="container">
          <Eyebrow>The Shop · Open · Pulled this season</Eyebrow>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              lineHeight: 0.98,
              letterSpacing: "-.025em",
              margin: "18px 0 32px",
              fontWeight: 400,
            }}
          >
            Pure Ceylon,
            <br />
            <em style={{ color: "var(--accent)" }}>single-origin.</em>
          </h1>
          <div className="between" style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
            <div className="pills">
              {regions.map((r) => (
                <button
                  key={r}
                  className={`pill ${region === r ? "active" : ""}`}
                  onClick={() => setRegion(r)}
                >
                  {r}
                </button>
              ))}
            </div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--ink-mute)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              {list.length} teas · Free shipping over LKR 5,000
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="product-grid">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ShopPage() {
  const { shopUnlocked, audienceCurrent, audienceTarget } = useTweakValues();
  return shopUnlocked ? (
    <ShopOpen />
  ) : (
    <ShopLocked
      audienceCurrent={audienceCurrent}
      audienceTarget={audienceTarget}
    />
  );
}
