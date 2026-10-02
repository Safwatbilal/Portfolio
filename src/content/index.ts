import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/i18n/config";
import { ar } from "./ar";
import { en } from "./en";
import { projectBases, type ProjectSlug } from "./shared";

const dictionaries = { en, ar };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getProjects(locale: Locale) {
  const d = getDictionary(locale);
  return projectBases.map((base) => ({ ...base, ...d.projects[base.slug], screenshots: getScreenshots(base.slug) }));
}

export type Project = ReturnType<typeof getProjects>[number];

/**
 * Real screenshots: any image in public/projects/<slug>/, sorted by file name
 * (01-…, 02-…). Read at build time. When a folder is empty, the schematic
 * visual is shown instead.
 */
export function getScreenshots(slug: ProjectSlug) {
  try {
    return readdirSync(join(process.cwd(), "public", "projects", slug))
      .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
      .sort()
      .map((f) => `/projects/${slug}/${f}`);
  } catch {
    return [];
  }
}
