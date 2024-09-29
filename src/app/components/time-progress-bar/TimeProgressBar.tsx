'use client'
import React, { useState, useEffect, useRef } from 'react';

interface TimeProgressBarProps {
  startDate: string;
  longestTime: string;
  children: React.ReactNode;
  tailwindColor?: string;
}

interface ProgressState {
  years: number;
  months: number;
  totalProgress: number;
}

const TimeProgressBar: React.FC<TimeProgressBarProps> = ({ startDate, longestTime, children, tailwindColor }) => {
  const [progress, setProgress] = useState<ProgressState>({ years: 0, months: 0, totalProgress: 0 });
  const [minWidth, setMinWidth] = useState<number>(0);
  const timeRef = useRef<HTMLParagraphElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const classProps = `absolute top-0 left-0 h-full ${tailwindColor || 'bg-gradient-to-r from-electron-blue-500 to-exodus-fruit-500 dark:bg-gradient-to-r dark:from-robins-egg-blue-600 dark:to-electron-blue-500'} rounded-full transition-all duration-500 ease-out flex items-center`

  const body = `${children ? `${children}` : ''}`
  const time = `${progress.years > 0 ? `${progress.years} year${progress.years !== 1 ? 's' : ''}, ` : ''}${progress.months} month${progress.months !== 1 ? 's' : ''}`

  useEffect(() => {
    const calculateProgress = (): void => {
      try {
        const start = new Date(startDate);
        const longest = new Date(longestTime);
        const now = new Date();

        if (isNaN(start.getTime()) || isNaN(longest.getTime())) {
          throw new Error('Invalid date');
        }

        const diff = now.getTime() - start.getTime();
        const longestDiff = now.getTime() - longest.getTime();

        const totalMonths = diff / (1000 * 60 * 60 * 24 * 30.44); // Average month length
        const longestMonths = longestDiff / (1000 * 60 * 60 * 24 * 30.44);

        const years = Math.floor(totalMonths / 12);
        const months = Math.floor(totalMonths % 12);
        const totalProgress = (totalMonths / longestMonths) * 100;
        
        setProgress({ years, months, totalProgress: Math.min(totalProgress, 100) });
      } catch (error) {
        console.error('Error calculating progress:', error);
        setProgress({ years: 0, months: 0, totalProgress: 0 });
      }
    };

    calculateProgress();
    const timer = setInterval(calculateProgress, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, [startDate, longestTime]);

  useEffect(() => {
    if (timeRef.current && barRef.current) {
      const timeWidth = timeRef.current.offsetWidth;
      const barWidth = barRef.current.offsetWidth;
      const newMinWidth = Math.max((timeWidth + 16) / barWidth * 100, progress.totalProgress); // Added 16px for padding
      setMinWidth(newMinWidth);
    }
  }, [progress, time]);

  return (
    <div className="w-full antialiased">
      <div className="mb-1">
        <h6 className="text-wrap break-words">
          {body}
        </h6>
      </div>
      <div ref={barRef} className="relative h-8 bg-gray-200 rounded-full overflow-hidden shadow-xl">
        <div 
          className={classProps}
          style={{ width: `${Math.max(minWidth, progress.totalProgress)}%` }}
        >
          <p ref={timeRef} className='mx-2 text-white text-sm whitespace-nowrap'>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeProgressBar;