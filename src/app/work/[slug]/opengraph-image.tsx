import { getProject, projects } from "@/content/projects";
import { ogImage, ogSize } from "@/lib/og";

export const alt = "Case study by Safwat Bilal";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  return ogImage({
    eyebrow: "Case study",
    title: p?.name ?? "Case study",
    line: p?.caseStudy.summary ?? "",
  });
}
