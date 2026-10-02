import { readdirSync, readFileSync } from "node:fs";
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
  return projectBases.map((base) => ({
    ...base,
    ...d.projects[base.slug],
    screenshots: getScreenshots(base.slug).map((s) => ({
      ...s,
      label: d.shotLabels[s.key] ?? s.key.replace(/-/g, " "),
    })),
  }));
}

export type Project = ReturnType<typeof getProjects>[number];
export type Screenshot = Project["screenshots"][number];

/**
 * Real screenshots: any image in public/projects/<slug>/, sorted by file name
 * (01-…, 02-…), read at build time. A name ending in "-phone" is shown in a
 * phone frame. A sibling named "<name>.dark.<ext>" is shown instead in dark
 * mode. The first non-phone image is the project's main visual; when a
 * folder is empty, the schematic is shown instead.
 */
function getScreenshots(slug: ProjectSlug) {
  const dir = join(process.cwd(), "public", "projects", slug);
  let files: string[] = [];
  try {
    files = readdirSync(dir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort();
  } catch {
    return [];
  }
  return files
    .filter((file) => !/\.dark\.[^.]+$/.test(file))
    .map((file) => {
      const stem = file.replace(/\.[^.]+$/, "");
      const key = stem.replace(/^\d+-/, "");
      const { width, height } = imageSize(join(dir, file));
      const dark = files.find((f) => f.startsWith(`${stem}.dark.`));
      return {
        src: `/projects/${slug}/${file}`,
        darkSrc: dark ? `/projects/${slug}/${dark}` : undefined,
        key,
        width,
        height,
        phone: /-phone$/.test(stem),
      };
    });
}

/** Reads width/height from a PNG header; other formats fall back to 16:10. */
function imageSize(path: string) {
  const b = readFileSync(path);
  if (b.length > 24 && b.toString("ascii", 1, 4) === "PNG") {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  return { width: 1440, height: 900 };
}
