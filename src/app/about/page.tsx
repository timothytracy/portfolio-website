import React from 'react';
import ExperienceCard from "../components/cards/experience-card/ExperienceCard";
import TimeProgressBar from "../components/time-progress-bar/TimeProgressBar";

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
        <div className="">
            <h1 className="text-3xl font-bold mb-8">About Me</h1>
            
            <p className="mb-8">
                I am a well-rounded software engineer with a passion for web engineering. 
                I have experience in object-oriented programming, functional programming, and web development.
                Feel free to browse my programming experience.
            </p>
            
            <div className="flex flex-wrap justify-center">
                {cardData.map((card, index) => (
                    <div key={index} className="">
                        <ExperienceCard title={card.title} className="h-full">
                            {card.items.map((item, itemIndex) => (
                                <TimeProgressBar 
                                    key={itemIndex}
                                    startDate={item.startDate} 
                                    longestTime={card.longestTime}
                                >
                                    {item.name}
                                </TimeProgressBar>
                            ))}
                        </ExperienceCard>
                    </div>
                ))}
            </div>
        </div>
    );
}