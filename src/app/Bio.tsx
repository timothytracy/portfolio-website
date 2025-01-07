import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Bio = () => {
    return (

        <>
            <div className="flex flex-col h-screen">
                <div className="flex flex-col  h-3/4 p-4 ">
                    {/* <RotatingCubeArray dimension={3} /> */}
                    <div className="flex flex-col h-1/2 justify-center">
                        <h1 className='text-5xl'>
                            Timothy Tracy
                        </h1>
                        <h2 className='text-xl'>
                            Software Engineering Intern
                        </h2>
                        <p className="text-neutral-400">
                    &quot;Where code flows from the heart and ideas shape the future&quot;
                </p>
                    </div>
                    
                </div>

                <div className="flex justify-center space-x-5">
                    <Button variant='outline' size={'icon'}><FaGithub /></Button>
                    <Button variant='outline' size={'icon'}><FaLinkedin /></Button>
                </div>

            </div>


        </>);
}

export default Bio;