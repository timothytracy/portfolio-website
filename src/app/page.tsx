import { Separator } from "@/components/ui/separator";
import EducationShowcase from "./EducationCard";
import ProjectShowcase from "./ProjectCard";
import WorkShowcase from "./WorkCard";


export default function Home() {
  return (
    <div className="flex flex-col h-full  w-full text-neutral-400 lg:py-20">
      <p className="py-4 lg:p-6">
        With five years of coding experience and a foundation in computer science fundamentals, I&apos;ve found my true calling in web engineering. What drives me is the web&apos;s incredible power to reach anyone, anywhere - where a single URL can connect your creation to millions of users worldwide.
        <br /><br />
        Currently, I&apos;m working as a Software Engineer Intern at Cardinal Security, where I develop API clients and collectors using Go. This role allows me to contribute to expanding the platform&apos;s capabilities while gaining hands-on experience with enterprise-level software development.        {/* As a full-stack developer, I thrive on building complete digital experiences from the ground up. My journey began with data structures and algorithms, giving me a strong theoretical foundation. Today, I channel that knowledge into crafting accessible, universal web solutions that span frontend interfaces, backend systems, and database architectures. */}
        <br /><br />
        I&apos;m completing my undergraduate degree in Computer Science at California State University Northridge, expecting to graduate in May 2025. My academic journey has equipped me with strong theoretical foundations while my practical experience has allowed me to apply these principles to real-world challenges.
        <br /><br />
        I believe in the democratizing power of the web - where innovative ideas can reach users regardless of their device or platform. Every project I take on is driven by this vision: creating solutions that are not just technically sound, but universally accessible to anyone with a browser.
      </p>

      <Separator className="my-4 " />

      <WorkShowcase></WorkShowcase>

      <Separator className="my-4 " />

      <ProjectShowcase></ProjectShowcase>        
      
      <Separator className="my-4 " />

      <EducationShowcase></EducationShowcase>




    </div>

  );
}
