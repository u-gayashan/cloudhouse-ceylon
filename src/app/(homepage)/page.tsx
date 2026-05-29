"use client";

import { useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { POSTS, PRODUCTS } from "@/lib/data";
import { Btn, Eyebrow, PH } from "@/components/ui";
import { JournalCard, ProductCard, CeylonMap, Marquee } from "@/components/cards";
import { useTweakValues } from "@/app/providers";
import { Reveal, useInView } from "@/components/reveal";

export default function HomePage() {
  const router = useRouter();
  const { shopUnlocked, audienceCurrent, audienceTarget } = useTweakValues();
  const featured = POSTS.slice(0, 3);
  const products = PRODUCTS.slice(0, 4);
  const pct = Math.min(100, Math.round((audienceCurrent / audienceTarget) * 100));
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [barRef, barIn] = useInView<HTMLDivElement>();

  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <Reveal group className="hero-variant hero-editorial">
            <Eyebrow>Ceylon · Single-origin · From the mist</Eyebrow>
            <h1 className="display" style={{ marginTop: 16 }}>
              Tea grown above<br />the <em>clouds.</em>
            </h1>
            <p className="hero-sub">
              Cloudhouse is a small Sri Lankan tea project — single-origin leaf from the upcountry
              estates of Nuwara Eliya, Uva and Dimbula, paired with field journals from the people
              who grow it. A round-door cottage in the hills is on the way.
            </p>
            <div className="row hero-actions" style={{ marginTop: 28, gap: 12 }}>
              <Btn onClick={() => router.push("/journal")}>Read the journal →</Btn>
              <Btn variant="ghost" onClick={() => router.push("/shop")}>
                {shopUnlocked ? "Browse the shop" : "Preview the shop"}
              </Btn>
            </div>

            <div className="hero-photo ph" style={{ marginTop: 56 }}>
              <div className="ph-label">HERO PHOTO · TEA PICKERS AT FIRST LIGHT · 21:9</div>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="l">Estate elevation</span>
                <span className="v">1,610 — 1,868 m</span>
              </div>
              <div className="hero-meta-item">
                <span className="l">Regions on the page</span>
                <span className="v">Five</span>
              </div>
              <div className="hero-meta-item">
                <span className="l">Journal entries</span>
                <span className="v">{POSTS.length} this season</span>
              </div>
              <div className="hero-meta-item">
                <span className="l">Cottage status</span>
                <span className="v">Foundations laid</span>
              </div>
            </div>
          </Reveal>

          <div className="hero-variant hero-grid">
            <div>
              <Eyebrow>Ceylon · Since 2024</Eyebrow>
              <h1 className="display" style={{ marginTop: 16 }}>
                Tea grown above the <em>clouds.</em>
              </h1>
              <p className="hero-sub">Single-origin leaf from the upcountry mist.</p>
            </div>
            <PH label="HERO PHOTO · 4:5" />
          </div>

          <div className="hero-variant hero-center">
            <Eyebrow>Cloudhouse · Ceylon</Eyebrow>
            <h1 className="display" style={{ marginTop: 16 }}>
              Tea grown above<br />the <em>clouds.</em>
            </h1>
            <p className="hero-sub">
              Single-origin Ceylon, slow-launched alongside the journal.
            </p>
            <div className="row hero-actions" style={{ gap: 12 }}>
              <Btn onClick={() => router.push("/journal")}>Read the journal →</Btn>
              <Btn variant="ghost" onClick={() => router.push("/shop")}>
                Preview the shop
              </Btn>
            </div>
            <div className="hero-disc" />
          </div>
        </div>
      </section>

      <Reveal>
        <Marquee
          items={[
            "Nuwara Eliya|.",
            "Uva|.",
            "Dimbula|.",
            "Kandy|.",
            "Ruhuna|.",
            "Sabaragamuwa|.",
            "Above 1,500 m|.",
          ]}
        />
      </Reveal>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <Eyebrow>The Journal</Eyebrow>
              <h2 style={{ marginTop: 10 }}>
                Field notes from <em>the leaf.</em>
              </h2>
            </div>
            <a
              href="/journal"
              onClick={(e) => {
                e.preventDefault();
                router.push("/journal");
              }}
              className="mono"
              style={{
                fontSize: 12,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
              }}
            >
              All entries →
            </a>
          </Reveal>

          <Reveal group className="journal-grid">
            {featured.map((p) => (
              <JournalCard key={p.id} post={p} />
            ))}
          </Reveal>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <Reveal
          group
          className="container col-split"
          style={
            {
              "--cols": "1fr 1fr",
              "--col-gap": "48px",
              "--col-align": "center",
            } as CSSProperties
          }
        >
          <div>
            <Eyebrow>The House · In progress</Eyebrow>
            <h2
              style={{
                marginTop: 10,
                fontFamily: "var(--f-display)",
                fontSize: "clamp(28px, 3.4vw, 48px)",
                letterSpacing: "-.015em",
                lineHeight: 1.02,
                margin: 0,
                fontWeight: 400,
              }}
            >
              A small round-door cottage,<br />somewhere above the cloud line.
            </h2>
            <p
              style={{
                marginTop: 18,
                maxWidth: "44ch",
                color: "var(--ink-soft)",
                fontSize: 16,
              }}
            >
              We&apos;re building a tiny stone-and-timber retreat in the upcountry — one circular door,
              one long table, one stove on at all hours. Tea drinkers welcome, eventually.
            </p>
            <div className="row" style={{ marginTop: 22 }}>
              <Btn variant="ghost" onClick={() => router.push("/about")}>
                Read the build journal
              </Btn>
            </div>
          </div>
          <PH label="THE HOUSE · CONCEPT RENDER · 4:3" style={{ aspectRatio: "4/3" }} />
        </Reveal>
      </section>

      <section className="section">
        <div
          className="container col-split"
          style={{ "--cols": "1fr 1.3fr", "--col-gap": "56px" } as CSSProperties}
        >
          <div className="sticky-aside">
            <Reveal>
              <Eyebrow>The Map</Eyebrow>
              <h2
                style={{
                  marginTop: 10,
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(28px, 3.4vw, 48px)",
                  letterSpacing: "-.015em",
                  lineHeight: 1.02,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                Five regions,<br />five <em>cups.</em>
              </h2>
              <p style={{ marginTop: 16, maxWidth: "38ch", color: "var(--ink-soft)" }}>
                Ceylon tea is shaped by elevation, monsoon, and soil. We work with smallholder
                estates across five tea regions of Sri Lanka.
              </p>
            </Reveal>
            <Reveal group className="stack-3" style={{ marginTop: 24 }}>
              {[
                {
                  id: "nuwara",
                  name: "Nuwara Eliya",
                  elev: "1,800+ m",
                  note: "Bright, floral, the 'champagne' of Ceylon",
                },
                {
                  id: "uva",
                  name: "Uva",
                  elev: "1,400–1,800 m",
                  note: "Wintergreen, honey, single-flush prized",
                },
                {
                  id: "dimbula",
                  name: "Dimbula",
                  elev: "1,100–1,650 m",
                  note: "Brisk citrus, the classic morning cup",
                },
                {
                  id: "kandy",
                  name: "Kandy",
                  elev: "600–1,200 m",
                  note: "Malt-forward, mid-grown rounded body",
                },
                {
                  id: "ruhuna",
                  name: "Ruhuna",
                  elev: "sea — 600 m",
                  note: "Low-grown, caramel and cocoa weight",
                },
              ].map((r) => (
                <div
                  key={r.id}
                  className="region-row"
                  data-active={activeRegion === r.id ? "1" : "0"}
                  onMouseEnter={() => setActiveRegion(r.id)}
                  onMouseLeave={() => setActiveRegion(null)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 8,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <div>
                    <div
                      className="region-row-name"
                      style={{ fontFamily: "var(--f-display)", fontSize: 20 }}
                    >
                      {r.name}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2 }}>
                      {r.note}
                    </div>
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--ink-mute)",
                      letterSpacing: ".08em",
                      alignSelf: "start",
                      paddingTop: 4,
                    }}
                  >
                    {r.elev}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal>
            <CeylonMap activeRegion={activeRegion} onRegionHover={setActiveRegion} />
          </Reveal>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)" }}
      >
        <div className="container">
          <Reveal className="section-head">
            <div>
              <Eyebrow>{shopUnlocked ? "The Shop · Open" : "The Shop · Locked"}</Eyebrow>
              <h2 style={{ marginTop: 10 }}>
                {shopUnlocked ? (
                  <>
                    Pure Ceylon, <em>shipped warm.</em>
                  </>
                ) : (
                  <>
                    Opening at <em>{audienceTarget.toLocaleString()}</em> readers.
                  </>
                )}
              </h2>
            </div>
            {shopUnlocked && (
              <a
                href="/shop"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/shop");
                }}
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                }}
              >
                Full catalogue →
              </a>
            )}
          </Reveal>

          {shopUnlocked ? (
            <Reveal group className="product-grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </Reveal>
          ) : (
            <Reveal className="locked">
              <div
                className="ph-bg"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, transparent 0 22px, color-mix(in oklch, var(--ink) 5%, transparent) 22px 23px)",
                }}
              />
              <div className="inner">
                <Eyebrow>Audience-gated</Eyebrow>
                <h3
                  style={{
                    fontFamily: "var(--f-display)",
                    fontSize: "clamp(26px, 5vw, 36px)",
                    margin: "12px 0 6px",
                    fontWeight: 400,
                    letterSpacing: "-.015em",
                  }}
                >
                  The shop opens when the journal does.
                </h3>
                <p style={{ color: "var(--ink-soft)", maxWidth: "50ch", margin: "0 auto" }}>
                  We&apos;re slow-launching. Once {audienceTarget.toLocaleString()} readers have joined
                  the Cloudhouse journal, we&apos;ll open online ordering for tea pulled this season.
                </p>

                <div className="threshold-bar" ref={barRef}>
                  <i style={{ width: (barIn ? pct : 0) + "%" }} />
                </div>
                <div className="threshold-label">
                  <span>
                    {audienceCurrent.toLocaleString()} readers · {pct}%
                  </span>
                  <span>Target: {audienceTarget.toLocaleString()}</span>
                </div>

                <div className="row" style={{ marginTop: 22, justifyContent: "center" }}>
                  <input
                    className="field"
                    placeholder="you@somewhere.com"
                    style={{ maxWidth: 280, height: 44 }}
                  />
                  <Btn variant="accent">Join the journal</Btn>
                </div>

                <div className="pills" style={{ marginTop: 22, justifyContent: "center" }}>
                  <span className="pill">Preview the catalogue ↗</span>
                  <span className="pill">When? Q3 2026</span>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section">
        <Reveal
          group
          className="container col-split"
          style={{ "--cols": "1fr 1fr", "--col-gap": "56px" } as CSSProperties}
        >
          <div className="quote">
            &quot;You don&apos;t drink the elevation. <em>But you can taste it,</em> if the leaf has been
            left alone.&quot;
          </div>
          <div className="stack-3">
            <Eyebrow>Letter from the field · No. 04</Eyebrow>
            <p style={{ color: "var(--ink-soft)" }}>
              Every Cloudhouse tea is single-estate and single-flush. We don&apos;t blend across regions
              or years. The cup you receive in May is the cup that grew in March.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              That&apos;s also why we&apos;re slow. Our small volumes go fast, and we won&apos;t stretch a harvest
              by mixing.
            </p>
            <div className="row" style={{ gap: 12, marginTop: 10 }}>
              <PH className="round" style={{ width: 44, height: 44, aspectRatio: "1" }} />
              <div>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 16 }}>
                  Sahan Wijesinghe
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--ink-mute)",
                  }}
                >
                  Founder · Tea buyer
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
