import './ReactiveCardOneSide.css'

interface ReactiveCardProps {
    children: React.ReactNode;
}

const ReactiveCardOneSide: React.FC<ReactiveCardProps> = ({ children }) => {
    return (
        <>
        <div className='container playing flex w-[300px] sm:w-[480px] h-[600px] transition-all'>

            
            <div id='card' className="
            shadow-2xl 
            flex-grow 
            items-stretch 
            justify-center 
            items-middle 
            h-full  
            rounded-3xl 
            transition-all 
            
            
            
            ">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
                
                <div className='content scrollableContent'>
                {children}
                </div>
                
            </div>
            </div>
        </>


    )
}




export default ReactiveCardOneSide