"use client";

import { useRouter } from "next/navigation";

import { PH, Tag } from "@/components/ui";
import type { JournalCardProps } from "../journal.types";

export function JournalCard({ post, onOpen }: JournalCardProps) {
  const router = useRouter();
  const handleClick = () => {
    if (onOpen) onOpen(post);
    else router.push(`/journal/${post.id}`);
  };
  return (
    <article className="journal-card" onClick={handleClick}>
      <PH label={post.kind || "PHOTO"} />
      <div className="stack-2">
        <div className="meta">
          <Tag>{post.category}</Tag>
          <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>{post.date}</span>
          <span className="sep" />
          <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>{post.read}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}
