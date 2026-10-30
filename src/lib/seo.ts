import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { profile } from "@/content/shared";
import type { Locale } from "@/i18n/config";

/** Social preview: a 1200x630 shot of the home identity block only (no header or board), taken from the running site (files in public/og). */
export function ogImage(locale: Locale, slug?: string) {
  const alt =
    locale === "ar"
      ? "Safwat Bilal، مهندس برمجيات: Frontend وBackend وProblem Solving"
      : "Safwat Bilal, software engineer: frontend, backend and problem solving";
  return { url: `/og/${locale}${slug ? `-${slug}` : ""}.jpg`, width: 1200, height: 630, alt };
}

type PageKey = "about" | "experience" | "expertise" | "work" | "contact";

/** Title, description, canonical, hreflang, Open Graph and Twitter tags for one of the top-level pages. */
export function pageMetadata(locale: Locale, key: PageKey): Metadata {
  const { title, description } = getDictionary(locale).meta.pages[key];
  const path = `/${key}`;
  const image = ogImage(locale);
  return {
    title,
    description,
    alternates: { canonical: `/${locale}${path}`, languages: { en: `/en${path}`, ar: `/ar${path}` } },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title: `${title} · ${profile.name}`,
      description,
      url: `/${locale}${path}`,
      locale: locale === "ar" ? "ar_SY" : "en_US",
      images: [image],
    },
    twitter: { card: "summary_large_image", title: `${title} · ${profile.name}`, description, images: [image.url] },
  };
}
