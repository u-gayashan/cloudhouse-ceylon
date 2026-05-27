"use client";

import { useRouter } from "next/navigation";
import { POSTS } from "@/lib/data";
import { Btn, Eyebrow } from "@/components/ui";
import { AdminSidebar, PostsTable } from "@/components/admin-shared";

export default function AdminPostsPage() {
  const router = useRouter();
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <Eyebrow>All posts</Eyebrow>
            <h1 style={{ marginTop: 6 }}>
              Posts ·{" "}
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
                {POSTS.length} entries
              </em>
            </h1>
          </div>
          <div className="row">
            <input
              className="field"
              placeholder="Search posts…"
              style={{ width: 260, maxWidth: "100%", height: 36 }}
            />
            <Btn small onClick={() => router.push("/admin/editor")}>
              + New entry
            </Btn>
          </div>
        </div>
        <div className="pills" style={{ marginBottom: 18 }}>
          {[
            "All",
            "Estate Story",
            "Brewing Guide",
            "Recipe",
            "The House",
            "Field Note",
            "Drafts",
          ].map((c) => (
            <button key={c} className={`pill ${c === "All" ? "active" : ""}`}>
              {c}
            </button>
          ))}
        </div>
        <PostsTable />
      </main>
    </div>
  );
}
