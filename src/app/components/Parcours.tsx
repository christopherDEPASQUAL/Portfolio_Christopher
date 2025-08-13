"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FaCircle } from "react-icons/fa";

type ExperienceItemType = {
  year: string;
  title: string;
  description: string;
};

const experiences: ExperienceItemType[] = [
  {
    year: "2023 - Présent",
    title: "Fondateur - Mon Ordi",
    description:
      "Conception et développement de l'idée business, Pilotage de l’entreprise, Élaboration de stratégies commerciales et gestion financière, Motivation et gestion de l'équipe",
  },
  {
    year: "2023 - 2024",
    title: "Bachelor Développement Web 1ère année - HETIC",
    description:
      "Formation en développement web avec focus sur les technologies Frontend et Backend et des projets pratiques en équipe.",
  },
  {
    year: "2024 - 2025",
    title: "Bachelor Développement Web 2ème année - HETIC",
    description:
      "Approfondissement des compétences en développement web, projets avancés et technologies modernes.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);

  return (
    <section
      id="formation"
      ref={ref}
      className="relative container mx-auto px-4 md:px-8 lg:px-40 py-16"
    >
      {/* Titre principal */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-blue-400 mb-10"
      >
        // Mon Parcours
      </motion.h2>

      {/* Timeline container */}
      <div className="relative  ml-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} index={index} />
        ))}

        {/* Ligne verticale animée */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-green-400 via-cyan-400 to-transparent"
        />
      </div>
    </section>
  );
};

type ItemProps = {
  exp: ExperienceItemType;
  index: number;
};

const ExperienceItem = ({ exp, index }: ItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="mb-12 relative pl-8"
    >
      {/* Repère circulaire */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="absolute -left-[10px] top-1 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center"
      >
        <FaCircle className="text-green-900 text-[6px]" />
      </motion.div>

      {/* Contenu */}
      <span className="text-sm text-gray-400">{exp.year}</span>
      <h3 className="text-lg md:text-xl font-semibold text-white">
        {exp.title}
      </h3>
      <p className="text-gray-300 mt-2 text-sm md:text-base">
        {exp.description}
      </p>
    </motion.div>
  );
};

export default ExperienceSection;
