import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  readonly project: {
    readonly title: string;
    readonly description: string;
    readonly image?: string;
    readonly stars: number;
    readonly technologies: readonly string[];
    readonly link?: string;
  };
}

// Sample project data
const SAMPLE_PROJECTS = [
  {
    title: "6Degrees",
    description: "6Degrees revolutionizes social media by visualizing the real-time journey of your content across networks. Unlike traditional platforms, 6Degrees lets you track every share and interaction through a stunning distribution graph, showing exactly how your posts connect people around the world. ",
    image: "/6degrees.jpg",
    stars: 670,
    technologies: ["Next.js","React", "Express", "Neo4j", "TypeScript"],
    link: "https://spotify-profile.example.com"
  },
  {
    title: "Chronoflow (In Progress)",
    description: "Selected by College of Computer Science Faculty President to lead Agile development team, creating workflow and task management software for university faculty",
    image: "/chronoflow.jpg",
    stars: 432,
    technologies: ["Next.js","React", "Express", "PostgreSQL","Prisma ORM", "TypeScript"],
    link: "https://github-dashboard.example.com"
  }
] as const;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full max-w-4xl  rounded-lg p-6 flex gap-6">
      {/* Project Image */}
      <div className="w-64 h-48 flex-shrink-0">
        <Image 
          src={project.image || "/api/placeholder/256/192"} 
          alt={project.title}
          width={512}
          height={384}
          className="w-full h-full object-cover rounded-md border border-slate-700"
        />
       
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Title Row */}
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-2xl font-semibold text-white">
            {project.title}
          </h2>
          <ArrowUpRight className="w-5 h-5 text-slate-400" />
        </div>

        {/* Description */}
        <p className="text-neutral-400 mb-6 flex-grow">
          {project.description}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-white fill-white" />
          <span className="text-white">{project.stars}</span>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-neutral-800/50 rounded-full text-amber-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Demo component to show all projects
const ProjectShowcase: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6  min-h-screen">
      {SAMPLE_PROJECTS.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;