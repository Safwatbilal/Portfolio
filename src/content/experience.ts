export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  place: string;
  summary: string;
  caseStudy?: string;
};

export const experience: ExperienceItem[] = [
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
];
