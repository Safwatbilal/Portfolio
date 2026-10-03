import { locales } from "@/i18n/config";
import { ogImage, ogSize } from "@/lib/og";

export const alt = "Safwat Bilal, Software Engineer (Mid-Level Frontend · Junior Backend, Node.js & NestJS): clear interfaces for complex products";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Image() {
  return ogImage({
    eyebrow: "Software Engineer (Mid-Level Frontend · Junior Backend)",
    title: "Clear interfaces for complex products.",
    line: "Multi-role platforms, subscriptions, payments and integrations.",
  });
}
