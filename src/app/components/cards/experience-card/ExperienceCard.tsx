'use client'
import React, { useState, useEffect, useRef } from 'react';
import TimeProgressBar from '../../time-progress-bar/TimeProgressBar';
import ReactiveCardOneSide from '../hover-card/ReactiveCardOneSide';

interface ExperienceCardProps {
    title: string;
    children: React.ReactNode;
    width: string;
    height: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, children, width, height }) => {

    let classString = `w-[500px] h-[600px]`
    
    return (
        <div className={classString}>
            <ReactiveCardOneSide>
                <section className="flex-col w-full h-full">
                    <div className="flex"><h4>{title}</h4></div>
                    <div className="flex-grow flex flex-col  justify-center">{children}</div>
                </section>
            </ReactiveCardOneSide>
        </div>
    );
};

export default ExperienceCard;