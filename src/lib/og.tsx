import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Shared Open Graph card: brand background, mark, title, one line.
export function ogImage({ eyebrow, title, line }: { eyebrow: string; title: string; line: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#F6F8FB",
          backgroundImage: "radial-gradient(rgba(20,23,31,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          color: "#14171F",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 32 32">
            <path d="M2 2H30V8H8V13H22V19H2Z" fill="#14171F" />
            <path d="M24 13H30V30H2V24H24Z" fill="#2F6FDB" />
          </svg>
          <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.6 }}>Safwat Bilal</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontSize: 24, color: "#2559BD", letterSpacing: 2, textTransform: "uppercase", marginBottom: 18 }}
          >
            {eyebrow}
          </span>
          <span style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2.5, lineHeight: 1.05, maxWidth: 1000 }}>
            {title}
          </span>
          <span style={{ fontSize: 30, color: "#4A5263", marginTop: 24, maxWidth: 980, lineHeight: 1.35 }}>
            {line}
          </span>
        </div>
      </div>
    ),
    ogSize,
  );
}
