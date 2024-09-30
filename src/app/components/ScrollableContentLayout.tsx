interface ScrollableContentProps {
    children: React.ReactNode;
    className?: string;
}
import './../../app/globals.css'
export const ScrollableContentLayout: React.FC<ScrollableContentProps> = ({ children, className }) => {
    return (
        <div className={
            `
            noScrollBar 
                flex 
                h-full
                w-full
                ${className || ''}
            `
        }
        
        >
            {children}
        </div>
    );
}

