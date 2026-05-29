"use client";

import React from "react";

/**
 * Reveals `inView` the first time the element scrolls into the viewport,
 * then stops observing. Falls back to visible when IntersectionObserver
 * is unavailable (SSR / very old browsers) so content is never trapped hidden.
 */
export function useInView<T extends Element>(): [React.RefObject<T | null>, boolean] {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return [ref, inView];
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  group?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}

export function Reveal({ children, className = "", group, delay, style }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const base = group ? "reveal-group" : "reveal";
  return (
    <div
      ref={ref}
      className={`${base} ${className}`.trim()}
      data-show={inView ? "1" : "0"}
      style={
        delay
          ? ({ ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : style
      }
    >
      {children}
    </div>
  );
}
