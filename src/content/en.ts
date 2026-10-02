import type { Dictionary } from "./types";

export const en: Dictionary = {
  langName: "English",
  meta: {
    title: "Safwat Bilal: Frontend Developer growing into Full-stack (React, Next.js, NestJS)",
    description:
      "Frontend developer building multi-role web platforms (dashboards, subscriptions, real-time and Arabic/English interfaces) with React, Next.js and TypeScript, with junior backend experience in Node.js and NestJS.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    cv: "CV",
    cvNote: "(PDF)",
    home: "Safwat Bilal, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    skip: "Skip to content",
    toggleTheme: "Toggle dark mode",
    switchTo: "العربية",
    newTab: "(opens in a new tab)",
  },
  hero: {
    label: "Frontend Developer · Junior on the backend with Node.js & NestJS",
    heading: "Clear interfaces for complex products.",
    lead: "I'm Safwat Bilal, a frontend developer from Aleppo, Syria, with junior-level backend knowledge in Node.js and NestJS. Since 2023 I've been building the logged-in side of real products: creator dashboards, subscription and payment flows, and field-sales apps, in Arabic and English.",
    proof: [
      { label: "Now", text: "Frontend Developer at Kadnya, a platform for Arabic-speaking creators" },
      { label: "Co-founder", text: "Tredro, a startup built with the wholesale market, now in talks with merchants" },
      { label: "Backend", text: "Junior with Node.js & NestJS, growing toward full-stack" },
    ],
    ctaWork: "See selected work",
    ctaCv: "Download CV",
  },
  work: {
    eyebrow: "Work",
    title: "Selected work",
    intro: "Four products, each with a different kind of complexity.",
    myPart: "My part:",
    readCase: "Read case study",
    live: "Live",
    schematic: "Schematic, not a screenshot",
    screenshot: "Screenshot",
    alsoBuilt: "Also built",
    alsoBuiltText:
      "an Arabic RTL admin panel for a property-rental platform (listings, ads, requests, complaints) with Firebase real-time chat and notifications.",
    alsoBuiltAlt:
      "Belawaseet admin panel in Arabic, showing the ads management table with search and category filter",
    technologies: "Technologies",
    logoAlt: "logo",
  },
  experience: {
    eyebrow: "Career",
    title: "Experience",
    caseStudy: "Case study",
    items: [
      {
        period: "Jul 2025 – Present",
        role: "Frontend Developer",
        company: "Kadnya",
        place: "Remote",
        summary:
          "Building the creator control panel, website builder, subscriptions, payments and role-based access for an Arabic creator platform.",
        caseStudy: "kadnya",
      },
      {
        period: "2026 – Present",
        role: "Co-founder",
        company: "Tredro",
        place: "Syria",
        summary:
          "Building a wholesale distribution platform: company dashboard, sales-rep app and customer app.",
        caseStudy: "tredro",
      },
      {
        period: "Jan 2025 – Jun 2025",
        role: "Frontend Developer",
        company: "Nebu",
        place: "Remote, Malaysia",
        summary:
          "Built frontend features for a cloud account and security platform, including real-time notifications and AI compliance reports, and owned an independent section of the product.",
        caseStudy: "nebu",
      },
      {
        period: "Jul 2024 – Dec 2024",
        role: "Frontend Developer Intern",
        company: "Ulutech",
        place: "Aleppo",
        summary:
          "First professional role: worked on real-world web projects as part of a team, using a shared Git workflow.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "What I work on",
    intro: "Grouped by where I've actually used it.",
    usedIn: "Used in:",
    items: [
      {
        title: "Multi-role product interfaces",
        text: "Dashboards where admins, instructors, students, reps or customers each see something different, and permissions decide what they can do.",
        where: ["Kadnya", "Tredro", "Nebu"],
      },
      {
        title: "Arabic & English, RTL included",
        text: "Interfaces that work in both directions: locale routing with next-intl and i18next, mirrored layouts, Arabic-first UIs.",
        where: ["Kadnya", "Tredro", "Suttor", "Belawaseet"],
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
    ],
    stackGroups: ["Languages", "Frameworks", "Data & state", "Forms & validation", "UI", "Backend (working knowledge)", "Platforms", "Workflow"],
  },
  about: {
    eyebrow: "About",
    title: "Background",
    paragraphs: [
      "I studied Information Engineering at the University of Aleppo and graduated in 2026. Before I worked on frontend, I did competitive programming: I've solved more than 1,500 problems on Codeforces, AtCoder and CSES, and in the 2022–2023 season I placed 10th individually in Aleppo, and my team placed 6th in Aleppo and 22nd in Syria.",
      "That background still shapes how I work. A large product is mostly a hard problem broken into small pieces that behave predictably, and that is the part of frontend work I enjoy most.",
      "My professional experience is on the frontend. On the backend, I have working knowledge of Node.js and NestJS, which helps me understand the APIs my interfaces depend on, and it is the side I am growing next.",
    ],
    facts: [
      { label: "Based in", value: "Aleppo, Syria (UTC+3)" },
      { label: "Education", value: "B.Sc. Information Engineering, University of Aleppo, 2026" },
      { label: "Languages", value: "Arabic (native) · English (C1 reading, writing, listening; B2 speaking)" },
    ],
    problemSolving: "Problem solving",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Get in touch",
    text: "I'm open to new frontend or junior full-stack opportunities, remote or with teams building in Arabic and English. Email is the fastest way to reach me.",
    copy: "Copy email",
    copied: "Copied",
  },
  caseStudy: {
    allWork: "All work",
    links: "Links",
    product: "The product",
    problem: "The problem",
    structure: "How it's put together",
    built: "What I built",
    notes: "Engineering notes",
    outcome: "Outcome",
    screenshots: "Screens",
    next: "Next project",
    email: "Email Safwat",
    titleSuffix: "case study",
  },
  footer: { builtWith: "Built with Next.js & TypeScript", email: "Email" },
  notFound: {
    title: "This page doesn't exist.",
    text: "The link may be old. The work is still here.",
    back: "Back to home",
  },
  shotLabels: {
    "sign-in": "Sign-in screen",
    "dashboard-sign-in": "Company dashboard, sign-in",
    "rep-app-phone": "Rep app on Android",
    "customer-app-phone": "Customer app on Android",
    "dashboard-app-phone": "Company dashboard on a phone",
    "author-sign-up": "Author sign-up",
    "sign-in-phone": "Sign-in on a phone",
  },
  projects: {
    kadnya: {
      name: "Kadnya",
      oneLiner:
        "An all-in-one platform where Arabic-speaking experts sell courses, sessions and digital products from their own branded site.",
      myPart: "Creator control panel, website builder, subscriptions & payments, roles & permissions.",
      role: "Frontend Developer",
      period: "Jul 2025 – present",
      place: "Remote",
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
          { title: "Creator control panel", text: "The dashboard where creators manage their products, students, orders and invoices." },
          { title: "Website builder", text: "Lets each creator launch a personal site under their own identity, with their logo, colors, fonts and pages." },
          { title: "Subscriptions and payments", text: "Subscription plans, pricing, and payment gateway integrations, the flows where precision matters most." },
          { title: "Roles and permissions", text: "Separate experiences for admins, instructors and students, with access control deciding what each role can see and do." },
          { title: "Backend integration", text: "Connecting all of the above to the platform's backend services." },
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
    tredro: {
      name: "Tredro",
      oneLiner:
        "Connects distribution companies, their field sales reps and supermarkets in one workflow, through three apps.",
      myPart: "Co-founder. Built all three apps and shipped them to the web and Android.",
      role: "Co-founder",
      period: "2026 – present",
      place: "Syria",
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
          title: "three apps, one workflow",
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
            { name: "Customer app", detail: "Supermarket owners order stock directly from distribution companies." },
          ],
        },
        builtHeading: "What I did",
        built: [
          { title: "Co-founded the product", text: "Shaped what Tredro should be from conversations with the people who would use it." },
          { title: "Built all three frontends", text: "The company dashboard, the rep app and the customer app." },
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
        outcome: "Live on the web, and distributed as three Android apps from tredro.online.",
      },
    },
    nebu: {
      name: "Nebu",
      oneLiner: "A cloud account and security platform for AWS and GCP, with AI-generated compliance reports.",
      myPart:
        "Frontend for account management and reports, real-time notifications, and an independent section of the product I owned.",
      role: "Frontend Developer",
      period: "Jan – Jun 2025",
      place: "Remote, Malaysia",
      visualAlt: "Schematic: Nebu's cloud accounts list with a compliance report and a real-time notification",
      caseStudy: {
        summary: "Frontend work on a cloud account and security platform for AWS and GCP, at a Malaysia-based company.",
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
          { title: "Cloud account management", text: "Interfaces for managing AWS and GCP accounts." },
          { title: "AI-powered compliance reports", text: "Compliance and security reports in the product UI." },
          { title: "Real-time notifications", text: "Surfacing changes to the user as they happen." },
          { title: "An independent section", text: "A part of the product I was responsible for." },
        ],
        notes: [
          "A technical B2B domain: cloud accounts, security findings and compliance reports for engineering teams.",
          "Server state handled with React Query. Worked remotely with a Malaysia-based team (UTC+8, from Syria at UTC+3).",
        ],
        outcome: "Platform live at app.thenebu.com.",
      },
    },
    suttor: {
      name: "Suttor",
      oneLiner:
        "An Arabic platform for readers and writers: build your own library, track your reading, and follow authors and articles.",
      myPart: "My graduation project, live on the web.",
      role: "Graduation project",
      period: "2026",
      place: "University of Aleppo",
      visualAlt: "Schematic: Suttor's reading list with daily progress and notes",
      caseStudy: {
        summary: "My graduation project: an Arabic platform for readers and writers, built with Next.js.",
        meta: [
          { label: "Role", value: "Graduation project" },
          { label: "Year", value: "2026" },
          { label: "University", value: "University of Aleppo" },
          { label: "Stack", value: "Next.js" },
        ],
        links: [{ label: "suttor.vercel.app", href: "https://suttor.vercel.app" }],
        product:
          "Suttor (سطور, “lines”) is an Arabic platform for readers. Readers build a personal library, keep a reading list, log their daily progress and write notes on what they read. Writers can join as authors, and readers can browse an authors directory and an articles section.",
        builtHeading: "What's in it",
        built: [
          { title: "Reading library", text: "Add books to a reading list, track progress day by day, and write notes and thoughts." },
          { title: "Authors directory", text: "Browse authors, search by name, and view registered and unregistered authors separately." },
          { title: "Articles", text: "The latest articles, with filters by category and by author." },
          { title: "Accounts", text: "Reader sign-in, plus a separate sign-up flow for writers who want to join as authors." },
          { title: "Arabic-first design", text: "Right-to-left throughout, with a light/dark theme switch." },
        ],
        notes: [],
        outcome: "Completed as my graduation project at the University of Aleppo (2026). Live at suttor.vercel.app.",
      },
    },
  },
};
