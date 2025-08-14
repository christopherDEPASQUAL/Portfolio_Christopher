import Image from "next/image";
import { FaReact, FaPhp, FaJsSquare, FaDatabase, FaPython} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiShopify, SiMysql,SiFlask, SiMongodb  } from "react-icons/si";

export interface Project {
  title: string;
  description: string;
  image: string;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  tech: { icon: JSX.Element; name: string }[];
}



export const projects: Project[] = [
  {
    title: "ParisEcran",
    description:
      "Application web servant à la fois de vitrine pour les films à l'affiche et de portail de réservation pour les séances de cinéma",
    image: "/ParisEcran.png",
    date: "15 Décembre 2024",
    githubUrl: "https://github.com/Woodiss/ParisEcran",
    tech: [
      { icon: <FaPhp color="#777BB4" />, name: "PHP" },         
      { icon: <SiMysql color="#4479A1" />, name: "MySQL" },      
      { icon: <FaDatabase color="#F29111" />, name: "SQL" },     
      { icon: <FaJsSquare color="#F7DF1E" />, name: "JavaScript" },
    ],
  },
  {
    title: "Condorcet",
    description:
      "Application web de vote basée sur la méthode condorcet, permettant la création et la gestion de scrutins",
    image: "/condorcet.png",
    date: "17 Janvier 2025",
    githubUrl: "https://github.com/The-Leyn/Condorcet",
    tech: [
      { icon: <SiFlask color="#000000" />, name: "Flask" },
      { icon: <SiMongodb color="#47A248" />, name: "PyMongo" },
      { icon: <FaPython color="#0A9EDC" />, name: "PyTest" },
      { icon: <FaPython color="#0A9EDC" />, name: "Python" },
      
    ],
  },

    {
    title: "Git from Scratch",
    description:
      "Reproduction des commandes porcelaines et plombières de Git",
    image: "/git_scratch.png",
    date: "23 Juillet 2025",
    githubUrl: "https://github.com/Woodiss/hetic_git/tree/dp/feature/commit-tree",
    tech: [
      { icon: <FaPython color="#0A9EDC" />, name: "Python" },
    ],
  },

    {
    title: "Mon Ordi",
    description:
      "Site e-commerce de vente d'ordinateurs et accessoires développé pour l'entreprise Mon Ordi",
    image: "/monordi.png",
    date: "01 Mai 2025",
    githubUrl: "https://monordi.ci/",
    tech: [
      { icon: <SiShopify />, name: "Shopify" },
    ],
  },

];
