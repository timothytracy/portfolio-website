import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import RotatingCubeArray from "../components/RotatingCubeArray";
import Link from "next/link";

const Bio:React.FC = () => {
    return (
            <div className="flex flex-col lg:h-screen px-5 py-10 lg:py-24">
                <div className="flex flex-col  h-3/4  ">
                    <div className="flex flex-col h-1/2 justify-center p-4">
                        <h1 className='text-3xl lg:text-4xl'>
                            Timothy Tracy
                        </h1>
                        <h2 className='text-xl'>
                            Software Engineering Intern
                        </h2>
                        <p className="text-neutral-400">
                            &quot;Where code flows from the heart and ideas shape the future&quot;
                        </p>
                    </div>
                    <div className="flex flex-col p-5">
                        <RotatingCubeArray dimension={3} />
                    </div>
                </div>
                

                <div className="flex flex-col h-full items-start justify-center">

                    <Link href={"#about"} >
                        <Button variant='link'  >About</Button>
                    </Link>

                    <Link href={"#experience"}  >
                        <Button variant='link'  >Experience</Button>
                    </Link>

                    <Link href={"#projects"} >
                        <Button variant='link'  >Projects</Button>
                    </Link>

                    <Link href={"#education"} >
                        <Button variant='link'  >Education</Button>
                    </Link>

                    <Link href={"https://github.com/timothytracy"} target="_blank" rel="noopener noreferrer" >
                        <Button variant='link'  ><FaGithub /> GitHub</Button>
                    </Link>

                    <Link href={"https://www.linkedin.com/in/timothy-tracy-0aab301b6/"} target="_blank" rel="noopener noreferrer" >
                        <Button variant='link'  ><FaLinkedin /> LinkedIn</Button>
                    </Link>

                </div>

                

            </div>
        );
}

export default Bio;