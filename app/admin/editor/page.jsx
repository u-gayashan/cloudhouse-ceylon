"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { POSTS } from "@/lib/data";
import { Btn, PH } from "@/components/ui";
import { AdminSidebar } from "@/components/admin-shared";

function AdminEditorInner() {
  const params = useSearchParams();
  const id = params?.get("id");
  const existing = id ? POSTS.find((p) => p.id === id) : null;

  const [title, setTitle] = React.useState(existing?.title || "");
  const [body, setBody] = React.useState(existing?.body?.join("\n\n") || "");
  const [cat, setCat] = React.useState(existing?.category || "Estate Story");

  return (
    <div className="admin-shell">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-top">
          <div className="row" style={{ gap: 14 }}>
            <Link
              href="/admin/posts"
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
              }}
            >
              ← Posts
            </Link>
            <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>
              ·
            </span>
            <span
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--ink-mute)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              {existing ? "Editing" : "New entry"} · Autosaved 12s ago
            </span>
          </div>
          <div className="row">
            <Btn variant="ghost" small>
              Preview ↗
            </Btn>
            <Btn variant="ghost" small>
              Save draft
            </Btn>
            <Btn small>Publish</Btn>
          </div>
        </div>

        <div className="editor-wrap">
          <div className="editor-card">
            <div className="toolbar">
              <button style={{ fontWeight: 700 }}>B</button>
              <button style={{ fontStyle: "italic" }}>I</button>
              <button style={{ textDecoration: "underline" }}>U</button>
              <div className="sep" />
              <button>H1</button>
              <button className="active">H2</button>
              <button>H3</button>
              <div className="sep" />
              <button>"</button>
              <button>—</button>
              <button>•</button>
              <button>1.</button>
              <div className="sep" />
              <button>🖼</button>
              <button>▶</button>
              <button>⌘</button>
            </div>
            <input
              className="editor-title"
              placeholder="A title that earns its space"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--ink-mute)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              {existing?.date || "Saving as draft · " + new Date().toDateString()} ·{" "}
              {existing?.read || "—"}
            </div>
            <textarea
              className="editor-body"
              placeholder={
                "There is a particular hush to the Uva highlands in early May…\n\nPress / for blocks."
              }
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <div className="hr-dot" style={{ margin: "20px 0" }}>
              <span>Insert block · ↵ Photo · ↵↵ Film · / Recipe</span>
            </div>
            <div className="row" style={{ gap: 10 }}>
              <button
                className="upload-tile"
                style={{
                  aspectRatio: "auto",
                  height: 60,
                  flexDirection: "row",
                  padding: "0 18px",
                }}
              >
                <span style={{ fontSize: 18 }}>+</span> Add cover photo
              </button>
              <button
                className="upload-tile"
                style={{
                  aspectRatio: "auto",
                  height: 60,
                  flexDirection: "row",
                  padding: "0 18px",
                }}
              >
                <span style={{ fontSize: 18 }}>▶</span> Embed YouTube / Vimeo
              </button>
              <button
                className="upload-tile"
                style={{
                  aspectRatio: "auto",
                  height: 60,
                  flexDirection: "row",
                  padding: "0 18px",
                }}
              >
                <span style={{ fontSize: 18 }}>⌘</span> Upload film
              </button>
            </div>
          </div>

          <aside className="stack-4" style={{ position: "sticky", top: 24 }}>
            <div className="card" style={{ padding: 20 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--ink-mute)",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Publish
              </div>
              <div className="stack-3" style={{ marginTop: 14 }}>
                <div>
                  <label className="label">Status</label>
                  <select className="field">
                    <option>Draft</option>
                    <option>Scheduled</option>
                    <option>Live</option>
                  </select>
                </div>
                <div>
                  <label className="label">Publish date</label>
                  <input className="field" defaultValue="May 11, 2026" />
                </div>
                <div>
                  <label className="label">Category</label>
                  <select
                    className="field"
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                  >
                    <option>Estate Story</option>
                    <option>Brewing Guide</option>
                    <option>Recipe</option>
                    <option>The House</option>
                    <option>Field Note</option>
                  </select>
                </div>
                <div>
                  <label className="label">Tags</label>
                  <div className="pills">
                    <span className="pill active">uva</span>
                    <span className="pill active">single-flush</span>
                    <span className="pill">+ add</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--ink-mute)",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                SEO preview
              </div>
              <div
                style={{
                  marginTop: 12,
                  padding: 12,
                  background: "var(--bg-2)",
                  borderRadius: "var(--r-2)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--f-display)",
                    fontSize: 16,
                    color: "var(--accent)",
                  }}
                >
                  {title || "Untitled · Cloudhouse Ceylon"}
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 2 }}
                >
                  cloudhouse.lk/journal/…
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 6 }}>
                  {body.split("\n")[0]?.slice(0, 150) ||
                    "Add a lede paragraph — first 150 characters appear here."}
                  …
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--ink-mute)",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Co-authors
              </div>
              <div className="stack-3" style={{ marginTop: 12 }}>
                {[
                  { n: "Sahan W.", r: "Lead writer" },
                  { n: "Iresha P.", r: "Editor" },
                ].map((c) => (
                  <div key={c.n} className="row">
                    <PH
                      className="round"
                      style={{ width: 28, height: 28, aspectRatio: 1 }}
                    />
                    <div>
                      <div style={{ fontSize: 13.5 }}>{c.n}</div>
                      <div
                        className="mono"
                        style={{
                          fontSize: 10,
                          color: "var(--ink-mute)",
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {c.r}
                      </div>
                    </div>
                  </div>
                ))}
                <Btn variant="ghost" small>
                  + Invite
                </Btn>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default function AdminEditorPage() {
  return (
    <Suspense fallback={null}>
      <AdminEditorInner />
    </Suspense>
  );
}
