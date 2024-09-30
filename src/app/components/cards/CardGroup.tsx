interface CardGroupProps {
    children: React.ReactNode;
    className?: string;
}
export const CardGroup: React.FC<CardGroupProps> = ({ children, className }) => {
    return (
        
        <div className={
            `
                flex 
                flex-wrap 
                justify-center 
                transition-all 
                h-auto 
                
                ${className || ''}
            `
        }
        
        >
            {children}
        </div>
    );
}

