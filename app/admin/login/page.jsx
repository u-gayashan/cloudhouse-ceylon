"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Btn, Eyebrow } from "@/components/ui";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("editor@cloudhouse.lk");
  const [pwd, setPwd] = React.useState("••••••••••");
  return (
    <main
      className="page"
      style={{
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        alignItems: "center",
        background: "var(--bg-2)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <Eyebrow>Cloudhouse · Newsroom</Eyebrow>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
              margin: "14px 0 18px",
              fontWeight: 400,
            }}
          >
            Sign in to the
            <br />
            <em style={{ color: "var(--accent)" }}>newsroom.</em>
          </h1>
          <p style={{ color: "var(--ink-soft)", maxWidth: "46ch" }}>
            The admin space for Cloudhouse editors. Write journal entries, upload films from the
            field, manage the tea catalogue, and watch the audience number tick up.
          </p>
          <div className="row" style={{ marginTop: 24, gap: 24 }}>
            {[
              { l: "Editors", v: "4" },
              { l: "Last published", v: "2h ago" },
              { l: "Site uptime", v: "100%" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    color: "var(--ink-mute)",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.l}
                </div>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 22, marginTop: 2 }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: 40 }}>
          <div className="stack-4">
            <div>
              <label className="label">Email</label>
              <input
                className="field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                className="field"
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <div className="between" style={{ padding: "4px 0" }}>
              <label
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  fontSize: 13,
                  color: "var(--ink-soft)",
                }}
              >
                <input type="checkbox" defaultChecked /> Keep me signed in
              </label>
              <a href="#" style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                Forgot?
              </a>
            </div>
            <Btn variant="accent" onClick={() => router.push("/admin/dashboard")}>
              Sign in to the newsroom
            </Btn>
            <div className="hr-dot">
              <span>or</span>
            </div>
            <Btn variant="ghost">Continue with Google</Btn>
            <p
              style={{
                fontSize: 12,
                color: "var(--ink-mute)",
                textAlign: "center",
                margin: 0,
              }}
            >
              By signing in you agree to the Cloudhouse editor terms.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
