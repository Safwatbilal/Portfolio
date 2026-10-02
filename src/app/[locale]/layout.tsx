import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getDictionary } from "@/content";
import { profile, siteUrl } from "@/content/shared";
import { dir, isLocale, locales } from "@/i18n/config";
import "./globals.css";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-ar",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-plex-mono", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  const name = locale === "ar" ? profile.nameAr : profile.name;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: d.meta.title, template: `%s · ${name}` },
    description: d.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    keywords: ["Frontend Developer", "React Developer", "Next.js Developer", "TypeScript", "NestJS", "Node.js", "Junior Full-stack Developer", "Arabic RTL", "Syria", "Safwat Bilal", "صفوت بلال", "مطور واجهات أمامية"],
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title: d.meta.title,
      description: d.meta.description,
      url: `/${locale}`,
      locale: locale === "ar" ? "ar_SY" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SY",
    },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#121520" },
  ],
};

// Runs before paint so a saved theme never flashes.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default async function RootLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      suppressHydrationWarning
      // Lets Next turn smooth scrolling off while it restores position on navigation.
      data-scroll-behavior="smooth"
      className={`${plex.variable} ${plexArabic.variable} ${plexMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-accent px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:inset-s-4 focus:top-3"
        >
          {d.nav.skip}
        </a>
        <Header locale={locale} nav={d.nav} name={profile.name} />
        <main id="main" className="flex-1">
          {props.children}
        </main>
        <Footer d={d} />
      </body>
    </html>
  );
}
