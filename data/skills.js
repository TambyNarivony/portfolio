import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiExpress, SiPrisma, SiAdobexd, SiFigma } from 'react-icons/si';

export const skills = [
  { name: "HTML5", icon: FaHtml5, category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, category: "Frontend" },
  { name: "JavaScript", icon: FaJs, category: "Frontend" },
  { name: "React.js", icon: FaReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Styling" },
  { name: "React Native", icon: FaMobileAlt, category: "Mobile" },
  { name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { name: "Express.js", icon: SiExpress, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "Firebase", icon: SiFirebase, category: "Backend" },
  { name: "Prisma ORM", icon: SiPrisma, category: "Database" },
  { name: "Git", icon: FaGitAlt, category: "Tools" },
  { name: "Figma", icon: SiFigma, category: "Design" },
  { name: "Adobe XD", icon: SiAdobexd, category: "Design" },
];