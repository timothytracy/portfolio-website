
import ExperienceCard from "../components/cards/experience-card/ExperienceCard";

import TimeProgressBar from "../components/time-progress-bar/TimeProgressBar";


export default function About() {
    const longestTime = "2019-06-01"
    return (
        <>
            <h1 className="m-8">About Me</h1>

            <div className="space-y-4">
                <p>
                    Welcome to our About page. Here you can add your content, such as
                    paragraphs, images, or any other components you'd like to include.
                </p>
                <p>
                    The layout will adjust based on the screen size, working seamlessly
                    with the responsive Header component.
                </p>
            </div>
           
            <div className='flex flex-col items-center justify-center lg:flex-row  lg:justify-start'>
                <ExperienceCard title='Programming Languages' width='500px' height='600px'>
                    <TimeProgressBar startDate="2019-06-01" longestTime={longestTime} >Java</TimeProgressBar>
                    <TimeProgressBar startDate="2019-011-01" longestTime={longestTime} >Python</TimeProgressBar>
                    <TimeProgressBar startDate="2019-09-01" longestTime={longestTime}>HTML / CSS / JavaScript / TypeScript</TimeProgressBar>
                    <TimeProgressBar startDate="2020-01-01" longestTime={longestTime} >C++</TimeProgressBar>
                    <TimeProgressBar startDate="2024-05-01" longestTime={longestTime}>C#/.NET</TimeProgressBar>

                </ExperienceCard>

                <ExperienceCard title='Frameworks' width='500px' height='600px'>
                    <TimeProgressBar startDate="2021-02-01" longestTime={longestTime}>Node.js</TimeProgressBar>
                    <TimeProgressBar startDate="2023-04-01" longestTime={longestTime} >React</TimeProgressBar>
                    <TimeProgressBar startDate="2023-04-01" longestTime={longestTime} >Express.js</TimeProgressBar>

                    <TimeProgressBar startDate="2024-05-01" longestTime={longestTime} >Angular</TimeProgressBar>
                    
                    <TimeProgressBar startDate="2024-01-01" longestTime={longestTime}>Spring-Boot</TimeProgressBar>
                    <TimeProgressBar startDate="2024-07-01" longestTime={longestTime}>Flask</TimeProgressBar>

                </ExperienceCard>
                <ExperienceCard title='Technologies' width='500px' height='600px'>
                    <TimeProgressBar startDate="2023-04-01" longestTime={longestTime} >Docker</TimeProgressBar>
                    <TimeProgressBar startDate="2023-04-01" longestTime={longestTime} >Kubernetes</TimeProgressBar>
                    <TimeProgressBar startDate="2024-08-01" longestTime={longestTime}>Redis</TimeProgressBar>
                    <TimeProgressBar startDate="2024-08-01" longestTime={longestTime}>NGINX</TimeProgressBar>
                </ExperienceCard>
                <ExperienceCard title='Databases' width='500px' height='600px'>
                    <TimeProgressBar startDate="2023-04-01" longestTime={longestTime} >MySql</TimeProgressBar>
                    <TimeProgressBar startDate="2024-04-01" longestTime={longestTime} >PostgreSQL</TimeProgressBar>
                    <TimeProgressBar startDate="2024-04-01" longestTime={longestTime}>Neo4j</TimeProgressBar>
                    
                </ExperienceCard>
                <ExperienceCard title='Concepts' width='500px' height='600px'>
                    <TimeProgressBar startDate="2024-01-01" longestTime={longestTime} >Agile / Software Development Lifecycle</TimeProgressBar>
                    <TimeProgressBar startDate="2024-04-01" longestTime={longestTime} >CI/CD</TimeProgressBar>
                    <TimeProgressBar startDate="2023-04-01" longestTime={longestTime}>Relational Databases</TimeProgressBar>
                    
                </ExperienceCard>


            </div>





        </>


    );
}
