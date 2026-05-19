import "./globals.css";
import { Providers } from "./providers";
import Shell from "@/components/shell";

export const metadata = {
  title: "Cloudhouse Ceylon — Pure single-origin tea from the Sri Lankan highlands",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-palette="forest"
      data-typography="editorial"
      data-hero="editorial"
      data-theme="light"
      data-density="regular"
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
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
