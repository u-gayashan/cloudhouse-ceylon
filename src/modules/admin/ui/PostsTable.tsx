"use client";

import { useRouter } from "next/navigation";

import { PH } from "@/components/ui";
import { POSTS } from "@/modules/journal/services/journal.service";
import { AUTHORS, POST_STATUS } from "../admin.utils";
import type { PostsTableProps } from "../admin.types";

export function PostsTable({ small }: PostsTableProps) {
  const router = useRouter();
  const list = small ? POSTS.slice(0, 4) : POSTS;
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 40 }}></th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Author</th>
            <th>Updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((p, i) => (
            <tr
              key={p.id}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/admin/editor?id=${p.id}`)}
            >
              <td>
                <PH style={{ width: 36, height: 36, aspectRatio: "1" }} />
              </td>
              <td>
                <div style={{ fontWeight: 500 }}>{p.title}</div>
                <div
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    color: "var(--ink-mute)",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.kind}
                </div>
              </td>
              <td>{p.category}</td>
              <td>
                <span className={`status-dot ${POST_STATUS[i] || "live"}`} />
                {(POST_STATUS[i] || "live").replace(/^\w/, (c) => c.toUpperCase())}
              </td>
              <td>{AUTHORS[i % AUTHORS.length]}</td>
              <td className="mono" style={{ fontSize: 12, color: "var(--ink-soft)" }}>
                {p.date}
              </td>
              <td style={{ textAlign: "right", color: "var(--ink-mute)" }}>⋯</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
