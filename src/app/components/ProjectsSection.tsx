// src/components/ProjectsSection.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projectsData";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-[180px]">
        <h2 className="text-3xl font-bold text-blue-400 mb-10">// Mes Projets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
