import { ButtonIcon } from "@radix-ui/react-icons";
import RotatingCubeArray from "./components/RotatingCubeArray";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Welcome = () => {
    return (

        <>
            <div className="flex flex-col h-screen">
                <div className="flex flex-col  h-1/2 justify-center pt-10">
                    <RotatingCubeArray dimension={3} />

                </div>
                <div className="flex flex-col justify-center pt-10">
                    <h1 className='text-2xl text-center '>
                        Hi, I'm Timothy Tracy
                    </h1>
                    <h2 className='text-xl text-center '>
                        Welcome to my portfolio
                    </h2></div>
                <div className="flex justify-center space-x-5">
                    <Button variant='outline' size={'icon'}><FaGithub /></Button>
                    <Button variant='outline' size={'icon'}><FaLinkedin/></Button>


                </div>

            </div>


        </>);
}

export default Welcome;