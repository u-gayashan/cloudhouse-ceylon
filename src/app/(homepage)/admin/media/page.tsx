"use client";

import { Btn, Eyebrow, PH } from "@/components/ui";
import { AdminSidebar } from "@/components/admin-shared";

interface MediaItem {
  t: string;
  l: string;
}

export default function AdminMediaPage() {
  const media: MediaItem[] = [
    { t: "PHOTO", l: "uva-pickers-dawn.jpg" },
    { t: "FILM", l: "dimbula-04-12.mp4" },
    { t: "PHOTO", l: "leaf-detail-03.jpg" },
    { t: "PHOTO", l: "estate-map-uva.png" },
    { t: "EMBED", l: "youtube · nuwara estate" },
    { t: "PHOTO", l: "tin-shoot-mountain.jpg" },
    { t: "PHOTO", l: "ruhuna-lowland.jpg" },
    { t: "FILM", l: "the-house-build-01.mp4" },
    { t: "PHOTO", l: "kandy-table.jpg" },
  ];
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <Eyebrow>Media library</Eyebrow>
            <h1 style={{ marginTop: 6 }}>Photos, films, embeds.</h1>
          </div>
          <div className="row">
            <input
              className="field"
              placeholder="Search media…"
              style={{ width: 260, maxWidth: "100%", height: 36 }}
            />
            <Btn small>↑ Upload</Btn>
          </div>
        </div>
        <div className="pills" style={{ marginBottom: 18 }}>
          {["All · 142", "Photos · 116", "Films · 21", "Embeds · 5", "Drafts"].map((c) => (
            <button
              key={c}
              className={`pill ${c.startsWith("All") ? "active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="media-grid">
          <button className="upload-tile">
            <span style={{ fontSize: 24 }}>+</span>
            Drag files or browse
          </button>
          {media.map((m, i) => (
            <div key={i} className="media-tile">
              <PH label="" />
              <span className="badge">{m.t}</span>
              <div
                style={{
                  position: "absolute",
                  left: 8,
                  right: 8,
                  bottom: 8,
                  fontFamily: "var(--f-mono)",
                  fontSize: 10,
                  color: "var(--paper)",
                  background: "rgba(0,0,0,.55)",
                  padding: "4px 6px",
                  borderRadius: 4,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
