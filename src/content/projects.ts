export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  index: string;
  name: string;
  oneLiner: string;
  myPart: string;
  role: string;
  period: string;
  place: string;
  tags: string[];
  status: "Live" | "Source";
  primaryLink: ProjectLink;
  visual: "kadnya" | "tredro" | "nebu" | "medicare";
  visualAlt: string;
  caseStudy: {
    summary: string;
    meta: { label: string; value: string }[];
    links: ProjectLink[];
    product: string;
    problem?: string;
    structure?: { title: string; items: { name: string; detail: string }[] };
    built: { title: string; text: string }[];
    builtHeading?: string;
    notes: string[];
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "kadnya",
    index: "01",
    name: "Kadnya",
    oneLiner:
      "An all-in-one platform where Arabic-speaking experts sell courses, sessions and digital products from their own branded site.",
    myPart:
      "Creator control panel, website builder, subscriptions & payments, roles & permissions.",
    role: "Frontend Developer",
    period: "Jul 2025 – present",
    place: "Remote",
    tags: ["Next.js", "TypeScript", "Micro-frontends", "RTL"],
    status: "Live",
    primaryLink: { label: "kadnya.com", href: "https://kadnya.com" },
    visual: "kadnya",
    visualAlt:
      "Schematic: Kadnya's admin, instructor and student areas around the creator control panel and website builder",
    caseStudy: {
      summary:
        "The control panel, website builder, subscriptions and access control for an Arabic platform where experts run their education business.",
      meta: [
        { label: "Role", value: "Frontend Developer" },
        { label: "Period", value: "Jul 2025 – present" },
        { label: "Setup", value: "Remote" },
        { label: "Stack", value: "Next.js, TypeScript, Tailwind CSS, Redux Toolkit, MUI" },
        { label: "Architecture", value: "Micro-frontends" },
      ],
      links: [{ label: "kadnya.com", href: "https://kadnya.com" }],
      product:
        "Kadnya is an all-in-one platform for experts, coaches and academies. From one place they can build a personal website, sell courses, sessions and digital products, and run email and WhatsApp campaigns. It plays a similar role to Kajabi, built for Arabic-speaking creators, with the Saudi market in mind.",
      problem:
        "Creators usually stitch together one tool for courses, another for payments, another for bookings, and then WhatsApp and email to keep students informed. Kadnya puts that into a single product under the creator's own brand.",
      built: [
        {
          title: "Creator control panel",
          text: "The dashboard where creators manage their products, students, orders and invoices.",
        },
        {
          title: "Website builder",
          text: "Lets each creator launch a personal site under their own identity, with their logo, colors, fonts and pages.",
        },
        {
          title: "Subscriptions and payments",
          text: "Subscription plans, pricing, and payment gateway integrations, the flows where precision matters most.",
        },
        {
          title: "Roles and permissions",
          text: "Separate experiences for admins, instructors and students, with access control deciding what each role can see and do.",
        },
        {
          title: "Backend integration",
          text: "Connecting all of the above to the platform's backend services.",
        },
      ],
      notes: [
        "One product, three audiences. Admin, instructor and student views share data but not permissions, so access rules have to stay consistent everywhere they apply.",
        "The platform is split into micro-frontends, so features are built and shipped as separate frontend pieces that come together as one product.",
        "The builder turns each creator's settings into their public site, so the same components have to look right under many different brands.",
        "Arabic-first interface, right-to-left.",
      ],
      outcome: "Live at kadnya.com.",
    },
  },
  {
    slug: "tredro",
    index: "02",
    name: "Tredro",
    oneLiner:
      "Connects distribution companies, their field sales reps and supermarkets in one workflow, through three apps.",
    myPart:
      "Co-founder. Built all three apps and shipped them to the web and Android.",
    role: "Co-founder",
    period: "2026 – present",
    place: "Syria",
    tags: ["React", "Capacitor", "Android", "Arabic"],
    status: "Live",
    primaryLink: { label: "tredro.online", href: "https://www.tredro.online" },
    visual: "tredro",
    visualAlt:
      "Schematic: Tredro's company dashboard, sales-rep app and customer app connected in one order workflow",
    caseStudy: {
      summary:
        "I co-founded Tredro and built its three apps, which connect distribution companies, field sales reps and supermarkets in one workflow.",
      meta: [
        { label: "Role", value: "Co-founder, frontend for all three apps" },
        { label: "Period", value: "2026 – present" },
        { label: "Market", value: "Wholesale distribution, Syria" },
        { label: "Platforms", value: "Web + Android (Capacitor)" },
      ],
      links: [
        { label: "tredro.online", href: "https://www.tredro.online" },
        { label: "Company dashboard", href: "https://dashboard.tredro.online" },
        { label: "Rep app", href: "https://mandoub.tredro.online" },
        { label: "Customer app", href: "https://customer.tredro.online" },
      ],
      product:
        "Tredro is a platform for wholesale distribution. A distribution company manages its sales reps, customers, stock and invoices. Its reps run their daily routes from a phone. Shop owners order stock directly from the companies.",
      problem:
        "In traditional wholesale distribution, orders travel through WhatsApp messages, phone calls and paper invoice books. The company can't easily see where its reps are, whether a product is in the warehouse, or whether invoices match payments. We built Tredro around that gap, and shaped it by talking to people who work in the distribution chain.",
      structure: {
        title: "Three apps, one workflow",
        items: [
          {
            name: "Company dashboard",
            detail:
              "Reps, customers, products, customer orders, invoices, warehouses, rep orders, users & permissions, notifications and KPI dashboards. It can be installed as a standalone app.",
          },
          {
            name: "Sales-rep app, “Mandoub”",
            detail:
              "The day's route by weekday, GPS check-in at each shop, customer balances and cash collection, instant invoices, adding new shops on the road, and an offline mode that saves routes, shop data and invoices on the phone and syncs when the connection returns.",
          },
          {
            name: "Customer app",
            detail: "Supermarket owners order stock directly from distribution companies.",
          },
        ],
      },
      builtHeading: "What I did",
      built: [
        {
          title: "Co-founded the product",
          text: "Shaped what Tredro should be from conversations with the people who would use it.",
        },
        {
          title: "Built all three frontends",
          text: "The company dashboard, the rep app and the customer app.",
        },
        {
          title: "Shipped to web and Android with Capacitor",
          text: "Each app is a web app first and is packaged as an Android APK, so the same code runs in the browser and on the reps' phones.",
        },
      ],
      notes: [
        "Three different users with three different devices and situations: an office dashboard, a phone used on the road with a weak signal, and a shop owner placing an order.",
        "The rep app is designed for field conditions: GPS check-in to verify visits, and offline-first behavior for routes and invoices.",
        "Arabic-first, right-to-left interfaces across all three apps.",
      ],
      outcome:
        "Live on the web, and distributed as three Android apps from tredro.online.",
    },
  },
  {
    slug: "nebu",
    index: "03",
    name: "Nebu",
    oneLiner:
      "A cloud account and security platform for AWS and GCP, with AI-generated compliance reports.",
    myPart:
      "Frontend for account management and reports, real-time notifications, and an independent section of the product I owned.",
    role: "Frontend Developer",
    period: "Jan – Jun 2025",
    place: "Remote, Malaysia",
    tags: ["Next.js", "TypeScript", "React Query", "Real-time"],
    status: "Live",
    primaryLink: { label: "thenebu.com", href: "https://thenebu.com" },
    visual: "nebu",
    visualAlt:
      "Schematic: Nebu's cloud accounts list with a compliance report and a real-time notification",
    caseStudy: {
      summary:
        "Frontend work on a cloud account and security platform for AWS and GCP, at a Malaysia-based company.",
      meta: [
        { label: "Role", value: "Frontend Developer" },
        { label: "Period", value: "Jan – Jun 2025" },
        { label: "Setup", value: "Remote, Malaysia-based team" },
        { label: "Stack", value: "Next.js, React, TypeScript, Tailwind CSS, React Query" },
      ],
      links: [
        { label: "thenebu.com", href: "https://thenebu.com" },
        { label: "app.thenebu.com", href: "https://app.thenebu.com/login" },
      ],
      product:
        "Nebu (“The missing brain for your cloud”) helps teams manage their AWS and GCP accounts and understand their security posture, including AI-powered compliance reports.",
      built: [
        {
          title: "Cloud account management",
          text: "Interfaces for managing AWS and GCP accounts.",
        },
        {
          title: "AI-powered compliance reports",
          text: "Compliance and security reports in the product UI.",
        },
        {
          title: "Real-time notifications",
          text: "Surfacing changes to the user as they happen.",
        },
        {
          title: "An independent section",
          text: "A part of the product I was responsible for.",
        },
      ],
      notes: [
        "A technical B2B domain: cloud accounts, security findings and compliance reports for engineering teams.",
        "Server state handled with React Query. Worked remotely with a Malaysia-based team (UTC+8, from Syria at UTC+3).",
      ],
      outcome: "Platform live at app.thenebu.com.",
    },
  },
  {
    slug: "medicare",
    index: "04",
    name: "MediCare",
    oneLiner:
      "A bilingual patient-records app for doctors: patients, appointments and visits behind a verified sign-in.",
    myPart:
      "My graduation project: the full Next.js app, from auth flows to rich-text notes.",
    role: "Graduation project",
    period: "2026",
    place: "University of Aleppo",
    tags: ["Next.js", "next-intl", "Zod", "Appwrite"],
    status: "Source",
    primaryLink: { label: "Source code", href: "https://github.com/Safwatbilal/sutoor" },
    visual: "medicare",
    visualAlt:
      "Schematic: MediCare's two-step sign-in with a one-time code and an Arabic/English language switch",
    caseStudy: {
      summary:
        "My graduation project: a bilingual patient-records app for doctors, built with Next.js.",
      meta: [
        { label: "Role", value: "Graduation project" },
        { label: "Year", value: "2026" },
        {
          label: "Stack",
          value:
            "Next.js (App Router), TypeScript, next-intl, Zustand, React Hook Form, Zod, Yup, shadcn/ui, Tailwind CSS, Tiptap, Appwrite",
        },
      ],
      links: [{ label: "Source on GitHub", href: "https://github.com/Safwatbilal/sutoor" }],
      product:
        "A web app where doctors manage patients, appointments and visits, available in Arabic and English.",
      built: [
        {
          title: "Verified sign-in flow",
          text: "Registration, email OTP verification, a second verification step at login, a Google sign-in option and a complete-profile step.",
        },
        {
          title: "Patients, appointments and visits",
          text: "Separate services for each, with a banner for the next appointment.",
        },
        {
          title: "Rich-text clinical notes",
          text: "Notes written with Tiptap, plus photo upload and a map-based location picker.",
        },
        {
          title: "Arabic and English",
          text: "Locale-based routing with next-intl, RTL support, and light/dark themes.",
        },
        {
          title: "Validated forms",
          text: "React Hook Form with Zod and Yup schemas.",
        },
        {
          title: "Backend",
          text: "Appwrite, with Next.js route handlers for sign-in and uploads. Sitemap and robots files for SEO.",
        },
      ],
      notes: [],
      outcome:
        "Completed as my graduation project at the University of Aleppo (2026).",
    },
  },
];

export const alsoBuilt = {
  name: "Belawaseet",
  text: "an Arabic RTL admin panel for a property-rental platform (listings, ads, requests, complaints) with Firebase real-time chat and notifications.",
  href: "https://panel.belawaseet.com/",
  linkLabel: "panel.belawaseet.com",
  image: "/images/belawaseet-ads.png",
  imageAlt:
    "Belawaseet admin panel in Arabic, showing the ads management table with search and category filter",
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
