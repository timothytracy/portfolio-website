import React from 'react';
import ExperienceCard from "../components/cards/experience-card/ExperienceCard";
import TimeProgressBar from "../components/time-progress-bar/TimeProgressBar";
import { ScrollableContentLayout } from '../components/ScrollableContentLayout';
import { CardGroup } from '../components/cards/CardGroup';

export default function Work() {
    const globalLongestTime = "2019-06-01";
    const cardData = [
        {
            title: 'Software Engineer Intern',
            longestTime: "2019-06-01",
            items: [
                { name: '', startDate: "2019-06-01", body:'Engineered a SPA web widget with React that connects to the REST API and displays a client\’s VR content offerings, increasing client\’s customer conversion by 45\%\nIntegrated a cloud proxy via AWS, eliminating the need for a local machine proxy, decreasing customer onboarding time by 37% and saving $1000 in materials cost'},
                
            ]
        },
        {
            title: 'IT Engineer',
            longestTime: "2019-06-01",
            items: [
                { name: '', startDate: "2019-06-01", body:'Onboarded 150+ new clients increasing the clientele base by 20\%\nLed black-box testing efforts, generating detailed bug reports and feature requests\nAuthored 50+ documentation articles reducing unnecessary support tickets by 42\%'},
                
            ]
        }
    ];

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
            
            <p className="mb-8">
                Here are some of my work experiences
            </p>
            <ScrollableContentLayout>

           
            
            <CardGroup>
                {cardData.map((card, index) => (
                    <div key={index} className="">
                        <ExperienceCard title={card.title} className="h-full">
                            {card.items.map((item, itemIndex) => (
                                <div 
                                    key={itemIndex}
                                    
                                >
                                    {item.name}
                                    {item.body || ''}
                                </div>
                            ))}
                        </ExperienceCard>
                    </div>
                ))}
            </CardGroup>
            </ScrollableContentLayout>
        </div>
    );
}