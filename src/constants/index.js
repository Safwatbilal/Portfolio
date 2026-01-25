export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const myProjects = [
  {
    title: 'Belawaseet - Rental Dashboard Platform',
    desc: 'Admin dashboard with Firebase for real-time chat and notifications to manage house rentals efficiently.',
    subdesc:
      'Built with Next.js, Tailwind CSS, TypeScript, and React Query, Belawaseet offers a user-friendly interface to streamline rental management, including listing properties, tracking payments, and monitoring rental agreements.',
    href: 'https://belawaseet.vercel.app/home',
    texture: '/project/9.png',
    texture2: '/project/10.png',
    logo: '/assets/BilaWasit.png',
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #1E293B',
      boxShadow: '0px 0px 60px 0px #2563EB66',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { id: 2, name: 'TailwindCSS', path: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      {
        id: 3,
        name: 'TypeScript',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        id: 4,
        name: 'React Query',
        path: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png',
      },
      {
        id: 5,
        name: 'Firebase',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
      { id: 6, name: 'Next.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    ],
  },

  {
    title: 'Nebu - Cloud Account & Security Platform',
    desc: 'Cloud account management with AI-powered security reports and real-time notifications for AWS & GCP.',
    subdesc:
      'Developed cloud account management & security platform with AI-powered compliance reports. Implemented real-time notifications and managed an independent section of the project.',
    href: 'https://nebu.com.my/',
    texture: '/project/nebu1.png',
    texture2: '/project/nebu2.png',
    logo: 'assets/nebu.svg',
    logoStyle: {
      backgroundColor: '#1E293B',
      border: '0.2px solid #334155',
      boxShadow: '0px 0px 50px 0px #3B82F6AA',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { id: 2, name: 'TailwindCSS', path: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      {
        id: 3,
        name: 'TypeScript',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      { id: 4, name: 'Next.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      {
        id: 5,
        name: 'React Query',
        path: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png',
      },
    ],
  },

  {
    title: 'Turbo Type - Typing Speed & Competition Platform',
    desc: 'Personal typing speed and accuracy test project using Appwrite as backend with real-time feedback.',
    subdesc:
      'Built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion, Turbo Type also lets you organize typing competitions with friends for a fun and competitive experience.',
    href: 'https://turbo-type-c7ku.vercel.app/',
    texture: 'project/3.png',
    texture2: 'project/4.png',
    logo: 'https://cdn-icons-png.flaticon.com/512/2491/2491154.png',
    logoStyle: {
      backgroundColor: '#1E293B',
      border: '0.2px solid #334155',
      boxShadow: '0px 0px 50px 0px #3B82F6AA',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { id: 2, name: 'TailwindCSS', path: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      {
        id: 3,
        name: 'TypeScript',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      { id: 4, name: 'Framer Motion', path: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
      { id: 5, name: 'Next.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      {
        id: 6,
        name: 'Appwrite',
        path: 'https://appwrite.io/assets/logomark/logo.png',
      },
    ],
  },

  {
    title: 'Kadnya Educational Platform',
    desc: 'Educational platform with Admin, Instructor, and Student roles, featuring subscription systems and payment gateway integrations.',
    subdesc:
      'Developed with Micro-Frontends architecture, implementing Roles & Permissions, subscription systems, pricing plans, and server-side integration with backend services.',
    href: '#', // Private project
    texture: '/project/kadnya1.png',
    texture2: '/project/kadnya2.png',
    logo: '/assets/Logo-2.svg',
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #1E293B',
      boxShadow: '0px 0px 60px 0px #10B981AA',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      {
        id: 2,
        name: 'TypeScript',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      { id: 3, name: 'TailwindCSS', path: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      {
        id: 4,
        name: 'Redux Toolkit',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      },
      { id: 5, name: 'Material UI', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'Ulutech',
    pos: 'Frontend Developer Intern',
    duration: '07/2024 - 12/2024',
    title:
      'First professional experience working on real-world web projects at Ulutech in Aleppo. Learned project structuring, collaborative workflows, and frontend best practices in an office environment.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Nebu',
    pos: 'Frontend Developer',
    duration: '01/2025 - 06/2025',
    title:
      'Worked remotely as a frontend developer at Nebu (Malaysia-based company), developing cloud account management & security platform with AI-powered compliance reports (AWS & GCP). Implemented real-time notifications and managed an independent section of the project.',
    icon: 'assets/nebu.svg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Kadnya',
    pos: 'Frontend Developer',
    duration: '07/2025 - Present',
    title:
      'Currently working remotely as a frontend developer at Kadnya, developing educational platforms with Admin, Instructor, and Student roles. Built subscription systems, pricing plans, payment gateway integrations, and contributed to company portfolio project using Micro-Frontends architecture.',
    icon: '/assets/Logo-2.svg',
    animation: 'victory',
  },
];

export const problemSolvingExperiences = [
  {
    id: 1,
    name: 'ACPC 2022-2023',
    pos: 'Problem Solver',
    duration: '2022 - 2023',
    title:
      'Participated in the Aleppo Collegiate Programming Contest (ACPC) achieving 10th place in individual ranking and 6th place in team ranking in Aleppo, 22nd nationwide in Syria.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Competitive Programming',
    pos: 'Problem Solver',
    duration: '2020 - Present',
    title:
      'Solved 1500+ problems on Codeforces, CSES, and AtCoder, enhancing problem-solving and algorithmic thinking skills in C++. Active on competitive programming platforms with strong foundation in Data Structures and Algorithms.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    animation: 'clapping',
  },
];

export const platformLinks = [
  {
    name: 'Codeforces',
    path: 'https://sta.codeforces.com/s/81454/images/codeforces-logo-with-telegram.png',
    url: 'https://codeforces.com/profile/Recursive-Thinker',
  },
  {
    name: 'LeetCode',
    path: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
    url: 'https://leetcode.com/safwatbilal',
  },
  {
    name: 'CSES',
    path: 'https://cses.fi/file/cses_logo_light.svg',
    url: 'https://cses.fi/user/safwatbilal',
  },
];

export const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:safwetbilal65@gmail.com',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg',
    color: '#EA4335',
    display: 'safwetbilal65@gmail.com',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/safwat-bilal-476006231',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
    color: '#0A66C2',
    display: 'LinkedIn Profile',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Safwatbilal',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
    color: '#FFFFFF',
    display: 'GitHub Profile',
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/safwatbilal',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gitlab.svg',
    color: '#FC6D26',
    display: 'GitLab Profile',
  },
];