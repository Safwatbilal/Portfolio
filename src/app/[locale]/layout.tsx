import type { Metadata, Viewport } from "next";
import { Gochi_Hand, IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Katibeh, Permanent_Marker, Schibsted_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/content";
import { profile, siteUrl } from "@/content/shared";
import { dir, isLocale, locales } from "@/i18n/config";
import { ogImage } from "@/lib/seo";
import "./globals.css";

const grotesk = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const gochi = Gochi_Hand({ subsets: ["latin"], weight: "400", variable: "--font-gochi", display: "swap" });
const marker = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: "--font-marker", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-plex-mono", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-ar",
  display: "swap",
});
const katibeh = Katibeh({ subsets: ["arabic"], weight: "400", variable: "--font-katibeh", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  const name = profile.name;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: d.meta.title, template: `%s · ${name}` },
    description: d.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    keywords: ["Software Engineer", "Information Engineering graduate", "Mid-Level Frontend Developer", "Frontend Developer", "Junior Backend Developer", "React Developer", "Next.js Developer", "TypeScript", "NestJS", "Node.js", "Junior Full-stack Developer", "Micro-frontends", "Third-party integrations", "Syria", "Safwat Bilal", "صفوت بلال", "مطور واجهات أمامية"],
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
      images: [ogImage(locale)],
    },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description, images: [ogImage(locale).url] },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = { themeColor: "#161513" };

// Lets the reveal effects hide content only when JavaScript is running.
// On the home page, the first visit of a session also gets the 8-second paper intro (see Reveal).
const jsScript = `(function(){var d=document.documentElement;d.classList.add("js");try{if(/^.(en|ar).?$/.test(location.pathname)&&!sessionStorage.getItem("intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){sessionStorage.setItem("intro","1");d.classList.add("intro")}}catch(e){}})()`;

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
      className={`${grotesk.variable} ${gochi.variable} ${marker.variable} ${plexMono.variable} ${plexArabic.variable} ${katibeh.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsScript }} />
      </head>
      <body>
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="steel" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#9b9d9f" />
              <stop offset=".35" stopColor="#f4f4f1" />
              <stop offset=".6" stopColor="#b9bbbd" />
              <stop offset="1" stopColor="#7d7f82" />
            </linearGradient>
          </defs>
        </svg>
        <a href="#main" className="skip">
          {d.nav.skip}
        </a>
        <Header locale={locale} nav={d.nav} name={profile.name} />
        {props.children}
        <Footer d={d} locale={locale} />
        <Reveal />
      </body>
    </html>
  );
}
