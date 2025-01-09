import React from 'react';
import Image from 'next/image';

interface WorkCardProps {
  readonly project: {
    readonly title: string;
    readonly employer: string;
    readonly start_date: string;
    readonly end_date: string;
    readonly description: string;
    readonly image?: string;
    readonly stars: number;
    readonly technologies: readonly string[];
    readonly link?: string;
  },
  children?:React.ReactNode;
}

// Sample project data
const WORK = [
    {
        title: "Software Engineer Intern",
        employer: "Cardinal Security Inc.",
        start_date: "August 2024",
        end_date: "Present",
        description: "At Cardinal Security, I am developing API Clients and Collectors in Go to expand the platform's supported features and analytic reporting capabilities.",
        image: "/cardinal.jpg",
        stars: 670,
        technologies: ["Go", "Concurrency", "REST API"],
        link: "https://6degrees.app/posts/bright-inexpensive-salesmen?source_sharenode_username=timtracy5275"
      },
      {
        title: "IT Engineer",
        employer: "SynthesisVR Inc.",
        start_date: "July 2023",
        end_date: "July 2024",
        description: "Onboarded 150+ new clients increasing the clientele base by 20% \n- Led black-box testing efforts, generating detailed bug reports and feature requests\n- Authored over 50 documentation articles increasing customer comprehension and decreasing common email questions by 42%, reducing unnecessary support tickets",
        image: "/synthesis.jpg",
        stars: 670,
        technologies: [],
        link: "https://6degrees.app/posts/bright-inexpensive-salesmen?source_sharenode_username=timtracy5275"
      },
  
] as const;

export const WorkCard: React.FC<WorkCardProps> = ({ project, children }) => {
  return (
    <div className="w-full max-w-4xl  rounded-lg p-6 flex flex-col md:flex-row gap-6">
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
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-white">
            {project.title}
          </h2>
          <h3 className="text-lg font-semibold text-amber-300">
            {project.employer}
            </h3>
            <h4 className="text-base text-neutral-300">
{project.start_date} - {project.end_date}
            </h4>
          {/* <ArrowUpRight className="w-5 h-5 text-slate-400" /> */}
          
        </div>
       

        {/* Description */}
        <p className="text-neutral-400 mb-6 flex-grow">
          {project.description}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-2 mb-4">
          {children}
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
const WorkShowcase: React.FC = () => {
  return (
    <div id="experience" className="flex flex-col gap-6 p-6  min-h-screen">
      {WORK.map((project, index) => (
        <WorkCard key={index} project={project} />
      ))}
    </div>
  );
};

export default WorkShowcase;