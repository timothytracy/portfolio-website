interface MainAreaProps {
    children: React.ReactNode;
    className?: string;
}
export const MainAreaLayout: React.FC<MainAreaProps> = ({ children, className }) => {
    return (
        <div id='safe-area' className={
            `
                flex 
                flex-grow 
                min-h-full 
                w-full
                h-auto
                
                
                ${className || ''}
            `
        }
        
        >
            {children}
        </div>
    );
}

