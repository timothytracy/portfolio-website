interface SafeAreaProps {
    children: React.ReactNode;
    className?: string;
}
export const SafeAreaLayout: React.FC<SafeAreaProps> = ({ children, className }) => {
    return (
        <div className={
            `
                flex 
                flex-grow 
                min-h-full 
                w-full
                p-5
                ${className || ''}
            `
        }
        
        >
            {children}
        </div>
    );
}

