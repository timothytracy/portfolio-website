import React from 'react';
import './ReactiveCardOneSide.css';

interface CardProps {
    children: React.ReactNode;
}

interface HeaderProps extends CardProps {
    className?: string;
}

interface BodyProps extends CardProps {
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
    };
    Body: React.FC<BodyProps>;
    Footer: React.FC<FooterProps>;
}

const ReactiveCardOneSide: React.FC<CardProps> & CardComposition = ({ children }) => {
    const header = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === ReactiveCardOneSide.Header
    );
    const body = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === ReactiveCardOneSide.Body
    );
    const footer = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === ReactiveCardOneSide.Footer
    );

    return (
        <div className='container playing flex w-[300px] h-[400px] sm:w-[400px] sm:h-[550px] transition-all'>
            <div id='card' className="
                shadow-2xl 
                flex-grow 
                flex
                flex-col
                items-stretch 
                justify-start
                h-full  
                rounded-3xl 
                transition-all 
            ">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                
                <div className='content flex flex-col h-full'>
                    {header || <></>}
                    {body || children}
                    {footer || <></>}
                </div>
            </div>
        </div>
    );
};

const Header: React.FC<HeaderProps> & {
    Title: React.FC<TitleProps>;
    Subtitle: React.FC<SubtitleProps>;
    Actions: React.FC<ActionsProps>;
} = ({ children, className = '' }) => {
    return (
        <div className={`card-header p-4 sm:min-h-[20%]  ${className}`}>
            {children}
        </div>
    );
};

Header.Title = ({ children, className = '' }: TitleProps) => (
    <h4 className={`${className}`}>{children}</h4>
);

Header.Subtitle = ({ children, className = '' }: SubtitleProps) => (
    <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
);

Header.Actions = ({ children, className = '' }: ActionsProps) => (
    <div className={`mt-2 flex justify-end ${className}`}>{children}</div>
);

ReactiveCardOneSide.Header = Header;

ReactiveCardOneSide.Body = ({ children, className = '' }: BodyProps) => (
    <div className={`card-body p-4 flex-grow overflow-auto noScrollBar scrollable-content ${className}`}>
        {children}
    </div>
);

ReactiveCardOneSide.Footer = ({ children, className = '' }: FooterProps) => (
    <div className={`card-footer p-4 border-t mt-auto ${className}`}>
        {children}
    </div>
);

export default ReactiveCardOneSide;