import type { ProjectSlug } from "./shared";

export type LinkItem = { label: string; href: string };
export type Labeled = { label: string; value: string };

export type ProjectText = {
  name: string;
  oneLiner: string;
  myPart: string;
  role: string;
  period: string;
  place: string;
  visualAlt: string;
  caseStudy: {
    summary: string;
    meta: Labeled[];
    links: LinkItem[];
    product: string;
    problem?: string;
    structure?: { title: string; items: { name: string; detail: string }[] };
    builtHeading?: string;
    built: { title: string; text: string }[];
    notes: string[];
    outcome: string;
  };
};

export type Dictionary = {
  langName: string; // name of THIS language, shown in the switcher of the other one
  meta: {
    title: string;
    description: string;
    pages: Record<"about" | "experience" | "expertise" | "work" | "contact", { title: string; description: string }>;
  };
  nav: {
    work: string;
    experience: string;
    about: string;
    contact: string;
    cv: string;
    cvNote: string;
    home: string;
    homeShort: string;
    expertise: string;
    pageNotes: { about: string; experience: string; expertise: string; work: string; contact: string; notFound: string };
    tagline: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    skip: string;
    toggleTheme: string;
    switchTo: string;
    newTab: string;
  };
  hero: {
    heading: string;
    lead: string;
    facts: Labeled[];
    note: string;
    sayHello: string;
    openFor: string;
    cvLabel: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    myPart: string;
    readCase: string;
    live: string;
    schematic: string;
    screenshot: string;
    alsoBuilt: string;
    alsoBuiltText: string;
    alsoBuiltAlt: string;
    technologies: string;
    logoAlt: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    caseStudy: string;
    items: {
      period: string;
      role: string;
      company: string;
      place: string;
      summary: string;
      caseStudy?: ProjectSlug;
    }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    usedIn: string;
    toolsTitle: string;
    stickers: string[]; // short labels, same order as items
    items: { title: string; text: string; where: string[] }[];
    stackGroups: string[]; // same order as stackItems in shared.ts
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: Labeled[];
    problemSolving: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    text: string;
    copy: string;
    copied: string;
  };
  caseStudy: {
    allWork: string;
    links: string;
    product: string;
    problem: string;
    structure: string;
    built: string;
    notes: string;
    outcome: string;
    screenshots: string;
    next: string;
    email: string;
    titleSuffix: string;
  };
  footer: { builtWith: string; email: string; thanks: string; top: string; pages: string; elsewhere: string };
  notFound: { title: string; text: string; back: string };
  /** Screenshot captions, keyed by file name without the number (e.g. "sign-in"). */
  shotLabels: Record<string, string>;
  projects: Record<ProjectSlug, ProjectText>;
};
