interface SafeAreaProps {
    children: React.ReactNode;
    className?: string;
}
export const SafeAreaLayout: React.FC<SafeAreaProps> = ({ children, className }) => {
    return (
        <div id='safe-area' className={
            `
                flex 
                flex-grow 
                min-h-full 
                w-full
                h-auto
                p-5
                ${className || ''}
            `
        }
        
        >
            {children}
        </div>
    );
}

