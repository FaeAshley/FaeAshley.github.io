import { useState } from 'react';
import ParticlesBackground from "../components/Shared/ParticlesBackground";
import { projects } from "../data/projects";
import ProjectCard from "../components/Project/ProjectCard";

function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="relative min-h-screen">
        <ParticlesBackground />
        <section className="text-center min-h-screen flex justify-center px-4">
          <div className="w-full h-full max-w-5xl items-center pt-20">
              <h1 className="my-20 text-faebot-text hover:text-magenta text-4xl font-semibold">Projects</h1>
              <div className="border border-faebot-surface grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max rounded-xl px-5 py-5 ">
                  {projects.map((project) => {
                    return <ProjectCard 
                      key={project.id} 
                      project={project} 
                      isExpanded={expandedId === project.id}
                      setExpandedId={setExpandedId}
                    />;
                  })}
              </div>
          </div>
        </section>
    </div>
  );
}

export default Projects;