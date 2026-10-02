// Single source of truth for personal facts. Every value here is traceable to
// 00-sources/source-inventory.md. Do not add claims that aren't documented there.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://safwatbilal.vercel.app";

export const profile = {
  name: "Safwat Bilal",
  nameAr: "صفوت بلال",
  title: "Frontend Developer",
  specialty: "React, Next.js & TypeScript",
  location: "Aleppo, Syria",
  timezone: "UTC+3",
  email: "safwetbilal65@gmail.com",
  cvPath: "/safwat-bilal-cv.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/safwat-bilal-476006231",
    github: "https://github.com/Safwatbilal",
    gitlab: "https://gitlab.com/safwatbilal",
    codeforces: "https://codeforces.com/profile/Recursive-Thinker",
  },
} as const;

export const seo = {
  title: "Safwat Bilal: Frontend Developer (React, Next.js, TypeScript)",
  description:
    "Frontend developer building multi-role web platforms (dashboards, subscriptions, real-time and Arabic/English interfaces) with React, Next.js and TypeScript.",
} as const;

export const hero = {
  label: "Frontend Developer · React, Next.js & TypeScript",
  heading: "Clear interfaces for complex products.",
  lead: "I'm Safwat Bilal, a frontend developer from Aleppo, Syria. Since 2024 I've been building the logged-in side of real products: creator dashboards, subscription and payment flows, and field-sales apps, in Arabic and English.",
  proof: [
    { label: "Now", text: "Frontend Developer at Kadnya, a platform for Arabic-speaking creators" },
    { label: "Co-founder", text: "Tredro, 3 live apps for wholesale distribution" },
    { label: "Bilingual", text: "Arabic & English interfaces, RTL included" },
  ],
} as const;

export const capabilities = [
  {
    title: "Multi-role product interfaces",
    text: "Dashboards where admins, instructors, students, reps or customers each see something different, and permissions decide what they can do.",
    where: ["Kadnya", "Tredro", "Nebu"],
  },
  {
    title: "Arabic & English, RTL included",
    text: "Interfaces that work in both directions: locale routing with next-intl and i18next, mirrored layouts, Arabic-first UIs.",
    where: ["Kadnya", "Tredro", "MediCare", "Belawaseet"],
  },
  {
    title: "Payments, real-time and offline",
    text: "Subscription plans and payment gateways, live notifications and chat, and a field app that keeps working without a connection.",
    where: ["Kadnya", "Nebu", "Belawaseet", "Tredro"],
  },
  {
    title: "From web to Android",
    text: "Web apps packaged as Android apps with Capacitor, so one codebase runs in the browser and on a phone.",
    where: ["Tredro"],
  },
] as const;

export const stack = [
  { group: "Languages", items: ["TypeScript", "JavaScript"] },
  { group: "Frameworks", items: ["React", "Next.js (App Router)"] },
  { group: "Data & state", items: ["TanStack Query", "Redux Toolkit", "Zustand", "Axios", "REST APIs"] },
  { group: "Forms & validation", items: ["React Hook Form", "Zod", "Yup"] },
  { group: "UI", items: ["Tailwind CSS", "shadcn/ui", "Material UI", "Framer Motion"] },
  { group: "Platforms", items: ["Firebase", "Appwrite", "Capacitor"] },
  { group: "Workflow", items: ["Git", "GitHub", "GitLab"] },
] as const;

export const about = {
  paragraphs: [
    "I studied Information Engineering at the University of Aleppo and graduated in 2026. Before I worked on frontend, I did competitive programming: I've solved more than 1,500 problems on Codeforces, AtCoder and CSES, and in the 2022–2023 season I placed 10th individually in Aleppo, and my team placed 6th in Aleppo and 22nd in Syria.",
    "That background still shapes how I work. A large product is mostly a hard problem broken into small pieces that behave predictably, and that is the part of frontend work I enjoy most.",
  ],
  facts: [
    { label: "Based in", value: "Aleppo, Syria (UTC+3)" },
    { label: "Education", value: "B.Sc. Information Engineering, University of Aleppo, 2026" },
    { label: "Languages", value: "Arabic (native) · English (C1 reading, writing, listening; B2 speaking)" },
  ],
} as const;

export const contact = {
  heading: "Get in touch",
  text: "I'm open to new frontend opportunities, remote or with teams building in Arabic and English. Email is the fastest way to reach me.",
} as const;
