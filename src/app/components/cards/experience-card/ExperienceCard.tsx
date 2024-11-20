'use client'
import React, { useState, useEffect, useRef } from 'react';
import TimeProgressBar from '../../time-progress-bar/TimeProgressBar';
import ReactiveCardOneSide from '../hover-card/ReactiveCardOneSide';

interface ExperienceCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;

}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, className, children }) => {
    return (
        <div className={`w-full h-full p-2  ${className || ''}`}>

            <ReactiveCardOneSide>
                <ReactiveCardOneSide.Header>
                <ReactiveCardOneSide.Header.Title>{title} </ReactiveCardOneSide.Header.Title>
                </ReactiveCardOneSide.Header>
                <ReactiveCardOneSide.Body>
                {children}
                </ReactiveCardOneSide.Body>
               
            </ReactiveCardOneSide>
        </div>
    );
};

export default ExperienceCard;