import "./globals.css";
import type { Metadata, Viewport } from "next";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Cloudhouse Ceylon — Pure single-origin tea from the Sri Lankan highlands",
  description:
    "Single-origin Ceylon tea from the upcountry mist of Sri Lanka. Stories from the leaf.",
  keywords:
    "Sri Lanka, Ceylon, tea, single-origin, Nuwara Eliya, Uva, Dimbula, Kandy, Ruhuna",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-palette="forest"
      data-typography="editorial"
      data-hero="editorial"
      data-theme="light"
      data-density="regular"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;1,400&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600&family=Fraunces:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
