import './ReactiveCardOneSide.css'

interface ReactiveCardProps {
    children: React.ReactNode;
}

const ReactiveCardOneSide: React.FC<ReactiveCardProps> = ({ children }) => {
    return (
        <>
            <div id='card' className="
            bg-gradient-to-tr from-purple-800 to-bright-yarrow-700 
            flex-grow 
            items-stretch 
            justify-center 
            items-middle 
            h-full  
            rounded-3xl 
            border 
            border-5 
            border-green 
            ">
                {children}
            </div>
        </>

    )
}




export default ReactiveCardOneSide