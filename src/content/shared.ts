// Language-independent facts. Every value is traceable to
// 00-sources/source-inventory.md. Do not add claims that aren't documented there.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://safwatbilal.vercel.app";

export const profile = {
  name: "Safwat Bilal",
  nameAr: "صفوت بلال",
  email: "safwetbilal65@gmail.com",
  cvPath: "/safwat-bilal-cv.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/safwat-bilal-476006231",
    github: "https://github.com/Safwatbilal",
    gitlab: "https://gitlab.com/safwatbilal",
    codeforces: "https://codeforces.com/profile/Recursive-Thinker",
  },
} as const;

export type ProjectSlug = "kadnya" | "tredro" | "nebu" | "suttor";

export type ProjectBase = {
  slug: ProjectSlug;
  index: string;
  logo: string;
  tags: string[];
  status: "live";
  href: string;
  hrefLabel: string;
  visual: ProjectSlug;
};

// Order = order on the home page.
export const projectBases: ProjectBase[] = [
  {
    slug: "kadnya",
    index: "01",
    logo: "/logos/kadnya.png",
    tags: ["Next.js", "TypeScript", "Micro-frontends", "RTL"],
    status: "live",
    href: "https://kadnya.com",
    hrefLabel: "kadnya.com",
    visual: "kadnya",
  },
  {
    slug: "tredro",
    index: "02",
    logo: "/logos/tredro.png",
    tags: ["React", "Capacitor", "Android", "RTL"],
    status: "live",
    href: "https://www.tredro.online",
    hrefLabel: "tredro.online",
    visual: "tredro",
  },
  {
    slug: "nebu",
    index: "03",
    logo: "/logos/nebu.png",
    tags: ["Next.js", "TypeScript", "React Query", "Real-time"],
    status: "live",
    href: "https://thenebu.com",
    hrefLabel: "thenebu.com",
    visual: "nebu",
  },
  {
    slug: "suttor",
    index: "04",
    logo: "/logos/suttor.png",
    tags: ["Next.js", "Arabic RTL", "Theming"],
    status: "live",
    href: "https://suttor.vercel.app",
    hrefLabel: "suttor.vercel.app",
    visual: "suttor",
  },
];

export const alsoBuiltBase = {
  name: "Belawaseet",
  href: "https://panel.belawaseet.com/",
  linkLabel: "panel.belawaseet.com",
  image: "/images/belawaseet-ads.png",
};

export const stackItems = [
  ["TypeScript", "JavaScript"],
  ["React", "Next.js (App Router)"],
  ["TanStack Query", "Redux Toolkit", "Zustand", "Axios", "REST APIs"],
  ["React Hook Form", "Zod", "Yup"],
  ["Tailwind CSS", "shadcn/ui", "Material UI", "Framer Motion"],
  ["Firebase", "Appwrite", "Capacitor"],
  ["Git", "GitHub", "GitLab"],
] as const;
