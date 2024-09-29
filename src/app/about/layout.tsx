import RotatingCubeArray from "../components/RotatingCubeArray";

import './../../app/globals.css'
export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

        <div className="noScrollBar flex flex-col-reverse h-screen lg:flex-row">
            <div className="noScrollBar flex flex-col justify-start items-center h-2/3 w-full lg:w-2/4 lg:h-full md:overflow-scroll">
                
                {children}
            
            </div>
            <div className='flex w-full h-1/3 lg:w-2/4 lg:h-full justify-center items-center '>
                <div className="flex justify-center items-center">
                    <RotatingCubeArray dimension={3} />
                </div>
            </div>
        </div>


        </>


    );
}
