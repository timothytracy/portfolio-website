/* eslint-disable react/display-name */
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

interface CardProps {
    children: React.ReactNode;
}

interface HeaderProps extends CardProps {
    className?: string;
}

interface BodyProps extends CardProps {
    className?: string;
}
interface TagsProps extends CardProps {
    className?: string;
}
interface FooterProps extends CardProps {
    className?: string;
}

interface TitleProps extends CardProps {
    className?: string;
}

interface SubtitleProps extends CardProps {
    className?: string;
}

interface ActionsProps extends CardProps {
    className?: string;
}

interface CardComposition {
    Header: React.FC<HeaderProps> & {
        Title: React.FC<TitleProps>;
        Subtitle: React.FC<SubtitleProps>;
        Actions: React.FC<ActionsProps>;
        Tags: React.FC<TagsProps>;

    };
    Body: React.FC<BodyProps>;
    Footer: React.FC<FooterProps>;
}

const ProjectCard: React.FC<CardProps> & CardComposition = ({ children }) => {
    const header = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === ProjectCard.Header
    );
    const body = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === ProjectCard.Body
    );
    const footer = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === ProjectCard.Footer
    );

    return (
        <div className='w-full p-1 rounded-2xl '>
            {header || <></>}
            {body || children}
            {footer || <></>}
        </div>
    );
};

const Header: React.FC<HeaderProps> & {
    Title: React.FC<TitleProps>;
    Subtitle: React.FC<SubtitleProps>;
    Actions: React.FC<ActionsProps>;
    Tags: React.FC<TagsProps>;
} = ({ children, className = '' }) => {
    return (
        <div className={`card-header p-4 sm:min-h-[20%]  ${className}`}>
            {children}
        </div>
    );
};

Header.Title = ({ children, className = '' }: TitleProps) => { 
    Header.Title.displayName = 'Header.Title'
    return (
    <p className={`text-2xl ${className}`}>{children}</p>
);}

Header.Subtitle = ({ children, className = '' }: SubtitleProps) => {
    Header.Subtitle.displayName = 'Header.Subtitle'

    return (
    <p className={`text-sm ${className}`}>{children}</p>
)};
Header.Tags = ({ children, className = '' }: TagsProps) => {
    return (
    <div className={`flex w-full pt-5 ${className}`}>{children}</div>
)};
Header.Tags.displayName = 'Header.Subtitle'


Header.Actions = ({ children, className = '' }: ActionsProps) => {
    return (
    <div className={`mt-2 flex justify-end ${className}`}>{children}</div>
)};
   Header.Actions.displayName = 'Header.Actions'


ProjectCard.Header = Header;

ProjectCard.Body = ({ children, className = '' }: BodyProps) => {
    return (
    <div className={`card-body p-4 flex-grow overflow-auto noScrollBar scrollable-content ${className}`}>
        {children}
    </div>
)};
ProjectCard.Body.displayName='ReactiveCardOneSide.Body'


 ProjectCard.Footer = ({ children, className = '' }: FooterProps) => (
    <div className={`flex w-full justify-center p-5 ${className}`}>
        {children}
    </div>
);
ProjectCard.Footer.displayName='ReactiveCardOneSide.Footer'


 
export default ProjectCard;