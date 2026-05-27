"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import { Btn, Eyebrow, PH, Tag } from "@/components/ui";
import { ProductCard } from "@/components/cards";
import { useCart, useTweakValues } from "@/app/providers";

export default function ProductPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { shopUnlocked } = useTweakValues();

  const id = params?.id;
  const p = PRODUCTS.find((x) => x.id === id) || PRODUCTS[0];
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState("100g");

  return (
    <main className="page">
      <section style={{ padding: "32px 0 64px" }}>
        <div className="container">
          <Link
            href="/shop"
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
            }}
          >
            ← The Shop
          </Link>
          <div
            className="col-split"
            style={
              {
                "--cols": "1.1fr 1fr",
                "--col-gap": "56px",
                marginTop: 28,
              } as React.CSSProperties
            }
          >
            <div>
              <PH label={`${p.region} · MAIN · 4:5`} style={{ aspectRatio: "4/5" }} />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 8,
                  marginTop: 8,
                }}
              >
                {["DRY LEAF", "LIQUOR", "ESTATE", "TIN"].map((l) => (
                  <PH key={l} label={l} style={{ aspectRatio: "1" }} />
                ))}
              </div>
            </div>

            <div className="sticky-aside">
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--ink-mute)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}
              >
                {p.region} · {p.elevation}
              </div>
              <h1
                className="serif"
                style={{
                  fontSize: "clamp(32px, 7vw, 52px)",
                  lineHeight: 1.04,
                  letterSpacing: "-.02em",
                  margin: "10px 0 20px",
                  fontWeight: 400,
                }}
              >
                {p.name}
              </h1>
              <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
                <Tag>{p.grade}</Tag>
                <Tag>{p.estate}</Tag>
                <Tag>{p.flush}</Tag>
              </div>

              <p
                style={{
                  marginTop: 24,
                  color: "var(--ink-soft)",
                  fontSize: 16,
                  lineHeight: 1.65,
                }}
              >
                Notes of <strong style={{ color: "var(--ink)" }}>{p.notes}</strong>. A
                single-flush, single-estate Ceylon, sealed within seven days of withering. Brew at
                95°C for three minutes; the cup is bright on first pour, deeper on the second.
              </p>

              <div className="hr-dot" style={{ margin: "28px 0 18px" }}>
                <span>Tasting · Brewing · Origin</span>
              </div>

              <div className="grid-3" style={{ gap: 16 }}>
                {[
                  { l: "Water", v: "95°C" },
                  { l: "Leaf", v: "3 g / 200 ml" },
                  { l: "Steep", v: "3 minutes" },
                ].map((m) => (
                  <div key={m.l}>
                    <div
                      className="mono"
                      style={{
                        fontSize: 10.5,
                        color: "var(--ink-mute)",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.l}
                    </div>
                    <div
                      style={{ fontFamily: "var(--f-display)", fontSize: 22, marginTop: 2 }}
                    >
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hr-dot" style={{ margin: "28px 0 18px" }}>
                <span>Order</span>
              </div>

              <div className="row" style={{ gap: 16, flexWrap: "wrap" }}>
                <div>
                  <div className="label">Size</div>
                  <div className="pills">
                    {["50g", "100g", "250g"].map((s) => (
                      <button
                        key={s}
                        className={`pill ${size === s ? "active" : ""}`}
                        onClick={() => setSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="label">Quantity</div>
                  <div className="qty" style={{ height: 40 }}>
                    <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(qty + 1)}>+</button>
                  </div>
                </div>
              </div>

              <div className="row" style={{ gap: 12, marginTop: 24 }}>
                <Btn
                  variant="accent"
                  onClick={() => {
                    if (!shopUnlocked) return;
                    addToCart(p, qty, size);
                    router.push("/cart");
                  }}
                >
                  {shopUnlocked ? (
                    <>Add to cart — LKR {(p.price * qty).toLocaleString()}</>
                  ) : (
                    <>Locked · open at launch</>
                  )}
                </Btn>
                <Btn variant="ghost">Save for later</Btn>
              </div>

              <div
                className="row"
                style={{
                  gap: 14,
                  marginTop: 18,
                  color: "var(--ink-soft)",
                  fontSize: 13,
                }}
              >
                <span>◦ Ships in 3 days</span>
                <span>◦ Vacuum-sealed</span>
                <span>◦ Returns within 14 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)" }}
      >
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>From the estate</Eyebrow>
              <h2 style={{ marginTop: 10 }}>
                The land behind <em>this leaf.</em>
              </h2>
            </div>
          </div>
          <div
            className="col-split"
            style={
              {
                "--cols": "1.2fr 1fr",
                "--col-gap": "56px",
                "--col-align": "center",
              } as React.CSSProperties
            }
          >
            <PH
              label={`${p.estate.toUpperCase()} · ESTATE FILM · 16:9`}
              style={{ aspectRatio: "16/9" }}
            />
            <div>
              <h3
                className="serif"
                style={{
                  fontSize: "clamp(24px, 5vw, 32px)",
                  letterSpacing: "-.015em",
                  margin: 0,
                  lineHeight: 1.1,
                  fontWeight: 400,
                }}
              >
                {p.estate}
              </h3>
              <p style={{ color: "var(--ink-soft)", marginTop: 14 }}>
                A smallholder estate in {p.region}, working at {p.elevation} above sea level. The{" "}
                {p.flush.toLowerCase()} is what we&apos;ve sealed for you here — pulled in the cool
                weeks of the season and lightly withered.
              </p>
              <div className="row" style={{ marginTop: 18 }}>
                <Btn variant="ghost" onClick={() => router.push("/journal")}>
                  Estate journal
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>You might also try</h2>
          </div>
          <div className="product-grid">
            {PRODUCTS.filter((x) => x.id !== p.id)
              .slice(0, 4)
              .map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onOpen={(np) => {
                    router.push(`/shop/${np.id}`);
                    if (typeof window !== "undefined") window.scrollTo(0, 0);
                  }}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
