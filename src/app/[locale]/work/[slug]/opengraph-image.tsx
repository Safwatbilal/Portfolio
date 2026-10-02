import { getDictionary } from "@/content";
import { projectBases } from "@/content/shared";
import { locales } from "@/i18n/config";
import { ogImage, ogSize } from "@/lib/og";

export const alt = "Case study by Safwat Bilal";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.flatMap((locale) => projectBases.map((p) => ({ locale, slug: p.slug })));
}

// OG cards are rendered in English for both locales (the OG renderer's
// built-in font has no Arabic glyphs).
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getDictionary("en").projects[slug as keyof ReturnType<typeof getDictionary>["projects"]];
  return ogImage({ eyebrow: "Case study", title: p?.name ?? "Case study", line: p?.caseStudy.summary ?? "" });
}
