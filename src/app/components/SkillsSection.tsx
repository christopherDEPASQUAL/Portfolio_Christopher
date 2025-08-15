"use client";

import { IconType } from "react-icons";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaPhp,
  FaDocker,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiOpencv,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiShopify,
  SiWebflow,
  SiFigma,
  SiPostman,

} from "react-icons/si";
import Image from "next/image";


type Skill = {
  name: string;
  icon: IconType | string;
  color: string;
  category: string;
};

const skills: Skill[] = [

  { name: "React", icon: FaReact, color: "#61DBFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: FaJsSquare, color: "#f0db4f", category: "Frontend" },
  { name: "Webflow", icon: SiWebflow, color: "#4353FF", category: "Frontend" },

  { name: "Python", icon: FaPython, color: "#3776AB", category: "Backend" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", category: "Backend" },
  { name: "Flask", icon: "./icons/flask.svg", color: "#000000", category: "Backend" },
  { name: "Node.js", icon: FaNodeJs, color: "#83CD29", category: "Backend" },
  { name: "PHP", icon: FaPhp, color: "#777BB4", category: "Backend" },

  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
  { name: "SQL", icon: FaDatabase, color: "#f0db4f", category: "Database" },
  { name: "NoSQL", icon: SiMongodb, color: "#4DB33D", category: "Database" },

  { name: "Docker", icon: FaDocker, color: "#0db7ed", category: "Outils" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Outils" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F", category: "Outils" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8", category: "Outils" },
  { name: "Shopify", icon: SiShopify, color: "#96BF48", category: "Outils" },
  { name: "SEO", icon: "./icons/seo.svg", color: "none", category: "Outils" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Outils" },
  { name: "Adobe XD", icon: "./icons/adobexd.svg", color: "none", category: "Outils" },
];


const categories = ["Frontend", "Backend","Database", "Outils"];

const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto px-4 md:px-8 lg:px-40 py-12">
      {/* Titre */}
      <h2 className="text-3xl font-bold text-blue-400 mb-10">
        {'// Mes Compétences'}
      </h2>

      {/* Boucle par catégories */}
      <div className="space-y-12 max-w-6xl mx-auto px-4">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 drop-shadow-lg">{cat}</h3>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {skills
                .filter((s) => s.category === cat)
                .map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <div
      className="flex flex-col items-center p-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/40 transition-all"
    >
      {typeof Icon === "string" ? (
        <Image src={Icon} alt={skill.name} width={38} height={38} />
      ) : (
        <Icon size={38} color={skill.color} />
      )}
      <p className="mt-3 text-sm font-medium text-center text-white">{skill.name}</p>
    </div>
  );
};

export default SkillsSection;
