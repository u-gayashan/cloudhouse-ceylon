"use client";

import { useRouter } from "next/navigation";
import { POSTS } from "@/lib/data";
import { Btn, Eyebrow, PH } from "@/components/ui";
import { AdminSidebar, PostsTable } from "@/components/admin-shared";
import { useTweakValues } from "@/app/providers";

export default function AdminDashboardPage() {
  const router = useRouter();
  const { audienceCurrent, audienceTarget } = useTweakValues();

  return (
    <div className="admin-shell">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <Eyebrow>Newsroom · Thursday, May 7</Eyebrow>
            <h1 style={{ marginTop: 6 }}>Good morning, Sahan.</h1>
          </div>
          <div className="row">
            <Btn variant="ghost" small>
              Preview site ↗
            </Btn>
            <Btn small onClick={() => router.push("/admin/editor")}>
              + New entry
            </Btn>
          </div>
        </div>

        <div className="stat-grid">
          <div className="stat">
            <div className="l">Subscribers</div>
            <div className="v">
              {audienceCurrent.toLocaleString()} <em>+184 this week</em>
            </div>
          </div>
          <div className="stat">
            <div className="l">Posts published</div>
            <div className="v">
              {POSTS.length} <em>+2 this month</em>
            </div>
          </div>
          <div className="stat">
            <div className="l">Avg read time</div>
            <div className="v">
              4:48 <em>+0:12</em>
            </div>
          </div>
          <div className="stat">
            <div className="l">Shop status</div>
            <div className="v" style={{ color: "var(--accent-2)" }}>
              Locked
              <em>
                {Math.round((audienceCurrent / audienceTarget) * 100)}% to open
              </em>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 24,
            marginTop: 24,
          }}
        >
          <div className="card" style={{ padding: 24 }}>
            <div className="between">
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--ink-mute)",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                  }}
                >
                  Audience growth · 90 days
                </div>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 28, marginTop: 4 }}>
                  {audienceCurrent.toLocaleString()} readers
                </div>
              </div>
              <div className="row" style={{ gap: 8 }}>
                <Btn variant="ghost" small>
                  30d
                </Btn>
                <Btn small>90d</Btn>
                <Btn variant="ghost" small>
                  1y
                </Btn>
              </div>
            </div>
            <svg
              viewBox="0 0 600 220"
              style={{ width: "100%", height: 220, marginTop: 16 }}
            >
              <defs>
                <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="var(--accent)" stopOpacity=".35" />
                  <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[40, 80, 120, 160].map((y) => (
                <line
                  key={y}
                  x1="0"
                  x2="600"
                  y1={y}
                  y2={y}
                  stroke="var(--line)"
                  strokeDasharray="2 4"
                />
              ))}
              <path
                d="M0 180 C 80 175 140 160 200 150 S 320 130 400 95 S 540 50 600 30 L 600 200 L 0 200 Z"
                fill="url(#ag)"
              />
              <path
                d="M0 180 C 80 175 140 160 200 150 S 320 130 400 95 S 540 50 600 30"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
              />
              {[
                { x: 80, y: 175 },
                { x: 200, y: 150 },
                { x: 400, y: 95 },
                { x: 600, y: 30 },
              ].map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r="3.5"
                  fill="var(--paper)"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
              ))}
            </svg>
            <div
              className="between"
              style={{ borderTop: "1px solid var(--line)", paddingTop: 14, marginTop: 6 }}
            >
              <div
                className="mono"
                style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: ".08em" }}
              >
                FEB
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>
                MAR
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>
                APR
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>
                MAY
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 24 }}>
            <div
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--ink-mute)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              Activity
            </div>
            <div className="stack-3" style={{ marginTop: 14 }}>
              {[
                { who: "Iresha P.", what: "published", t: "Mist over Uva", when: "2h" },
                {
                  who: "Dilan K.",
                  what: "uploaded",
                  t: "Estate film · Dimbula (04:12)",
                  when: "5h",
                },
                { who: "Sahan W.", what: "edited", t: "Brewing guide", when: "1d" },
                {
                  who: "Iresha P.",
                  what: "scheduled",
                  t: "Kandyan winter recipe",
                  when: "1d",
                },
                { who: "Auto", what: "synced", t: "142 media items to CDN", when: "2d" },
              ].map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "32px 1fr auto",
                    gap: 10,
                    alignItems: "center",
                    paddingBottom: 12,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <PH className="round" style={{ aspectRatio: 1, height: 32 }} />
                  <div style={{ fontSize: 13 }}>
                    <strong style={{ fontWeight: 500 }}>{a.who}</strong>
                    <span style={{ color: "var(--ink-mute)" }}> {a.what} </span>
                    <em style={{ fontStyle: "normal", color: "var(--ink)" }}>{a.t}</em>
                  </div>
                  <span
                    className="mono"
                    style={{ fontSize: 10.5, color: "var(--ink-mute)" }}
                  >
                    {a.when}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="between" style={{ marginTop: 36, marginBottom: 14 }}>
          <h2
            style={{
              fontFamily: "var(--f-display)",
              fontWeight: 400,
              fontSize: 26,
              letterSpacing: "-.01em",
              margin: 0,
            }}
          >
            Recent posts
          </h2>
          <Btn variant="ghost" small onClick={() => router.push("/admin/posts")}>
            All posts →
          </Btn>
        </div>

        <PostsTable small />
      </main>
    </div>
  );
}
