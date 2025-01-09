import React from 'react';
import { WorkCard } from './WorkCard';

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
const EDU = [
    {
        title: "California State University Northridge",
        employer: "B.S Computer Science",
        start_date: "",
        end_date: "Expected Graduation: May 2025",
        description: "I'm completing my undergraduate degree in Computer Science at California State University Northridge, expecting to graduate in May 2025. My academic journey has equipped me with strong theoretical foundations while my practical experience has allowed me to apply these principles to real-world challenges.",
        image: "/csun.jpg",
        stars: 670,
        technologies: ["Advanced Web Engineering", "Software Engineering", "Advanced Data Structures and Algorithms", "Database Design", "Computer Network Security", "Artificial Intelligence"],
        link: ""
      }
  
] as const;

const EducationCard: React.FC<WorkCardProps> = ({ project, children }) => {
  return (
    <WorkCard project={project}>
        {children}
    </WorkCard>
  );
};

// Demo component to show all projects
const EducationShowcase: React.FC = () => {
  return (
    <div id="education" className="flex flex-col gap-6 p-6  min-h-screen">
      {EDU.map((project, index) => (
        <EducationCard key={index} project={project} />
      ))}
    </div>
  );
};

export default EducationShowcase;