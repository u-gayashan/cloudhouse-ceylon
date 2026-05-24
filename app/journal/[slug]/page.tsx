"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { POSTS } from "@/lib/data";
import { Btn, Eyebrow, PH, Tag } from "@/components/ui";
import { JournalCard } from "@/components/cards";

export default function JournalPostPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const post = POSTS.find((p) => p.id === slug) || POSTS[0];

  const body = post.body || [
    "Lorem note from the field. The post body is held in the admin CMS — this preview shows the published shape.",
    "Each paragraph runs at a measure of about 70 characters. Pull-quotes and inline imagery sit in the same grid.",
    "When we publish a film we drop the embed in place of the lede photo. Recipes break into ingredients and method.",
  ];

  return (
    <main className="page">
      <article
        className="container"
        style={{ maxWidth: 760, paddingTop: 56, paddingBottom: 96 }}
      >
        <Link
          href="/journal"
          className="mono"
          style={{
            fontSize: 11,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          ← The Journal
        </Link>
        <div className="row" style={{ gap: 10, marginTop: 24 }}>
          <Tag variant="accent">{post.category}</Tag>
          <span
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--ink-mute)",
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            {post.date} · {post.read}
          </span>
        </div>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.04,
            letterSpacing: "-.02em",
            margin: "20px 0 24px",
            fontWeight: 400,
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: "var(--ink-soft)",
            marginBottom: 36,
          }}
        >
          {post.excerpt}
        </p>

        <PH label="LEDE PHOTO · 16:9" style={{ aspectRatio: "16/9", marginBottom: 36 }} />

        <div style={{ fontSize: 17.5, lineHeight: 1.78 }}>
          {body.map((p, i) => (
            <React.Fragment key={i}>
              <p>{p}</p>
              {i === 1 && (
                <blockquote
                  style={{
                    borderLeft: "2px solid var(--accent)",
                    paddingLeft: 24,
                    margin: "32px 0",
                    fontFamily: "var(--f-display)",
                    fontSize: 26,
                    lineHeight: 1.3,
                    letterSpacing: "-.01em",
                    color: "var(--ink)",
                  }}
                >
                  &quot;You can&apos;t rush the second flush. The leaf tells you when.&quot;
                </blockquote>
              )}
              {i === 2 && (
                <PH
                  label="ESTATE MAP · 21:9"
                  style={{ aspectRatio: "21/9", margin: "28px 0" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="divider" style={{ marginTop: 56 }}>
          <div className="line" />
          <span className="mark" />
          <div className="line" />
        </div>

        <div
          className="row"
          style={{ justifyContent: "space-between", marginTop: 40, alignItems: "center" }}
        >
          <div className="row">
            <PH className="round" style={{ width: 56, height: 56, aspectRatio: "1" }} />
            <div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 18 }}>
                Sahan Wijesinghe
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--ink-mute)",
                }}
              >
                Founder · Field correspondent
              </div>
            </div>
          </div>
          <div className="row" style={{ gap: 8 }}>
            <Btn variant="ghost" small>
              Share
            </Btn>
            <Btn variant="ghost" small>
              Save
            </Btn>
          </div>
        </div>
      </article>

      <section
        className="section"
        style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)" }}
      >
        <div className="container">
          <div className="section-head">
            <h2>More from the journal</h2>
          </div>
          <div className="journal-grid">
            {POSTS.filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((p) => (
                <JournalCard
                  key={p.id}
                  post={p}
                  onOpen={(np) => {
                    router.push(`/journal/${np.id}`);
                    if (typeof window !== "undefined") window.scrollTo(0, 0);
                  }}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
