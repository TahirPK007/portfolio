import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpo,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiGit,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { IconType } from "react-icons";

// ---------------------------------------------------------------------------
// EDIT YOUR PERSONAL INFO HERE
// ---------------------------------------------------------------------------
export const siteConfig = {
  name: "Tahir Mehmood",
  role: "React & React Native Developer",
  location: "Pakistan",
  photo: "/profile.png",
  tagline:
    "I build fast, modern web apps with React & Next.js and cross-platform mobile apps with React Native.",
  about:
    "I'm a frontend & mobile developer based in Pakistan, working with clients worldwide. I specialize in the React ecosystem — building responsive web apps with React JS and Next.js, and cross-platform mobile apps with React Native. I care about good UX, readable code, and shipping real products.",
  email: "tahir.mehmood9425@gmail.com",
  // Get a free endpoint at https://formspree.io and paste it here:
  formspreeEndpoint: "https://formspree.io/f/xdavkbjy",
};

// ---------------------------------------------------------------------------
// SOCIAL LINKS
// ---------------------------------------------------------------------------
export const socials = {
  github: "https://github.com/TahirPK007",
  linkedin: "https://www.linkedin.com/in/tahir-mehmood007/",
  whatsapp: "https://wa.me/923014797805",
  email: "mailto:tahir.mehmood9425@gmail.com",
};

// ---------------------------------------------------------------------------
// SKILLS
// ---------------------------------------------------------------------------
export type Skill = { name: string; icon: IconType; color: string };

export const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Web Development",
    items: [
      { name: "React JS", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#ffffff" },
    ],
  },
  {
    category: "Tools & Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

// ---------------------------------------------------------------------------
// PROJECTS
// Add screenshots to /public/projects/<folder>/ and reference them below.
// "type" must be either "web" or "mobile".
// ---------------------------------------------------------------------------
export type Project = {
  title: string;
  type: "web" | "mobile";
  description: string;
  tech: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Sample Web App",
    type: "web",
    description:
      "A responsive web application built with Next.js and Tailwind CSS. Replace this with one of your real projects.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    images: ["/projects/sample-web/screenshot1.svg"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/sample-web",
  },
  {
    title: "Sample Mobile App",
    type: "mobile",
    description:
      "A cross-platform mobile app built with React Native and Expo. Replace this with one of your real projects.",
    tech: ["React Native", "Expo", "JavaScript"],
    images: ["/projects/sample-mobile/screenshot1.svg"],
    githubUrl: "https://github.com/your-username/sample-mobile",
  },
];
