"use client";

import { PRODUCTS } from "@/lib/data";
import { Btn, Eyebrow, PH } from "@/components/ui";
import { AdminSidebar } from "@/components/admin-shared";

export default function AdminProductsPage() {
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <Eyebrow>Catalogue</Eyebrow>
            <h1 style={{ marginTop: 6 }}>
              Products ·{" "}
              <em
                style={{
                  color: "var(--ink-mute)",
                  fontStyle: "normal",
                  fontSize: 18,
                  fontFamily: "var(--f-mono)",
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                }}
              >
                {PRODUCTS.length} SKUs
              </em>
            </h1>
          </div>
          <div className="row">
            <Btn variant="ghost" small>
              Export CSV
            </Btn>
            <Btn small>+ New product</Btn>
          </div>
        </div>

        <div
          style={{
            padding: 14,
            background: "var(--bg-3)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-2)",
            marginBottom: 18,
            display: "flex",
            gap: 14,
            alignItems: "center",
          }}
        >
          <span className="badge-lock">
            <span className="icon" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 500 }}>The storefront is currently locked.</div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
              Catalogue is editable now; products go live when audience reaches the unlock
              threshold.
            </div>
          </div>
          <Btn variant="ghost" small>
            Manage gate
          </Btn>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th style={{ width: 50 }}></th>
              <th>Name</th>
              <th>Region</th>
              <th>Grade</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p, i) => (
              <tr key={p.id}>
                <td>
                  <PH style={{ width: 40, height: 40, aspectRatio: 1 }} />
                </td>
                <td>
                  <div style={{ fontWeight: 500 }}>{p.name}</div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10.5,
                      color: "var(--ink-mute)",
                      letterSpacing: ".08em",
                    }}
                  >
                    {p.estate}
                  </div>
                </td>
                <td>{p.region}</td>
                <td className="mono" style={{ fontSize: 12 }}>
                  {p.grade.split("—")[0]}
                </td>
                <td className="mono" style={{ fontSize: 13 }}>
                  LKR {p.price.toLocaleString()}
                </td>
                <td className="mono" style={{ fontSize: 13 }}>
                  {[48, 32, 64, 18, 96, 12, 8, "∞"][i] ?? "—"}
                </td>
                <td>
                  <span
                    className={`status-dot ${i === 1 || i === 6 ? "draft" : "live"}`}
                  />
                  {i === 1 || i === 6 ? "Draft" : "Ready"}
                </td>
                <td style={{ textAlign: "right", color: "var(--ink-mute)" }}>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
