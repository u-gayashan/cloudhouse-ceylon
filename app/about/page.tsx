"use client";

import { useRouter } from "next/navigation";
import { Btn, Eyebrow, PH } from "@/components/ui";

export default function AboutPage() {
  const router = useRouter();
  return (
    <main className="page">
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <Eyebrow>The House · A small upcountry cottage</Eyebrow>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(56px, 8vw, 120px)",
              lineHeight: 0.96,
              letterSpacing: "-.025em",
              margin: "20px 0 0",
              fontWeight: 400,
            }}
          >
            One door,<br />one <em style={{ color: "var(--accent)" }}>long table,</em>
            <br />one stove on.
          </h1>
          <p
            style={{
              maxWidth: "60ch",
              fontSize: 18,
              color: "var(--ink-soft)",
              marginTop: 28,
            }}
          >
            Cloudhouse is also a place — eventually. We&apos;re building a small round-door cottage in
            the upcountry, somewhere above the cloud line. One room. Stone walls. A long shared
            table where the tea is always hot.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <PH label="THE HOUSE · CONCEPT 1 · 21:9" style={{ aspectRatio: "21/9" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 16,
            }}
          >
            <PH label="SITE · 4:5" style={{ aspectRatio: "4/5" }} />
            <PH label="STONE WORK · 4:5" style={{ aspectRatio: "4/5" }} />
            <PH label="DOOR DETAIL · 4:5" style={{ aspectRatio: "4/5" }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}
        >
          <div>
            <Eyebrow>Build log</Eyebrow>
            <div className="stack-4" style={{ marginTop: 18 }}>
              {[
                {
                  d: "Apr 2026",
                  t: "Foundations laid",
                  n: "Stone footings cut from a quarry 4 km downhill.",
                },
                {
                  d: "Feb 2026",
                  t: "Land surveyed",
                  n: "Half a hectare on a south-facing slope, 1,720 m.",
                },
                {
                  d: "Nov 2025",
                  t: "First sketches",
                  n: "A single room, a round door, a hearth.",
                },
                {
                  d: "—",
                  t: "Doors open · TBD",
                  n: "When the leaf and the cottage are both ready.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: 18,
                    paddingBottom: 18,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--ink-mute)",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.d}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--f-display)", fontSize: 20 }}>{s.t}</div>
                    <div
                      style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 4 }}
                    >
                      {s.n}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>What it is, what it isn&apos;t</Eyebrow>
            <p style={{ marginTop: 18, color: "var(--ink-soft)" }}>
              The cottage isn&apos;t a hotel. It&apos;s a small place to host tea drinkers a few at a time —
              estate visits, tasting sessions, an afternoon by the stove when the rain comes in
              sideways and stays.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              We&apos;ll open a small waiting list when the roof is on. For now, the journal is the
              best way to follow the build.
            </p>
            <div className="row" style={{ marginTop: 22 }}>
              <Btn onClick={() => router.push("/journal")}>Follow the build</Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
