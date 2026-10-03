import { locales } from "@/i18n/config";
import { ogImage, ogSize } from "@/lib/og";

export const alt = "Safwat Bilal, Mid-Level Frontend Developer with junior backend (Node.js, NestJS): clear interfaces for complex products";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Image() {
  return ogImage({
    eyebrow: "Mid-Level Frontend Developer · Junior Backend (Node.js, NestJS)",
    title: "Clear interfaces for complex products.",
    line: "Multi-role platforms, subscriptions, payments and integrations.",
  });
}
