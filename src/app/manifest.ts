import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Safwat Bilal: Software Engineer (Mid-Level Frontend · Junior Backend)",
    short_name: "Safwat Bilal",
    start_url: "/",
    display: "browser",
    background_color: "#161513",
    theme_color: "#161513",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
