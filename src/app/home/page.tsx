import RotatingCubeArray from "../components/RotatingCubeArray";

const Home = () => {
    return (
        <>
            <div className="flex flex-col-reverse h-screen lg:flex-row w-full overflow-clip">
                <div className="flex flex-col justify-center items-center h-2/3 w-full lg:w-6/10 lg:h-full ">
                    <div className='flex flex-col justify-start lg:justify-center items-center h-full w-full space-y-4 '>
                        <h1 className='text-center '>
                            Hi, I'm Timothy Tracy
                        </h1>
                        <h2 className='text-center '>
                            Welcome to my portfolio
                        </h2>
                    </div>
                </div>
                <div className='flex w-full h-1/3 lg:w-4/10 lg:h-full justify-center items-center '>
                    <div className="flex justify-center items-center ">
                        <RotatingCubeArray dimension={2} />
                    </div>
                </div>
            </div>
        </>);
}

export default Home;