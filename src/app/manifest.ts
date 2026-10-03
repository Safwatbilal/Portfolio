import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Safwat Bilal: Mid-Level Frontend Developer · Junior Backend (NestJS)",
    short_name: "Safwat Bilal",
    start_url: "/",
    display: "browser",
    background_color: "#f6f8fb",
    theme_color: "#2f6fdb",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
