import React from "react";
import { Project } from "@/data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaGlobe} from "react-icons/fa";
import Image from "next/image";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className=" bg-primary border border-gray-700  rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-blue-500/40 transition-shadow">
        <div className="flex gap-4 relative group">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="object-cover w-full h-48 sm:h-64 lg:h-72 rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}

      </div>

      <div className="p-5 ">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-emerald-500">{project.title}</h3>
          <span className="text-sm text-gray-400">{project.date}</span>
        </div>

        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-1 text-sm text-gray-300"
            >
              {t.icon}
              {t.name}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {project.githubUrl.includes("github.com") ? (
                <FaGithub size={20} />
              ) : (
                <FaGlobe size={20} />
              )}
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
