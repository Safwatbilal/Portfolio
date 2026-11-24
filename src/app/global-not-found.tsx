import type { Metadata, Viewport } from "next";
import { Gochi_Hand, IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Permanent_Marker, Schibsted_Grotesk } from "next/font/google";
import { PaperClip } from "@/components/ui";
import { ar } from "@/content/ar";
import { en } from "@/content/en";
import { profile } from "@/content/shared";
import "./[locale]/globals.css";

// Any URL that matches no route lands here. It skips the [locale] layout, so it
// loads its own fonts and shows both languages (the URL tells us neither).
const grotesk = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400", variable: "--font-gochi", display: "swap" });
const marker = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: "--font-marker", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-plex-mono", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-plex-ar", display: "swap" });

export const metadata: Metadata = {
  title: `404 · ${profile.name}`,
  description: en.notFound.text,
};

export const viewport: Viewport = { themeColor: "#161513" };

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${gochi.variable} ${marker.variable} ${plexMono.variable} ${plexArabic.variable} antialiased`}
    >
      <body>
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="steel" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#9b9d9f" />
              <stop offset=".35" stopColor="#f4f4f1" />
              <stop offset=".6" stopColor="#b9bbbd" />
              <stop offset="1" stopColor="#7d7f82" />
            </linearGradient>
          </defs>
        </svg>
        <main id="main" tabIndex={-1}>
          <article className="sheet" data-tilt="c">
            <PaperClip className="clip" />
            <div className="lost">
              <div className="big" aria-hidden="true">
                404
              </div>
              <div className="hero-in">
                <h1>{en.notFound.title}</h1>
                <p>{en.notFound.text}</p>
                <div lang="ar" dir="rtl">
                  <h2 className="lost-ar">{ar.notFound.title}</h2>
                  <p>{ar.notFound.text}</p>
                </div>
                <div className="btn-row">
                  {/* Plain <a>: this page lives outside the app's router. */}
                  <a href="/en" className="btn btn-red">
                    {en.notFound.back}
                  </a>
                  <a href="/ar" className="btn btn-line" lang="ar" dir="rtl">
                    {ar.notFound.back}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
      </body>
    </html>
  );
}
