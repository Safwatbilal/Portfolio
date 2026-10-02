import { locales } from "@/i18n/config";
import { ogImage, ogSize } from "@/lib/og";

export const alt = "Safwat Bilal, Frontend Developer: clear interfaces for complex products";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Image() {
  return ogImage({
    eyebrow: "Frontend Developer · React, Next.js & TypeScript",
    title: "Clear interfaces for complex products.",
    line: "Multi-role platforms, subscriptions and payments, Arabic & English interfaces.",
  });
}
