import type { IconType } from "react-icons";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSelenium,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { ClipboardCheck, TestTube2 } from "lucide-react";

type TechIcon = { icon: IconType; color: string };

export const techIcons: Record<string, TechIcon> = {
  Java: { icon: DiJava, color: "#f89820" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  Python: { icon: SiPython, color: "#ffd43b" },
  React: { icon: SiReact, color: "#61dafb" },
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#1572b6" },
  "Spring Boot": { icon: SiSpring, color: "#6db33f" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  Selenium: { icon: SiSelenium, color: "#43b02a" },
  Git: { icon: SiGit, color: "#f05032" },
  GitHub: { icon: SiGithub, color: "#e4e4e7" },
  Jira: { icon: SiJira, color: "#0052cc" },
  "Testes automatizados": { icon: TestTube2, color: "#22d3ee" },
  "Automated testing": { icon: TestTube2, color: "#22d3ee" },
  "Testes manuais": { icon: ClipboardCheck, color: "#8b5cf6" },
  "Manual testing": { icon: ClipboardCheck, color: "#8b5cf6" },
};
