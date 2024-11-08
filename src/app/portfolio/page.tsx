import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";




export default function Portfolio() {
  return (
    <>

      <div className="flex flex-col h-full align-middle items-center p-5 space-y-5">
        <h1 className="text-3xl font-bold mb-8 text-center py-5">Portfolio</h1>
        <div className='flex flex-col space-y-10 w-5/6 justify-center items-center align-middle'>
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
              <p>Ever wondered where your posts actually go on social media? 6Degrees lets you find out in the most exciting way possible! This isn&apos;t just another social platform – it&apos;s a revolutionary way to watch your content travel through real connections in real-time. Here&apos;s what makes it magical: Every time you share something on 6Degrees, you can actually track its journey as it spreads from person to person. Watch your ideas ripple through networks of people in a stunning distribution graph that shows exactly how your content connects the world. Getting started is a breeze – just sign in with your Google account and you&apos;re ready to go! Ready to make waves? Create your first post and share it with friends. We can&apos;t wait to see where your content travels!</p>
            </ProjectCard.Body>

            <ProjectCard.Footer>
              <Button variant='secondary'>Go to 6degrees.app</Button>
              <Button variant='link'>Github: Frontend</Button>
              <Button variant='link'>Github: Backend</Button>
            </ProjectCard.Footer>
          </ProjectCard>

          <ProjectCard>
            <ProjectCard.Header>
              <ProjectCard.Header.Title>
                Neogma
              </ProjectCard.Header.Title>
              <ProjectCard.Header.Subtitle>
                Typescript Object Graph Mapper (OGM) for Neo4j Graph Database            </ProjectCard.Header.Subtitle>
              <ProjectCard.Header.Tags>
                Typescript, Neo4j
              </ProjectCard.Header.Tags>
            </ProjectCard.Header>

            <ProjectCard.Body>
              <p>Ever wondered where your posts actually go on social media? 6Degrees lets you find out in the most exciting way possible! This isn&apos;t just another social platform – it&apos;s a revolutionary way to watch your content travel through real connections in real-time. Here&apos;s what makes it magical: Every time you share something on 6Degrees, you can actually track its journey as it spreads from person to person. Watch your ideas ripple through networks of people in a stunning distribution graph that shows exactly how your content connects the world. Getting started is a breeze – just sign in with your Google account and you&apos;re ready to go! Ready to make waves? Create your first post and share it with friends. We can&apos;t wait to see where your content travels!</p>
            </ProjectCard.Body>

            <ProjectCard.Footer>
              <Button variant='link'>Github</Button>
              <Button variant='link'>NPM</Button>

            </ProjectCard.Footer>
          </ProjectCard>

          <ProjectCard>
            <ProjectCard.Header>
              <ProjectCard.Header.Title>
                ChronoFlow
              </ProjectCard.Header.Title>
              <ProjectCard.Header.Subtitle>
                Workflow & Task Management Startup           </ProjectCard.Header.Subtitle>
              <ProjectCard.Header.Tags>
                Next.js, Express.js, PostgreSQL, Redis
              </ProjectCard.Header.Tags>
            </ProjectCard.Header>

            <ProjectCard.Body>
              <p>Ever wondered where your posts actually go on social media? 6Degrees lets you find out in the most exciting way possible! This isn&apos;t just another social platform – it&apos;s a revolutionary way to watch your content travel through real connections in real-time. Here&apos;s what makes it magical: Every time you share something on 6Degrees, you can actually track its journey as it spreads from person to person. Watch your ideas ripple through networks of people in a stunning distribution graph that shows exactly how your content connects the world. Getting started is a breeze – just sign in with your Google account and you&apos;re ready to go! Ready to make waves? Create your first post and share it with friends. We can&apos;t wait to see where your content travels!</p>
            </ProjectCard.Body>

            <ProjectCard.Footer>
              <Button variant='link'>Github</Button>
              <Button variant='link'>NPM</Button>

            </ProjectCard.Footer>
          </ProjectCard>
        </div>








      </div>

    </>


  );
}
