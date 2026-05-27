"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { POSTS } from "@/lib/data";
import { Eyebrow, PH, Tag } from "@/components/ui";
import { JournalCard } from "@/components/cards";

export default function JournalPage() {
  const router = useRouter();
  const [filter, setFilter] = React.useState("All");
  const cats = ["All", ...new Set(POSTS.map((p) => p.category))];
  const list = filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);

  return (
    <main className="page">
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <Eyebrow>The Journal · {POSTS.length} entries this season</Eyebrow>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              lineHeight: 0.98,
              letterSpacing: "-.025em",
              margin: "18px 0 32px",
            }}
          >
            Stories from <em style={{ color: "var(--accent)" }}>the leaf.</em>
          </h1>

          <div className="between" style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
            <div className="pills">
              {cats.map((c) => (
                <button
                  key={c}
                  className={`pill ${filter === c ? "active" : ""}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
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
              Showing {list.length} of {POSTS.length}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          {filter === "All" && (
            <article
              className="col-split"
              style={
                {
                  "--cols": "1.3fr 1fr",
                  "--col-gap": "56px",
                  marginBottom: 64,
                  cursor: "pointer",
                } as React.CSSProperties
              }
              onClick={() => router.push(`/journal/${POSTS[0].id}`)}
            >
              <PH label="FEATURED · 21:9" style={{ aspectRatio: "21/9" }} />
              <div className="stack-3" style={{ alignSelf: "center" }}>
                <div className="row" style={{ gap: 10 }}>
                  <Tag variant="accent">Featured</Tag>
                  <Tag>{POSTS[0].category}</Tag>
                </div>
                <h2
                  className="serif"
                  style={{
                    fontSize: "clamp(26px, 6vw, 40px)",
                    lineHeight: 1.08,
                    letterSpacing: "-.015em",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {POSTS[0].title}
                </h2>
                <p style={{ color: "var(--ink-soft)" }}>{POSTS[0].excerpt}</p>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--ink-mute)",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  {POSTS[0].date} · {POSTS[0].read}
                </div>
              </div>
            </article>
          )}

          <div className="journal-grid">
            {(filter === "All" ? list.slice(1) : list).map((p) => (
              <JournalCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
