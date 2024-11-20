import { Button } from "@/components/ui/button";
import ProjectCard from "./portfolio/ProjectCard";
import { FaGithub } from "react-icons/fa";
import ExpandableText from "./components/ExpandableText";
import ExpandableSection from "./components/ExpandableText";


export default function Portfolio() {
  return (
    

      <div className=" ">
       <ExpandableSection title='projects' maxHeight="400px">
          <ProjectCard >
            <ProjectCard.Header>
              <ProjectCard.Header.Title>
                6Degrees
              </ProjectCard.Header.Title>
              <ProjectCard.Header.Subtitle>
                Social Media Startup
              </ProjectCard.Header.Subtitle>
              <ProjectCard.Header.Tags>
                Next.js, Express.js, Neo4j, Redis
              </ProjectCard.Header.Tags>
            </ProjectCard.Header>

            <ProjectCard.Body>
                <ExpandableSection title='info'>
                    <p>Ever wondered where your posts actually go on social media? 6Degrees lets you find out in the most exciting way possible! This isn&apos;t just another social platform – it&apos;s a revolutionary way to watch your content travel through real connections in real-time. Here&apos;s what makes it magical: Every time you share something on 6Degrees, you can actually track its journey as it spreads from person to person. Watch your ideas ripple through networks of people in a stunning distribution graph that shows exactly how your content connects the world. Getting started is a breeze – just sign in with your Google account and you&apos;re ready to go! Ready to make waves? Create your first post and share it with friends. We can&apos;t wait to see where your content travels</p>
                </ExpandableSection>
            

<></>            </ProjectCard.Body>

            <ProjectCard.Footer className="flex-wrap">
              <Button variant='secondary'>Visit</Button>
              <Button variant='link'><FaGithub />Frontend</Button>
              <Button variant='link'><FaGithub />Backend</Button>
            </ProjectCard.Footer>
          </ProjectCard>

          <ProjectCard>
            <ProjectCard.Header>
              <ProjectCard.Header.Title>
                Neogma - (In Progress)
              </ProjectCard.Header.Title>
              <ProjectCard.Header.Subtitle>
                Typescript Object Graph Mapper (OGM) for Neo4j Graph Database            </ProjectCard.Header.Subtitle>
              <ProjectCard.Header.Tags>
                Typescript, Neo4j
              </ProjectCard.Header.Tags>
            </ProjectCard.Header>

            <ProjectCard.Body><></>
            </ProjectCard.Body>

            <ProjectCard.Footer>
              <Button variant='link'>Github</Button>
              <Button variant='link'>NPM</Button>

            </ProjectCard.Footer>
          </ProjectCard>

          <ProjectCard>
            <ProjectCard.Header>
              <ProjectCard.Header.Title>
                ChronoFlow - (In Progress)
              </ProjectCard.Header.Title>
              <ProjectCard.Header.Subtitle>
                Workflow & Task Management Startup           </ProjectCard.Header.Subtitle>
              <ProjectCard.Header.Tags>
                Next.js, Express.js, PostgreSQL, Redis
              </ProjectCard.Header.Tags>
            </ProjectCard.Header>

            <ProjectCard.Body>
            <ExpandableSection>
              <p>Ever wondered where your posts actually go on social media? 6Degrees lets you find out in the most exciting way possible! This isn&apos;t just another social platform – it&apos;s a revolutionary way to watch your content travel through real connections in real-time. Here&apos;s what makes it magical: Every time you share something on 6Degrees, you can actually track its journey as it spreads from person to person. Watch your ideas ripple through networks of people in a stunning distribution graph that shows exactly how your content connects the world. Getting started is a breeze – just sign in with your Google account and you&apos;re ready to go! Ready to make waves? Create your first post and share it with friends. We can&apos;t wait to see where your content travels!</p>
              </ExpandableSection>
            </ProjectCard.Body>

            <ProjectCard.Footer>
              <Button variant='link'>Github</Button>
              <Button variant='link'>NPM</Button>

            </ProjectCard.Footer>
          </ProjectCard>
          </ExpandableSection>
        </div>


  );
}
