import React from 'react';
import ExperienceCard from "../components/cards/experience-card/ExperienceCard";
import TimeProgressBar from "../components/time-progress-bar/TimeProgressBar";
import ReactiveCardOneSide from '../components/cards/hover-card/ReactiveCardOneSide';

export default function About() {
    const globalLongestTime = "2019-06-01";
    const cardData = [
        {
            title: 'Programming Languages',
            longestTime: "2019-06-01",
            items: [
                { name: 'Java', startDate: "2019-06-01" },
                { name: 'HTML / CSS / JavaScript / TypeScript', startDate: "2019-09-01" },
                { name: 'Python', startDate: "2019-11-01" },
                { name: 'C++', startDate: "2020-01-01" },
                { name: 'C#/.NET', startDate: "2024-05-01" },
            ]
        },
        {
            title: 'Frontend Frameworks',
            longestTime: "2023-04-01",
            items: [
                { name: 'React', startDate: "2023-04-01" },
                { name: 'Next.js', startDate: "2023-04-01" },
                { name: 'React Native/Expo', startDate: "2024-04-01" },
                { name: 'Angular', startDate: "2024-05-01" },
            ]
        },
        {
            title: 'Backend Frameworks',
            longestTime: "2023-04-01",
            items: [
                { name: 'Express.js', startDate: "2023-04-01" },
                { name: 'Spring-Boot', startDate: "2024-01-01" },
                { name: 'ASP.NET', startDate: "2024-05-01" },
                { name: 'Flask', startDate: "2024-07-01" },
            ]
        },
        {
            title: 'Technologies',
            longestTime: "2021-02-01",
            items: [
                { name: 'Node.js', startDate: "2021-02-01" },
                { name: 'Docker', startDate: "2023-04-01" },
                { name: 'Kubernetes', startDate: "2023-04-01" },
                { name: 'Redis', startDate: "2024-08-01" },
                { name: 'NGINX', startDate: "2024-08-01" },
            ]
        },
        {
            title: 'Databases',
            longestTime: "2023-04-01",
            items: [
                { name: 'MySQL', startDate: "2023-04-01" },
                { name: 'PostgreSQL', startDate: "2024-04-01" },
                { name: 'Neo4j', startDate: "2024-04-01" },
            ]
        },
        {
            title: 'Concepts',
            longestTime: "2023-04-01",
            items: [
                { name: 'Relational Databases', startDate: "2023-04-01" },
                { name: 'Agile / Software Development Lifecycle', startDate: "2024-01-01" },
                { name: 'CI/CD', startDate: "2024-04-01" },
            ]
        }
    ];

    return (
        <div className="flex flex-col p-5 w-full h-full justify-center items-center space-y-10">
            <div className='flex flex-col w-full md:w-3/4 lg:w-2/3 xl:w-1/2 justify-center p-5 md:py-5 border-4 border-neutral-700 dark:border-neutral-200 rounded-xl '>
                <h1 className="text-3xl font-bold mb-8 text-center ">About Me</h1>

                <p className="mb-8">
                    I am a well-rounded software engineer with a passion for web engineering.
                    I have experience in object-oriented programming, functional programming, and web development.
                    Feel free to browse my programming experience.
                </p>
            </div>


            <div className="flex flex-wrap justify-center lg:w-3/4 items-center fill-faded-poster-100">
                {cardData.map((card, index) => (
                    <div key={index} className="">
                        <ExperienceCard title={card.title} className="h-full">
                            {card.items.map((item, itemIndex) => (
                                <>

                                    <TimeProgressBar
                                        key={itemIndex}
                                        startDate={item.startDate}
                                        longestTime={card.longestTime}
                                    >
                                        {item.name}
                                    </TimeProgressBar>

                                </>

                            ))}
                        </ExperienceCard>
                    </div>
                ))}
            </div>
        </div>
    );
}